import { AxiosResponse } from "axios";

// @ts-ignore
import { StatusCodes } from "http-status-codes";
import { is } from "~/appCommon/extendBase/impls/utils/typeInferernce";
import { BaseApiService } from "~/appCommon/base/baseApi";
import {
  IBaseApiService,
  TFuzzyResponse,
  Optional,
  BaseErrorCodes
} from "~/appCommon/base/baseApiTypes";
import { LazyHolder } from "~/appCommon/base/baseFacadeTypes";
import { facade } from "~/types/facadeTypes";
import RouterNames from "~/router/name";
import {
  ApiDataTypeResolver,
  ApiGuard,
  AuthApiGuardConfig,
  GeneralApiGuardConfig
} from "~/services/apiGuard";
import { ApiGuardConfigOptions } from "~/appCommon/base/internalApiGuardHelper";
import {
  LoginPayload,
  RefreshAuthPayload,
  ForgotPasswordPayload,
  SignupPayload,
  ResetPasswordPayload,
  UserInfoPayload,
  ErrorResponse,
  GenerateOTPPayload,
  OTPVerificationPayload,
  GenerateOTPResponse,
  OTPVerificationResponse,
  SignupPayloadResponse,
  LoginResponse,
  ThirdPartySignUpPayload,
  ThirdPartySignUpResponse,
  ThirdPartyLoginPayload,
  ThirdPartyLoginResponse,
  RefreshAuthResponse,
  ForgotPasswordResponse,
  ForgotPasswordVerificationPayload,
  ForgotPasswordVerificationResponse,
  UserInfoResponse,
  ResetPasswordResponse,
  UpdatePasswordResponse,
  UpdatePasswordPayload,
  GetAccountRes,
  PostWithdrawPayload,
  PostWithdrawResponse,
  GetWithdrawPayload,
  GetWithdrawRes,
  EditFundPasswordPayload,
  EditFundPasswordResponse,
  SetFundPasswordPayload,
  SetFundPasswordResponse,
  GetFeedbackPayload,
  GetFeedbackResponse,
  PostFeedbackPayload,
  PostFeedbackResponse,
  GetAboutUsResponse,
  GetQuestPayload,
  GetQuestRes,
  GetBalanceRes,
  PostAccountPayload,
  PostAccountRes,
  GetAccountPayload,
  DelAccountRes,
  PutAccountPayload,
  PutAccountRes,
  DelAccountPayload,
  GetGameResponse,
  SuccessResponse,
  UpdateEmailPayload,
  VerifyEmailResponse,
  UpdateEmailResponse,
  VerifyEmailPayload,
  GetQuestImgPayload,
  PostQuestPayload,
  PostQuestRes,
  getAvatarResponse,
  putAvatarPayload,
  GetQuestImgRes,
  PostUploadImgPayload,
  PostUploadImgRes,
  announcementPayload,
  announcementRes,
  RouletteResponse,
  roulettePayload,
  RouletteRandomPayload,
  RouletteRandom,
  RouletteRecordResponse,
  LoginResponseRecord,
  ThirdPartySignUpResponseRecord, ThirdPartyLoginResponseRecord, RouletteRecord, rouletteRecord
} from "~/types/apiTypes";

import { APP_CONFIGS } from "~/config";
import { EErrorCode } from "~/types/errorTypes";
import { DateExt } from "~/appCommon/base/addon";


// fixme: temporary, 由 env 傳入不要寫在這
const demoUser: LoginResponseRecord = {
  email: "abcusername@temp.com",
  id: 0,
  is_email_verified: true,
  is_set_fund_password: true,
  phone_number: "0911000111",
  refresh_token: "abctoken",
  token: "abctoken",
  username: "abcusername"
}


export class ApiService extends BaseApiService implements IBaseApiService {
  isErrorResponse(response: TFuzzyResponse): boolean {
    return Object.keys(response).contains("error_key");
  }

  isSuccessResponse(response: TFuzzyResponse): boolean {
    return (
      Object.keys(response).contains("succeed") ||
      (is.initialized((response as any).data) &&
        is.not.empty((response as any).data))
    );
  }

