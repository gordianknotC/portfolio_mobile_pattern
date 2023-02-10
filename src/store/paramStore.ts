import {BaseParamStore} from "~/appCommon/extendBase/impls/baseParamStore";
import {TParamStoreState} from "~/types/facadeTypes";

/** 自動將已宣告的欄位 存/取 至  localstorage
 *  並與 router.currentNav 裡對應的參數同步 (有宣告才算）
 * */
export class ParamStore extends BaseParamStore<TParamStoreState> {
  constructor(state: TParamStoreState){
    super(state, [
      "username",
      "phone_number",
      "canSendOTP",
    ]);
  }
}
