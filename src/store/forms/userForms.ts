import {BaseFormImpl} from "~/appCommon/extendBase/baseFormImpl";
import {AppFormFields} from "~/store/forms/appFormFields";
import {AppFormErrorMsg, formRules} from "~/store/forms/appFormRules";
import {facade} from "~/types/facadeTypes";
import {asCascadeClass, is} from "~/appCommon/extendBase/impls/utils/typeInferernce";
import {VForm} from "~/appCommon/base/vformTypes";
import TFormOption = VForm.TFormOption;
import {
  DelAccountPayload,
  EditFundPasswordPayload, PostAccountPayload,
  PostWithdrawPayload, PutAccountPayload,
  SetFundPasswordPayload, UpdateEmailPayload, UpdatePasswordPayload,
} from "~/types/apiTypes";
import {computed} from "~/appCommon/base/vueTypes";
import {pick} from "ramda";



/**
*     payload: @see PostWithdrawPayload
**/
export class ApplyWithdrawModel extends BaseFormImpl<PostWithdrawPayload, {}>
{
  constructor(option: Partial<TFormOption<any, any>> & {}) {
    super(Object.assign( option ?? {}, {
      state: {
        amount: AppFormFields.amount,
        remark: AppFormFields.remark,
        account_id: AppFormFields.id,
        fund_password: AppFormFields.fund_password
      },
      rules: formRules,
      request : facade.apiService.applyWithdraw,
      messages: AppFormErrorMsg,
    } as TFormOption<PostWithdrawPayload, {}>));
    asCascadeClass(this);
  }
}



/**
 *     payload: @see PostWithdrawPayload
 **/
export class EditFundPassword extends BaseFormImpl<EditFundPasswordPayload, {confirm_new_fund_password: string}>
{
  constructor(option?: Partial<TFormOption<any, any>> ) {
    super(Object.assign( option ?? {}, {
      state: {
        old_fund_password: AppFormFields.old_fund_password,
        new_fund_password: AppFormFields.new_fund_password,
        confirm_new_fund_password: AppFormFields.confirm_new_fund_password,
      },
      rules: formRules,
      request : facade.userStore.resetFundPassword,
      messages: AppFormErrorMsg,
    } as TFormOption<EditFundPasswordPayload, {confirm_new_fund_password: string}>));
    asCascadeClass(this);
  }

  getPayload(): Partial<Record<VForm.TFormKey<EditFundPasswordPayload, { confirm_new_fund_password: string }>, any>> {
    return pick(["old_fund_password", "new_fund_password"], super.getPayload());
  }
}


/**
 *     payload: @see SetFundPasswordPayload
 **/
export class SetFundPassword extends BaseFormImpl<SetFundPasswordPayload, {fund_password_confirm: string}>
{
  constructor(option?: Partial<TFormOption<any, any>> ) {
    super(Object.assign( option ?? {}, {
      state: {
        fund_password: AppFormFields.fund_password,
        fund_password_confirm: AppFormFields.fund_password_confirm,
      },
      rules: formRules,
      request : facade.userStore.setFundPassword,
      messages: AppFormErrorMsg,
    } as TFormOption<SetFundPasswordPayload, {fund_password_confirm: string}>));
    asCascadeClass(this);
  }

  getPayload(): Partial<Record<VForm.TFormKey<SetFundPasswordPayload, {}>, any>> {
    return pick(["fund_password"], super.getPayload());
  }
}




/**
 *     payload: @see VerifyEmailPayload
 **/
export class EditEmailModel extends BaseFormImpl< UpdateEmailPayload, {}>
{
  constructor(option?: Partial<TFormOption<any, any>> ) {
    super(Object.assign( option ?? {}, {
      state: {
        email: AppFormFields.email,
        token: AppFormFields.hiddenField({
          dataKey: "token",
          value: facade.userStore.state.token
        })
      },
      rules: formRules,
      request : facade.userStore.editEmail,
      messages: AppFormErrorMsg,
    } as TFormOption< UpdateEmailPayload, {}>));
    asCascadeClass(this);
  }

  getPayload(): Partial<Record<VForm.TFormKey<UpdateEmailPayload, {}>, any>> {
    if (!facade.userStore.isEmailVerified.value){
      return pick(["email"], super.getPayload());
    }else{
      return super.getPayload();
    }
  }
}