  //
  //     S I G N I N   /    S I G N U P
  //
  async generateOtp(payload: GenerateOTPPayload): Promise<GenerateOTPResponse> {
    return this.post("/otp", payload);
  }

  async verifyOTP(payload: OTPVerificationPayload): Promise<OTPVerificationResponse> {
    return this.post("/otp/verify", payload);
  }

  async signup(payload: SignupPayload): Promise<SignupPayloadResponse> {
    return this.post("/sign-up", payload);
  }

  async login(payload: LoginPayload): Promise<LoginResponse> {
    // fixme: temporary
    const response: LoginResponse = {data: demoUser};
    return Promise.resolve(response)
    //return this.post("/sign-in", payload);
  }

  async thirdSignUp(payload: ThirdPartySignUpPayload): Promise<ThirdPartySignUpResponse> {
    //fixme: temporary
    const record : ThirdPartySignUpResponseRecord = {
      email: demoUser.email,
      id: demoUser.id,
      phone_number: demoUser.phone_number,
      refresh_token: demoUser.refresh_token,
      token: demoUser.token,
      username: demoUser.username
    }
    const response: ThirdPartySignUpResponse = {data: record};
    return Promise.resolve(response);
    //return this.post("/sign-up/third", payload);
  }

  async thirdSignIp(payload: ThirdPartyLoginPayload): Promise<ThirdPartyLoginResponse> {
    //fixme: temporary
    const record : ThirdPartyLoginResponseRecord = {
      email: demoUser.email,
      id: demoUser.id,
      phone_number: demoUser.phone_number,
      refresh_token: demoUser.refresh_token,
      token: demoUser.token,
      username: demoUser.username
    }
    const response: ThirdPartyLoginResponse = {data: record};
    return Promise.resolve(response);
    // return this.post("/sign-in/third", payload);
  }

  async refreshAuth(payload: RefreshAuthPayload): Promise<RefreshAuthResponse> {
    return this.postRefreshToken("/user/refresh-token", payload);
  }

  //  手機送出忘記密碼請求
  async forgotPassword(payload: ForgotPasswordPayload): Promise<ForgotPasswordResponse> {
    return this.post("/password", payload);
  }

  // 驗證手機送出忘記密碼請求
  async verifyForgotPassword(payload: ForgotPasswordVerificationPayload): Promise<ForgotPasswordVerificationResponse> {
    return this.post("/password/verify", payload);
  }

  //  手機 - 重設密碼
  async resetPassword(payload: ResetPasswordPayload): Promise<ResetPasswordResponse> {
    return this.post("/password", payload);
  }

  // 使用者 - 更新密碼
  async updatePassword(payload: UpdatePasswordPayload): Promise<UpdatePasswordResponse> {
    return this.patch("/user/reset-password", payload);
  }

  async getUserInfo(payload: UserInfoPayload): Promise<UserInfoResponse> {
    return this.get("/user-info", payload);
  }

  //
  //    Q U E S T
  //
  // 取得所有任務
  async getQuest(payload: GetQuestPayload): Promise<GetQuestRes> {
    if (is.not.undefined(payload.questId)) {
      const questId = payload.questId;
      delete payload.questId;
      return this.get(`/mission/${questId}`, payload);
    } else {
      return this.get("/mission", payload);
    }
  }
  // 取得使用者上傳的任務圖片
  async getQuestImg(payload: GetQuestImgPayload): Promise<GetQuestImgRes> {
    const extra_mission_id = payload.extra_mission_id
    // @ts-ignore
    delete payload.extra_mission_id
    return this.get(`/mission/image/${extra_mission_id}`, payload);
  }
  // 承接任務
  async PostQuest(payload: PostQuestPayload): Promise<PostQuestRes> {
    const extra_mission_id = payload.extra_mission_id
    // @ts-ignore
    delete payload.extra_mission_id
    return this.post(`/mission/${extra_mission_id}`, payload);
  }
  // 上傳任務圖片
  async PostQuestImg(payload: PostUploadImgPayload): Promise<PostUploadImgRes> {
    const extra_mission_id = payload.extra_mission_id
    // @ts-ignore
    delete payload.extra_mission_id
    return this.post(`/mission/image/${extra_mission_id}`, payload);
  }

