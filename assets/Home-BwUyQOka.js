import{g as y,m as k,p as ae,u as f,c as t,a as V,b as R,I as x,d as $,F as O,V as U,e as D,f as ne,h as se,i as le,j as ie,k as de,l as re,n as oe,o as ue,q as ce,r as me,R as ve,s as ge,t as ye,v as fe,w as be,x as pe,y as ke,z as Ve,A as Ce,B as he,C as xe,D as Ie,E as F,G as Pe,H as Se,J as q,L as Ae,K as _e,M as L,N as Be,O as Ne,P as Te,Q as we,_ as De,S as Fe,T as Le,U as Re,W as T,X as w,Y as i,Z as je,$ as C,a0 as Me,a1 as c,a2 as h,a3 as Oe,a4 as z}from"./index-CPnsM1d-.js";import{c as Ue,m as ze,V as H}from"./VCheckboxBtn-CIitBXzd.js";import{m as He,u as Ee,V as E}from"./VInput-Bmougzpl.js";import{V as J}from"./VAvatar-CLc36z_T.js";import{V as Je}from"./VContainer-CymI4aSN.js";import"./VSelectionControl-DkMxD8l5.js";const G=y()({name:"VCardActions",props:k(),setup(e,l){let{slots:a}=l;return ae({VBtn:{slim:!0,variant:"text"}}),f(()=>{var n;return t("div",{class:["v-card-actions",e.class],style:e.style},[(n=a.default)==null?void 0:n.call(a)])}),{}}}),$e=V({opacity:[Number,String],...k(),...R()},"VCardSubtitle"),qe=y()({name:"VCardSubtitle",props:$e(),setup(e,l){let{slots:a}=l;return f(()=>t(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},a)),{}}}),Ge=Ue("v-card-title"),Ke=V({appendAvatar:String,appendIcon:x,prependAvatar:String,prependIcon:x,subtitle:[String,Number],title:[String,Number],...k(),...$()},"VCardItem"),Qe=y()({name:"VCardItem",props:Ke(),setup(e,l){let{slots:a}=l;return f(()=>{var m;const n=!!(e.prependAvatar||e.prependIcon),d=!!(n||a.prepend),o=!!(e.appendAvatar||e.appendIcon),u=!!(o||a.append),s=!!(e.title!=null||a.title),b=!!(e.subtitle!=null||a.subtitle);return t("div",{class:["v-card-item",e.class],style:e.style},[d&&t("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?t(D,{key:"prepend-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):t(O,null,[e.prependAvatar&&t(J,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&t(U,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),t("div",{class:"v-card-item__content"},[s&&t(Ge,{key:"title"},{default:()=>{var r;return[((r=a.title)==null?void 0:r.call(a))??e.title]}}),b&&t(qe,{key:"subtitle"},{default:()=>{var r;return[((r=a.subtitle)==null?void 0:r.call(a))??e.subtitle]}}),(m=a.default)==null?void 0:m.call(a)]),u&&t("div",{key:"append",class:"v-card-item__append"},[a.append?t(D,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):t(O,null,[e.appendIcon&&t(U,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&t(J,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),We=V({opacity:[Number,String],...k(),...R()},"VCardText"),K=y()({name:"VCardText",props:We(),setup(e,l){let{slots:a}=l;return f(()=>t(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},a)),{}}}),Xe=V({appendAvatar:String,appendIcon:x,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:x,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ne(),...k(),...$(),...se(),...le(),...ie(),...de(),...re(),...oe(),...ue(),...R(),...ce(),...me({variant:"elevated"})},"VCard"),Ye=y()({name:"VCard",directives:{Ripple:ve},props:Xe(),setup(e,l){let{attrs:a,slots:n}=l;const{themeClasses:d}=ge(e),{borderClasses:o}=ye(e),{colorClasses:u,colorStyles:s,variantClasses:b}=fe(e),{densityClasses:m}=be(e),{dimensionStyles:r}=pe(e),{elevationClasses:I}=ke(e),{loaderClasses:P}=Ve(e),{locationStyles:S}=Ce(e),{positionClasses:p}=he(e),{roundedClasses:A}=xe(e),v=Ie(e,a),_=F(()=>e.link!==!1&&v.isLink.value),g=F(()=>!e.disabled&&e.link!==!1&&(e.link||v.isClickable.value));return f(()=>{const B=_.value?"a":e.tag,N=!!(n.title||e.title!=null),Q=!!(n.subtitle||e.subtitle!=null),W=N||Q,X=!!(n.append||e.appendAvatar||e.appendIcon),Y=!!(n.prepend||e.prependAvatar||e.prependIcon),Z=!!(n.image||e.image),ee=W||Y||X,te=!!(n.text||e.text!=null);return Pe(t(B,L({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":g.value},d.value,o.value,u.value,m.value,I.value,P.value,p.value,A.value,b.value,e.class],style:[s.value,r.value,S.value,e.style],onClick:g.value&&v.navigate,tabindex:e.disabled?-1:void 0},v.linkProps),{default:()=>{var j;return[Z&&t("div",{key:"image",class:"v-card__image"},[n.image?t(D,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):t(q,{key:"image-img",cover:!0,src:e.image},null)]),t(Ae,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:n.loader}),ee&&t(Qe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),te&&t(K,{key:"text"},{default:()=>{var M;return[((M=n.text)==null?void 0:M.call(n))??e.text]}}),(j=n.default)==null?void 0:j.call(n),n.actions&&t(G,null,{default:n.actions}),_e(g.value,"v-card")]}}),[[Se("ripple"),g.value&&e.ripple]])}),{}}}),Ze=V({...He(),...Be(ze(),["inline"])},"VCheckbox"),et=y()({name:"VCheckbox",inheritAttrs:!1,props:Ze(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,l){let{attrs:a,slots:n}=l;const d=Ne(e,"modelValue"),{isFocused:o,focus:u,blur:s}=Ee(e),b=Te(),m=F(()=>e.id||`checkbox-${b}`);return f(()=>{const[r,I]=we(a),P=E.filterProps(e),S=H.filterProps(e);return t(E,L({class:["v-checkbox",e.class]},r,P,{modelValue:d.value,"onUpdate:modelValue":p=>d.value=p,id:m.value,focused:o.value,style:e.style}),{...n,default:p=>{let{id:A,messagesId:v,isDisabled:_,isReadonly:g,isValid:B}=p;return t(H,L(S,{id:A.value,"aria-describedby":v.value,disabled:_.value,readonly:g.value},I,{error:B.value===!1,modelValue:d.value,"onUpdate:modelValue":N=>d.value=N,onFocus:u,onBlur:s}),n)}})}),{}}}),tt={__name:"Home",emits:["hide-appbar","start-survey","restart-survey","continue-survey"],setup(e,{emit:l}){const a=l;Fe(()=>{a("hide-appbar"),localStorage.setItem("userProgress",JSON.stringify({currentStep:0})),console.log("set localStorage userProgress:",localStorage.getItem("userProgress"))}),Le(()=>{});const n=Re(!0);function d(){localStorage.setItem("appInitialized","false"),console.log("emitting start-survey event."),a("start-survey")}function o(){console.log("emitting continue-survey event.");const s=(JSON.parse(localStorage.getItem("userProgress"))||{}).currentStep||0;a("continue-survey",{currentStep:s}),console.log("Current Step sent with continue-survey:",s)}return(u,s)=>(w(),T(Je,null,{default:i(()=>[t(C,{"no-gutters":"",justify:"center",class:"margin-88 | margin-top-180"},{default:i(()=>[t(q,{src:je,width:207,height:71,"min-width":"207px","min-height":"72px"})]),_:1}),t(C,{"no-gutters":"",justify:"center",class:"margin-88px | mt-2"},{default:i(()=>[t(Me,{class:"title-text-sub"},{default:i(()=>s[0]||(s[0]=[c(" 선호를 이미지로, 나만의 룸메이트 매칭 ")])),_:1})]),_:1}),t(Ye,{class:"mx-auto | margin-top-72 | pt-2 pl-4 pr-4","max-width":"370",rounded:"lg"},{default:i(()=>[t(K,null,{default:i(()=>s[1]||(s[1]=[h("div",{class:"text-medium-emphasis | text-align-center"},[c(" 본 서비스는 품질 향상과 인사이트 도출을 위해"),h("br"),c(" 응답을 수집하여 통계 및 데이터 분석에 활용합니다."),h("br"),c(" 위 내용은 해당 목적 외에는 사용되지 않으며,"),h("br"),c(" 관련 법령을 준수하여 안전하게 관리됩니다. ")],-1)])),_:1}),t(Oe),t(G,{justify:"center"},{default:i(()=>[t(et,{label:"응답내용 수집에 동의합니다","hide-details":"",density:"compact"})]),_:1})]),_:1}),n.value?(w(),T(C,{key:0,"no-gutters":"",justify:"center",class:"margin-48 | mt-10"},{default:i(()=>[t(z,{onClick:d,variant:"flat",color:"#FF6161",rounded:"xl",size:"large",width:"100%",height:"52px",class:"text-btn"},{default:i(()=>s[2]||(s[2]=[c(" 시작하기 ")])),_:1})]),_:1})):(w(),T(C,{key:2,"no-gutters":"",justify:"center",class:"margin-48 | mt-2"},{default:i(()=>[t(z,{onClick:o,variant:"flat",color:"#FF6161",rounded:"xl",size:"large",width:"100%",height:"52px",class:"text-btn"},{default:i(()=>s[4]||(s[4]=[c(" 이어하기 ")])),_:1})]),_:1}))]),_:1}))}},rt=De(tt,[["__scopeId","data-v-ef73f604"]]);export{rt as default};
