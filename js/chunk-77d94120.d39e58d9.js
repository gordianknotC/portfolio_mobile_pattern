(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77d94120"],{"0601":function(e,t,n){"use strict";n("7514")},"3f2f":function(e,t,n){"use strict";n("a25f")},"5cbf":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const a={class:"van-field__label"},o={class:"passwordContainer relative"},c={class:"van-field__label absolute bottom-0"},s={class:"text-active font-medium"},u={key:0,class:"fab fab__decoration-text"},i={class:"fab fab__bottom"};function l(e,t,n,l,d,b){const f=Object(r["resolveComponent"])("van-password-input"),p=Object(r["resolveComponent"])("PrimBt"),m=Object(r["resolveComponent"])("van-number-keyboard"),h=Object(r["resolveComponent"])("SubLayout");return Object(r["openBlock"])(),Object(r["createBlock"])(h,{pageTitle:e.$txt.PT_SignInOTP},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("span",a,Object(r["toDisplayString"])(e.$txt.otpNumber),1),Object(r["createElementVNode"])("div",o,[Object(r["createVNode"])(f,{value:e.model.state.verification_code.value,length:e.pwdLength,gutter:8,"error-info":e.OTPFieldError,focused:e.keyboardVisible,onFocus:e.onFocus},null,8,["value","length","error-info","focused","onFocus"]),Object(r["createElementVNode"])("div",c,[Object(r["createElementVNode"])("span",s,Object(r["toDisplayString"])(e.$txt.resendOTPNumber.format({seconds:e.counterText})),1)])]),Object(r["createElementVNode"])("section",null,[e.hasCounterExceedMaxRetries?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",u,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.exceedCounterText),1)])):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",i,[Object(r["createVNode"])(p,{type:"default",disabled:!e.canSubmit,onClick:e.onSubmitOTP},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(e.$txt.submit)+" "+Object(r["toDisplayString"])(e.counterText),1)]),_:1},8,["disabled","onClick"])])]),Object(r["createVNode"])(m,{modelValue:e.model.state.verification_code.value,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model.state.verification_code.value=t),show:e.keyboardVisible,onBlur:e.onBlur,onInput:e.onInput,onDelete:e.onDelete},null,8,["modelValue","show","onBlur","onInput","onDelete"])]),_:1},8,["pageTitle"])}var d=n("72f9"),b=n("1e5b"),f=n("e706"),p=n("c234"),m=n("b7f3"),h=n("beb3"),O=n("fd95"),v=n("6605"),j=Object(r["defineComponent"])({name:"SignInOTP",components:{SubLayout:d["a"],PrimBt:f["a"]},setup(e){const t=6,n=new p["c"]({onCancel(){n.resetState()}}),r=new h["a"](n,t),a=r.onFocus.bind(r),o=r.onBlur.bind(r),c=()=>r.onSubmit({routeName:m["a"].SignIn_UpdatePwd});return Object(b["c"])(async()=>{await r.mount(()=>O["d"].apiService.forgotPassword({phone_number:O["d"].paramStore.state.phone_number})),console.log("OtpMixin:",r)}),Object(v["c"])((e,t,n)=>r.onBeforeRouteLeave(e,t,n)),{pwdLength:t,keyboardVisible:r.keyboardVisible,OTPFieldError:r.OTPFieldError,model:n,onInput(e){console.log(n.state.verification_code.value,e)},onDelete(){console.log(n.state.verification_code.value)},onFocus:a,onBlur:o,canSubmit:Object(b["a"])(()=>{const e=r.counter.hasExceedMaxRetries.value,t=r.canSubmit.value;return!e&&t}),onSubmitOTP:c,otpMixin:r,hasCounterExceedMaxRetries:r.counter.hasExceedMaxRetries,counterText:r.counterText,exceedCounterText:r.exceedCounterText}}}),y=(n("0601"),n("6b0d")),g=n.n(y);const _=g()(j,[["render",l],["__scopeId","data-v-133012d1"]]);t["default"]=_},"72f9":function(e,t,n){"use strict";var r=n("7a23");const a={id:"main"},o={class:"container"};function c(e,t,n,c,s,u){const i=Object(r["resolveComponent"])("van-nav-bar");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(i,{class:"mb-4","left-text":e.pageTitle,"left-arrow":"","safe-area-inset-top":"",border:!1,onClickLeft:e.backRouter},{right:Object(r["withCtx"])(()=>[Object(r["renderSlot"])(e.$slots,"navRight",{},void 0,!0)]),_:3},8,["left-text","onClickLeft"]),Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("div",o,[Object(r["renderSlot"])(e.$slots,"default",{},void 0,!0)])])],64)}var s=Object(r["defineComponent"])({name:"SubLayout",slot:["navRight"],props:{pageTitle:{type:String,default:""},backRouter:{type:Function,default:()=>{window.history.back()}}}}),u=(n("3f2f"),n("6b0d")),i=n.n(u);const l=i()(s,[["render",c],["__scopeId","data-v-bec054d8"]]);t["a"]=l},7514:function(e,t,n){},a25f:function(e,t,n){},beb3:function(e,t,n){"use strict";n.d(t,"b",(function(){return D})),n.d(t,"a",(function(){return M}));n("14d9");var r=n("76a7"),a=n("1e5b"),o=n("fd95"),c=n("2fc8");function s(e){var t,n=[];while(!(t=e.next()).done)n.push(t.value);return n}function u(e,t,n){var r=0,a=n.length;while(r<a){if(e(t,n[r]))return!0;r+=1}return!1}function i(e){var t=String(e).match(/^function (\w*)/);return null==t?"":t[1]}var l=n("c325");function d(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}var b="function"===typeof Object.is?Object.is:d,f=n("66e1"),p=n("9e65");function m(e,t,n,r){var a=s(e),o=s(t);function c(e,t){return h(e,t,n.slice(),r.slice())}return!u((function(e,t){return!u(c,t,e)}),o,a)}function h(e,t,n,r){if(b(e,t))return!0;var a=Object(p["a"])(e);if(a!==Object(p["a"])(t))return!1;if(null==e||null==t)return!1;if("function"===typeof e["fantasy-land/equals"]||"function"===typeof t["fantasy-land/equals"])return"function"===typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t)&&"function"===typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e);if("function"===typeof e.equals||"function"===typeof t.equals)return"function"===typeof e.equals&&e.equals(t)&&"function"===typeof t.equals&&t.equals(e);switch(a){case"Arguments":case"Array":case"Object":if("function"===typeof e.constructor&&"Promise"===i(e.constructor))return e===t;break;case"Boolean":case"Number":case"String":if(typeof e!==typeof t||!b(e.valueOf(),t.valueOf()))return!1;break;case"Date":if(!b(e.valueOf(),t.valueOf()))return!1;break;case"Error":return e.name===t.name&&e.message===t.message;case"RegExp":if(e.source!==t.source||e.global!==t.global||e.ignoreCase!==t.ignoreCase||e.multiline!==t.multiline||e.sticky!==t.sticky||e.unicode!==t.unicode)return!1;break}var o=n.length-1;while(o>=0){if(n[o]===e)return r[o]===t;o-=1}switch(a){case"Map":return e.size===t.size&&m(e.entries(),t.entries(),n.concat([e]),r.concat([t]));case"Set":return e.size===t.size&&m(e.values(),t.values(),n.concat([e]),r.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var c=Object(f["a"])(e);if(c.length!==Object(f["a"])(t).length)return!1;var s=n.concat([e]),u=r.concat([t]);o=c.length-1;while(o>=0){var d=c[o];if(!Object(l["a"])(d,t)||!h(t[d],e[d],s,u))return!1;o-=1}return!0}var O=Object(c["a"])((function(e,t){return h(e,t,[],[])})),v=O,j=n("fcfb");function y(e){return null!=e&&"function"===typeof e["@@transducer/step"]}function g(e,t,n){return function(){if(0===arguments.length)return n();var r=Array.prototype.slice.call(arguments,0),a=r.pop();if(!Object(j["a"])(a)){var o=0;while(o<e.length){if("function"===typeof a[e[o]])return a[e[o]].apply(a,r);o+=1}if(y(a)){var c=t.apply(null,r);return c(a)}}return n.apply(this,arguments)}}function _(e){return e&&e["@@transducer/reduced"]?e:{"@@transducer/value":e,"@@transducer/reduced":!0}}var S={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}},w=function(){function e(e,t){this.xf=t,this.n=e,this.i=0}return e.prototype["@@transducer/init"]=S.init,e.prototype["@@transducer/result"]=S.result,e.prototype["@@transducer/step"]=function(e,t){this.i+=1;var n=0===this.n?e:this.xf["@@transducer/step"](e,t);return this.n>=0&&this.i>=this.n?_(n):n},e}(),x=Object(c["a"])((function(e,t){return new w(e,t)})),T=x;function E(e,t){return function(){var n=arguments.length;if(0===n)return t();var r=arguments[n-1];return Object(j["a"])(r)||"function"!==typeof r[e]?t.apply(this,arguments):r[e].apply(r,Array.prototype.slice.call(arguments,0,n-1))}}var P=n("4aa2"),k=n("9ebd");function C(e){return function t(n,r,a){switch(arguments.length){case 0:return t;case 1:return Object(k["a"])(n)?t:Object(c["a"])((function(t,r){return e(n,t,r)}));case 2:return Object(k["a"])(n)&&Object(k["a"])(r)?t:Object(k["a"])(n)?Object(c["a"])((function(t,n){return e(t,r,n)})):Object(k["a"])(r)?Object(c["a"])((function(t,r){return e(n,t,r)})):Object(P["a"])((function(t){return e(n,r,t)}));default:return Object(k["a"])(n)&&Object(k["a"])(r)&&Object(k["a"])(a)?t:Object(k["a"])(n)&&Object(k["a"])(r)?Object(c["a"])((function(t,n){return e(t,n,a)})):Object(k["a"])(n)&&Object(k["a"])(a)?Object(c["a"])((function(t,n){return e(t,r,n)})):Object(k["a"])(r)&&Object(k["a"])(a)?Object(c["a"])((function(t,r){return e(n,t,r)})):Object(k["a"])(n)?Object(P["a"])((function(t){return e(t,r,a)})):Object(k["a"])(r)?Object(P["a"])((function(t){return e(n,t,a)})):Object(k["a"])(a)?Object(P["a"])((function(t){return e(n,r,t)})):e(n,r,a)}}}var N=C(E("slice",(function(e,t,n){return Array.prototype.slice.call(n,e,t)}))),V=N,F=Object(c["a"])(g(["take"],T,(function(e,t){return V(0,e<0?1/0:e,t)}))),A=F,R=Object(c["a"])((function(e,t){return v(A(e.length,t),e)})),B=R,I=n("d70b"),q=n("6c6d"),L=n("b7f3");class D{constructor(e){this.model=e,this.canSubmit=Object(a["a"])(()=>e.canSubmit.value),Object(r["a"])(this)}storePhoneNumber(e){o["d"].paramStore.updateFromRecord({phone_number:e,canSendOTP:!0})}onGetVerificationCode(e){if(I["a"].SIMULATIONS.TEST_OTP_COUNTER)return this.storePhoneNumber(this.model.getPayload().phone_number),void o["d"].router.push({name:e});const t=this.model.getPayload().phone_number;o["d"].userStore.isAuthorized.value&&o["d"].userStore.state.phone_number===t&&o["d"].router.currentRoute.value.name===L["a"].SignUp?o["d"].appStore.notifyError(o["d"].i18n.value.userAlreadyExist):(this.storePhoneNumber(t),o["d"].router.push({name:e}))}onTelInput(e,t=I["a"].DEFAULT_MODELS.COUNTRY_CODE){r["c"].not.empty(t)&&(B(t,e)||(e=e[0]==t[0]?t:t+e)),this.model.state.phone_number.value=e,this.model.notifyOnInput(this.model.state.phone_number.dataKey)}async mount(e){}}class M{constructor(e,t,n=Object(a["e"])(!1),c=Object(a["e"])("")){this.model=e,this.pwdLength=t,this.keyboardVisible=n,this.OTPFieldError=c,this.canSubmit=Object(a["a"])(()=>e.canSubmit.value),this.counter=new q["a"],console.log("counter:",this.counter),this.counterText=Object(a["a"])(()=>{const e=this.counter.currentCounter.value,t=this.counter.counterEnabled.value;return t?`(${e})`:""}),this.exceedCounterText=Object(a["a"])(()=>o["d"].i18n.value.counterExceedMaxRetries.format({seconds:this.counter.currentCounter.value})),this.canResend=Object(a["a"])(()=>!this.counter.counterEnabled.value),Object(r["a"])(this)}informError(){const e=this.model.state.verification_code.value;console.log("info:",this.OTPFieldError.value,e.length),e.length>this.pwdLength?this.OTPFieldError.value="invalid format":e.length==this.pwdLength&&r["c"].not.empty(this.OTPFieldError.value)||(this.OTPFieldError.value="")}clamp(){const e=this.model.state.verification_code.value;this.model.state.verification_code.value=e.substr(0,Math.min(this.pwdLength,e.length))}onFocus(){console.log("focus"),this.keyboardVisible.value=!0}onBlur(){console.log("blur"),this.keyboardVisible.value=!1}async onSubmit(e){const t=await this.model.submit();return t&&await o["d"].router.push({name:e.routeName}),!0}onBeforeRouteLeave(e,t,n){o["d"].paramStore.state.canSendOTP=!1,n()}sendOTP(){const e=this.counter;console.group("MOUNT"),e.counterEnabled.value?(console.log("continue"),e.continue()):e.hasExceedMaxRetries.value?(console.log("restart..."),e.reset(),e.start()):(console.log("start"),e.start()),console.groupEnd()}async mount(e){if(I["a"].SIMULATIONS.TEST_OTP_COUNTER)o["d"].paramStore.state.canSendOTP?this.counter.start():this.counter.continue();else{try{if(o["d"].paramStore.state.canSendOTP){const t=await e();t.succeed?(o["d"].appStore.notifyInfo("otp has been send"),o["d"].paramStore.state.canSendOTP=!1,this.counter.start()):o["d"].appStore.notifyError("otp send failed")}else this.counter.continue()}catch(t){o["d"].appStore.notifyError(t),o["d"].router.back()}Object(a["g"])(()=>this.model.state.verification_code.value,()=>{this.informError(),this.clamp()}),console.log("load phone number",o["d"].paramStore.state.phone_number,o["d"].paramStore)}}}},c234:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"e",(function(){return m}));var r=n("fd95"),a=n("76a7"),o=n("2545"),c=n("8ff1"),s=n("404c"),u=n("8bd1"),i=n("4534");class l extends o["a"]{constructor(e){super(Object.assign(null!==e&&void 0!==e?e:{},{state:{username:s["a"].username,password:s["a"].password},rules:c["c"],request:r["d"].userStore.login,messages:c["a"]})),Object(a["a"])(this)}}class d extends o["a"]{constructor(e){super(Object.assign(null!==e&&void 0!==e?e:{},{state:{phone_number:s["a"].phone_number},rules:c["c"],request:r["d"].userStore.forgotPassword,messages:c["a"]})),Object(a["a"])(this)}getPayload(){const e=super.getPayload(),t=Object(i["a"])(e.phone_number);return e.phone_number=t.number,e}}class b extends o["a"]{constructor(e){super(Object.assign(null!==e&&void 0!==e?e:{},{state:{phone_number:s["a"].hiddenField({dataKey:"phone_number",value:r["d"].paramStore.state.phone_number}),verification_code:s["a"].verification_code},rules:c["c"],request:r["d"].userStore.verifyForgotPassword,messages:c["a"]})),Object(a["a"])(this)}getPayload(){const e=super.getPayload(),t=Object(i["a"])(e.phone_number);return e.phone_number=t.number,e}}class f extends o["a"]{constructor(e){super(Object.assign(null!==e&&void 0!==e?e:{},{state:{new_password:s["a"].new_password,old_password:s["a"].old_password},rules:c["c"],request:r["d"].userStore.updatePassword,messages:c["a"]})),Object(a["a"])(this)}}class p extends o["a"]{constructor(e){super(Object.assign(null!==e&&void 0!==e?e:{},{state:{username:s["a"].username,password:s["a"].password,confirm_password:s["a"].confirm_password,phone_number:s["a"].hiddenField({dataKey:"phone_number"})},rules:c["c"],request:r["d"].userStore.register,messages:c["a"]})),Object(a["a"])(this)}getPayload(){const e=super.getPayload();return e.phone_number=r["d"].paramStore.state.phone_number,console.log("payload 1:",e),Object(u["a"])(["username","password","phone_number"],e)}}class m extends o["a"]{constructor(e){super(Object.assign(null!==e&&void 0!==e?e:{},{state:{verification_code:s["a"].verification_code,phone_number:s["a"].hiddenField({dataKey:"phone_number",value:r["d"].paramStore.state.phone_number})},rules:c["c"],request:r["d"].apiService.verifyOTP,messages:c["a"]})),Object(a["a"])(this)}}}}]);