(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2090f038"],{"011f":function(e,t,a){"use strict";a("613f")},"2e5c":function(e,t,a){"use strict";var c=a("7a23");const o={id:"main"},n={class:"container"};function r(e,t,a,r,s,l){const i=Object(c["resolveComponent"])("Header"),b=Object(c["resolveComponent"])("NavTab");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(i),Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",n,[Object(c["renderSlot"])(e.$slots,"default")])]),Object(c["createVNode"])(b)],64)}const s=e=>(Object(c["pushScopeId"])("data-v-56d210e4"),e=e(),Object(c["popScopeId"])(),e),l=s(()=>Object(c["createElementVNode"])("h1",{class:"text-hidden"},"Branding",-1));function i(e,t,a,o,n,r){const s=Object(c["resolveComponent"])("MyEarn"),i=Object(c["resolveComponent"])("van-image"),b=Object(c["resolveComponent"])("svg-icon"),d=Object(c["resolveComponent"])("router-link"),m=Object(c["resolveComponent"])("van-nav-bar");return Object(c["openBlock"])(),Object(c["createBlock"])(m,{"safe-area-inset-top":"",border:!1},{left:Object(c["withCtx"])(()=>[l,Object(c["createVNode"])(s)]),right:Object(c["withCtx"])(()=>[Object(c["createVNode"])(d,{class:"flex",to:{name:e.RouterNames.User}},{default:Object(c["withCtx"])(()=>[e.$user.state.avatarURL?(Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:0,class:"user-img",width:"32",height:"32",src:"data:image/jpeg;base64,"+e.avatarURL,alt:"avatar"},null,8,["src"])):(Object(c["openBlock"])(),Object(c["createBlock"])(b,{key:1,name:"member",size:28}))]),_:1},8,["to"])]),_:1})}var b=a("b7f3"),d=a("a0aa"),m=a("fd95"),j=Object(c["defineComponent"])({name:"Header",components:{MyEarn:d["a"]},setup(){return{avatarURL:Object(c["computed"])(()=>m["d"].appStore.state.avatar),RouterNames:b["a"]}}}),O=(a("011f"),a("6b0d")),u=a.n(O);const p=u()(j,[["render",i],["__scopeId","data-v-56d210e4"]]);var f=p;const v=e=>(Object(c["pushScopeId"])("data-v-912536ec"),e=e(),Object(c["popScopeId"])(),e),N=v(()=>Object(c["createElementVNode"])("span",null,"Home",-1)),h=v(()=>Object(c["createElementVNode"])("span",null,"Game",-1)),g=v(()=>Object(c["createElementVNode"])("span",null,"Task",-1)),_=v(()=>Object(c["createElementVNode"])("span",null,"News",-1)),V=v(()=>Object(c["createElementVNode"])("span",null,"Friends",-1));function w(e,t,a,o,n,r){const s=Object(c["resolveComponent"])("SvgIcon"),l=Object(c["resolveComponent"])("van-tabbar-item"),i=Object(c["resolveComponent"])("van-tabbar");return Object(c["openBlock"])(),Object(c["createBlock"])(i,{modelValue:e.active,"onUpdate:modelValue":t[0]||(t[0]=t=>e.active=t),"active-color":"#3acdec","inactive-color":"#bfbfda",border:!1,placeholder:"","safe-area-inset-bottom":""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(l,{name:e.RouterNames.Home,to:{name:e.RouterNames.Home}},{icon:Object(c["withCtx"])(e=>[Object(c["createVNode"])(s,{name:"home",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(c["withCtx"])(()=>[N]),_:1},8,["name","to"]),Object(c["createVNode"])(l,{name:e.RouterNames.Game,to:{name:e.RouterNames.Game}},{icon:Object(c["withCtx"])(e=>[Object(c["createVNode"])(s,{name:"game",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(c["withCtx"])(()=>[h]),_:1},8,["name","to"]),Object(c["createVNode"])(l,{name:e.RouterNames.Quest,to:{name:e.RouterNames.Quest}},{icon:Object(c["withCtx"])(e=>[Object(c["createVNode"])(s,{name:"prize",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(c["withCtx"])(()=>[g]),_:1},8,["name","to"]),Object(c["createVNode"])(l,{name:e.RouterNames.News,to:{name:e.RouterNames.News}},{icon:Object(c["withCtx"])(e=>[Object(c["createVNode"])(s,{name:"news",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(c["withCtx"])(()=>[_]),_:1},8,["name","to"]),Object(c["createVNode"])(l,{name:e.RouterNames.Friends,icon:"home-o",to:{name:e.RouterNames.Friends}},{icon:Object(c["withCtx"])(e=>[Object(c["createVNode"])(s,{name:"friends",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(c["withCtx"])(()=>[V]),_:1},8,["name","to"])]),_:1},8,["modelValue"])}var C=a("1e5b"),k=a("6605"),E=a("0032"),y=Object(c["defineComponent"])({name:"NavTab",components:{SvgIcon:E["a"]},setup(){var e;const t=Object(k["d"])(),a=Object(C["d"])({active:null!==(e=t.name)&&void 0!==e?e:b["a"].Home});return{...Object(C["f"])(a),RouterNames:b["a"]}}});a("820d");const x=u()(y,[["render",w],["__scopeId","data-v-912536ec"]]);var B=x,S=Object(c["defineComponent"])({name:"MainLayout",components:{Header:f,NavTab:B}});const R=u()(S,[["render",r]]);t["a"]=R},"613f":function(e,t,a){},"820d":function(e,t,a){"use strict";a("da6e")},9966:function(e,t,a){"use strict";a("ce55")},a0aa:function(e,t,a){"use strict";var c=a("7a23");const o={class:"grid grid-cols-2 gap-2"},n={class:"info"},r={class:"info__text"},s={class:"info"},l={class:"info__text"};function i(e,t,a,i,b,d){const m=Object(c["resolveComponent"])("svg-icon");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",n,[Object(c["createVNode"])(m,{name:"cash",size:28}),Object(c["createElementVNode"])("div",r,Object(c["toDisplayString"])(e.numeralHelper.asFloat(e.pay_out_balance,2)),1)]),Object(c["createElementVNode"])("div",s,[Object(c["createVNode"])(m,{name:"coin",size:28}),Object(c["createElementVNode"])("div",l,Object(c["toDisplayString"])(e.numeralHelper.asFloat(e.coin_balance,2)),1)])])}var b=a("1e5b"),d=a("c69a"),m=a("dcfe"),j=Object(c["defineComponent"])({name:"MyEarn",setup(){const e=Object(b["d"])({coin_balance:"",pay_out_balance:""}),t=async()=>{const t=await d["a"].GetBalance();e.coin_balance=t.data.coin_balance,e.pay_out_balance=t.data.pay_out_balance};return Object(b["c"])(async()=>{await t()}),{...Object(b["f"])(e),numeralHelper:m["a"]}}}),O=(a("f46c"),a("6b0d")),u=a.n(O);const p=u()(j,[["render",i],["__scopeId","data-v-6b7f6702"]]);t["a"]=p},ce55:function(e,t,a){},d9c4:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o=e=>(Object(c["pushScopeId"])("data-v-1873f30e"),e=e(),Object(c["popScopeId"])(),e),n=o(()=>Object(c["createElementVNode"])("div",{class:"game-box_icon"},null,-1)),r={class:"info"},s={class:"info__title"},l={class:"info__bar"},i={class:"task"},b={class:"flex items-center"},d={class:"percentage"};function m(e,t,a,o,m,j){const O=Object(c["resolveComponent"])("SvgIcon"),u=Object(c["resolveComponent"])("MainLayout");return Object(c["openBlock"])(),Object(c["createBlock"])(u,null,{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.gameData,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"game-box",key:e},[n,Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",s,Object(c["toDisplayString"])(e.name),1),Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",{class:"info__bar__outer",style:Object(c["normalizeStyle"])({width:e.progressWidth})},[Object(c["createElementVNode"])("div",i,"Task "+Object(c["toDisplayString"])(e.game_schedule)+"/"+Object(c["toDisplayString"])(e.mission.length),1)],4)])]),Object(c["createElementVNode"])("div",b,[Object(c["createElementVNode"])("div",d,Object(c["toDisplayString"])(e.complete_worth)+"/"+Object(c["toDisplayString"])(e.total_worth),1),Object(c["createVNode"])(O,{name:"coin",size:24})])]))),128))]),_:1})}a("14d9");var j=a("2e5c"),O=a("1e5b"),u=a("c69a"),p=a("76a7"),f=Object(c["defineComponent"])({name:"Game",components:{MainLayout:j["a"]},setup(){const e=Object(c["reactive"])({progressWidth:"50%",gameData:[]}),t=async()=>{const t=await u["a"].getGame();e.gameData=t.data},a=t=>{t.map(t=>{const a=t.mission.filter(e=>p["c"].not.undefined(e.complete_datetime));t.game_schedule=a.length,console.log("completeMission.length",a.length),t.progressWidth=a.length/t.mission.length*100+"%",console.log("state.progressWidth",e.progressWidth)})},o=e=>{e.map(e=>{let t=[];e.mission.map(e=>{t.push(e.worth)});let a=0;for(let r=0;r<t.length;r++)a+=Number(t[r]);e.total_worth=a;const c=e.mission.filter(e=>e.complete_datetime);let o=[];c.map(e=>{o.push(e.worth)});let n=0;for(let r=0;r<o.length;r++)n+=Number(o[r]);e.complete_worth=n})};return Object(c["onMounted"])(async()=>{await t(),await a(e.gameData),await o(e.gameData)}),{...Object(O["f"])(e)}}}),v=(a("9966"),a("6b0d")),N=a.n(v);const h=N()(f,[["render",m],["__scopeId","data-v-1873f30e"]]);t["default"]=h},da6e:function(e,t,a){},f22a:function(e,t,a){},f46c:function(e,t,a){"use strict";a("f22a")}}]);