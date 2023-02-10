import {VForm} from "~/appCommon/base/vformTypes";
import TFormOption = VForm.TFormOption;
import {facade} from "~/types/facadeTypes";
import {asCascadeClass, is} from "~/appCommon/extendBase/impls/utils/typeInferernce";
import {BaseFormImpl} from "~/appCommon/extendBase/baseFormImpl";
import {AppFormErrorMsg, formRules} from "~/store/forms/appFormRules";
import {AppFormFields} from "~/store/forms/appFormFields";
import {
  ForgotPasswordPayload,
  ForgotPasswordVerificationPayload,
  LoginPayload, OTPVerificationPayload,
  SignupPayload,
  UpdatePasswordPayload
} from "~/types/apiTypes";
import {pick, pickBy} from "ramda";
import {parsePhoneNumber} from "libphonenumber-js";

//
//
//          S I G N     I N
//
//

/**
*     payload: @see LoginPayload
* */
export class SignInModel extends BaseFormImpl<LoginPayload, {}>
{
  constructor(option?: Partial<TFormOption<any, any>>) {
    super(Object.assign( option ?? {}, {
      state: {
        username: AppFormFields.username,
        password: AppFormFields.password
      },
      rules: formRules,
      request : facade.userStore.login,
      messages: AppFormErrorMsg,
    } as TFormOption<LoginPayload, {}>));
    asCascadeClass(this);
  }
}


/**
*   payload: @see ForgotPasswordPayload
**/
export class SignInForgotPwdModel extends BaseFormImpl<ForgotPasswordPayload, {}>
{
  constructor(option?: Partial<TFormOption<any, any>>) {
    super(Object.assign( option ?? {}, {
      state: {
        phone_number: AppFormFields.phone_number,
      },
      rules: formRules,
      request : facade.userStore.forgotPassword,
      messages: AppFormErrorMsg,
    } as TFormOption<ForgotPasswordPayload, {}>));
    asCascadeClass(this);
  }

  getPayload(): Partial<Record<VForm.TFormKey<ForgotPasswordPayload, {}>, any>> {
    const payload =  super.getPayload();
    const instance = parsePhoneNumber(payload.phone_number);
    /** 轉為無格式*/
    payload.phone_number = instance.number;
    return payload;
  }
}


/**
 *   payload: @see ForgotPasswordVerificationPayload
 **/
export class SignInOTPModel extends BaseFormImpl<ForgotPasswordVerificationPayload, {}>
{
  constructor(option?: Partial<TFormOption<any, any>>) {
    super(Object.assign( option ?? {}, {
      state: {
        phone_number: AppFormFields.hiddenField({
          dataKey: "phone_number",
          value: facade.paramStore.state.phone_number
        }),
        verification_code: AppFormFields.verification_code
      },
      rules: formRules,
      request : facade.userStore.verifyForgotPassword,
      messages: AppFormErrorMsg,
    } as TFormOption<ForgotPasswordVerificationPayload, {}>));
    asCascadeClass(this);
  }

  getPayload(): Partial<Record<VForm.TFormKey<ForgotPasswordPayload, {}>, any>> {
    const payload =  super.getPayload();
    const instance = parsePhoneNumber(payload.phone_number);
    /** 轉為無格式*/
    payload.phone_number = instance.number;
    return payload;
  }
}



/**
 *   payload: @see UpdatePasswordPayload
 **/
export class SignInUpdatePwdModel extends BaseFormImpl<UpdatePasswordPayload, {}>
{
  constructor(option?: Partial<TFormOption<any, any>>) {
    super(Object.assign( option ?? {}, {
      state: {
        new_password: AppFormFields.new_password,
        old_password: AppFormFields.old_password,
      },
      rules: formRules,
      request : facade.userStore.updatePassword,
      messages: AppFormErrorMsg,
    } as TFormOption<UpdatePasswordPayload, {}>));
    asCascadeClass(this);
  }
}


//
//
//          S I G N     U P
//
//



/**
 *   payload: @see SignupPayload
 **/
export class SignUpRegisterModel extends BaseFormImpl<SignupPayload, {
  confirm_password: string
}>
{
  constructor(option?: Partial<TFormOption<any, any>>) {
    super(Object.assign( option ?? {}, {
      state: {
        username: AppFormFields.username,
        password: AppFormFields.password,
        confirm_password: AppFormFields.confirm_password,
        phone_number: AppFormFields.hiddenField({dataKey: "phone_number"}),
      },
      rules: formRules,
      request : facade.userStore.register,
      messages: AppFormErrorMsg,
    } as TFormOption<SignupPayload, {confirm_password: string}>));
    asCascadeClass(this);
  }

  getPayload() {
    const payload = super.getPayload();

    payload.phone_number = facade.paramStore.state.phone_number;
    console.log('payload 1:', payload);
    return pick([
      "username", "password", "phone_number"
    ], payload);
  }
}


export class SignUpOTPModel extends BaseFormImpl<OTPVerificationPayload>
{
  constructor(option?: Partial<TFormOption<any, any>>) {
    super(Object.assign( option ?? {}, {
      state: {
        verification_code: AppFormFields.verification_code,
        phone_number: AppFormFields.hiddenField({
          dataKey: "phone_number",
          value: facade.paramStore.state.phone_number
        }),
      },
      rules: formRules,
      request : facade.apiService.verifyOTP,
      messages: AppFormErrorMsg,
    } as TFormOption<OTPVerificationPayload, {}>));
    asCascadeClass(this);
  }
}
