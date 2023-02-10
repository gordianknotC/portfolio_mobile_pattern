import {Language} from "~/types/facadeTypes";
import en from "~/assets/i18n/en";
import cn from "~/assets/i18n/cn";
import {createI18n} from "vue-i18n";
import {APP_CONFIGS} from "~/config";


const messages = {
  [Language["en-US"]]: Object.assign({}, en),
  [Language["zh-cn"]]: Object.assign({}, cn),
}

const i18n =  createI18n({
  defaultLocale: APP_CONFIGS.DEFAULT_MODELS.LANGUAGE,
  fallbackLocale: APP_CONFIGS.DEFAULT_MODELS.LANGUAGE,
  messages,
})

export function useI18n(app: any): any{
  app.use(i18n);
  return i18n;
}
