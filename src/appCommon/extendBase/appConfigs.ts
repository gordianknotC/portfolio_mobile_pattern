import {DateExt} from "~/appCommon/base/addon";
import {useColors} from "~/appCommon/plugin/colorsPlugin";
import {is} from "~/appCommon/extendBase/impls/utils/typeInferernce";
import {IBaseAppConfig} from "~/appCommon/base/baseAppConfigTypes";
import {Optional} from "~/appCommon/base/baseApiTypes";
import {assert} from "~/appCommon/extendBase/impls/utils/assert";
import { facade } from "~/types/facadeTypes";

let _APP_CONFIGS: Optional<IBaseAppConfig<any>>;

export function getAppConfigs(): IBaseAppConfig<any>{
  assert(is.initialized(_APP_CONFIGS));
  return _APP_CONFIGS!;
}

export function appConfigInit<T>(config: IBaseAppConfig<T>): IBaseAppConfig<T>{
  _APP_CONFIGS = config;
  useColors();
  if ((_APP_CONFIGS!.isInLocalDevMode || _APP_CONFIGS.isInSimulationMode) && _APP_CONFIGS!.EXPOSE_GLOBALS){
    //@ts-ignore
    window.facade = facade;
    //@ts-ignore
    window.APP_CONFIGS = _APP_CONFIGS;
    //@ts-ignore
    window.is = is;
    //@ts-ignore
    window.DateExt = DateExt;
  }
  return _APP_CONFIGS;
}
