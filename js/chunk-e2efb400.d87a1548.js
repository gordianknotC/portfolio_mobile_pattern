(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2efb400"],{"011f":function(e,t,a){"use strict";a("613f")},"2e5c":function(e,t,a){"use strict";var c=a("7a23");const o={id:"main"},n={class:"container"};function r(e,t,a,r,s,b){const l=Object(c["resolveComponent"])("Header"),d=Object(c["resolveComponent"])("NavTab");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(l),Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",n,[Object(c["renderSlot"])(e.$slots,"default")])]),Object(c["createVNode"])(d)],64)}const s=e=>(Object(c["pushScopeId"])("data-v-56d210e4"),e=e(),Object(c["popScopeId"])(),e),b=s(()=>Object(c["createElementVNode"])("h1",{class:"text-hidden"},"Branding",-1));function l(e,t,a,o,n,r){const s=Object(c["resolveComponent"])("MyEarn"),l=Object(c["resolveComponent"])("van-image"),d=Object(c["resolveComponent"])("svg-icon"),i=Object(c["resolveComponent"])("router-link"),m=Object(c["resolveComponent"])("van-nav-bar");return Object(c["openBlock"])(),Object(c["createBlock"])(m,{"safe-area-inset-top":"",border:!1},{left:Object(c["withCtx"])(()=>[b,Object(c["createVNode"])(s)]),right:Object(c["withCtx"])(()=>[Object(c["createVNode"])(i,{class:"flex",to:{name:e.RouterNames.User}},{default:Object(c["withCtx"])(()=>[e.$user.state.avatarURL?(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:0,class:"user-img",width:"32",height:"32",src:"data:image/jpeg;base64,"+e.avatarURL,alt:"avatar"},null,8,["src"])):(Object(c["openBlock"])(),Object(c["createBlock"])(d,{key:1,name:"member",size:28}))]),_:1},8,["to"])]),_:1})}var d=a("b7f3"),i=a("a0aa"),m=a("fd95"),u=Object(c["defineComponent"])({name:"Header",components:{MyEarn:i["a"]},setup(){return{avatarURL:Object(c["computed"])(()=>m["d"].appStore.state.avatar),RouterNames:d["a"]}}}),j=(a("011f"),a("6b0d")),O=a.n(j);const p=O()(u,[["render",l],["__scopeId","data-v-56d210e4"]]);var f=p;const v=e=>(Object(c["pushScopeId"])("data-v-912536ec"),e=e(),Object(c["popScopeId"])(),e),N=v(()=>Object(c["createElementVNode"])("span",null,"Home",-1)),C=v(()=>Object(c["createElementVNode"])("span",null,"Game",-1)),V=v(()=>Object(c["createElementVNode"])("span",null,"Task",-1)),_=v(()=>Object(c["createElementVNode"])("span",null,"News",-1)),h=v(()=>Object(c["createElementVNode"])("span",null,"Friends",-1));function w(e,t,a,o,n,r){const s=Object(c["resolveComponent"])("SvgIcon"),b=Object(c["resolveComponent"])("van-tabbar-item"),l=Object(c["resolveComponent"])("van-tabbar");return Object(c["openBlock"])(),Object(c["createBlock"])(l,{modelValue:e.active,"onUpdate:modelValue":t[0]||(t[0]=t=>e.active=t),"active-color":"#3acdec","inactive-color":"#bfbfda",border:!1,placeholder:"","safe-area-inset-bottom":""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(b,{name:e.RouterNames.Home,to:{name:e.RouterNames.Home}},{icon:Object(c["withCtx"])(e=>[Object(c["createVNode"])(s,{name:"home",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(c["withCtx"])(()=>[N]),_:1},8,["name","to"]),Object(c["createVNode"])(b,{name:e.RouterNames.Game,to:{name:e.RouterNames.Game}},{icon:Object(c["withCtx"])(e=>[Object(c["createVNode"])(s,{name:"game",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(c["withCtx"])(()=>[C]),_:1},8,["name","to"]),Object(c["createVNode"])(b,{name:e.RouterNames.Quest,to:{name:e.RouterNames.Quest}},{icon:Object(c["withCtx"])(e=>[Object(c["createVNode"])(s,{name:"prize",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(c["withCtx"])(()=>[V]),_:1},8,["name","to"]),Object(c["createVNode"])(b,{name:e.RouterNames.News,to:{name:e.RouterNames.News}},{icon:Object(c["withCtx"])(e=>[Object(c["createVNode"])(s,{name:"news",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(c["withCtx"])(()=>[_]),_:1},8,["name","to"]),Object(c["createVNode"])(b,{name:e.RouterNames.Friends,icon:"home-o",to:{name:e.RouterNames.Friends}},{icon:Object(c["withCtx"])(e=>[Object(c["createVNode"])(s,{name:"friends",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(c["withCtx"])(()=>[h]),_:1},8,["name","to"])]),_:1},8,["modelValue"])}var k=a("1e5b"),g=a("6605"),x=a("0032"),E=Object(c["defineComponent"])({name:"NavTab",components:{SvgIcon:x["a"]},setup(){var e;const t=Object(g["d"])(),a=Object(k["d"])({active:null!==(e=t.name)&&void 0!==e?e:d["a"].Home});return{...Object(k["f"])(a),RouterNames:d["a"]}}});a("820d");const y=O()(E,[["render",w],["__scopeId","data-v-912536ec"]]);var B=y,R=Object(c["defineComponent"])({name:"MainLayout",components:{Header:f,NavTab:B}});const H=O()(R,[["render",r]]);t["a"]=H},"41ae":function(e,t,a){"use strict";a.r(t);var c=a("7a23");function o(e,t,a,o,n,r){const s=Object(c["resolveComponent"])("MainLayout");return Object(c["openBlock"])(),Object(c["createBlock"])(s)}var n=a("2e5c"),r=Object(c["defineComponent"])({name:"Friends",components:{MainLayout:n["a"]}}),s=a("6b0d"),b=a.n(s);const l=b()(r,[["render",o]]);t["default"]=l},"613f":function(e,t,a){},"820d":function(e,t,a){"use strict";a("da6e")},a0aa:function(e,t,a){"use strict";var c=a("7a23");const o={class:"grid grid-cols-2 gap-2"},n={class:"info"},r={class:"info__text"},s={class:"info"},b={class:"info__text"};function l(e,t,a,l,d,i){const m=Object(c["resolveComponent"])("svg-icon");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",n,[Object(c["createVNode"])(m,{name:"cash",size:28}),Object(c["createElementVNode"])("div",r,Object(c["toDisplayString"])(e.numeralHelper.asFloat(e.pay_out_balance,2)),1)]),Object(c["createElementVNode"])("div",s,[Object(c["createVNode"])(m,{name:"coin",size:28}),Object(c["createElementVNode"])("div",b,Object(c["toDisplayString"])(e.numeralHelper.asFloat(e.coin_balance,2)),1)])])}var d=a("1e5b"),i=a("c69a"),m=a("dcfe"),u=Object(c["defineComponent"])({name:"MyEarn",setup(){const e=Object(d["d"])({coin_balance:"",pay_out_balance:""}),t=async()=>{const t=await i["a"].GetBalance();e.coin_balance=t.data.coin_balance,e.pay_out_balance=t.data.pay_out_balance};return Object(d["c"])(async()=>{await t()}),{...Object(d["f"])(e),numeralHelper:m["a"]}}}),j=(a("f46c"),a("6b0d")),O=a.n(j);const p=O()(u,[["render",l],["__scopeId","data-v-6b7f6702"]]);t["a"]=p},da6e:function(e,t,a){},f22a:function(e,t,a){},f46c:function(e,t,a){"use strict";a("f22a")}}]);