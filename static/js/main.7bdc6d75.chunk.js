(window["webpackJsonpdivhack-frontend"]=window["webpackJsonpdivhack-frontend"]||[]).push([[0],{35:function(e,t){},36:function(e,t){},37:function(e,t){},38:function(e,t){},42:function(e,t,n){e.exports=n.p+"static/media/logo.f698291c.PNG"},45:function(e,t){},46:function(e,t){},50:function(e,t,n){e.exports=n(62)},62:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"login",(function(){return S})),n.d(r,"loginSuccess",(function(){return k})),n.d(r,"loginError",(function(){return C}));var a={};n.r(a),n.d(a,"getCurrentUserId",(function(){return P})),n.d(a,"getLoadingStatus",(function(){return F}));var o,i=n(0),c=n.n(i),l=n(24),u=n.n(l),s=n(23),d=n(8),m=(n(59),function(){return c.a.createElement(d.a,{styles:{"*, *::before, *::after":{fontFamily:"system-ui, sans-serif",boxSizing:"border-box"},a:{color:"inherit",cursor:"pointer",textDecoration:"none"},button:{backgroundColor:"transparent",borderWidth:0,color:"inherit",cursor:"pointer",outline:"none",padding:0},cite:{fontStyle:"normal"},fieldset:{borderWidth:0,margin:0,padding:0},figure:{margin:0},"h1, h2, h3, h4, h5, h6":{fontSize:"inherit",fontWeight:"inherit",margin:0},html:{fontSize:"20px"},"input::-moz-focus-inner":{border:0,margin:0,padding:0},p:{margin:0},"ul, ol, dd":{listStyle:"none",margin:0,padding:0}}})}),p=n(40),f=n(47),g=n(5),b=n(13),h=Object(b.a)(),O=n(21),y=n(11),v=n(64),j="LOGIN";function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var E=Object(v.a)((o={},Object(y.a)(o,j,(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{isLoading:!0})})),Object(y.a)(o,"LOGIN_SUCCESS",(function(e,t){return{data:t.payload,isLoading:!1}})),o),{data:null,isLoading:!1}),x=n(65),S=Object(x.a)(j),k=Object(x.a)("LOGIN_SUCCESS"),C=Object(x.a)("LOGIN_ERROR"),P=function(e){return e.currentUserId.data},F=function(e){return e.currentUserId.isLoading},D=E,R=n(4),B=Object(d.c)({"0%":{opacity:1},"50%,100%":{opacity:.5}}),L=g.a.div((function(e){var t=e.delay,n=e.theme.colors;return{animationDuration:".5s",animationName:B,animationTimingFunction:"linear",animationIterationCount:"infinite",animationDirection:"alternate",animationDelay:t,backfaceVisibility:"hidden",background:n.maroon,borderRadius:4,display:"inline-block",height:8,perspective:1e3,width:8}})),T=g.a.div({alignItems:"center",display:"inline-flex",height:8,"& div:not(:last-child)":{marginRight:3}}),I=function(e){var t=Object(R.a)({},e);return c.a.createElement(T,t,c.a.createElement(L,{delay:"0s"}),c.a.createElement(L,{delay:".25s"}),c.a.createElement(L,{delay:".5s"}))},z=g.a.div({display:"flex",height:32,width:"100%"}),W=g.a.input((function(e){var t=e.theme.colors;return{background:t.white,border:"1px solid ".concat(t.maroon),borderBottomLeftRadius:16,borderRight:"none",borderTopLeftRadius:16,height:32,lineHeight:"20px",fontSize:20,outline:"none",paddingLeft:16,width:"calc(100%)"}})),G=g.a.button((function(e){var t=e.theme.colors;return{background:t.green,borderBottomRightRadius:16,borderTopRightRadius:16,color:t.white,fontSize:14,height:32,textTransform:"uppercase",minWidth:64}})),N=Object(g.a)(I)({marginTop:16}),U=g.a.h1((function(){return{color:"#6F0808",fontFamily:"sans-serif",marginBottom:32}})),A=function(){var e=Object(s.b)(),t=Object(i.useState)(""),n=Object(O.a)(t,2),o=n[0],l=n[1],u=Object(s.c)(a.getLoadingStatus);return c.a.createElement(c.a.Fragment,null,c.a.createElement(U,null,"Welcome to Green Foot!"),c.a.createElement(z,null,c.a.createElement(W,{name:"email",type:"email",placeholder:"Your email address",value:o,onChange:function(e){l(e.currentTarget.value)}}),c.a.createElement(G,{onClick:function(){e(r.login(o))}},"Login")),u&&c.a.createElement(N,null))},_=[{id:1,mode:"Car (gasoline)",emissions:"155.10 lbs of CO2e"},{id:2,mode:"Car (diesel)",emissions:"177.68 lbs of CO2e"},{id:3,mode:"Bus",emissions:"37.00 lbs of CO2e"}],H=g.a.div((function(e){var t=e.theme.colors;return{width:"100%",alignItems:"center",background:t.green,height:32,fontSize:16,borderRadius:16,color:t.white,padding:"8px 16px",display:"flex",justifyContent:"space-between",":not(:last-of-type)":{marginBottom:8}}})),J=g.a.h1((function(){return{color:"#6F0808",fontFamily:"sans-serif",marginBottom:32}})),Y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(J,null,"Your footprint:"),_.map((function(e){var t=e.id,n=e.mode,r=e.emissions;return c.a.createElement(H,{key:t},c.a.createElement("div",null,n),c.a.createElement("div",null,r))})))};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=g.a.div({display:"flex",flexDirection:"column",marginBottom:16,width:"100%"}),q=g.a.input((function(e){var t=e.theme.colors;return{background:t.white,border:"1px solid ".concat(t.maroon),borderRadius:16,height:32,lineHeight:"20px",fontSize:20,outline:"none",paddingLeft:16,width:"calc(100%)",":not(:last-of-type)":{marginBottom:4}}})),K=Object(g.a)(I)({marginTop:16}),Q=g.a.button((function(e){var t=e.theme.colors;return{background:t.green,borderRadius:16,color:t.white,fontSize:14,height:32,textTransform:"uppercase",padding:"8px 16px"}})),X=g.a.h3({marginBottom:8}),Z=g.a.h1((function(){return{color:"#6F0808",fontFamily:"sans-serif",marginBottom:32}})),ee={Login:A,Results:Y,RouteInput:function(e){var t=e.history,n=Object(i.useState)({address:"",city:"",state:""}),r=Object(O.a)(n,2),a=r[0],o=r[1],l=Object(i.useState)({address:"",city:"",state:""}),u=Object(O.a)(l,2),s=u[0],d=u[1],m=Object(i.useState)(!1),p=Object(O.a)(m,2),f=p[0],g=p[1],b=function(e){return function(t){var n=t.currentTarget.value;o((function(t){return V({},t,Object(y.a)({},e,n))}))}},h=function(e){return function(t){var n=t.currentTarget.value;d((function(t){return V({},t,Object(y.a)({},e,n))}))}};return c.a.createElement(c.a.Fragment,null,c.a.createElement(Z,null,"Enter locations:"),c.a.createElement($,null,c.a.createElement(X,null,"From:"),c.a.createElement(q,{type:"text",placeholder:"Street Address",value:a.address,onChange:b("address")}),c.a.createElement(q,{type:"text",placeholder:"City",value:a.city,onChange:b("city")}),c.a.createElement(q,{type:"text",placeholder:"State",value:a.state,onChange:b("state")})),c.a.createElement($,null,c.a.createElement(X,null,"To:"),c.a.createElement(q,{type:"text",placeholder:"Street Address",value:s.address,onChange:h("address")}),c.a.createElement(q,{type:"text",placeholder:"City",value:s.city,onChange:h("city")}),c.a.createElement(q,{type:"text",placeholder:"State",value:s.state,onChange:h("state")})),c.a.createElement(Q,{onClick:function(){g(!0),setTimeout((function(){t.push("/results")}),600)}},"Calculate CO",c.a.createElement("sub",null,"2")),f&&c.a.createElement(K,null))}},te=n(42),ne=n.n(te),re={colors:{white:"#FFFFFF",green:"#086F3C",brown:"#C9B6A2",lightBrown:"#EDE7E0",darkBrown:"#6F3C08",maroon:"#6F0808"}},ae=g.a.div((function(e){return{alignItems:"center",background:e.theme.colors.lightBrown,display:"flex",flexDirection:"column",margin:"auto",marginTop:100,padding:32,width:400}})),oe=(g.a.h1((function(e){return{color:e.theme.colors.maroon,fontFamily:"sans-serif",marginBottom:32}})),g.a.img({width:400,marginTop:-32,marginBottom:32}));var ie=function(e){var t=e.store;return c.a.createElement(s.a,{store:t},c.a.createElement(p.a,{theme:re},c.a.createElement(m,null),c.a.createElement(f.b,{history:h},c.a.createElement(ae,null,c.a.createElement(oe,{src:ne.a,alt:"Logo",width:"400"}),c.a.createElement(f.c,null,c.a.createElement(f.a,{exact:!0,path:"/",component:ee.Login}),c.a.createElement(f.a,{exact:!0,path:"/start",component:ee.RouteInput}),c.a.createElement(f.a,{exact:!0,path:"/results",component:ee.Results}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=n(10),le=n(44),ue=n(48),se=n(45),de=n.n(se),me=(n(35),n(36),de.a),pe=n(46),fe=n.n(pe),ge=(n(37),n(38),fe.a),be=Object(ce.combineReducers)({currentTrip:me,currentUserId:D,routeOptions:ge});function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Oe=Object(ue.a)(),ye=Object(le.composeWithDevTools)({actionSanitizer:function(e){if(e.error){var t=e.payload;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{payload:{type:t.name,message:t.message,stack:t.stack}})}return e},name:"GreenFoot"}),ve=n(16),je=n.n(ve),we=n(17),Ee=je.a.mark(Se),xe=je.a.mark(ke);function Se(e){return je.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.payload,t.prev=1,t.next=4,Object(we.b)(300);case 4:return t.next=6,Object(we.d)(k(1));case 6:h.push("/start"),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(1),t.next=13,Object(we.d)(C(t.t0));case 13:case"end":return t.stop()}}),Ee,null,[[1,9]])}function ke(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.e)(j,Se);case 2:case"end":return e.stop()}}),xe)}var Ce=je.a.mark(Pe);function Pe(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.a)([Object(we.c)(ke)]);case 2:case"end":return e.stop()}}),Ce)}var Fe,De=(Fe={},Object(ce.createStore)(be,Fe,ye(Object(ce.applyMiddleware)(Oe))));u.a.render(c.a.createElement(ie,{store:De}),document.getElementById("root")),Oe.run(Pe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.7bdc6d75.chunk.js.map