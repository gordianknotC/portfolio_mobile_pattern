(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3f2185e"],{"144a":function(e,t,a){"use strict";a.r(t);var o=a("7a23");const n={class:"dot-border flex"};function l(e,t,a,l,c,r){const i=Object(o["resolveComponent"])("van-field"),s=Object(o["resolveComponent"])("SvgIcon"),d=Object(o["resolveComponent"])("van-uploader"),u=Object(o["resolveComponent"])("van-button"),b=Object(o["resolveComponent"])("van-form"),m=Object(o["resolveComponent"])("SubLayout");return Object(o["openBlock"])(),Object(o["createBlock"])(m,{pageTitle:"Contact us"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{onSubmit:e.onSubmit},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),name:"email",placeholder:"example@gmail.com",label:"Your email",border:!1,type:"email",rules:[{required:!0,message:"Please enter your email"}]},null,8,["modelValue"]),Object(o["createVNode"])(i,{modelValue:e.title,"onUpdate:modelValue":t[1]||(t[1]=t=>e.title=t),label:"Title",name:"title",placeholder:"Let us know how we can help you",border:!1,rules:[{required:!0,message:"Please enter question title"}]},null,8,["modelValue"]),Object(o["createVNode"])(i,{modelValue:e.content,"onUpdate:modelValue":t[2]||(t[2]=t=>e.content=t),rows:"3",label:"Full description",autosize:"",border:!1,type:"textarea",maxlength:"50",placeholder:"Please include as much information as possible",rules:[{required:!0,message:"Please describe the detail of question"}]},null,8,["modelValue"]),Object(o["createVNode"])(i,{class:"upload",name:"uploader",label:"Upload","preview-size":"100%"},{input:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",n,[Object(o["createVNode"])(d,{modelValue:e.fileList,"onUpdate:modelValue":t[3]||(t[3]=t=>e.fileList=t),"max-size":512e3,onOversize:e.onOversize,multiple:"","max-count":5,"after-read":e.afterRead},{default:Object(o["withCtx"])(()=>[e.fileList.length<5?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:0,name:"download",color:"#bfbfda",size:64})):Object(o["createCommentVNode"])("",!0)]),_:1},8,["modelValue","onOversize","after-read"])])]),_:1}),Object(o["createVNode"])(u,{class:"submit-btn","native-type":"submit"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Submit")]),_:1})]),_:1},8,["onSubmit"])]),_:1})}a("14d9");var c=a("72f9"),r=a("0032"),i=a("1e5b"),s=a("6c43"),d=a("c69a"),u=a("6605"),b=a("b7f3"),m=Object(o["defineComponent"])({name:"Contact",components:{SvgIcon:r["a"],SubLayout:c["a"]},setup(){const e=Object(o["reactive"])({email:"",title:"",content:"",remark:"",fileList:[],imgBase64Array:[]}),t=e=>{Object(s["a"])("file size can't be over 500kb")},a=Object(u["e"])(),n=async()=>{let t={title:e.title,email:e.email,content:e.content,contexts:e.imgBase64Array};try{await d["a"].postFeedback(t),a.push({name:b["a"].ContactList})}catch(o){Object(s["a"])(o.data.message?o.data.message:o.data.error_message)}},l=t=>{t.length>1?t.forEach(t=>{e.imgBase64Array.push(t.content)}):e.imgBase64Array.push(t.content),console.log(e.imgBase64Array)};return{...Object(i["f"])(e),onOversize:t,onSubmit:n,afterRead:l}}}),f=(a("3655"),a("6b0d")),p=a.n(f);const O=p()(m,[["render",l],["__scopeId","data-v-3e8a67d8"]]);t["default"]=O},3655:function(e,t,a){"use strict";a("ea6f")},"3f2f":function(e,t,a){"use strict";a("a25f")},"72f9":function(e,t,a){"use strict";var o=a("7a23");const n={id:"main"},l={class:"container"};function c(e,t,a,c,r,i){const s=Object(o["resolveComponent"])("van-nav-bar");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(s,{class:"mb-4","left-text":e.pageTitle,"left-arrow":"","safe-area-inset-top":"",border:!1,onClickLeft:e.backRouter},{right:Object(o["withCtx"])(()=>[Object(o["renderSlot"])(e.$slots,"navRight",{},void 0,!0)]),_:3},8,["left-text","onClickLeft"]),Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("div",l,[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)])])],64)}var r=Object(o["defineComponent"])({name:"SubLayout",slot:["navRight"],props:{pageTitle:{type:String,default:""},backRouter:{type:Function,default:()=>{window.history.back()}}}}),i=(a("3f2f"),a("6b0d")),s=a.n(i);const d=s()(r,[["render",c],["__scopeId","data-v-bec054d8"]]);t["a"]=d},a25f:function(e,t,a){},ea6f:function(e,t,a){}}]);