  //
  //    W I T H D R A W
  //
  async getWithdraw(payload: GetWithdrawPayload): Promise<GetWithdrawRes> {
    return this.get("/withdraw", payload);
  }

  async applyWithdraw(payload: PostWithdrawPayload): Promise<PostWithdrawResponse> {
    return this.post("/withdraw", payload);
  }

  //
  //    W A L L E T
  //
  async GetBalance(): Promise<GetBalanceRes> {
    return this.get("/wallet/balance");
  }

  //
  //    GAME
  //
  async getGame(): Promise<GetGameResponse> {
    return this.get("/game");
  }

  //
  //    A C C O U N T
  //
  async getBankAccount(payload: GetAccountPayload): Promise<GetAccountRes> {
    if (is.not.undefined(payload.id)) {
      const id = payload.id;
      delete payload.id;
      return this.get(`/account/${id}`, payload);
    } else {
      return this.get("/account", payload);
    }
  }

  async addBankAccount(payload: PostAccountPayload): Promise<PostAccountRes> {
    return this.post("/account", payload);
  }

  async DelBankAccount(payload: DelAccountPayload): Promise<DelAccountRes> {
    const account_id = payload.account_id;
    // @ts-ignore
    delete payload.account_id;
    return this.post(`/account/delete/${account_id}`, payload);
  }

  async PutBankAccount(payload: PutAccountPayload): Promise<PutAccountRes> {
    const account_id = payload.account_id;
    // @ts-ignore
    delete payload.account_id;
    return this.put(`/account/${account_id}`, payload);
  }

  //
  //      A N N O U N C E M E N T
  //
  async getAnnouncement(): Promise<announcementRes> {
      return this.get("/announcement");
  }


  //
  //      U S E R     C E N T E R
  //
  async setFundPassword(payload: SetFundPasswordPayload): Promise<SetFundPasswordResponse> {
    return this.put("/set-fund-password", payload);
  }

  async resetFundPassword(payload: EditFundPasswordPayload): Promise<EditFundPasswordResponse> {
    return this.put("/reset-fund-password", payload);
  }

  // 大頭貼

  async getAvatar(): Promise<getAvatarResponse> {
    return this.get("/user/avatar");
  }

  async putAvatar(payload: putAvatarPayload): Promise<SuccessResponse> {
    return this.put("/user/avatar", payload);
  }

  // 聯絡我們 - 取得問題回報
  async getFeedback(payload: GetFeedbackPayload): Promise<GetFeedbackResponse> {
    let url;
    if (payload.feedback_ticket_id) {
      const feedbackTicketId = payload.feedback_ticket_id;
      url = `/feedback/${feedbackTicketId}`;
    } else {
      url = "/feedback";
    }
    delete payload.feedback_ticket_id;
    return this.get(url, payload);
  }

  // 聯絡我們 - 問題回報
  async postFeedback(payload: PostFeedbackPayload): Promise<PostFeedbackResponse> {
    return this.post("/feedback", payload);
  }

  // 政策 - 關於我們
  async getAboutUs(): Promise<GetAboutUsResponse> {
    return this.get("policy/about-us");
  }

  async postVerifyEmail(payload: VerifyEmailPayload): Promise<VerifyEmailResponse> {
    return this.post("/user/email", payload);
  }

  async patchUpdateEmail(payload: UpdateEmailPayload): Promise<UpdateEmailResponse> {
    return this.patch("/user/email", payload);
  }

  //
  //    W H E E L
  //
  //

  // 假資料
  // async getWheelPrize() {
  //   DateExt.lastMonth;
  //   return {
  //     data: [
  //       // { item: "1000$", firstPrize: false },
  //       // { item: "400$", firstPrize: false },
  //       { item: "800$", firstPrize: true },
  //       { item: "7000$", firstPrize: false },
  //       { item: "5000$", firstPrize: false },
  //       { item: "300$", firstPrize: false },
  //       { item: "2000$", firstPrize: false },
  //     ]
  //   };
  // }

