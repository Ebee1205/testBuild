import{a as Z,I as w,m as J,bj as ge,b as Y,bk as re,g as ee,aR as Se,aN as Ce,bl as de,ad as O,E as b,aZ as le,bm as Ie,a6 as te,a5 as Ve,u as ve,c as i,bn as ae,V as E,aW as xe,at as Pe,q as fe,r as pe,s as he,p as ze,aj as L,M as X,aq as ne,f as Ae,d as Re,i as we,bo as Ee,n as _e,o as Te,bp as Fe,R as Ge,b0 as Oe,t as Be,v as De,w as Me,y as We,C as Le,bq as He,O as qe,br as $e,D as Ke,G as se,H as Ne,K as je,bb as Ue,e as H,ap as Qe,F as ie}from"./index-CPnsM1d-.js";import{V as oe}from"./VAvatar-CLc36z_T.js";function Xe(e){let{selectedElement:n,containerElement:a,isRtl:u,isHorizontal:o}=e;const y=B(o,a),c=ye(o,u,a),m=B(o,n),v=me(o,n),g=m*.4;return c>v?v-g:c+y<v+m?v-y+m+g:c}function Ze(e){let{selectedElement:n,containerElement:a,isHorizontal:u}=e;const o=B(u,a),y=me(u,n),c=B(u,n);return y-o/2+c/2}function ce(e,n){const a=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[a])||0}function Je(e,n){const a=e?"clientWidth":"clientHeight";return(n==null?void 0:n[a])||0}function ye(e,n,a){if(!a)return 0;const{scrollLeft:u,offsetWidth:o,scrollWidth:y}=a;return e?n?y-o+u:u:a.scrollTop}function B(e,n){const a=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[a])||0}function me(e,n){const a=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[a])||0}const Ye=Symbol.for("vuetify:v-slide-group"),ke=Z({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ye},nextIcon:{type:w,default:"$next"},prevIcon:{type:w,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...J(),...ge({mobile:null}),...Y(),...re({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ue=ee()({name:"VSlideGroup",props:ke(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isRtl:u}=Se(),{displayClasses:o,mobile:y}=Ce(e),c=de(e,e.symbol),m=O(!1),v=O(0),g=O(0),I=O(0),d=b(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:_}=le(),{resizeRef:p,contentRect:x}=le(),s=Ie(),k=b(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),q=b(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[0]):-1),S=b(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[c.selected.value.length-1]):-1);if(te){let l=-1;Ve(()=>[c.selected.value,_.value,x.value,d.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(_.value&&x.value){const t=d.value?"width":"height";g.value=_.value[t],I.value=x.value[t],m.value=g.value+1<I.value}if(q.value>=0&&p.el){const t=p.el.children[S.value];T(t,e.centerActive)}})})}const P=O(!1);function T(l,t){let r=0;t?r=Ze({containerElement:f.el,isHorizontal:d.value,selectedElement:l}):r=Xe({containerElement:f.el,isHorizontal:d.value,isRtl:u.value,selectedElement:l}),D(r)}function D(l){if(!te||!f.el)return;const t=B(d.value,f.el),r=ye(d.value,u.value,f.el);if(!(ce(d.value,f.el)<=t||Math.abs(l-r)<16)){if(d.value&&u.value&&f.el){const{scrollWidth:W,offsetWidth:Q}=f.el;l=W-Q-l}d.value?s.horizontal(l,k.value):s(l,k.value)}}function h(l){const{scrollTop:t,scrollLeft:r}=l.target;v.value=d.value?r:t}function V(l){if(P.value=!0,!(!m.value||!p.el)){for(const t of l.composedPath())for(const r of p.el.children)if(r===t){T(r);return}}}function $(l){P.value=!1}let F=!1;function M(l){var t;!F&&!P.value&&!(l.relatedTarget&&((t=p.el)!=null&&t.contains(l.relatedTarget)))&&C(),F=!1}function G(){F=!0}function K(l){if(!p.el)return;function t(r){l.preventDefault(),C(r)}d.value?l.key==="ArrowRight"?t(u.value?"prev":"next"):l.key==="ArrowLeft"&&t(u.value?"next":"prev"):l.key==="ArrowDown"?t("next"):l.key==="ArrowUp"&&t("prev"),l.key==="Home"?t("first"):l.key==="End"&&t("last")}function C(l){var r,R;if(!p.el)return;let t;if(!l)t=xe(p.el)[0];else if(l==="next"){if(t=(r=p.el.querySelector(":focus"))==null?void 0:r.nextElementSibling,!t)return C("first")}else if(l==="prev"){if(t=(R=p.el.querySelector(":focus"))==null?void 0:R.previousElementSibling,!t)return C("last")}else l==="first"?t=p.el.firstElementChild:l==="last"&&(t=p.el.lastElementChild);t&&t.focus({preventScroll:!0})}function z(l){const t=d.value&&u.value?-1:1,r=(l==="prev"?-t:t)*g.value;let R=v.value+r;if(d.value&&u.value&&f.el){const{scrollWidth:W,offsetWidth:Q}=f.el;R+=W-Q}D(R)}const A=b(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),N=b(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!y.value;case!0:return m.value||Math.abs(v.value)>0;case"mobile":return y.value||m.value||Math.abs(v.value)>0;default:return!y.value&&(m.value||Math.abs(v.value)>0)}}),j=b(()=>Math.abs(v.value)>1),U=b(()=>{if(!f.value)return!1;const l=ce(d.value,f.el),t=Je(d.value,f.el);return l-t-Math.abs(v.value)>1});return ve(()=>i(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":N.value,"v-slide-group--is-overflowing":m.value},o.value,e.class],style:e.style,tabindex:P.value||c.selected.value.length?-1:0,onFocus:M},{default:()=>{var l,t,r;return[N.value&&i("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!j.value}],onMousedown:G,onClick:()=>j.value&&z("prev")},[((l=a.prev)==null?void 0:l.call(a,A.value))??i(ae,null,{default:()=>[i(E,{icon:u.value?e.nextIcon:e.prevIcon},null)]})]),i("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:h},[i("div",{ref:p,class:"v-slide-group__content",onFocusin:V,onFocusout:$,onKeydown:K},[(t=a.default)==null?void 0:t.call(a,A.value)])]),N.value&&i("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!U.value}],onMousedown:G,onClick:()=>U.value&&z("next")},[((r=a.next)==null?void 0:r.call(a,A.value))??i(ae,null,{default:()=>[i(E,{icon:u.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:z,scrollOffset:v,focus:C,hasPrev:j,hasNext:U}}}),be=Symbol.for("vuetify:v-chip-group"),el=Z({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Pe},...ke(),...J(),...re({selectedClass:"v-chip--selected"}),...Y(),...fe(),...pe({variant:"tonal"})},"VChipGroup");ee()({name:"VChipGroup",props:el(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:u}=he(e),{isSelected:o,select:y,next:c,prev:m,selected:v}=de(e,be);return ze({VChip:{color:L(e,"color"),disabled:L(e,"disabled"),filter:L(e,"filter"),variant:L(e,"variant")}}),ve(()=>{const g=ue.filterProps(e);return i(ue,X(g,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style}),{default:()=>{var I;return[(I=a.default)==null?void 0:I.call(a,{isSelected:o,select:y,next:c,prev:m,selected:v.value})]}})}),{}}});const ll=Z({activeClass:String,appendAvatar:String,appendIcon:w,closable:Boolean,closeIcon:{type:w,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:w,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:w,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ne(),onClickOnce:ne(),...Ae(),...J(),...Re(),...we(),...Ee(),..._e(),...Te(),...Fe(),...Y({tag:"span"}),...fe(),...pe({variant:"tonal"})},"VChip"),nl=ee()({name:"VChip",directives:{Ripple:Ge},props:ll(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:a,emit:u,slots:o}=n;const{t:y}=Oe(),{borderClasses:c}=Be(e),{colorClasses:m,colorStyles:v,variantClasses:g}=De(e),{densityClasses:I}=Me(e),{elevationClasses:d}=We(e),{roundedClasses:f}=Le(e),{sizeClasses:_}=He(e),{themeClasses:p}=he(e),x=qe(e,"modelValue"),s=$e(e,be,!1),k=Ke(e,a),q=b(()=>e.link!==!1&&k.isLink.value),S=b(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||k.isClickable.value)),P=b(()=>({"aria-label":y(e.closeLabel),onClick(h){h.preventDefault(),h.stopPropagation(),x.value=!1,u("click:close",h)}}));function T(h){var V;u("click",h),S.value&&((V=k.navigate)==null||V.call(k,h),s==null||s.toggle())}function D(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),T(h))}return()=>{var z;const h=k.isLink.value?"a":e.tag,V=!!(e.appendIcon||e.appendAvatar),$=!!(V||o.append),F=!!(o.close||e.closable),M=!!(o.filter||e.filter)&&s,G=!!(e.prependIcon||e.prependAvatar),K=!!(G||o.prepend),C=!s||s.isSelected.value;return x.value&&se(i(h,X({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":M,"v-chip--pill":e.pill,[`${e.activeClass}`]:e.activeClass&&((z=k.isActive)==null?void 0:z.value)},p.value,c.value,C?m.value:void 0,I.value,d.value,f.value,_.value,g.value,s==null?void 0:s.selectedClass.value,e.class],style:[C?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:S.value?0:void 0,onClick:T,onKeydown:S.value&&!q.value&&D},k.linkProps),{default:()=>{var A;return[je(S.value,"v-chip"),M&&i(Ue,{key:"filter"},{default:()=>[se(i("div",{class:"v-chip__filter"},[o.filter?i(H,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):i(E,{key:"filter-icon",icon:e.filterIcon},null)]),[[Qe,s.isSelected.value]])]}),K&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(H,{key:"prepend-defaults",disabled:!G,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(ie,null,[e.prependIcon&&i(E,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(oe,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((A=o.default)==null?void 0:A.call(o,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),$&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(H,{key:"append-defaults",disabled:!V,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(ie,null,[e.appendIcon&&i(E,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(oe,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),F&&i("button",X({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},P.value),[o.close?i(H,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i(E,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ne("ripple"),S.value&&e.ripple,null]])}}});export{nl as V};
