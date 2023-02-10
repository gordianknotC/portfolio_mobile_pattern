import "vant/lib/index.css";
import "@/styles/tailwind.scss";
import "@/styles/all.scss";

import { createApp } from "vue";
import App from "./App.vue";
import { facade, TFacade } from "~/types/facadeTypes";
import { Facade } from "~/appCommon/base/baseFacadeTypes";
import { useI18n } from "~/plugins/i18nPlugin";
import { useVant } from "~/plugins/useVant";
import { useFacade } from "~/plugins/facadePlugin";
import { useSvgIcon } from "~/plugins/svgIcon";
import BaseApi from "~/services/apiService";

const app = createApp(App as any);

const i18n = useI18n(app);
useVant(app);
useSvgIcon(app);
useFacade(app, i18n);
// app.config.globalProperties

app.mixin({
  computed: {
    $txt() {
      return facade.i18n.value;
    },
    $user() {
      return facade.userStore;
    }
  }
});

const vue = app.mount("#app");

/// fixme: 型別
Facade.provide<TFacade>(
  {
    vue: vue as any
  },
  true
);

facade.appStore.lazyLoadUp();
