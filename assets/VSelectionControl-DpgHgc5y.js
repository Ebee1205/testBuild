import{s as h,H as D,aq as z,W as U,a5 as K,aa as O,t as N,u as R,y as _,x as o,N as W,at as J,S as u,z as j,d as v,aN as Q,ac as X,M as G,r as Y,A as Z,B as T,a0 as p,am as ee,F as le,j as ae,K as te,ah as ne,P as I,ap as oe,as as ue,aV as ie,aC as re}from"./index-DAEIea0U.js";import{V as ce}from"./VLabel-Ct2XxeYM.js";const M=Symbol.for("vuetify:selection-control-group"),q=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:D,trueIcon:D,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:z},...U(),...K(),...O()},"SelectionControlGroup"),se=h({...q({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");N()({name:"VSelectionControlGroup",props:se(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:f}=i;const l=R(e,"modelValue"),t=_(),C=o(()=>e.id||`v-selection-control-group-${t}`),c=o(()=>e.name||C.value),a=new Set;return W(M,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),Q(()=>{a.delete(n)})}}),J({[e.defaultsTarget]:{color:u(e,"color"),disabled:u(e,"disabled"),density:u(e,"density"),error:u(e,"error"),inline:u(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:u(e,"falseIcon"),trueIcon:u(e,"trueIcon"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),type:u(e,"type"),valueComparator:u(e,"valueComparator")}}),j(()=>{var n;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=f.default)==null?void 0:n.call(f)])}),{}}});const de=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...U(),...q()},"VSelectionControl");function ve(e){const i=te(M,void 0),{densityClasses:f}=ne(e),l=R(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),C=o(()=>e.falseValue!==void 0?e.falseValue:!1),c=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const m=i?i.modelValue.value:l.value;return c.value?I(m).some(r=>e.valueComparator(r,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const r=m?t.value:C.value;let y=r;c.value&&(y=m?[...I(l.value),r]:I(l.value).filter(s=>!e.valueComparator(s,t.value))),i?i.modelValue.value=y:l.value=y}}),{textColorClasses:n,textColorStyles:b}=oe(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:S}=ue(o(()=>a.value&&!e.error&&!e.disabled?e.color:e.baseColor)),k=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:f,trueValue:t,falseValue:C,model:a,textColorClasses:n,textColorStyles:b,backgroundColorClasses:V,backgroundColorStyles:S,icon:k}}const ye=N()({name:"VSelectionControl",directives:{Ripple:X},inheritAttrs:!1,props:de(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:f,slots:l}=i;const{group:t,densityClasses:C,icon:c,model:a,textColorClasses:n,textColorStyles:b,backgroundColorClasses:V,backgroundColorStyles:S,trueValue:k}=ve(e),m=_(),r=G(!1),y=G(!1),s=Y(),g=o(()=>e.id||`input-${m}`),x=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{s.value&&(s.value.checked=a.value)});function A(d){x.value&&(r.value=!0,ie(d.target,":focus-visible")!==!1&&(y.value=!0))}function B(){r.value=!1,y.value=!1}function E(d){d.stopPropagation()}function H(d){if(!x.value){s.value&&(s.value.checked=a.value);return}e.readonly&&t&&re(()=>t.forceUpdate()),a.value=d.target.checked}return j(()=>{var P,w;const d=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[L,$]=Z(f),F=v("input",T({ref:s,checked:a.value,disabled:!!e.disabled,id:g.value,onBlur:B,onFocus:A,onInput:H,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},$),null);return v("div",T({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":r.value,"v-selection-control--focus-visible":y.value,"v-selection-control--inline":e.inline},C.value,e.class]},L,{style:e.style}),[v("div",{class:["v-selection-control__wrapper",n.value],style:b.value},[(P=l.default)==null?void 0:P.call(l,{backgroundColorClasses:V,backgroundColorStyles:S}),p(v("div",{class:["v-selection-control__input"]},[((w=l.input)==null?void 0:w.call(l,{model:a,textColorClasses:n,textColorStyles:b,backgroundColorClasses:V,backgroundColorStyles:S,inputNode:F,icon:c.value,props:{onFocus:A,onBlur:B,id:g.value}}))??v(le,null,[c.value&&v(ae,{key:"icon",icon:c.value},null),F])]),[[ee("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),d&&v(ce,{for:g.value,onClick:E},{default:()=>[d]})])}),{isFocused:r,input:s}}});export{ye as V,de as m};
