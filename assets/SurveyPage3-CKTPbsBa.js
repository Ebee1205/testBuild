import{B as U,_ as N}from"./SubTitle-n6yaut4_.js";import{_,U as n,S as j,T as C,a5 as F,W as h,Y as s,X as B,c as l,a1 as f,$ as i,a0 as P,a2 as w}from"./index-DilWOkcR.js";import{a as p}from"./VInput-CanaCnH2.js";import{V as x}from"./VSelect-Cvql13xB.js";import{V as S}from"./VTextField-Bre0F0r9.js";import"./VCheckboxBtn-D2c0rKlD.js";import"./VSelectionControl-B2QezWYu.js";import"./VAvatar-B7VeIMOC.js";import"./VChip-BcRtOBu7.js";const E="흡연/음주",J="",O={__name:"SurveyPage3",setup(T){const m=n(0),V=n([{title:"비흡연",value:0},{title:"연초",value:1},{title:"전자담배",value:2}]),u=n(null),r=n(null),c=n(0),y=n([{title:"주",value:0},{title:"월",value:1},{title:"년",value:2}]),g=n(null),d=n("");j(()=>{$()}),C(()=>{}),F(m,(t,e)=>{console.log(`--- smoke changed from ${e} to ${t}`),v("smoke",t)}),F([r,c,g],([t,e,o],[a,I,b])=>{console.log(`dymCnt changed from ${a} to ${t}`),console.log(`dym changed from ${I} to ${e}`),console.log(`drinkCnt changed from ${b} to ${o}`);const k=`${String(t).padStart(2,"0")}-${e}-${String(o).padStart(2,"0")}`;u.value=k,console.log(`Formatted drink: ${u.value}`),v("drink",u.value)}),F(d,(t,e)=>{console.log(`--- sdEtc changed from ${e} to ${t}`),v("sdEtc",t)});function $(){localStorage.setItem("userProgress",JSON.stringify({currentStep:3})),console.log("Updated localStorage userProgress:",localStorage.getItem("userProgress"));const t=localStorage.getItem("userSurvey");if(t){const e=JSON.parse(t);m.value=e.smoke||0,u.value=e.drink||"00-0-0";const o=u.value.split("-");r.value=o.length>0?parseInt(o[0],10):0,c.value=o.length>1?parseInt(o[1],10):0,g.value=o.length>2?parseInt(o[2],10):0,d.value=e.sdEtc||""}}function v(t,e){const o=JSON.parse(localStorage.getItem("userSurvey"))||{};o[t]=e,localStorage.setItem("userSurvey",JSON.stringify(o)),console.log(`Updated localStorage userSurvey: ${t} = ${e}`)}return(t,e)=>{const o=N;return B(),h(U,null,{default:s(()=>[l(o,{title:E,desc:J}),l(i,{"no-gutters":"",justify:"start"},{default:s(()=>[l(p,null,{default:s(()=>e[7]||(e[7]=[f("흡연여부를 선택해주세요")])),_:1})]),_:1}),l(i,{"no-gutters":"",justify:"center",class:"mt-1"},{default:s(()=>[l(x,{variant:"outlined",rounded:"lg","bg-color":"#FFFFFF","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858",items:V.value,modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=a=>m.value=a)},null,8,["items","modelValue"])]),_:1}),l(i,{"no-gutters":"",justify:"center",class:"mt-1"},{default:s(()=>[l(P,{class:"d-flex | justify-center | align-center"},{default:s(()=>[l(S,{variant:"underlined","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858","hide-details":"",class:"custom-text-field","max-width":"40px","min-width":"40px",placeholder:"0",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=a=>r.value=a),maxlength:"2",onInput:e[2]||(e[2]=a=>r.value=t.Util.getInstance().isNumeric(r.value))},null,8,["modelValue"]),l(x,{variant:"outlined",rounded:"lg","bg-color":"#FFFFFF","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858","hide-details":"",items:y.value,"max-width":"80px","min-width":"80px",class:"ml-2 | mr-2",modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=a=>c.value=a)},null,8,["items","modelValue"]),l(p,null,{default:s(()=>e[8]||(e[8]=[f(" 에 ")])),_:1}),l(S,{variant:"underlined","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858","hide-details":"",class:"custom-text-field | ml-7 | mr-2","max-width":"40px","min-width":"40px",placeholder:"0",modelValue:g.value,"onUpdate:modelValue":e[4]||(e[4]=a=>g.value=a),maxlength:"2",onInput:e[5]||(e[5]=a=>r.value=t.Util.getInstance().isNumeric(r.value))},null,8,["modelValue"]),l(p,null,{default:s(()=>e[9]||(e[9]=[f(" 번 ")])),_:1})]),_:1})]),_:1}),l(i,{"no-gutters":"",justify:"start",class:"margin-top-52"},{default:s(()=>e[10]||(e[10]=[w("label",{class:"custom-label"},"흡연/음주에 대해 하고싶은 말이 있다면 적어주세요",-1)])),_:1}),l(i,{"no-gutters":"",justify:"center",class:"mt-1"},{default:s(()=>[l(S,{variant:"outlined",rounded:"lg","bg-color":"#FFFFFF","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858",placeholder:"술 주사, 흡연 습관 등",modelValue:d.value,"onUpdate:modelValue":e[6]||(e[6]=a=>d.value=a),maxlength:"30"},{"append-inner":s(()=>[l(p,{class:"count-label",text:`${d.value.length}/30`},null,8,["text"])]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},G=_(O,[["__scopeId","data-v-7e2fff3d"]]);export{G as default};
