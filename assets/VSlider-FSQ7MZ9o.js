import{s as X,a8 as he,a7 as ke,x as s,aW as le,ay as H,S as M,M as ae,r as G,aX as ye,N as Se,aK as ie,W as oe,t as J,ac as pe,K as ue,aj as ge,ap as Ve,z as Z,aQ as I,d as r,a0 as se,am as we,D as Ce,a1 as _e,aY as xe,ak as Te,as as ne,u as Fe,F as Pe,B as Me}from"./index-DAEIea0U.js";import{b as ze,m as Re,u as Ee,V as re}from"./VInput-B68lg5ZD.js";import{V as Le}from"./VLabel-Ct2XxeYM.js";const ee=Symbol.for("vuetify:v-slider");function Ne(e,t,a){const o=a==="vertical",u=t.getBoundingClientRect(),k="touches"in e?e.touches[0]:e;return o?k.clientY-(u.top+u.height/2):k.clientX-(u.left+u.width/2)}function Be(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const De=X({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...he(),...ke({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),Ke=e=>{const t=s(()=>parseFloat(e.min)),a=s(()=>parseFloat(e.max)),o=s(()=>+e.step>0?parseFloat(e.step):0),u=s(()=>Math.max(le(o.value),le(t.value)));function k(y){if(y=parseFloat(y),o.value<=0)return y;const v=ie(y,t.value,a.value),S=t.value%o.value,_=Math.round((v-S)/o.value)*o.value+S;return parseFloat(Math.min(_,a.value).toFixed(u.value))}return{min:t,max:a,step:o,decimals:u,roundValue:k}},Ie=e=>{let{props:t,steps:a,onSliderStart:o,onSliderMove:u,onSliderEnd:k,getActiveThumb:y}=e;const{isRtl:v}=H(),S=M(t,"reverse"),_=s(()=>t.direction==="vertical"),x=s(()=>_.value!==S.value),{min:f,max:g,step:T,decimals:L,roundValue:z}=a,D=s(()=>parseInt(t.thumbSize,10)),N=s(()=>parseInt(t.tickSize,10)),R=s(()=>parseInt(t.trackSize,10)),F=s(()=>(g.value-f.value)/T.value),K=M(t,"disabled"),P=s(()=>t.error||t.disabled?void 0:t.thumbColor??t.color),i=s(()=>t.error||t.disabled?void 0:t.trackColor??t.color),V=s(()=>t.error||t.disabled?void 0:t.trackFillColor??t.color),m=ae(!1),b=ae(0),w=G(),C=G();function n(l){var te;const c=t.direction==="vertical",de=c?"top":"left",ce=c?"height":"width",ve=c?"clientY":"clientX",{[de]:me,[ce]:be}=(te=w.value)==null?void 0:te.$el.getBoundingClientRect(),fe=Be(l,ve);let Q=Math.min(Math.max((fe-me-b.value)/be,0),1)||0;return(c?x.value:x.value!==v.value)&&(Q=1-Q),z(f.value+Q*(g.value-f.value))}const E=l=>{k({value:n(l)}),m.value=!1,b.value=0},B=l=>{C.value=y(l),C.value&&(C.value.focus(),m.value=!0,C.value.contains(l.target)?b.value=Ne(l,C.value,t.direction):(b.value=0,u({value:n(l)})),o({value:n(l)}))},p={passive:!0,capture:!0};function O(l){u({value:n(l)})}function A(l){l.stopPropagation(),l.preventDefault(),E(l),window.removeEventListener("mousemove",O,p),window.removeEventListener("mouseup",A)}function $(l){var c;E(l),window.removeEventListener("touchmove",O,p),(c=l.target)==null||c.removeEventListener("touchend",$)}function Y(l){var c;B(l),window.addEventListener("touchmove",O,p),(c=l.target)==null||c.addEventListener("touchend",$,{passive:!1})}function h(l){l.preventDefault(),B(l),window.addEventListener("mousemove",O,p),window.addEventListener("mouseup",A,{passive:!1})}const d=l=>{const c=(l-f.value)/(g.value-f.value)*100;return ie(isNaN(c)?0:c,0,100)},q=M(t,"showTicks"),j=s(()=>q.value?t.ticks?Array.isArray(t.ticks)?t.ticks.map(l=>({value:l,position:d(l),label:l.toString()})):Object.keys(t.ticks).map(l=>({value:parseFloat(l),position:d(parseFloat(l)),label:t.ticks[l]})):F.value!==1/0?ye(F.value+1).map(l=>{const c=f.value+l*T.value;return{value:c,position:d(c)}}):[]:[]),U=s(()=>j.value.some(l=>{let{label:c}=l;return!!c})),W={activeThumbRef:C,color:M(t,"color"),decimals:L,disabled:K,direction:M(t,"direction"),elevation:M(t,"elevation"),hasLabels:U,isReversed:S,indexFromEnd:x,min:f,max:g,mousePressed:m,numTicks:F,onSliderMousedown:h,onSliderTouchstart:Y,parsedTicks:j,parseMouseMove:n,position:d,readonly:M(t,"readonly"),rounded:M(t,"rounded"),roundValue:z,showTicks:q,startOffset:b,step:T,thumbSize:D,thumbColor:P,thumbLabel:M(t,"thumbLabel"),ticks:M(t,"ticks"),tickSize:N,trackColor:i,trackContainerRef:w,trackFillColor:V,trackSize:R,vertical:_};return Se(ee,W),W},Oe=X({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},name:String,...oe()},"VSliderThumb"),qe=J()({name:"VSliderThumb",directives:{Ripple:pe},props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a,emit:o}=t;const u=ue(ee),{isRtl:k,rtlClasses:y}=H();if(!u)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:v,step:S,disabled:_,thumbSize:x,thumbLabel:f,direction:g,isReversed:T,vertical:L,readonly:z,elevation:D,mousePressed:N,decimals:R,indexFromEnd:F}=u,K=s(()=>_.value?void 0:D.value),{elevationClasses:P}=ge(K),{textColorClasses:i,textColorStyles:V}=Ve(v),{pageup:m,pagedown:b,end:w,home:C,left:n,right:E,down:B,up:p}=xe,O=[m,b,w,C,n,E,B,p],A=s(()=>S.value?[1,2,3]:[1,5,10]);function $(h,d){if(!O.includes(h.key))return;h.preventDefault();const q=S.value||.1,j=(e.max-e.min)/q;if([n,E,B,p].includes(h.key)){const W=(L.value?[k.value?n:E,T.value?B:p]:F.value!==k.value?[n,p]:[E,p]).includes(h.key)?1:-1,l=h.shiftKey?2:h.ctrlKey?1:0;d=d+W*q*A.value[l]}else if(h.key===C)d=e.min;else if(h.key===w)d=e.max;else{const U=h.key===b?1:-1;d=d-U*q*(j>100?j/10:10)}return Math.max(e.min,Math.min(e.max,d))}function Y(h){const d=$(h,e.modelValue);d!=null&&o("update:modelValue",d)}return Z(()=>{const h=I(F.value?100-e.position:e.position,"%");return r("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&N.value},e.class,y.value],style:[{"--v-slider-thumb-position":h,"--v-slider-thumb-size":I(x.value)},e.style],role:"slider",tabindex:_.value?-1:0,"aria-label":e.name,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!z.value,"aria-orientation":g.value,onKeydown:z.value?void 0:Y},[r("div",{class:["v-slider-thumb__surface",i.value,P.value],style:{...V.value}},null),se(r("div",{class:["v-slider-thumb__ripple",i.value],style:V.value},null),[[we("ripple"),e.ripple,null,{circle:!0,center:!0}]]),r(Ce,{origin:"bottom center"},{default:()=>{var d;return[se(r("div",{class:"v-slider-thumb__label-container"},[r("div",{class:["v-slider-thumb__label"]},[r("div",null,[((d=a["thumb-label"])==null?void 0:d.call(a,{modelValue:e.modelValue}))??e.modelValue.toFixed(S.value?R.value:1)])])]),[[_e,f.value&&e.focused||f.value==="always"]])]}})])}),{}}}),je=X({start:{type:Number,required:!0},stop:{type:Number,required:!0},...oe()},"VSliderTrack"),Ae=J()({name:"VSliderTrack",props:je(),emits:{},setup(e,t){let{slots:a}=t;const o=ue(ee);if(!o)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:u,parsedTicks:k,rounded:y,showTicks:v,tickSize:S,trackColor:_,trackFillColor:x,trackSize:f,vertical:g,min:T,max:L,indexFromEnd:z}=o,{roundedClasses:D}=Te(y),{backgroundColorClasses:N,backgroundColorStyles:R}=ne(x),{backgroundColorClasses:F,backgroundColorStyles:K}=ne(_),P=s(()=>`inset-${g.value?"block":"inline"}-${z.value?"end":"start"}`),i=s(()=>g.value?"height":"width"),V=s(()=>({[P.value]:"0%",[i.value]:"100%"})),m=s(()=>e.stop-e.start),b=s(()=>({[P.value]:I(e.start,"%"),[i.value]:I(m.value,"%")})),w=s(()=>v.value?(g.value?k.value.slice().reverse():k.value).map((n,E)=>{var p;const B=n.value!==T.value&&n.value!==L.value?I(n.position,"%"):void 0;return r("div",{key:n.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":n.position>=e.start&&n.position<=e.stop,"v-slider-track__tick--first":n.value===T.value,"v-slider-track__tick--last":n.value===L.value}],style:{[P.value]:B}},[(n.label||a["tick-label"])&&r("div",{class:"v-slider-track__tick-label"},[((p=a["tick-label"])==null?void 0:p.call(a,{tick:n,index:E}))??n.label])])}):[]);return Z(()=>r("div",{class:["v-slider-track",D.value,e.class],style:[{"--v-slider-track-size":I(f.value),"--v-slider-tick-size":I(S.value)},e.style]},[r("div",{class:["v-slider-track__background",F.value,{"v-slider-track__background--opacity":!!u.value||!x.value}],style:{...V.value,...K.value}},null),r("div",{class:["v-slider-track__fill",N.value],style:{...b.value,...R.value}},null),v.value&&r("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":v.value==="always"}]},[w.value])])),{}}}),$e=X({...ze(),...De(),...Re(),modelValue:{type:[Number,String],default:0}},"VSlider"),Ye=J()({name:"VSlider",props:$e(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,t){let{slots:a,emit:o}=t;const u=G(),{rtlClasses:k}=H(),y=Ke(e),v=Fe(e,"modelValue",void 0,i=>y.roundValue(i??y.min.value)),{min:S,max:_,mousePressed:x,roundValue:f,onSliderMousedown:g,onSliderTouchstart:T,trackContainerRef:L,position:z,hasLabels:D,readonly:N}=Ie({props:e,steps:y,onSliderStart:()=>{o("start",v.value)},onSliderEnd:i=>{let{value:V}=i;const m=f(V);v.value=m,o("end",m)},onSliderMove:i=>{let{value:V}=i;return v.value=f(V)},getActiveThumb:()=>{var i;return(i=u.value)==null?void 0:i.$el}}),{isFocused:R,focus:F,blur:K}=Ee(e),P=s(()=>z(v.value));return Z(()=>{const i=re.filterProps(e),V=!!(e.label||a.label||a.prepend);return r(re,Me({class:["v-slider",{"v-slider--has-labels":!!a["tick-label"]||D.value,"v-slider--focused":R.value,"v-slider--pressed":x.value,"v-slider--disabled":e.disabled},k.value,e.class],style:e.style},i,{focused:R.value}),{...a,prepend:V?m=>{var b,w;return r(Pe,null,[((b=a.label)==null?void 0:b.call(a,m))??(e.label?r(Le,{id:m.id.value,class:"v-slider__label",text:e.label},null):void 0),(w=a.prepend)==null?void 0:w.call(a,m)])}:void 0,default:m=>{let{id:b,messagesId:w}=m;return r("div",{class:"v-slider__container",onMousedown:N.value?void 0:g,onTouchstartPassive:N.value?void 0:T},[r("input",{id:b.value,name:e.name||b.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:v.value},null),r(Ae,{ref:L,start:0,stop:P.value},{"tick-label":a["tick-label"]}),r(qe,{ref:u,"aria-describedby":w.value,focused:R.value,min:S.value,max:_.value,modelValue:v.value,"onUpdate:modelValue":C=>v.value=C,position:P.value,elevation:e.elevation,onFocus:F,onBlur:K,ripple:e.ripple,name:e.name},{"thumb-label":a["thumb-label"]})])}})}),{}}});export{Ye as V};
