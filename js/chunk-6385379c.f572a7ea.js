(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6385379c"],{"011f":function(e,t,c){"use strict";c("613f")},"2e5c":function(e,t,c){"use strict";var a=c("7a23");const n={id:"main"},o={class:"container"};function r(e,t,c,r,s,l){const b=Object(a["resolveComponent"])("Header"),d=Object(a["resolveComponent"])("NavTab");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(b),Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",o,[Object(a["renderSlot"])(e.$slots,"default")])]),Object(a["createVNode"])(d)],64)}const s=e=>(Object(a["pushScopeId"])("data-v-56d210e4"),e=e(),Object(a["popScopeId"])(),e),l=s(()=>Object(a["createElementVNode"])("h1",{class:"text-hidden"},"Branding",-1));function b(e,t,c,n,o,r){const s=Object(a["resolveComponent"])("MyEarn"),b=Object(a["resolveComponent"])("van-image"),d=Object(a["resolveComponent"])("svg-icon"),i=Object(a["resolveComponent"])("router-link"),m=Object(a["resolveComponent"])("van-nav-bar");return Object(a["openBlock"])(),Object(a["createBlock"])(m,{"safe-area-inset-top":"",border:!1},{left:Object(a["withCtx"])(()=>[l,Object(a["createVNode"])(s)]),right:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{class:"flex",to:{name:e.RouterNames.User}},{default:Object(a["withCtx"])(()=>[e.$user.state.avatarURL?(Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:0,class:"user-img",width:"32",height:"32",src:"data:image/jpeg;base64,"+e.avatarURL,alt:"avatar"},null,8,["src"])):(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:1,name:"member",size:28}))]),_:1},8,["to"])]),_:1})}var d=c("b7f3"),i=c("a0aa"),m=c("fd95"),j=Object(a["defineComponent"])({name:"Header",components:{MyEarn:i["a"]},setup(){return{avatarURL:Object(a["computed"])(()=>m["d"].appStore.state.avatar),RouterNames:d["a"]}}}),O=(c("011f"),c("6b0d")),u=c.n(O);const p=u()(j,[["render",b],["__scopeId","data-v-56d210e4"]]);var v=p;const f=e=>(Object(a["pushScopeId"])("data-v-912536ec"),e=e(),Object(a["popScopeId"])(),e),N=f(()=>Object(a["createElementVNode"])("span",null,"Home",-1)),w=f(()=>Object(a["createElementVNode"])("span",null,"Game",-1)),C=f(()=>Object(a["createElementVNode"])("span",null,"Task",-1)),V=f(()=>Object(a["createElementVNode"])("span",null,"News",-1)),h=f(()=>Object(a["createElementVNode"])("span",null,"Friends",-1));function _(e,t,c,n,o,r){const s=Object(a["resolveComponent"])("SvgIcon"),l=Object(a["resolveComponent"])("van-tabbar-item"),b=Object(a["resolveComponent"])("van-tabbar");return Object(a["openBlock"])(),Object(a["createBlock"])(b,{modelValue:e.active,"onUpdate:modelValue":t[0]||(t[0]=t=>e.active=t),"active-color":"#3acdec","inactive-color":"#bfbfda",border:!1,placeholder:"","safe-area-inset-bottom":""},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(l,{name:e.RouterNames.Home,to:{name:e.RouterNames.Home}},{icon:Object(a["withCtx"])(e=>[Object(a["createVNode"])(s,{name:"home",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(a["withCtx"])(()=>[N]),_:1},8,["name","to"]),Object(a["createVNode"])(l,{name:e.RouterNames.Game,to:{name:e.RouterNames.Game}},{icon:Object(a["withCtx"])(e=>[Object(a["createVNode"])(s,{name:"game",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(a["withCtx"])(()=>[w]),_:1},8,["name","to"]),Object(a["createVNode"])(l,{name:e.RouterNames.Quest,to:{name:e.RouterNames.Quest}},{icon:Object(a["withCtx"])(e=>[Object(a["createVNode"])(s,{name:"prize",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(a["withCtx"])(()=>[C]),_:1},8,["name","to"]),Object(a["createVNode"])(l,{name:e.RouterNames.News,to:{name:e.RouterNames.News}},{icon:Object(a["withCtx"])(e=>[Object(a["createVNode"])(s,{name:"news",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(a["withCtx"])(()=>[V]),_:1},8,["name","to"]),Object(a["createVNode"])(l,{name:e.RouterNames.Friends,icon:"home-o",to:{name:e.RouterNames.Friends}},{icon:Object(a["withCtx"])(e=>[Object(a["createVNode"])(s,{name:"friends",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(a["withCtx"])(()=>[h]),_:1},8,["name","to"])]),_:1},8,["modelValue"])}var g=c("1e5b"),k=c("6605"),E=c("0032"),x=Object(a["defineComponent"])({name:"NavTab",components:{SvgIcon:E["a"]},setup(){var e;const t=Object(k["d"])(),c=Object(g["d"])({active:null!==(e=t.name)&&void 0!==e?e:d["a"].Home});return{...Object(g["f"])(c),RouterNames:d["a"]}}});c("820d");const B=u()(x,[["render",_],["__scopeId","data-v-912536ec"]]);var y=B,S=Object(a["defineComponent"])({name:"MainLayout",components:{Header:v,NavTab:y}});const I=u()(S,[["render",r]]);t["a"]=I},"4ff0":function(e,t,c){},5884:function(e,t,c){"use strict";c.r(t);var a=c("7a23");const n=e=>(Object(a["pushScopeId"])("data-v-7f58f7c3"),e=e(),Object(a["popScopeId"])(),e),o=n(()=>Object(a["createElementVNode"])("div",{class:"page-title"},"News",-1)),r={class:"my-4 mx-2"};function s(e,t,c,n,s,l){const b=Object(a["resolveComponent"])("SingleNews"),d=Object(a["resolveComponent"])("van-tab"),i=Object(a["resolveComponent"])("van-tabs"),m=Object(a["resolveComponent"])("MainLayout");return Object(a["openBlock"])(),Object(a["createBlock"])(m,null,{default:Object(a["withCtx"])(()=>[o,Object(a["createVNode"])(i,{color:"#3acdec",background:"#2a2a83","line-width":"0","line-height":"0",active:e.tabActive,"onUpdate:active":t[0]||(t[0]=t=>e.tabActive=t),sticky:"",swipeable:"",ellipsis:!1,onChange:e.onClickTab},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.newsCategory,e=>(Object(a["openBlock"])(),Object(a["createBlock"])(d,{title:e.text},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(20,e=>Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(b)])),64))]),_:2},1032,["title"]))),256))]),_:1},8,["active","onChange"])]),_:1})}var l=c("2e5c"),b=c("1e5b"),d=c("b000");const i=e=>(Object(a["pushScopeId"])("data-v-47bf86a4"),e=e(),Object(a["popScopeId"])(),e),m={class:"single_news"},j=i(()=>Object(a["createElementVNode"])("div",{class:"news-img rounded-lg mr-4"},null,-1)),O={class:"news-detail"},u={class:"news-line"},p=i(()=>Object(a["createElementVNode"])("div",{class:"category"},"ball",-1)),v={class:"newsDate"},f=i(()=>Object(a["createElementVNode"])("div",{class:"text-white text-sm ml-1"},"2021/06/20",-1)),N=i(()=>Object(a["createElementVNode"])("div",{class:"mt-2"},[Object(a["createElementVNode"])("div",{class:"context"},"Lorem ipsum dolorsitamet consetetur")],-1));function w(e,t,c,n,o,r){const s=Object(a["resolveComponent"])("SvgIcon");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",m,[j,Object(a["createElementVNode"])("div",O,[Object(a["createElementVNode"])("div",u,[p,Object(a["createElementVNode"])("div",v,[Object(a["createVNode"])(s,{name:"clock",size:24}),f])]),N])])}var C=Object(a["defineComponent"])({name:"SingleNews",setup(e){Object(b["d"])({});return{}}}),V=(c("a6e1"),c("6b0d")),h=c.n(V);const _=h()(C,[["render",w],["__scopeId","data-v-47bf86a4"]]);var g=_,k=Object(a["defineComponent"])({name:"News",components:{MainLayout:l["a"],SingleNews:g},setup(){const e=Object(a["reactive"])({tabActive:0}),t=()=>{};return{...Object(b["f"])(e),onClickTab:t,newsCategory:d["d"]}}});c("f88b");const E=h()(k,[["render",s],["__scopeId","data-v-7f58f7c3"]]);t["default"]=E},"613f":function(e,t,c){},"820d":function(e,t,c){"use strict";c("da6e")},a0aa:function(e,t,c){"use strict";var a=c("7a23");const n={class:"grid grid-cols-2 gap-2"},o={class:"info"},r={class:"info__text"},s={class:"info"},l={class:"info__text"};function b(e,t,c,b,d,i){const m=Object(a["resolveComponent"])("svg-icon");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[Object(a["createElementVNode"])("div",o,[Object(a["createVNode"])(m,{name:"cash",size:28}),Object(a["createElementVNode"])("div",r,Object(a["toDisplayString"])(e.numeralHelper.asFloat(e.pay_out_balance,2)),1)]),Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(m,{name:"coin",size:28}),Object(a["createElementVNode"])("div",l,Object(a["toDisplayString"])(e.numeralHelper.asFloat(e.coin_balance,2)),1)])])}var d=c("1e5b"),i=c("c69a"),m=c("dcfe"),j=Object(a["defineComponent"])({name:"MyEarn",setup(){const e=Object(d["d"])({coin_balance:"",pay_out_balance:""}),t=async()=>{const t=await i["a"].GetBalance();e.coin_balance=t.data.coin_balance,e.pay_out_balance=t.data.pay_out_balance};return Object(d["c"])(async()=>{await t()}),{...Object(d["f"])(e),numeralHelper:m["a"]}}}),O=(c("f46c"),c("6b0d")),u=c.n(O);const p=u()(j,[["render",b],["__scopeId","data-v-6b7f6702"]]);t["a"]=p},a6e1:function(e,t,c){"use strict";c("4ff0")},da6e:function(e,t,c){},f01d:function(e,t,c){},f22a:function(e,t,c){},f46c:function(e,t,c){"use strict";c("f22a")},f88b:function(e,t,c){"use strict";c("f01d")}}]);