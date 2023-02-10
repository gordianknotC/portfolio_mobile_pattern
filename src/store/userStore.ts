import {computed, ComputedRef, reactive} from "vue";
import { facade, IUserStore, TUserState } from "~/types/facadeTypes";
import {
  asCascadeClass,
  is
} from "~/appCommon/extendBase/impls/utils/typeInferernce";
import axios, { AxiosResponse, AxiosStatic } from "axios";
import { DebouncedFunc } from "~/appCommon/extendBase/impls/baseUserStore";
import {
  LoginPayload,
  ForgotPasswordPayload,
  SignupPayload,
  UpdatePasswordPayload,
  UserInfoResponseRecord,
  ForgotPasswordVerificationPayload,
  ErrorResponse,
  VerifyEmailPayload,
  UpdateEmailPayload,
  SuccessResponse,
  VerifyEmailResponse,
  UpdateEmailResponse,
  EditFundPasswordPayload,
  SetFundPasswordPayload, ThirdPartyLoginPayload
} from "~/types/apiTypes";
import { UnwrapRef } from "~/appCommon/base/vueTypes";
import { debounce } from "debounce";
import { DateDiff } from "~/appCommon/base/addon";
import { APP_CONFIGS } from "~/config";
import { VerifyOTPPeriodCounter } from "~/store/counter/counter";

type State = TUserState;
type Login = LoginPayload;
type Update = UpdatePasswordPayload;
type Register = SignupPayload;
type Forgot = ForgotPasswordPayload;
type ExtraField = {};

export class UserStore<
  S extends State,
  L extends Login,
  U extends Update,
  R extends Register,
  F extends Forgot
