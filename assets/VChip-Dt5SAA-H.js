import{s as J,H as w,W as Y,bn as ge,X as Z,bo as re,t as ee,ay as Se,aI as Ce,bp as de,M as G,x as b,aH as le,bq as Ie,I as te,q as xe,z as ve,d as i,br as ae,j as E,aD as Ve,aq as Pe,aa as fe,ab as pe,ae as he,at as ze,S as H,B as Q,a3 as ne,a4 as Ae,a5 as _e,a7 as we,bs as Ee,a8 as Re,a9 as Te,bt as Fe,ac as Be,aS as Ge,af as Oe,ag as De,ah as Me,aj as We,ak as He,bu as Le,u as qe,bv as $e,ad as Ke,a0 as se,am as je,an as Ne,b5 as Ue,C as L,a1 as Xe,F as ie,ao as oe}from"./index-DAEIea0U.js";function Qe(e){let{selectedElement:n,containerElement:a,isRtl:u,isHorizontal:o}=e;const y=O(o,a),c=ye(o,u,a),k=O(o,n),v=ke(o,n),g=k*.4;return c>v?v-g:c+y<v+k?v-y+k+g:c}function Je(e){let{selectedElement:n,containerElement:a,isHorizontal:u}=e;const o=O(u,a),y=ke(u,n),c=O(u,n);return y-o/2+c/2}function ce(e,n){const a=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[a])||0}function Ye(e,n){const a=e?"clientWidth":"clientHeight";return(n==null?void 0:n[a])||0}function ye(e,n,a){if(!a)return 0;const{scrollLeft:u,offsetWidth:o,scrollWidth:y}=a;return e?n?y-o+u:u:a.scrollTop}function O(e,n){const a=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[a])||0}function ke(e,n){const a=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[a])||0}const Ze=Symbol.for("vuetify:v-slide-group"),me=J({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ze},nextIcon:{type:w,default:"$next"},prevIcon:{type:w,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...Y(),...ge({mobile:null}),...Z(),...re({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ue=ee()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isRtl:u}=Se(),{displayClasses:o,mobile:y}=Ce(e),c=de(e,e.symbol),k=G(!1),v=G(0),g=G(0),I=G(0),d=b(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:R}=le(),{resizeRef:p,contentRect:V}=le(),s=Ie(),m=b(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),q=b(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[0]):-1),S=b(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[c.selected.value.length-1]):-1);if(te){let l=-1;xe(()=>[c.selected.value,R.value,V.value,d.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(R.value&&V.value){const t=d.value?"width":"height";g.value=R.value[t],I.value=V.value[t],k.value=g.value+1<I.value}if(q.value>=0&&p.el){const t=p.el.children[S.value];T(t,e.centerActive)}})})}const P=G(!1);function T(l,t){let r=0;t?r=Je({containerElement:f.el,isHorizontal:d.value,selectedElement:l}):r=Qe({containerElement:f.el,isHorizontal:d.value,isRtl:u.value,selectedElement:l}),D(r)}function D(l){if(!te||!f.el)return;const t=O(d.value,f.el),r=ye(d.value,u.value,f.el);if(!(ce(d.value,f.el)<=t||Math.abs(l-r)<16)){if(d.value&&u.value&&f.el){const{scrollWidth:W,offsetWidth:X}=f.el;l=W-X-l}d.value?s.horizontal(l,m.value):s(l,m.value)}}function h(l){const{scrollTop:t,scrollLeft:r}=l.target;v.value=d.value?r:t}function x(l){if(P.value=!0,!(!k.value||!p.el)){for(const t of l.composedPath())for(const r of p.el.children)if(r===t){T(r);return}}}function $(l){P.value=!1}let F=!1;function M(l){var t;!F&&!P.value&&!(l.relatedTarget&&((t=p.el)!=null&&t.contains(l.relatedTarget)))&&C(),F=!1}function B(){F=!0}function K(l){if(!p.el)return;function t(r){l.preventDefault(),C(r)}d.value?l.key==="ArrowRight"?t(u.value?"prev":"next"):l.key==="ArrowLeft"&&t(u.value?"next":"prev"):l.key==="ArrowDown"?t("next"):l.key==="ArrowUp"&&t("prev"),l.key==="Home"?t("first"):l.key==="End"&&t("last")}function C(l){var r,_;if(!p.el)return;let t;if(!l)t=Ve(p.el)[0];else if(l==="next"){if(t=(r=p.el.querySelector(":focus"))==null?void 0:r.nextElementSibling,!t)return C("first")}else if(l==="prev"){if(t=(_=p.el.querySelector(":focus"))==null?void 0:_.previousElementSibling,!t)return C("last")}else l==="first"?t=p.el.firstElementChild:l==="last"&&(t=p.el.lastElementChild);t&&t.focus({preventScroll:!0})}function z(l){const t=d.value&&u.value?-1:1,r=(l==="prev"?-t:t)*g.value;let _=v.value+r;if(d.value&&u.value&&f.el){const{scrollWidth:W,offsetWidth:X}=f.el;_+=W-X}D(_)}const A=b(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),j=b(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!y.value;case!0:return k.value||Math.abs(v.value)>0;case"mobile":return y.value||k.value||Math.abs(v.value)>0;default:return!y.value&&(k.value||Math.abs(v.value)>0)}}),N=b(()=>Math.abs(v.value)>1),U=b(()=>{if(!f.value)return!1;const l=ce(d.value,f.el),t=Ye(d.value,f.el);return l-t-Math.abs(v.value)>1});return ve(()=>i(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":j.value,"v-slide-group--is-overflowing":k.value},o.value,e.class],style:e.style,tabindex:P.value||c.selected.value.length?-1:0,onFocus:M},{default:()=>{var l,t,r;return[j.value&&i("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!N.value}],onMousedown:B,onClick:()=>N.value&&z("prev")},[((l=a.prev)==null?void 0:l.call(a,A.value))??i(ae,null,{default:()=>[i(E,{icon:u.value?e.nextIcon:e.prevIcon},null)]})]),i("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:h},[i("div",{ref:p,class:"v-slide-group__content",onFocusin:x,onFocusout:$,onKeydown:K},[(t=a.default)==null?void 0:t.call(a,A.value)])]),j.value&&i("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!U.value}],onMousedown:B,onClick:()=>U.value&&z("next")},[((r=a.next)==null?void 0:r.call(a,A.value))??i(ae,null,{default:()=>[i(E,{icon:u.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:z,scrollOffset:v,focus:C,hasPrev:N,hasNext:U}}}),be=Symbol.for("vuetify:v-chip-group"),el=J({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Pe},...me(),...Y(),...re({selectedClass:"v-chip--selected"}),...Z(),...fe(),...pe({variant:"tonal"})},"VChipGroup"),al=ee()({name:"VChipGroup",props:el(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:u}=he(e),{isSelected:o,select:y,next:c,prev:k,selected:v}=de(e,be);return ze({VChip:{color:H(e,"color"),disabled:H(e,"disabled"),filter:H(e,"filter"),variant:H(e,"variant")}}),ve(()=>{const g=ue.filterProps(e);return i(ue,Q(g,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style}),{default:()=>{var I;return[(I=a.default)==null?void 0:I.call(a,{isSelected:o,select:y,next:c,prev:k,selected:v.value})]}})}),{}}}),ll=J({activeClass:String,appendAvatar:String,appendIcon:w,closable:Boolean,closeIcon:{type:w,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:w,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:w,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ne(),onClickOnce:ne(),...Ae(),...Y(),..._e(),...we(),...Ee(),...Re(),...Te(),...Fe(),...Z({tag:"span"}),...fe(),...pe({variant:"tonal"})},"VChip"),nl=ee()({name:"VChip",directives:{Ripple:Be},props:ll(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:a,emit:u,slots:o}=n;const{t:y}=Ge(),{borderClasses:c}=Oe(e),{colorClasses:k,colorStyles:v,variantClasses:g}=De(e),{densityClasses:I}=Me(e),{elevationClasses:d}=We(e),{roundedClasses:f}=He(e),{sizeClasses:R}=Le(e),{themeClasses:p}=he(e),V=qe(e,"modelValue"),s=$e(e,be,!1),m=Ke(e,a),q=b(()=>e.link!==!1&&m.isLink.value),S=b(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||m.isClickable.value)),P=b(()=>({"aria-label":y(e.closeLabel),onClick(h){h.preventDefault(),h.stopPropagation(),V.value=!1,u("click:close",h)}}));function T(h){var x;u("click",h),S.value&&((x=m.navigate)==null||x.call(m,h),s==null||s.toggle())}function D(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),T(h))}return()=>{var z;const h=m.isLink.value?"a":e.tag,x=!!(e.appendIcon||e.appendAvatar),$=!!(x||o.append),F=!!(o.close||e.closable),M=!!(o.filter||e.filter)&&s,B=!!(e.prependIcon||e.prependAvatar),K=!!(B||o.prepend),C=!s||s.isSelected.value;return V.value&&se(i(h,Q({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":M,"v-chip--pill":e.pill,[`${e.activeClass}`]:e.activeClass&&((z=m.isActive)==null?void 0:z.value)},p.value,c.value,C?k.value:void 0,I.value,d.value,f.value,R.value,g.value,s==null?void 0:s.selectedClass.value,e.class],style:[C?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:S.value?0:void 0,onClick:T,onKeydown:S.value&&!q.value&&D},m.linkProps),{default:()=>{var A;return[Ne(S.value,"v-chip"),M&&i(Ue,{key:"filter"},{default:()=>[se(i("div",{class:"v-chip__filter"},[o.filter?i(L,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):i(E,{key:"filter-icon",icon:e.filterIcon},null)]),[[Xe,s.isSelected.value]])]}),K&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(L,{key:"prepend-defaults",disabled:!B,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(ie,null,[e.prependIcon&&i(E,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(oe,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((A=o.default)==null?void 0:A.call(o,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),$&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(L,{key:"append-defaults",disabled:!x,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(ie,null,[e.appendIcon&&i(E,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(oe,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),F&&i("button",Q({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},P.value),[o.close?i(L,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i(E,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[je("ripple"),S.value&&e.ripple,null]])}}});export{nl as V,al as a};
