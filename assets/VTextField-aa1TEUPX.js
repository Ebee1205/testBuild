import{a as j,m as Z,aQ as fe,ba as ve,g as U,E as y,u as z,c as l,G as ee,ap as ae,an as me,I as Q,aq as X,j as he,n as ge,q as be,s as ye,z as xe,C as Ce,aR as Ve,P as _e,U as D,av as Pe,aj as we,as as Ie,a5 as Fe,aG as Re,L as Se,bb as Be,e as ke,F as M,M as W,a9 as pe,bc as Oe,bd as Te,O as Ae,Q as De,H as Ee,be as $e,aE as ne,bf as Le}from"./index-CPnsM1d-.js";import{a as Me,c as We,u as ie,d as Ne,m as je,V as le}from"./VInput-Bmougzpl.js";class N{constructor(i){let{x:a,y:o,width:t,height:n}=i;this.x=a,this.y=o,this.width=t,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function nt(e,i){return{x:{before:Math.max(0,i.left-e.left),after:Math.max(0,e.right-i.right)},y:{before:Math.max(0,i.top-e.top),after:Math.max(0,e.bottom-i.bottom)}}}function lt(e){return Array.isArray(e)?new N({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Ue(e){const i=e.getBoundingClientRect(),a=getComputedStyle(e),o=a.transform;if(o){let t,n,r,u,c;if(o.startsWith("matrix3d("))t=o.slice(9,-1).split(/, /),n=+t[0],r=+t[5],u=+t[12],c=+t[13];else if(o.startsWith("matrix("))t=o.slice(7,-1).split(/, /),n=+t[0],r=+t[3],u=+t[4],c=+t[5];else return new N(i);const d=a.transformOrigin,m=i.x-u-(1-n)*parseFloat(d),h=i.y-c-(1-r)*parseFloat(d.slice(d.indexOf(" ")+1)),F=n?i.width/n:e.offsetWidth+1,w=r?i.height/r:e.offsetHeight+1;return new N({x:m,y:h,width:F,height:w})}else return new N(i)}function ze(e,i,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let o;try{o=e.animate(i,a)}catch{return{finished:Promise.resolve()}}return typeof o.finished>"u"&&(o.finished=new Promise(t=>{o.onfinish=()=>{t(o)}})),o}const qe="cubic-bezier(0.4, 0, 0.2, 1)",at="cubic-bezier(0.0, 0, 0.2, 1)",it="cubic-bezier(0.4, 0, 1, 1)",Y=Symbol("Forwarded refs");function J(e,i){let a=e;for(;a;){const o=Reflect.getOwnPropertyDescriptor(a,i);if(o)return o;a=Object.getPrototypeOf(a)}}function Ke(e){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return e[Y]=a,new Proxy(e,{get(t,n){if(Reflect.has(t,n))return Reflect.get(t,n);if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const r of a)if(r.value&&Reflect.has(r.value,n)){const u=Reflect.get(r.value,n);return typeof u=="function"?u.bind(r.value):u}}},has(t,n){if(Reflect.has(t,n))return!0;if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const r of a)if(r.value&&Reflect.has(r.value,n))return!0;return!1},set(t,n,r){if(Reflect.has(t,n))return Reflect.set(t,n,r);if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const u of a)if(u.value&&Reflect.has(u.value,n))return Reflect.set(u.value,n,r);return!1},getOwnPropertyDescriptor(t,n){var u;const r=Reflect.getOwnPropertyDescriptor(t,n);if(r)return r;if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const c of a){if(!c.value)continue;const d=J(c.value,n)??("_"in c.value?J((u=c.value._)==null?void 0:u.setupState,n):void 0);if(d)return d}for(const c of a){const d=c.value&&c.value[Y];if(!d)continue;const m=d.slice();for(;m.length;){const h=m.shift(),F=J(h.value,n);if(F)return F;const w=h.value&&h.value[Y];w&&m.push(...w)}}}}})}const Ge=j({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Z(),...fe({transition:{component:ve}})},"VCounter"),He=U()({name:"VCounter",functional:!0,props:Ge(),setup(e,i){let{slots:a}=i;const o=y(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return z(()=>l(me,{transition:e.transition},{default:()=>[ee(l("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[a.default?a.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[ae,e.active]])]})),{}}}),Qe=j({floating:Boolean,...Z()},"VFieldLabel"),L=U()({name:"VFieldLabel",props:Qe(),setup(e,i){let{slots:a}=i;return z(()=>l(Me,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),Xe=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],oe=j({appendInnerIcon:Q,bgColor:String,clearable:Boolean,clearIcon:{type:Q,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Q,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Xe.includes(e)},"onClick:clear":X(),"onClick:appendInner":X(),"onClick:prependInner":X(),...Z(),...he(),...ge(),...be()},"VField"),re=U()({name:"VField",inheritAttrs:!1,props:{id:String,...We(),...oe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:a,emit:o,slots:t}=i;const{themeClasses:n}=ye(e),{loaderClasses:r}=xe(e),{focusClasses:u,isFocused:c,focus:d,blur:m}=ie(e),{InputIcon:h}=Ne(e),{roundedClasses:F}=Ce(e),{rtlClasses:w}=Ve(),S=y(()=>e.dirty||e.active),x=y(()=>!e.singleLine&&!!(e.label||t.label)),q=_e(),g=y(()=>e.id||`input-${q}`),K=y(()=>`${g.value}-messages`),E=D(),T=D(),$=D(),s=y(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:C,backgroundColorStyles:V}=Pe(we(e,"bgColor")),{textColorClasses:_,textColorStyles:G}=Ie(y(()=>e.error||e.disabled?void 0:S.value&&c.value?e.color:e.baseColor));Fe(S,f=>{if(x.value){const v=E.value.$el,P=T.value.$el;requestAnimationFrame(()=>{const I=Ue(v),b=P.getBoundingClientRect(),A=b.x-I.x,k=b.y-I.y-(I.height/2-b.height/2),p=b.width/.75,O=Math.abs(p-I.width)>1?{maxWidth:Re(p)}:void 0,se=getComputedStyle(v),te=getComputedStyle(P),ue=parseFloat(se.transitionDuration)*1e3||150,ce=parseFloat(te.getPropertyValue("--v-field-label-scale")),de=te.getPropertyValue("color");v.style.visibility="visible",P.style.visibility="hidden",ze(v,{transform:`translate(${A}px, ${k}px) scale(${ce})`,color:de,...O},{duration:ue,easing:qe,direction:f?"normal":"reverse"}).finished.then(()=>{v.style.removeProperty("visibility"),P.style.removeProperty("visibility")})})}},{flush:"post"});const B=y(()=>({isActive:S,isFocused:c,controlRef:$,blur:m,focus:d}));function H(f){f.target!==document.activeElement&&f.preventDefault()}function R(f){var v;f.key!=="Enter"&&f.key!==" "||(f.preventDefault(),f.stopPropagation(),(v=e["onClick:clear"])==null||v.call(e,new MouseEvent("click")))}return z(()=>{var A,k,p;const f=e.variant==="outlined",v=!!(t["prepend-inner"]||e.prependInnerIcon),P=!!(e.clearable||t.clear),I=!!(t["append-inner"]||e.appendInnerIcon||P),b=()=>t.label?t.label({...B.value,label:e.label,props:{for:g.value}}):e.label;return l("div",W({class:["v-field",{"v-field--active":S.value,"v-field--appended":I,"v-field--center-affix":e.centerAffix??!s.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":v,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!b(),[`v-field--variant-${e.variant}`]:!0},n.value,C.value,u.value,r.value,F.value,w.value,e.class],style:[V.value,e.style],onClick:H},a),[l("div",{class:"v-field__overlay"},null),l(Se,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),v&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(h,{key:"prepend-icon",name:"prependInner"},null),(A=t["prepend-inner"])==null?void 0:A.call(t,B.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&x.value&&l(L,{key:"floating-label",ref:T,class:[_.value],floating:!0,for:g.value,style:G.value},{default:()=>[b()]}),x.value&&l(L,{key:"label",ref:E,for:g.value},{default:()=>[b()]}),(k=t.default)==null?void 0:k.call(t,{...B.value,props:{id:g.value,class:"v-field__input","aria-describedby":K.value},focus:d,blur:m})]),P&&l(Be,{key:"clear"},{default:()=>[ee(l("div",{class:"v-field__clearable",onMousedown:O=>{O.preventDefault(),O.stopPropagation()}},[l(ke,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[t.clear?t.clear({...B.value,props:{onKeydown:R,onFocus:d,onBlur:m,onClick:e["onClick:clear"]}}):l(h,{name:"clear",onKeydown:R,onFocus:d,onBlur:m},null)]})]),[[ae,e.dirty]])]}),I&&l("div",{key:"append",class:"v-field__append-inner"},[(p=t["append-inner"])==null?void 0:p.call(t,B.value),e.appendInnerIcon&&l(h,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",_.value],style:G.value},[f&&l(M,null,[l("div",{class:"v-field__outline__start"},null),x.value&&l("div",{class:"v-field__outline__notch"},[l(L,{ref:T,floating:!0,for:g.value},{default:()=>[b()]})]),l("div",{class:"v-field__outline__end"},null)]),s.value&&x.value&&l(L,{ref:T,floating:!0,for:g.value},{default:()=>[b()]})])])}),{controlRef:$}}});function Ye(e){const i=Object.keys(re.props).filter(a=>!pe(a)&&a!=="class"&&a!=="style");return Oe(e,i)}const Je=["color","file","time","date","datetime-local","week","month"],Ze=j({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...je(),...oe()},"VTextField"),ot=U()({name:"VTextField",directives:{Intersect:Te},inheritAttrs:!1,props:Ze(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:a,emit:o,slots:t}=i;const n=Ae(e,"modelValue"),{isFocused:r,focus:u,blur:c}=ie(e),d=y(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:(n.value??"").toString().length),m=y(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),h=y(()=>["plain","underlined"].includes(e.variant));function F(s,C){var V,_;!e.autofocus||!s||(_=(V=C[0].target)==null?void 0:V.focus)==null||_.call(V)}const w=D(),S=D(),x=D(),q=y(()=>Je.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function g(){var s;x.value!==document.activeElement&&((s=x.value)==null||s.focus()),r.value||u()}function K(s){o("mousedown:control",s),s.target!==x.value&&(g(),s.preventDefault())}function E(s){g(),o("click:control",s)}function T(s){s.stopPropagation(),g(),ne(()=>{n.value=null,Le(e["onClick:clear"],s)})}function $(s){var V;const C=s.target;if(n.value=C.value,(V=e.modelModifiers)!=null&&V.trim&&["text","search","password","tel","url"].includes(e.type)){const _=[C.selectionStart,C.selectionEnd];ne(()=>{C.selectionStart=_[0],C.selectionEnd=_[1]})}}return z(()=>{const s=!!(t.counter||e.counter!==!1&&e.counter!=null),C=!!(s||t.details),[V,_]=De(a),{modelValue:G,...B}=le.filterProps(e),H=Ye(e);return l(le,W({ref:w,modelValue:n.value,"onUpdate:modelValue":R=>n.value=R,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":h.value},e.class],style:e.style},V,B,{centerAffix:!h.value,focused:r.value}),{...t,default:R=>{let{id:f,isDisabled:v,isDirty:P,isReadonly:I,isValid:b}=R;return l(re,W({ref:S,onMousedown:K,onClick:E,"onClick:clear":T,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},H,{id:f.value,active:q.value||P.value,dirty:P.value||e.dirty,disabled:v.value,focused:r.value,error:b.value===!1}),{...t,default:A=>{let{props:{class:k,...p}}=A;const O=ee(l("input",W({ref:x,value:n.value,onInput:$,autofocus:e.autofocus,readonly:I.value,disabled:v.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:g,onBlur:c},p,_),null),[[Ee("intersect"),{handler:F},null,{once:!0}]]);return l(M,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?l("div",{class:k,"data-no-activator":""},[t.default(),O]):$e(O,{class:k}),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:C?R=>{var f;return l(M,null,[(f=t.details)==null?void 0:f.call(t,R),s&&l(M,null,[l("span",null,null),l(He,{active:e.persistentCounter||r.value,value:d.value,max:m.value,disabled:e.disabled},t.counter)])])}:void 0})}),Ke({},w,S,x)}});export{N as B,ot as V,ze as a,it as b,nt as c,at as d,Ke as f,lt as g,Ze as m,Ue as n,qe as s};
