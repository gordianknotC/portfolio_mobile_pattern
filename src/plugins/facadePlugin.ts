import {LanguageService} from "~/services/languageService";
import {UserLocalStoreService} from "~/services/userStorageService";
import {APP_CONFIGS} from "~/config";
import {AuthGuard, HomeGuard, RouterInterceptor} from "~/services/routerGuard";
import {Facade, LazyHolder} from "~/appCommon/base/baseFacadeTypes";
import {ETheme, facade, Language, TFacade} from "~/types/facadeTypes";
import {computed} from "vue";
import apiService from "~/services/apiService";
import {UserStore} from "~/store/userStore";
import {ParamStore} from "~/store/paramStore";
import {AppStore} from "~/store/appStore";
import {getAppRouter} from "~/router/router";
import {useBuiltin} from "~/appCommon/base/builtinTypes";
import {BaseErrorCodes} from "~/appCommon/base/baseApiTypes";


export function useFacade(app: any, i18n: any, useApiGuard: boolean = true){
  useBuiltin();


  const languageService = new LanguageService();
  const userStoreService = new UserLocalStoreService(
    APP_CONFIGS.APP_IDENT,
    APP_CONFIGS,
  );

  const routerInterceptor = new RouterInterceptor();

  Facade.provide<TFacade>({
    //@ts-ignore
    i18n: computed(()=> i18n.global.messages[Language[i18n.global.locale]])
  }, true)

  Facade.provide<TFacade>({
    languageService,
    userLocalStoreService: userStoreService,
    routerInterceptor,
    apiService,
  }, true);

  const userStore =  new UserStore(
    Object.assign({}, APP_CONFIGS.DEFAULT_MODELS.USER));

  const paramStore = new ParamStore({
    fullPath: "",
    name: "",
    phone_number: "",
    username: "",
    canSendOTP: false,
  });

  Facade.provide<TFacade>({
    userStore,
    paramStore,
  }, true);

  const appStore = LazyHolder(()=>{
    return new AppStore({
      language: facade.vue.$i18n.locale as any,
      theme: ETheme.light,
      avatar: undefined,
      inStackSnackMessage: [],
    });
  });

  Facade.provide<TFacade>({
    appStore,
  }, true);

  if (!useApiGuard){

  }

  userStore.updateFromLocalStorage();

  const router = getAppRouter();
  app.use(router);

  RouterInterceptor.addGeneralGuard([
    new AuthGuard(),
    new HomeGuard()
  ]);
  routerInterceptor.install(router);

  console.log("RouterInterceptor.generalGuardian:", RouterInterceptor.generalGuardian);
  Facade.provide<TFacade>({
    router,
  }, true);
}
