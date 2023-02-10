import {
  Router, RouteRecord,
  RouteLocationNormalized,
  NavigationGuardNext
} from "vue-router";
import RouterNames from "~/router/name";
import {IBaseRouterGuard, IRouterInterceptor} from "~/appCommon/base/guardianTypes";
import {facade} from "~/types/facadeTypes";
import {Optional} from "~/appCommon/base/baseApiTypes";
import {RouteLocationObject} from "~/appCommon/base/vueTypes";
import {is} from "~/appCommon/extendBase/impls/utils/typeInferernce";

export class AuthGuard extends IBaseRouterGuard{
  nextGuard: Optional<IBaseRouterGuard>;
  /** 允許未授權頁面*/
  config = {
    [RouterNames.LoginLayout]:{},
    [RouterNames.LoginHome]:{    },
    [RouterNames.SignIn]:{    },
    [RouterNames.SignIn_OTP]:{    },
    [RouterNames.SignIn_ForgotPwd]:{    },
    [RouterNames.SignIn_UpdatePwd]:{    },
    [RouterNames.SignUp]:{    },
    [RouterNames.SignUp_ForgotPwd]:{    },
    [RouterNames.SignUp_OTP]:{    },
    [RouterNames.SignUp_Register]:{    },
  };

  get isAuthorized(){
    return facade.userStore.isAuthorized.value && !facade.userStore.isExpired.value;
  }

  canGoNext(to: RouteLocationNormalized): boolean {
    return this.isAuthorized;
  }

  redirectTo(to: RouteLocationNormalized): RouteLocationObject {
    console.log("redirect To".blueBG);
    const routeName = to.name as string;

    /** 如果當前 route 定義於 config 繼續 */
    if (Object.keys(this.config).contains(routeName)){

      console.log("redirect to: ", routeName);
      return to as any;
    }

    return {
      name: RouterNames.LoginHome,
      params: {
      }
    }
  }
}



export class HomeGuard extends IBaseRouterGuard{
  nextGuard: Optional<IBaseRouterGuard>;
  /** HomeGuard 不允許頁面*/
  excludes = {
    [RouterNames.LoginLayout]:{},
    [RouterNames.LoginHome]:{    },
    [RouterNames.SignIn]:{    },
    [RouterNames.SignIn_OTP]:{    },
    [RouterNames.SignIn_ForgotPwd]:{    },
    [RouterNames.SignIn_UpdatePwd]:{    },
    [RouterNames.SignUp]:{    },
    [RouterNames.SignUp_ForgotPwd]:{    },
    [RouterNames.SignUp_OTP]:{    },
    [RouterNames.SignUp_Register]:{    },
  };

  get isAuthorized(){
    return facade.userStore.isAuthorized.value
      && !facade.userStore.isExpired.value;
  }

  canGoNext(to: RouteLocationNormalized): boolean {
    return !Object.keys(this.excludes).contains(to.name as string);
  }

  redirectTo(to: RouteLocationNormalized): RouteLocationObject {
    console.log("redirect To".blueBG);
    const routeName = to.name as string;

    if (Object.keys(this.excludes).contains(routeName)){
      console.log("redirect to: ", routeName);
      if (this.isAuthorized)
        return {
          name: RouterNames.Home,
          params: {
          }
        }
    }
    return to as any;
  }
}




//
//fixme: refactoring....
//fixme: 取消 keepParams, 行為模式改用 WatchAndStore, 配合  paramReact
export class RouterInterceptor implements  IRouterInterceptor{
  static perRouteGuardian: {[K: string]: IBaseRouterGuard[]} = {};
  static generalGuardian: IBaseRouterGuard[] = [];

  /** 應用於所有  beforeRoute*/
  static addGeneralGuard(guards: IBaseRouterGuard[]){
    let prevGuard: IBaseRouterGuard;
    this.generalGuardian.addAll(guards);
    this.generalGuardian.forEach((guard) => {
      if (is.initialized(prevGuard)){
        prevGuard.nextGuard = guard;
      }
      prevGuard = guard;
    });
  }

  /** 應用於特定 routeName 下， beforeRoute*/
  static addPerRouteGuard(routeName: keyof typeof RouterNames,guards: IBaseRouterGuard[]){
    let prevGuard: IBaseRouterGuard;
    this.perRouteGuardian[routeName] ??= [];
    this.perRouteGuardian[routeName].addAll(guards);
    this.perRouteGuardian[routeName].forEach((guard) => {
      if (is.initialized(prevGuard)){
        prevGuard.nextGuard = guard;
      }
      prevGuard = guard;
    });
  }

  /** 暫存上一個 route 防 circular loop */
  pendingRoute: Optional<RouteLocationObject>;

  constructor(
    private installed: boolean = false,
  ){
  }

  get lastRoute(): Optional<RouteRecord> {
    const currentRoute = facade.router.currentRoute.value;
    const allRoutes = facade.router.getRoutes();
    const index     = allRoutes.lastIndexOf(currentRoute as any);
    if (index > 0) {
      return allRoutes [index - 1];
    }
    return undefined;
  }

  protected push(location: RouteLocationObject, to: RouteLocationNormalized, next: NavigationGuardNext){
    if (this.pendingRoute?.name == to.name && location!.name == to.name){
      next();
      console.log("next:", to);
    }else{
      console.log("push to:", location);
      facade.router.push(location!);
    }
  }

  protected beforeEachGuard(
    to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext
  ){
    if (is.not.empty(RouterInterceptor.generalGuardian)){
      const location = RouterInterceptor.generalGuardian.first.guard(to);

      console.log(
        "RouterInterceptor.generalGuardian.first:",
        RouterInterceptor.generalGuardian.first,
        "location:",
        location
      );

      if (is.initialized(location)){
        console.log("push 1");
        this.push(location!, to, next);
      }else{
        const routeName = to.name;
        const guard = RouterInterceptor.perRouteGuardian[routeName as string];

        if (is.initialized(guard)){
          const location = guard.first.guard(to);
          if (is.initialized(location)){
            console.log("push 2");
            this.push(location!, to, next);
          }else{
            console.log("next 1");
            next();
          }
        }else{
          console.log("next 2");
          next();
        }
      }
    }else{
      console.log("next 3");
      next();
    }
    // console.log('pending:', this.pendingRoute, 'to:', to);
    this.pendingRoute = to as RouteLocationObject;
  }

  install(router: Router): void {
    if (this.installed)
      return;

    router.beforeEach((to, from, next)=>{
      console.group("ROUTE".cyan);
      console.log("from:", from);
      console.log("to:", to);

      facade.paramStore.updateFromRoute({
        route: to,
        considerInterceptor: true,
      });

      this.beforeEachGuard(to, from, next);
      console.groupEnd();
    });

    router.afterEach((to, from, failure)=>{
    })
  }
}
