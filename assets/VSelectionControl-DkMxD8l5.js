import{a as h,I as G,at as $,m as U,d as Q,q as z,g as R,O as E,P as M,E as o,ae as J,p as K,aj as u,u as _,c as v,ay as W,R as X,ad as D,U as Y,Q as Z,M as T,G as p,H as ee,F as le,V as ae,ac as te,w as ne,ag as I,as as oe,av as ue,aM as ie,aE as re}from"./index-CPnsM1d-.js";import{a as ce}from"./VInput-Bmougzpl.js";const j=Symbol.for("vuetify:selection-control-group"),q=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:G,trueIcon:G,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:$},...U(),...Q(),...z()},"SelectionControlGroup"),se=h({...q({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");R()({name:"VSelectionControlGroup",props:se(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:f}=i;const l=E(e,"modelValue"),t=M(),C=o(()=>e.id||`v-selection-control-group-${t}`),c=o(()=>e.name||C.value),a=new Set;return J(j,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),W(()=>{a.delete(n)})}}),K({[e.defaultsTarget]:{color:u(e,"color"),disabled:u(e,"disabled"),density:u(e,"density"),error:u(e,"error"),inline:u(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:u(e,"falseIcon"),trueIcon:u(e,"trueIcon"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),type:u(e,"type"),valueComparator:u(e,"valueComparator")}}),_(()=>{var n;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=f.default)==null?void 0:n.call(f)])}),{}}});const de=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...U(),...q()},"VSelectionControl");function ve(e){const i=te(j,void 0),{densityClasses:f}=ne(e),l=E(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),C=o(()=>e.falseValue!==void 0?e.falseValue:!1),c=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const m=i?i.modelValue.value:l.value;return c.value?I(m).some(r=>e.valueComparator(r,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const r=m?t.value:C.value;let y=r;c.value&&(y=m?[...I(l.value),r]:I(l.value).filter(s=>!e.valueComparator(s,t.value))),i?i.modelValue.value=y:l.value=y}}),{textColorClasses:n,textColorStyles:b}=oe(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:g}=ue(o(()=>a.value&&!e.error&&!e.disabled?e.color:e.baseColor)),k=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:f,trueValue:t,falseValue:C,model:a,textColorClasses:n,textColorStyles:b,backgroundColorClasses:V,backgroundColorStyles:g,icon:k}}const ye=R()({name:"VSelectionControl",directives:{Ripple:X},inheritAttrs:!1,props:de(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:f,slots:l}=i;const{group:t,densityClasses:C,icon:c,model:a,textColorClasses:n,textColorStyles:b,backgroundColorClasses:V,backgroundColorStyles:g,trueValue:k}=ve(e),m=M(),r=D(!1),y=D(!1),s=Y(),S=o(()=>e.id||`input-${m}`),F=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{s.value&&(s.value.checked=a.value)});function P(d){F.value&&(r.value=!0,ie(d.target,":focus-visible")!==!1&&(y.value=!0))}function x(){r.value=!1,y.value=!1}function H(d){d.stopPropagation()}function L(d){if(!F.value){s.value&&(s.value.checked=a.value);return}e.readonly&&t&&re(()=>t.forceUpdate()),a.value=d.target.checked}return _(()=>{var B,w;const d=l.label?l.label({label:e.label,props:{for:S.value}}):e.label,[N,O]=Z(f),A=v("input",T({ref:s,checked:a.value,disabled:!!e.disabled,id:S.value,onBlur:x,onFocus:P,onInput:L,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},O),null);return v("div",T({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":r.value,"v-selection-control--focus-visible":y.value,"v-selection-control--inline":e.inline},C.value,e.class]},N,{style:e.style}),[v("div",{class:["v-selection-control__wrapper",n.value],style:b.value},[(B=l.default)==null?void 0:B.call(l,{backgroundColorClasses:V,backgroundColorStyles:g}),p(v("div",{class:["v-selection-control__input"]},[((w=l.input)==null?void 0:w.call(l,{model:a,textColorClasses:n,textColorStyles:b,backgroundColorClasses:V,backgroundColorStyles:g,inputNode:A,icon:c.value,props:{onFocus:P,onBlur:x,id:S.value}}))??v(le,null,[c.value&&v(ae,{key:"icon",icon:c.value},null),A])]),[[ee("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),d&&v(ce,{for:S.value,onClick:H},{default:()=>[d]})])}),{isFocused:r,input:s}}});export{ye as V,de as m};
