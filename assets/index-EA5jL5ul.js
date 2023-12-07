var Xe=Object.defineProperty;var Ye=(t,e,n)=>e in t?Xe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ve=(t,e,n)=>(Ye(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function C(){}function Ze(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function He(t){return t()}function Oe(){return Object.create(null)}function G(t){t.forEach(He)}function we(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function et(t){return Object.keys(t).length===0}function Ke(t,...e){if(t==null){for(const l of e)l(void 0);return C}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ue(t){let e;return Ke(t,n=>e=n)(),e}function Ne(t){return t??""}function f(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function j(t){t.parentNode&&t.parentNode.removeChild(t)}function ae(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function x(){return w(" ")}function tt(){return w("")}function U(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function nt(t){return Array.from(t.childNodes)}function O(t,e){e=""+e,t.data!==e&&(t.data=e)}function ke(t,e){t.value=e??""}let se;function L(t){se=t}function lt(){if(!se)throw new Error("Function called outside component initialization");return se}const Y=[],Ee=[];let Z=[];const qe=[],rt=Promise.resolve();let ye=!1;function it(){ye||(ye=!0,rt.then(Ce))}function Ie(t){Z.push(t)}const be=new Set;let W=0;function Ce(){if(W!==0)return;const t=se;do{try{for(;W<Y.length;){const e=Y[W];W++,L(e),st(e.$$)}}catch(e){throw Y.length=0,W=0,e}for(L(null),Y.length=0,W=0;Ee.length;)Ee.pop()();for(let e=0;e<Z.length;e+=1){const n=Z[e];be.has(n)||(be.add(n),n())}Z.length=0}while(Y.length);for(;qe.length;)qe.pop()();ye=!1,be.clear(),L(t)}function st(t){if(t.fragment!==null){t.update(),G(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ie)}}function ot(t){const e=[],n=[];Z.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),Z=e}const ce=new Set;let Q;function fe(){Q={r:0,c:[],p:Q}}function de(){Q.r||G(Q.c),Q=Q.p}function M(t,e){t&&t.i&&(ce.delete(t),t.i(e))}function T(t,e,n,l){if(t&&t.o){if(ce.has(t))return;ce.add(t),Q.c.push(()=>{ce.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function ct(t,e){const n=e.token={};function l(r,i,u,s){if(e.token!==n)return;e.resolved=s;let c=e.ctx;u!==void 0&&(c=c.slice(),c[u]=s);const o=r&&(e.current=r)(c);let a=!1;e.block&&(e.blocks?e.blocks.forEach((m,d)=>{d!==i&&m&&(fe(),T(m,1,1,()=>{e.blocks[d]===m&&(e.blocks[d]=null)}),de())}):e.block.d(1),o.c(),M(o,1),o.m(e.mount(),e.anchor),a=!0),e.block=o,e.blocks&&(e.blocks[i]=o),a&&Ce()}if(Ze(t)){const r=lt();if(t.then(i=>{L(r),l(e.then,1,e.value,i),L(null)},i=>{if(L(r),l(e.catch,2,e.error,i),L(null),!e.hasCatch)throw i}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,t),!0;e.resolved=t}}function ut(t,e,n){const l=e.slice(),{resolved:r}=t;t.current===t.then&&(l[t.value]=r),t.current===t.catch&&(l[t.error]=r),t.block.p(l,n)}function H(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function K(t){t&&t.c()}function F(t,e,n){const{fragment:l,after_update:r}=t.$$;l&&l.m(e,n),Ie(()=>{const i=t.$$.on_mount.map(He).filter(we);t.$$.on_destroy?t.$$.on_destroy.push(...i):G(i),t.$$.on_mount=[]}),r.forEach(Ie)}function D(t,e){const n=t.$$;n.fragment!==null&&(ot(n.after_update),G(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(Y.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,n,l,r,i,u=null,s=[-1]){const c=se;L(t);const o=t.$$={fragment:null,ctx:[],props:i,update:C,not_equal:r,bound:Oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Oe(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};u&&u(o.root);let a=!1;if(o.ctx=n?n(t,e.props||{},(m,d,...p)=>{const k=p.length?p[0]:d;return o.ctx&&r(o.ctx[m],o.ctx[m]=k)&&(!o.skip_bound&&o.bound[m]&&o.bound[m](k),a&&at(t,m)),d}):[],o.update(),a=!0,G(o.before_update),o.fragment=l?l(o.ctx):!1,e.target){if(e.hydrate){const m=nt(e.target);o.fragment&&o.fragment.l(m),m.forEach(j)}else o.fragment&&o.fragment.c();e.intro&&M(t.$$.fragment),F(t,e.target,e.anchor),Ce()}L(c)}class z{constructor(){ve(this,"$$");ve(this,"$$set")}$destroy(){D(this,1),this.$destroy=C}$on(e,n){if(!we(n))return C;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ft="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ft);const X=[];function dt(t,e){return{subscribe:Ve(t,e).subscribe}}function Ve(t,e=C){let n;const l=new Set;function r(s){if(B(t,s)&&(t=s,n)){const c=!X.length;for(const o of l)o[1](),X.push(o,t);if(c){for(let o=0;o<X.length;o+=2)X[o][0](X[o+1]);X.length=0}}}function i(s){r(s(t))}function u(s,c=C){const o=[s,c];return l.add(o),l.size===1&&(n=e(r,i)||C),s(t),()=>{l.delete(o),l.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:u}}function J(t,e,n){const l=!Array.isArray(t),r=l?[t]:t;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return dt(n,(u,s)=>{let c=!1;const o=[];let a=0,m=C;const d=()=>{if(a)return;m();const k=e(l?o[0]:o,u,s);i?u(k):m=we(k)?k:C},p=r.map((k,h)=>Ke(k,I=>{o[h]=I,a&=~(1<<h),c&&d()},()=>{a|=1<<h}));return c=!0,d(),function(){G(p),m(),c=!1}})}function mt(t){const e=typeof t=="object"?t:{},n=typeof e.name=="string"?e.name:"",l=typeof e.price=="number"?e.price:0;return{...e,name:n,price:l}}function ee(t){return typeof t.price=="number"}function Ge(t){return!ee(t)}function pt(t){const e=typeof t=="object"?t:{},n=typeof e.name=="string"?e.name:"",l=typeof e.isAffectedByMultiplier=="boolean"?e.isAffectedByMultiplier:!1,r=Array.isArray(e.price)?e.price.map(mt):typeof e.price=="number"?e.price:0;return typeof r=="number"?{...e,name:n,isAffectedByMultiplier:l,price:r}:{...e,name:n,isAffectedByMultiplier:l,price:r}}const E=Ve({itemCategories:[],defaultOverhead:0,multipliers:[],overhead:0,addition:0,discount:0,selectedMultiplierIndex:0}),ht=J(E,t=>({multiplier:t.multipliers.length===0?1:t.multipliers[t.selectedMultiplierIndex].factor})),gt=J([E,ht],([t,e])=>({...t,...e,itemCategories:t.itemCategories.map(n=>({...n,items:n.items.map(l=>{const r=ee(l)?l.isSelected?l.price:0:l.selectedIndex>=0?l.price[l.selectedIndex].price:0;return{...l,multipliedPrice:l.isAffectedByMultiplier?r*e.multiplier:r}})}))})),Je=J(gt,t=>({...t,itemCategories:t.itemCategories.map(e=>({...e,total:e.items.reduce((n,l)=>n+l.multipliedPrice,0)}))})),me=J(Je,t=>({total:t.itemCategories.reduce((e,n)=>e+n.total,0)})),Qe=J([E,me],([{addition:t},{total:e}])=>({additionTotal:e*t})),We=J([E,me],([{discount:t},{total:e}])=>({discountTotal:e*t})),_t=J([E,me,Qe,We],([{overhead:t},{total:e},{additionTotal:n},{discountTotal:l}])=>({finalTotal:e+t+n-l})),V=J([Je,me,Qe,We,_t],([t,e,n,l,r])=>({...t,...e,...n,...l,...r})),vt=t=>E.update(e=>({...e,...t,itemCategories:t.itemCategories.map(n=>({...n,items:n.items.map(l=>ee(l)?{...l,isSelected:!1,isAffectedByMultiplier:l.isAffectedByMultiplier??!1}:{...l,selectedIndex:-1,isAffectedByMultiplier:l.isAffectedByMultiplier??!1})})),overhead:t.defaultOverhead,selectedMultiplierIndex:(()=>{const n=t.multipliers.findIndex(l=>l.factor===1);return n<0?0:n})()})),pe=t=>(e,n)=>{n<0||e<0||E.update(l=>{if(n<0||e<0||e>=l.itemCategories.length)return l;const r=l.itemCategories[e];if(n>=r.items.length)return l;const i=t(r.items[n]);return i===!1?l:{...l,itemCategories:[...l.itemCategories.slice(0,e),{...r,items:[...r.items.slice(0,n),i,...r.items.slice(n+1)]},...l.itemCategories.slice(e+1)]}})},bt=pe(t=>ee(t)?{...t,isSelected:!0}:!1),yt=pe(t=>ee(t)?{...t,isSelected:!1}:!1),It=(t,e,n)=>pe(l=>n<0||!Ge(l)||n>=l.price.length?!1:{...l,selectedIndex:n})(t,e),wt=pe(t=>Ge(t)?{...t,selectedIndex:-1}:!1),kt=t=>E.update(e=>({...e,overhead:isNaN(t)?0:t})),Ct=t=>E.update(e=>({...e,addition:isNaN(t)?0:t})),jt=t=>E.update(e=>({...e,discount:isNaN(t)?0:t})),St=t=>E.update(e=>({...e,selectedMultiplierIndex:t}));function Be(t,e,n){const l=t.slice();return l[4]=e[n],l[6]=n,l}function Pe(t){let e,n=t[4]+"",l;return{c(){e=_("option"),l=w(n),e.__value=t[6],ke(e,e.__value)},m(r,i){A(r,e,i),f(e,l)},p(r,i){i&1&&n!==(n=r[4]+"")&&O(l,n)},d(r){r&&j(e)}}}function xt(t){let e,n,l,r,i,u=H(t[0]),s=[];for(let c=0;c<u.length;c+=1)s[c]=Pe(Be(t,u,c));return{c(){e=_("label"),n=w(`Faktor:\r
    `),l=_("select");for(let c=0;c<s.length;c+=1)s[c].c();v(l,"class","svelte-bxciq0")},m(c,o){A(c,e,o),f(e,n),f(e,l);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(l,null);r||(i=U(l,"change",t[1]),r=!0)},p(c,[o]){if(o&1){u=H(c[0]);let a;for(a=0;a<u.length;a+=1){const m=Be(c,u,a);s[a]?s[a].p(m,o):(s[a]=Pe(m),s[a].c(),s[a].m(l,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=u.length}},i:C,o:C,d(c){c&&j(e),ae(s,c),r=!1,i()}}}function At(t,e,n){let l,{multipliers:r,selectedMultiplierIndex:i}=ue(V);V.subscribe(s=>{n(2,r=s.multipliers),i=s.selectedMultiplierIndex});const u=s=>{const c=parseInt(s.currentTarget.value);St(c)};return t.$$.update=()=>{t.$$.dirty&4&&n(0,l=r.map(({name:s})=>s))},[l,u,r]}class Mt extends z{constructor(e){super(),R(this,e,At,xt,B,{})}}function $t(t){let e,n,l,r,i,u,s,c,o,a,m,d,p,k,h,I,g,y,b,S,te,je,ne,oe,Se,q,xe,le,Ae,he,Me,re,$e,ge,N,_e,Te;return l=new Mt({}),{c(){e=_("div"),n=_("div"),K(l.$$.fragment),r=x(),i=_("span"),u=w("Teilekosten: "),s=w(t[2]),c=x(),o=_("div"),a=_("label"),m=w(`Fixkosten:\r
            `),d=_("input"),p=x(),k=_("div"),h=_("label"),I=w(`Aufschlag (%):\r
            `),g=_("input"),y=x(),b=_("span"),S=w("+"),te=w(t[4]),je=x(),ne=_("div"),oe=_("label"),Se=w(`Rabatt (%):\r
            `),q=_("input"),xe=x(),le=_("span"),Ae=w("-"),he=w(t[3]),Me=x(),re=_("span"),$e=w("Endpreis: "),ge=w(t[1]),v(i,"class","bold svelte-1pja28o"),v(d,"type","number"),v(d,"min","0"),v(d,"max","1000000"),d.value=t[0],v(d,"class","svelte-1pja28o"),v(g,"type","number"),v(g,"min","0"),v(g,"max","1000"),g.value=t[6],v(g,"class","svelte-1pja28o"),v(b,"class","red svelte-1pja28o"),v(q,"type","number"),v(q,"min","0"),v(q,"max","100"),q.value=t[5],v(q,"class","svelte-1pja28o"),v(le,"class","green svelte-1pja28o"),v(re,"class","bolder svelte-1pja28o"),v(e,"class","container svelte-1pja28o")},m($,P){A($,e,P),f(e,n),F(l,n,null),f(e,r),f(e,i),f(i,u),f(i,s),f(e,c),f(e,o),f(o,a),f(a,m),f(a,d),f(e,p),f(e,k),f(k,h),f(h,I),f(h,g),f(k,y),f(k,b),f(b,S),f(b,te),f(e,je),f(e,ne),f(ne,oe),f(oe,Se),f(oe,q),f(ne,xe),f(ne,le),f(le,Ae),f(le,he),f(e,Me),f(e,re),f(re,$e),f(re,ge),N=!0,_e||(Te=[U(d,"change",t[7]),U(g,"change",t[8]),U(q,"change",t[9])],_e=!0)},p($,[P]){(!N||P&4)&&O(s,$[2]),(!N||P&1&&d.value!==$[0])&&(d.value=$[0]),(!N||P&64&&g.value!==$[6])&&(g.value=$[6]),(!N||P&16)&&O(te,$[4]),(!N||P&32&&q.value!==$[5])&&(q.value=$[5]),(!N||P&8)&&O(he,$[3]),(!N||P&2)&&O(ge,$[1])},i($){N||(M(l.$$.fragment,$),N=!0)},o($){T(l.$$.fragment,$),N=!1},d($){$&&j(e),D(l),_e=!1,G(Te)}}}function Tt(t,e,n){let l,r,i,u,s,c,{overhead:o,total:a,addition:m,additionTotal:d,discount:p,discountTotal:k,finalTotal:h}=ue(V);V.subscribe(b=>{n(0,o=b.overhead),n(10,a=b.total),n(11,m=b.addition),n(12,d=b.additionTotal),n(13,p=b.discount),n(14,k=b.discountTotal),n(15,h=b.finalTotal)});const I=b=>{const S=parseFloat(b.currentTarget.value);kt(S)},g=b=>{const S=parseFloat(b.currentTarget.value);Ct(S/100)},y=b=>{const S=parseFloat(b.currentTarget.value);jt(S/100)};return t.$$.update=()=>{t.$$.dirty&2048&&n(6,l=Math.floor(m*100)),t.$$.dirty&8192&&n(5,r=Math.floor(p*100)),t.$$.dirty&4096&&n(4,i=Math.floor(d)),t.$$.dirty&16384&&n(3,u=Math.floor(k)),t.$$.dirty&1024&&n(2,s=Math.floor(a)),t.$$.dirty&32768&&n(1,c=Math.floor(h))},[o,c,s,u,i,r,l,I,g,y,a,m,d,p,k,h]}class Ot extends z{constructor(e){super(),R(this,e,Tt,$t,B,{})}}function Nt(t){let e;return{c(){e=_("div"),e.innerHTML='<img src="./logo-128.png" alt="LSC Nord" class="svelte-1uiv16u"/> <span class="title svelte-1uiv16u">Preis-Rechner</span>',v(e,"class","container svelte-1uiv16u")},m(n,l){A(n,e,l)},p:C,i:C,o:C,d(n){n&&j(e)}}}class Et extends z{constructor(e){super(),R(this,e,null,Nt,B,{})}}function Le(t,e,n){const l=t.slice();return l[9]=e[n],l[11]=n,l}function Fe(t){let e,n=t[9].name+"",l,r,i=t[9].price+"",u,s,c,o,a;function m(){return t[8](t[11])}return{c(){e=_("option"),l=w(n),r=w(" ("),u=w(i),s=w(")"),e.__value=t[11],ke(e,e.__value),e.selected=c=t[11]===t[0]},m(d,p){A(d,e,p),f(e,l),f(e,r),f(e,u),f(e,s),o||(a=U(e,"select",m),o=!0)},p(d,p){t=d,p&2&&n!==(n=t[9].name+"")&&O(l,n),p&2&&i!==(i=t[9].price+"")&&O(u,i),p&1&&c!==(c=t[11]===t[0])&&(e.selected=c)},d(d){d&&j(e),o=!1,a()}}}function qt(t){let e,n,l,r,i,u=H(t[1]),s=[];for(let c=0;c<u.length;c+=1)s[c]=Fe(Le(t,u,c));return{c(){e=_("select"),n=_("option");for(let c=0;c<s.length;c+=1)s[c].c();n.__value=-1,ke(n,n.__value),n.selected=l=t[0]<0,v(e,"class","svelte-5tp6ra")},m(c,o){A(c,e,o),f(e,n);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null);r||(i=[U(n,"select",t[3]),U(e,"change",t[4])],r=!0)},p(c,[o]){if(o&1&&l!==(l=c[0]<0)&&(n.selected=l),o&7){u=H(c[1]);let a;for(a=0;a<u.length;a+=1){const m=Le(c,u,a);s[a]?s[a].p(m,o):(s[a]=Fe(m),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=u.length}},i:C,o:C,d(c){c&&j(e),ae(s,c),r=!1,G(i)}}}function Bt(t,e,n){let l,r,{item:i}=e,{categoryIndex:u}=e,{itemIndex:s}=e;const c=d=>It(u,s,d),o=()=>wt(u,s),a=d=>{const p=parseInt(d.currentTarget.value);return p<0?o():c(p)},m=d=>c(d);return t.$$set=d=>{"item"in d&&n(5,i=d.item),"categoryIndex"in d&&n(6,u=d.categoryIndex),"itemIndex"in d&&n(7,s=d.itemIndex)},t.$$.update=()=>{t.$$.dirty&32&&n(1,l=i.price),t.$$.dirty&32&&n(0,r=i.selectedIndex)},[r,l,c,o,a,i,u,s,m]}class Pt extends z{constructor(e){super(),R(this,e,Bt,qt,B,{item:5,categoryIndex:6,itemIndex:7})}}function Lt(t){let e,n,l,r,i,u,s,c;return{c(){e=_("input"),n=x(),l=_("span"),r=w("("),i=w(t[0]),u=w(")"),v(e,"type","checkbox"),e.checked=t[1]},m(o,a){A(o,e,a),A(o,n,a),A(o,l,a),f(l,r),f(l,i),f(l,u),s||(c=U(e,"change",t[2]),s=!0)},p(o,[a]){a&2&&(e.checked=o[1]),a&1&&O(i,o[0])},i:C,o:C,d(o){o&&(j(e),j(n),j(l)),s=!1,c()}}}function Ft(t,e,n){let l,r,{item:i}=e,{categoryIndex:u}=e,{itemIndex:s}=e;const c=o=>o.currentTarget.checked?bt(u,s):yt(u,s);return t.$$set=o=>{"item"in o&&n(3,i=o.item),"categoryIndex"in o&&n(4,u=o.categoryIndex),"itemIndex"in o&&n(5,s=o.itemIndex)},t.$$.update=()=>{t.$$.dirty&8&&n(1,l=i.isSelected),t.$$.dirty&8&&n(0,r=i.price)},[r,l,c,i,u,s]}class Dt extends z{constructor(e){super(),R(this,e,Ft,Lt,B,{item:3,categoryIndex:4,itemIndex:5})}}function Rt(t){let e,n;return e=new Pt({props:{item:t[0],categoryIndex:t[1],itemIndex:t[2]}}),{c(){K(e.$$.fragment)},m(l,r){F(e,l,r),n=!0},p(l,r){const i={};r&1&&(i.item=l[0]),r&2&&(i.categoryIndex=l[1]),r&4&&(i.itemIndex=l[2]),e.$set(i)},i(l){n||(M(e.$$.fragment,l),n=!0)},o(l){T(e.$$.fragment,l),n=!1},d(l){D(e,l)}}}function zt(t){let e,n;return e=new Dt({props:{item:t[0],categoryIndex:t[1],itemIndex:t[2]}}),{c(){K(e.$$.fragment)},m(l,r){F(e,l,r),n=!0},p(l,r){const i={};r&1&&(i.item=l[0]),r&2&&(i.categoryIndex=l[1]),r&4&&(i.itemIndex=l[2]),e.$set(i)},i(l){n||(M(e.$$.fragment,l),n=!0)},o(l){T(e.$$.fragment,l),n=!1},d(l){D(e,l)}}}function Ut(t){let e,n,l,r,i;const u=[zt,Rt],s=[];function c(o,a){return a&1&&(e=null),e==null&&(e=!!ee(o[0])),e?0:1}return n=c(t,-1),l=s[n]=u[n](t),{c(){l.c(),r=tt()},m(o,a){s[n].m(o,a),A(o,r,a),i=!0},p(o,[a]){let m=n;n=c(o,a),n===m?s[n].p(o,a):(fe(),T(s[m],1,1,()=>{s[m]=null}),de(),l=s[n],l?l.p(o,a):(l=s[n]=u[n](o),l.c()),M(l,1),l.m(r.parentNode,r))},i(o){i||(M(l),i=!0)},o(o){T(l),i=!1},d(o){o&&j(r),s[n].d(o)}}}function Ht(t,e,n){let{item:l}=e,{categoryIndex:r}=e,{itemIndex:i}=e;return t.$$set=u=>{"item"in u&&n(0,l=u.item),"categoryIndex"in u&&n(1,r=u.categoryIndex),"itemIndex"in u&&n(2,i=u.itemIndex)},[l,r,i]}class Kt extends z{constructor(e){super(),R(this,e,Ht,Ut,B,{item:0,categoryIndex:1,itemIndex:2})}}function De(t,e,n){const l=t.slice();l[7]=e[n],l[10]=n;const r=l[7].isAffectedByMultiplier&&l[1]!==1?l[1]<1?"green":"red":"";return l[8]=r,l}function Re(t){let e,n,l,r=t[7].name+"",i,u,s,c,o,a,m,d,p=t[7].multipliedPrice+"",k,h,I,g;return o=new Kt({props:{item:t[7],categoryIndex:t[0],itemIndex:t[10]}}),{c(){e=_("div"),n=_("div"),l=_("span"),i=w(r),s=x(),c=_("div"),K(o.$$.fragment),a=x(),m=_("div"),d=_("span"),k=w(p),I=x(),v(l,"class",u=Ne(t[8])+" svelte-1uq3xwj"),v(n,"class","column svelte-1uq3xwj"),v(c,"class","column svelte-1uq3xwj"),v(d,"class",h="left "+t[8]+" svelte-1uq3xwj"),v(m,"class","column svelte-1uq3xwj"),v(e,"class","row svelte-1uq3xwj")},m(y,b){A(y,e,b),f(e,n),f(n,l),f(l,i),f(e,s),f(e,c),F(o,c,null),f(e,a),f(e,m),f(m,d),f(d,k),f(e,I),g=!0},p(y,b){(!g||b&8)&&r!==(r=y[7].name+"")&&O(i,r),(!g||b&10&&u!==(u=Ne(y[8])+" svelte-1uq3xwj"))&&v(l,"class",u);const S={};b&8&&(S.item=y[7]),b&1&&(S.categoryIndex=y[0]),o.$set(S),(!g||b&8)&&p!==(p=y[7].multipliedPrice+"")&&O(k,p),(!g||b&10&&h!==(h="left "+y[8]+" svelte-1uq3xwj"))&&v(d,"class",h)},i(y){g||(M(o.$$.fragment,y),g=!0)},o(y){T(o.$$.fragment,y),g=!1},d(y){y&&j(e),D(o)}}}function Vt(t){let e,n,l,r,i,u,s=(t[2]===0?"":t[2])+"",c,o,a,m,d=H(t[3]),p=[];for(let h=0;h<d.length;h+=1)p[h]=Re(De(t,d,h));const k=h=>T(p[h],1,1,()=>{p[h]=null});return{c(){e=_("div"),n=_("div"),l=_("span"),r=w(t[4]),i=x(),u=_("span"),c=w(s),o=x(),a=_("div");for(let h=0;h<p.length;h+=1)p[h].c();v(n,"class","header svelte-1uq3xwj"),v(a,"class","body table svelte-1uq3xwj"),v(e,"class","container svelte-1uq3xwj")},m(h,I){A(h,e,I),f(e,n),f(n,l),f(l,r),f(n,i),f(n,u),f(u,c),f(e,o),f(e,a);for(let g=0;g<p.length;g+=1)p[g]&&p[g].m(a,null);m=!0},p(h,[I]){if((!m||I&16)&&O(r,h[4]),(!m||I&4)&&s!==(s=(h[2]===0?"":h[2])+"")&&O(c,s),I&11){d=H(h[3]);let g;for(g=0;g<d.length;g+=1){const y=De(h,d,g);p[g]?(p[g].p(y,I),M(p[g],1)):(p[g]=Re(y),p[g].c(),M(p[g],1),p[g].m(a,null))}for(fe(),g=d.length;g<p.length;g+=1)k(g);de()}},i(h){if(!m){for(let I=0;I<d.length;I+=1)M(p[I]);m=!0}},o(h){p=p.filter(Boolean);for(let I=0;I<p.length;I+=1)T(p[I]);m=!1},d(h){h&&j(e),ae(p,h)}}}function Gt(t,e,n){let l,r,i,u,{categoryIndex:s}=e,{itemCategories:c,multiplier:o}=ue(V);return V.subscribe(a=>n(5,{itemCategories:c,multiplier:o}=a,c,n(1,o))),t.$$set=a=>{"categoryIndex"in a&&n(0,s=a.categoryIndex)},t.$$.update=()=>{t.$$.dirty&2&&console.log(o),t.$$.dirty&33&&n(6,l=c[s]),t.$$.dirty&64&&n(4,r=l.name),t.$$.dirty&64&&n(3,i=l.items),t.$$.dirty&64&&n(2,u=l.total)},[s,o,u,i,r,c,l]}class Jt extends z{constructor(e){super(),R(this,e,Gt,Vt,B,{categoryIndex:0})}}function ze(t,e,n){const l=t.slice();return l[2]=e[n],l[4]=n,l}function Ue(t){let e,n,l,r;return n=new Jt({props:{categoryIndex:t[4]}}),{c(){e=_("div"),K(n.$$.fragment),l=x(),v(e,"class","svelte-jc7v4p")},m(i,u){A(i,e,u),F(n,e,null),f(e,l),r=!0},p:C,i(i){r||(M(n.$$.fragment,i),r=!0)},o(i){T(n.$$.fragment,i),r=!1},d(i){i&&j(e),D(n)}}}function Qt(t){let e,n,l=H(t[0]),r=[];for(let u=0;u<l.length;u+=1)r[u]=Ue(ze(t,l,u));const i=u=>T(r[u],1,1,()=>{r[u]=null});return{c(){e=_("div");for(let u=0;u<r.length;u+=1)r[u].c();v(e,"class","container svelte-jc7v4p")},m(u,s){A(u,e,s);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(u,[s]){if(s&1){l=H(u[0]);let c;for(c=0;c<l.length;c+=1){const o=ze(u,l,c);r[c]?(r[c].p(o,s),M(r[c],1)):(r[c]=Ue(o),r[c].c(),M(r[c],1),r[c].m(e,null))}for(fe(),c=l.length;c<r.length;c+=1)i(c);de()}},i(u){if(!n){for(let s=0;s<l.length;s+=1)M(r[s]);n=!0}},o(u){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)T(r[s]);n=!1},d(u){u&&j(e),ae(r,u)}}}function Wt(t,e,n){let l,r=ue(V);return V.subscribe(i=>n(1,r=i)),t.$$.update=()=>{t.$$.dirty&2&&n(0,l=r.itemCategories)},[l,r]}class Xt extends z{constructor(e){super(),R(this,e,Wt,Qt,B,{})}}function Yt(t){const e=typeof t=="object"?t:{},n=typeof e.name=="string"?e.name:"",l=Array.isArray(e.items)?e.items.map(pt):[];return{...e,name:n,items:l}}function Zt(t){const e=typeof t=="object"?t:{},n=typeof e.name=="string"?e.name:"",l=typeof e.factor=="number"?e.factor:1;return{...e,name:n,factor:l}}function en(t){const e=typeof t=="object"?t:{},n=Array.isArray(e.itemCategories)?e.itemCategories.map(Yt):[],l=typeof e.defaultOverhead=="number"?e.defaultOverhead:0,r=Array.isArray(e.multipliers)?e.multipliers.map(Zt):[];return{...e,itemCategories:n,defaultOverhead:l,multipliers:r}}function tn(t){let e,n=t[2]+"",l;return{c(){e=w("Failed to load data: "),l=w(n)},m(r,i){A(r,e,i),A(r,l,i)},p:C,i:C,o:C,d(r){r&&(j(e),j(l))}}}function nn(t){let e,n;return e=new Xt({}),{c(){K(e.$$.fragment)},m(l,r){F(e,l,r),n=!0},p:C,i(l){n||(M(e.$$.fragment,l),n=!0)},o(l){T(e.$$.fragment,l),n=!1},d(l){D(e,l)}}}function ln(t){let e;return{c(){e=w("Loading data...")},m(n,l){A(n,e,l)},p:C,i:C,o:C,d(n){n&&j(e)}}}function rn(t){let e,n,l,r,i,u,s,c,o,a,m,d,p,k,h,I,g;s=new Et({});let y={ctx:t,current:null,token:null,hasCatch:!0,pending:ln,then:nn,catch:tn,error:2,blocks:[,,,]};return ct(t[0],y),I=new Ot({}),{c(){e=_("meta"),n=_("link"),l=_("meta"),r=x(),i=_("div"),u=_("div"),K(s.$$.fragment),c=x(),o=_("div"),a=x(),m=_("div"),y.block.c(),d=x(),p=_("div"),k=x(),h=_("div"),K(I.$$.fragment),v(e,"charset","UTF-8"),v(n,"rel","icon"),v(n,"type","image/png"),v(n,"href","/logo-32.png"),v(l,"name","viewport"),v(l,"content","width=device-width, initial-scale=1.0"),document.title="LSC Nord Tuning Rechner",v(u,"class","header pseudo-header svelte-1gv9pvl"),v(o,"class","pseudo-header svelte-1gv9pvl"),v(p,"class","pseudo-footer svelte-1gv9pvl"),v(h,"class","footer svelte-1gv9pvl"),v(i,"class","container svelte-1gv9pvl")},m(b,S){f(document.head,e),f(document.head,n),f(document.head,l),A(b,r,S),A(b,i,S),f(i,u),F(s,u,null),f(i,c),f(i,o),f(i,a),f(i,m),y.block.m(m,y.anchor=null),y.mount=()=>m,y.anchor=null,f(i,d),f(i,p),f(i,k),f(i,h),F(I,h,null),g=!0},p(b,[S]){t=b,ut(y,t,S)},i(b){g||(M(s.$$.fragment,b),M(y.block),M(I.$$.fragment,b),g=!0)},o(b){T(s.$$.fragment,b);for(let S=0;S<3;S+=1){const te=y.blocks[S];T(te)}T(I.$$.fragment,b),g=!1},d(b){b&&(j(r),j(i)),j(e),j(n),j(l),D(s),y.block.d(),y.token=null,y=null,D(I)}}}function sn(t){let n=(async()=>{const r=await(await fetch("/data.json")).json();return en(r)})();return n.then(l=>vt(l)),[n]}class on extends z{constructor(e){super(),R(this,e,sn,rn,B,{})}}let ie=document.getElementById("app");ie===null&&(ie=document.createElement("div"),ie.id="app",document.body.append(ie));new on({target:ie});
