(this.webpackJsonpcapstone=this.webpackJsonpcapstone||[]).push([[0],{39:function(e,t,a){e.exports=a(75)},44:function(e,t,a){},45:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),l=a.n(c),u=(a(44),a(2)),s=(a(45),a(14)),o=a(4),i=a(3),m=a.n(i),p=a(6),f=a(17),h=a.n(f),d=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.auth().signOut();case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error("error while signing out");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("button",{onClick:e},"Sign Out")},E=a(15),v=a.n(E),g=void 0,O=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),i=o[0],f=o[1],h=Object(n.useState)(""),d=Object(u.a)(h,2),b=d[0],E=d[1],O=Object(n.useState)(""),j=Object(u.a)(O,2),w=j[0],y=j[1],S=Object(n.useState)(""),x=Object(u.a)(S,2),N=(x[0],x[1],function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v()({method:"POST",url:"http://localhost:3000/registrations",data:{name:c,email:i,password:b,password_confirmation:w}},{withCredentials:!0}).then((function(e){"created"===e.data.status&&g.props.handleSuccessfulAuth(e.data)})).catch((function(e){console.log("reg error",e)})),t.preventDefault();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Please Register with your email"),r.a.createElement("form",{onSubmit:N},r.a.createElement("label",null,r.a.createElement("input",{type:"name",value:c,placeholder:"First Last(name)",name:"name",onChange:function(e){l(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"email",value:i,placeholder:"handle",name:"email",onChange:function(e){f(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",value:b,placeholder:"password",name:"password",onChange:function(e){E(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",value:w,placeholder:"Confirm Password",name:"password",onChange:function(e){y(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("button",null,"Register")))},j=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),i=o[0],f=o[1],h=Object(n.useState)(""),d=Object(u.a)(h,2),E=(d[0],d[1],function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v()({url:"http://localhost:3000/sessions",method:"POST",data:{email:c,password:i}},{withCredentials:!0}).then((function(e){console.log("res from login",e)})).catch((function(e){console.log("login error",e)}));case 3:e.sent,t.preventDefault();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Please Login with your handle"),r.a.createElement("p",null,e.loginStatus),r.a.createElement("form",{onSubmit:E},r.a.createElement("label",null,r.a.createElement("input",{type:"text",value:c,placeholder:"handle",name:"email",onChange:function(e){l(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:i,placeholder:"password",name:"password",onChange:function(e){f(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("button",null,"Login")),r.a.createElement(b,null),r.a.createElement(O,{handleSuccessfulAuth:function(t){e.handleLogin(t),e.history.push("/Home")}}))},w=(a(63),function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=(t[1],Object(n.useState)([])),l=Object(u.a)(c,2),s=(l[0],l[1],Object(n.useState)([])),o=Object(u.a)(s,2),i=o[0],f=o[1],h=Object(n.useState)([]),d=Object(u.a)(h,2);d[0],d[1];Object(n.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sleepy-caverns-02448.herokuapp.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,f(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=[],E=[];if(i[0])for(var v=0;v<i.length;v++)-1===b.indexOf(i[v].username)&&b.push(i[v].username),-1===E.indexOf(i[v].your_name)&&E.push(i[v].your_name);console.log("handles",b,"names",E);var g=r.a.createElement("h1",null,"Loading");return i[0]&&(g=i.map((function(e,t){for(var a=0;a<i.length;a++){if(-1===i.indexOf(i[a].your_name,a+1))return r.a.createElement("div",{className:"itemLC"},r.a.createElement("p",{className:"nameLC"},e.your_name,r.a.createElement("span",{className:"handleLC"},e.username)),r.a.createElement("p",{className:"bioLC"},e.bio))}}))),r.a.createElement("div",{className:"liveChat"},r.a.createElement("form",{onSubmit:function(){}},r.a.createElement("label",null,r.a.createElement("input",{className:"field",type:"text",value:a,placeholder:"See all users below",name:"email",onChange:function(){}}),r.a.createElement("br",null))),r.a.createElement("div",{className:"widget"},g))}),y=(a(64),a(65),a(36)),S=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=(t[0],t[1],Object(n.useState)([])),c=Object(u.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)("\ud83d\udda4"),i=Object(u.a)(o,2),f=(i[0],i[1],Object(n.useState)([])),h=Object(u.a)(f,2),d=(h[0],h[1],Object(n.useState)(0)),b=Object(u.a)(d,2),E=b[0],g=b[1],O=Object(n.useState)(""),j=Object(u.a)(O,2),w=j[0],S=j[1],x=Object(n.useState)(""),N=Object(u.a)(x,2),k=N[0],C=N[1],L=Object(n.useState)(""),I=Object(u.a)(L,2),D=I[0],F=I[1];Object(n.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sleepy-caverns-02448.herokuapp.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),s(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]);var P=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({url:"https://sleepy-caverns-02448.herokuapp.com/posts",method:"POST",data:{username:w,your_name:k,message:D,likes:0}});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(E);var _=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(E+1),e.next=3,v()({url:"https://sleepy-caverns-02448.herokuapp.com/posts/".concat(t),method:"PUT",data:{likes:E}});case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=r.a.createElement("h1",null,"loading");return l[0]&&(R=l.map((function(e,t){return r.a.createElement("div",{className:"itemHF"},r.a.createElement("p",{className:"userIdHF"},e.username),r.a.createElement("p",{className:"textHF"},e.message),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){return _(e.id)}},"\ud83d\udc99"),e.likes))}))),r.a.createElement("div",{className:"homeFeed"},r.a.createElement(y.a,{trigger:r.a.createElement("button",null," What's on your mind?"),position:"right center"},r.a.createElement("form",{onSubmit:P},r.a.createElement("label",null,r.a.createElement("input",{className:"field",type:"username",value:w,placeholder:"@username",name:"username",onChange:function(e){S(e.target.value)}}),r.a.createElement("br",null)),r.a.createElement("label",null,r.a.createElement("input",{className:"field",type:"yourName",value:k,placeholder:"Your Name",name:"yourName",onChange:function(e){C(e.target.value)}}),r.a.createElement("br",null)),r.a.createElement("label",null,r.a.createElement("input",{className:"field",type:"message",value:D,placeholder:"What's on your mind?",name:"message",onChange:function(e){F(e.target.value)}}),r.a.createElement("br",null)),r.a.createElement("button",null,"submit"))),r.a.createElement("div",{className:"widget"},R))},x=function(e){return r.a.createElement("div",{className:"home"},r.a.createElement("h1",{className:"header"},"theSocialApp"),r.a.createElement("div",{className:"nav"},r.a.createElement("h1",null,e.loginStatus)),r.a.createElement("div",{className:"homeFeed"},r.a.createElement(S,null)),r.a.createElement("div",{className:"chat"},r.a.createElement(w,null)))};var N=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=function(e){c("LOGGED IN")};return r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement(s.b,{to:"/home"})),r.a.createElement(s.b,{to:"/"}),r.a.createElement("main",null,r.a.createElement(o.a,{exact:!0,path:"/home",render:function(e){return r.a.createElement(j,{handleLogin:l,loginStatus:a})}}),r.a.createElement(o.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(x,{loginStatus:a})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(76),a(70),a(72);f.initializeApp({apiKey:"AIzaSyDZIxRl36Iynr_7TJhsWVt1l0Pn_RRDZVY",authDomain:"capstone-cffd9.firebaseapp.com",databaseURL:"https://capstone-cffd9.firebaseio.com",projectId:"capstone-cffd9",storageBucket:"capstone-cffd9.appspot.com",messagingSenderId:"306627106594",appId:"1:306627106594:web:788431ca81925b4a7db77b",measurementId:"G-TX38D5CR82"}),f.analytics(),l.a.render(r.a.createElement(s.a,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.868781e9.chunk.js.map