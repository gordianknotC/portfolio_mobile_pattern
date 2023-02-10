import {assert} from "~/appCommon/extendBase/impls/utils/assert";
import {is} from "~/appCommon/extendBase/impls/utils/typeInferernce";
import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {BaseApiGuard} from "~/appCommon/base/baseApiGuard";
import {IResponseTypeResolver} from "~/appCommon/base/baseApi";

let errorcodes: Optional<BaseErrorCodes>;

export class BaseErrorCodes {
  static setup(option:{
    ACCESS_TOKEN_MISSING?: number,
    ACCESS_TOKEN_EXPIRED?: number,
    DATA_MISSING?: number,
    INVALID_PERMISSION?: number,
    USER_IS_BLOCK?: number,
    USER_NOT_VERIFY?: number,
  }){
    if (is.undefined(errorcodes)){
      errorcodes = new BaseErrorCodes();
      Object.keys(option).forEach((element) => {
        //@ts-ignore
        errorcodes[element] = option[element as keyof typeof option];
      });
    }
  }

  static singleton(): BaseErrorCodes{
    assert(is.initialized(errorcodes), "errorcodes Initialized before setup!!");
    return errorcodes ??= new BaseErrorCodes();
  }

  ACCESS_TOKEN_MISSING=203;
  ACCESS_TOKEN_EXPIRED=202;
  DATA_MISSING = 102;
  INVALID_PERMISSION=208;
  USER_IS_BLOCK=205;
  USER_NOT_VERIFY=206;
}


export interface IBaseApiServiceMethods{
   updateAuthorizationToken(): void;
   post(url: string, data: Record<string, any>): Promise<any>;
   postRefreshToken(url: string, data: Record<string, any>): Promise<any>;
   dl<T>(url: string, data: Record<string, any>): Promise<T>;
   get<T>(url: string, data: Record<string, any>): Promise<T>;
   put(url: string, data: Record<string, any>): Promise<any>;
   del(url: string, data: Record<string, any>): Promise<any>;
}

export abstract class IInternalBaseApiService {
  abstract resolver: IResponseTypeResolver;
  abstract guard: BaseApiGuard;
  abstract axiosGeneral: AxiosInstance;
  abstract axiosAuth: AxiosInstance;


}

export abstract class IBaseApiService{
  abstract isErrorResponse(result: any): boolean;
  abstract isSuccessResponse(response: TFuzzyResponse):boolean;
}

export type TPager = {
  page: number;
  pages: number;
  per_page: number;
  total: number;
};

export type Optional<T> = T | undefined | null;
export type TFuzzyResponse = any



