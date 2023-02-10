import {computed, ComputedRef, nextTick, reactive, UnwrapRef, watch} from "vue";
import {ESnack, ETheme, facade, IAppStore, Language, TAppState, TExtraAppState, TLanguage} from "~/types/facadeTypes";
import {WatchAndStore, watchAndStore} from "~/appCommon/extendBase/impls/baseStorageService";
import {APP_CONFIGS} from "~/config";
import {Toast} from "vant";
import { assert } from "~/appCommon/extendBase/impls/utils/assert";
import { is } from "~/appCommon/extendBase/impls/utils/typeInferernce";
import {ComponentInstance} from "vant/lib/utils";
import {AxiosResponse} from "axios";
import {ErrorResponse} from "~/types/apiTypes";
import {EIOStage} from "~/appCommon/base/baseTableTypes";

export class AppStore implements IAppStore {
  state: UnwrapRef<TAppState>
  watchStoreInstance: WatchAndStore<TAppState>;

  constructor(state: TAppState) {
    const lanDefault = state.language;
    const themeDefault = state.theme;

    this.state = reactive({
      theme: state.theme,
      language: computed({
        get(){
          return facade.vue.$i18n.locale;
        },
        set(val){
          facade.vue.$i18n.locale = val as any;
        }
      }) as any
    }) as any;

    this.watchStoreInstance = watchAndStore<TAppState>({
      unwrapRef: this.state,
      storage: localStorage,
      loadOnInitialize: true,
      storeIdent: `${APP_CONFIGS.APP_IDENT}_APP`,
      pick: ["language", "theme", "avatar"],
      defaults: {
        language: lanDefault,
        theme: themeDefault,
        avatar: "",
      } as any,
    });
  }

  setLanguage(language: TLanguage) {
    this.state.language = language;
    facade.vue.$i18n.locale = language;
  }

  setTheme(theme: ETheme) {
    this.state.theme = theme;
  }

  setAvatar(avatar: string){
    this.state.avatar = avatar;
  }

  async updateAvatar(stage: EIOStage){
    const  _update = async ()=> {
      const result =  await facade.apiService.getAvatar();
      this.setAvatar(result.data.context);
    }
    switch (stage){
      case EIOStage.initial:
        if (is.empty(this.state.avatar)){
          await _update();
        }
        break;
      case EIOStage.update:
        if (is.not.empty(this.state.avatar)){
          await _update();
        }
        break;
      case EIOStage.upgrade:
        await _update();
        break;
    }

  }

  // fixme: vuetify snackbar
  addSnackMessage(message: string, type: ESnack){}

  lazyLoadUp(){
    this.updateAvatar(EIOStage.initial);
  }

  notificationStacks: ComponentInstance[] = [];

  protected notify(inst: ComponentInstance){
    nextTick(()=>{
      nextTick(()=>{
        this.notificationStacks.add(inst);
        const toasts = document.querySelectorAll(".van-toast");
        console.log('toasts:', toasts);
        const posY = this.notificationStacks.length * 4;
        //@ts-ignore
        toasts[toasts.length-1]!.style.bottom = `${posY}rem`;
      });
    });
  }

  notifyDownloaded(message: string): void {
    assert(is.string(message), `type miss-match, expect string got: ${message.constructor?.name}`);
    let inst: any;
    this.notify(inst = Toast.loading({
      message,
      type: "success",
      position: "bottom",
      icon: undefined,
      onClose:()=>{
        this.notificationStacks.remove(inst);
      }
    }));
  }

  notifyDownloading(message: string): void {
    assert(is.string(message), `type miss-match, expect string got: ${message.constructor?.name}`)
    let inst: any;
    this.notify(inst = Toast.loading({
      message,
      type: "loading",
      position: "bottom",
      icon: undefined,
      onClose:()=>{
        this.notificationStacks.remove(inst);
      },
    }));
  }

  notifyError(e: any): void {
    let inst: any;
    const call = (message: string)=>{
      this.notify(inst = Toast.fail({
        message,
        type: "fail",
        position: "bottom",
        icon: undefined,
        onClose:()=>{
          this.notificationStacks.remove(inst);
      }}));
    }
    try{
      if(is.axiosResponse(e)){
        if (Object.keys((e as AxiosResponse<ErrorResponse>).data).contains("error_msg")){
          call((e as AxiosResponse<ErrorResponse>).data.error_msg)
        }else{
          if (e.data.message?.contains?.("Network Error") ?? false){
            console.warn(e);
            call(e.data.message.trim());
          }else{
            console.warn(e);
            call("Uncaught Response Error");
          }
        }
      }else{
        call(e.toString());
      }
    }catch(e){
      console.warn(e);
      call("Internal Error");
    }
  }

  notifyInfo(message: string): void {
    assert(is.string(message), `type miss-match, expect string got: ${message.constructor?.name}`)
    let inst: any;
    this.notify(inst = Toast.loading({
      message,
      type: "text",
      position: "bottom",
      className: "van-toast--info",
      onClose:()=>{
        this.notificationStacks.remove(inst);
      }
    }));
  }

  notifySuccess(message: string): void {
    assert(is.string(message), `type miss-match, expect string got: ${message.constructor?.name}`)
    let inst: any;
    this.notify(inst = Toast.success({
      message,
      type: "success",
      position: "bottom",
      icon: undefined,
      onClose:()=>{
        this.notificationStacks.remove(inst);
      }
    }));
  }


}
