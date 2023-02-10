//@ts-ignore
import v8n from "v8n";
import {addRule, baseFormErrorMsg, EBaseValidationRules, getFormRules} from "~/appCommon/extendBase/formRuleUtil";
import {LazyHolder} from "~/appCommon/base/baseFacadeTypes";
import {facade} from "~/types/facadeTypes";
import {VForm} from "~/appCommon/base/vformTypes";
// import {IntlTelInput, IntlTelInputHelper} from "~/utils/telInputHelper";
import {mergeRight} from "ramda";
import {Optional} from "~/appCommon/base/baseApiTypes";
import {parsePhoneNumber} from "libphonenumber-js";

const PWD_PATTERN = /[a-zA-Z0-9#_\-]+/g;
const USER_PATTERN = /[a-zA-Z0-9\-]+/g;
const ALL_USER_PATTERN = /[a-zA-Z0-9_\-]+/g;
const DECIMAL_PATTERN = /([1-9][0-9\/.,]*[0-9]$)|([0-9])/g;
const INT_PATTERN = /([1-9][0-9,]*[0-9]$)|([0-9])/g;

/**
*
*       新增 validation rule
*
* */
export const ValidationRules = {
  ...EBaseValidationRules,
  alibaba: "alibaba",
  verificationLength: "verificationLength"
}


/**
*
*       定義 validation rule handler
*
* */
addRule(EBaseValidationRules.userPattern, (ctx, ...args)=>{
  return v8n()
    .pattern(USER_PATTERN)
    .test(ctx.value);
}, true);

addRule(EBaseValidationRules.userLength, (ctx, ...args)=>{
  return v8n()
    .length(5, 30)
    .test(ctx.value);
}, true);

addRule(EBaseValidationRules.phone, (ctx, ...args)=>{
  const phoneNumber     = parsePhoneNumber(ctx.value);
  const formattedNumber = phoneNumber.formatInternational();
  const isValid         = phoneNumber.isValid();

  console.log( "phone:".brightBlue, phoneNumber, "formated:", formattedNumber, "isValid:", isValid, "ctx:", ctx);
  ctx.value = formattedNumber;

  return isValid ?? false;
}, true);


addRule(ValidationRules.alibaba, (ctx, ...args)=>{
  return true;
});

addRule(ValidationRules.verificationLength, (ctx, ...args)=>{
  return v8n()
    .length(6, 6)
    .test(ctx.value);
}, true);

export const formRules = getFormRules();
console.log("baseFormErrorMsg:", baseFormErrorMsg);


/**
 *
 *    定義 validation error
 *
 * */
let _appFormErrorMessages: Optional<VForm.TFormMessages>;
export const AppFormErrorMsg: VForm.TFormMessages = LazyHolder<VForm.TFormMessages>(()=>{
  return _appFormErrorMessages ??= mergeRight(baseFormErrorMsg,{
    [ValidationRules.userPattern]: facade.i18n.value.VD_userPattern,
    [ValidationRules.userLength]: facade.i18n.value.VD_userLength,
    [ValidationRules.required]: "required",
    [ValidationRules.pwdLength]: facade.i18n.value.VD_pwdLength,
    [ValidationRules.pwdPattern]: facade.i18n.value.VD_pwdPattern,
    [ValidationRules.confirm]: facade.i18n.value.VD_confirm,
    [ValidationRules.notEqual]: facade.i18n.value.VD_notEqual,

  } as VForm.TFormMessages);
})

console.log("AppFormErrorMsg:", AppFormErrorMsg);
