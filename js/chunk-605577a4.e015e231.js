(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-605577a4"],{"3f2f":function(e,t,c){"use strict";c("a25f")},"72f9":function(e,t,c){"use strict";var a=c("7a23");const n={id:"main"},o={class:"container"};function s(e,t,c,s,r,d){const i=Object(a["resolveComponent"])("van-nav-bar");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(i,{class:"mb-4","left-text":e.pageTitle,"left-arrow":"","safe-area-inset-top":"",border:!1,onClickLeft:e.backRouter},{right:Object(a["withCtx"])(()=>[Object(a["renderSlot"])(e.$slots,"navRight",{},void 0,!0)]),_:3},8,["left-text","onClickLeft"]),Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",o,[Object(a["renderSlot"])(e.$slots,"default",{},void 0,!0)])])],64)}var r=Object(a["defineComponent"])({name:"SubLayout",slot:["navRight"],props:{pageTitle:{type:String,default:""},backRouter:{type:Function,default:()=>{window.history.back()}}}}),d=(c("3f2f"),c("6b0d")),i=c.n(d);const l=i()(r,[["render",s],["__scopeId","data-v-bec054d8"]]);t["a"]=l},"87f0":function(e,t,c){"use strict";c("df20")},a25f:function(e,t,c){},c369:function(e,t,c){"use strict";c.r(t);var a=c("7a23");const n=e=>(Object(a["pushScopeId"])("data-v-21acd047"),e=e(),Object(a["popScopeId"])(),e),o={class:"task-detail"},s={class:"flex items-center mb-4"},r=n(()=>Object(a["createElementVNode"])("div",{class:"quest-img"},null,-1)),d={class:"quest_name"},i={class:"quest_reward"},l={class:"reward"},u={class:"mb-2 flex items-center opacity-50"},b={class:"text-sm text-white"},p={class:"text-white text-base"};function m(e,t,c,n,m,j){const O=Object(a["resolveComponent"])("SubLayout"),f=Object(a["resolveComponent"])("SvgIcon"),v=Object(a["resolveComponent"])("van-button");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(O,{pageTitle:"Task detail"}),Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",s,[r,Object(a["createElementVNode"])("div",d,Object(a["toDisplayString"])(e.questDetail.title),1),Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("p",l,Object(a["toDisplayString"])(e.questDetail.worth),1),Object(a["createVNode"])(f,{name:"coin",size:28})])]),Object(a["createElementVNode"])("div",u,[Object(a["createVNode"])(f,{class:"text-xl mr-1",name:"quota",size:28}),Object(a["createElementVNode"])("div",b,Object(a["toDisplayString"])(e.questDetail.amount||0)+" quota",1)]),Object(a["createElementVNode"])("div",p,Object(a["toDisplayString"])(e.questDetail.content),1),Object(a["createVNode"])(v,{class:"receiveBtn btn-tertiary",onClick:e.doReceive},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Receive Task")]),_:1},8,["onClick"])])],64)}c("14d9");var j=c("b7f3"),O=c("1e5b"),f=c("72f9"),v=c("c69a"),w=c("fd95"),y=c("6c43"),g=Object(a["defineComponent"])({name:"QuestDetail",components:{SubLayout:f["a"]},props:{questId:{type:String},reward_type:{type:String}},setup(e){const t=Object(O["d"])({questDetail:{}}),c=async()=>{const t={extra_mission_id:Number(e.questId),reward_type:Number(e.reward_type)};await v["a"].PostQuest(t).then(t=>{t&&y["a"].success("success");const c=e.reward_type,a=e.questId;w["d"].router.push({name:j["a"].QuestUpload,params:{reward_type:c,questId:a}})})},a=async()=>{console.log("props.questId",e.questId),console.log("props.rewardType",e.reward_type);const c={questId:Number(e.questId),reward_type:Number(e.reward_type)},a=await v["a"].getQuest(c);console.log("questDetail",a),t.questDetail=a.data};return Object(O["c"])(async()=>{await a()}),{...Object(O["f"])(t),doReceive:c}}}),N=(c("87f0"),c("6b0d")),q=c.n(N);const _=q()(g,[["render",m],["__scopeId","data-v-21acd047"]]);t["default"]=_},df20:function(e,t,c){}}]);