// import intlTelInput, {CountryData} from "intl-tel-input";
// import {is} from "~/appCommon/extendBase/impls/utils/typeInferernce";
// import {assert} from "~/appCommon/extendBase/impls/utils/assert";
//
// export class IntlTelInputHelper {
//   static singleton: IntlTelInputHelper;
//   telInput: intlTelInput.Plugin;
//
//   constructor(option: {
//     input: HTMLElement,
//     preferredCountries?: string[],
//     useUtilScript?: boolean,
//     singleton?: boolean;
//   }) {
//     option.singleton ??= false;
//     const intlOption: intlTelInput.Options = {
//       dropdownContainer: document.body,
//       preferredCountries: option.preferredCountries ?? ["cn", "id", "in", "tw", "us"],
//     };
//
//     if (option.useUtilScript ?? true)
//       intlOption.utilsScript = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js";
//
//     this.telInput = intlTelInput(option.input, intlOption)
//   }
//
//   onTelInput(input: string){
//     const tel: intlTelInput.Plugin = this.telInput;
//     tel.setNumber(input);
//     const selectedCountry = tel.getSelectedCountryData();
//     const formattedNumber = tel.getNumber();
//     const isValidNumber = tel.isValidNumber();
//     return {
//       number: formattedNumber,
//       isValid: isValidNumber
//     }
//   }
// }
//
// export function IntlTelInput(option: {
//   input?: HTMLElement,
//   preferredCountries?: string[],
//   useUtilScript?: boolean,
//   singleton?: boolean;
// }): IntlTelInputHelper{
//   option.singleton ??= false;
//   if (option.singleton && is.not.initialized(IntlTelInputHelper.singleton)){
//     return IntlTelInputHelper.singleton = new IntlTelInputHelper(option as any);
//   }else if (option.singleton && is.initialized(IntlTelInputHelper.singleton)){
//     return IntlTelInputHelper.singleton;
//   }else{
//     assert(is.initialized(option.input), "input should not be null");
//     return IntlTelInputHelper.singleton = new IntlTelInputHelper(option as any);
//   }
// }
