import {BaseFormImpl} from "~/appCommon/extendBase/baseFormImpl";
import {asCascadeClass, is} from "~/appCommon/extendBase/impls/utils/typeInferernce";
import {computed, ref, watch} from "~/appCommon/base/vueTypes";
import {ComputedRef, Ref} from "vue";
import {facade} from "~/types/facadeTypes";
import {OTPVerificationPayload, SuccessResponse} from "~/types/apiTypes";
import {startsWith} from "ramda";
import {APP_CONFIGS} from "~/config";
import {NavigationGuardNext, RouteLocationNormalized} from "vue-router";
import {VerifyOTPPeriodCounter} from "~/store/counter/counter";
import RouterNames from "~/router/name";


export class PhoneFieldMixin{
  canSubmit: ComputedRef<boolean>;

  constructor(
    public model: BaseFormImpl<{phone_number: string}>
  ) {
    this.canSubmit = computed(()=>model.canSubmit.value);
    asCascadeClass(this);
  }

  private storePhoneNumber(phone_number: string){
    facade.paramStore.updateFromRecord({
      phone_number,
      canSendOTP: true,
    })
  }

  onGetVerificationCode(name: string){
    if (APP_CONFIGS.SIMULATIONS.TEST_OTP_COUNTER){
      this.storePhoneNumber(this.model.getPayload().phone_number);
      facade.router.push({name});
      return;
    }

    const phone_number = this.model.getPayload().phone_number;
    if ( facade.userStore.isAuthorized.value
      && facade.userStore.state.phone_number === phone_number
    ){
      if (facade.router.currentRoute.value.name === RouterNames.SignUp){
        facade.appStore.notifyError(facade.i18n.value.userAlreadyExist)
      }else{
        this.storePhoneNumber(phone_number);
        facade.router.push({name})
      }
    }else{
      this.storePhoneNumber(phone_number);
      facade.router.push({name});
    }
  }

  onTelInput(value: string, countryCode:string = APP_CONFIGS.DEFAULT_MODELS.COUNTRY_CODE){
    if (is.not.empty(countryCode)){
      if (!startsWith(countryCode!, value)){
        if (value[0] == countryCode![0]){
          value = countryCode!;
        }else{
          value = countryCode + value;
        }
      }
    }
    this.model.state.phone_number.value = value;
    this.model.notifyOnInput(this.model.state.phone_number.dataKey);
  }

  async mount(vantField: Ref<any>){
  }
}


export class OTPMixin{
  canSubmit: ComputedRef<boolean>;
  counter: VerifyOTPPeriodCounter;
  counterText: ComputedRef<string>;
  canResend: ComputedRef<boolean>;
  exceedCounterText: ComputedRef<string>;

  constructor(
    public model: BaseFormImpl<OTPVerificationPayload>,
    public pwdLength: number,
    public keyboardVisible: Ref<boolean> = ref(false),
    public OTPFieldError: Ref<string> = ref("")
  ) {
    this.canSubmit = computed(()=>model.canSubmit.value);
    this.counter = new VerifyOTPPeriodCounter();
    console.log("counter:", this.counter);

    this. counterText = computed(()=>{
      const text =  this.counter.currentCounter.value;
      const enabled =  this.counter.counterEnabled.value;
      if (enabled)
        return `(${text})`;
      return "";
    });

    this. exceedCounterText = computed(()=>{
      return facade.i18n.value.counterExceedMaxRetries.format({
        seconds: this.counter.currentCounter.value});
    });

    this.canResend = computed(()=>{
      return !this.counter.counterEnabled.value;
    });

    asCascadeClass(this);
  }

  informError(){
    const val = this.model.state.verification_code.value;
    console.log('info:', this.OTPFieldError.value, val.length);
    if (val.length > this.pwdLength) {
      this.OTPFieldError.value = "invalid format";
    }else if (val.length == this.pwdLength && is.not.empty(this.OTPFieldError.value)){
    }else{
      this.OTPFieldError.value = "";
    }
  }

  clamp(){
    const val = this.model.state.verification_code.value;
    this.model.state.verification_code.value = val
      .substr(0, Math.min(this.pwdLength, val.length));
  }

  onFocus(){
    console.log('focus');
    this.keyboardVisible.value = true;
  }

  onBlur(){
    console.log('blur');
    this.keyboardVisible.value = false;
  }

  async onSubmit(option: {routeName: string}){
    const result = await this.model.submit();
    if (result){
      await facade.router.push({name: option.routeName});
    }
    return true;
  }

  onBeforeRouteLeave(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext){
    facade.paramStore.state.canSendOTP = false;
    next();
  }

  sendOTP(){
    const counter = this.counter;
    console.group("MOUNT");
    if (counter.counterEnabled.value){
      console.log("continue");
      counter.continue();
    }else if (counter.hasExceedMaxRetries.value){
      console.log("restart...");
      counter.reset();
      counter.start();
    }else{
      console.log("start");
      counter.start();
    }
    console.groupEnd();
  }

  async mount(otpRequester: ()=>Promise<SuccessResponse>){
    if (APP_CONFIGS.SIMULATIONS.TEST_OTP_COUNTER){
      if (facade.paramStore.state.canSendOTP){
        // this.counter.reset();
        this.counter.start();
      }else{
        this.counter.continue();
      }
      return;
    }
    try{
      if (facade.paramStore.state.canSendOTP){
        const result = await otpRequester();
        if (result.succeed) {
          facade.appStore.notifyInfo("otp has been send");
          facade.paramStore.state.canSendOTP = false;
          this.counter.start();
        } else {
          facade.appStore.notifyError("otp send failed");
        }
      }else{
        this.counter.continue();
      }
    }catch(e: any){
      facade.appStore.notifyError(e);
      facade.router.back();
    }

    watch(()=>this.model.state.verification_code.value, ()=>{
      this.informError();
      this.clamp();
    });
    // this.model.state.phone_number.value = facade.paramStore.state.phone_number
    console.log("load phone number", facade.paramStore.state.phone_number, facade.paramStore);
  }
}
