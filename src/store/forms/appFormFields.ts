import {computed, ComputedRef} from "vue";
import {facade} from "~/types/facadeTypes";
import {ValidationRules} from "~/store/forms/appFormRules";
import {FormField, HiddenField} from "~/appCommon/extendBase/formStateUtil";
import {Optional} from "~/appCommon/base/baseApiTypes";
import {APP_CONFIGS} from "~/config";


class _AppFormFields{
  get email(){
    return FormField({
      dataKey: 'email',
      label: computed(()=>facade.i18n.value.email),
      placeholder: computed(()=>facade.i18n.value.PH_email),
      rule: [
        ValidationRules.required,
        ValidationRules.email,
      ].join('|'),
    })
  };

  get username(){
    return FormField({
      dataKey: 'username',
      label: computed(()=>facade.i18n.value.username),
      placeholder: computed(()=>facade.i18n.value.PH_username),
      rule: [
        ValidationRules.required,
        ValidationRules.userLength,
        ValidationRules.userPattern,
      ].join('|'),
    })
  };

  get phone_number(){
    return FormField({
      dataKey: 'phone_number',
      value: undefined,
      label: computed(()=>facade.i18n.value.phoneNumber),
      placeholder: computed(()=>APP_CONFIGS.DEFAULT_MODELS.COUNTRY_CODE),
      rule: [
        ValidationRules.required,
        ValidationRules.phone,
      ].join('|'),
    });
  }

  get verification_code(){
    return FormField({
      dataKey: 'verification_code',
      value: undefined,
      label: computed(()=>facade.i18n.value.phoneNumber),
      placeholder: computed(()=>""),
      rule: [
        ValidationRules.required,
        ValidationRules.verificationLength
      ].join('|'),
    });
  }

  get password(){
    return FormField({
      dataKey: 'password',
      label: computed(()=>facade.i18n.value.password),
      placeholder: computed(()=>facade.i18n.value.PH_password),
      rule: [
        ValidationRules.required,
        ValidationRules.pwdLength,
        ValidationRules.pwdPattern,
      ].join('|'),
    });
  }

  get confirm_password(){
    return FormField({
      dataKey: 'confirm_password',
      /** 後綴 confirm，rule 又有 confirm, 會尋找 name 為 password 者進行比較*/
      name: "password_confirm",
      label: computed(()=>facade.i18n.value.confirm_password),
      placeholder: computed(()=>facade.i18n.value.PH_confirm_password),
      rule: [
        ValidationRules.required,
        ValidationRules.pwdLength,
        ValidationRules.pwdPattern,
        ValidationRules.confirm
      ].join('|'),
    });
  }

  get fund_password (){
    return FormField({
      dataKey: 'fund_password',
      label: computed(()=>facade.i18n.value.fund_password),
      placeholder: computed(()=>facade.i18n.value.PH_fund_password),
      rule: [
        ValidationRules.required,
        ValidationRules.pwdLength,
        ValidationRules.pwdPattern,
      ].join('|'),
    });
  }

  get fund_password_confirm (){
    return FormField({
      dataKey: 'fund_password_confirm',
      label: computed(()=>facade.i18n.value.confirm_fund_password),
      placeholder: computed(()=>facade.i18n.value.PH_confirm_fund_password),
      rule: [
        ValidationRules.required,
        ValidationRules.pwdLength,
        ValidationRules.pwdPattern,
        ValidationRules.confirm,
      ].join('|'),
    });
  }


  get old_fund_password (){
    return FormField({
      dataKey: 'old_fund_password',
      label: computed(()=>facade.i18n.value.old_fund_password),
      placeholder: computed(()=>facade.i18n.value.PH_old_fund_password),
      rule: [
        ValidationRules.required,
        ValidationRules.pwdLength,
        ValidationRules.pwdPattern,
      ].join('|'),
    });
  }

  get new_fund_password (){
    return FormField({
      dataKey: 'new_fund_password',
      name: 'old_fund_password_notEqual',
      label: computed(()=>facade.i18n.value.new_fund_password),
      placeholder: computed(()=>facade.i18n.value.PH_new_fund_password),
      rule: [
        ValidationRules.required,
        ValidationRules.pwdLength,
        ValidationRules.pwdPattern,
        ValidationRules.notEqual,
      ].join('|'),
    });
  }

  get confirm_new_fund_password(){
    return FormField({
      dataKey: 'confirm_new_fund_password',
      /** 後綴 confirm，rule 又有 confirm, 會尋找 name 為 password 者進行比較*/
      name: "old_fund_password_notEqual_confirm",
      label: computed(()=>facade.i18n.value.confirm_password),
      placeholder: computed(()=>facade.i18n.value.PH_confirm_new_fund_password),
      rule: [
        ValidationRules.required,
        ValidationRules.pwdLength,
        ValidationRules.pwdPattern,
        ValidationRules.confirm
      ].join('|'),
    });
  }

