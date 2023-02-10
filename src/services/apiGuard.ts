import {IResponseTypeResolver} from "~/appCommon/base/baseApi";
import {DataResponse, ErrorResponse, RefreshAuthResponse, SuccessResponse} from "~/types/apiTypes";
import {BaseApiGuard} from "~/appCommon/base/baseApiGuard";
import {BaseAuthGuardHelper, BaseGeneralGuardHelper} from "~/appCommon/base/internalApiGuardHelper";
import {TFuzzyResponse} from "~/appCommon/base/baseApiTypes";


export class ApiDataTypeResolver implements IResponseTypeResolver{
  page(response: DataResponse<any>): number {
    return response?.pager?.page ?? 0;
  }
  pages(response: DataResponse<any>): number {
    return response?.pager?.pages ?? 0;
  }
  error_code(response: ErrorResponse): number {
    return response.error_code;
  }
  error_key(response: ErrorResponse): string {
    return response.error_key;
  }
  error_msg(response: ErrorResponse): string {
    return response.error_msg;
  }
  succeed(response: SuccessResponse): boolean {
    return response.succeed;
  }
  token(response: RefreshAuthResponse): string {
    return response.data.token;
  }
  data(response: TFuzzyResponse) {
    return (response as DataResponse<any>).data;
  }
}

export class ApiGuard extends BaseApiGuard{

}

export class GeneralApiGuardConfig extends BaseGeneralGuardHelper{

}

export class AuthApiGuardConfig extends BaseAuthGuardHelper{

}
