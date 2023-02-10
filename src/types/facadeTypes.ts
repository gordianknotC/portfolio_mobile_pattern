import Vue, { App, ComputedRef, Ref, UnwrapRef } from "vue";
import { Router } from "vue-router";

import {
  LoginPayload,
  LoginResponseRecord,
  ForgotPasswordPayload,
  SignupPayload,
  SignupResponseRecord,
  UserInfoResponseRecord,
  ForgotPasswordVerificationPayload,
  UpdatePasswordPayload,
  VerifyEmailPayload,
  UpdateEmailPayload,
  SetFundPasswordPayload,
  SetFundPasswordResponse,
  EditFundPasswordPayload,
  EditFundPasswordResponse,
  Balance
} from "~/types/apiTypes";
import {
  IBaseAppStore,
  IBaseLanguageService
} from "~/appCommon/base/baseAppStoreTypes";
import { Facade } from "~/appCommon/base/baseFacadeTypes";
import { IStoreService } from "~/appCommon/base/jsonStoreServiceType";
import BaseApi from "~/services/apiService";
import { IRouterInterceptor } from "~/appCommon/base/guardianTypes";
import { IParamStore } from "~/appCommon/base/baseParamStore";

import en from "~/assets/i18n/en";
import cn from "~/assets/i18n/cn";
import { PostTranslationHandler, VueI18n } from "vue-i18n";
import { VerifyOTPPeriodCounter } from "~/store/counter/counter";
import {Optional} from "~/appCommon/base/baseApiTypes";

export const Language = {
  "zh-cn": "cn",
  "en-US": "en"
};

export type TLanguage = "zn-ch" | "en-US";

export enum ETheme {
  light = "light",
  dark = "dark"
}

type State = TUserState;
type Login = LoginPayload;
type Update = UpdatePasswordPayload;
type Register = SignupPayload;
type Forgot = ForgotPasswordPayload;

export type TUserState = LoginResponseRecord &
  UserInfoResponseRecord &
  SignupResponseRecord & {
    authorizationDate: string;
    otpVerified: boolean;
    verifyEmail: string
};

export abstract class IUserStore<State, Login, Update, Register, Forgot> {
  abstract state: UnwrapRef<State>;
  abstract labels: Record<string, ComputedRef<string>>;

  abstract isAuthorized: ComputedRef<boolean>;
  abstract isExpired: ComputedRef<boolean>;
  abstract isVerifiedUser: ComputedRef<boolean>;

  abstract setFundPassword(
    payload: SetFundPasswordPayload
  ): Promise<SetFundPasswordResponse>;

  abstract resetFundPassword(payload: EditFundPasswordPayload): Promise<EditFundPasswordResponse>;
  abstract updateFromModel(model: Partial<State>): void;
  abstract updateFromLocalStorage(): void;
  abstract clearUserData(except: Partial<keyof State>[]): void;
  abstract login(payload: LoginPayload): Promise<boolean>;
  abstract forgotPassword(payload: Forgot): Promise<boolean>;
  abstract updatePassword(payload: Update): Promise<boolean>;
  abstract register(payload: Register): Promise<boolean>;
  abstract updateUserInfo(): Promise<any>;
  abstract notifySuccess(message: string): void;
  abstract notifyError(e: any): void;
  abstract editEmail(payload: VerifyEmailPayload | UpdateEmailPayload): Promise<boolean>;

  abstract refreshAuth(): Promise<boolean>;
  abstract verifyForgotPassword(
    payload: ForgotPasswordVerificationPayload
  ): Promise<boolean>;
  abstract isEmailVerified: ComputedRef<boolean>;
  abstract isOTPVerified: ComputedRef<boolean>;
  abstract isOTPGenerated: ComputedRef<boolean>;
  abstract isFundSettled: ComputedRef<boolean>;
  abstract counters: {
    otp: VerifyOTPPeriodCounter;
  };
}

export enum ESnack {
  success,
  error,
  info
}

export type TExtraAppState = {};
export type TAppState = {
  language: TLanguage;
  avatar: Optional<string>;
  theme: ETheme;
  inStackSnackMessage: {
    message: string;
    type: ESnack;
    duration: number;
  }[];
} & TExtraAppState;

export abstract class IAppStore extends IBaseAppStore<
  TLanguage,
  ETheme,
  TAppState
> {
  abstract lazyLoadUp(): void;
}

export abstract class ILanguageService extends IBaseLanguageService<TLanguage> {}

export type TParamStoreState = {
  name: string;
  fullPath: string;
  username: string;
  phone_number: string;
  canSendOTP: boolean;
};

export type TFacade = {
  apiService: typeof BaseApi;
  appStore: IAppStore;
  paramStore: IParamStore<TParamStoreState>;
  routerInterceptor: IRouterInterceptor;
  userLocalStoreService: IStoreService<TUserState>;
  languageService: ILanguageService;
  i18n: ComputedRef<typeof en>;
  userStore: IUserStore<State, Login, Update, Register, Forgot>;
  router: Router;
  vue: typeof Vue & {
    readonly $i18n: VueI18n;
    $t: PostTranslationHandler;
  };
};

export const facade = Facade.asProxy<TFacade>();
export const container = Facade.asProxy<TFacade>();
