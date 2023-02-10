import dayjs from "dayjs";
//@ts-ignore
import CryptoJS from "crypto-js";
import {BaseStorageService} from "~/appCommon/extendBase/impls/baseStorageService";
import {is} from "~/appCommon/extendBase/impls/utils/typeInferernce";
import {IBaseAppConfig} from "~/appCommon/base/baseAppConfigTypes";
import {facade, TUserState} from "~/types/facadeTypes";
import {Optional} from "~/appCommon/base/baseApiTypes";

const SECRET_KEY = "window.sessionStorage={}";

export const encryptWithAES = (text:string) => {
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

export const decryptWithAES = (ciphertext: string) => {
  try{
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  }catch(e){
    throw e;
  }
};


/** 用於儲存非UI狀態
 *  UI 狀態使用 vuex plugin: vuejs-storage 自動儲存
 *
 **/
export class UserLocalStoreService extends BaseStorageService<TUserState> {
  constructor(
    public key: string,
    public APP_CONFIGS: IBaseAppConfig<TUserState>
  ) {
    super(key, APP_CONFIGS,
      (data: Optional<string>)=>{
        try{
          if (is.empty(data)){
            return "";
          }
          return decryptWithAES(data!);
        }catch(e){
          console.error(e);
          this.clearUserData([]);
          return "";
        }
      },
      (data: string)=>{
        return encryptWithAES(data);
        // return data;
      });
  }

  setAuthDate(result: TUserState) {
    const token = result.token;
    if (is.empty(facade.userStore.state.authorizationDate) && is.not.empty(token)) {
      // const now = new Date(Date.now());
      // dayjs().subtract(now.getTime());
      facade.userStore.state.authorizationDate =
        dayjs()/*.subtract(1, "day")*/.toDate().getTime().toString();
    }
  }
}



