(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38b64240"],{"011f":function(e,t,c){"use strict";c("613f")},"2e5c":function(e,t,c){"use strict";var a=c("7a23");const o={id:"main"},n={class:"container"};function r(e,t,c,r,s,l){const i=Object(a["resolveComponent"])("Header"),d=Object(a["resolveComponent"])("NavTab");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(i),Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",n,[Object(a["renderSlot"])(e.$slots,"default")])]),Object(a["createVNode"])(d)],64)}const s=e=>(Object(a["pushScopeId"])("data-v-56d210e4"),e=e(),Object(a["popScopeId"])(),e),l=s(()=>Object(a["createElementVNode"])("h1",{class:"text-hidden"},"Branding",-1));function i(e,t,c,o,n,r){const s=Object(a["resolveComponent"])("MyEarn"),i=Object(a["resolveComponent"])("van-image"),d=Object(a["resolveComponent"])("svg-icon"),b=Object(a["resolveComponent"])("router-link"),m=Object(a["resolveComponent"])("van-nav-bar");return Object(a["openBlock"])(),Object(a["createBlock"])(m,{"safe-area-inset-top":"",border:!1},{left:Object(a["withCtx"])(()=>[l,Object(a["createVNode"])(s)]),right:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,{class:"flex",to:{name:e.RouterNames.User}},{default:Object(a["withCtx"])(()=>[e.$user.state.avatarURL?(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:0,class:"user-img",width:"32",height:"32",src:"data:image/jpeg;base64,"+e.avatarURL,alt:"avatar"},null,8,["src"])):(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:1,name:"member",size:28}))]),_:1},8,["to"])]),_:1})}var d=c("b7f3"),b=c("a0aa"),m=c("fd95"),O=Object(a["defineComponent"])({name:"Header",components:{MyEarn:b["a"]},setup(){return{avatarURL:Object(a["computed"])(()=>m["d"].appStore.state.avatar),RouterNames:d["a"]}}}),j=(c("011f"),c("6b0d")),A=c.n(j);const p=A()(O,[["render",i],["__scopeId","data-v-56d210e4"]]);var u=p;const f=e=>(Object(a["pushScopeId"])("data-v-912536ec"),e=e(),Object(a["popScopeId"])(),e),g=f(()=>Object(a["createElementVNode"])("span",null,"Home",-1)),C=f(()=>Object(a["createElementVNode"])("span",null,"Game",-1)),v=f(()=>Object(a["createElementVNode"])("span",null,"Task",-1)),N=f(()=>Object(a["createElementVNode"])("span",null,"News",-1)),w=f(()=>Object(a["createElementVNode"])("span",null,"Friends",-1));function B(e,t,c,o,n,r){const s=Object(a["resolveComponent"])("SvgIcon"),l=Object(a["resolveComponent"])("van-tabbar-item"),i=Object(a["resolveComponent"])("van-tabbar");return Object(a["openBlock"])(),Object(a["createBlock"])(i,{modelValue:e.active,"onUpdate:modelValue":t[0]||(t[0]=t=>e.active=t),"active-color":"#3acdec","inactive-color":"#bfbfda",border:!1,placeholder:"","safe-area-inset-bottom":""},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(l,{name:e.RouterNames.Home,to:{name:e.RouterNames.Home}},{icon:Object(a["withCtx"])(e=>[Object(a["createVNode"])(s,{name:"home",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(a["withCtx"])(()=>[g]),_:1},8,["name","to"]),Object(a["createVNode"])(l,{name:e.RouterNames.Game,to:{name:e.RouterNames.Game}},{icon:Object(a["withCtx"])(e=>[Object(a["createVNode"])(s,{name:"game",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(a["withCtx"])(()=>[C]),_:1},8,["name","to"]),Object(a["createVNode"])(l,{name:e.RouterNames.Quest,to:{name:e.RouterNames.Quest}},{icon:Object(a["withCtx"])(e=>[Object(a["createVNode"])(s,{name:"prize",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(a["withCtx"])(()=>[v]),_:1},8,["name","to"]),Object(a["createVNode"])(l,{name:e.RouterNames.News,to:{name:e.RouterNames.News}},{icon:Object(a["withCtx"])(e=>[Object(a["createVNode"])(s,{name:"news",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(a["withCtx"])(()=>[N]),_:1},8,["name","to"]),Object(a["createVNode"])(l,{name:e.RouterNames.Friends,icon:"home-o",to:{name:e.RouterNames.Friends}},{icon:Object(a["withCtx"])(e=>[Object(a["createVNode"])(s,{name:"friends",size:28,color:e.active?"#3acdec":"#bfbfda"},null,8,["color"])]),default:Object(a["withCtx"])(()=>[w]),_:1},8,["name","to"])]),_:1},8,["modelValue"])}var h=c("1e5b"),E=c("6605"),V=c("0032"),k=Object(a["defineComponent"])({name:"NavTab",components:{SvgIcon:V["a"]},setup(){var e;const t=Object(E["d"])(),c=Object(h["d"])({active:null!==(e=t.name)&&void 0!==e?e:d["a"].Home});return{...Object(h["f"])(c),RouterNames:d["a"]}}});c("820d");const Q=A()(k,[["render",B],["__scopeId","data-v-912536ec"]]);var x=Q,S=Object(a["defineComponent"])({name:"MainLayout",components:{Header:u,NavTab:x}});const D=A()(S,[["render",r]]);t["a"]=D},"32d0":function(e,t,c){"use strict";c("336e")},"336e":function(e,t,c){},"5a67":function(e,t,c){"use strict";c("cef4")},"5bb8":function(e,t,c){"use strict";c("e115")},"613f":function(e,t,c){},7230:function(e,t,c){e.exports=c.p+"img/wheel-big.2defe90d.png"},"820d":function(e,t,c){"use strict";c("da6e")},"9b1d":function(e,t,c){e.exports=c.p+"img/fandream11.319b3d37.png"},a0aa:function(e,t,c){"use strict";var a=c("7a23");const o={class:"grid grid-cols-2 gap-2"},n={class:"info"},r={class:"info__text"},s={class:"info"},l={class:"info__text"};function i(e,t,c,i,d,b){const m=Object(a["resolveComponent"])("svg-icon");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createElementVNode"])("div",n,[Object(a["createVNode"])(m,{name:"cash",size:28}),Object(a["createElementVNode"])("div",r,Object(a["toDisplayString"])(e.numeralHelper.asFloat(e.pay_out_balance,2)),1)]),Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(m,{name:"coin",size:28}),Object(a["createElementVNode"])("div",l,Object(a["toDisplayString"])(e.numeralHelper.asFloat(e.coin_balance,2)),1)])])}var d=c("1e5b"),b=c("c69a"),m=c("dcfe"),O=Object(a["defineComponent"])({name:"MyEarn",setup(){const e=Object(d["d"])({coin_balance:"",pay_out_balance:""}),t=async()=>{const t=await b["a"].GetBalance();e.coin_balance=t.data.coin_balance,e.pay_out_balance=t.data.pay_out_balance};return Object(d["c"])(async()=>{await t()}),{...Object(d["f"])(e),numeralHelper:m["a"]}}}),j=(c("f46c"),c("6b0d")),A=c.n(j);const p=A()(O,[["render",i],["__scopeId","data-v-6b7f6702"]]);t["a"]=p},bcc0:function(e,t){e.exports="data:image/png;base64,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"},cef4:function(e,t,c){},da6e:function(e,t,c){},e115:function(e,t,c){},e253:function(e,t,c){e.exports=c.p+"img/invite.7930f089.png"},ed14:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAtKADAAQAAAABAAAAtAAAAAB1HbRDAAAMk0lEQVR4Ae2d3Y8kVRnGt1FgCUuYYAyjS2IRQUYl7MqNc6HsKBqIidlNuDCRC/4V/pThwo87ICSGT2mRizUxMhLESZZkBxNlNFEHWcIASvM8Y5+hp7q6urqqTlW973ne5E19nTrnvM/761Onqmt6Rqci2mQy2UD1Z+Fn4Dfn/Hpsy/wq8DFCez/n17D919FotBsr7FGbFQPgm1Df3XCCfBf8BrhMCuQV+Ag73oIT7CsA/IN8gbrbrQANkL+EDjwIJ8QyKbCqAoT71wD7b6uemC/fCGiAfBsq/AH86/BGdeU7pu3kFJgg4jfhBPufdaOvBSFAvhUNPgD/Fvy6uo3rPClQoMAn2PcafAyw3ys4XrprZaAB89dQ4yPwG0tr1kEp0EyBD3H6k4B6pRvIlYAGzBfQyBZ8pfNQXiYF6ijAacjLgPqVqidXAhMg8xHbRfi9VStWOSnQogKvo65nADYfBZbaUqAB8y2o4VH4emlNOigF4irwDqr/+bJ5dekN3XRkFsxxE6XaqynAR8M/nTK58IxSoHHWJbhG5oXy6UDHChBqTn0X2kKg8Un4Ds765sIzdUAK9KPAvVM2C1svBBonEGR+8yeTAkNU4EEwylcs5mwOaBTk8+UfwZfeMM7Vph1SoBsFyOZFsHo639wc0CjwXTjfjJNJgSErwDc4OS0+YSeABvFrOLp5ooQ2pMBwFdgEswT72E4Ajb1b8M8fH9WKFBi2AmR1a7aLx0CD9C/iwH2zB7UuBQwocD/YvT308xho7HgIPrsdymgpBYasAJn9YejgEcAgnE827gw7tZQCxhS4EwwfPfEIIzKf6X3OWBDqrhQICpDdo7+WCkDzbwBlUsCyAv8HGkM1H1IXfutiOTr1PTkFvkqWOUKfhXMOLZMClhXga85nCfQdlqNQ36XAjAJ3EGh+OyiTAh4UOEOgT3x16CEqxZCsAgI62dT7DHxNUw6fiU01Ko3QqWbeadxHQOvtOqfZTTCs05xyyKSAGwUEtJtUKhAqIKDFgSsFBLSrdCoYAS0GXCkgoF2lU8EIaDHgSgEB7SqdCkZAiwFXCghoV+lUMAJaDLhSQEC7SqeCEdBiwJUCAtpVOhWMgBYDrhQQ0K7SqWAEtBhwpYCAdpVOBSOgxYArBQS0q3QqGAEtBlwpIKBdpVPBCGgx4EoBAe0qnQom1R+Z4f/jWJ/63H8jNYrFHvp9CN832v9Wup0S0AT4HDyDc92bXZgGRKh34W/Dd6b7klmM8DP+jzuPNkN8TDaXqdkBAv4j/DKcoLs3zyM0f8j9Ijxzn8XFAVIDfpi/DX8azpHbtXkFegNZI8xe5sdNIaQOP4FzCvIc3O1o7RFognweLptXgLqsw5+Au4Ta22M7wTwPcX4PgX4M7vLq5Qnoh5Ekjcx5fIu33ULtBegMeeONj6y6AoSaVzRX5gHocMPjKjEdBbOBduhuzAPQeprRDEfqt9asiuGcbR1oJsLVCNMDGrzCbfbQbpQmrQO9FUWV9Co9h5AJtnmzDDQTcI/5DAwjAGrp4gmRZaA3kAQXo8owmD56cWsgXanfDcvfFGb1wy49k2+p7eVKZNj+Sm5f7M3QD35o+eG9NXKDfIxn3iwDHQuwPWR1nMvsFrZjtZdr6tTfseOX8IOZA89inVBfgt84s7/t1QwV7rVdaZf1WZ1y8OkG3ZsR5m34LMwhxt3psbAdY5nFqLTLOi0D3aVOXbXFkfiwpLF9HOP7zbFsPVbFXdVrFWjzwhck+EPs2yvYn9+1k9/R4vbpFuvqpSqrQJsXviDbHH2rWNkIXuX8sjJd3SeU9aHRMatAZ42iHubJt1fsVuwPc+z6K4ZZr5hVoGPe6ddTsvlZBCmrUM1GhTJNipiezlkF2rToJbRdKDnGQ3yyw6+pY5rpp0cWgTYt+BISMxzn229Fl31+iPl3gUXHsLs1M62vxS9W6gr+LlJ+UCHtRWW4j9/cLTPCVnUuvKiu8zjAacUOnH0OdXJfF2b66mcR6LqCE5BxTSJ4Ln2ZZSjw2LJCFY4T4s0K5WIUYdtmzeKUw7TgBkgx/ejOItCZASisd9HsoGERaI+P7Ib2Aag7res9jpTm0Hz9Mqug+AHK0GdtDRv0ZdYHCPzKfH/aMbbfxge+SqzLtOjluDWgmwh9HgrTl9lvUGCcK8Tzlj0jzp0SfZMgPwvfybW0ie0teBOw13J1mtm0NuUwK3TLRBDmbXgeZjZzGb7NlQbWx5WmQXc/O9Ua0GaF/kzyVtbGqCVMM4oq5LHfFR2ouO90xXKDK2YNaLNCt5z5opE530SVMvlzwrbZR3fWgM6C4okvDyvEXzaCVzg9+lfsVfqwchlrQDe50VlZHOMnNL2amZzeWQPapMgRPhhZhTo3KpQpK2LyBtwS0CYFLiOmwbFljxA5Oi8rs6x5k3oL6GVpHebxDN3ia6ZFRph5rCmQJq+Glr5Y6Urgom8UuW9odh4dyuB8PLcPp2Vw/k42oW5qbdTRtA8rn28J6K4EJih0C8ZR+KFIHTX56M7SlKOrEToSHyar7WoQaU0cS0CbE7e1LPVXkblBxBLQJi+B/bHYSsuc0pgyK0BrdO4HKwEdSXdzl75IOnRdrTndrYzQ5kaKrsmL1J65K6OAjkSCk2rN3bdYAdrcpc8J0AzD1ChtBWhTojqCmaGYGkysAG3u0ucIalP3LxaA1ujc76dDQLesv6lLXsuxD6E6U/pbGKFNjRBDILDlPpi6QgrolrPvsDpT9y8WXh/t+5IX/tXaYU+wXkK753pq21yzFkboPi95fcNMoJ6Cx/xXbuagLeuwBaDL+h/z2BBgDvH1DXXfV8mgw9KlgC6WaEgwhx72CXVf060Qe+WlBaD3KkfTTsEhwhwi6wNq/o7eQejA0JcWgN7vUMQhwxxk6BrqLvUPMdZeWgB6D9FxlIhtFmAOGnQJ9U5o1MLSAtCcv+1GFtMSzEGKLqDmQBJb+xBPK0sLQDPQcSvRFldiEeYQSWyoL6MhMzeEFMUK0Afo63PscMtmGeYgRSyoqc04NGJlaQVo6snR4u0WhfUAc5Cjbag51WCd5swS0BR3G97Gt2aeYKYuNALI/w/T1AjzNtzU040QtIV3OUJfw5KJ47yOv+FWx/iBMDn6VAh2jDIH8IfhdX5Lmx90amMSZvT71GgymTzOFYO2jj4zcVXfBuN0ZQzfg3u3NQS4Ba/6UhNH5TH8Mty0WQY6CM/kbcIJOH12ZCLEHG12pksskjJqswHP4NRm9ldUqc0BfHfqWNg3D0Dbz4IiaE0BazeFrQWuinwqIKB95jXZqAR0sqn3GbiA9pnXZKMS0Mmm3mfgAtpnXpONSkAnm3qfgQton3lNNioBnWzqfQYuoH3mNdmoBHSyqfcZuID2mddkoxLQyabeZ+AC2mdek41KQCebep+BC2ifeU02KgGdbOp9Bi6gfeY12agEdLKp9xm4gPaZ12SjEtDJpt5n4ALaZ16TjUpAJ5t6n4ET6EOfoSmqBBU4JNDXEgxcIftU4JqA9pnYVKMS0Klm3mncAtppYlMNS0CnmnmncR8BzZ+blUkBDwrs86bwKlyP7jykM+0Y+KPtV68bjUb/w8pbaWuh6B0ocIUsc4Sm8VfcZVLAsgJHDAegOUJzpJZJAYsKkN0r7PgR0BiqOYfmXFomBSwqcBUMcw594j/JvmAxEvVZCkCB54MKYcpxCoTzf9S9EQ5oKQWMKPAG2P1H6Osx0NMdL2H5STiopRQYuAL/Rf9enO3jCaBB+r9x8A+zBbQuBQaswO/BLP/X4rGdAHq6d4wlyZdJgSErwJvA3+Y7OAc0iOf70b/KF9S2FBiYAk+D1ffzfZoDmgVQkNOOV/OFtS0FBqLAq2D0zaK+FAI9LcgbxD8VnaR9UqBHBQgy2Sy0hUDjEzDBGU/B9TZeoXTa2YMCfLT85JTNwuYXAs3SOPFjLH4Bf5fbMinQowL/Qds/mzK5sBujhUdmDkwmk+ux+WP4fTO7tSoFulLgdTT0zDKY2ZlKQIdeA+wHsP69Vc8L52spBVZUgNPelwHyK1XPWwloVgqoN7B4BM5RWyYFYinA58ycL6/0avPKQLP3gPoWLC7A74eXzsNxXCYFVlGAr168Bh8D5vdWOZFlawEdGgHYX8D69+HfaFpXqFPLZBXg9OLP8BcB8r/qqtAI6NAowP4y1gn2XWGfllJgBQX4ByYvAeR3VjinsGgrQIeaAfZNWL8bznk24b4BLpMCeQU+wg5CzPkx/xbwg3yBututAp3vBAAn2GfhZ+A351w3lRDEsfE7DL5rMet8T+gvAPhKrLg/BaQYu7eeBMQBAAAAAElFTkSuQmCC"},f22a:function(e,t,c){},f46c:function(e,t,c){"use strict";c("f22a")},f4a9:function(e,t,c){"use strict";c.r(t);var a=c("7a23");const o=e=>(Object(a["pushScopeId"])("data-v-3f0f5183"),e=e(),Object(a["popScopeId"])(),e),n={class:"home-page"},r=o(()=>Object(a["createElementVNode"])("h2",{class:"text-hidden"},"HomePage",-1)),s=o(()=>Object(a["createElementVNode"])("div",{class:"banner"},[Object(a["createElementVNode"])("img",{src:"https://picsum.photos/id/1002/375/120",alt:"banner"})],-1)),l={class:"notice"},i={class:"flex items-center"},d={class:"grid grid-cols-2 gap-4 mb-8"},b=["src"],m=["src"],O={class:"news"},j={class:"section-header"},A=o(()=>Object(a["createElementVNode"])("h3",null,"News",-1)),p=o(()=>Object(a["createElementVNode"])("img",{class:"pic",src:"https://picsum.photos/id/10/103/81",alt:""},null,-1)),u={class:"content"},f={class:"flex items-center mb-2"},g={class:"flex items-center"},C=o(()=>Object(a["createElementVNode"])("time",{class:"text"},"2021/06/20",-1)),v=o(()=>Object(a["createElementVNode"])("p",{class:"text-light"},"Lorem ipsum dolorsitamet consetetur",-1)),N={class:"other"},w={class:"other-links"},B=o(()=>Object(a["createElementVNode"])("span",null,null,-1)),h=o(()=>Object(a["createElementVNode"])("span",null,null,-1));function E(e,t,o,E,V,k){const Q=Object(a["resolveComponent"])("svg-icon"),x=Object(a["resolveComponent"])("van-swipe-item"),S=Object(a["resolveComponent"])("van-swipe"),D=Object(a["resolveComponent"])("van-notice-bar"),y=Object(a["resolveComponent"])("router-link"),M=Object(a["resolveComponent"])("HomePageQuestSection"),H=Object(a["resolveComponent"])("HomePageGameSection"),I=Object(a["resolveComponent"])("van-tag"),R=Object(a["resolveComponent"])("van-button"),T=Object(a["resolveComponent"])("MainLayout");return Object(a["openBlock"])(),Object(a["createBlock"])(T,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("article",n,[r,s,Object(a["createElementVNode"])("div",l,[Object(a["createVNode"])(D,{scrollable:!1},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(Q,{class:"notification",name:"notification",size:24}),Object(a["createVNode"])(S,{class:"notice-swipe",vertical:"",autoplay:2e3,"show-indicators":!1},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.ann,e=>(Object(a["openBlock"])(),Object(a["createBlock"])(x,{key:e},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.title),1)]),_:2},1024))),128))]),_:1})])]),_:1})]),Object(a["createElementVNode"])("div",d,[Object(a["createVNode"])(y,{class:"wheel",to:{name:e.RouterNames.SpinWheel}},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:c("7230"),alt:"Wheel"},null,8,b)]),_:1},8,["to"]),Object(a["createVNode"])(y,{class:"invite",to:{name:e.RouterNames.InviteFriends}},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:c("e253"),alt:"Invite"},null,8,m)]),_:1},8,["to"])]),Object(a["createVNode"])(M),Object(a["createVNode"])(H),Object(a["createElementVNode"])("section",O,[Object(a["createElementVNode"])("header",j,[A,Object(a["createVNode"])(y,{class:"more",to:{name:e.RouterNames.News}},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("MORE")]),_:1},8,["to"])]),(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(3,e=>Object(a["createElementVNode"])("div",{class:"news-item",key:e},[p,Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("div",f,[Object(a["createVNode"])(I,null,{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("cricket")]),_:1}),Object(a["createElementVNode"])("div",g,[Object(a["createVNode"])(Q,{class:"mr-1",name:"clock",size:24}),C])]),v])])),64))]),Object(a["createElementVNode"])("section",N,[Object(a["createVNode"])(R,{class:"btn-tertiary btn-contact",to:{name:e.RouterNames.ContactList},block:""},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Contact us")]),_:1},8,["to"]),Object(a["createElementVNode"])("div",w,[Object(a["createVNode"])(y,{to:"/"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Terms of Service")]),_:1}),B,Object(a["createVNode"])(y,{to:"/"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Privacy policy")]),_:1}),h,Object(a["createVNode"])(y,{to:"/"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Contest rules")]),_:1})])])])]),_:1})}var V=c("2e5c"),k=c("b7f3");const Q=e=>(Object(a["pushScopeId"])("data-v-bfb02744"),e=e(),Object(a["popScopeId"])(),e),x={class:"rewards"},S={class:"section-header"},D=Q(()=>Object(a["createElementVNode"])("h3",null,"Claim your rewards",-1)),y={class:"card"},M=Q(()=>Object(a["createElementVNode"])("h4",{class:"card__title"},"Earn money",-1)),H={class:"rewards-item"},I=["src"],R={class:"text-base"},T={class:"flex flex-col justify-center items-center"},X={class:"flex justify-center items-center"},L={class:"amount"},F=["onClick"],K={class:"card"},P=Q(()=>Object(a["createElementVNode"])("h4",{class:"card__title"},"Earn coin",-1)),z={class:"rewards-item"},q=["src"],U={class:"flex flex-col justify-center items center"},Y={class:"flex justify-center items-center"},Z={class:"amount"},G=["onClick"];function J(e,t,o,n,r,s){const l=Object(a["resolveComponent"])("router-link"),i=Object(a["resolveComponent"])("svg-icon"),d=Object(a["resolveComponent"])("van-button");return Object(a["openBlock"])(),Object(a["createElementBlock"])("section",x,[Object(a["createElementVNode"])("header",S,[D,Object(a["createVNode"])(l,{class:"more",to:{name:e.RouterNames.Quest}},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("MORE")]),_:1},8,["to"])]),Object(a["createElementVNode"])("div",y,[M,(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.threeCoin,t=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",H,[Object(a["createElementVNode"])("img",{class:"rewards-item__pic",src:c("ed14"),alt:"Game"},null,8,I),Object(a["createElementVNode"])("div",R,Object(a["toDisplayString"])(t.title),1),Object(a["createElementVNode"])("div",T,[Object(a["createElementVNode"])("div",X,[Object(a["createElementVNode"])("span",L,Object(a["toDisplayString"])(e.numeralHelper.asFloat(t.worth,2)),1),Object(a["createVNode"])(i,{name:"cash",size:24})]),t.received?(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",{key:0,class:"expired",onClick:c=>e.goReceiveDetail(t.id,t.reward_type)},"Receive",8,F)):(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:1,class:"btn-tertiary mt-1",onClick:c=>e.goDetail(t.id,t.reward_type),size:"mini"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Receive")]),_:2},1032,["onClick"]))])]))),256))]),Object(a["createElementVNode"])("div",K,[P,(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.threeMoney,t=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",z,[Object(a["createElementVNode"])("img",{class:"rewards-item__pic",src:c("bcc0"),alt:"Rules"},null,8,q),Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(t.title),1),Object(a["createElementVNode"])("div",U,[Object(a["createElementVNode"])("div",Y,[Object(a["createElementVNode"])("span",Z,Object(a["toDisplayString"])(e.numeralHelper.asFloat(t.worth,2)),1),Object(a["createVNode"])(i,{name:"coin",size:24})]),t.received?(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",{key:0,class:"expired",onClick:c=>e.goReceiveDetail(t.id,t.reward_type)},"Receive",8,G)):(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:1,class:"btn-tertiary mt-1",onClick:c=>e.goDetail(t.id,t.reward_type),size:"mini"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Receive")]),_:2},1032,["onClick"]))])]))),256))])])}c("14d9");var W=c("1e5b"),_=c("c69a"),$=c("dcfe"),ee=c("76a7"),te=c("fd95"),ce=Object(a["defineComponent"])({name:"HomePageQuestSection",components:{},setup(){const e=Object(a["reactive"])({earnMoney:[],earnCoin:[],notExpireCoin:[],notExpireMoney:[],threeCoin:[],threeMoney:[]}),t=async t=>{if(1==t){console.log("coin");const c=await _["a"].getQuest({reward_type:t});console.log("coinList",c),e.earnCoin=c.data}if(2==t){console.log("money");const c=await _["a"].getQuest({reward_type:t});console.log("moneyList",c),e.earnMoney=c.data}},c=(t,c)=>{if(1==c){e.notExpireCoin=t.filter(e=>0==e.expired);for(let t=0;t<3;t++)ee["c"].not.undefined(e.notExpireCoin[t])&&e.threeCoin.push(e.notExpireCoin[t])}if(2==c){e.notExpireMoney=t.filter(e=>0==e.expired);for(let t=0;t<3;t++)ee["c"].not.undefined(e.notExpireMoney[t])&&e.threeMoney.push(e.notExpireMoney[t])}},o=e=>{e.map(e=>{e.received=null!=e.status})},n=e=>{const t=(new Date).toString();e.map(e=>{if(null!=e.end_datetime){const c=new Date(e.end_datetime).toString();e.expired=Date.parse(c).valueOf()<Date.parse(t).valueOf()}else e.expired=!1})};Object(a["onMounted"])(async()=>{await t(1),await t(2),await o(e.earnCoin),await o(e.earnMoney),await n(e.earnCoin),await n(e.earnMoney),await c(e.earnCoin,1),await c(e.earnMoney,2)});const r=(e,t)=>{const c=e,a=t;te["d"].router.push({name:k["a"].QuestUpload,params:{reward_type:a,questId:c}})},s=(e,t)=>{const c=e,a=t;te["d"].router.push({name:k["a"].QuestDetail,params:{reward_type:a,questId:c}})};return{...Object(W["f"])(e),RouterNames:k["a"],numeralHelper:$["a"],goReceiveDetail:r,goDetail:s}}}),ae=(c("5a67"),c("6b0d")),oe=c.n(ae);const ne=oe()(ce,[["render",J],["__scopeId","data-v-bfb02744"]]);var re=ne;const se=e=>(Object(a["pushScopeId"])("data-v-5aa7ff20"),e=e(),Object(a["popScopeId"])(),e),le={class:"game"},ie={class:"section-header"},de=se(()=>Object(a["createElementVNode"])("h3",null,"Games for you",-1)),be=["src"],me={class:"flex justify-center items-center"},Oe={class:"text-semibold"};function je(e,t,o,n,r,s){const l=Object(a["resolveComponent"])("router-link"),i=Object(a["resolveComponent"])("svg-icon");return Object(a["openBlock"])(),Object(a["createElementBlock"])("section",le,[Object(a["createElementVNode"])("header",ie,[de,Object(a["createVNode"])(l,{class:"more",to:{name:e.RouterNames.Game}},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("MORE")]),_:1},8,["to"])]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.threeGame,e=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"game-item",key:e},[Object(a["createElementVNode"])("img",{class:"pic",src:c("9b1d"),alt:"Fandream11"},null,8,be),Object(a["createElementVNode"])("h4",null,Object(a["toDisplayString"])(e.name),1),Object(a["createElementVNode"])("div",me,[Object(a["createElementVNode"])("span",Oe,Object(a["toDisplayString"])(e.complete_worth)+"/"+Object(a["toDisplayString"])(e.total_worth),1),Object(a["createVNode"])(i,{class:"ml-1",name:"coin",size:24})])]))),128))])}var Ae=Object(a["defineComponent"])({name:"HomePageGameSection",components:{},setup(){const e=Object(a["reactive"])({gameData:[],threeGame:[]}),t=async()=>{const t=await _["a"].getGame();e.gameData=t.data;for(let c=0;c<3;c++)e.threeGame.push(e.gameData[c])},c=e=>{e.map(e=>{let t=[];e.mission.map(e=>{t.push(e.worth)});let c=0;for(let r=0;r<t.length;r++)c+=Number(t[r]);e.total_worth=c;const a=e.mission.filter(e=>e.complete_datetime);let o=[];a.map(e=>{o.push(e.worth)});let n=0;for(let r=0;r<o.length;r++)n+=Number(o[r]);e.complete_worth=n})};return Object(a["onMounted"])(async()=>{await t(),await c(e.gameData)}),{...Object(W["f"])(e),RouterNames:k["a"]}}});c("32d0");const pe=oe()(Ae,[["render",je],["__scopeId","data-v-5aa7ff20"]]);var ue=pe,fe=c("4776"),ge=Object(a["defineComponent"])({name:"HomePage",components:{MainLayout:V["a"],HomePageQuestSection:re,HomePageGameSection:ue},setup(){const e=Object(W["d"])({ann:[]}),t=async()=>{const t=await _["a"].getAnnouncement();console.log("ann",t),e.ann=t.data};return Object(W["c"])(async()=>{await t(),await te["d"].appStore.updateAvatar(fe["a"].update)}),{...Object(W["f"])(e),RouterNames:k["a"]}}});c("5bb8");const Ce=oe()(ge,[["render",E],["__scopeId","data-v-3f0f5183"]]);t["default"]=Ce}}]);