(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{161:function(e,M){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDgwIDEwODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyI+PHJlY3QgaWQ9Ik1lc2EtZGUtdHJhYmFqbzEiIHNlcmlmOmlkPSJNZXNhIGRlIHRyYWJham8xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTA4MCIgaGVpZ2h0PSIxMDgwIiBzdHlsZT0iZmlsbDpub25lOyIvPjxwYXRoIGQ9Ik04NTQuOTc4LDgwMy4yMDFjMTg2LjIzNywwIDE4Ni4yMzcsLTUyNi40MDIgLTAsLTUyNi40MDJjLTcuOTgyLC0wLjAwMSAtMTUuNjM3LC0zLjE3MiAtMjEuMjgxLC04LjgxNmMtNS42NDQsLTUuNjQ0IC04LjgxNSwtMTMuMjk5IC04LjgxNSwtMjEuMjgxYzAsLTIyLjYxNyAwLC01Ni4zMzQgMCwtOTUuNDEzYzAsLTYwLjg2NCAtMzYuNjYzLC0xMTUuNzM0IC05Mi44OTQsLTEzOS4wMjZjLTU2LjIzMSwtMjMuMjkyIC0xMjAuOTU2LC0xMC40MTcgLTE2My45OTMsMzIuNjJjLTE4MS43NTIsMTgxLjc1MiAtNDA0LjkxMyw0MDQuOTEzIC00NzMuODM2LDQ3My44MzZjLTUuNjQ0LDUuNjQ0IC04LjgxNSwxMy4yOTkgLTguODE1LDIxLjI4MWMwLDcuOTgyIDMuMTcxLDE1LjYzNyA4LjgxNSwyMS4yODFjNjguOTIzLDY4LjkyMyAyOTIuMDg0LDI5Mi4wODQgNDczLjgzNiw0NzMuODM2YzQzLjAzNyw0My4wMzcgMTA3Ljc2Miw1NS45MTIgMTYzLjk5MywzMi42MmM1Ni4yMzEsLTIzLjI5MiA5Mi44OTQsLTc4LjE2MiA5Mi44OTQsLTEzOS4wMjZjMCwtMzkuMDc5IDAsLTcyLjc5NiAwLC05NS40MTNjLTAsLTcuOTgyIDMuMTcxLC0xNS42MzcgOC44MTUsLTIxLjI4MWM1LjY0NCwtNS42NDQgMTMuMjk5LC04LjgxNSAyMS4yODEsLTguODE2WiIgc3R5bGU9ImZpbGw6IzllMDAwNDsiLz48L3N2Zz4="},461:function(e,M,t){e.exports={container:"wEWjN_","inner-container":"_2mi0r9",arrow:"_2q9brh","login-arrow-container":"_3r8UKg",toggler:"_3TyeKQ"}},468:function(e,M,t){"use strict";t.r(M),t.d(M,"default",(function(){return y}));var c=t(5),a=t.n(c),i=t(11),n=t(18),L=t(0),I=t.n(L),s=t(20),j=t.n(s),T=t(2),N=(t(461),t(161)),u=t.n(N),r=t(10),g=t(41);function y(){var e=Object(L.useContext)(r.b).state.lang.VerifyAccount,M=Object(L.useState)(!1),t=Object(n.a)(M,2),c=t[0],s=t[1],N=Object(T.h)();return Object(L.useEffect)((function(){var e=new URLSearchParams(N.search),M=decodeURIComponent(e.get("t")||"");Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/user/verifyEmailKey",{encToken:M});case 2:t=e.sent,s(t.data.ok);case 4:case"end":return e.stop()}}),e)})))()}),[N.search]),I.a.createElement("div",{className:"wEWjN_"},I.a.createElement("div",{className:"_2mi0r9"},I.a.createElement("h1",null,c?e.TitleIsVerificationOk:e.TitleIsVerificationNotOk),I.a.createElement("p",{style:{marginTop:c?"0":"10px",textAlign:c?"center":"left"}},c?e.TextIsVerificationOk:e.TextIsVerificationNotOk),c&&I.a.createElement("div",{className:"_3r8UKg"},I.a.createElement(g.b,{to:"/?opt=show-login",className:"_3TyeKQ"},e.LogInBtn),I.a.createElement("img",{src:u.a,alt:"arrow",className:"_2q9brh"}))))}}}]);