import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RouterNames from "@/router/name";
import { APP_CONFIGS } from "~/config";
import { is } from "~/appCommon/extendBase/impls/utils/typeInferernce";

export function getRouterConfig(): Record<
  string,
  Array<RouteRecordRaw> | RouteRecordRaw
> {
  /** 區分 不同使用者已授權後 */
  const userRoleSpecificRoutes: RouteRecordRaw = {
    path: "/home",
    name: RouterNames.HomeLayout,
    component: () => import("~/layout/HomeLayout.vue"),
    children: [
      //
      //    H O M E
      //
      {
        path: "",
        name: RouterNames.Home,
        component: () => import("~/views/HomePage.vue")
      },
      {
        path: "spin",
        name: RouterNames.SpinWheel,
        component: () => import("~/views/home/SpinWheel.vue")
      },
      //
      //    G A M E
      //
      {
        path: "/game",
        name: RouterNames.Game,
        component: () => import("~/views/game/Game.vue"),
      },

      //
      //    Q U E S T
      //
      {
        path: "/quest",
        name: RouterNames.Quest,
        component: () => import("~/views/quest/Quest.vue"),
      },
      {
        path: "/quest/:questId/:reward_type",
        name: RouterNames.QuestDetail,
        props: true,
        component: () => import("~/views/quest/QuestDetail.vue"),
      },
      {
        path: "/expired/quest/:questId/:reward_type",
        name: RouterNames.ExpiredQuestDetail,
        props: true,
        component: () => import("~/views/quest/ExpiredQuestDetail.vue"),
      },
      {
        path: "/quest/upload/:questId/:reward_type",
        name: RouterNames.QuestUpload,
        props: true,
        component: () => import("~/views/quest/QuestUpload.vue")
      },

      //
      //    N E W S
      //
      {
        path: "/news",
        name: RouterNames.News,
        component: () => import("~/views/news/News.vue")
      },
      {
        path: "/news/detail/:id",
        name: RouterNames.NewsDetail,
        props: true,
        component: () => import("~/views/news/NewsDetail.vue")
      },

      //
      //    U S E R    C E N T E R
      //
      {
        path: "/user",
        name: RouterNames.User,
        component: () => import("~/views/user/User.vue")
      },
      {
        path: "/contact",
        name: RouterNames.ContactLayout,
        component: () => import("@/layout/RouteView.vue"),
        children: [
          {
            path: "",
            name: RouterNames.ContactList,
            component: () => import("~/views/user/ContactList.vue")
          },
          {
            path: "/question/:feedbackTicketId",
            name: RouterNames.ContactQuestion,
            props: true,
            component: () => import("~/views/user/ContactQuestion.vue")
          },
          {
            path: "/post",
            name: RouterNames.Contact,
            component: () => import("~/views/user/Contact.vue")
          }
        ]
      },
      {
        path: "/help",
        name: RouterNames.Help,
        component: () => import("~/views/user/Help.vue")
      },
      {
        path: "/about",
        name: RouterNames.About,
        component: () => import("~/views/user/About.vue")
      },
      {
        path: "/withdraw",
        name: RouterNames.Withdraw,
        component: () => import("~/views/user/Withdraw/Withdraw.vue")
      },
      {
        path: "/withdraw-money",
        name: RouterNames.WithdrawMoney,
        component: () => import("~/views/user/Withdraw/WithdrawMoney.vue")
      },
      {
        path: "/wallet",
        name: RouterNames.Wallet,
        component: () => import("~/views/user/Wallet/Wallet.vue")
      },
      {
        path: "/wallet/edit/:account_id",
        name: RouterNames.EditWallet,
        props: true,
        component: () => import("~/views/user/Wallet/EditWallet.vue")
      },
      {
        path: "/verify-email",
        name: RouterNames.VerifyEmail,
        component: () => import("~/views/user/VerifyEmail.vue")
      },
      {
        path: "/inform-verified",
        name: RouterNames.InformVerified,
        props: true,
        component: () => import("~/views/user/InformVerified.vue")
      },
      {
        path: "/email-verify/:token",
        name: RouterNames.UserVerifyEmail,
        props: true,
        component: () => import("~/views/user/UserVerifyEmail.vue")
      },
      {
        path: "/wallet/add",
        name: RouterNames.AddBankAccount,
        component: () => import("~/views/user/Wallet/AddBankAccount.vue")
      },
      {
        path: "/settings",
        name: RouterNames.Settings,
        component: () => import("~/views/user/Settings.vue")
      },
      {
        path: "/edit-fund-password",
        name: RouterNames.EditFundPassword,
        component: () => import("~/views/user/EditFundPassword.vue")
      },
      {
        path: "/set-fund-password",
        name: RouterNames.SetFundPassword,
        component: () => import("~/views/user/SetFundPassword.vue")
      },
      {
        path: "/edit-user-password",
        name: RouterNames.EditUserPassword,
        component: () => import("~/views/user/EditUserPassword.vue")
      },
      {
        path: "/invite-friends",
        name: RouterNames.InviteFriends,
        component: () => import("~/views/user/InviteFriends.vue")
      },
      //
      //    FRIENDS
      //
      {
        path: "/friends",
        name: RouterNames.Friends,
        component: () => import("~/views/friends/Friends.vue")
      }
    ]
  } as any;

  /** 登入前 */
  const commonRoutes: Array<RouteRecordRaw> = [
    {
      path: "/",
      name: RouterNames.LoginLayout,
      component: () => import("@/layout/RouteView.vue"),
      children: [
        {
          path: "",
          name: RouterNames.LoginHome,
          component: () => import("@/views/LoginPage.vue")
        },
        {
          path: "sign-in",
          name: RouterNames.SignIn,
          component: () => import("@/views/LoginPage.vue")
        },
        {
          path: "sign-up",
          name: RouterNames.SignUp,
          component: () => import("@/views/LoginPage.vue")
        }
      ]
    },

    //
    //      S I G N I N
    //
    {
      path: "/sign-in-otp",
      name: RouterNames.SignIn_OTP,
      props: true,
      component: () => import("@/views/signIn/SignInOTP.vue")
    },
    {
      path: "/sign-in-update",
      name: RouterNames.SignIn_UpdatePwd,
      props: true,
      component: () => import("~/views/signIn/SignInResetPWD.vue")
    },
    {
      path: "/sign-in-forgot",
      name: RouterNames.SignIn_ForgotPwd,
      props: true,
      component: () => import("@/views/signIn/SignInForgot.vue")
    },

    //
    //    S I G N U P
    //
    {
      path: "/sign-up-otp",
      name: RouterNames.SignUp_OTP,
      props: true,
      component: () => import("~/views/signUp/SignUpOTP.vue")
    },
    {
      path: "/sign-up-form",
      name: RouterNames.SignUp_Register,
      props: true,
      component: () => import("~/views/signUp/SignUpRegister.vue")
    },
    {
      path: "/:catchAll(.*)",
      name: RouterNames.NotFound,
      component: () => import("@/views/NotFound.vue")
    }
  ];

  /** Demo 只有在測試時會顯示 */
  const demoRoutes: Array<RouteRecordRaw> = [
    {
      path: "/demo",
      name: RouterNames.DemoLayout,
      component: () => import("@/layout/RouteView.vue"),
      children: [
        {
          path: "wheel",
          name: RouterNames.DemoWheel,
          component: () => import("~/views/demos/SpinWheelDemo.vue")
        },
        {
          path: "sector",
          name: RouterNames.DemoSector,
          component: () => import("~/views/demos/SectorDemo.vue")
        },
        {
          path: "counter",
          name: RouterNames.DemoCounter,
          component: () => import("~/views/demos/CounterDemo.vue")
        }
      ]
    }
  ];

  return {
    commonRoutes,
    demoRoutes,
    userRoleSpecificRoutes,
  };
}

export function getAppRouter() {
  const { commonRoutes, demoRoutes, userRoleSpecificRoutes } =
    getRouterConfig();

  const routes: Array<RouteRecordRaw> = [
    ...(commonRoutes as Array<RouteRecordRaw>)
  ];

  /** 多種不同角色需要切換 不同 router
   *  e.g.
   *    if (facade.userStore.isAdmin()){
   *      routes.addAll(userAdminRoutes);
   *    }else{
   *      routes.addAll(userMerchantRoutes)
   *    }
   * */
  routes.add(userRoleSpecificRoutes as RouteRecordRaw);

  // fixme: temporary
  if (APP_CONFIGS.isInProductionMode || APP_CONFIGS.isInLocalDevMode || APP_CONFIGS.isInSimulationMode) {
    if (is.not.empty(demoRoutes)) {
      routes.addAll(demoRoutes as Array<RouteRecordRaw>);
    }
  }

  return createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
}