> implements IUserStore<S, L, U, R, F>
{
  state: UnwrapRef<S>;
  labels: Record<string, ComputedRef<string>>;
  isAuthorized: ComputedRef<boolean>;
  isExpired: ComputedRef<boolean>;
  isVerifiedUser: ComputedRef<boolean>;
  isEmailVerified: ComputedRef<boolean>;
  isOTPVerified: ComputedRef<boolean>;
  isOTPGenerated: ComputedRef<boolean>;
  isFundSettled: ComputedRef<boolean>;
  reAuthDebouncer: DebouncedFunc<() => Promise<boolean>>;
  counters: {
    otp: VerifyOTPPeriodCounter;
  };

  constructor(_state: UnwrapRef<S>) {
    this.state = reactive(_state) as any;
    this.state.authorizationDate = "";

    this.isExpired = computed(() => {
      const now = new Date(Date.now());
      const authDate = new Date(Date.parse(this.state.authorizationDate!));
      const diff = new DateDiff(now, authDate);
      return diff.diff > APP_CONFIGS.AUTH_EXPIRATION_IN_MINUTES * DateDiff.day;
    });

    this.isAuthorized = computed(() => {
      const a = is.not.empty(this.state.refresh_token);
      const b = is.not.empty(this.state.token);
      return a && b;
    }) as ComputedRef<boolean>;

    this.isEmailVerified = computed(() => this.state.is_email_verified);
    this.isFundSettled = computed(() => this.state.is_set_fund_password);
    this.isVerifiedUser = computed(() => {
      const a = this.state.is_email_verified;
      const b = this.state.is_set_fund_password;
      return a && b;
    });

    this.labels = {
      username: computed(() => {
        return this.state.username ?? "username";
      })
    };

    this.reAuthDebouncer = debounce(
      async () => {
        const response = await facade.apiService.refreshAuth({
          refresh_token: this.state.refresh_token
        });
        console.log("solve token:", response);

        this.state.token = facade.apiService.resolver.token(response);
        console.log("token refreshed".bgGreen);
        this.updateFromModel({ token: this.state.token } as any);
        return true;
      },
      axios.defaults.timeout! + 3000,
      true
    );

    this.counters = {
      otp: new VerifyOTPPeriodCounter()
    };

    this.isOTPVerified = computed(() => this.state.otpVerified);
    this.isOTPGenerated = this.counters.otp.counterEnabled;
    asCascadeClass(this);
  }

  async setFundPassword(
    payload: SetFundPasswordPayload
  ): Promise<SuccessResponse> {
    const result = await facade.apiService.setFundPassword(payload);
    if (result.succeed) {
      await this.updateUserInfo();
      this.notifySuccess("success");
    }
    return result;
  }

  async resetFundPassword(
    payload: EditFundPasswordPayload
  ): Promise<SuccessResponse> {
    const result = await facade.apiService.resetFundPassword(payload);
    if (result.succeed) {
      await this.updateUserInfo();
      this.notifySuccess("success");
    }
    return result;
  }

  protected catchError(e: any): boolean {
    this.notifyError(e);
    return false;
  }

  updateFromModel(model: Partial<S>) {
    Object.keys(model).forEach(key => {
      //@ts-ignore
      this.state[key] = model[key as keyof typeof model];
      // console.log(key, model[key as keyof typeof model]);
    });
    facade.userLocalStoreService.setUserModel(this.state);
  }

  updateFromLocalStorage(): void {
    const data = facade.userLocalStoreService.getUserData() as S;
    this.updateFromModel(data);
  }

  clearUserData(except: Partial<keyof S>[] = []) {
    const username = this.state.username; /// keep username
    const DEFAULT = APP_CONFIGS.DEFAULT_MODELS.USER;
    Object.keys(this.state).forEach(element => {
      if (except.contains(element as keyof S)) {
        // pass
      } else {
        //@ts-ignore
        this.state[element] = DEFAULT[element as keyof typeof DEFAULT];
      }
    });
    this.state.username = username;
    facade.userLocalStoreService.setUserModel(this.state);
  }

  async postEmail(payload: VerifyEmailPayload){
    try {
      const response = await facade.apiService.postVerifyEmail(
        payload as VerifyEmailPayload
      );
      if (response.succeed) {
        this.notifySuccess(facade.i18n.value.emailSuccessfullyVerified);
        await this.updateUserInfo();
        this.updateFromModel({ email: payload.email } as Partial<S>);
      } else {
        this.notifyError(facade.i18n.value.emailFailedToVerify);
        return false;
      }
      return true;
    } catch (e) {
      return this.catchError(e);
    }
  }

  async patchEmail(payload: UpdateEmailPayload){
    try {
      const response = await facade.apiService.patchUpdateEmail(
        payload as UpdateEmailPayload
      );
      const email = response.data.email;
      const token = response.data.token;
      this.notifySuccess("Successfully Patched!");
      await this.updateUserInfo();
      this.updateFromModel({
        email,
        token
      } as Partial<S>);
      return true;
    } catch (e) {
      return this.catchError(e);
    }

  }

  async editEmail(
    payload: VerifyEmailPayload | UpdateEmailPayload
  ): Promise<boolean> {
    if (!this.isEmailVerified.value) {
      return this.postEmail(payload as VerifyEmailPayload);
    } else {
      return this.patchEmail(payload as UpdateEmailPayload);
    }
  }

  notifySuccess(message: string) {
    facade.appStore.notifySuccess(message);
  }

  notifyError(e: string) {
    facade.appStore.notifyError(e);
  }

  async forgotPassword(payload: F): Promise<boolean> {
    console.log("call updatePassword:", payload);
    try {
      const response = await facade.apiService.forgotPassword(payload);
      this.notifySuccess(
        facade.i18n.value.forgotPasswordSuccess.format({
          name: APP_CONFIGS.PROJECT_NAME
        })
      );
      return facade.apiService.resolver.succeed(response);
    } catch (e) {
      return this.catchError(e);
    }
  }

  async verifyForgotPassword(
    payload: ForgotPasswordVerificationPayload
  ): Promise<boolean> {
    try {
      const response = await facade.apiService.verifyForgotPassword(payload);
      const succeed = facade.apiService.resolver.succeed(response);
      if (succeed) {
        this.updateFromModel({
          otpVerified: true
        } as Partial<S>);
        this.notifySuccess(facade.i18n.value.verifyOTPSuccess);
      } else {
        this.notifyError(facade.i18n.value.verifyOTPFailed);
      }
      return succeed;
    } catch (e) {
      return this.catchError(e);
    }
  }

  async updatePassword(payload: U): Promise<boolean> {
    console.log("call updatePassword:", payload);
    try {
      const response = await facade.apiService.updatePassword(payload);
      this.notifySuccess(facade.i18n.value.updatePasswordSuccess);
      return facade.apiService.resolver.succeed(response);
    } catch (e) {
      return this.catchError(e);
    }
  }

  async updateUserInfo(): Promise<any> {
    try {
      const response = await facade.apiService.getUserInfo({});
      const data = facade.apiService.resolver.data(
        response
      ) as UserInfoResponseRecord;

      console.log("updateUserInfo:", data);
      this.updateFromModel(data  as Partial<S>);
      return response;
    } catch (e) {
      return null;
    }
  }

  async login(payload: L): Promise<boolean> {
    try {
      const response = await facade.apiService.login(payload);
      const data = facade.apiService.resolver.data(response);
      this.updateFromModel(data);
      await this.updateUserInfo();
      this.notifySuccess(facade.i18n.value.loginSuccess);
      return true;
    } catch (e) {
      return this.catchError(e);
    }
  }

  // async thirdPartyLogin(payload?: ThirdPartyLoginPayload): Promise<boolean>{
  //   payload ??= {
  //     third_party: "facebook",
  //     access_token: ""
  //   }
  //   const response = await facade.apiService.thirdSignIp(payload);
  //   const data = response.data;
  // }

  async register(payload: R): Promise<boolean> {
    try {
      const response = await facade.apiService.signup(payload);
      const data = facade.apiService.resolver.data(response);
      this.updateFromModel(data);
      await this.updateUserInfo();
      this.notifySuccess(facade.i18n.value.signUpSuccess);
      return true;
    } catch (e) {
      return this.catchError(e);
    }
  }

  async refreshAuth(): Promise<boolean> {
    try {
      return this.reAuthDebouncer() as any;
    } catch (e) {
      return false;
    }
  }
}
