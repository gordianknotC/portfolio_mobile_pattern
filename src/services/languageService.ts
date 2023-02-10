
import en from "~/assets/i18n/en";
import {facade, ILanguageService, Language, TLanguage} from "~/types/facadeTypes";
import {APP_CONFIGS} from "~/config";


export class LanguageService extends ILanguageService {
  get defaultLanguage(): TLanguage {
    return APP_CONFIGS.DEFAULT_MODELS.LANGUAGE;
  }

  get language(): TLanguage {
    return facade.vue.$i18n.locale as any;
  }

  set language(lan: TLanguage) {
    facade.appStore.setLanguage(lan);
  }

  get languageLabel(): string {
    switch (this.language) {
      case Language["en-US"]:
        return this.txt.english;
      case Language["zh-cn"]:
        return this.txt.simplifiedChinese;
      default:
        break;
    }
    return "";
  }

  /**
   *
   *  取得 i18n 文字
   *    定義於
   *    locale/en-US.js, locale/zh-CN.js, locale/zh-TW.js
   *
   * */
  get txt(): typeof en {
    //@ts-ignore
    return facade.vue.$i18n.messages[facade.vue.$i18n.locale];
  }
}

