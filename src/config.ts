// export const API_HOST = "http://gd.admin.api.net";
import { appConfigInit } from "~/appCommon/extendBase/appConfigs";
import { IBaseAppConfig } from "~/appCommon/base/baseAppConfigTypes";
import { ETheme, Language, TLanguage, TUserState } from "~/types/facadeTypes";
import { ERole } from "~/types/apiTypes";
import { customConfigInit } from "~/customConfig";

const DEFAULT_USER: TUserState = {
  otpVerified: false,
  authorizationDate: "",
  create_datetime: "",
  email: undefined,
  id: 0,
  is_email_verified: false,
  is_set_fund_password: false,
  nickname: undefined,
  phone_number: "",
  refresh_token: "",
  register_type: ERole.UNKNOWN,
  token: "",
  uid: "",
  username: "guest",
  verifyEmail: "",
};

const COUNTRY_CODES = {
  india: "+91",
  taiwan: "+886"
};

class AppConfig implements IBaseAppConfig<TUserState> {
  PROJECT_NAME: string = process.env.VUE_APP_TITLE!;
  API_DOMAIN: string = process.env.VUE_APP_API_HOST!;
  DATE_TEMPLATE_FOR_QUERY = "YYYYMMDD";
  DATE_TEMPLATE_FOR_UILABEL = "YYYY/MM/DD";
  APP_IDENT = "BRANDING";
  AUTH_EXPIRATION_IN_MINUTES = 60 * 5;
  DEFAULT_MODELS = {
    LANGUAGE: Language["en-US"] as TLanguage,
    COUNTRY_CODE: this.isInSimulationMode
      ? COUNTRY_CODES.taiwan
      : COUNTRY_CODES.india,
    THEME: ETheme.light,
    PAGE_INFO: {
      PER_PAGE: 10,
      INITIAL_PAGE: 1
    },
    USER: DEFAULT_USER,
    AUTH_EXPIRATION_IN_DAYS: 1,
    COUNTER: {
      SPAN: 2 * 60,
      SPAN_RETRIES: 1,
      PERIOD: 2 * 60,
      PERIOD_RETRIES: 1
    }
  };
  SIMULATIONS = {
    TEST_OTP_COUNTER: true,
    TEST_AUTH_EXPIRED: false
  };
  EXPOSE_GLOBALS = true;

  get isInDevelopMode() {
    return process.env.VUE_APP_ENV!.contains("develop");
  }
  get isInProductionMode() {
    return process.env.VUE_APP_ENV! === "production";
  }
  get isInLocalDevMode() {
    return process.env.VUE_APP_ENV! === "default";
  }
  get isInSimulationMode() {
    return process.env.VUE_APP_ENV! === "simulation";
  }
}

export const APP_CONFIGS = appConfigInit(new AppConfig()) as AppConfig;
customConfigInit(APP_CONFIGS);
