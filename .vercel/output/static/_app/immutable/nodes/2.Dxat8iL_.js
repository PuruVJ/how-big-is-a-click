import{s as Le,e as ce,n as Ce,r as Re}from"../chunks/scheduler.Dxh7RUl2.js";import{S as Be,i as Pe,e as N,s as P,t as ee,c as T,a as Q,y as pe,f as I,d as B,b as te,o as D,g as Z,h as d,z as Se,j as oe,A as Ie}from"../chunks/index.DoRAvCSG.js";import{e as xe,t as Me}from"../chunks/Toaster.svelte_svelte_type_style_lang.lV58C8Wx.js";import{p as Ue,i as ze,a as Fe}from"../chunks/entry.CXLUh8pS.js";function Oe(e){const t=JSON.parse(e);return t.data&&(t.data=Ue(t.data)),t}function De(e){return HTMLElement.prototype.cloneNode.call(e)}function je(e,t=()=>{}){const a=async({action:l,result:m,reset:i=!0,invalidateAll:y=!0})=>{m.type==="success"&&(i&&HTMLFormElement.prototype.reset.call(e),y&&await ze()),(location.origin+location.pathname===l.origin+l.pathname||m.type==="redirect"||m.type==="error")&&Fe(m)};async function s(l){var A,v,h,w;if(((A=l.submitter)!=null&&A.hasAttribute("formmethod")?l.submitter.formMethod:De(e).method)!=="post")return;l.preventDefault();const i=new URL((v=l.submitter)!=null&&v.hasAttribute("formaction")?l.submitter.formAction:De(e).action),y=new FormData(e),_=(h=l.submitter)==null?void 0:h.getAttribute("name");_&&y.append(_,((w=l.submitter)==null?void 0:w.getAttribute("value"))??"");const M=new AbortController;let f=!1;const g=await t({action:i,cancel:()=>f=!0,controller:M,formData:y,formElement:e,submitter:l.submitter})??a;if(f)return;let S;try{const o=await fetch(i,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:y,signal:M.signal});S=Oe(await o.text()),S.type==="error"&&(S.status=o.status)}catch(o){if((o==null?void 0:o.name)==="AbortError")return;S={type:"error",error:o}}g({action:i,formData:y,formElement:e,update:o=>a({action:i,result:S,reset:o==null?void 0:o.reset,invalidateAll:o==null?void 0:o.invalidateAll}),result:S})}return HTMLFormElement.prototype.addEventListener.call(e,"submit",s),{destroy(){HTMLFormElement.prototype.removeEventListener.call(e,"submit",s)}}}var me={dragStart:!0},Ne=(e,t,a)=>Math.min(Math.max(e,t),a),ge=e=>typeof e=="string",qe=([e,t],a,s)=>{const l=(m,i)=>i===0?0:Math.ceil(m/i)*i;return[l(a,e),l(s,t)]},Te=(e,t)=>e.some(a=>t.some(s=>a.contains(s)));function ve(e,t){if(e===void 0)return;if(be(e))return e.getBoundingClientRect();if(typeof e=="object"){const{top:s=0,left:l=0,right:m=0,bottom:i=0}=e;return{top:s,right:window.innerWidth-m,bottom:window.innerHeight-i,left:l}}if(e==="parent")return t.parentNode.getBoundingClientRect();const a=document.querySelector(e);if(a===null)throw new Error("The selector provided for bound doesn't exists in the document.");return a.getBoundingClientRect()}var ie=(e,t,a)=>e.style.setProperty(t,a),be=e=>e instanceof HTMLElement,ye=(e,t={})=>{let a,s,{bounds:l,axis:m="both",gpuAcceleration:i=!0,legacyTranslate:y=!0,transform:_,applyUserSelectHack:M=!0,disabled:f=!1,ignoreMultitouch:C=!1,recomputeBounds:g=me,grid:S,position:A,cancel:v,handle:h,defaultClass:w="neodrag",defaultClassDragging:o="neodrag-dragging",defaultClassDragged:k="neodrag-dragged",defaultPosition:le={x:0,y:0},onDragStart:ne,onDrag:$,onDragEnd:W}=t,q=!1,U=0,H=0,j=0,X=0,J=0,G=0,{x:K,y:z}=A?{x:(A==null?void 0:A.x)??0,y:(A==null?void 0:A.y)??0}:le;de(K,z);let u,r,c,p,L,ae="",re=!!A;g={...me,...g};let se=new Set;const ue=document.body.style,V=e.classList;function de(n=U,E=H){if(!_){if(y){let R=`${+n}px, ${+E}px`;return ie(e,"transform",i?`translate3d(${R}, 0)`:`translate(${R})`)}return ie(e,"translate",`${+n}px ${+E}px ${i?"1px":""}`)}const x=_({offsetX:n,offsetY:E,rootNode:e});ge(x)&&ie(e,"transform",x)}const fe=(n,E)=>{const x={offsetX:U,offsetY:H,rootNode:e,currentNode:L};e.dispatchEvent(new CustomEvent(n,{detail:x})),E==null||E(x)},he=addEventListener;he("pointerdown",we,!1),he("pointerup",Ee,!1),he("pointermove",Ae,!1),ie(e,"touch-action","none");const _e=()=>{let n=e.offsetWidth/r.width;return isNaN(n)&&(n=1),n};function we(n){if(f||n.button===2)return;if(se.add(n.pointerId),C&&se.size>1)return n.preventDefault();if(g.dragStart&&(u=ve(l,e)),ge(h)&&ge(v)&&h===v)throw new Error("`handle` selector can't be same as `cancel` selector");if(V.add(w),c=function(b,O){if(!b)return[O];if(be(b))return[b];if(Array.isArray(b))return b;const Y=O.querySelectorAll(b);if(Y===null)throw new Error("Selector passed for `handle` option should be child of the element on which the action is applied");return Array.from(Y.values())}(h,e),p=function(b,O){if(!b)return[];if(be(b))return[b];if(Array.isArray(b))return b;const Y=O.querySelectorAll(b);if(Y===null)throw new Error("Selector passed for `cancel` option should be child of the element on which the action is applied");return Array.from(Y.values())}(v,e),a=/(both|x)/.test(m),s=/(both|y)/.test(m),Te(p,c))throw new Error("Element being dragged can't be a child of the element on which `cancel` is applied");const E=n.composedPath()[0];if(!c.some(b=>{var O;return b.contains(E)||((O=b.shadowRoot)==null?void 0:O.contains(E))})||Te(p,[E]))return;L=c.length===1?e:c.find(b=>b.contains(E)),q=!0,r=e.getBoundingClientRect(),M&&(ae=ue.userSelect,ue.userSelect="none"),fe("neodrag:start",ne);const{clientX:x,clientY:R}=n,F=_e();a&&(j=x-K/F),s&&(X=R-z/F),u&&(J=x-r.left,G=R-r.top)}function Ee(n){se.delete(n.pointerId),q&&(g.dragEnd&&(u=ve(l,e)),V.remove(o),V.add(k),M&&(ue.userSelect=ae),fe("neodrag:end",W),a&&(j=U),s&&(X=H),q=!1)}function Ae(n){if(!q||C&&se.size>1)return;g.drag&&(u=ve(l,e)),V.add(o),n.preventDefault(),r=e.getBoundingClientRect();let E=n.clientX,x=n.clientY;const R=_e();if(u){const F={left:u.left+J,top:u.top+G,right:u.right+J-r.width,bottom:u.bottom+G-r.height};E=Ne(E,F.left,F.right),x=Ne(x,F.top,F.bottom)}if(Array.isArray(S)){let[F,b]=S;if(isNaN(+F)||F<0)throw new Error("1st argument of `grid` must be a valid positive number");if(isNaN(+b)||b<0)throw new Error("2nd argument of `grid` must be a valid positive number");let O=E-j,Y=x-X;[O,Y]=qe([F/R,b/R],O,Y),E=j+O,x=X+Y}a&&(U=Math.round((E-j)*R)),s&&(H=Math.round((x-X)*R)),K=U,z=H,fe("neodrag",$),de()}return{destroy:()=>{const n=removeEventListener;n("pointerdown",we,!1),n("pointerup",Ee,!1),n("pointermove",Ae,!1)},update:n=>{var x,R;m=n.axis||"both",f=n.disabled??!1,C=n.ignoreMultitouch??!1,h=n.handle,l=n.bounds,g=n.recomputeBounds??me,v=n.cancel,M=n.applyUserSelectHack??!0,S=n.grid,i=n.gpuAcceleration??!0,y=n.legacyTranslate??!0,_=n.transform;const E=V.contains(k);V.remove(w,k),w=n.defaultClass??"neodrag",o=n.defaultClassDragging??"neodrag-dragging",k=n.defaultClassDragged??"neodrag-dragged",V.add(w),E&&V.add(k),re&&(K=U=((x=n.position)==null?void 0:x.x)??U,z=H=((R=n.position)==null?void 0:R.y)??H,de())}}};function ke(e,t,a){const s=e.slice();return s[2]=t[a].pointer_type,s[7]=t[a].average_duration,s[8]=t[a].count,s}function He(e){let t,a,s=e[2]+"",l,m,i,y=Math.floor(e[7])+"",_,M,f=e[8]+"",C,g,S,A;return{c(){t=N("div"),a=N("p"),l=ee(s),m=P(),i=N("h2"),_=ee(y),M=P(),C=ee(f),g=P(),this.h()},l(v){t=T(v,"DIV",{class:!0});var h=Q(t);a=T(h,"P",{class:!0});var w=Q(a);l=te(w,s),w.forEach(B),m=I(h),i=T(h,"H2",{class:!0});var o=Q(i);_=te(o,y),o.forEach(B),M=I(h),C=te(h,f),g=I(h),h.forEach(B),this.h()},h(){D(a,"class","svelte-1eomhbe"),D(i,"class","svelte-1eomhbe"),D(t,"class","average svelte-1eomhbe")},m(v,h){Z(v,t,h),d(t,a),d(a,l),d(t,m),d(t,i),d(i,_),d(t,M),d(t,C),d(t,g),S||(A=ce(ye.call(null,t)),S=!0)},p(v,h){h&1&&s!==(s=v[2]+"")&&oe(l,s),h&1&&y!==(y=Math.floor(v[7])+"")&&oe(_,y),h&1&&f!==(f=v[8]+"")&&oe(C,f)},d(v){v&&B(t),S=!1,A()}}}function Xe(e){let t,a,s="How long does a click take?",l,m,i,y,_,M,f,C,g,S="Click me 🦄",A,v,h,w,o,k,le="Average",ne,$,W=Math.floor(e[0].average.average_duration)+"",q,U,H=e[0].average.count+"",j,X,J,G,K,z=xe(e[0].category_average),u=[];for(let r=0;r<z.length;r+=1)u[r]=He(ke(e,z,r));return{c(){t=N("form"),a=N("h1"),a.textContent=s,l=P(),m=N("br"),i=N("br"),y=P(),_=N("input"),M=P(),f=N("input"),C=P(),g=N("button"),g.textContent=S,A=P(),v=N("hr"),h=P(),w=N("section"),o=N("div"),k=N("p"),k.textContent=le,ne=P(),$=N("h2"),q=ee(W),U=P(),j=ee(H),X=ee(" clicks"),J=P();for(let r=0;r<u.length;r+=1)u[r].c();this.h()},l(r){t=T(r,"FORM",{method:!0,class:!0});var c=Q(t);a=T(c,"H1",{class:!0,"data-svelte-h":!0}),pe(a)!=="svelte-1wdixz6"&&(a.textContent=s),l=I(c),m=T(c,"BR",{}),i=T(c,"BR",{}),y=I(c),_=T(c,"INPUT",{type:!0,name:!0}),M=I(c),f=T(c,"INPUT",{type:!0,name:!0}),C=I(c),g=T(c,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),pe(g)!=="svelte-smjdyf"&&(g.textContent=S),c.forEach(B),A=I(r),v=T(r,"HR",{}),h=I(r),w=T(r,"SECTION",{class:!0});var p=Q(w);o=T(p,"DIV",{class:!0});var L=Q(o);k=T(L,"P",{class:!0,"data-svelte-h":!0}),pe(k)!=="svelte-7vx2zb"&&(k.textContent=le),ne=I(L),$=T(L,"H2",{class:!0});var ae=Q($);q=te(ae,W),ae.forEach(B),U=I(L),j=te(L,H),X=te(L," clicks"),L.forEach(B),J=I(p);for(let re=0;re<u.length;re+=1)u[re].l(p);p.forEach(B),this.h()},h(){D(a,"class","svelte-1eomhbe"),D(_,"type","hidden"),D(_,"name","duration"),_.value=e[1],D(f,"type","hidden"),D(f,"name","pointer-type"),f.value=e[2],D(g,"type","submit"),D(g,"class","svelte-1eomhbe"),D(t,"method","post"),D(t,"class","svelte-1eomhbe"),D(k,"class","svelte-1eomhbe"),D($,"class","svelte-1eomhbe"),D(o,"class","average svelte-1eomhbe"),D(w,"class","stats svelte-1eomhbe")},m(r,c){Z(r,t,c),d(t,a),d(t,l),d(t,m),d(t,i),d(t,y),d(t,_),d(t,M),d(t,f),d(t,C),d(t,g),Z(r,A,c),Z(r,v,c),Z(r,h,c),Z(r,w,c),d(w,o),d(o,k),d(o,ne),d(o,$),d($,q),d(o,U),d(o,j),d(o,X),d(w,J);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(w,null);G||(K=[ce(ye.call(null,a)),Se(g,"pointerdown",e[3]),Se(g,"pointerup",e[4]),ce(je.call(null,t,e[5])),ce(ye.call(null,o))],G=!0)},p(r,[c]){if(c&2&&(_.value=r[1]),c&4&&(f.value=r[2]),c&1&&W!==(W=Math.floor(r[0].average.average_duration)+"")&&oe(q,W),c&1&&H!==(H=r[0].average.count+"")&&oe(j,H),c&1){z=xe(r[0].category_average);let p;for(p=0;p<z.length;p+=1){const L=ke(r,z,p);u[p]?u[p].p(L,c):(u[p]=He(L),u[p].c(),u[p].m(w,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=z.length}},i:Ce,o:Ce,d(r){r&&(B(t),B(A),B(v),B(h),B(w)),Ie(u,r),G=!1,Re(K)}}}function Ye(e,t,a){let{data:s}=t,l,m=0,i="";function y(f){l=performance.now(),a(2,i=f.pointerType)}function _(){a(1,m=performance.now()-l)}const M=()=>async({update:f,result:C})=>{await f(),C.data.success?Me.success(C.data.message):Me.error(C.data.message)};return e.$$set=f=>{"data"in f&&a(0,s=f.data)},[s,m,i,y,_,M]}class Ge extends Be{constructor(t){super(),Pe(this,t,Ye,Xe,Le,{data:0})}}export{Ge as component};
