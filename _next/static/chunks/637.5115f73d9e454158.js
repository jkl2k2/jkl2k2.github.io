"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[637],{1637:function(e,t,a){a.d(t,{UT:function(){return k}});var r,n,o,s,u,i,l,c=a(2265),d=a.t(c,2),v=a(4887),h=a.t(v,2),U=a(5983);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}let p=c.createContext(null),m=c.createContext(null);var R=((r=R||{}).UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r),b=((n=b||{}).UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n);function S(e){let{basename:t="/",children:a=null,location:r,navigationType:n=U.aU.Pop,navigator:o,static:s=!1,future:u}=e;null!=c.useContext(m)&&(0,U.J0)(!1);let i=t.replace(/^\/*/,"/"),l=c.useMemo(()=>({basename:i,navigator:o,static:s,future:f({v7_relativeSplatPath:!1},u)}),[i,u,o,s]);"string"==typeof r&&(r=(0,U.cP)(r));let{pathname:d="/",search:v="",hash:h="",state:R=null,key:b="default"}=r,S=c.useMemo(()=>{let e=(0,U.Zn)(d,i);return null==e?null:{location:{pathname:e,search:v,hash:h,state:R,key:b},navigationType:n}},[i,d,v,h,R,b,n]);return null==S?null:c.createElement(p.Provider,{value:l},c.createElement(m.Provider,{children:a,value:S}))}d.startTransition;var g=((o=g||{})[o.pending=0]="pending",o[o.success=1]="success",o[o.error=2]="error",o);new Promise(()=>{});try{window.__reactRouterVersion="6"}catch(e){}let w=d.startTransition;function k(e){let{basename:t,children:a,future:r,window:n}=e,o=c.useRef();null==o.current&&(o.current=(0,U.q_)({window:n,v5Compat:!0}));let s=o.current,[u,i]=c.useState({action:s.action,location:s.location}),{v7_startTransition:l}=r||{},d=c.useCallback(e=>{l&&w?w(()=>i(e)):i(e)},[i,l]);return c.useLayoutEffect(()=>s.listen(d),[s,d]),c.createElement(S,{basename:t,children:a,location:u.location,navigationType:u.action,navigator:s,future:r})}h.flushSync,d.useId,"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,(s=i||(i={})).UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState",(u=l||(l={})).UseFetcher="useFetcher",u.UseFetchers="useFetchers",u.UseScrollRestoration="useScrollRestoration"}}]);