/**
 *     payload: @see PostAccountPayload
 **/
export class AddBankAccountModel extends BaseFormImpl< PostAccountPayload, {confirm_account_number: string}>
{
  constructor(option?: Partial<TFormOption<any, any>> ) {
    super(Object.assign( option ?? {}, {
      state: {
        full_name: AppFormFields.account_full_name,
        bank_name: AppFormFields.bank_name,
        account_name: AppFormFields.account_name,
        account_number: AppFormFields.account_number,
        confirm_account_number: AppFormFields.confirm_account_number,
        ifsc_code: AppFormFields.ifsc_code,
        fund_password: AppFormFields.fund_password,
        is_default: AppFormFields.is_default,
        remark: AppFormFields.remark
      },
      rules: formRules,
      request : facade.apiService.addBankAccount,
      messages: AppFormErrorMsg,
    } as TFormOption< PostAccountPayload, {confirm_account_number: string}>));
    asCascadeClass(this);
  }

  getPayload(): Partial<Record<VForm.TFormKey<PostAccountPayload, { confirm_account_number: string }>, any>> {
    return pick([
      "full_name", "bank_name", "account_name",
      "account_number", "ifsc_code", "fund_password", "is_default",
    ], super.getPayload());
  }
}

/**
 *     payload: @see PutAccountPayload
 **/
export class EditBankAccountModel extends BaseFormImpl< PutAccountPayload>
{
  constructor(option?: Partial<TFormOption<any, any>> ) {
    super(Object.assign( option ?? {}, {
      state: {
        full_name: AppFormFields.account_full_name,
        bank_name: AppFormFields.optional,
        account_name: AppFormFields.optional,
        account_number: AppFormFields.optional,
        ifsc_code: AppFormFields.optional,
        fund_password: AppFormFields.fund_password,
        is_default: AppFormFields.is_default,
        remark: AppFormFields.remark,
        account_id: AppFormFields.id,
      },
      rules: formRules,
      request : facade.apiService.PutBankAccount,
      messages: AppFormErrorMsg,
    } as TFormOption< PutAccountPayload, {}>));
    asCascadeClass(this);
  }

  getPayload(): Partial<Record<VForm.TFormKey<PutAccountPayload, {}>, any>> {
    return pick([
      "full_name", "bank_name", "account_name",
      "account_number", "ifsc_code", "fund_password", "is_default", "account_id"
    ], super.getPayload());
  }
}

/**
 *     payload: @see DelAccountPayload
 **/
export class DelBankAccountModel extends BaseFormImpl<DelAccountPayload>
{
  constructor(option?: Partial<TFormOption<any, any>> ) {
    super(Object.assign( option ?? {}, {
      state: {
        fund_password: AppFormFields.fund_password,
        account_id: AppFormFields.id,
      },
      rules: formRules,
      request : facade.apiService.DelBankAccount,
      messages: AppFormErrorMsg,
    } as TFormOption<DelAccountPayload, {}>));
    asCascadeClass(this);
  }

  getPayload(): Partial<Record<VForm.TFormKey<DelAccountPayload, {}>, any>> {
    return pick([
      "fund_password", "account_id"
    ], super.getPayload());
  }
}





/**
 *   payload: @see UpdatePasswordPayload
 **/
export class UserUpdatePassword extends BaseFormImpl<UpdatePasswordPayload, {new_password_confirm: string}>
{
  constructor(option?: Partial<TFormOption<any, any>>) {
    super(Object.assign( option ?? {}, {
      state: {
        new_password: AppFormFields.new_password,
        old_password: AppFormFields.old_password,
        new_password_confirm: AppFormFields.new_password_confirm
      },
      rules: formRules,
      request : facade.userStore.updatePassword,
      messages: AppFormErrorMsg,
    } as TFormOption<UpdatePasswordPayload, {new_password_confirm: string}>));
    asCascadeClass(this);
  }

  getPayload(): Partial<Record<VForm.TFormKey<UpdatePasswordPayload, { new_password_confirm: string }>, any>> {
    return pick([
      "new_password", "old_password",
    ], super.getPayload());
  }
}