  async getRoulette(payload: roulettePayload): Promise<RouletteResponse> {
    //fixme: temporary
    const redundant = {
      create_datetime: "",
      end_datetime: "",
      start_datetime: "",
      update_datetime: "",
      name: "",
      reward_type: 0,
      type: 0,
    };
    const length = 8;
    let i = -1;
    const record: RouletteRecord[] = (new Array(length)).fill(0).map((_)=>{
      i ++;
      let firstPrize = i == 3;
      return {
        ...redundant,
        firstPrize,
        id: i,
        worth: ((100) + (1000) * i).toString()
      }
    });
    const response: RouletteResponse = {data: record};
    return Promise.resolve(response);
    // return this.get("/roulette", payload);
  }

  async getRouletteRandom(payload: RouletteRandomPayload): Promise<RouletteRandom> {
    //fixme: temporary
    const record: RouletteRecord = {
      create_datetime: "",
      end_datetime: "",
      firstPrize: false,
      id: 0,
      name: "",
      reward_type: 0,
      start_datetime: "",
      type: 0,
      update_datetime: "",
      worth: ""
    };
    const response: RouletteRandom = {data: record};
    return Promise.resolve(response);
    // return this.get("/roulette/random", payload);
  }

  async getRouletteRecord(): Promise<RouletteRecordResponse> {
    //fixme: temporary
    const record: rouletteRecord[] = [{
      create_datetime: "",
      record_id: 0,
      username: "",
      worth: ""
    }];
    const response: RouletteRecordResponse = {data: record};
    return Promise.resolve(response);
    // return this.get("/roulette/record");
  }

}

let _apiService: Optional<ApiService>;
let _apiConfigOption: Optional<ApiGuardConfigOptions>;

const BaseApi: ApiService = LazyHolder<ApiService>(() => {
  BaseErrorCodes.setup({
    ACCESS_TOKEN_MISSING: EErrorCode.ACCESS_TOKEN_MISSING,
    ACCESS_TOKEN_EXPIRED: EErrorCode.ACCESS_TOKEN_EXPIRED,
    DATA_MISSING: EErrorCode.DATA_MISSING,
    INVALID_PERMISSION: EErrorCode.INVALID_PERMISSION,
    USER_IS_BLOCK: EErrorCode.USER_IS_BLOCK,
    USER_NOT_VERIFY: EErrorCode.USER_NOT_VERIFY
  });

  _apiConfigOption ??= {
    authTokenGetter(): string {
      return facade.userStore.state.token;
    },

    clearUserData(): void {
      return facade.userStore.clearUserData([]);
    },

    notifyDownloaded(r): void {
      facade.appStore.notifyDownloaded("download failed");
    },

    notifyDownloadFailed(r): void {
      facade.appStore.notifyError("download failed");
    },

    notifyDownloading(r): void {
      facade.appStore.notifyDownloading("downloading");
    },

    notifyError(r: AxiosResponse): void {
      facade.appStore.notifyError(
        (r.data as ErrorResponse).error_msg ?? "uncaught error"
      );
    },

    notifySuccess(r: AxiosResponse): void {
      facade.appStore.notifySuccess("success");
    },

    refreshAuthRequester(): Promise<any> {
      console.log("refreshAuthRequester");
      return facade.userStore.refreshAuth();
    },

    refreshTokenGetter(): string {
      return facade.userStore.state.refresh_token;
    },

    userNotVerifiedRoute: {
      // fixme: 未知
      name: RouterNames.UserVerifyEmail
    },

    loginRoute: {
      name: RouterNames.LoginHome
    }
  };

  return (_apiService ??= new ApiService({
    apiDomainGetter(): string {
      return APP_CONFIGS.API_DOMAIN;
    },
    guard: new ApiGuard({
      authGuardHelper: new AuthApiGuardConfig(_apiConfigOption!),
      generalGuardHelper: new GeneralApiGuardConfig(_apiConfigOption!),
      authConfig: {} as any,
      generalConfig: {} as any
    }),
    resolver: new ApiDataTypeResolver(),
    timeout: 1000 * 10
  }));
});
export default BaseApi;
