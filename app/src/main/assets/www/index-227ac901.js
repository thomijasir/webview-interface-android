var Yf=Object.defineProperty,Xf=Object.defineProperties;var Jf=Object.getOwnPropertyDescriptors;var dc=Object.getOwnPropertySymbols,Zf=Object.getPrototypeOf,tm=Object.prototype.hasOwnProperty,em=Object.prototype.propertyIsEnumerable,nm=Reflect.get;var fc=(n,t,e)=>t in n?Yf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,vt=(n,t)=>{for(var e in t||(t={}))tm.call(t,e)&&fc(n,e,t[e]);if(dc)for(var e of dc(t))em.call(t,e)&&fc(n,e,t[e]);return n},Ft=(n,t)=>Xf(n,Jf(t));var rm=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var mc=(n,t,e)=>nm(Zf(n),e,t);var p=(n,t,e)=>new Promise((r,i)=>{var s=c=>{try{a(e.next(c))}catch(u){i(u)}},o=c=>{try{a(e.throw(c))}catch(u){i(u)}},a=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);a((e=e.apply(n,t)).next())});var vv=rm(Hf=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const im=(n,t)=>n===t,Ot=Symbol("solid-proxy"),Js=Symbol("solid-track"),gi={equals:im};let sl=ll;const Ee=1,pi=2,ol={owned:null,cleanups:null,context:null,owner:null};var B=null;let Rs=null,G=null,gt=null,Jt=null,ji=0;function Yn(n,t){const e=G,r=B,i=n.length===0,s=t===void 0?r:t,o=i?ol:{owned:null,cleanups:null,context:s?s.context:null,owner:s},a=i?n:()=>n(()=>Mt(()=>Gi(o)));B=o,G=null;try{return Te(a,!0)}finally{G=e,B=r}}function le(n,t){t=t?Object.assign({},gi,t):gi;const e={value:n,observers:null,observerSlots:null,comparator:t.equals||void 0},r=i=>(typeof i=="function"&&(i=i(e.value)),ul(e,i));return[cl.bind(e),r]}function Zt(n,t,e){const r=Xo(n,t,!1,Ee);Pr(r)}function Wo(n,t,e){sl=hm;const r=Xo(n,t,!1,Ee);(!e||!e.render)&&(r.user=!0),Jt?Jt.push(r):Pr(r)}function rt(n,t,e){e=e?Object.assign({},gi,e):gi;const r=Xo(n,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=e.equals||void 0,Pr(r),cl.bind(r)}function sm(n){return Te(n,!1)}function Mt(n){if(G===null)return n();const t=G;G=null;try{return n()}finally{G=t}}function al(n,t,e){const r=Array.isArray(n);let i,s=e&&e.defer;return o=>{let a;if(r){a=Array(n.length);for(let u=0;u<n.length;u++)a[u]=n[u]()}else a=n();if(s){s=!1;return}const c=Mt(()=>t(a,i,o));return i=a,c}}function Ho(n){return B===null||(B.cleanups===null?B.cleanups=[n]:B.cleanups.push(n)),n}function Zs(){return G}function om(){return B}function am(n,t){const e=B,r=G;B=n,G=null;try{return Te(t,!0)}catch(i){Jo(i)}finally{B=e,G=r}}function cm(n){const t=G,e=B;return Promise.resolve().then(()=>{G=t,B=e;let r;return Te(n,!1),G=B=null,r?r.done:void 0})}function Qo(n,t){const e=Symbol("context");return{id:e,Provider:fm(e),defaultValue:n}}function zi(n){return B&&B.context&&B.context[n.id]!==void 0?B.context[n.id]:n.defaultValue}function Yo(n){const t=rt(n),e=rt(()=>to(t()));return e.toArray=()=>{const r=e();return Array.isArray(r)?r:r!=null?[r]:[]},e}function cl(){if(this.sources&&this.state)if(this.state===Ee)Pr(this);else{const n=gt;gt=null,Te(()=>yi(this),!1),gt=n}if(G){const n=this.observers?this.observers.length:0;G.sources?(G.sources.push(this),G.sourceSlots.push(n)):(G.sources=[this],G.sourceSlots=[n]),this.observers?(this.observers.push(G),this.observerSlots.push(G.sources.length-1)):(this.observers=[G],this.observerSlots=[G.sources.length-1])}return this.value}function ul(n,t,e){let r=n.value;return(!n.comparator||!n.comparator(r,t))&&(n.value=t,n.observers&&n.observers.length&&Te(()=>{for(let i=0;i<n.observers.length;i+=1){const s=n.observers[i],o=Rs&&Rs.running;o&&Rs.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?gt.push(s):Jt.push(s),s.observers&&hl(s)),o||(s.state=Ee)}if(gt.length>1e6)throw gt=[],new Error},!1)),t}function Pr(n){if(!n.fn)return;Gi(n);const t=B,e=G,r=ji;G=B=n,um(n,n.value,r),G=e,B=t}function um(n,t,e){let r;try{r=n.fn(t)}catch(i){return n.pure&&(n.state=Ee,n.owned&&n.owned.forEach(Gi),n.owned=null),n.updatedAt=e+1,Jo(i)}(!n.updatedAt||n.updatedAt<=e)&&(n.updatedAt!=null&&"observers"in n?ul(n,r):n.value=r,n.updatedAt=e)}function Xo(n,t,e,r=Ee,i){const s={fn:n,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:B,context:B?B.context:null,pure:e};return B===null||B!==ol&&(B.owned?B.owned.push(s):B.owned=[s]),s}function _i(n){if(n.state===0)return;if(n.state===pi)return yi(n);if(n.suspense&&Mt(n.suspense.inFallback))return n.suspense.effects.push(n);const t=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<ji);)n.state&&t.push(n);for(let e=t.length-1;e>=0;e--)if(n=t[e],n.state===Ee)Pr(n);else if(n.state===pi){const r=gt;gt=null,Te(()=>yi(n,t[0]),!1),gt=r}}function Te(n,t){if(gt)return n();let e=!1;t||(gt=[]),Jt?e=!0:Jt=[],ji++;try{const r=n();return lm(e),r}catch(r){e||(Jt=null),gt=null,Jo(r)}}function lm(n){if(gt&&(ll(gt),gt=null),n)return;const t=Jt;Jt=null,t.length&&Te(()=>sl(t),!1)}function ll(n){for(let t=0;t<n.length;t++)_i(n[t])}function hm(n){let t,e=0;for(t=0;t<n.length;t++){const r=n[t];r.user?n[e++]=r:_i(r)}for(t=0;t<e;t++)_i(n[t])}function yi(n,t){n.state=0;for(let e=0;e<n.sources.length;e+=1){const r=n.sources[e];if(r.sources){const i=r.state;i===Ee?r!==t&&(!r.updatedAt||r.updatedAt<ji)&&_i(r):i===pi&&yi(r,t)}}}function hl(n){for(let t=0;t<n.observers.length;t+=1){const e=n.observers[t];e.state||(e.state=pi,e.pure?gt.push(e):Jt.push(e),e.observers&&hl(e))}}function Gi(n){let t;if(n.sources)for(;n.sources.length;){const e=n.sources.pop(),r=n.sourceSlots.pop(),i=e.observers;if(i&&i.length){const s=i.pop(),o=e.observerSlots.pop();r<i.length&&(s.sourceSlots[o]=r,i[r]=s,e.observerSlots[r]=o)}}if(n.owned){for(t=n.owned.length-1;t>=0;t--)Gi(n.owned[t]);n.owned=null}if(n.cleanups){for(t=n.cleanups.length-1;t>=0;t--)n.cleanups[t]();n.cleanups=null}n.state=0}function dm(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function Jo(n,t=B){throw dm(n)}function to(n){if(typeof n=="function"&&!n.length)return to(n());if(Array.isArray(n)){const t=[];for(let e=0;e<n.length;e++){const r=to(n[e]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return n}function fm(n,t){return function(r){let i;return Zt(()=>i=Mt(()=>(B.context=Ft(vt({},B.context),{[n]:r.value}),Yo(()=>r.children))),void 0),i}}const mm=Symbol("fallback");function gc(n){for(let t=0;t<n.length;t++)n[t]()}function gm(n,t,e={}){let r=[],i=[],s=[],o=0,a=t.length>1?[]:null;return Ho(()=>gc(s)),()=>{let c=n()||[],u,l;return c[Js],Mt(()=>{let d=c.length,m,I,y,v,k,C,S,x,O;if(d===0)o!==0&&(gc(s),s=[],r=[],i=[],o=0,a&&(a=[])),e.fallback&&(r=[mm],i[0]=Yn(K=>(s[0]=K,e.fallback())),o=1);else if(o===0){for(i=new Array(d),l=0;l<d;l++)r[l]=c[l],i[l]=Yn(h);o=d}else{for(y=new Array(d),v=new Array(d),a&&(k=new Array(d)),C=0,S=Math.min(o,d);C<S&&r[C]===c[C];C++);for(S=o-1,x=d-1;S>=C&&x>=C&&r[S]===c[x];S--,x--)y[x]=i[S],v[x]=s[S],a&&(k[x]=a[S]);for(m=new Map,I=new Array(x+1),l=x;l>=C;l--)O=c[l],u=m.get(O),I[l]=u===void 0?-1:u,m.set(O,l);for(u=C;u<=S;u++)O=r[u],l=m.get(O),l!==void 0&&l!==-1?(y[l]=i[u],v[l]=s[u],a&&(k[l]=a[u]),l=I[l],m.set(O,l)):s[u]();for(l=C;l<d;l++)l in y?(i[l]=y[l],s[l]=v[l],a&&(a[l]=k[l],a[l](l))):i[l]=Yn(h);i=i.slice(0,o=d),r=c.slice(0)}return i});function h(d){if(s[l]=d,a){const[m,I]=le(l);return a[l]=I,t(c[l],m)}return t(c[l])}}}function Q(n,t){return Mt(()=>n(t||{}))}function Qr(){return!0}const eo={get(n,t,e){return t===Ot?e:n.get(t)},has(n,t){return t===Ot?!0:n.has(t)},set:Qr,deleteProperty:Qr,getOwnPropertyDescriptor(n,t){return{configurable:!0,enumerable:!0,get(){return n.get(t)},set:Qr,deleteProperty:Qr}},ownKeys(n){return n.keys()}};function Ss(n){return(n=typeof n=="function"?n():n)?n:{}}function pm(){for(let n=0,t=this.length;n<t;++n){const e=this[n]();if(e!==void 0)return e}}function Ii(...n){let t=!1;for(let s=0;s<n.length;s++){const o=n[s];t=t||!!o&&Ot in o,n[s]=typeof o=="function"?(t=!0,rt(o)):o}if(t)return new Proxy({get(s){for(let o=n.length-1;o>=0;o--){const a=Ss(n[o])[s];if(a!==void 0)return a}},has(s){for(let o=n.length-1;o>=0;o--)if(s in Ss(n[o]))return!0;return!1},keys(){const s=[];for(let o=0;o<n.length;o++)s.push(...Object.keys(Ss(n[o])));return[...new Set(s)]}},eo);const e={},r={},i=new Set;for(let s=n.length-1;s>=0;s--){const o=n[s];if(!o)continue;const a=Object.getOwnPropertyNames(o);for(let c=0,u=a.length;c<u;c++){const l=a[c];if(l==="__proto__"||l==="constructor")continue;const h=Object.getOwnPropertyDescriptor(o,l);if(!i.has(l))h.get?(i.add(l),Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:pm.bind(r[l]=[h.get.bind(o)])})):(h.value!==void 0&&i.add(l),e[l]=h.value);else{const d=r[l];d?h.get?d.push(h.get.bind(o)):h.value!==void 0&&d.push(()=>h.value):e[l]===void 0&&(e[l]=h.value)}}}return e}function _m(n,...t){if(Ot in n){const i=new Set(t.length>1?t.flat():t[0]),s=t.map(o=>new Proxy({get(a){return o.includes(a)?n[a]:void 0},has(a){return o.includes(a)&&a in n},keys(){return o.filter(a=>a in n)}},eo));return s.push(new Proxy({get(o){return i.has(o)?void 0:n[o]},has(o){return i.has(o)?!1:o in n},keys(){return Object.keys(n).filter(o=>!i.has(o))}},eo)),s}const e={},r=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(n)){const s=Object.getOwnPropertyDescriptor(n,i),o=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let a=!1,c=0;for(const u of t)u.includes(i)&&(a=!0,o?r[c][i]=s.value:Object.defineProperty(r[c],i,s)),++c;a||(o?e[i]=s.value:Object.defineProperty(e,i,s))}return[...r,e]}const ym=n=>`Stale read from <${n}>.`;function Im(n){const t="fallback"in n&&{fallback:()=>n.fallback};return rt(gm(()=>n.each,n.children,t||void 0))}function dl(n){const t=n.keyed,e=rt(()=>n.when,void 0,{equals:(r,i)=>t?r===i:!r==!i});return rt(()=>{const r=e();if(r){const i=n.children;return typeof i=="function"&&i.length>0?Mt(()=>i(t?r:()=>{if(!Mt(e))throw ym("Show");return n.when})):i}return n.fallback},void 0,void 0)}const Em=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Tm=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Em]),wm=new Set(["innerHTML","textContent","innerText","children"]),vm=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Am=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function bm(n,t){const e=Am[n];return typeof e=="object"?e[t]?e.$:void 0:e}const Rm=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Sm={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Pm(n,t,e){let r=e.length,i=t.length,s=r,o=0,a=0,c=t[i-1].nextSibling,u=null;for(;o<i||a<s;){if(t[o]===e[a]){o++,a++;continue}for(;t[i-1]===e[s-1];)i--,s--;if(i===o){const l=s<r?a?e[a-1].nextSibling:e[s-a]:c;for(;a<s;)n.insertBefore(e[a++],l)}else if(s===a)for(;o<i;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===e[s-1]&&e[a]===t[i-1]){const l=t[--i].nextSibling;n.insertBefore(e[a++],t[o++].nextSibling),n.insertBefore(e[--s],l),t[i]=e[s]}else{if(!u){u=new Map;let h=a;for(;h<s;)u.set(e[h],h++)}const l=u.get(t[o]);if(l!=null)if(a<l&&l<s){let h=o,d=1,m;for(;++h<i&&h<s&&!((m=u.get(t[h]))==null||m!==l+d);)d++;if(d>l-a){const I=t[o];for(;a<l;)n.insertBefore(e[a++],I)}else n.replaceChild(e[a++],t[o++])}else o++;else t[o++].remove()}}}const pc="_$DX_DELEGATE";function Cm(n,t,e,r={}){let i;return Yn(s=>{i=s,t===document?n():Wt(t,n(),t.firstChild?null:void 0,e)},r.owner),()=>{i(),t.textContent=""}}function Cr(n,t,e){let r;const i=()=>{const o=document.createElement("template");return o.innerHTML=n,e?o.content.firstChild.firstChild:o.content.firstChild},s=t?()=>Mt(()=>document.importNode(r||(r=i()),!0)):()=>(r||(r=i())).cloneNode(!0);return s.cloneNode=s,s}function Zo(n,t=window.document){const e=t[pc]||(t[pc]=new Set);for(let r=0,i=n.length;r<i;r++){const s=n[r];e.has(s)||(e.add(s),t.addEventListener(s,Lm))}}function no(n,t,e){e==null?n.removeAttribute(t):n.setAttribute(t,e)}function Vm(n,t,e,r){r==null?n.removeAttributeNS(t,e):n.setAttributeNS(t,e,r)}function ta(n,t){t==null?n.removeAttribute("class"):n.className=t}function Dm(n,t,e,r){if(r)Array.isArray(e)?(n[`$$${t}`]=e[0],n[`$$${t}Data`]=e[1]):n[`$$${t}`]=e;else if(Array.isArray(e)){const i=e[0];n.addEventListener(t,e[0]=s=>i.call(n,e[1],s))}else n.addEventListener(t,e)}function xm(n,t,e={}){const r=Object.keys(t||{}),i=Object.keys(e);let s,o;for(s=0,o=i.length;s<o;s++){const a=i[s];!a||a==="undefined"||t[a]||(_c(n,a,!1),delete e[a])}for(s=0,o=r.length;s<o;s++){const a=r[s],c=!!t[a];!a||a==="undefined"||e[a]===c||!c||(_c(n,a,!0),e[a]=c)}return e}function Nm(n,t,e){if(!t)return e?no(n,"style"):t;const r=n.style;if(typeof t=="string")return r.cssText=t;typeof e=="string"&&(r.cssText=e=void 0),e||(e={}),t||(t={});let i,s;for(s in e)t[s]==null&&r.removeProperty(s),delete e[s];for(s in t)i=t[s],i!==e[s]&&(r.setProperty(s,i),e[s]=i);return e}function km(n,t={},e,r){const i={};return r||Zt(()=>i.children=_n(n,t.children,i.children)),Zt(()=>t.ref&&t.ref(n)),Zt(()=>Om(n,t,e,!0,i,!0)),i}function Wt(n,t,e,r){if(e!==void 0&&!r&&(r=[]),typeof t!="function")return _n(n,t,r,e);Zt(i=>_n(n,t(),i,e),r)}function Om(n,t,e,r,i={},s=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=yc(n,o,null,i[o],e,s)}for(const o in t){if(o==="children"){r||_n(n,t.children);continue}const a=t[o];i[o]=yc(n,o,a,i[o],e,s)}}function Mm(n){return n.toLowerCase().replace(/-([a-z])/g,(t,e)=>e.toUpperCase())}function _c(n,t,e){const r=t.trim().split(/\s+/);for(let i=0,s=r.length;i<s;i++)n.classList.toggle(r[i],e)}function yc(n,t,e,r,i,s){let o,a,c,u,l;if(t==="style")return Nm(n,e,r);if(t==="classList")return xm(n,e,r);if(e===r)return r;if(t==="ref")s||e(n);else if(t.slice(0,3)==="on:"){const h=t.slice(3);r&&n.removeEventListener(h,r),e&&n.addEventListener(h,e)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);r&&n.removeEventListener(h,r,!0),e&&n.addEventListener(h,e,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),d=Rm.has(h);if(!d&&r){const m=Array.isArray(r)?r[0]:r;n.removeEventListener(h,m)}(d||e)&&(Dm(n,h,e,d),d&&Zo([h]))}else if(t.slice(0,5)==="attr:")no(n,t.slice(5),e);else if((l=t.slice(0,5)==="prop:")||(c=wm.has(t))||!i&&((u=bm(t,n.tagName))||(a=Tm.has(t)))||(o=n.nodeName.includes("-")))l&&(t=t.slice(5),a=!0),t==="class"||t==="className"?ta(n,e):o&&!a&&!c?n[Mm(t)]=e:n[u||t]=e;else{const h=i&&t.indexOf(":")>-1&&Sm[t.split(":")[0]];h?Vm(n,h,t,e):no(n,vm[t]||t,e)}return e}function Lm(n){const t=`$$${n.type}`;let e=n.composedPath&&n.composedPath()[0]||n.target;for(n.target!==e&&Object.defineProperty(n,"target",{configurable:!0,value:e}),Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}});e;){const r=e[t];if(r&&!e.disabled){const i=e[`${t}Data`];if(i!==void 0?r.call(e,i,n):r.call(e,n),n.cancelBubble)return}e=e._$host||e.parentNode||e.host}}function _n(n,t,e,r,i){for(;typeof e=="function";)e=e();if(t===e)return e;const s=typeof t,o=r!==void 0;if(n=o&&e[0]&&e[0].parentNode||n,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),o){let a=e[0];a&&a.nodeType===3?a.data=t:a=document.createTextNode(t),e=Ze(n,e,r,a)}else e!==""&&typeof e=="string"?e=n.firstChild.data=t:e=n.textContent=t;else if(t==null||s==="boolean")e=Ze(n,e,r);else{if(s==="function")return Zt(()=>{let a=t();for(;typeof a=="function";)a=a();e=_n(n,a,e,r)}),()=>e;if(Array.isArray(t)){const a=[],c=e&&Array.isArray(e);if(ro(a,t,e,i))return Zt(()=>e=_n(n,a,e,r,!0)),()=>e;if(a.length===0){if(e=Ze(n,e,r),o)return e}else c?e.length===0?Ic(n,a,r):Pm(n,e,a):(e&&Ze(n),Ic(n,a));e=a}else if(t.nodeType){if(Array.isArray(e)){if(o)return e=Ze(n,e,r,t);Ze(n,e,null,t)}else e==null||e===""||!n.firstChild?n.appendChild(t):n.replaceChild(t,n.firstChild);e=t}}return e}function ro(n,t,e,r){let i=!1;for(let s=0,o=t.length;s<o;s++){let a=t[s],c=e&&e[s],u;if(!(a==null||a===!0||a===!1))if((u=typeof a)=="object"&&a.nodeType)n.push(a);else if(Array.isArray(a))i=ro(n,a,c)||i;else if(u==="function")if(r){for(;typeof a=="function";)a=a();i=ro(n,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||i}else n.push(a),i=!0;else{const l=String(a);c&&c.nodeType===3&&c.data===l?n.push(c):n.push(document.createTextNode(l))}}return i}function Ic(n,t,e=null){for(let r=0,i=t.length;r<i;r++)n.insertBefore(t[r],e)}function Ze(n,t,e,r){if(e===void 0)return n.textContent="";const i=r||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const a=t[o];if(i!==a){const c=a.parentNode===n;!s&&!o?c?n.replaceChild(i,a):n.insertBefore(i,e):c&&a.remove()}else s=!0}}else n.insertBefore(i,e);return[i]}const Fm=!1;function fl(n,t,e){return n.addEventListener(t,e),()=>n.removeEventListener(t,e)}function Bm([n,t],e,r){return[e?()=>e(n()):n,r?i=>t(r(i)):t]}function $m(n){try{return document.querySelector(n)}catch(t){return null}}function ml(n,t){const e=$m(`#${n}`);e?e.scrollIntoView():t&&window.scrollTo(0,0)}function gl(n,t,e,r){let i=!1;const s=a=>typeof a=="string"?{value:a}:a,o=Bm(le(s(n()),{equals:(a,c)=>a.value===c.value}),void 0,a=>(!i&&t(a),a));return e&&Ho(e((a=n())=>{i=!0,o[1](s(a)),i=!1})),{signal:o,utils:r}}function Um(n){if(n){if(Array.isArray(n))return{signal:n}}else return{signal:le({value:""})};return n}function qm(){return gl(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:n,replace:t,scroll:e,state:r})=>{t?window.history.replaceState(r,"",n):window.history.pushState(r,"",n),ml(window.location.hash.slice(1),e)},n=>fl(window,"popstate",()=>n()),{go:n=>window.history.go(n)})}function jm(){return gl(()=>window.location.hash.slice(1),({value:n,replace:t,scroll:e,state:r})=>{t?window.history.replaceState(r,"","#"+n):window.location.hash=n;const i=n.indexOf("#"),s=i>=0?n.slice(i+1):"";ml(s,e)},n=>fl(window,"hashchange",()=>n()),{go:n=>window.history.go(n),renderPath:n=>`#${n}`,parsePath:n=>{const t=n.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,e="/"]=window.location.hash.split("#",2);return`${e}#${t}`}return t}})}function zm(){let n=new Set;function t(i){return n.add(i),()=>n.delete(i)}let e=!1;function r(i,s){if(e)return!(e=!1);const o={to:i,options:s,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const a of n)a.listener(Ft(vt({},o),{from:a.location,retry:c=>{c&&(e=!0),a.navigate(i,s)}}));return!o.defaultPrevented}return{subscribe:t,confirm:r}}const Gm=/^(?:[a-z0-9]+:)?\/\//i,Km=/^\/+|(\/)\/+$/g;function Le(n,t=!1){const e=n.replace(Km,"$1");return e?t||/^[?#]/.test(e)?e:"/"+e:""}function ai(n,t,e){if(Gm.test(t))return;const r=Le(n),i=e&&Le(e);let s="";return!i||t.startsWith("/")?s=r:i.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+i:s=i,(s||"/")+Le(t,!s)}function Wm(n,t){if(n==null)throw new Error(t);return n}function pl(n,t){return Le(n).replace(/\/*(\*.*)?$/g,"")+Le(t)}function Hm(n){const t={};return n.searchParams.forEach((e,r)=>{t[r]=e}),t}function Qm(n,t,e){const[r,i]=n.split("/*",2),s=r.split("/").filter(Boolean),o=s.length;return a=>{const c=a.split("/").filter(Boolean),u=c.length-o;if(u<0||u>0&&i===void 0&&!t)return null;const l={path:o?"":"/",params:{}},h=d=>e===void 0?void 0:e[d];for(let d=0;d<o;d++){const m=s[d],I=c[d],y=m[0]===":",v=y?m.slice(1):m;if(y&&Ps(I,h(v)))l.params[v]=I;else if(y||!Ps(I,m))return null;l.path+=`/${I}`}if(i){const d=u?c.slice(-u).join("/"):"";if(Ps(d,h(i)))l.params[i]=d;else return null}return l}}function Ps(n,t){const e=r=>r.localeCompare(n,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?e(t):typeof t=="function"?t(n):Array.isArray(t)?t.some(e):t instanceof RegExp?t.test(n):!1}function Ym(n){const[t,e]=n.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((i,s)=>i+(s.startsWith(":")?2:3),r.length-(e===void 0?0:1))}function _l(n){const t=new Map,e=om();return new Proxy({},{get(r,i){return t.has(i)||am(e,()=>t.set(i,rt(()=>n()[i]))),t.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(n())}})}function yl(n){let t=/(\/?\:[^\/]+)\?/.exec(n);if(!t)return[n];let e=n.slice(0,t.index),r=n.slice(t.index+t[0].length);const i=[e,e+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)i.push(e+=t[1]),r=r.slice(t[0].length);return yl(r).reduce((s,o)=>[...s,...i.map(a=>a+o)],[])}const Xm=100,Il=Qo(),Ki=Qo(),Wi=()=>Wm(zi(Il),"Make sure your app is wrapped in a <Router />");let sr;const ea=()=>sr||zi(Ki)||Wi().base,Jm=n=>{const t=ea();return rt(()=>t.resolvePath(n()))},Zm=n=>{const t=Wi();return rt(()=>{const e=n();return e!==void 0?t.renderPath(e):e})},tg=()=>Wi().location;function eg(n,t="",e){const{component:r,data:i,children:s}=n,o=!s||Array.isArray(s)&&!s.length,a={key:n,element:r?()=>Q(r,{}):()=>{const{element:c}=n;return c===void 0&&e?Q(e,{}):c},preload:n.component?r.preload:n.preload,data:i};return El(n.path).reduce((c,u)=>{for(const l of yl(u)){const h=pl(t,l),d=o?h:h.split("/*",1)[0];c.push(Ft(vt({},a),{originalPath:l,pattern:d,matcher:Qm(d,!o,n.matchFilters)}))}return c},[])}function ng(n,t=0){return{routes:n,score:Ym(n[n.length-1])*1e4-t,matcher(e){const r=[];for(let i=n.length-1;i>=0;i--){const s=n[i],o=s.matcher(e);if(!o)return null;r.unshift(Ft(vt({},o),{route:s}))}return r}}}function El(n){return Array.isArray(n)?n:[n]}function Tl(n,t="",e,r=[],i=[]){const s=El(n);for(let o=0,a=s.length;o<a;o++){const c=s[o];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const u=eg(c,t,e);for(const l of u){r.push(l);const h=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!h)Tl(c.children,l.pattern,e,r,i);else{const d=ng([...r],i.length);i.push(d)}r.pop()}}}return r.length?i:i.sort((o,a)=>a.score-o.score)}function rg(n,t){for(let e=0,r=n.length;e<r;e++){const i=n[e].matcher(t);if(i)return i}return[]}function ig(n,t){const e=new URL("http://sar"),r=rt(c=>{const u=n();try{return new URL(u,e)}catch(l){return console.error(`Invalid path ${u}`),c}},e,{equals:(c,u)=>c.href===u.href}),i=rt(()=>r().pathname),s=rt(()=>r().search,!0),o=rt(()=>r().hash),a=rt(()=>"");return{get pathname(){return i()},get search(){return s()},get hash(){return o()},get state(){return t()},get key(){return a()},query:_l(al(s,()=>Hm(r())))}}function sg(n,t="",e,r){const{signal:[i,s],utils:o={}}=Um(n),a=o.parsePath||(z=>z),c=o.renderPath||(z=>z),u=o.beforeLeave||zm(),l=ai("",t),h=void 0;if(l===void 0)throw new Error(`${l} is not a valid base path`);l&&!i().value&&s({value:l,replace:!0,scroll:!1});const[d,m]=le(!1),I=z=>p(this,null,function*(){m(!0);try{yield cm(z)}finally{m(!1)}}),[y,v]=le(i().value),[k,C]=le(i().state),S=ig(y,k),x=[],O={pattern:l,params:{},path:()=>l,outlet:()=>null,resolvePath(z){return ai(l,z)}};if(e)try{sr=O,O.data=e({data:void 0,params:{},location:S,navigate:ct(O)})}finally{sr=void 0}function K(z,W,ft){Mt(()=>{if(typeof W=="number"){W&&(o.go?u.confirm(W,ft)&&o.go(W):console.warn("Router integration does not support relative routing"));return}const{replace:Wr,resolve:Hr,scroll:ie,state:On}=vt({replace:!1,resolve:!0,scroll:!0},ft),se=Hr?z.resolvePath(W):ai("",W);if(se===void 0)throw new Error(`Path '${W}' is not a routable path`);if(x.length>=Xm)throw new Error("Too many redirects");const Mn=y();if((se!==Mn||On!==k())&&!Fm){if(u.confirm(se,ft)){const Qf=x.push({value:Mn,replace:Wr,scroll:ie,state:k()});I(()=>{v(se),C(On)}).then(()=>{x.length===Qf&&re({value:se,state:On})})}}})}function ct(z){return z=z||zi(Ki)||O,(W,ft)=>K(z,W,ft)}function re(z){const W=x[0];W&&((z.value!==W.value||z.state!==W.state)&&s(Ft(vt({},z),{replace:W.replace,scroll:W.scroll})),x.length=0)}Zt(()=>{const{value:z,state:W}=i();Mt(()=>{z!==y()&&I(()=>{v(z),C(W)})})});{let z=function(W){if(W.defaultPrevented||W.button!==0||W.metaKey||W.altKey||W.ctrlKey||W.shiftKey)return;const ft=W.composedPath().find(Mn=>Mn instanceof Node&&Mn.nodeName.toUpperCase()==="A");if(!ft||!ft.hasAttribute("link"))return;const Wr=ft.href;if(ft.target||!Wr&&!ft.hasAttribute("state"))return;const Hr=(ft.getAttribute("rel")||"").split(/\s+/);if(ft.hasAttribute("download")||Hr&&Hr.includes("external"))return;const ie=new URL(Wr);if(ie.origin!==window.location.origin||l&&ie.pathname&&!ie.pathname.toLowerCase().startsWith(l.toLowerCase()))return;const On=a(ie.pathname+ie.search+ie.hash),se=ft.getAttribute("state");W.preventDefault(),K(O,On,{resolve:!1,replace:ft.hasAttribute("replace"),scroll:!ft.hasAttribute("noscroll"),state:se&&JSON.parse(se)})};var hc=z;Zo(["click"]),document.addEventListener("click",z),Ho(()=>document.removeEventListener("click",z))}return{base:O,out:h,location:S,isRouting:d,renderPath:c,parsePath:a,navigatorFactory:ct,beforeLeave:u}}function og(n,t,e,r,i){const{base:s,location:o,navigatorFactory:a}=n,{pattern:c,element:u,preload:l,data:h}=r().route,d=rt(()=>r().path);l&&l();const m={parent:t,pattern:c,get child(){return e()},path:d,params:i,data:t.data,outlet:u,resolvePath(I){return ai(s.path(),I,d())}};if(h)try{sr=m,m.data=h({data:t.data,params:i,location:o,navigate:a(m)})}finally{sr=void 0}return m}const ag=Cr("<a link>"),cg=n=>{const{source:t,url:e,base:r,data:i,out:s}=n,o=t||qm(),a=sg(o,r,i);return Q(Il.Provider,{value:a,get children(){return n.children}})},ug=n=>{const t=Wi(),e=ea(),r=Yo(()=>n.children),i=rt(()=>Tl(r(),pl(e.pattern,n.base||""),lg)),s=rt(()=>rg(i(),t.location.pathname)),o=_l(()=>{const l=s(),h={};for(let d=0;d<l.length;d++)Object.assign(h,l[d].params);return h});t.out&&t.out.matches.push(s().map(({route:l,path:h,params:d})=>({originalPath:l.originalPath,pattern:l.pattern,path:h,params:d})));const a=[];let c;const u=rt(al(s,(l,h,d)=>{let m=h&&l.length===h.length;const I=[];for(let y=0,v=l.length;y<v;y++){const k=h&&h[y],C=l[y];d&&k&&C.route.key===k.route.key?I[y]=d[y]:(m=!1,a[y]&&a[y](),Yn(S=>{a[y]=S,I[y]=og(t,I[y-1]||e,()=>u()[y+1],()=>s()[y],o)}))}return a.splice(l.length).forEach(y=>y()),d&&m?d:(c=I[0],I)}));return Q(dl,{get when(){return u()&&c},keyed:!0,children:l=>Q(Ki.Provider,{value:l,get children(){return l.outlet()}})})},Ec=n=>{const t=Yo(()=>n.children);return Ii(n,{get children(){return t()}})},lg=()=>{const n=ea();return Q(dl,{get when(){return n.child},keyed:!0,children:t=>Q(Ki.Provider,{value:t,get children(){return t.outlet()}})})};function Xn(n){n=Ii({inactiveClass:"inactive",activeClass:"active"},n);const[,t]=_m(n,["href","state","class","activeClass","inactiveClass","end"]),e=Jm(()=>n.href),r=Zm(e),i=tg(),s=rt(()=>{const o=e();if(o===void 0)return!1;const a=Le(o.split(/[?#]/,1)[0]).toLowerCase(),c=Le(i.pathname).toLowerCase();return n.end?a===c:c.startsWith(a)});return(()=>{const o=ag();return km(o,Ii(t,{get href(){return r()||n.href},get state(){return JSON.stringify(n.state)},get classList(){return vt(Ft(vt({},n.class&&{[n.class]:!0}),{[n.inactiveClass]:!s(),[n.activeClass]:s()}),t.classList)},get"aria-current"(){return s()?"page":void 0}}),!1,!1),o})()}const io=Symbol("store-raw"),dn=Symbol("store-node"),Kt=Symbol("store-has"),wl=Symbol("store-self");function vl(n){let t=n[Ot];if(!t&&(Object.defineProperty(n,Ot,{value:t=new Proxy(n,fg)}),!Array.isArray(n))){const e=Object.keys(n),r=Object.getOwnPropertyDescriptors(n);for(let i=0,s=e.length;i<s;i++){const o=e[i];r[o].get&&Object.defineProperty(n,o,{enumerable:r[o].enumerable,get:r[o].get.bind(t)})}}return t}function Ei(n){let t;return n!=null&&typeof n=="object"&&(n[Ot]||!(t=Object.getPrototypeOf(n))||t===Object.prototype||Array.isArray(n))}function or(n,t=new Set){let e,r,i,s;if(e=n!=null&&n[io])return e;if(!Ei(n)||t.has(n))return n;if(Array.isArray(n)){Object.isFrozen(n)?n=n.slice(0):t.add(n);for(let o=0,a=n.length;o<a;o++)i=n[o],(r=or(i,t))!==i&&(n[o]=r)}else{Object.isFrozen(n)?n=Object.assign({},n):t.add(n);const o=Object.keys(n),a=Object.getOwnPropertyDescriptors(n);for(let c=0,u=o.length;c<u;c++)s=o[c],!a[s].get&&(i=n[s],(r=or(i,t))!==i&&(n[s]=r))}return n}function Ti(n,t){let e=n[t];return e||Object.defineProperty(n,t,{value:e=Object.create(null)}),e}function ar(n,t,e){if(n[t])return n[t];const[r,i]=le(e,{equals:!1,internal:!0});return r.$=i,n[t]=r}function hg(n,t){const e=Reflect.getOwnPropertyDescriptor(n,t);return!e||e.get||!e.configurable||t===Ot||t===dn||(delete e.value,delete e.writable,e.get=()=>n[Ot][t]),e}function Al(n){Zs()&&ar(Ti(n,dn),wl)()}function dg(n){return Al(n),Reflect.ownKeys(n)}const fg={get(n,t,e){if(t===io)return n;if(t===Ot)return e;if(t===Js)return Al(n),e;const r=Ti(n,dn),i=r[t];let s=i?i():n[t];if(t===dn||t===Kt||t==="__proto__")return s;if(!i){const o=Object.getOwnPropertyDescriptor(n,t);Zs()&&(typeof s!="function"||n.hasOwnProperty(t))&&!(o&&o.get)&&(s=ar(r,t,s)())}return Ei(s)?vl(s):s},has(n,t){return t===io||t===Ot||t===Js||t===dn||t===Kt||t==="__proto__"?!0:(Zs()&&ar(Ti(n,Kt),t)(),t in n)},set(){return!0},deleteProperty(){return!0},ownKeys:dg,getOwnPropertyDescriptor:hg};function wi(n,t,e,r=!1){if(!r&&n[t]===e)return;const i=n[t],s=n.length;e===void 0?(delete n[t],n[Kt]&&n[Kt][t]&&i!==void 0&&n[Kt][t].$()):(n[t]=e,n[Kt]&&n[Kt][t]&&i===void 0&&n[Kt][t].$());let o=Ti(n,dn),a;if((a=ar(o,t,i))&&a.$(()=>e),Array.isArray(n)&&n.length!==s){for(let c=n.length;c<s;c++)(a=o[c])&&a.$();(a=ar(o,"length",s))&&a.$(n.length)}(a=o[wl])&&a.$()}function bl(n,t){const e=Object.keys(t);for(let r=0;r<e.length;r+=1){const i=e[r];wi(n,i,t[i])}}function mg(n,t){if(typeof t=="function"&&(t=t(n)),t=or(t),Array.isArray(t)){if(n===t)return;let e=0,r=t.length;for(;e<r;e++){const i=t[e];n[e]!==i&&wi(n,e,i)}wi(n,"length",r)}else bl(n,t)}function zn(n,t,e=[]){let r,i=n;if(t.length>1){r=t.shift();const o=typeof r,a=Array.isArray(n);if(Array.isArray(r)){for(let c=0;c<r.length;c++)zn(n,[r[c]].concat(t),e);return}else if(a&&o==="function"){for(let c=0;c<n.length;c++)r(n[c],c)&&zn(n,[c].concat(t),e);return}else if(a&&o==="object"){const{from:c=0,to:u=n.length-1,by:l=1}=r;for(let h=c;h<=u;h+=l)zn(n,[h].concat(t),e);return}else if(t.length>1){zn(n[r],t,[r].concat(e));return}i=n[r],e=[r].concat(e)}let s=t[0];typeof s=="function"&&(s=s(i,e),s===i)||r===void 0&&s==null||(s=or(s),r===void 0||Ei(i)&&Ei(s)&&!Array.isArray(s)?bl(i,s):wi(n,r,s))}function gg(...[n,t]){const e=or(n||{}),r=Array.isArray(e),i=vl(e);function s(...o){sm(()=>{r&&o.length===1?mg(e,o[0]):zn(e,o)})}return[i,s]}const pg={loadingState:{isLoading:!1,text:"Loading..."},errorState:{isError:!1,title:"Something Wrong!",message:"Opps, please check app configuration or service that might cause this error."}},Rl=Qo(),_g=n=>{const[t,e]=gg(vt({},pg));return Q(Rl.Provider,{value:[t,e],get children(){return n.children}})},Sl=()=>zi(Rl),yg=Cr('<div class=text-center><div class="px-4 pt-4 pb-2 inline-block"role=status><svg aria-hidden=true class="mr-2 w-8 h-8 text-gray-200 animate-spin fill-blue-600"viewBox="0 0 100 101"fill=none xmlns=http://www.w3.org/2000/svg><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"fill=currentColor></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"fill=currentFill></path></svg></div><div class=text-sm>'),Ig=n=>(()=>{const t=yg(),e=t.firstChild,r=e.nextSibling;return Wt(r,()=>n.text||"Loading..."),t})(),Eg=Cr("<div>"),Tg=n=>(()=>{const t=Eg();return Wt(t,Q(Ig,{get text(){return n.text}})),Zt(()=>ta(t,`w-full h-full fixed text-center top-0
    left-0 flex items-center justify-center bg-white 
    transition duration-150 ease-in-out 
    ${n.isLoading?"opacity-100 z-50":"opacity-0 -z-10"}`)),t})(),wg=Cr("<div>"),na=({children:n,styleClass:t=""})=>{const[e]=Sl();return(()=>{const r=wg();return ta(r,`${t}`),Wt(r,Q(Tg,Ii(()=>e.loadingState)),null),Wt(r,n,null),r})()};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},vg=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Cl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),r.push(e[l],e[h],e[d],e[m])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Pl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):vg(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const u=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Ag;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const I=u<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ag extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bg=function(n){const t=Pl(n);return Cl.encodeByteArray(t,!0)},Vl=function(n){return bg(n).replace(/\./g,"")},Rg=function(n){try{return Cl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=()=>Sg().__FIREBASE_DEFAULTS__,Cg=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vg=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=n&&Rg(n[1]);return t&&JSON.parse(t)},Dl=()=>{try{return Pg()||Cg()||Vg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xl=()=>{var n;return(n=Dl())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xg(){var n;const t=(n=Dl())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(e){return!1}}function Ng(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kg(){return!xg()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ra(){try{return typeof indexedDB=="object"}catch(n){return!1}}function Nl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}function Og(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="FirebaseError";class we extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Mg,Object.setPrototypeOf(this,we.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Lg(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new we(i,a,r)}}function Lg(n,t){return n.replace(Fg,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Fg=/\{\$([^}]+)}/g;function cr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(Tc(s)&&Tc(o)){if(!cr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Tc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=1e3,$g=2,Ug=4*60*60*1e3,qg=.5;function wc(n,t=Bg,e=$g){const r=t*Math.pow(e,n),i=Math.round(qg*r*(Math.random()-.5)*2);return Math.min(Ug,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n){return n&&n._delegate?n._delegate:n}class te{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Dg;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch(i){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Gg(t))try{this.getOrInitializeService({instanceIdentifier:Pe})}catch(e){}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch(s){}}}}clearInstance(t=Pe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}delete(){return p(this,null,function*(){const t=Array.from(this.instances.values());yield Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])})}isComponentSet(){return this.component!=null}isInitialized(t=Pe){return this.instances.has(t)}getOptions(t=Pe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch(s){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zg(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(i){}return r||null}normalizeInstanceIdentifier(t=Pe){return this.component?this.component.multipleInstances?t:Pe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zg(n){return n===Pe?void 0:n}function Gg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new jg(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const Wg={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Hg=F.INFO,Qg={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Yg=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Qg[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ia{constructor(t){this.name=t,this._logLevel=Hg,this._logHandler=Yg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Wg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const Xg=(n,t)=>t.some(e=>n instanceof e);let vc,Ac;function Jg(){return vc||(vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zg(){return Ac||(Ac=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kl=new WeakMap,oo=new WeakMap,Ol=new WeakMap,Cs=new WeakMap,sa=new WeakMap;function tp(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(he(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&kl.set(e,n)}).catch(()=>{}),sa.set(t,n),t}function ep(n){if(oo.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});oo.set(n,t)}let ao={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return oo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ol.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return he(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function np(n){ao=n(ao)}function rp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Vs(this),t,...e);return Ol.set(r,t.sort?t.sort():[t]),he(r)}:Zg().includes(n)?function(...t){return n.apply(Vs(this),t),he(kl.get(this))}:function(...t){return he(n.apply(Vs(this),t))}}function ip(n){return typeof n=="function"?rp(n):(n instanceof IDBTransaction&&ep(n),Xg(n,Jg())?new Proxy(n,ao):n)}function he(n){if(n instanceof IDBRequest)return tp(n);if(Cs.has(n))return Cs.get(n);const t=ip(n);return t!==n&&(Cs.set(n,t),sa.set(t,n)),t}const Vs=n=>sa.get(n);function sp(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=he(o);return r&&o.addEventListener("upgradeneeded",c=>{r(he(o.result),c.oldVersion,c.newVersion,he(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const op=["get","getKey","getAll","getAllKeys","count"],ap=["put","add","delete","clear"],Ds=new Map;function bc(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ds.get(t))return Ds.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=ap.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||op.includes(e)))return;const s=function(o,...a){return p(this,null,function*(){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(yield Promise.all([u[e](...a),i&&c.done]))[0]})};return Ds.set(t,s),s}np(n=>Ft(vt({},n),{get:(t,e,r)=>bc(t,e)||n.get(t,e,r),has:(t,e)=>!!bc(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(up(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function up(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const co="@firebase/app",Rc="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new ia("@firebase/app"),lp="@firebase/app-compat",hp="@firebase/analytics-compat",dp="@firebase/analytics",fp="@firebase/app-check-compat",mp="@firebase/app-check",gp="@firebase/auth",pp="@firebase/auth-compat",_p="@firebase/database",yp="@firebase/database-compat",Ip="@firebase/functions",Ep="@firebase/functions-compat",Tp="@firebase/installations",wp="@firebase/installations-compat",vp="@firebase/messaging",Ap="@firebase/messaging-compat",bp="@firebase/performance",Rp="@firebase/performance-compat",Sp="@firebase/remote-config",Pp="@firebase/remote-config-compat",Cp="@firebase/storage",Vp="@firebase/storage-compat",Dp="@firebase/firestore",xp="@firebase/firestore-compat",Np="firebase",kp="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="[DEFAULT]",Op={[co]:"fire-core",[lp]:"fire-core-compat",[dp]:"fire-analytics",[hp]:"fire-analytics-compat",[mp]:"fire-app-check",[fp]:"fire-app-check-compat",[gp]:"fire-auth",[pp]:"fire-auth-compat",[_p]:"fire-rtdb",[yp]:"fire-rtdb-compat",[Ip]:"fire-fn",[Ep]:"fire-fn-compat",[Tp]:"fire-iid",[wp]:"fire-iid-compat",[vp]:"fire-fcm",[Ap]:"fire-fcm-compat",[bp]:"fire-perf",[Rp]:"fire-perf-compat",[Sp]:"fire-rc",[Pp]:"fire-rc-compat",[Cp]:"fire-gcs",[Vp]:"fire-gcs-compat",[Dp]:"fire-fst",[xp]:"fire-fst-compat","fire-js":"fire-js",[Np]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Map,lo=new Map;function Mp(n,t){try{n.container.addComponent(t)}catch(e){$e.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ge(n){const t=n.name;if(lo.has(t))return $e.debug(`There were multiple attempts to register component ${t}.`),!1;lo.set(t,n);for(const e of vi.values())Mp(e,n);return!0}function Vr(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},de=new Hi("app","Firebase",Lp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new te("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=kp;function Ml(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:uo,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw de.create("bad-app-name",{appName:String(i)});if(e||(e=xl()),!e)throw de.create("no-options");const s=vi.get(i);if(s){if(cr(e,s.options)&&cr(r,s.config))return s;throw de.create("duplicate-app",{appName:i})}const o=new Kg(i);for(const c of lo.values())o.addComponent(c);const a=new Fp(e,r,o);return vi.set(i,a),a}function $p(n=uo){const t=vi.get(n);if(!t&&n===uo&&xl())return Ml();if(!t)throw de.create("no-app",{appName:n});return t}function zt(n,t,e){var r;let i=(r=Op[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$e.warn(a.join(" "));return}ge(new te(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="firebase-heartbeat-database",qp=1,ur="firebase-heartbeat-store";let xs=null;function Ll(){return xs||(xs=sp(Up,qp,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(ur)}}}).catch(n=>{throw de.create("idb-open",{originalErrorMessage:n.message})})),xs}function jp(n){return p(this,null,function*(){try{return yield(yield Ll()).transaction(ur).objectStore(ur).get(Fl(n))}catch(t){if(t instanceof we)$e.warn(t.message);else{const e=de.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$e.warn(e.message)}}})}function Sc(n,t){return p(this,null,function*(){try{const r=(yield Ll()).transaction(ur,"readwrite");yield r.objectStore(ur).put(t,Fl(n)),yield r.done}catch(e){if(e instanceof we)$e.warn(e.message);else{const r=de.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});$e.warn(r.message)}}})}function Fl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=1024,Gp=30*24*60*60*1e3;class Kp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Hp(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return p(this,null,function*(){var t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Pc();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=Gp}),this._storage.overwrite(this._heartbeatsCache)})}getHeartbeatsHeader(){return p(this,null,function*(){var t;if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pc(),{heartbeatsToSend:r,unsentEntries:i}=Wp(this._heartbeatsCache.heartbeats),s=Vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s})}}function Pc(){return new Date().toISOString().substring(0,10)}function Wp(n,t=zp){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cc(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Cc(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Hp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return p(this,null,function*(){return ra()?Nl().then(()=>!0).catch(()=>!1):!1})}read(){return p(this,null,function*(){return(yield this._canUseIndexedDBPromise)?(yield jp(this.app))||{heartbeats:[]}:{heartbeats:[]}})}overwrite(t){return p(this,null,function*(){var e;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Sc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return})}add(t){return p(this,null,function*(){var e;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Sc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return})}}function Cc(n){return Vl(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(n){ge(new te("platform-logger",t=>new cp(t),"PRIVATE")),ge(new te("heartbeat",t=>new Kp(t),"PRIVATE")),zt(co,Rc,n),zt(co,Rc,"esm2017"),zt("fire-js","")}Qp("");var Yp=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},E,oa=oa||{},P=Yp||self;function Qi(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Dr(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Xp(n){return Object.prototype.hasOwnProperty.call(n,Ns)&&n[Ns]||(n[Ns]=++Jp)}var Ns="closure_uid_"+(1e9*Math.random()>>>0),Jp=0;function Zp(n,t,e){return n.call.apply(n.bind,arguments)}function t_(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function pt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pt=Zp:pt=t_,pt.apply(null,arguments)}function Yr(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ot(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function ve(){this.s=this.s,this.o=this.o}var e_=0;ve.prototype.s=!1;ve.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),e_!=0)&&Xp(this)};ve.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bl=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function aa(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Vc(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Qi(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function _t(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var n_=function(){if(!P.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{P.addEventListener("test",()=>{},t),P.removeEventListener("test",()=>{},t)}catch(e){}return n}();function lr(n){return/^[\s\xa0]*$/.test(n)}function Yi(){var n=P.navigator;return n&&(n=n.userAgent)?n:""}function Bt(n){return Yi().indexOf(n)!=-1}function ca(n){return ca[" "](n),n}ca[" "]=function(){};function r_(n,t){var e=Q_;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var i_=Bt("Opera"),In=Bt("Trident")||Bt("MSIE"),$l=Bt("Edge"),ho=$l||In,Ul=Bt("Gecko")&&!(Yi().toLowerCase().indexOf("webkit")!=-1&&!Bt("Edge"))&&!(Bt("Trident")||Bt("MSIE"))&&!Bt("Edge"),s_=Yi().toLowerCase().indexOf("webkit")!=-1&&!Bt("Edge");function ql(){var n=P.document;return n?n.documentMode:void 0}var fo;t:{var ks="",Os=function(){var n=Yi();if(Ul)return/rv:([^\);]+)(\)|;)/.exec(n);if($l)return/Edge\/([\d\.]+)/.exec(n);if(In)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(s_)return/WebKit\/(\S+)/.exec(n);if(i_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Os&&(ks=Os?Os[1]:""),In){var Ms=ql();if(Ms!=null&&Ms>parseFloat(ks)){fo=String(Ms);break t}}fo=ks}var mo;if(P.document&&In){var Dc=ql();mo=Dc||parseInt(fo,10)||void 0}else mo=void 0;var o_=mo;function hr(n,t){if(_t.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Ul){t:{try{ca(t.nodeName);var i=!0;break t}catch(s){}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:a_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&hr.$.h.call(this)}}ot(hr,_t);var a_={2:"touch",3:"pen",4:"mouse"};hr.prototype.h=function(){hr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var xr="closure_listenable_"+(1e6*Math.random()|0),c_=0;function u_(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++c_,this.fa=this.ia=!1}function Xi(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ua(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function l_(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function jl(n){const t={};for(const e in n)t[e]=n[e];return t}const xc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zl(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<xc.length;s++)e=xc[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Ji(n){this.src=n,this.g={},this.h=0}Ji.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=po(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new u_(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function go(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=Bl(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Xi(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function po(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var la="closure_lm_"+(1e6*Math.random()|0),Ls={};function Gl(n,t,e,r,i){if(r&&r.once)return Wl(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Gl(n,t[s],e,r,i);return null}return e=fa(e),n&&n[xr]?n.O(t,e,Dr(r)?!!r.capture:!!r,i):Kl(n,t,e,!1,r,i)}function Kl(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Dr(i)?!!i.capture:!!i,a=da(n);if(a||(n[la]=a=new Ji(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=h_(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)n_||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(Ql(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function h_(){function n(e){return t.call(n.src,n.listener,e)}const t=d_;return n}function Wl(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Wl(n,t[s],e,r,i);return null}return e=fa(e),n&&n[xr]?n.P(t,e,Dr(r)?!!r.capture:!!r,i):Kl(n,t,e,!0,r,i)}function Hl(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Hl(n,t[s],e,r,i);else r=Dr(r)?!!r.capture:!!r,e=fa(e),n&&n[xr]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=po(s,e,r,i),-1<e&&(Xi(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=da(n))&&(t=n.g[t.toString()],n=-1,t&&(n=po(t,e,r,i)),(e=-1<n?t[n]:null)&&ha(e))}function ha(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[xr])go(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(Ql(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=da(t))?(go(e,n),e.h==0&&(e.src=null,t[la]=null)):Xi(n)}}}function Ql(n){return n in Ls?Ls[n]:Ls[n]="on"+n}function d_(n,t){if(n.fa)n=!0;else{t=new hr(t,this);var e=n.listener,r=n.la||n.src;n.ia&&ha(n),n=e.call(r,t)}return n}function da(n){return n=n[la],n instanceof Ji?n:null}var Fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function fa(n){return typeof n=="function"?n:(n[Fs]||(n[Fs]=function(t){return n.handleEvent(t)}),n[Fs])}function st(){ve.call(this),this.i=new Ji(this),this.S=this,this.J=null}ot(st,ve);st.prototype[xr]=!0;st.prototype.removeEventListener=function(n,t,e,r){Hl(this,n,t,e,r)};function ht(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new _t(t,n);else if(t instanceof _t)t.target=t.target||n;else{var i=t;t=new _t(r,n),zl(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=Xr(o,r,!0,t)&&i}if(o=t.g=n,i=Xr(o,r,!0,t)&&i,i=Xr(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=Xr(o,r,!1,t)&&i}st.prototype.N=function(){if(st.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Xi(e[r]);delete n.g[t],n.h--}}this.J=null};st.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};st.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Xr(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,c=o.la||o.src;o.ia&&go(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var ma=P.JSON.stringify;class f_{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function m_(){var n=ga;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class g_{constructor(){this.h=this.g=null}add(t,e){const r=Yl.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var Yl=new f_(()=>new p_,n=>n.reset());class p_{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function __(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function y_(n){P.setTimeout(()=>{throw n},0)}let dr,fr=!1,ga=new g_,Xl=()=>{const n=P.Promise.resolve(void 0);dr=()=>{n.then(I_)}};var I_=()=>{for(var n;n=m_();){try{n.h.call(n.g)}catch(e){y_(e)}var t=Yl;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}fr=!1};function Zi(n,t){st.call(this),this.h=n||1,this.g=t||P,this.j=pt(this.qb,this),this.l=Date.now()}ot(Zi,st);E=Zi.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&(pa(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pa(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}E.N=function(){Zi.$.N.call(this),pa(this),delete this.g};function _a(n,t,e){if(typeof n=="function")e&&(n=pt(n,e));else if(n&&typeof n.handleEvent=="function")n=pt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:P.setTimeout(n,t||0)}function Jl(n){n.g=_a(()=>{n.g=null,n.i&&(n.i=!1,Jl(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class E_ extends ve{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Jl(this)}N(){super.N(),this.g&&(P.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mr(n){ve.call(this),this.h=n,this.g={}}ot(mr,ve);var Nc=[];function Zl(n,t,e,r){Array.isArray(e)||(e&&(Nc[0]=e.toString()),e=Nc);for(var i=0;i<e.length;i++){var s=Gl(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function th(n){ua(n.g,function(t,e){this.g.hasOwnProperty(e)&&ha(t)},n),n.g={}}mr.prototype.N=function(){mr.$.N.call(this),th(this)};mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ts(){this.g=!0}ts.prototype.Ea=function(){this.g=!1};function T_(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function w_(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function hn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+A_(n,e)+(r?" "+r:"")})}function v_(n,t){n.info(function(){return"TIMEOUT: "+t})}ts.prototype.info=function(){};function A_(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ma(e)}catch(a){return t}}var Ye={},kc=null;function es(){return kc=kc||new st}Ye.Ta="serverreachability";function eh(n){_t.call(this,Ye.Ta,n)}ot(eh,_t);function gr(n){const t=es();ht(t,new eh(t))}Ye.STAT_EVENT="statevent";function nh(n,t){_t.call(this,Ye.STAT_EVENT,n),this.stat=t}ot(nh,_t);function Et(n){const t=es();ht(t,new nh(t,n))}Ye.Ua="timingevent";function rh(n,t){_t.call(this,Ye.Ua,n),this.size=t}ot(rh,_t);function Nr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return P.setTimeout(function(){n()},t)}var ns={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ih={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ya(){}ya.prototype.h=null;function Oc(n){return n.h||(n.h=n.i())}function sh(){}var kr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ia(){_t.call(this,"d")}ot(Ia,_t);function Ea(){_t.call(this,"c")}ot(Ea,_t);var _o;function rs(){}ot(rs,ya);rs.prototype.g=function(){return new XMLHttpRequest};rs.prototype.i=function(){return{}};_o=new rs;function Or(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new mr(this),this.P=b_,n=ho?125:void 0,this.V=new Zi(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new oh}function oh(){this.i=null,this.g="",this.h=!1}var b_=45e3,yo={},Ai={};E=Or.prototype;E.setTimeout=function(n){this.P=n};function Io(n,t,e){n.L=1,n.v=ss(ee(t)),n.s=e,n.S=!0,ah(n,null)}function ah(n,t){n.G=Date.now(),Mr(n),n.A=ee(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),gh(e.i,"t",r),n.C=0,e=n.l.J,n.h=new oh,n.g=Mh(n.l,e?t:null,!n.s),0<n.O&&(n.M=new E_(pt(n.Pa,n,n.g),n.O)),Zl(n.U,n.g,"readystatechange",n.nb),t=n.I?jl(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),gr(),T_(n.j,n.u,n.A,n.m,n.W,n.s)}E.nb=function(n){n=n.target;const t=this.M;t&&$t(n)==3?t.l():this.Pa(n)};E.Pa=function(n){try{if(n==this.g)t:{const l=$t(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||ho||this.g&&(this.h.h||this.g.ja()||Bc(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?gr(3):gr(2)),is(this);var e=this.g.da();this.ca=e;e:if(ch(this)){var r=Bc(this.g);n="";var i=r.length,s=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ke(this),Jn(this);var o="";break e}this.h.i=new P.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,w_(this.j,this.u,this.A,this.m,this.W,l,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!lr(a)){var u=a;break e}}u=null}if(e=u)hn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Eo(this,e);else{this.i=!1,this.o=3,Et(12),ke(this),Jn(this);break t}}this.S?(uh(this,l,o),ho&&this.i&&l==3&&(Zl(this.U,this.V,"tick",this.mb),this.V.start())):(hn(this.j,this.m,o,null),Eo(this,o)),l==4&&ke(this),this.i&&!this.J&&(l==4?xh(this.l,this):(this.i=!1,Mr(this)))}else K_(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,Et(12)):(this.o=0,Et(13)),ke(this),Jn(this)}}}catch(l){}finally{}};function ch(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function uh(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=R_(n,e),i==Ai){t==4&&(n.o=4,Et(14),r=!1),hn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==yo){n.o=4,Et(15),hn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else hn(n.j,n.m,i,null),Eo(n,i);ch(n)&&i!=Ai&&i!=yo&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,Et(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Ra(t),t.M=!0,Et(11))):(hn(n.j,n.m,e,"[Invalid Chunked Response]"),ke(n),Jn(n))}E.mb=function(){if(this.g){var n=$t(this.g),t=this.g.ja();this.C<t.length&&(is(this),uh(this,n,t),this.i&&n!=4&&Mr(this))}};function R_(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?Ai:(e=Number(t.substring(e,r)),isNaN(e)?yo:(r+=1,r+e>t.length?Ai:(t=t.slice(r,r+e),n.C=r+e,t)))}E.cancel=function(){this.J=!0,ke(this)};function Mr(n){n.Y=Date.now()+n.P,lh(n,n.P)}function lh(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Nr(pt(n.lb,n),t)}function is(n){n.B&&(P.clearTimeout(n.B),n.B=null)}E.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(v_(this.j,this.A),this.L!=2&&(gr(),Et(17)),ke(this),this.o=2,Jn(this)):lh(this,this.Y-n)};function Jn(n){n.l.H==0||n.J||xh(n.l,n)}function ke(n){is(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,pa(n.V),th(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Eo(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||To(e.i,n))){if(!n.K&&To(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Si(e),cs(e);else break t;ba(e),Et(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Nr(pt(e.ib,e),6e3));if(1>=yh(e.i)&&e.oa){try{e.oa()}catch(u){}e.oa=void 0}}else Oe(e,11)}else if((n.K||e.g==n)&&Si(e),!lr(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(e.V=u[0],u=u[1],e.H==2)if(u[0]=="c"){e.K=u[1],e.pa=u[2];const l=u[3];l!=null&&(e.ra=l,e.l.info("VER="+e.ra));const h=u[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const m=n.g;if(m){const I=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ta(s,s.h),s.h=null))}if(r.F){const y=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,H(r.I,r.F,y))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Oh(r,r.J?r.pa:null,r.Y),o.K){Ih(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(is(a),Mr(a)),r.g=o}else Vh(r);0<e.j.length&&us(e)}else u[0]!="stop"&&u[0]!="close"||Oe(e,7);else e.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Oe(e,7):Aa(e):u[0]!="noop"&&e.h&&e.h.Aa(u),e.A=0)}}gr(4)}catch(u){}}function S_(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map!="undefined"&&n instanceof Map||typeof Set!="undefined"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Qi(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function P_(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map!="undefined"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set!="undefined"&&n instanceof Set)){if(Qi(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function hh(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Qi(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=P_(n),r=S_(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var dh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function C_(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fe(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Fe){this.h=n.h,bi(this,n.j),this.s=n.s,this.g=n.g,Ri(this,n.m),this.l=n.l;var t=n.i,e=new pr;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Mc(this,e),this.o=n.o}else n&&(t=String(n).match(dh))?(this.h=!1,bi(this,t[1]||"",!0),this.s=Gn(t[2]||""),this.g=Gn(t[3]||"",!0),Ri(this,t[4]),this.l=Gn(t[5]||"",!0),Mc(this,t[6]||"",!0),this.o=Gn(t[7]||"")):(this.h=!1,this.i=new pr(null,this.h))}Fe.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Kn(t,Lc,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Kn(t,Lc,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Kn(e,e.charAt(0)=="/"?x_:D_,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Kn(e,k_)),n.join("")};function ee(n){return new Fe(n)}function bi(n,t,e){n.j=e?Gn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Ri(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Mc(n,t,e){t instanceof pr?(n.i=t,O_(n.i,n.h)):(e||(t=Kn(t,N_)),n.i=new pr(t,n.h))}function H(n,t,e){n.i.set(t,e)}function ss(n){return H(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Gn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Kn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,V_),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function V_(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Lc=/[#\/\?@]/g,D_=/[#\?:]/g,x_=/[#\?]/g,N_=/[#\?@]/g,k_=/#/g;function pr(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Ae(n){n.g||(n.g=new Map,n.h=0,n.i&&C_(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}E=pr.prototype;E.add=function(n,t){Ae(this),this.i=null,n=Cn(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function fh(n,t){Ae(n),t=Cn(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function mh(n,t){return Ae(n),t=Cn(n,t),n.g.has(t)}E.forEach=function(n,t){Ae(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};E.ta=function(){Ae(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};E.Z=function(n){Ae(this);let t=[];if(typeof n=="string")mh(this,n)&&(t=t.concat(this.g.get(Cn(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};E.set=function(n,t){return Ae(this),this.i=null,n=Cn(this,n),mh(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};E.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function gh(n,t,e){fh(n,t),0<e.length&&(n.i=null,n.g.set(Cn(n,t),aa(e)),n.h+=e.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Cn(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function O_(n,t){t&&!n.j&&(Ae(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(fh(this,r),gh(this,i,e))},n)),n.j=t}var M_=class{constructor(n,t){this.g=n,this.map=t}};function ph(n){this.l=n||L_,P.PerformanceNavigationTiming?(n=P.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(P.g&&P.g.Ka&&P.g.Ka()&&P.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var L_=10;function _h(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function yh(n){return n.h?1:n.g?n.g.size:0}function To(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Ta(n,t){n.g?n.g.add(t):n.h=t}function Ih(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}ph.prototype.cancel=function(){if(this.i=Eh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Eh(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return aa(n.i)}var F_=class{stringify(n){return P.JSON.stringify(n,void 0)}parse(n){return P.JSON.parse(n,void 0)}};function B_(){this.g=new F_}function $_(n,t,e){const r=e||"";try{hh(n,function(i,s){let o=i;Dr(i)&&(o=ma(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function U_(n,t){const e=new ts;if(P.Image){const r=new Image;r.onload=Yr(Jr,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Yr(Jr,e,r,"TestLoadImage: error",!1,t),r.onabort=Yr(Jr,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Yr(Jr,e,r,"TestLoadImage: timeout",!1,t),P.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Jr(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Lr(n){this.l=n.ec||null,this.j=n.ob||!1}ot(Lr,ya);Lr.prototype.g=function(){return new os(this.l,this.j)};Lr.prototype.i=function(n){return function(){return n}}({});function os(n,t){st.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=wa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(os,st);var wa=0;E=os.prototype;E.open=function(n,t){if(this.readyState!=wa)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,_r(this)};E.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||P).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=wa};E.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof P.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Th(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Th(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}E.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Fr(this):_r(this),this.readyState==3&&Th(this)}};E.Za=function(n){this.g&&(this.response=this.responseText=n,Fr(this))};E.Ya=function(n){this.g&&(this.response=n,Fr(this))};E.ka=function(){this.g&&Fr(this)};function Fr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,_r(n)}E.setRequestHeader=function(n,t){this.v.append(n,t)};E.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function _r(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(os.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var q_=P.JSON.parse;function et(n){st.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=wh,this.L=this.M=!1}ot(et,st);var wh="",j_=/^https?$/i,z_=["POST","PUT"];E=et.prototype;E.Oa=function(n){this.M=n};E.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_o.g(),this.C=this.u?Oc(this.u):Oc(_o),this.g.onreadystatechange=pt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Fc(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=P.FormData&&n instanceof P.FormData,!(0<=Bl(z_,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{bh(this),0<this.B&&((this.L=G_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pt(this.ua,this)):this.A=_a(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Fc(this,s)}};function G_(n){return In&&typeof n.timeout=="number"&&n.ontimeout!==void 0}E.ua=function(){typeof oa!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function Fc(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,vh(n),as(n)}function vh(n){n.F||(n.F=!0,ht(n,"complete"),ht(n,"error"))}E.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ht(this,"complete"),ht(this,"abort"),as(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),as(this,!0)),et.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?Ah(this):this.kb())};E.kb=function(){Ah(this)};function Ah(n){if(n.h&&typeof oa!="undefined"&&(!n.C[1]||$t(n)!=4||n.da()!=2)){if(n.v&&$t(n)==4)_a(n.La,0,n);else if(ht(n,"readystatechange"),$t(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(dh)[1]||null;!i&&P.self&&P.self.location&&(i=P.self.location.protocol.slice(0,-1)),r=!j_.test(i?i.toLowerCase():"")}e=r}if(e)ht(n,"complete"),ht(n,"success");else{n.m=6;try{var s=2<$t(n)?n.g.statusText:""}catch(a){s=""}n.j=s+" ["+n.da()+"]",vh(n)}}finally{as(n)}}}}function as(n,t){if(n.g){bh(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||ht(n,"ready");try{e.onreadystatechange=r}catch(i){}}}function bh(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(P.clearTimeout(n.A),n.A=null)}E.isActive=function(){return!!this.g};function $t(n){return n.g?n.g.readyState:0}E.da=function(){try{return 2<$t(this)?this.g.status:-1}catch(n){return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch(n){return""}};E.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),q_(t)}};function Bc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case wh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch(t){return null}}function K_(n){const t={};n=(n.g&&2<=$t(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(lr(n[r]))continue;var e=__(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}l_(t,function(r){return r.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rh(n){let t="";return ua(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function va(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Rh(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):H(n,t,e))}function Ln(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Sh(n){this.Ga=0,this.j=[],this.l=new ts,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ln("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ln("baseRetryDelayMs",5e3,n),this.hb=Ln("retryDelaySeedMs",1e4,n),this.eb=Ln("forwardChannelMaxRetries",2,n),this.xa=Ln("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new ph(n&&n.concurrentRequestLimit),this.Ja=new B_,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=Sh.prototype;E.ra=8;E.H=1;function Aa(n){if(Ph(n),n.H==3){var t=n.W++,e=ee(n.I);if(H(e,"SID",n.K),H(e,"RID",t),H(e,"TYPE","terminate"),Br(n,e),t=new Or(n,n.l,t),t.L=2,t.v=ss(ee(e)),e=!1,P.navigator&&P.navigator.sendBeacon)try{e=P.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!e&&P.Image&&(new Image().src=t.v,e=!0),e||(t.g=Mh(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Mr(t)}kh(n)}function cs(n){n.g&&(Ra(n),n.g.cancel(),n.g=null)}function Ph(n){cs(n),n.u&&(P.clearTimeout(n.u),n.u=null),Si(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&P.clearTimeout(n.m),n.m=null)}function us(n){if(!_h(n.i)&&!n.m){n.m=!0;var t=n.Na;dr||Xl(),fr||(dr(),fr=!0),ga.add(t,n),n.C=0}}function W_(n,t){return yh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Nr(pt(n.Na,n,t),Nh(n,n.C)),n.C++,!0)}E.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Or(this,this.l,n);let s=this.s;if(this.U&&(s?(s=jl(s),zl(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Ch(this,i,t),e=ee(this.I),H(e,"RID",n),H(e,"CVER",22),this.F&&H(e,"X-HTTP-Session-Id",this.F),Br(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(Rh(s)))+"&"+t:this.o&&va(e,this.o,s)),Ta(this.i,i),this.bb&&H(e,"TYPE","init"),this.P?(H(e,"$req",t),H(e,"SID","null"),i.aa=!0,Io(i,e,null)):Io(i,e,t),this.H=2}}else this.H==3&&(n?$c(this,n):this.j.length==0||_h(this.i)||$c(this))};function $c(n,t){var e;t?e=t.m:e=n.W++;const r=ee(n.I);H(r,"SID",n.K),H(r,"RID",e),H(r,"AID",n.V),Br(n,r),n.o&&n.s&&va(r,n.o,n.s),e=new Or(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Ch(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Ta(n.i,e),Io(e,r,t)}function Br(n,t){n.na&&ua(n.na,function(e,r){H(t,r,e)}),n.h&&hh({},function(e,r){H(t,r,e)})}function Ch(n,t,e){e=Math.min(n.j.length,e);var r=n.h?pt(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<e;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{$_(l,o,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Vh(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;dr||Xl(),fr||(dr(),fr=!0),ga.add(t,n),n.A=0}}function ba(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Nr(pt(n.Ma,n),Nh(n,n.A)),n.A++,!0)}E.Ma=function(){if(this.u=null,Dh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Nr(pt(this.jb,this),n)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Et(10),cs(this),Dh(this))};function Ra(n){n.B!=null&&(P.clearTimeout(n.B),n.B=null)}function Dh(n){n.g=new Or(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=ee(n.wa);H(t,"RID","rpc"),H(t,"SID",n.K),H(t,"AID",n.V),H(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&H(t,"TO",n.qa),H(t,"TYPE","xmlhttp"),Br(n,t),n.o&&n.s&&va(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=ss(ee(t)),e.s=null,e.S=!0,ah(e,n)}E.ib=function(){this.v!=null&&(this.v=null,cs(this),ba(this),Et(19))};function Si(n){n.v!=null&&(P.clearTimeout(n.v),n.v=null)}function xh(n,t){var e=null;if(n.g==t){Si(n),Ra(n),n.g=null;var r=2}else if(To(n.i,t))e=t.F,Ih(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=es(),ht(r,new rh(r,e)),us(n)}else Vh(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&W_(n,t)||r==2&&ba(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:Oe(n,5);break;case 4:Oe(n,10);break;case 3:Oe(n,6);break;default:Oe(n,2)}}}function Nh(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Oe(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=pt(n.pb,n);e||(e=new Fe("//www.google.com/images/cleardot.gif"),P.location&&P.location.protocol=="http"||bi(e,"https"),ss(e)),U_(e.toString(),r)}else Et(2);n.H=0,n.h&&n.h.za(t),kh(n),Ph(n)}E.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Et(2)):(this.l.info("Failed to ping google.com"),Et(1))};function kh(n){if(n.H=0,n.ma=[],n.h){const t=Eh(n.i);(t.length!=0||n.j.length!=0)&&(Vc(n.ma,t),Vc(n.ma,n.j),n.i.i.length=0,aa(n.j),n.j.length=0),n.h.ya()}}function Oh(n,t,e){var r=e instanceof Fe?ee(e):new Fe(e);if(r.g!="")t&&(r.g=t+"."+r.g),Ri(r,r.m);else{var i=P.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Fe(null);r&&bi(s,r),t&&(s.g=t),i&&Ri(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&H(r,e,t),H(r,"VER",n.ra),Br(n,r),r}function Mh(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new et(new Lr({ob:!0})):new et(n.va),t.Oa(n.J),t}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function Lh(){}E=Lh.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function Pi(){if(In&&!(10<=Number(o_)))throw Error("Environmental error: no available transport.")}Pi.prototype.g=function(n,t){return new St(n,t)};function St(n,t){st.call(this),this.g=new Sh(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!lr(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!lr(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new Vn(this)}ot(St,st);St.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Et(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Oh(n,null,n.Y),us(n)};St.prototype.close=function(){Aa(this.g)};St.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=ma(n),n=e);t.j.push(new M_(t.fb++,n)),t.H==3&&us(t)};St.prototype.N=function(){this.g.h=null,delete this.j,Aa(this.g),delete this.g,St.$.N.call(this)};function Fh(n){Ia.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}ot(Fh,Ia);function Bh(){Ea.call(this),this.status=1}ot(Bh,Ea);function Vn(n){this.g=n}ot(Vn,Lh);Vn.prototype.Ba=function(){ht(this.g,"a")};Vn.prototype.Aa=function(n){ht(this.g,new Fh(n))};Vn.prototype.za=function(n){ht(this.g,new Bh)};Vn.prototype.ya=function(){ht(this.g,"b")};function H_(){this.blockSize=-1}function Lt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ot(Lt,H_);Lt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Bs(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Lt.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Bs(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Bs(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Bs(this,r),i=0;break}}this.h=i,this.i+=t};Lt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function U(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var Q_={};function Sa(n){return-128<=n&&128>n?r_(n,function(t){return new U([t|0],0>t?-1:0)}):new U([n|0],0>n?-1:0)}function Ut(n){if(isNaN(n)||!isFinite(n))return fn;if(0>n)return lt(Ut(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=wo;return new U(t,0)}function $h(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return lt($h(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Ut(Math.pow(t,8)),r=fn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=Ut(Math.pow(t,s)),r=r.R(s).add(Ut(o))):(r=r.R(e),r=r.add(Ut(o)))}return r}var wo=4294967296,fn=Sa(0),vo=Sa(1),Uc=Sa(16777216);E=U.prototype;E.ea=function(){if(Ct(this))return-lt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:wo+r)*t,t*=wo}return n};E.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Ht(this))return"0";if(Ct(this))return"-"+lt(this).toString(n);for(var t=Ut(Math.pow(n,6)),e=this,r="";;){var i=Vi(e,t).g;e=Ci(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,Ht(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};E.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Ht(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function Ct(n){return n.h==-1}E.X=function(n){return n=Ci(this,n),Ct(n)?-1:Ht(n)?0:1};function lt(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new U(e,~n.h).add(vo)}E.abs=function(){return Ct(this)?lt(this):this};E.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new U(e,e[e.length-1]&-2147483648?-1:0)};function Ci(n,t){return n.add(lt(t))}E.R=function(n){if(Ht(this)||Ht(n))return fn;if(Ct(this))return Ct(n)?lt(this).R(lt(n)):lt(lt(this).R(n));if(Ct(n))return lt(this.R(lt(n)));if(0>this.X(Uc)&&0>n.X(Uc))return Ut(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;e[2*r+2*i]+=o*c,Zr(e,2*r+2*i),e[2*r+2*i+1]+=s*c,Zr(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,Zr(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,Zr(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new U(e,0)};function Zr(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Fn(n,t){this.g=n,this.h=t}function Vi(n,t){if(Ht(t))throw Error("division by zero");if(Ht(n))return new Fn(fn,fn);if(Ct(n))return t=Vi(lt(n),t),new Fn(lt(t.g),lt(t.h));if(Ct(t))return t=Vi(n,lt(t)),new Fn(lt(t.g),t.h);if(30<n.g.length){if(Ct(n)||Ct(t))throw Error("slowDivide_ only works with positive integers.");for(var e=vo,r=t;0>=r.X(n);)e=qc(e),r=qc(r);var i=tn(e,1),s=tn(r,1);for(r=tn(r,2),e=tn(e,2);!Ht(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=tn(r,1),e=tn(e,1)}return t=Ci(n,i.R(t)),new Fn(i,t)}for(i=fn;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ut(e),o=s.R(t);Ct(o)||0<o.X(n);)e-=r,s=Ut(e),o=s.R(t);Ht(s)&&(s=vo),i=i.add(s),n=Ci(n,o)}return new Fn(i,n)}E.gb=function(n){return Vi(this,n).h};E.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new U(e,this.h&n.h)};E.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new U(e,this.h|n.h)};E.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new U(e,this.h^n.h)};function qc(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new U(e,n.h)}function tn(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new U(i,n.h)}Pi.prototype.createWebChannel=Pi.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;ns.NO_ERROR=0;ns.TIMEOUT=8;ns.HTTP_ERROR=6;ih.COMPLETE="complete";sh.EventType=kr;kr.OPEN="a";kr.CLOSE="b";kr.ERROR="c";kr.MESSAGE="d";st.prototype.listen=st.prototype.O;et.prototype.listenOnce=et.prototype.P;et.prototype.getLastError=et.prototype.Sa;et.prototype.getLastErrorCode=et.prototype.Ia;et.prototype.getStatus=et.prototype.da;et.prototype.getResponseJson=et.prototype.Wa;et.prototype.getResponseText=et.prototype.ja;et.prototype.send=et.prototype.ha;et.prototype.setWithCredentials=et.prototype.Oa;Lt.prototype.digest=Lt.prototype.l;Lt.prototype.reset=Lt.prototype.reset;Lt.prototype.update=Lt.prototype.j;U.prototype.add=U.prototype.add;U.prototype.multiply=U.prototype.R;U.prototype.modulo=U.prototype.gb;U.prototype.compare=U.prototype.X;U.prototype.toNumber=U.prototype.ea;U.prototype.toString=U.prototype.toString;U.prototype.getBits=U.prototype.D;U.fromNumber=Ut;U.fromString=$h;var Y_=function(){return new Pi},X_=function(){return es()},$s=ns,J_=ih,Z_=Ye,jc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ty=Lr,ti=sh,ey=et,ny=Lt,mn=U;const zc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new ia("@firebase/firestore");function on(){return Ue.logLevel}function _(n,...t){if(Ue.logLevel<=F.DEBUG){const e=t.map(Pa);Ue.debug(`Firestore (${Dn}): ${n}`,...e)}}function It(n,...t){if(Ue.logLevel<=F.ERROR){const e=t.map(Pa);Ue.error(`Firestore (${Dn}): ${n}`,...e)}}function yr(n,...t){if(Ue.logLevel<=F.WARN){const e=t.map(Pa);Ue.warn(`Firestore (${Dn}): ${n}`,...e)}}function Pa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch(t){return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n="Unexpected state"){const t=`FIRESTORE (${Dn}) INTERNAL ASSERTION FAILED: `+n;throw It(t),new Error(t)}function R(n,t){n||A()}function V(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends we{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class iy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yt.UNAUTHENTICATED))}shutdown(){}}class sy{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let s=new fe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fe,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(()=>p(this,null,function*(){yield c.promise,yield i(this.currentUser)}))},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fe)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(R(typeof r.accessToken=="string"),new ry(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new yt(t)}}class oy{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ay{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new oy(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cy{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uy{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(R(typeof e.token=="string"),this.R=e.token,new cy(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=ly(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function D(n,t){return n<t?-1:n>t?1:0}function En(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}function Uh(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new w(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new w(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new w(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new tt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.timestamp=t}static fromTimestamp(t){return new b(t)}static min(){return new b(new tt(0,0))}static max(){return new b(new tt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,r){e===void 0?e=0:e>t.length&&A(),r===void 0?r=t.length-e:r>t.length-e&&A(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ir.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ir?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class q extends Ir{construct(t,e,r){return new q(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new w(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new q(e)}static emptyPath(){return new q([])}}const dy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends Ir{construct(t,e,r){return new Z(t,e,r)}static isValidIdentifier(t){return dy.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new w(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new w(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(e)}static emptyPath(){return new Z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(q.fromString(t))}static fromName(t){return new T(q.fromString(t).popFirst(5))}static empty(){return new T(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new q(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e,r,i){this.indexId=t,this.collectionGroup=e,this.fields=r,this.indexState=i}}function Ao(n){return n.fields.find(t=>t.kind===2)}function Ce(n){return n.fields.filter(t=>t.kind!==2)}Di.UNKNOWN_ID=-1;class ci{constructor(t,e){this.fieldPath=t,this.kind=e}}class Er{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Er(0,Pt.min())}}function fy(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=b.fromTimestamp(r===1e9?new tt(e+1,0):new tt(e,r));return new Pt(i,T.empty(),t)}function qh(n){return new Pt(n.readTime,n.key,-1)}class Pt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Pt(b.min(),T.empty(),-1)}static max(){return new Pt(b.max(),T.empty(),-1)}}function Ca(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=T.comparator(n.documentKey,t.documentKey),e!==0?e:D(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n){return p(this,null,function*(){if(n.code!==g.FAILED_PRECONDITION||n.message!==jh)throw n;_("LocalStore","Unexpectedly lost primary lease")})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof f?e:f.resolve(e)}catch(e){return f.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):f.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):f.reject(e)}static resolve(t){return new f((e,r)=>{e(t)})}static reject(t){return new f((e,r)=>{r(t)})}static waitFor(t){return new f((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},c=>r(c))}),o=!0,s===i&&e()})}static or(t){let e=f.resolve(!1);for(const r of t)e=e.next(i=>i?f.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new f((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;e(t[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,e){return new f((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new fe,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new Zn(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Va(r.target.error);this.V.reject(new Zn(t,i))}}static open(t,e,r,i){try{return new ls(e,t.transaction(i,r))}catch(s){throw new Zn(e,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(_("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new gy(e)}}class Qt{constructor(t,e,r){this.name=t,this.version=e,this.p=r,Qt.S(so())===12.2&&It("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return _("SimpleDb","Removing database:",t),Ve(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!ra())return!1;if(Qt.C())return!0;const t=so(),e=Qt.S(t),r=0<e&&e<10,i=Qt.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process!="undefined"&&((t=process.env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}O(t){return p(this,null,function*(){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=yield new Promise((e,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;e(o)},i.onblocked=()=>{r(new Zn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new w(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new w(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Zn(t,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db})}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}runTransaction(t,e,r,i){return p(this,null,function*(){const s=e==="readonly";let o=0;for(;;){++o;try{this.db=yield this.O(t);const a=ls.open(this.db,t,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),f.reject(u))).toPromise();return c.catch(()=>{}),yield a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}})}close(){this.db&&this.db.close(),this.db=void 0}}class my{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Ve(this.k.delete())}}class Zn extends w{constructor(t,e){super(g.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function be(n){return n.name==="IndexedDbTransactionError"}class gy{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(_("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Ve(r)}add(t){return _("SimpleDb","ADD",this.store.name,t,t),Ve(this.store.add(t))}get(t){return Ve(this.store.get(t)).next(e=>(e===void 0&&(e=null),_("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return _("SimpleDb","DELETE",this.store.name,t),Ve(this.store.delete(t))}count(){return _("SimpleDb","COUNT",this.store.name),Ve(this.store.count())}W(t,e){const r=this.options(t,e);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new f((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new f((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,e){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const i=this.cursor(r);return this.G(i,e)}Z(t){const e=this.cursor({});return new f((r,i)=>{e.onerror=s=>{const o=Va(s.target.error);i(o)},e.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new f((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new my(a),u=e(a.primaryKey,a.value,c);if(u instanceof f){const l=u.catch(h=>(c.done(),f.reject(h)));r.push(l)}c.isDone?i():c.$===null?a.continue():a.continue(c.$)}}).next(()=>f.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ve(n){return new f((t,e)=>{n.onsuccess=r=>{const i=r.target.result;t(i)},n.onerror=r=>{const i=Va(r.target.error);e(i)}})}let Gc=!1;function Va(n){const t=Qt.S(so());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new w("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Gc||(Gc=!0,setTimeout(()=>{throw r},0)),r}}return n}class py{constructor(t,e){this.asyncQueue=t,this.X=e,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(t){_("IndexBackiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,()=>p(this,null,function*(){this.task=null;try{_("IndexBackiller",`Documents written: ${yield this.X.te()}`)}catch(e){be(e)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):yield Xe(e)}yield this.ee(6e4)}))}}class _y{constructor(t,e){this.localStore=t,this.persistence=e}te(t=50){return p(this,null,function*(){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.ne(e,t))})}ne(t,e){const r=new Set;let i=e,s=!0;return f.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.re(t,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>e-i)}re(t,e,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(i=>this.localStore.localDocuments.getNextDocuments(t,e,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(t,o).next(()=>this.ie(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(t,e,a))).next(()=>o.size)}))}ie(t,e){let r=t;return e.changes.forEach((i,s)=>{const o=qh(s);Ca(o,r)>0&&(r=o)}),new Pt(r.readTime,r.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Dt._e=-1;function hs(n){return n==null}function Tr(n){return n===0&&1/n==-1/0}function yy(n){return typeof n=="number"&&Number.isInteger(n)&&!Tr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Kc(t)),t=Iy(n.get(e),t);return Kc(t)}function Iy(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":e+="";break;case"":e+="";break;default:e+=s}}return e}function Kc(n){return n+""}function qt(n){const t=n.length;if(R(t>=2),t===2)return R(n.charAt(0)===""&&n.charAt(1)===""),q.emptyPath();const e=t-2,r=[];let i="";for(let s=0;s<t;){const o=n.indexOf("",s);switch((o<0||o>e)&&A(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:A()}s=o+2}return new q(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n,t){return[n,Tt(t)]}function Gh(n,t,e){return[n,Tt(t),e]}const Ey={},Ty=["prefixPath","collectionGroup","readTime","documentId"],wy=["prefixPath","collectionGroup","documentId"],vy=["collectionGroup","readTime","prefixPath","documentId"],Ay=["canonicalId","targetId"],by=["targetId","path"],Ry=["path","targetId"],Sy=["collectionId","parent"],Py=["indexId","uid"],Cy=["uid","sequenceNumber"],Vy=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Dy=["indexId","uid","orderedDocumentKey"],xy=["userId","collectionPath","documentId"],Ny=["userId","collectionPath","largestBatchId"],ky=["userId","collectionGroup","largestBatchId"],Kh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Oy=[...Kh,"documentOverlays"],Wh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Hh=Wh,My=[...Hh,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends zh{constructor(t,e){super(),this.ae=t,this.currentSequenceNumber=e}}function at(n,t){const e=V(n);return Qt.M(e.ae,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function $r(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Qh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ei(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ei(this.root,t,this.comparator,!1)}getReverseIterator(){return new ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ei(this.root,t,this.comparator,!0)}}class ei{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r!=null?r:ut.RED,this.left=i!=null?i:ut.EMPTY,this.right=s!=null?s:ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new ut(t!=null?t:this.key,e!=null?e:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,r,i,s){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qc(this.data.getIterator())}getIteratorFrom(t){return new Qc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof j)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new j(this.comparator);return e.data=t,e}}class Qc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function en(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.fields=t,t.sort(Z.comparator)}static empty(){return new Yt([])}unionWith(t){let e=new j(Z.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Yt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return En(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new Yh("Invalid base64 string: "+s):s}}(t);return new dt(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Ly=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pe(n){if(R(!!n),typeof n=="string"){let t=0;const e=Ly.exec(n);if(R(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:X(n.seconds),nanos:X(n.nanos)}}function X(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _e(n){return typeof n=="string"?dt.fromBase64String(n):dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function xa(n){const t=n.mapValue.fields.__previous_value__;return Da(t)?xa(t):t}function wr(n){const t=pe(n.mapValue.fields.__local_write_time__.timestampValue);return new tt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(t,e,r,i,s,o,a,c,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class qe{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new qe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qe&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},li={nullValue:"NULL_VALUE"};function je(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Da(n)?4:Xh(n)?9007199254740991:10:A()}function Gt(n,t){if(n===t)return!0;const e=je(n);if(e!==je(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return wr(n).isEqual(wr(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=pe(i.timestampValue),a=pe(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return _e(i.bytesValue).isEqual(_e(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return X(i.geoPointValue.latitude)===X(s.geoPointValue.latitude)&&X(i.geoPointValue.longitude)===X(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return X(i.integerValue)===X(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=X(i.doubleValue),a=X(s.doubleValue);return o===a?Tr(o)===Tr(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return En(n.arrayValue.values||[],t.arrayValue.values||[],Gt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Hc(o)!==Hc(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Gt(o[c],a[c])))return!1;return!0}(n,t);default:return A()}}function vr(n,t){return(n.values||[]).find(e=>Gt(e,t))!==void 0}function ye(n,t){if(n===t)return 0;const e=je(n),r=je(t);if(e!==r)return D(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=X(s.integerValue||s.doubleValue),c=X(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return Yc(n.timestampValue,t.timestampValue);case 4:return Yc(wr(n),wr(t));case 5:return D(n.stringValue,t.stringValue);case 6:return function(s,o){const a=_e(s),c=_e(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=D(a[u],c[u]);if(l!==0)return l}return D(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=D(X(s.latitude),X(o.latitude));return a!==0?a:D(X(s.longitude),X(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=ye(a[u],c[u]);if(l)return l}return D(a.length,c.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===ue.mapValue&&o===ue.mapValue)return 0;if(s===ue.mapValue)return 1;if(o===ue.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=D(c[h],l[h]);if(d!==0)return d;const m=ye(a[c[h]],u[l[h]]);if(m!==0)return m}return D(c.length,l.length)}(n.mapValue,t.mapValue);default:throw A()}}function Yc(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return D(n,t);const e=pe(n),r=pe(t),i=D(e.seconds,r.seconds);return i!==0?i:D(e.nanos,r.nanos)}function Tn(n){return Ro(n)}function Ro(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=pe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return _e(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return T.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Ro(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ro(e.fields[o])}`;return i+"}"}(n.mapValue):A()}function Ar(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function So(n){return!!n&&"integerValue"in n}function br(n){return!!n&&"arrayValue"in n}function Xc(n){return!!n&&"nullValue"in n}function Jc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Us(n){return!!n&&"mapValue"in n}function tr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return $r(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=tr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=tr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Xh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function By(n){return"nullValue"in n?li:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ar(qe.empty(),T.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:A()}function $y(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ar(qe.empty(),T.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?ue:A()}function Zc(n,t){const e=ye(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?-1:!n.inclusive&&t.inclusive?1:0}function tu(n,t){const e=ye(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?1:!n.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Us(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=tr(e)}setAll(t){let e=Z.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=tr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());Us(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Gt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Us(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){$r(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Vt(tr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new J(t,0,b.min(),b.min(),b.min(),Vt.empty(),0)}static newFoundDocument(t,e,r,i){return new J(t,1,e,b.min(),r,i,0)}static newNoDocument(t,e){return new J(t,2,e,b.min(),b.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new J(t,3,e,b.min(),b.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof J&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new J(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,e){this.position=t,this.inclusive=e}}function eu(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),e.key):r=ye(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function nu(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Gt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Uy(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{}class M extends Jh{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new qy(t,e,r):e==="array-contains"?new Gy(t,r):e==="in"?new id(t,r):e==="not-in"?new Ky(t,r):e==="array-contains-any"?new Wy(t,r):new M(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new jy(t,r):new zy(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ye(e,this.value)):e!==null&&je(this.value)===je(e)&&this.matchesComparison(ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $ extends Jh{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new $(t,e)}matches(t){return vn(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function vn(n){return n.op==="and"}function Po(n){return n.op==="or"}function Na(n){return Zh(n)&&vn(n)}function Zh(n){for(const t of n.filters)if(t instanceof $)return!1;return!0}function Co(n){if(n instanceof M)return n.field.canonicalString()+n.op.toString()+Tn(n.value);if(Na(n))return n.filters.map(t=>Co(t)).join(",");{const t=n.filters.map(e=>Co(e)).join(",");return`${n.op}(${t})`}}function td(n,t){return n instanceof M?function(r,i){return i instanceof M&&r.op===i.op&&r.field.isEqual(i.field)&&Gt(r.value,i.value)}(n,t):n instanceof $?function(r,i){return i instanceof $&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&td(o,i.filters[a]),!0):!1}(n,t):void A()}function ed(n,t){const e=n.filters.concat(t);return $.create(e,n.op)}function nd(n){return n instanceof M?function(e){return`${e.field.canonicalString()} ${e.op} ${Tn(e.value)}`}(n):n instanceof $?function(e){return e.op.toString()+" {"+e.getFilters().map(nd).join(" ,")+"}"}(n):"Filter"}class qy extends M{constructor(t,e,r){super(t,e,r),this.key=T.fromName(r.referenceValue)}matches(t){const e=T.comparator(t.key,this.key);return this.matchesComparison(e)}}class jy extends M{constructor(t,e){super(t,"in",e),this.keys=rd("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class zy extends M{constructor(t,e){super(t,"not-in",e),this.keys=rd("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function rd(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>T.fromName(r.referenceValue))}class Gy extends M{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return br(e)&&vr(e.arrayValue,this.value)}}class id extends M{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&vr(this.value.arrayValue,e)}}class Ky extends M{constructor(t,e){super(t,"not-in",e)}matches(t){if(vr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!vr(this.value.arrayValue,e)}}class Wy extends M{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!br(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>vr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Vo(n,t=null,e=[],r=[],i=null,s=null,o=null){return new Hy(n,t,e,r,i,s,o)}function ze(n){const t=V(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Co(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),hs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Tn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Tn(r)).join(",")),t.ce=e}return t.ce}function Ur(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Uy(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!td(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!nu(n.startAt,t.startAt)&&nu(n.endAt,t.endAt)}function Ni(n){return T.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ki(n,t){return n.filters.filter(e=>e instanceof M&&e.field.isEqual(t))}function ru(n,t,e){let r=li,i=!0;for(const s of ki(n,t)){let o=li,a=!0;switch(s.op){case"<":case"<=":o=By(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=li}Zc({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(e!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(t)){const o=e.position[s];Zc({value:r,inclusive:i},{value:o,inclusive:e.inclusive})<0&&(r=o,i=e.inclusive);break}}return{value:r,inclusive:i}}function iu(n,t,e){let r=ue,i=!0;for(const s of ki(n,t)){let o=ue,a=!0;switch(s.op){case">=":case">":o=$y(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ue}tu({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(e!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(t)){const o=e.position[s];tu({value:r,inclusive:i},{value:o,inclusive:e.inclusive})>0&&(r=o,i=e.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Qy(n,t,e,r,i,s,o,a){return new qr(n,t,e,r,i,s,o,a)}function ka(n){return new qr(n)}function su(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sd(n){return n.collectionGroup!==null}function er(n){const t=V(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new j(Z.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new xi(s,r))}),e.has(Z.keyField().canonicalString())||t.le.push(new xi(Z.keyField(),r))}return t.le}function Nt(n){const t=V(n);return t.he||(t.he=Yy(t,er(n))),t.he}function Yy(n,t){if(n.limitType==="F")return Vo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new xi(i.field,s)});const e=n.endAt?new wn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new wn(n.startAt.position,n.startAt.inclusive):null;return Vo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Do(n,t){const e=n.filters.concat([t]);return new qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function xo(n,t,e){return new qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ds(n,t){return Ur(Nt(n),Nt(t))&&n.limitType===t.limitType}function od(n){return`${ze(Nt(n))}|lt:${n.limitType}`}function an(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>nd(i)).join(", ")}]`),hs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Tn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Tn(i)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function jr(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):T.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of er(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=eu(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,er(r),i)||r.endAt&&!function(o,a,c){const u=eu(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,er(r),i))}(n,t)}function Xy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ad(n){return(t,e)=>{let r=!1;for(const i of er(n)){const s=Jy(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Jy(n,t,e){const r=n.field.isKeyField()?T.comparator(t.key,e.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?ye(c,u):A()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){$r(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Qh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new Y(T.comparator);function xt(){return Zy}const cd=new Y(T.comparator);function Wn(...n){let t=cd;for(const e of n)t=t.insert(e.key,e);return t}function tI(n){let t=cd;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function jt(){return nr()}function ud(){return nr()}function nr(){return new Re(n=>n.toString(),(n,t)=>n.isEqual(t))}const eI=new Y(T.comparator),nI=new j(T.comparator);function N(...n){let t=nI;for(const e of n)t=t.add(e);return t}const rI=new j(D);function iI(){return rI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tr(t)?"-0":t}}function hd(n){return{integerValue:""+n}}function sI(n,t){return yy(t)?hd(t):ld(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this._=void 0}}function oI(n,t,e){return n instanceof Rr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Da(s)&&(s=xa(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof An?dd(n,t):n instanceof bn?fd(n,t):function(i,s){const o=cI(i,s),a=ou(o)+ou(i.Ie);return So(o)&&So(i.Ie)?hd(a):ld(i.serializer,a)}(n,t)}function aI(n,t,e){return n instanceof An?dd(n,t):n instanceof bn?fd(n,t):e}function cI(n,t){return n instanceof Sr?function(r){return So(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Rr extends fs{}class An extends fs{constructor(t){super(),this.elements=t}}function dd(n,t){const e=md(t);for(const r of n.elements)e.some(i=>Gt(i,r))||e.push(r);return{arrayValue:{values:e}}}class bn extends fs{constructor(t){super(),this.elements=t}}function fd(n,t){let e=md(t);for(const r of n.elements)e=e.filter(i=>!Gt(i,r));return{arrayValue:{values:e}}}class Sr extends fs{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function ou(n){return X(n.integerValue||n.doubleValue)}function md(n){return br(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(t,e){this.field=t,this.transform=e}}function lI(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof An&&i instanceof An||r instanceof bn&&i instanceof bn?En(r.elements,i.elements,Gt):r instanceof Sr&&i instanceof Sr?Gt(r.Ie,i.Ie):r instanceof Rr&&i instanceof Rr}(n.transform,t.transform)}class hI{constructor(t,e){this.version=t,this.transformResults=e}}class kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function hi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ms{}function gd(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Oa(n.key,kt.none()):new zr(n.key,n.data,kt.none());{const e=n.data,r=Vt.empty();let i=new j(Z.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xn(n.key,r,new Yt(i.toArray()),kt.none())}}function dI(n,t,e){n instanceof zr?function(i,s,o){const a=i.value.clone(),c=cu(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof xn?function(i,s,o){if(!hi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=cu(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(pd(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function rr(n,t,e,r){return n instanceof zr?function(s,o,a,c){if(!hi(s.precondition,o))return a;const u=s.value.clone(),l=uu(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,r):n instanceof xn?function(s,o,a,c){if(!hi(s.precondition,o))return a;const u=uu(s.fieldTransforms,c,o),l=o.data;return l.setAll(pd(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return hi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function au(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&En(r,i,(s,o)=>lI(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class zr extends ms{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xn extends ms{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function pd(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function cu(n,t,e){const r=new Map;R(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,aI(o,a,e[i]))}return r}function uu(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,oI(s,o,t))}return r}class Oa extends ms{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _d extends ms{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&dI(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=rr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=rr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ud();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const c=gd(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),N())}isEqual(t){return this.batchId===t.batchId&&En(this.mutations,t.mutations,(e,r)=>au(e,r))&&En(this.baseMutations,t.baseMutations,(e,r)=>au(e,r))}}class La{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){R(t.mutations.length===r.length);let i=function(){return eI}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new La(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,L;function mI(n){switch(n){default:return A();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function yd(n){if(n===void 0)return It("GRPC error has no .code"),g.UNKNOWN;switch(n){case nt.OK:return g.OK;case nt.CANCELLED:return g.CANCELLED;case nt.UNKNOWN:return g.UNKNOWN;case nt.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case nt.INTERNAL:return g.INTERNAL;case nt.UNAVAILABLE:return g.UNAVAILABLE;case nt.UNAUTHENTICATED:return g.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case nt.NOT_FOUND:return g.NOT_FOUND;case nt.ALREADY_EXISTS:return g.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return g.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case nt.ABORTED:return g.ABORTED;case nt.OUT_OF_RANGE:return g.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return g.UNIMPLEMENTED;case nt.DATA_LOSS:return g.DATA_LOSS;default:return A()}}(L=nt||(nt={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=new mn([4294967295,4294967295],0);function lu(n){const t=gI().encode(n),e=new ny;return e.update(t),new Uint8Array(e.digest())}function hu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new mn([e,r],0),new mn([i,s],0)]}class Ba{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Hn(`Invalid padding: ${e}`);if(r<0)throw new Hn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Hn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Hn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=mn.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(mn.fromNumber(r)));return i.compare(pI)===1&&(i=new mn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=lu(t),[r,i]=hu(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Ba(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=lu(t),[r,i]=hu(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Gr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new gs(b.min(),i,new Y(D),xt(),N())}}class Gr{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Gr(r,e,N(),N(),N())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class Id{constructor(t,e){this.targetId=t,this.fe=e}}class Ed{constructor(t,e,r=dt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class du{constructor(){this.ge=0,this.pe=mu(),this.ye=dt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=N(),e=N(),r=N();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:A()}}),new Gr(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=mu()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class _I{constructor(t){this.Le=t,this.ke=new Map,this.qe=xt(),this.Qe=fu(),this.Ke=new Y(D)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:A()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if(Ni(s))if(r===0){const o=new T(s.path);this.We(e,o,J.newNoDocument(o,b.min()))}else R(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(e);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,u)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=_e(r).toUint8Array()}catch(c){if(c instanceof Yh)return yr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ba(o,i,s)}catch(c){return yr(c instanceof Hn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Ni(a.target)){const c=new T(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,J.newNoDocument(c,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=N();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new gs(t,e,this.Ke,this.qe,r);return this.qe=xt(),this.Qe=fu(),this.Ke=new Y(D),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new du,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new j(D),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||_("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new du),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function fu(){return new Y(T.comparator)}function mu(){return new Y(T.comparator)}const yI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),II=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),EI=(()=>({and:"AND",or:"OR"}))();class TI{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function No(n,t){return n.useProto3Json||hs(t)?t:{value:t}}function Rn(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Td(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function wI(n,t){return Rn(n,t.toTimestamp())}function wt(n){return R(!!n),b.fromTimestamp(function(e){const r=pe(e);return new tt(r.seconds,r.nanos)}(n))}function $a(n,t){return function(r){return new q(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function wd(n){const t=q.fromString(n);return R(Vd(t)),t}function Oi(n,t){return $a(n.databaseId,t.path)}function Be(n,t){const e=wd(t);if(e.get(1)!==n.databaseId.projectId)throw new w(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new w(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new T(Ad(e))}function ko(n,t){return $a(n.databaseId,t)}function vd(n){const t=wd(n);return t.length===4?q.emptyPath():Ad(t)}function Oo(n){return new q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ad(n){return R(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function gu(n,t,e){return{name:Oi(n,t),fields:e.value.mapValue.fields}}function vI(n,t,e){const r=Be(n,t.name),i=wt(t.updateTime),s=t.createTime?wt(t.createTime):b.min(),o=new Vt({mapValue:{fields:t.fields}}),a=J.newFoundDocument(r,i,s,o);return e&&a.setHasCommittedMutations(),e?a.setHasCommittedMutations():a}function AI(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(R(l===void 0||typeof l=="string"),dt.fromBase64String(l||"")):(R(l===void 0||l instanceof Uint8Array),dt.fromUint8Array(l||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?g.UNKNOWN:yd(u.code);return new w(l,u.message||"")}(o);e=new Ed(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Be(n,r.document.name),s=wt(r.document.updateTime),o=r.document.createTime?wt(r.document.createTime):b.min(),a=new Vt({mapValue:{fields:r.document.fields}}),c=J.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];e=new di(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Be(n,r.document),s=r.readTime?wt(r.readTime):b.min(),o=J.newNoDocument(i,s),a=r.removedTargetIds||[];e=new di([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Be(n,r.document),s=r.removedTargetIds||[];e=new di([],s,i,null)}else{if(!("filter"in t))return A();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new fI(i,s),a=r.targetId;e=new Id(a,o)}}return e}function Mi(n,t){let e;if(t instanceof zr)e={update:gu(n,t.key,t.value)};else if(t instanceof Oa)e={delete:Oi(n,t.key)};else if(t instanceof xn)e={update:gu(n,t.key,t.data),updateMask:VI(t.fieldMask)};else{if(!(t instanceof _d))return A();e={verify:Oi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Rr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof An)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof bn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Sr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw A()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:wI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(n,t.precondition)),e}function Mo(n,t){const e=t.currentDocument?function(s){return s.updateTime!==void 0?kt.updateTime(wt(s.updateTime)):s.exists!==void 0?kt.exists(s.exists):kt.none()}(t.currentDocument):kt.none(),r=t.updateTransforms?t.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)R(a.setToServerValue==="REQUEST_TIME"),c=new Rr;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new An(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new bn(l)}else"increment"in a?c=new Sr(o,a.increment):A();const u=Z.fromServerFormat(a.fieldPath);return new uI(u,c)}(n,i)):[];if(t.update){t.update.name;const i=Be(n,t.update.name),s=new Vt({mapValue:{fields:t.update.fields}});if(t.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Yt(u.map(l=>Z.fromServerFormat(l)))}(t.updateMask);return new xn(i,s,o,e,r)}return new zr(i,s,e,r)}if(t.delete){const i=Be(n,t.delete);return new Oa(i,e)}if(t.verify){const i=Be(n,t.verify);return new _d(i,e)}return A()}function bI(n,t){return n&&n.length>0?(R(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?wt(i.updateTime):wt(s);return o.isEqual(b.min())&&(o=wt(s)),new hI(o,i.transformResults||[])}(e,t))):[]}function bd(n,t){return{documents:[ko(n,t.path)]}}function Rd(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=ko(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=ko(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Cd($.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:cn(h.field),direction:SI(h.dir)}}(u))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=No(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),e}function Sd(n){let t=vd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){R(r===1);const l=e.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];e.where&&(s=function(h){const d=Pd(h);return d instanceof $&&Na(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(I){return new xi(un(I.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,hs(d)?null:d}(e.limit));let c=null;e.startAt&&(c=function(h){const d=!!h.before,m=h.values||[];return new wn(m,d)}(e.startAt));let u=null;return e.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new wn(m,d)}(e.endAt)),Qy(t,i,o,s,a,"F",c,u)}function RI(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Pd(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=un(e.unaryFilter.field);return M.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=un(e.unaryFilter.field);return M.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=un(e.unaryFilter.field);return M.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=un(e.unaryFilter.field);return M.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(e){return M.create(un(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return $.create(e.compositeFilter.filters.map(r=>Pd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(e.compositeFilter.op))}(n):A()}function SI(n){return yI[n]}function PI(n){return II[n]}function CI(n){return EI[n]}function cn(n){return{fieldPath:n.canonicalString()}}function un(n){return Z.fromServerFormat(n.fieldPath)}function Cd(n){return n instanceof M?function(e){if(e.op==="=="){if(Jc(e.value))return{unaryFilter:{field:cn(e.field),op:"IS_NAN"}};if(Xc(e.value))return{unaryFilter:{field:cn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jc(e.value))return{unaryFilter:{field:cn(e.field),op:"IS_NOT_NAN"}};if(Xc(e.value))return{unaryFilter:{field:cn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cn(e.field),op:PI(e.op),value:e.value}}}(n):n instanceof $?function(e){const r=e.getFilters().map(i=>Cd(i));return r.length===1?r[0]:{compositeFilter:{op:CI(e.op),filters:r}}}(n):A()}function VI(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Vd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,e,r,i,s=b.min(),o=b.min(),a=dt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Xt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t){this.ut=t}}function DI(n,t){let e;if(t.document)e=vI(n.ut,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const r=T.fromSegments(t.noDocument.path),i=Ke(t.noDocument.readTime);e=J.newNoDocument(r,i),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return A();{const r=T.fromSegments(t.unknownDocument.path),i=Ke(t.unknownDocument.version);e=J.newUnknownDocument(r,i)}}return t.readTime&&e.setReadTime(function(i){const s=new tt(i[0],i[1]);return b.fromTimestamp(s)}(t.readTime)),e}function pu(n,t){const e=t.key,r={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Li(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(s,o){return{name:Oi(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Rn(s,o.version.toTimestamp()),createTime:Rn(s,o.createTime.toTimestamp())}}(n.ut,t);else if(t.isNoDocument())r.noDocument={path:e.path.toArray(),readTime:Ge(t.version)};else{if(!t.isUnknownDocument())return A();r.unknownDocument={path:e.path.toArray(),version:Ge(t.version)}}return r}function Li(n){const t=n.toTimestamp();return[t.seconds,t.nanoseconds]}function Ge(n){const t=n.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Ke(n){const t=new tt(n.seconds,n.nanoseconds);return b.fromTimestamp(t)}function De(n,t){const e=(t.baseMutations||[]).map(s=>Mo(n.ut,s));for(let s=0;s<t.mutations.length-1;++s){const o=t.mutations[s];if(s+1<t.mutations.length&&t.mutations[s+1].transform!==void 0){const a=t.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(s=>Mo(n.ut,s)),i=tt.fromMillis(t.localWriteTimeMs);return new Ma(t.batchId,i,e,r)}function Qn(n){const t=Ke(n.readTime),e=n.lastLimboFreeSnapshotVersion!==void 0?Ke(n.lastLimboFreeSnapshotVersion):b.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return R(s.documents.length===1),Nt(ka(vd(s.documents[0])))}(n.query):function(s){return Nt(Sd(s))}(n.query),new Xt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,t,e,dt.fromBase64String(n.resumeToken))}function xd(n,t){const e=Ge(t.snapshotVersion),r=Ge(t.lastLimboFreeSnapshotVersion);let i;i=Ni(t.target)?bd(n.ut,t.target):Rd(n.ut,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:ze(t.target),readTime:e,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Nd(n){const t=Sd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xo(t,t.limit,"L"):t}function qs(n,t){return new Fa(t.largestBatchId,Mo(n.ut,t.overlayMutation))}function _u(n,t){const e=t.path.lastSegment();return[n,Tt(t.path.popLast()),e]}function yu(n,t,e,r){return{indexId:n,uid:t.uid||"",sequenceNumber:e,readTime:Ge(r.readTime),documentKey:Tt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{getBundleMetadata(t,e){return Iu(t).get(e).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ke(s.createTime),version:s.version}}(r)})}saveBundleMetadata(t,e){return Iu(t).put(function(i){return{bundleId:i.id,createTime:Ge(wt(i.createTime)),version:i.version}}(e))}getNamedQuery(t,e){return Eu(t).get(e).next(r=>{if(r)return function(s){return{name:s.name,query:Nd(s.bundledQuery),readTime:Ke(s.readTime)}}(r)})}saveNamedQuery(t,e){return Eu(t).put(function(i){return{name:i.name,readTime:Ge(wt(i.readTime)),bundledQuery:i.bundledQuery}}(e))}}function Iu(n){return at(n,"bundles")}function Eu(n){return at(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,e){this.serializer=t,this.userId=e}static ct(t,e){const r=e.uid||"";return new ps(t,r)}getOverlay(t,e){return Bn(t).get(_u(this.userId,e)).next(r=>r?qs(this.serializer,r):null)}getOverlays(t,e){const r=jt();return f.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){const i=[];return r.forEach((s,o)=>{const a=new Fa(e,o);i.push(this.lt(t,a))}),f.waitFor(i)}removeOverlaysForBatchId(t,e,r){const i=new Set;e.forEach(o=>i.add(Tt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Bn(t).H("collectionPathOverlayIndex",a))}),f.waitFor(s)}getOverlaysForCollection(t,e,r){const i=jt(),s=Tt(e),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Bn(t).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=qs(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(t,e,r,i){const s=jt();let o;const a=IDBKeyRange.bound([this.userId,e,r],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Bn(t).Y({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=qs(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}lt(t,e){return Bn(t).put(function(i,s,o){const[a,c,u]=_u(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Mi(i.ut,o.mutation)}}(this.serializer,this.userId,e))}}function Bn(n){return at(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(){}ht(t,e){this.Pt(t,e),e.It()}Pt(t,e){if("nullValue"in t)this.Tt(e,5);else if("booleanValue"in t)this.Tt(e,10),e.Et(t.booleanValue?1:0);else if("integerValue"in t)this.Tt(e,15),e.Et(X(t.integerValue));else if("doubleValue"in t){const r=X(t.doubleValue);isNaN(r)?this.Tt(e,13):(this.Tt(e,15),Tr(r)?e.Et(0):e.Et(r))}else if("timestampValue"in t){const r=t.timestampValue;this.Tt(e,20),typeof r=="string"?e.dt(r):(e.dt(`${r.seconds||""}`),e.Et(r.nanos||0))}else if("stringValue"in t)this.At(t.stringValue,e),this.Rt(e);else if("bytesValue"in t)this.Tt(e,30),e.Vt(_e(t.bytesValue)),this.Rt(e);else if("referenceValue"in t)this.ft(t.referenceValue,e);else if("geoPointValue"in t){const r=t.geoPointValue;this.Tt(e,45),e.Et(r.latitude||0),e.Et(r.longitude||0)}else"mapValue"in t?Xh(t)?this.Tt(e,Number.MAX_SAFE_INTEGER):(this.gt(t.mapValue,e),this.Rt(e)):"arrayValue"in t?(this.yt(t.arrayValue,e),this.Rt(e)):A()}At(t,e){this.Tt(e,25),this.wt(t,e)}wt(t,e){e.dt(t)}gt(t,e){const r=t.fields||{};this.Tt(e,55);for(const i of Object.keys(r))this.At(i,e),this.Pt(r[i],e)}yt(t,e){const r=t.values||[];this.Tt(e,50);for(const i of r)this.Pt(i,e)}ft(t,e){this.Tt(e,37),T.fromName(t).path.forEach(r=>{this.Tt(e,60),this.wt(r,e)})}Tt(t,e){t.Et(e)}Rt(t){t.Et(2)}}xe.St=new xe;function NI(n){if(n===0)return 8;let t=0;return!(n>>4)&&(t+=4,n<<=4),!(n>>6)&&(t+=2,n<<=2),!(n>>7)&&(t+=1),t}function Tu(n){const t=64-function(r){let i=0;for(let s=0;s<8;++s){const o=NI(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(t/8)}class kI{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(t){const e=t[Symbol.iterator]();let r=e.next();for(;!r.done;)this.Dt(r.value),r=e.next();this.Ct()}vt(t){const e=t[Symbol.iterator]();let r=e.next();for(;!r.done;)this.Ft(r.value),r=e.next();this.Mt()}xt(t){for(const e of t){const r=e.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(e<"\uD800"||"\uDBFF"<e)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=e.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(t){for(const e of t){const r=e.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(e<"\uD800"||"\uDBFF"<e)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=e.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(t){const e=this.Bt(t),r=Tu(e);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=e.length-r;i<e.length;++i)this.buffer[this.position++]=255&e[i]}kt(t){const e=this.Bt(t),r=Tu(e);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=e.length-r;i<e.length;++i)this.buffer[this.position++]=~(255&e[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(t){this.Lt(t.length),this.buffer.set(t,this.position),this.position+=t.length}Ut(){return this.buffer.slice(0,this.position)}Bt(t){const e=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(t),r=(128&e[0])!=0;e[0]^=r?255:128;for(let i=1;i<e.length;++i)e[i]^=r?255:0;return e}Dt(t){const e=255&t;e===0?(this.Qt(0),this.Qt(255)):e===255?(this.Qt(255),this.Qt(0)):this.Qt(e)}Ft(t){const e=255&t;e===0?(this.$t(0),this.$t(255)):e===255?(this.$t(255),this.$t(0)):this.$t(t)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(t){this.Lt(1),this.buffer[this.position++]=t}$t(t){this.Lt(1),this.buffer[this.position++]=~t}Lt(t){const e=t+this.position;if(e<=this.buffer.length)return;let r=2*this.buffer.length;r<e&&(r=e);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class OI{constructor(t){this.Wt=t}Vt(t){this.Wt.bt(t)}dt(t){this.Wt.xt(t)}Et(t){this.Wt.Nt(t)}It(){this.Wt.qt()}}class MI{constructor(t){this.Wt=t}Vt(t){this.Wt.vt(t)}dt(t){this.Wt.Ot(t)}Et(t){this.Wt.kt(t)}It(){this.Wt.Kt()}}class $n{constructor(){this.Wt=new kI,this.Gt=new OI(this.Wt),this.zt=new MI(this.Wt)}seed(t){this.Wt.seed(t)}jt(t){return t===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,e,r,i){this.indexId=t,this.documentKey=e,this.arrayValue=r,this.directionalValue=i}Ht(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,r=new Uint8Array(e);return r.set(this.directionalValue,0),e!==t?r.set([0],this.directionalValue.length):++r[r.length-1],new Ne(this.indexId,this.documentKey,this.arrayValue,r)}}function oe(n,t){let e=n.indexId-t.indexId;return e!==0?e:(e=wu(n.arrayValue,t.arrayValue),e!==0?e:(e=wu(n.directionalValue,t.directionalValue),e!==0?e:T.comparator(n.documentKey,t.documentKey)))}function wu(n,t){for(let e=0;e<n.length&&e<t.length;++e){const r=n[e]-t[e];if(r!==0)return r}return n.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t){this.Jt=new j((e,r)=>Z.comparator(e.field,r.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.Yt=t.orderBy,this.Zt=[];for(const e of t.filters){const r=e;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(t){if(R(t.collectionGroup===this.collectionId),this.Xt)return!1;const e=Ao(t);if(e!==void 0&&!this.tn(e))return!1;const r=Ce(t);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const c=r[s];if(!this.nn(a,c)||!this.rn(this.Yt[o++],c))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let t=new j(Z.comparator);const e=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")e.push(new ci(r.field,2));else{if(t.has(r.field))continue;t=t.add(r.field),e.push(new ci(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||t.has(r.field)||(t=t.add(r.field),e.push(new ci(r.field,r.dir==="asc"?0:1)));return new Di(Di.UNKNOWN_ID,this.collectionId,e,Er.empty())}tn(t){for(const e of this.Zt)if(this.nn(e,t))return!0;return!1}nn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const r=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===r}rn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n){var t,e;if(R(n instanceof M||n instanceof $),n instanceof M){if(n instanceof id){const i=((e=(t=n.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(s=>M.create(n.field,"==",s)))||[];return $.create(i,"or")}return n}const r=n.filters.map(i=>kd(i));return $.create(r,n.op)}function LI(n){if(n.getFilters().length===0)return[];const t=Bo(kd(n));return R(Od(t)),Lo(t)||Fo(t)?[t]:t.getFilters()}function Lo(n){return n instanceof M}function Fo(n){return n instanceof $&&Na(n)}function Od(n){return Lo(n)||Fo(n)||function(e){if(e instanceof $&&Po(e)){for(const r of e.getFilters())if(!Lo(r)&&!Fo(r))return!1;return!0}return!1}(n)}function Bo(n){if(R(n instanceof M||n instanceof $),n instanceof M)return n;if(n.filters.length===1)return Bo(n.filters[0]);const t=n.filters.map(r=>Bo(r));let e=$.create(t,n.op);return e=Fi(e),Od(e)?e:(R(e instanceof $),R(vn(e)),R(e.filters.length>1),e.filters.reduce((r,i)=>Ua(r,i)))}function Ua(n,t){let e;return R(n instanceof M||n instanceof $),R(t instanceof M||t instanceof $),e=n instanceof M?t instanceof M?function(i,s){return $.create([i,s],"and")}(n,t):Au(n,t):t instanceof M?Au(t,n):function(i,s){if(R(i.filters.length>0&&s.filters.length>0),vn(i)&&vn(s))return ed(i,s.getFilters());const o=Po(i)?i:s,a=Po(i)?s:i,c=o.filters.map(u=>Ua(u,a));return $.create(c,"or")}(n,t),Fi(e)}function Au(n,t){if(vn(t))return ed(t,n.getFilters());{const e=t.filters.map(r=>Ua(n,r));return $.create(e,"or")}}function Fi(n){if(R(n instanceof M||n instanceof $),n instanceof M)return n;const t=n.getFilters();if(t.length===1)return Fi(t[0]);if(Zh(n))return n;const e=t.map(i=>Fi(i)),r=[];return e.forEach(i=>{i instanceof M?r.push(i):i instanceof $&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:$.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.on=new qa}addToCollectionParentIndex(t,e){return this.on.add(e),f.resolve()}getCollectionParents(t,e){return f.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return f.resolve()}deleteFieldIndex(t,e){return f.resolve()}deleteAllFieldIndexes(t){return f.resolve()}createTargetIndexes(t,e){return f.resolve()}getDocumentsMatchingTarget(t,e){return f.resolve(null)}getIndexType(t,e){return f.resolve(0)}getFieldIndexes(t,e){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,e){return f.resolve(Pt.min())}getMinOffsetFromCollectionGroup(t,e){return f.resolve(Pt.min())}updateCollectionGroup(t,e,r){return f.resolve()}updateIndexEntries(t,e){return f.resolve()}}class qa{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new j(q.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new j(q.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Uint8Array(0);class BI{constructor(t,e){this.user=t,this.databaseId=e,this._n=new qa,this.an=new Re(r=>ze(r),(r,i)=>Ur(r,i)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this._n.has(e)){const r=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(()=>{this._n.add(e)});const s={collectionId:r,parent:Tt(i)};return bu(t).put(s)}return f.resolve()}getCollectionParents(t,e){const r=[],i=IDBKeyRange.bound([e,""],[Uh(e),""],!1,!0);return bu(t).W(i).next(s=>{for(const o of s){if(o.collectionId!==e)break;r.push(qt(o.parent))}return r})}addFieldIndex(t,e){const r=Un(t),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(e);delete i.indexId;const s=r.add(i);if(e.indexState){const o=rn(t);return s.next(a=>{o.put(yu(a,this.user,e.indexState.sequenceNumber,e.indexState.offset))})}return s.next()}deleteFieldIndex(t,e){const r=Un(t),i=rn(t),s=nn(t);return r.delete(e.indexId).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=Un(t),r=nn(t),i=rn(t);return e.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(t,e){return f.forEach(this.un(e),r=>this.getIndexType(t,r).next(i=>{if(i===0||i===1){const s=new vu(r).sn();if(s!=null)return this.addFieldIndex(t,s)}}))}getDocumentsMatchingTarget(t,e){const r=nn(t);let i=!0;const s=new Map;return f.forEach(this.un(e),o=>this.cn(t,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=N();const a=[];return f.forEach(s,(c,u)=>{_("IndexedDbIndexManager",`Using index ${function(S){return`id=${S.indexId}|cg=${S.collectionGroup}|f=${S.fields.map(x=>`${x.fieldPath}:${x.kind}`).join(",")}`}(c)} to execute ${ze(e)}`);const l=function(S,x){const O=Ao(x);if(O===void 0)return null;for(const K of ki(S,O.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(u,c),h=function(S,x){const O=new Map;for(const K of Ce(x))for(const ct of ki(S,K.fieldPath))switch(ct.op){case"==":case"in":O.set(K.fieldPath.canonicalString(),ct.value);break;case"not-in":case"!=":return O.set(K.fieldPath.canonicalString(),ct.value),Array.from(O.values())}return null}(u,c),d=function(S,x){const O=[];let K=!0;for(const ct of Ce(x)){const re=ct.kind===0?ru(S,ct.fieldPath,S.startAt):iu(S,ct.fieldPath,S.startAt);O.push(re.value),K&&(K=re.inclusive)}return new wn(O,K)}(u,c),m=function(S,x){const O=[];let K=!0;for(const ct of Ce(x)){const re=ct.kind===0?iu(S,ct.fieldPath,S.endAt):ru(S,ct.fieldPath,S.endAt);O.push(re.value),K&&(K=re.inclusive)}return new wn(O,K)}(u,c),I=this.ln(c,u,d),y=this.ln(c,u,m),v=this.hn(c,u,h),k=this.Pn(c.indexId,l,I,d.inclusive,y,m.inclusive,v);return f.forEach(k,C=>r.j(C,e.limit).next(S=>{S.forEach(x=>{const O=T.fromSegments(x.documentKey);o.has(O)||(o=o.add(O),a.push(O))})}))}).next(()=>a)}return f.resolve(null)})}un(t){let e=this.an.get(t);return e||(t.filters.length===0?e=[t]:e=LI($.create(t.filters,"and")).map(r=>Vo(t.path,t.collectionGroup,t.orderBy,r.getFilters(),t.limit,t.startAt,t.endAt)),this.an.set(t,e),e)}Pn(t,e,r,i,s,o,a){const c=(e!=null?e.length:1)*Math.max(r.length,s.length),u=c/(e!=null?e.length:1),l=[];for(let h=0;h<c;++h){const d=e?this.In(e[h/u]):ni,m=this.Tn(t,d,r[h%u],i),I=this.En(t,d,s[h%u],o),y=a.map(v=>this.Tn(t,d,v,!0));l.push(...this.createRange(m,I,y))}return l}Tn(t,e,r,i){const s=new Ne(t,T.empty(),e,r);return i?s:s.Ht()}En(t,e,r,i){const s=new Ne(t,T.empty(),e,r);return i?s.Ht():s}cn(t,e){const r=new vu(e),i=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(t,e){let r=2;const i=this.un(e);return f.forEach(i,s=>this.cn(t,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new j(Z.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(e)&&i.length>1&&r===2?1:r)}dn(t,e){const r=new $n;for(const i of Ce(t)){const s=e.data.field(i.fieldPath);if(s==null)return null;const o=r.jt(i.kind);xe.St.ht(s,o)}return r.Ut()}In(t){const e=new $n;return xe.St.ht(t,e.jt(0)),e.Ut()}An(t,e){const r=new $n;return xe.St.ht(Ar(this.databaseId,e),r.jt(function(s){const o=Ce(s);return o.length===0?0:o[o.length-1].kind}(t))),r.Ut()}hn(t,e,r){if(r===null)return[];let i=[];i.push(new $n);let s=0;for(const o of Ce(t)){const a=r[s++];for(const c of i)if(this.Rn(e,o.fieldPath)&&br(a))i=this.Vn(i,o,a);else{const u=c.jt(o.kind);xe.St.ht(a,u)}}return this.mn(i)}ln(t,e,r){return this.hn(t,e,r.position)}mn(t){const e=[];for(let r=0;r<t.length;++r)e[r]=t[r].Ut();return e}Vn(t,e,r){const i=[...t],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new $n;c.seed(a.Ut()),xe.St.ht(o,c.jt(e.kind)),s.push(c)}return s}Rn(t,e){return!!t.filters.find(r=>r instanceof M&&r.field.isEqual(e)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(t,e){const r=Un(t),i=rn(t);return(e?r.W("collectionGroupIndex",IDBKeyRange.bound(e,e)):r.W()).next(s=>{const o=[];return f.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new Er(h.sequenceNumber,new Pt(Ke(h.readTime),new T(qt(h.documentKey)),h.largestBatchId)):Er.empty(),m=l.fields.map(([I,y])=>new ci(Z.fromServerFormat(I),y));return new Di(l.indexId,l.collectionGroup,m,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:D(r.collectionGroup,i.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,r){const i=Un(t),s=rn(t);return this.fn(t).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(a=>f.forEach(a,c=>s.put(yu(c.indexId,this.user,o,r)))))}updateIndexEntries(t,e){const r=new Map;return f.forEach(e,(i,s)=>{const o=r.get(i.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(t,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),f.forEach(a,c=>this.gn(t,i,c).next(u=>{const l=this.pn(s,c);return u.isEqual(l)?f.resolve():this.yn(t,s,c,u,l)}))))})}wn(t,e,r,i){return nn(t).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,e.key),documentKey:e.key.path.toArray()})}Sn(t,e,r,i){return nn(t).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,e.key),e.key.path.toArray()])}gn(t,e,r){const i=nn(t);let s=new j(oe);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,e)])},(o,a)=>{s=s.add(new Ne(r.indexId,e,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(t,e){let r=new j(oe);const i=this.dn(e,t);if(i==null)return r;const s=Ao(e);if(s!=null){const o=t.data.field(s.fieldPath);if(br(o))for(const a of o.arrayValue.values||[])r=r.add(new Ne(e.indexId,t.key,this.In(a),i))}else r=r.add(new Ne(e.indexId,t.key,ni,i));return r}yn(t,e,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const o=[];return function(c,u,l,h,d){const m=c.getIterator(),I=u.getIterator();let y=en(m),v=en(I);for(;y||v;){let k=!1,C=!1;if(y&&v){const S=l(y,v);S<0?C=!0:S>0&&(k=!0)}else y!=null?C=!0:k=!0;k?(h(v),v=en(I)):C?(d(y),y=en(m)):(y=en(m),v=en(I))}}(i,s,oe,a=>{o.push(this.wn(t,e,r,a))},a=>{o.push(this.Sn(t,e,r,a))}),f.waitFor(o)}fn(t){let e=1;return rn(t).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),e=i.sequenceNumber+1}).next(()=>e)}createRange(t,e,r){r=r.sort((o,a)=>oe(o,a)).filter((o,a,c)=>!a||oe(o,c[a-1])!==0);const i=[];i.push(t);for(const o of r){const a=oe(o,t),c=oe(o,e);if(a===0)i[0]=t.Ht();else if(a>0&&c<0)i.push(o),i.push(o.Ht());else if(c>0)break}i.push(e);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ni,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ni,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(t,e){return oe(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Ru)}getMinOffset(t,e){return f.mapArray(this.un(e),r=>this.cn(t,r).next(i=>i||A())).next(Ru)}}function bu(n){return at(n,"collectionParents")}function nn(n){return at(n,"indexEntries")}function Un(n){return at(n,"indexConfiguration")}function rn(n){return at(n,"indexState")}function Ru(n){R(n.length!==0);let t=n[0].indexState.offset,e=t.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Ca(i,t)<0&&(t=i),e<i.largestBatchId&&(e=i.largestBatchId)}return new Pt(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class At{constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}static withCacheSize(t){return new At(t,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n,t,e){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(e.batchId);let a=0;const c=r.Y({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{R(a===1)}));const u=[];for(const l of e.mutations){const h=Gh(t,l.key.path,e.batchId);s.push(i.delete(h)),u.push(l.key)}return f.waitFor(s).next(()=>u)}function Bi(n){if(!n)return 0;let t;if(n.document)t=n.document;else if(n.unknownDocument)t=n.unknownDocument;else{if(!n.noDocument)throw A();t=n.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(41943040,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);class _s{constructor(t,e,r,i){this.userId=t,this.serializer=e,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(t,e,r,i){R(t.uid!=="");const s=t.isAuthenticated()?t.uid:"";return new _s(s,e,r,i)}checkEmpty(t){let e=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ae(t).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{e=!1,o.done()}).next(()=>e)}addMutationBatch(t,e,r,i){const s=ln(t),o=ae(t);return o.add({}).next(a=>{R(typeof a=="number");const c=new Ma(a,e,r,i),u=function(m,I,y){const v=y.baseMutations.map(C=>Mi(m.ut,C)),k=y.mutations.map(C=>Mi(m.ut,C));return{userId:I,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:k}}(this.serializer,this.userId,c),l=[];let h=new j((d,m)=>D(d.canonicalString(),m.canonicalString()));for(const d of i){const m=Gh(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(m,Ey))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(t,d))}),t.addOnCommittedListener(()=>{this.Dn[a]=c.keys()}),f.waitFor(l).next(()=>c)})}lookupMutationBatch(t,e){return ae(t).get(e).next(r=>r?(R(r.userId===this.userId),De(this.serializer,r)):null)}Cn(t,e){return this.Dn[e]?f.resolve(this.Dn[e]):this.lookupMutationBatch(t,e).next(r=>{if(r){const i=r.keys();return this.Dn[e]=i,i}return null})}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ae(t).Y({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(R(a.batchId>=r),s=De(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ae(t).Y({index:"userMutationsIndex",range:e,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ae(t).W("userMutationsIndex",e).next(r=>r.map(i=>De(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(t,e){const r=ui(this.userId,e.path),i=IDBKeyRange.lowerBound(r),s=[];return ln(t).Y({range:i},(o,a,c)=>{const[u,l,h]=o,d=qt(l);if(u===this.userId&&e.path.isEqual(d))return ae(t).get(h).next(m=>{if(!m)throw A();R(m.userId===this.userId),s.push(De(this.serializer,m))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new j(D);const i=[];return e.forEach(s=>{const o=ui(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=ln(t).Y({range:a},(u,l,h)=>{const[d,m,I]=u,y=qt(m);d===this.userId&&s.path.isEqual(y)?r=r.add(I):h.done()});i.push(c)}),f.waitFor(i).next(()=>this.vn(t,r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1,s=ui(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new j(D);return ln(t).Y({range:o},(c,u,l)=>{const[h,d,m]=c,I=qt(d);h===this.userId&&r.isPrefixOf(I)?I.length===i&&(a=a.add(m)):l.done()}).next(()=>this.vn(t,a))}vn(t,e){const r=[],i=[];return e.forEach(s=>{i.push(ae(t).get(s).next(o=>{if(o===null)throw A();R(o.userId===this.userId),r.push(De(this.serializer,o))}))}),f.waitFor(i).next(()=>r)}removeMutationBatch(t,e){return Md(t.ae,this.userId,e).next(r=>(t.addOnCommittedListener(()=>{this.Fn(e.batchId)}),f.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(t,i))))}Fn(t){delete this.Dn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return f.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ln(t).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=qt(s[1]);i.push(c)}else a.done()}).next(()=>{R(i.length===0)})})}containsKey(t,e){return Ld(t,this.userId,e)}Mn(t){return Fd(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Ld(n,t,e){const r=ui(t,e.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ln(n).Y({range:s,J:!0},(a,c,u)=>{const[l,h,d]=a;l===t&&h===i&&(o=!0),u.done()}).next(()=>o)}function ae(n){return at(n,"mutations")}function ln(n){return at(n,"documentMutations")}function Fd(n){return at(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new We(0)}static Nn(){return new We(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.Bn(t).next(e=>{const r=new We(e.highestTargetId);return e.highestTargetId=r.next(),this.Ln(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.Bn(t).next(e=>b.fromTimestamp(new tt(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.Bn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,r){return this.Bn(t).next(i=>(i.highestListenSequenceNumber=e,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.Ln(t,i)))}addTargetData(t,e){return this.kn(t,e).next(()=>this.Bn(t).next(r=>(r.targetCount+=1,this.qn(e,r),this.Ln(t,r))))}updateTargetData(t,e){return this.kn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>sn(t).delete(e.targetId)).next(()=>this.Bn(t)).next(r=>(R(r.targetCount>0),r.targetCount-=1,this.Ln(t,r)))}removeTargets(t,e,r){let i=0;const s=[];return sn(t).Y((o,a)=>{const c=Qn(a);c.sequenceNumber<=e&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(t,c)))}).next(()=>f.waitFor(s)).next(()=>i)}forEachTarget(t,e){return sn(t).Y((r,i)=>{const s=Qn(i);e(s)})}Bn(t){return Pu(t).get("targetGlobalKey").next(e=>(R(e!==null),e))}Ln(t,e){return Pu(t).put("targetGlobalKey",e)}kn(t,e){return sn(t).put(xd(this.serializer,e))}qn(t,e){let r=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,r=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,r=!0),r}getTargetCount(t){return this.Bn(t).next(e=>e.targetCount)}getTargetData(t,e){const r=ze(e),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return sn(t).Y({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=Qn(a);Ur(e,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(t,e,r){const i=[],s=ce(t);return e.forEach(o=>{const a=Tt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(t,r,o))}),f.waitFor(i)}removeMatchingKeys(t,e,r){const i=ce(t);return f.forEach(e,s=>{const o=Tt(s.path);return f.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(t,r,s)])})}removeMatchingKeysForTargetId(t,e){const r=ce(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(t,e){const r=IDBKeyRange.bound([e],[e+1],!1,!0),i=ce(t);let s=N();return i.Y({range:r,J:!0},(o,a,c)=>{const u=qt(o[1]),l=new T(u);s=s.add(l)}).next(()=>s)}containsKey(t,e){const r=Tt(e.path),i=IDBKeyRange.bound([r],[Uh(r)],!1,!0);let s=0;return ce(t).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(t,e){return sn(t).get(e).next(r=>r?Qn(r):null)}}function sn(n){return at(n,"targets")}function Pu(n){return at(n,"targetGlobal")}function ce(n){return at(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu([n,t],[e,r]){const i=D(n,e);return i===0?D(t,r):i}class UI{constructor(t){this.Qn=t,this.buffer=new j(Cu),this.Kn=0}$n(){return++this.Kn}Un(t){const e=[t,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Cu(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class qI{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(t){_("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,()=>p(this,null,function*(){this.Wn=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(e){be(e)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):yield Xe(e)}yield this.Gn(3e5)}))}}class jI{constructor(t,e){this.zn=t,this.params=e}calculateTargetCount(t,e){return this.zn.jn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return f.resolve(Dt._e);const r=new UI(e);return this.zn.forEachTarget(t,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(t,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.zn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(Su)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Su):this.Jn(t,e))}getCacheSize(t){return this.zn.getCacheSize(t)}Jn(t,e){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(t,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(t,r,e))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(h=>(u=Date.now(),on()<=F.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function zI(n,t){return new jI(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(t,e){this.db=t,this.garbageCollector=zI(this,e)}jn(t){const e=this.Yn(t);return this.db.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Yn(t){let e=0;return this.Hn(t,r=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Hn(t,e){return this.Zn(t,(r,i)=>e(i))}addReference(t,e,r){return ri(t,r)}removeReference(t,e,r){return ri(t,r)}removeTargets(t,e,r){return this.db.getTargetCache().removeTargets(t,e,r)}markPotentiallyOrphaned(t,e){return ri(t,e)}Xn(t,e){return function(i,s){let o=!1;return Fd(i).Z(a=>Ld(i,a,s).next(c=>(c&&(o=!0),f.resolve(!c)))).next(()=>o)}(t,e)}removeOrphanedDocuments(t,e){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(t,(o,a)=>{if(a<=e){const c=this.Xn(t,o).next(u=>{if(!u)return s++,r.getEntry(t,o).next(()=>(r.removeEntry(o,b.min()),ce(t).delete(function(h){return[0,Tt(h.path)]}(o))))});i.push(c)}}).next(()=>f.waitFor(i)).next(()=>r.apply(t)).next(()=>s)}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,r)}updateLimboDocument(t,e){return ri(t,e)}Zn(t,e){const r=ce(t);let i,s=Dt._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Dt._e&&e(new T(qt(i)),s),s=u,i=c):s=Dt._e}).next(()=>{s!==Dt._e&&e(new T(qt(i)),s)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function ri(n,t){return ce(n).put(function(r,i){return{targetId:0,path:Tt(r.path),sequenceNumber:i}}(t,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.changes=new Re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,J.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?f.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,r){return Se(t).put(r)}removeEntry(t,e,r){return Se(t).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Li(o),a[a.length-1]]}(e,r))}updateMetadata(t,e){return this.getMetadata(t).next(r=>(r.byteSize+=e,this.er(t,r)))}getEntry(t,e){let r=J.newInvalidDocument(e);return Se(t).Y({index:"documentKeyIndex",range:IDBKeyRange.only(qn(e))},(i,s)=>{r=this.tr(e,s)}).next(()=>r)}nr(t,e){let r={size:0,document:J.newInvalidDocument(e)};return Se(t).Y({index:"documentKeyIndex",range:IDBKeyRange.only(qn(e))},(i,s)=>{r={document:this.tr(e,s),size:Bi(s)}}).next(()=>r)}getEntries(t,e){let r=xt();return this.rr(t,e,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(t,e){let r=xt(),i=new Y(T.comparator);return this.rr(t,e,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,Bi(o))}).next(()=>({documents:r,sr:i}))}rr(t,e,r){if(e.isEmpty())return f.resolve();let i=new j(xu);e.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(qn(i.first()),qn(i.last())),o=i.getIterator();let a=o.getNext();return Se(t).Y({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=T.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&xu(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.U(qn(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(t,e,r,i,s){const o=e.path,a=[o.popLast().toArray(),o.lastSegment(),Li(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Se(t).W(IDBKeyRange.bound(a,c,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let l=xt();for(const h of u){const d=this.tr(T.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(jr(e,d)||i.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(t,e,r,i){let s=xt();const o=Du(e,r),a=Du(e,Pt.max());return Se(t).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.tr(T.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(t){return new WI(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return Vu(t).get("remoteDocumentGlobalKey").next(e=>(R(!!e),e))}er(t,e){return Vu(t).put("remoteDocumentGlobalKey",e)}tr(t,e){if(e){const r=DI(this.serializer,e);if(!(r.isNoDocument()&&r.version.isEqual(b.min())))return r}return J.newInvalidDocument(t)}}function $d(n){return new KI(n)}class WI extends Bd{constructor(t,e){super(),this._r=t,this.trackRemovals=e,this.ar=new Re(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(t){const e=[];let r=0,i=new j((s,o)=>D(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(e.push(this._r.removeEntry(t,s,a.readTime)),o.isValidDocument()){const c=pu(this._r.serializer,o);i=i.add(s.path.popLast());const u=Bi(c);r+=u-a.size,e.push(this._r.addEntry(t,s,c))}else if(r-=a.size,this.trackRemovals){const c=pu(this._r.serializer,o.convertToNoDocument(b.min()));e.push(this._r.addEntry(t,s,c))}}),i.forEach(s=>{e.push(this._r.indexManager.addToCollectionParentIndex(t,s))}),e.push(this._r.updateMetadata(t,r)),f.waitFor(e)}getFromCache(t,e){return this._r.nr(t,e).next(r=>(this.ar.set(e,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(t,e){return this._r.ir(t,e).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Vu(n){return at(n,"remoteDocumentGlobal")}function Se(n){return at(n,"remoteDocumentsV14")}function qn(n){const t=n.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Du(n,t){const e=t.documentKey.path.toArray();return[n,Li(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function xu(n,t){const e=n.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<e.length-2&&s<r.length-2;++s)if(i=D(e[s],r[s]),i)return i;return i=D(e.length,r.length),i||(i=D(e[e.length-2],r[r.length-2]),i||D(e[e.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&rr(r.mutation,i,Yt.empty(),tt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,N()).next(()=>r))}getLocalViewOfDocuments(t,e,r=N()){const i=jt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=Wn();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=jt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,N()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=xt();const o=nr(),a=function(){return nr()}();return e.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof xn)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),rr(l.mutation,u,l.mutation.getFieldMask(),tt.now())):o.set(u.key,Yt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),e.forEach((u,l)=>{var h;return a.set(u,new HI(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=nr();let i=new Y((o,a)=>o-a),s=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=e.get(c);if(u===null)return;let l=r.get(c)||Yt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||N()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=ud();l.forEach(d=>{if(!s.has(d)){const m=gd(e.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return T.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):sd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):f.resolve(jt());let a=-1,c=s;return o.next(u=>f.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?f.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,N())).next(l=>({batchId:a,changes:tI(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new T(e)).next(r=>{let i=Wn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=Wn();return this.indexManager.getCollectionParents(t,s).next(a=>f.forEach(a,c=>{const u=function(h,d){return new qr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,J.newInvalidDocument(l)))});let a=Wn();return o.forEach((c,u)=>{const l=s.get(c);l!==void 0&&rr(l.mutation,u,Yt.empty(),tt.now()),jr(e,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return f.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(i){return{id:i.id,version:i.version,createTime:wt(i.createTime)}}(e)),f.resolve()}getNamedQuery(t,e){return f.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(i){return{name:i.name,query:Nd(i.bundledQuery),readTime:wt(i.readTime)}}(e)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.overlays=new Y(T.comparator),this.lr=new Map}getOverlay(t,e){return f.resolve(this.overlays.get(e))}getOverlays(t,e){const r=jt();return f.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.lt(t,e,s)}),f.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),f.resolve()}getOverlaysForCollection(t,e,r){const i=jt(),s=e.length+1,o=new T(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return f.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new Y((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=jt(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=jt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return f.resolve(a)}lt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Fa(e,r));let s=this.lr.get(e);s===void 0&&(s=N(),this.lr.set(e,s)),this.lr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.hr=new j(it.Pr),this.Ir=new j(it.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const r=new it(t,e);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.dr(new it(t,e))}Ar(t,e){t.forEach(r=>this.removeReference(r,e))}Rr(t){const e=new T(new q([])),r=new it(e,t),i=new it(e,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new T(new q([])),r=new it(e,t),i=new it(e,t+1);let s=N();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new it(t,0),r=this.hr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return T.comparator(t.key,e.key)||D(t.gr,e.gr)}static Tr(t,e){return D(t.gr,e.gr)||T.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new j(it.Pr)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ma(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,e){return f.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Sr(r),s=i<0?0:i;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new j(D);return e.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),f.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;T.isDocumentKey(s)||(s=s.child(""));const o=new it(new T(s),0);let a=new j(D);return this.yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.gr)),!0)},o),f.resolve(this.br(a))}br(t){const e=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){R(this.Dr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return f.forEach(e.mutations,i=>{const s=new it(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,e){const r=new it(e,0),i=this.yr.firstAfterOrEqual(r);return f.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(t){this.Cr=t,this.docs=function(){return new Y(T.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return f.resolve(r?r.document.mutableCopy():J.newInvalidDocument(e))}getEntries(t,e){let r=xt();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():J.newInvalidDocument(i))}),f.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=xt();const o=e.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ca(qh(l),r)<=0||(i.has(l.key)||jr(e,l))&&(s=s.insert(l.key,l.mutableCopy()))}return f.resolve(s)}getAllFromCollectionGroup(t,e,r,i){A()}vr(t,e){return f.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new ZI(this)}getSize(t){return f.resolve(this.size)}}class ZI extends Bd{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),f.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(t){this.persistence=t,this.Fr=new Re(e=>ze(e),Ur),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Mr=0,this.Or=new ja,this.targetCount=0,this.Nr=We.On()}forEachTarget(t,e){return this.Fr.forEach((r,i)=>e(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Mr&&(this.Mr=e),f.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new We(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,f.resolve()}updateTargetData(t,e){return this.kn(e),f.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,e){const r=this.Fr.get(e)||null;return f.resolve(r)}addMatchingKeys(t,e,r){return this.Or.Er(e,r),f.resolve()}removeMatchingKeys(t,e,r){this.Or.Ar(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),f.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Or.mr(e);return f.resolve(r)}containsKey(t,e){return f.resolve(this.Or.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,e){this.Br={},this.overlays={},this.Lr=new Dt(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new tE(this),this.indexManager=new FI,this.remoteDocumentCache=function(i){return new JI(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Dd(e),this.Kr=new QI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new YI,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new XI(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,r){_("MemoryPersistence","Starting transaction:",t);const i=new eE(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,e){return f.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class eE extends zh{constructor(t){super(),this.currentSequenceNumber=t}}class ys{constructor(t){this.persistence=t,this.Gr=new ja,this.zr=null}static jr(t){return new ys(t)}get Hr(){if(this.zr)return this.zr;throw A()}addReference(t,e,r){return this.Gr.addReference(r,e),this.Hr.delete(r.toString()),f.resolve()}removeReference(t,e,r){return this.Gr.removeReference(r,e),this.Hr.add(r.toString()),f.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),f.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Hr,r=>{const i=T.fromPath(r);return this.Jr(t,i).next(s=>{s||e.removeEntry(i,b.min())})}).next(()=>(this.zr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Jr(t,e).next(r=>{r?this.Hr.delete(e.toString()):this.Hr.add(e.toString())})}Qr(t){return 0}Jr(t,e){return f.or([()=>f.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(t){this.serializer=t}N(t,e,r,i){const s=new ls("createOrUpgrade",e);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(t),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Wc,{unique:!0}),c.createObjectStore("documentMutations")}(t),Nu(t),function(c){c.createObjectStore("remoteDocuments")}(t));let o=f.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(t),Nu(t)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:b.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").W().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Wc,{unique:!0});const h=u.store("mutations"),d=l.map(m=>h.put(m));return f.waitFor(d)})}(t,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(t),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(t,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(t)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:xy});u.createIndex("collectionPathOverlayIndex",Ny,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",ky,{unique:!1})})(t)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:Ty});u.createIndex("documentKeyIndex",wy),u.createIndex("collectionGroupIndex",vy)}(t)).next(()=>this.ri(t,s)).next(()=>t.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(t,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:Py}).createIndex("sequenceNumberIndex",Cy,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:Vy}).createIndex("documentKeyIndex",Dy,{unique:!1})}(t))),o}Xr(t){let e=0;return t.store("remoteDocuments").Y((r,i)=>{e+=Bi(i)}).next(()=>{const r={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(t){const e=t.store("mutationQueues"),r=t.store("mutations");return e.W().next(i=>f.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>f.forEach(a,c=>{R(c.userId===s.userId);const u=De(this.serializer,c);return Md(t,s.userId,u).next(()=>{})}))}))}ei(t){const e=t.store("targetDocuments"),r=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const c=new q(o),u=function(h){return[0,Tt(h)]}(c);s.push(e.get(u).next(l=>l?f.resolve():(h=>e.put({targetId:0,path:Tt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>f.waitFor(s))})}ti(t,e){t.createObjectStore("collectionParents",{keyPath:Sy});const r=e.store("collectionParents"),i=new qa,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Tt(c)})}};return e.store("remoteDocuments").Y({J:!0},(o,a)=>{const c=new q(o);return s(c.popLast())}).next(()=>e.store("documentMutations").Y({J:!0},([o,a,c],u)=>{const l=qt(a);return s(l.popLast())}))}ni(t){const e=t.store("targets");return e.Y((r,i)=>{const s=Qn(i),o=xd(this.serializer,s);return e.put(o)})}ri(t,e){const r=e.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=e.store("remoteDocumentsV14"),c=function(h){return h.document?new T(q.fromString(h.document.name).popFirst(5)):h.noDocument?T.fromSegments(h.noDocument.path):h.unknownDocument?T.fromSegments(h.unknownDocument.path):A()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>f.waitFor(i))}ii(t,e){const r=e.store("mutations"),i=$d(this.serializer),s=new qd(ys.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:N();De(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),f.forEach(a,(c,u)=>{const l=new yt(u),h=ps.ct(this.serializer,l),d=s.getIndexManager(l),m=_s.ct(l,this.serializer,d,s.referenceDelegate);return new Ud(i,m,h,d).recalculateAndSaveOverlaysForDocumentKeys(new bo(e,Dt._e),c).next()})})}}function Nu(n){n.createObjectStore("targetDocuments",{keyPath:by}).createIndex("documentTargetsIndex",Ry,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Ay,{unique:!0}),n.createObjectStore("targetGlobal")}const js="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class za{constructor(t,e,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=u,this._i=l,this.ai=h,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=d=>Promise.resolve(),!za.D())throw new w(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new GI(this,i),this.Ii=e+"main",this.serializer=new Dd(c),this.Ti=new Qt(this.Ii,this.ai,new nE(this.serializer)),this.qr=new $I(this.referenceDelegate,this.serializer),this.remoteDocumentCache=$d(this.serializer),this.Kr=new xI,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,l===!1&&It("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new w(g.FAILED_PRECONDITION,js);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.qr.getHighestSequenceNumber(t))}).then(t=>{this.Lr=new Dt(t,this.oi)}).then(()=>{this.kr=!0}).catch(t=>(this.Ti&&this.Ti.close(),Promise.reject(t)))}mi(t){return this.Pi=e=>p(this,null,function*(){if(this.started)return t(e)}),t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ti.L(e=>p(this,null,function*(){e.newVersion===null&&(yield t())}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.si.enqueueAndForget(()=>p(this,null,function*(){this.started&&(yield this.di())})))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>ii(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(t).next(e=>{e||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(t)).next(e=>this.isPrimary&&!e?this.pi(t).next(()=>!1):!!e&&this.yi(t).next(()=>!0))).catch(t=>{if(be(t))return _("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.si.enqueueRetryable(()=>this.Pi(t)),this.isPrimary=t})}fi(t){return jn(t).get("owner").next(e=>f.resolve(this.wi(e)))}Si(t){return ii(t).delete(this.clientId)}bi(){return p(this,null,function*(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const t=yield this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const r=at(e,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return f.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const e of t)this.Ei.removeItem(this.vi(e.clientId))}})}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(t){return!!t&&t.ownerId===this.clientId}gi(t){return this._i?f.resolve(!0):jn(t).get("owner").next(e=>{if(e!==null&&this.Di(e.leaseTimestampMs,5e3)&&!this.Fi(e.ownerId)){if(this.wi(e)&&this.networkEnabled)return!0;if(!this.wi(e)){if(!e.allowTabSynchronization)throw new w(g.FAILED_PRECONDITION,js);return!1}}return!(!this.networkEnabled||!this.inForeground)||ii(t).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&_("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}shutdown(){return p(this,null,function*(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),yield this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new bo(t,Dt._e);return this.pi(e).next(()=>this.Si(e))}),this.Ti.close(),this.Ni()})}Ci(t,e){return t.filter(r=>this.Di(r.updateTimeMs,e)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",t=>ii(t).W().next(e=>this.Ci(e,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(t,e){return _s.ct(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new BI(t,this.serializer.ut.databaseId)}getDocumentOverlayCache(t){return ps.ct(this.serializer,t)}getBundleCache(){return this.Kr}runTransaction(t,e,r){_("IndexedDbPersistence","Starting transaction:",t);const i=e==="readonly"?"readonly":"readwrite",s=function(c){return c===15?My:c===14?Hh:c===13?Wh:c===12?Oy:c===11?Kh:void A()}(this.ai);let o;return this.Ti.runTransaction(t,i,s,a=>(o=new bo(a,this.Lr?this.Lr.next():Dt._e),e==="readwrite-primary"?this.fi(o).next(c=>!!c||this.gi(o)).next(c=>{if(!c)throw It(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new w(g.FAILED_PRECONDITION,jh);return r(o)}).next(c=>this.yi(o).next(()=>c)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(t){return jn(t).get("owner").next(e=>{if(e!==null&&this.Di(e.leaseTimestampMs,5e3)&&!this.Fi(e.ownerId)&&!this.wi(e)&&!(this._i||this.allowTabSynchronization&&e.allowTabSynchronization))throw new w(g.FAILED_PRECONDITION,js)})}yi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return jn(t).put("owner",e)}static D(){return Qt.D()}pi(t){const e=jn(t);return e.get("owner").next(r=>this.wi(r)?(_("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):f.resolve())}Di(t,e){const r=Date.now();return!(t<r-e)&&(!(t>r)||(It(`Detected an update time that is in the future: ${t} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const e=/(?:Version|Mobile)\/1[456]/;kg()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(t){var e;try{const r=((e=this.Ei)===null||e===void 0?void 0:e.getItem(this.vi(t)))!==null;return _("IndexedDbPersistence",`Client '${t}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return It("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(t){It("Failed to set zombie client id.",t)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch(t){}}vi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function jn(n){return at(n,"owner")}function ii(n){return at(n,"clientMetadata")}function rE(n,t){let e=n.projectId;return n.isDefaultDatabase||(e+="."+n.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.ki=r,this.qi=i}static Qi(t,e){let r=N(),i=N();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ga(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.zi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new iE;return this.Hi(t,e,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,e,o,a.size)})}).next(()=>s.result)}Ji(t,e,r,i){return r.documentReadCount<this.Ui?(on()<=F.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",an(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),f.resolve()):(on()<=F.DEBUG&&_("QueryEngine","Query:",an(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(on()<=F.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",an(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):f.resolve())}zi(t,e){if(su(e))return f.resolve(null);let r=Nt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=xo(e,null,"F"),r=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=N(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.Yi(e,a);return this.Zi(e,u,o,c.readTime)?this.zi(t,xo(e,null,"F")):this.Xi(t,u,e,c)}))})))}ji(t,e,r,i){return su(e)||i.isEqual(b.min())?f.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(e,s);return this.Zi(e,o,r,i)?f.resolve(null):(on()<=F.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),an(e)),this.Xi(t,o,e,fy(i,-1)).next(a=>a))})}Yi(t,e){let r=new j(ad(t));return e.forEach((i,s)=>{jr(t,s)&&(r=r.add(s))}),r}Zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,e,r){return on()<=F.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",an(e)),this.Gi.getDocumentsMatchingQuery(t,e,Pt.min(),r)}Xi(t,e,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(t,e,r,i){this.persistence=t,this.es=e,this.serializer=i,this.ts=new Y(D),this.ns=new Re(s=>ze(s),Ur),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ud(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ts))}}function zd(n,t,e,r){return new sE(n,t,e,r)}function Gd(n,t){return p(this,null,function*(){const e=V(n);return yield e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.os(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=N();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return e.localDocuments.getDocuments(r,c).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})})}function oE(n,t){const e=V(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let m=f.resolve();return d.forEach(I=>{m=m.next(()=>l.getEntry(c,I)).next(y=>{const v=u.docVersions.get(I);R(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),l.addEntry(y)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=N();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Kd(n){const t=V(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.qr.getLastRemoteSnapshotVersion(e))}function aE(n,t){const e=V(n),r=t.snapshotVersion;let i=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.ss.newChangeBuffer({trackRemovals:!0});i=e.ts;const a=[];t.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(e.qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>e.qr.addMatchingKeys(s,l.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(dt.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,r)),i=i.insert(h,m),function(y,v,k){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,m,l)&&a.push(e.qr.updateTargetData(s,m))});let c=xt(),u=N();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(cE(s,o,t.documentUpdates).next(l=>{c=l.us,u=l.cs})),!r.isEqual(b.min())){const l=e.qr.getLastRemoteSnapshotVersion(s).next(h=>e.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(e.ts=i,s))}function cE(n,t,e){let r=N(),i=N();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=xt();return e.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(b.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{us:o,cs:i}})}function uE(n,t){const e=V(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function lE(n,t){const e=V(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.qr.getTargetData(r,t).next(s=>s?(i=s,f.resolve(i)):e.qr.allocateTargetId(r).next(o=>(i=new Xt(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ts=e.ts.insert(r.targetId,r),e.ns.set(t,r.targetId)),r})}function $o(n,t,e){return p(this,null,function*(){const r=V(n),i=r.ts.get(t),s=e?"readwrite":"readwrite-primary";try{e||(yield r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!be(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)})}function ku(n,t,e){const r=V(n);let i=b.min(),s=N();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=V(c),d=h.ns.get(l);return d!==void 0?f.resolve(h.ts.get(d)):h.qr.getTargetData(u,l)}(r,o,Nt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,e?i:b.min(),e?s:N())).next(a=>(hE(r,Xy(t),a),{documents:a,ls:s})))}function hE(n,t,e){let r=n.rs.get(t)||b.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.rs.set(t,r)}class Ou{constructor(){this.activeTargetIds=iI()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wd{constructor(){this.eo=new Ou,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,r){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Ou,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si=null;function zs(){return si===null?si=function(){return 268435456+Math.round(2147483648*Math.random())}():si++,"0x"+si.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class gE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+e.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(e,r,i,s,o){const a=zs(),c=this.So(e,r);_("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(e,c,u,i).then(l=>(_("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw yr("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}Co(e,r,i,s,o,a){return this.wo(e,r,i,s,o)}bo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Dn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}So(e,r){const i=fE[e];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,r,i){const s=zs();return new Promise((o,a)=>{const c=new ey;c.setWithCredentials(!0),c.listenOnce(J_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $s.NO_ERROR:const l=c.getResponseJson();_(mt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case $s.TIMEOUT:_(mt,`RPC '${t}' ${s} timed out`),a(new w(g.DEADLINE_EXCEEDED,"Request time out"));break;case $s.HTTP_ERROR:const h=c.getStatus();if(_(mt,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const I=function(v){const k=v.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(k)>=0?k:g.UNKNOWN}(m.status);a(new w(I,m.message))}else a(new w(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new w(g.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{_(mt,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);_(mt,`RPC '${t}' ${s} sending request:`,i),c.send(e,"POST",u,r,15)})}vo(t,e,r){const i=zs(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Y_(),a=X_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new ty({})),this.bo(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(mt,`Creating RPC '${t}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,m=!1;const I=new mE({co:v=>{m?_(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,v):(d||(_(mt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),_(mt,`RPC '${t}' stream ${i} sending:`,v),h.send(v))},lo:()=>h.close()}),y=(v,k,C)=>{v.listen(k,S=>{try{C(S)}catch(x){setTimeout(()=>{throw x},0)}})};return y(h,ti.EventType.OPEN,()=>{m||_(mt,`RPC '${t}' stream ${i} transport opened.`)}),y(h,ti.EventType.CLOSE,()=>{m||(m=!0,_(mt,`RPC '${t}' stream ${i} transport closed`),I.Ro())}),y(h,ti.EventType.ERROR,v=>{m||(m=!0,yr(mt,`RPC '${t}' stream ${i} transport errored:`,v),I.Ro(new w(g.UNAVAILABLE,"The operation could not be completed")))}),y(h,ti.EventType.MESSAGE,v=>{var k;if(!m){const C=v.data[0];R(!!C);const S=C,x=S.error||((k=S[0])===null||k===void 0?void 0:k.error);if(x){_(mt,`RPC '${t}' stream ${i} received error:`,x);const O=x.status;let K=function(hc){const z=nt[hc];if(z!==void 0)return yd(z)}(O),ct=x.message;K===void 0&&(K=g.INTERNAL,ct="Unknown error status: "+O+" with message "+x.message),m=!0,I.Ro(new w(K,ct)),h.close()}else _(mt,`RPC '${t}' stream ${i} received:`,C),I.Vo(C)}}),y(a,Z_.STAT_EVENT,v=>{v.stat===jc.PROXY?_(mt,`RPC '${t}' stream ${i} detected buffering proxy`):v.stat===jc.NOPROXY&&_(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.Ao()},0),I}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(){return typeof window!="undefined"?window:null}function fi(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n){return new TI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t,e,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=e,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,e-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,e,r,i,s,o,a,c){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Hd(t,e)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}stop(){return p(this,null,function*(){this.jo()&&(yield this.close(0))})}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}Xo(){return p(this,null,function*(){if(this.Ho())return this.close(0)})}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}close(t,e){return p(this,null,function*(){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():e&&e.code===g.RESOURCE_EXHAUSTED?(It(e.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,yield this.listener.Io(e)})}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===e&&this.s_(r,i)},r=>{t(()=>{const i=new w(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,e){const r=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(()=>p(this,null,function*(){this.state=0,this.start()}))}o_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget(()=>this.Uo===t?e():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _E extends Qd{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=AI(this.serializer,t),r=function(s){if(!("targetChange"in s))return b.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?b.min():o.readTime?wt(o.readTime):b.min()}(t);return this.listener.a_(e,r)}u_(t){const e={};e.database=Oo(this.serializer),e.addTarget=function(s,o){let a;const c=o.target;if(a=Ni(c)?{documents:bd(s,c)}:{query:Rd(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Td(s,o.resumeToken);const u=No(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(b.min())>0){a.readTime=Rn(s,o.snapshotVersion.toTimestamp());const u=No(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=RI(this.serializer,t);r&&(e.labels=r),this.e_(e)}c_(t){const e={};e.database=Oo(this.serializer),e.removeTarget=t,this.e_(e)}}class yE extends Qd{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=bI(t.writeResults,t.commitTime),r=wt(t.commitTime);return this.listener.I_(r,e)}return R(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Oo(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Mi(this.serializer,r))};this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new w(g.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(g.UNKNOWN,i.toString())})}Co(t,e,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new w(g.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class EE{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(It(e),this.f_=!1):_("OnlineStateTracker",e)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(()=>p(this,null,function*(){Je(this)&&(_("RemoteStore","Restarting streams for network reachability change."),yield function(c){return p(this,null,function*(){const u=V(c);u.C_.add(4),yield Kr(u),u.M_.set("Unknown"),u.C_.delete(4),yield Es(u)})}(this))}))}),this.M_=new EE(r,i)}}function Es(n){return p(this,null,function*(){if(Je(n))for(const t of n.v_)yield t(!0)})}function Kr(n){return p(this,null,function*(){for(const t of n.v_)yield t(!1)})}function Yd(n,t){const e=V(n);e.D_.has(t.targetId)||(e.D_.set(t.targetId,t),Ha(e)?Wa(e):Nn(e).Ho()&&Ka(e,t))}function Xd(n,t){const e=V(n),r=Nn(e);e.D_.delete(t),r.Ho()&&Jd(e,t),e.D_.size===0&&(r.Ho()?r.Zo():Je(e)&&e.M_.set("Unknown"))}function Ka(n,t){if(n.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(b.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Nn(n).u_(t)}function Jd(n,t){n.x_.Oe(t),Nn(n).c_(t)}function Wa(n){n.x_=new _I({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.D_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),Nn(n).start(),n.M_.g_()}function Ha(n){return Je(n)&&!Nn(n).jo()&&n.D_.size>0}function Je(n){return V(n).C_.size===0}function Zd(n){n.x_=void 0}function wE(n){return p(this,null,function*(){n.D_.forEach((t,e)=>{Ka(n,t)})})}function vE(n,t){return p(this,null,function*(){Zd(n),Ha(n)?(n.M_.w_(t),Wa(n)):n.M_.set("Unknown")})}function AE(n,t,e){return p(this,null,function*(){if(n.M_.set("Online"),t instanceof Ed&&t.state===2&&t.cause)try{yield function(i,s){return p(this,null,function*(){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(yield i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))})}(n,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),yield $i(n,r)}else if(t instanceof di?n.x_.$e(t):t instanceof Id?n.x_.Je(t):n.x_.Ge(t),!e.isEqual(b.min()))try{const r=yield Kd(n.localStore);e.compareTo(r)>=0&&(yield function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.D_.get(u);l&&s.D_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.D_.get(c);if(!l)return;s.D_.set(c,l.withResumeToken(dt.EMPTY_BYTE_STRING,l.snapshotVersion)),Jd(s,c);const h=new Xt(l.target,c,u,l.sequenceNumber);Ka(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e))}catch(r){_("RemoteStore","Failed to raise snapshot:",r),yield $i(n,r)}})}function $i(n,t,e){return p(this,null,function*(){if(!be(t))throw t;n.C_.add(1),yield Kr(n),n.M_.set("Offline"),e||(e=()=>Kd(n.localStore)),n.asyncQueue.enqueueRetryable(()=>p(this,null,function*(){_("RemoteStore","Retrying IndexedDB access"),yield e(),n.C_.delete(1),yield Es(n)}))})}function tf(n,t){return t().catch(e=>$i(n,e,t))}function Ts(n){return p(this,null,function*(){const t=V(n),e=Ie(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;bE(t);)try{const i=yield uE(t.localStore,r);if(i===null){t.b_.length===0&&e.Zo();break}r=i.batchId,RE(t,i)}catch(i){yield $i(t,i)}ef(t)&&nf(t)})}function bE(n){return Je(n)&&n.b_.length<10}function RE(n,t){n.b_.push(t);const e=Ie(n);e.Ho()&&e.h_&&e.P_(t.mutations)}function ef(n){return Je(n)&&!Ie(n).jo()&&n.b_.length>0}function nf(n){Ie(n).start()}function SE(n){return p(this,null,function*(){Ie(n).E_()})}function PE(n){return p(this,null,function*(){const t=Ie(n);for(const e of n.b_)t.P_(e.mutations)})}function CE(n,t,e){return p(this,null,function*(){const r=n.b_.shift(),i=La.from(r,t,e);yield tf(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),yield Ts(n)})}function VE(n,t){return p(this,null,function*(){t&&Ie(n).h_&&(yield function(r,i){return p(this,null,function*(){if(function(o){return mI(o)&&o!==g.ABORTED}(i.code)){const s=r.b_.shift();Ie(r).Yo(),yield tf(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),yield Ts(r)}})}(n,t)),ef(n)&&nf(n)})}function Lu(n,t){return p(this,null,function*(){const e=V(n);e.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=Je(e);e.C_.add(3),yield Kr(e),r&&e.M_.set("Unknown"),yield e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3),yield Es(e)})}function DE(n,t){return p(this,null,function*(){const e=V(n);t?(e.C_.delete(2),yield Es(e)):t||(e.C_.add(2),yield Kr(e),e.M_.set("Unknown"))})}function Nn(n){return n.O_||(n.O_=function(e,r,i){const s=V(e);return s.A_(),new _E(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:wE.bind(null,n),Io:vE.bind(null,n),a_:AE.bind(null,n)}),n.v_.push(t=>p(this,null,function*(){t?(n.O_.Yo(),Ha(n)?Wa(n):n.M_.set("Unknown")):(yield n.O_.stop(),Zd(n))}))),n.O_}function Ie(n){return n.N_||(n.N_=function(e,r,i){const s=V(e);return s.A_(),new yE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:SE.bind(null,n),Io:VE.bind(null,n),T_:PE.bind(null,n),I_:CE.bind(null,n)}),n.v_.push(t=>p(this,null,function*(){t?(n.N_.Yo(),yield Ts(n)):(yield n.N_.stop(),n.b_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))}))),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new Qa(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rf(n,t){if(It("AsyncQueue",`${t}: ${n}`),be(n))return new w(g.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||T.comparator(e.key,r.key):(e,r)=>T.comparator(e.key,r.key),this.keyedMap=Wn(),this.sortedSet=new Y(this.comparator)}static emptySet(t){return new gn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof gn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new gn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.B_=new Y(T.comparator)}track(t){const e=t.doc.key,r=this.B_.get(e);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(e,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(e):t.type===1&&r.type===2?this.B_=this.B_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):A():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Sn{constructor(t,e,r,i,s,o,a,c,u){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Sn(t,e,gn.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ds(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.k_=void 0,this.listeners=[]}}class NE{constructor(){this.queries=new Re(t=>od(t),ds),this.onlineState="Unknown",this.q_=new Set}}function kE(n,t){return p(this,null,function*(){const e=V(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new xE),i)try{s.k_=yield e.onListen(r)}catch(o){const a=rf(o,`Initialization of query '${an(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.Q_(e.onlineState),s.k_&&t.K_(s.k_)&&Ya(e)})}function OE(n,t){return p(this,null,function*(){const e=V(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)})}function ME(n,t){const e=V(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Ya(e)}function LE(n,t,e){const r=V(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function Ya(n){n.q_.forEach(t=>{t.next()})}class FE{constructor(t,e,r){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Sn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}H_(t){t=Sn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t){this.key=t}}class of{constructor(t){this.key=t}}class BE{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=N(),this.mutatedKeys=N(),this._a=ad(t),this.aa=new gn(this._a)}get ua(){return this.ia}ca(t,e){const r=e?e.la:new Fu,i=e?e.aa:this.aa;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const d=i.get(l),m=jr(this.query,h)?h:null,I=!!d&&this.mutatedKeys.has(d.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let v=!1;d&&m?d.data.isEqual(m.data)?I!==y&&(r.track({type:3,doc:m}),v=!0):this.ha(d,m)||(r.track({type:2,doc:m}),v=!0,(c&&this._a(m,c)>0||u&&this._a(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),v=!0):d&&!m&&(r.track({type:1,doc:d}),v=!0,(c||u)&&(a=!0)),v&&(m?(o=o.add(m),s=y?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort((u,l)=>function(d,m){const I=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return I(d)-I(m)}(u.type,l.type)||this._a(u.doc,l.doc)),this.Pa(r);const o=e?this.Ia():[],a=this.oa.size===0&&this.current?1:0,c=a!==this.sa;return this.sa=a,s.length!==0||c?{snapshot:new Sn(this.query,t.aa,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Fu,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=N(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const e=[];return t.forEach(r=>{this.oa.has(r)||e.push(new of(r))}),this.oa.forEach(r=>{t.has(r)||e.push(new sf(r))}),e}da(t){this.ia=t.ls,this.oa=N();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return Sn.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class $E{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class UE{constructor(t){this.key=t,this.Ra=!1}}class qE{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Re(a=>od(a),ds),this.fa=new Map,this.ga=new Set,this.pa=new Y(T.comparator),this.ya=new Map,this.wa=new ja,this.Sa={},this.ba=new Map,this.Da=We.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}function jE(n,t){return p(this,null,function*(){const e=JE(n);let r,i;const s=e.ma.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=yield lE(e.localStore,Nt(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=yield zE(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&Yd(e.remoteStore,o)}return i})}function zE(n,t,e,r,i){return p(this,null,function*(){n.va=(h,d,m)=>function(y,v,k,C){return p(this,null,function*(){let S=v.view.ca(k);S.Zi&&(S=yield ku(y.localStore,v.query,!1).then(({documents:K})=>v.view.ca(K,S)));const x=C&&C.targetChanges.get(v.targetId),O=v.view.applyChanges(S,y.isPrimaryClient,x);return $u(y,v.targetId,O.Ta),O.snapshot})}(n,h,d,m);const s=yield ku(n.localStore,t,!0),o=new BE(t,s.ls),a=o.ca(s.documents),c=Gr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);$u(n,e,u.Ta);const l=new $E(t,e,o);return n.ma.set(t,l),n.fa.has(e)?n.fa.get(e).push(t):n.fa.set(e,[t]),u.snapshot})}function GE(n,t){return p(this,null,function*(){const e=V(n),r=e.ma.get(t),i=e.fa.get(r.targetId);if(i.length>1)return e.fa.set(r.targetId,i.filter(s=>!ds(s,t))),void e.ma.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||(yield $o(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),Xd(e.remoteStore,r.targetId),Uo(e,r.targetId)}).catch(Xe))):(Uo(e,r.targetId),yield $o(e.localStore,r.targetId,!0))})}function af(n,t){return p(this,null,function*(){const e=V(n);try{const r=yield aE(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.ya.get(s);o&&(R(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?R(o.Ra):i.removedDocuments.size>0&&(R(o.Ra),o.Ra=!1))}),yield ws(e,r,t)}catch(r){yield Xe(r)}})}function Bu(n,t,e){const r=V(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=V(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&Ya(c)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function KE(n,t,e){return p(this,null,function*(){const r=V(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new Y(T.comparator);o=o.insert(s,J.newNoDocument(s,b.min()));const a=N().add(s),c=new gs(b.min(),new Map,new Y(D),o,a);yield af(r,c),r.pa=r.pa.remove(s),r.ya.delete(t),Xa(r)}else yield $o(r.localStore,t,!1).then(()=>Uo(r,t,e)).catch(Xe)})}function WE(n,t){return p(this,null,function*(){const e=V(n),r=t.batch.batchId;try{const i=yield oE(e.localStore,t);uf(e,r,null),cf(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),yield ws(e,i)}catch(i){yield Xe(i)}})}function HE(n,t,e){return p(this,null,function*(){const r=V(n);try{const i=yield function(o,a){const c=V(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(R(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);uf(r,t,e),cf(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),yield ws(r,i)}catch(i){yield Xe(i)}})}function cf(n,t){(n.ba.get(t)||[]).forEach(e=>{e.resolve()}),n.ba.delete(t)}function uf(n,t,e){const r=V(n);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function Uo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.fa.get(t))n.ma.delete(r),e&&n.Va.Fa(r,e);n.fa.delete(t),n.isPrimaryClient&&n.wa.Rr(t).forEach(r=>{n.wa.containsKey(r)||lf(n,r)})}function lf(n,t){n.ga.delete(t.path.canonicalString());const e=n.pa.get(t);e!==null&&(Xd(n.remoteStore,e),n.pa=n.pa.remove(t),n.ya.delete(e),Xa(n))}function $u(n,t,e){for(const r of e)r instanceof sf?(n.wa.addReference(r.key,t),QE(n,r)):r instanceof of?(_("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,t),n.wa.containsKey(r.key)||lf(n,r.key)):A()}function QE(n,t){const e=t.key,r=e.path.canonicalString();n.pa.get(e)||n.ga.has(r)||(_("SyncEngine","New document in limbo: "+e),n.ga.add(r),Xa(n))}function Xa(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const t=n.ga.values().next().value;n.ga.delete(t);const e=new T(q.fromString(t)),r=n.Da.next();n.ya.set(r,new UE(e)),n.pa=n.pa.insert(e,r),Yd(n.remoteStore,new Xt(Nt(ka(e.path)),r,"TargetPurposeLimboResolution",Dt._e))}}function ws(n,t,e){return p(this,null,function*(){const r=V(n),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,t,e).then(u=>{if((u||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Ga.Qi(c.targetId,u);s.push(l)}}))}),yield Promise.all(o),r.Va.a_(i),yield function(c,u){return p(this,null,function*(){const l=V(c);try{yield l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(u,d=>f.forEach(d.ki,m=>l.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>f.forEach(d.qi,m=>l.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!be(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=l.ts.get(d),I=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(I);l.ts=l.ts.insert(d,y)}}})}(r.localStore,s))})}function YE(n,t){return p(this,null,function*(){const e=V(n);if(!e.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=yield Gd(e.localStore,t);e.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(c=>{c.reject(new w(g.CANCELLED,o))})}),s.ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),yield ws(e,r._s)}})}function XE(n,t){const e=V(n),r=e.ya.get(t);if(r&&r.Ra)return N().add(r.key);{let i=N();const s=e.fa.get(t);if(!s)return i;for(const o of s){const a=e.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function JE(n){const t=V(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=af.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=XE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=KE.bind(null,t),t.Va.a_=ME.bind(null,t.eventManager),t.Va.Fa=LE.bind(null,t.eventManager),t}function ZE(n){const t=V(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=WE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=HE.bind(null,t),t}class qo{constructor(){this.synchronizeTabs=!1}initialize(t){return p(this,null,function*(){this.serializer=Is(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),yield this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)})}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return zd(this.persistence,new jd,t.initialUser,this.serializer)}createPersistence(t){return new qd(ys.jr,this.serializer)}createSharedClientState(t){return new Wd}terminate(){return p(this,null,function*(){this.gcScheduler&&this.gcScheduler.stop(),yield this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}class Ja extends qo{constructor(t,e,r){super(),this.xa=t,this.cacheSizeBytes=e,this.forceOwnership=r,this.synchronizeTabs=!1}initialize(t){return p(this,null,function*(){yield mc(Ja.prototype,this,"initialize").call(this,t),yield this.xa.initialize(this,t),yield ZE(this.xa.syncEngine),yield Ts(this.xa.remoteStore),yield this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))})}createLocalStore(t){return zd(this.persistence,new jd,t.initialUser,this.serializer)}createGarbageCollectionScheduler(t,e){const r=this.persistence.referenceDelegate.garbageCollector;return new qI(r,t.asyncQueue,e)}createIndexBackfillerScheduler(t,e){const r=new _y(e,this.persistence);return new py(t.asyncQueue,r)}createPersistence(t){const e=rE(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new za(this.synchronizeTabs,e,t.clientId,r,t.asyncQueue,pE(),fi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(t){return new Wd}}class hf{initialize(t,e){return p(this,null,function*(){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YE.bind(null,this.syncEngine),yield DE(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(t){return function(){return new NE}()}createDatastore(t){const e=Is(t.databaseInfo.databaseId),r=function(s){return new gE(s)}(t.databaseInfo);return function(s,o,a,c){return new IE(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new TE(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Bu(this.syncEngine,e,0),function(){return Mu.D()?new Mu:new dE}())}createSyncEngine(t,e){return function(i,s,o,a,c,u,l){const h=new qE(i,s,o,a,c,u);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return function(e){return p(this,null,function*(){const r=V(e);_("RemoteStore","RemoteStore shutting down."),r.C_.add(5),yield Kr(r),r.F_.shutdown(),r.M_.set("Unknown")})}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):It("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=hy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,s=>p(this,null,function*(){_("FirestoreClient","Received user=",s.uid),yield this.authCredentialListener(s),this.user=s})),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}getConfiguration(){return p(this,null,function*(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}})}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>p(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=rf(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}function Gs(n,t){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const e=yield n.getConfiguration();yield t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(i=>p(this,null,function*(){r.isEqual(i)||(yield Gd(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t})}function Uu(n,t){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress();const e=yield rT(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=yield n.getConfiguration();yield t.initialize(e,r),n.setCredentialChangeListener(i=>Lu(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Lu(t.remoteStore,s)),n._onlineComponents=t})}function nT(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}function rT(n){return p(this,null,function*(){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{yield Gs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!nT(e))throw e;yr("Error using user provided cache. Falling back to memory cache: "+e),yield Gs(n,new qo)}}else _("FirestoreClient","Using default OfflineComponentProvider"),yield Gs(n,new qo);return n._offlineComponents})}function iT(n){return p(this,null,function*(){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),yield Uu(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),yield Uu(n,new hf))),n._onlineComponents})}function sT(n){return p(this,null,function*(){const t=yield iT(n),e=t.eventManager;return e.onListen=jE.bind(null,t.syncEngine),e.onUnlisten=GE.bind(null,t.syncEngine),e})}function oT(n,t,e={}){const r=new fe;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return function(s,o,a,c,u){const l=new tT({next:d=>{o.enqueueAndForget(()=>OE(s,h)),d.fromCache&&c.source==="server"?u.reject(new w(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new FE(a,l,{includeMetadataChanges:!0,J_:!0});return kE(s,h)}(yield sT(n),n.asyncQueue,t,e,r)})),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(n,t,e){if(!e)throw new w(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function cT(n,t,e,r){if(t===!0&&r===!0)throw new w(g.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ju(n){if(T.isDocumentKey(n))throw new w(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":A()}function zu(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new w(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=vs(n);throw new w(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new w(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}cT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=df((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new w(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new w(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new w(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ff{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iy;switch(r.type){case"firstParty":return new ay(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=qu.get(e);r&&(_("ComponentProvider","Removing Datastore"),qu.delete(e),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new kn(this.firestore,t,this._query)}}class ne{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ne(this.firestore,t,this._key)}}class pn extends kn{constructor(t,e,r){super(t,e,ka(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ne(this.firestore,null,new T(t))}withConverter(t){return new pn(this.firestore,t,this._path)}}function uT(n,t,...e){if(n=yn(n),aT("collection","path",t),n instanceof ff){const r=q.fromString(t,...e);return ju(r),new pn(n,null,r)}{if(!(n instanceof ne||n instanceof pn))throw new w(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(q.fromString(t,...e));return ju(r),new pn(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Hd(this,"async_queue_retry"),this.iu=()=>{const e=fi();e&&_("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const t=fi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=fi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const e=new fe;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}_u(){return p(this,null,function*(){if(this.Ya.length!==0){try{yield this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!be(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}})}ou(t){const e=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw It("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=e,e}enqueueAfterDelay(t,e,r){this.su(),this.ru.indexOf(t)>-1&&(e=0);const i=Qa.createAndSchedule(this,t,e,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&A()}verifyOperationInProgress(){}uu(){return p(this,null,function*(){let t;do t=this.Ja,yield t;while(t!==this.Ja)})}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Xa)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}class mf extends ff{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new lT}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gf(this),this._firestoreClient.terminate()}}function hT(n,t,e){e||(e="(default)");const r=Vr(n,"firestore");if(r.isInitialized(e)){const i=r.getImmediate({identifier:e}),s=r.getOptions(e);if(cr(s,t))return i;throw new w(g.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new w(g.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:e})}function dT(n){return n._firestoreClient||gf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function gf(n){var t,e,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new Fy(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,df(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new eT(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pn(dt.fromBase64String(t))}catch(e){throw new w(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Pn(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new w(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new w(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new w(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=/^__.*__$/;function yf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class tc{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new tc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return jo(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(yf(this.Iu)&&fT.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class mT{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Is(t)}pu(t,e,r,i=!1){return new tc({Iu:t,methodName:e,gu:r,path:Z.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gT(n){const t=n._freezeSettings(),e=Is(n._databaseId);return new mT(n._databaseId,!!t.ignoreUndefinedProperties,e)}function pT(n,t,e,r=!1){return ec(e,n.pu(r?4:3,t))}function ec(n,t){if(If(n=yn(n)))return yT("Unsupported field value:",t,n),_T(n,t);if(n instanceof _f)return function(r,i){if(!yf(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=ec(a,i.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=yn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=tt.fromDate(r);return{timestampValue:Rn(i.serializer,s)}}if(r instanceof tt){const s=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rn(i.serializer,s)}}if(r instanceof Za)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pn)return{bytesValue:Td(i.serializer,r._byteString)};if(r instanceof ne){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$a(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${vs(r)}`)}(n,t)}function _T(n,t){const e={};return Qh(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$r(n,(r,i)=>{const s=ec(i,t.Eu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function If(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof Za||n instanceof Pn||n instanceof ne||n instanceof _f)}function yT(n,t,e){if(!If(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=vs(e);throw r==="an object"?t.mu(n+" a custom object"):t.mu(n+" "+r)}}const IT=new RegExp("[~\\*/\\[\\]]");function ET(n,t,e){if(t.search(IT)>=0)throw jo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new pf(...t.split("."))._internalPath}catch(r){throw jo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function jo(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new w(g.INVALID_ARGUMENT,a+n+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new TT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Tf("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class TT extends Ef{data(){return super.data()}}function Tf(n,t){return typeof t=="string"?ET(n,t):t instanceof pf?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new w(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nc{}class vT extends nc{}function AT(n,t,...e){let r=[];t instanceof nc&&r.push(t),r=r.concat(e),function(s){const o=s.filter(c=>c instanceof ic).length,a=s.filter(c=>c instanceof rc).length;if(o>1||o>0&&a>0)throw new w(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class rc extends vT{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new rc(t,e,r)}_apply(t){const e=this._parse(t);return wf(t._query,e),new kn(t.firestore,t.converter,Do(t._query,e))}_parse(t){const e=gT(t.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new w(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Wu(h,l);const m=[];for(const I of h)m.push(Ku(c,s,I));d={arrayValue:{values:m}}}else d=Ku(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Wu(h,l),d=pT(a,o,h,l==="in"||l==="not-in");return M.create(u,l,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class ic extends nc{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ic(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:$.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)wf(o,c),o=Do(o,c)}(t._query,e),new kn(t.firestore,t.converter,Do(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ku(n,t,e){if(typeof(e=yn(e))=="string"){if(e==="")throw new w(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sd(t)&&e.indexOf("/")!==-1)throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(q.fromString(e));if(!T.isDocumentKey(r))throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ar(n,new T(r))}if(e instanceof ne)return Ar(n,e._key);throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vs(e)}.`)}function Wu(n,t){if(!Array.isArray(n)||n.length===0)throw new w(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function wf(n,t){const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new w(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new w(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class bT{convertValue(t,e="none"){switch(je(t)){case 0:return null;case 1:return t.booleanValue;case 2:return X(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_e(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw A()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return $r(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new Za(X(t.latitude),X(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=xa(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(wr(t));default:return null}}convertTimestamp(t){const e=pe(t);return new tt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=q.fromString(t);R(Vd(r));const i=new qe(r.get(1),r.get(3)),s=new T(r.popFirst(5));return i.isEqual(e)||It(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class RT extends Ef{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Tf("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class mi extends RT{data(t={}){return super.data(t)}}class ST{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new oi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new mi(this._firestore,this._userDataWriter,r.key,r,new oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new w(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new mi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new oi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new mi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new oi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:PT(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function PT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}class CT extends bT{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ne(this.firestore,null,e)}}function VT(n){n=zu(n,kn);const t=zu(n.firestore,mf),e=dT(t),r=new CT(t);return wT(n._query),oT(e,n._query).then(i=>new ST(t,r,n,i))}class DT{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=kT(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function xT(n){return new DT(n)}class NT{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=new hf,this._offlineComponentProvider=new Ja(this._onlineComponentProvider,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}function kT(n){return new NT(n==null?void 0:n.forceOwnership)}(function(t,e=!0){(function(i){Dn=i})(Bp),ge(new te("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new mf(new sy(r.getProvider("auth-internal")),new uy(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new w(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qe(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zt(zc,"4.3.2",t),zt(zc,"4.3.2","esm2017")})();var OT="firebase",MT="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(OT,MT,"app");const LT=(n,t)=>t.some(e=>n instanceof e);let Hu,Qu;function FT(){return Hu||(Hu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BT(){return Qu||(Qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vf=new WeakMap,zo=new WeakMap,Af=new WeakMap,Ks=new WeakMap,sc=new WeakMap;function $T(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(me(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&vf.set(e,n)}).catch(()=>{}),sc.set(t,n),t}function UT(n){if(zo.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});zo.set(n,t)}let Go={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return zo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Af.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return me(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function qT(n){Go=n(Go)}function jT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ws(this),t,...e);return Af.set(r,t.sort?t.sort():[t]),me(r)}:BT().includes(n)?function(...t){return n.apply(Ws(this),t),me(vf.get(this))}:function(...t){return me(n.apply(Ws(this),t))}}function zT(n){return typeof n=="function"?jT(n):(n instanceof IDBTransaction&&UT(n),LT(n,FT())?new Proxy(n,Go):n)}function me(n){if(n instanceof IDBRequest)return $T(n);if(Ks.has(n))return Ks.get(n);const t=zT(n);return t!==n&&(Ks.set(n,t),sc.set(t,n)),t}const Ws=n=>sc.get(n);function GT(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=me(o);return r&&o.addEventListener("upgradeneeded",c=>{r(me(o.result),c.oldVersion,c.newVersion,me(o.transaction))}),e&&o.addEventListener("blocked",()=>e()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const KT=["get","getKey","getAll","getAllKeys","count"],WT=["put","add","delete","clear"],Hs=new Map;function Yu(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Hs.get(t))return Hs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=WT.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KT.includes(e)))return;const s=function(o,...a){return p(this,null,function*(){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(yield Promise.all([u[e](...a),i&&c.done]))[0]})};return Hs.set(t,s),s}qT(n=>Ft(vt({},n),{get:(t,e,r)=>Yu(t,e)||n.get(t,e,r),has:(t,e)=>!!Yu(t,e)||n.has(t,e)}));const bf="@firebase/installations",oc="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=1e4,Sf=`w:${oc}`,Pf="FIS_v2",HT="https://firebaseinstallations.googleapis.com/v1",QT=60*60*1e3,YT="installations",XT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},He=new Hi(YT,XT,JT);function Cf(n){return n instanceof we&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf({projectId:n}){return`${HT}/projects/${n}/installations`}function Df(n){return{token:n.token,requestStatus:2,expiresIn:tw(n.expiresIn),creationTime:Date.now()}}function xf(n,t){return p(this,null,function*(){const r=(yield t.json()).error;return He.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})})}function Nf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ZT(n,{refreshToken:t}){const e=Nf(n);return e.append("Authorization",ew(t)),e}function kf(n){return p(this,null,function*(){const t=yield n();return t.status>=500&&t.status<600?n():t})}function tw(n){return Number(n.replace("s","000"))}function ew(n){return`${Pf} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(r,i){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const s=Vf(n),o=Nf(n),a=t.getImmediate({optional:!0});if(a){const h=yield a.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const c={fid:e,authVersion:Pf,appId:n.appId,sdkVersion:Sf},u={method:"POST",headers:o,body:JSON.stringify(c)},l=yield kf(()=>fetch(s,u));if(l.ok){const h=yield l.json();return{fid:h.fid||e,registrationStatus:2,refreshToken:h.refreshToken,authToken:Df(h.authToken)}}else throw yield xf("Create Installation",l)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=/^[cdef][\w-]{21}$/,Ko="";function sw(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=ow(n);return iw.test(e)?e:Ko}catch(n){return Ko}}function ow(n){return rw(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new Map;function Lf(n,t){const e=As(n);Ff(e,t),aw(e,t)}function Ff(n,t){const e=Mf.get(n);if(e)for(const r of e)r(t)}function aw(n,t){const e=cw();e&&e.postMessage({key:n,fid:t}),uw()}let Me=null;function cw(){return!Me&&"BroadcastChannel"in self&&(Me=new BroadcastChannel("[Firebase] FID Change"),Me.onmessage=n=>{Ff(n.data.key,n.data.fid)}),Me}function uw(){Mf.size===0&&Me&&(Me.close(),Me=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="firebase-installations-database",hw=1,Qe="firebase-installations-store";let Qs=null;function ac(){return Qs||(Qs=GT(lw,hw,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Qe)}}})),Qs}function Ui(n,t){return p(this,null,function*(){const e=As(n),i=(yield ac()).transaction(Qe,"readwrite"),s=i.objectStore(Qe),o=yield s.get(e);return yield s.put(t,e),yield i.done,(!o||o.fid!==t.fid)&&Lf(n,t.fid),t})}function Bf(n){return p(this,null,function*(){const t=As(n),r=(yield ac()).transaction(Qe,"readwrite");yield r.objectStore(Qe).delete(t),yield r.done})}function bs(n,t){return p(this,null,function*(){const e=As(n),i=(yield ac()).transaction(Qe,"readwrite"),s=i.objectStore(Qe),o=yield s.get(e),a=t(o);return a===void 0?yield s.delete(e):yield s.put(a,e),yield i.done,a&&(!o||o.fid!==a.fid)&&Lf(n,a.fid),a})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n){return p(this,null,function*(){let t;const e=yield bs(n.appConfig,r=>{const i=dw(r),s=fw(n,i);return t=s.registrationPromise,s.installationEntry});return e.fid===Ko?{installationEntry:yield t}:{installationEntry:e,registrationPromise:t}})}function dw(n){const t=n||{fid:sw(),registrationStatus:0};return $f(t)}function fw(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(He.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=mw(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:gw(n)}:{installationEntry:t}}function mw(n,t){return p(this,null,function*(){try{const e=yield nw(n,t);return Ui(n.appConfig,e)}catch(e){throw Cf(e)&&e.customData.serverCode===409?yield Bf(n.appConfig):yield Ui(n.appConfig,{fid:t.fid,registrationStatus:0}),e}})}function gw(n){return p(this,null,function*(){let t=yield Xu(n.appConfig);for(;t.registrationStatus===1;)yield Of(100),t=yield Xu(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=yield cc(n);return r||e}return t})}function Xu(n){return bs(n,t=>{if(!t)throw He.create("installation-not-found");return $f(t)})}function $f(n){return pw(n)?{fid:n.fid,registrationStatus:0}:n}function pw(n){return n.registrationStatus===1&&n.registrationTime+Rf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(r,i){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:t},e){const s=yw(n,e),o=ZT(n,e),a=t.getImmediate({optional:!0});if(a){const h=yield a.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const c={installation:{sdkVersion:Sf,appId:n.appId}},u={method:"POST",headers:o,body:JSON.stringify(c)},l=yield kf(()=>fetch(s,u));if(l.ok){const h=yield l.json();return Df(h)}else throw yield xf("Generate Auth Token",l)})}function yw(n,{fid:t}){return`${Vf(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n,t=!1){return p(this,null,function*(){let e;const r=yield bs(n.appConfig,s=>{if(!Uf(s))throw He.create("not-registered");const o=s.authToken;if(!t&&Tw(o))return s;if(o.requestStatus===1)return e=Iw(n,t),s;{if(!navigator.onLine)throw He.create("app-offline");const a=vw(s);return e=Ew(n,a),a}});return e?yield e:r.authToken})}function Iw(n,t){return p(this,null,function*(){let e=yield Ju(n.appConfig);for(;e.authToken.requestStatus===1;)yield Of(100),e=yield Ju(n.appConfig);const r=e.authToken;return r.requestStatus===0?uc(n,t):r})}function Ju(n){return bs(n,t=>{if(!Uf(t))throw He.create("not-registered");const e=t.authToken;return Aw(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}function Ew(n,t){return p(this,null,function*(){try{const e=yield _w(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return yield Ui(n.appConfig,r),e}catch(e){if(Cf(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))yield Bf(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});yield Ui(n.appConfig,r)}throw e}})}function Uf(n){return n!==void 0&&n.registrationStatus===2}function Tw(n){return n.requestStatus===2&&!ww(n)}function ww(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+QT}function vw(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Aw(n){return n.requestStatus===1&&n.requestTime+Rf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(n){return p(this,null,function*(){const t=n,{installationEntry:e,registrationPromise:r}=yield cc(t);return r?r.catch(console.error):uc(t).catch(console.error),e.fid})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(n,t=!1){return p(this,null,function*(){const e=n;return yield Sw(e),(yield uc(e,t)).token})}function Sw(n){return p(this,null,function*(){const{registrationPromise:t}=yield cc(n);t&&(yield t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(n){if(!n||!n.options)throw Ys("App Configuration");if(!n.name)throw Ys("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Ys(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ys(n){return He.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="installations",Cw="installations-internal",Vw=n=>{const t=n.getProvider("app").getImmediate(),e=Pw(t),r=Vr(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Dw=n=>{const t=n.getProvider("app").getImmediate(),e=Vr(t,qf).getImmediate();return{getId:()=>bw(e),getToken:i=>Rw(e,i)}};function xw(){ge(new te(qf,Vw,"PUBLIC")),ge(new te(Cw,Dw,"PRIVATE"))}xw();zt(bf,oc);zt(bf,oc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="analytics",Nw="firebase_id",kw="origin",Ow=60*1e3,Mw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",lc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new ia("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new Hi("analytics","Analytics",Lw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(n){if(!n.startsWith(lc)){const t=Rt.create("invalid-gtag-resource",{gtagURL:n});return bt.warn(t.message),""}return n}function jf(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Bw(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function $w(n,t){const e=Bw("firebase-js-sdk-policy",{createScriptURL:Fw}),r=document.createElement("script"),i=`${lc}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Uw(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}function qw(n,t,e,r,i,s){return p(this,null,function*(){const o=r[i];try{if(o)yield t[o];else{const c=(yield jf(e)).find(u=>u.measurementId===i);c&&(yield t[c.appId])}}catch(a){bt.error(a)}n("config",i,s)})}function jw(n,t,e,r,i){return p(this,null,function*(){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=yield jf(e);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&t[u.appId];if(l)s.push(l);else{s=[];break}}}s.length===0&&(s=Object.values(t)),yield Promise.all(s),n("event",r,i||{})}catch(s){bt.error(s)}})}function zw(n,t,e,r){function i(s,...o){return p(this,null,function*(){try{if(s==="event"){const[a,c]=o;yield jw(n,t,e,a,c)}else if(s==="config"){const[a,c]=o;yield qw(n,t,e,r,a,c)}else if(s==="consent"){const[a]=o;n("consent","update",a)}else if(s==="get"){const[a,c,u]=o;n("get",a,c,u)}else if(s==="set"){const[a]=o;n("set",a)}else n(s,...o)}catch(a){bt.error(a)}})}return i}function Gw(n,t,e,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=zw(s,n,t,e),{gtagCore:s,wrappedGtag:window[i]}}function Kw(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(lc)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=30,Hw=1e3;class Qw{constructor(t={},e=Hw){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const zf=new Qw;function Yw(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}function Xw(n){return p(this,null,function*(){var t;const{appId:e,apiKey:r}=n,i={method:"GET",headers:Yw(r)},s=Mw.replace("{app-id}",e),o=yield fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=yield o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch(c){}throw Rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()})}function Jw(r){return p(this,arguments,function*(n,t=zf,e){const{appId:i,apiKey:s,measurementId:o}=n.options;if(!i)throw Rt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw Rt.create("no-api-key")}const a=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new ev;return setTimeout(()=>p(this,null,function*(){c.abort()}),e!==void 0?e:Ow),Gf({appId:i,apiKey:s,measurementId:o},a,c,t)})}function Gf(s,o,a){return p(this,arguments,function*(n,{throttleEndTimeMillis:t,backoffCount:e},r,i=zf){var c;const{appId:u,measurementId:l}=n;try{yield Zw(r,t)}catch(h){if(l)return bt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:u,measurementId:l};throw h}try{const h=yield Xw(n);return i.deleteThrottleMetadata(u),h}catch(h){const d=h;if(!tv(d)){if(i.deleteThrottleMetadata(u),l)return bt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:u,measurementId:l};throw h}const m=Number((c=d==null?void 0:d.customData)===null||c===void 0?void 0:c.httpStatus)===503?wc(e,i.intervalMillis,Ww):wc(e,i.intervalMillis),I={throttleEndTimeMillis:Date.now()+m,backoffCount:e+1};return i.setThrottleMetadata(u,I),bt.debug(`Calling attemptFetch again in ${m} millis`),Gf(n,I,r,i)}})}function Zw(n,t){return new Promise((e,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(e,i);n.addEventListener(()=>{clearTimeout(s),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function tv(n){if(!(n instanceof we)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class ev{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}function nv(n,t,e,r,i){return p(this,null,function*(){if(i&&i.global){n("event",e,r);return}else{const s=yield t,o=Object.assign(Object.assign({},r),{send_to:s});n("event",e,o)}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(){return p(this,null,function*(){if(ra())try{yield Nl()}catch(n){return bt.warn(Rt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return bt.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0})}function iv(n,t,e,r,i,s,o){return p(this,null,function*(){var a;const c=Jw(n);c.then(m=>{e[m.measurementId]=m.appId,n.options.measurementId&&m.measurementId!==n.options.measurementId&&bt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>bt.error(m)),t.push(c);const u=rv().then(m=>{if(m)return r.getId()}),[l,h]=yield Promise.all([c,u]);Kw(s)||$w(s,l.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[kw]="firebase",d.update=!0,h!=null&&(d[Nw]=h),i("config",l.measurementId,d),l.measurementId})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(t){this.app=t}_delete(){return delete ir[this.app.options.appId],Promise.resolve()}}let ir={},Zu=[];const tl={};let Xs="dataLayer",ov="gtag",el,Kf,nl=!1;function av(){const n=[];if(Ng()&&n.push("This is a browser extension environment."),Og()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),e=Rt.create("invalid-analytics-context",{errorInfo:t});bt.warn(e.message)}}function cv(n,t,e){av();const r=n.options.appId;if(!r)throw Rt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)bt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(ir[r]!=null)throw Rt.create("already-exists",{id:r});if(!nl){Uw(Xs);const{wrappedGtag:s,gtagCore:o}=Gw(ir,Zu,tl,Xs,ov);Kf=s,el=o,nl=!0}return ir[r]=iv(n,Zu,tl,t,el,Xs,e),new sv(n)}function uv(n=$p()){n=yn(n);const t=Vr(n,qi);return t.isInitialized()?t.getImmediate():lv(n)}function lv(n,t={}){const e=Vr(n,qi);if(e.isInitialized()){const i=e.getImmediate();if(cr(t,e.getOptions()))return i;throw Rt.create("already-initialized")}return e.initialize({options:t})}function hv(n,t,e,r){n=yn(n),nv(Kf,ir[n.app.options.appId],t,e,r).catch(i=>bt.error(i))}const rl="@firebase/analytics",il="0.10.0";function dv(){ge(new te(qi,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return cv(r,i,e)},"PUBLIC")),ge(new te("analytics-internal",n,"PRIVATE")),zt(rl,il),zt(rl,il,"esm2017");function n(t){try{const e=t.getProvider(qi).getImmediate();return{logEvent:(r,i,s)=>hv(e,r,i,s)}}catch(e){throw Rt.create("interop-component-reg-failed",{reason:e})}}}dv();const fv={apiKey:"AIzaSyBncgEjBs0-XaANR9NV5tCcB9uW5RvZgB8",authDomain:"fueltracker-404614.firebaseapp.com",projectId:"fueltracker-404614",storageBucket:"fueltracker-404614.appspot.com",messagingSenderId:"705000208344",appId:"1:705000208344:web:19d437b326aad97e30e4ad",measurementId:"G-E2T0LQBCQJ"},Wf=Ml(fv);uv(Wf);const mv=hT(Wf,{localCache:xT()}),gv=()=>{const n="gasStation";return{getGasStation:e=>p(Hf,null,function*(){console.log("GET UID: ",e);const r=AT(uT(mv,n));return(yield VT(r)).docs.map(s=>{const o=s.data();return vt({},o)})})}},pv=Cr('<div class="flex flex-col max-w-lg h-screen justify-center items-center m-auto gap-6 p-4"><div class="flex gap-4"><img class=fade-in src=res/solid.svg width=165 height=166><img class=fade-in src=vite.svg width=140></div><div class="flex flex-col gap-4"><div class="flex gap-4 w-full justify-center">| <!>| </div><h2 class="font-bold text-lg">Solid Boilerplate</h2><p>Create solid application faster with solid boilerplate with pre configure project and component</p><div class=leading-4><h3 class="font-bold mb-2">Features</h3><ul class="list-inside text-sm"><li>- Pre-Setup Store</li><li>- Pre-Setup model type, interface</li><li>- Custom Store React Context Approach</li><li>- Router Ready</li><li>- Auth Ready</li><li>- Folder System</li><li>- Tailwind Integrated</li><li>- Loading Component</li><li>- Normalize Css Integrated</li><li>- Basic Animation CSS</li><li>- Page Layout base</li><li>- Build legacy Support ie 11</li></ul></div><div class="flex gap-4 items-center justify-center"><button class="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded">Open Loading</button><button class="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded">Count (<!>)'),_v=()=>{const[n,t]=le(0),[,e]=Sl(),r=gv();Wo(()=>{r.getGasStation("YOLO").then(s=>{console.log("GET RES: ",s)}).catch(s=>{console.log("get err: ",s)})});const i=()=>{e("loadingState","isLoading",!0),setTimeout(()=>{e("loadingState","isLoading",!1)},2e3)};return Q(na,{get children(){const s=pv(),o=s.firstChild,a=o.nextSibling,c=a.firstChild,u=c.firstChild,l=u.nextSibling;l.nextSibling;const h=c.nextSibling,d=h.nextSibling,m=d.nextSibling,I=m.nextSibling,y=I.firstChild,v=y.nextSibling,k=v.firstChild,C=k.nextSibling;return C.nextSibling,Wt(c,Q(Xn,{href:"/",class:"font-bold",children:"Home"}),u),Wt(c,Q(Xn,{href:"/about",class:"font-bold",children:"About"}),l),Wt(c,Q(Xn,{href:"/login",class:"font-bold",children:"Login"}),null),y.$$click=i,v.$$click=()=>{t(S=>S+1)},Wt(v,n,C),s}})};Zo(["click"]);const yv=()=>(Wo(()=>{console.log("HELLO LOGIN")}),Q(na,{get children(){return[Q(Xn,{href:"/",class:" font-bold",children:"Back"})," | This is Login Page"]}})),Iv=()=>(Wo(()=>{console.log("HELLO ABOUT")}),Q(na,{get children(){return[Q(Xn,{href:"/",class:" font-bold",children:"Back"})," | This is About Page"]}})),Ev={home:{path:"/",component:_v,requiredAuth:!1},login:{path:"/login",component:yv,requiredAuth:!1},about:{path:"/about",component:Iv,requiredAuth:!1}},Tv=n=>(n.requiredAuth,Q(Ec,n)),wv=()=>{const n=Object.entries(Ev).map(t=>{const[e,r]=t;return Ft(vt({},r),{key:e,path:r.path,component:r.component})});return Q(_g,{get children(){return Q(cg,{get source(){return jm()},get children(){return Q(ug,{get children(){return Q(Im,{each:n,children:t=>Tv(t)})}})}})}})};Cm(()=>Q(wv,{}),document.getElementById("root"))});export default vv();