  get new_password(){
    return FormField({
      dataKey: 'new_password',
      name: 'old_password_notEqual',
      label: computed(()=>facade.i18n.value.new_password),
      placeholder: computed(()=>facade.i18n.value.PH_new_password),
      rule: [
        ValidationRules.required,
        ValidationRules.pwdLength,
        ValidationRules.pwdPattern,
        ValidationRules.notEqual
      ].join('|'),
    });
  }

  get new_password_confirm(){
    return FormField({
      dataKey: 'new_password_confirm',
      name: 'old_password_notEqual_confirm',
      label: computed(()=>facade.i18n.value.new_password_confirm),
      placeholder: computed(()=>facade.i18n.value.PH_new_password_confirm),
      rule: [
        ValidationRules.required,
        ValidationRules.pwdLength,
        ValidationRules.pwdPattern,
        ValidationRules.confirm
      ].join('|'),
    });
  }

  get old_password(){
    return FormField({
      dataKey: 'old_password',
      name: "old_password",
      label: computed(()=>facade.i18n.value.old_password),
      placeholder: computed(()=>facade.i18n.value.PH_old_password),
      rule: [
        ValidationRules.required,
        ValidationRules.pwdLength,
        ValidationRules.pwdPattern,
      ].join('|'),
    });
  }


  get account_full_name(){
    return FormField({
      dataKey: 'full_name',
      label: computed(()=>facade.i18n.value.full_name),
      placeholder: computed(()=>facade.i18n.value.PH_full_name),
      rule: [
        ValidationRules.required,
      ].join('|'),
    });

  }
  get bank_name(){
    return FormField({
      dataKey: 'bank_name',
      label: computed(()=>facade.i18n.value.bank_name),
      placeholder: computed(()=>facade.i18n.value.PH_bank_name),
      rule: [
        ValidationRules.required,
      ].join('|'),
    });

  }
  get account_name(){
    return FormField({
      dataKey: 'account_name',
      label: computed(()=>facade.i18n.value.account_name),
      placeholder: computed(()=>facade.i18n.value.PH_account_name),
      rule: [
        ValidationRules.required,
      ].join('|'),
    });

  }
  get account_number(){
    return FormField({
      dataKey: 'account_number',
      label: computed(()=>facade.i18n.value.account_number),
      placeholder: computed(()=>facade.i18n.value.PH_account_number),
      rule: [
        ValidationRules.required,
      ].join('|'),
    });
  }

  get confirm_account_number(){
    return FormField({
      dataKey: 'account_number_confirm',
      label: computed(()=>facade.i18n.value.confirm_account_number),
      placeholder: computed(()=>facade.i18n.value.PH_confirm_account_number),
      rule: [
        ValidationRules.required,
        ValidationRules.confirm,
      ].join('|'),
    });

  }

  get ifsc_code(){
    return FormField({
      dataKey: 'ifsc_code',
      label: computed(()=>facade.i18n.value.ifsc_code),
      placeholder: computed(()=>facade.i18n.value.PH_ifsc_code),
      rule: [
        ValidationRules.required,
      ].join('|'),
    });
  }
  get amount(){
    return FormField({
      dataKey: 'amount',
      label: computed(()=>facade.i18n.value.amount),
      placeholder: computed(()=>facade.i18n.value.PH_amount),
      rule: [
        ValidationRules.required,
        ValidationRules.amountLength
      ].join('|'),
    });
  }
  get is_default(){
    return FormField({
      dataKey: 'is_default',
      label: computed(()=>""),
      placeholder: computed(()=>""),
      rule: [
        ValidationRules.optional,
      ].join('|'),
    });
  }
  get remark(){
    return FormField({
      dataKey: 'remark',
      label: computed(()=>""),
      placeholder: computed(()=>""),
      rule: [
        ValidationRules.optional,
      ].join('|'),
    });
  }

  get optional(){
    return FormField({
      dataKey: 'optional',
      label: computed(()=>""),
      placeholder: computed(()=>""),
      rule: [
        ValidationRules.optional,
      ].join('|'),
    });
  }
  get id(){
    return FormField({
      dataKey: 'id',
      label: computed(()=>""),
      placeholder: computed(()=>""),
      rule: [
        ValidationRules.required,
      ].join('|'),
    })
  };


  decimalField(option:{dataKey: string, name?: string, value?: number, label: ComputedRef<string>, placeHolder: ComputedRef<string>}){
    return FormField({
      dataKey: option.dataKey,
      name: option.name ?? option.dataKey,
      label: option.label,
      placeholder: option.placeHolder,
      rule: [
        ValidationRules.required,
        ValidationRules.pwdLength,
        ValidationRules.pwdPattern,
      ].join('|'),
    });
  }

  hiddenField(option: {dataKey: string, value?: any }){
    return HiddenField(option);
  }

  getFields(fields: Omit<(keyof this), 'getFields'>[]): Record<keyof this, string>{
    const result: Record<string, string> = {};
    fields.forEach((_)=>{
      //@ts-ignore
      result[_] = this[_];
    });
    return result as Record<keyof this, string>;
  }
}

export const AppFormFields = new _AppFormFields();





