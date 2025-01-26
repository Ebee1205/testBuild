import{_ as I,P as u,N as V,O as b,a1 as g,Q as $,T as r,S as j,c as l,Y as c,W as a}from"./index-DLV-i7zt.js";import{B as x,_ as N,V as F}from"./VLabel-Bm9v35y6.js";import{V as v}from"./VSelect-CWrQCprm.js";import"./VTextField-BfxauE-Y.js";import"./VInput-DcJEGHuU.js";import"./forwardRefs-BnaRsb4p.js";import"./VAvatar-B18rJ1EK.js";import"./VOverlay-BfBFlSGf.js";import"./createSimpleFunctional-S1jyd5od.js";import"./VSelectionControl-BWJTUizc.js";const U="기본정보",P="먼저, 가장 기본적인 것부터 작성해볼까요?<br>본인이 입실할 기숙사 등 나에 대한 정보를 기입해주세요.",B={__name:"SurveyPage1",setup(O){const s=u(null),n=u(0),i=u(0),d=u("비공개"),f=u([{title:"예지 1동",value:"예지 1동"},{title:"예지 2동",value:"예지 2동"},{title:"예지 3동",value:"예지 3동"},{title:"명덕 1동",value:"명덕 1동"},{title:"명덕 2동",value:"명덕 2동"},{title:"명덕 3동",value:"명덕 3동"}]),p=u([{title:"비공개",value:0},...Array.from({length:15},(t,e)=>{const o=2010-e;return{title:`${o}년`,value:o}})]),y=u([{title:"비공개",value:0},...Array.from({length:10},(t,e)=>{const o=25-e;return{title:`${o}학번`,value:o}})]),S=u([{title:"비공개",value:0},{title:"예술대학",value:1},{title:"체육대학",value:2},{title:"예술공학대학",value:3},{title:"생명공학대학",value:4},{title:"공과대학",value:5}]);V(()=>{_()}),b(()=>{}),g(s,(t,e)=>{console.log(`--- Dorm changed from ${e} to ${t}`),m("dorm",t)}),g(n,(t,e)=>{console.log(`--- Birth year changed from ${e} to ${t}`),m("birth",t)}),g(i,(t,e)=>{console.log(`--- Student ID changed from ${e} to ${t}`),m("studentId",t)}),g(d,(t,e)=>{console.log(`--- College changed from ${e} to ${t}`),m("college",t)});function _(){localStorage.setItem("userProgress",JSON.stringify({currentStep:1})),console.log("Updated localStorage userProgress:",localStorage.getItem("userProgress"));const t=localStorage.getItem("userSurvey");if(t){const e=JSON.parse(t);s.value=e.dorm||"예지 1동",n.value=e.birth||0,i.value=e.studentId||0,d.value=e.college||"비공개"}}function m(t,e){const o=JSON.parse(localStorage.getItem("userSurvey"))||{};o[t]=e,localStorage.setItem("userSurvey",JSON.stringify(o)),console.log(`Updated localStorage userSurvey: ${t} = ${e}`)}return(t,e)=>(j(),$(x,null,{default:r(()=>[l(N,{title:U,desc:P}),l(a,{"no-gutters":"",justify:"start"},{default:r(()=>[l(F,null,{default:r(()=>e[4]||(e[4]=[c("기숙사를 선택해주세요")])),_:1})]),_:1}),l(a,{"no-gutters":"",justify:"center",class:"mt-1"},{default:r(()=>[l(v,{variant:"outlined",rounded:"lg","bg-color":"#FFFFFF","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858",items:f.value,placeholder:"기숙사",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=o=>s.value=o)},null,8,["items","modelValue"])]),_:1}),l(a,{"no-gutters":"",justify:"start"},{default:r(()=>[l(F,null,{default:r(()=>e[5]||(e[5]=[c("단과대를 선택해주세요")])),_:1})]),_:1}),l(a,{"no-gutters":"",justify:"center",class:"mt-1"},{default:r(()=>[l(v,{variant:"outlined",rounded:"lg","bg-color":"#FFFFFF","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858",items:S.value,modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=o=>d.value=o)},null,8,["items","modelValue"])]),_:1}),l(a,{"no-gutters":"",justify:"start"},{default:r(()=>[l(F,null,{default:r(()=>e[6]||(e[6]=[c("학번을 선택해주세요")])),_:1})]),_:1}),l(a,{"no-gutters":"",justify:"center",class:"mt-1"},{default:r(()=>[l(v,{variant:"outlined",rounded:"lg","bg-color":"#FFFFFF","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858",items:y.value,modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=o=>i.value=o)},null,8,["items","modelValue"])]),_:1}),l(a,{"no-gutters":"",justify:"start"},{default:r(()=>[l(F,null,{default:r(()=>e[7]||(e[7]=[c("생년을 선택해주세요")])),_:1})]),_:1}),l(a,{"no-gutters":"",justify:"center",class:"mt-1"},{default:r(()=>[l(v,{variant:"outlined",rounded:"lg","bg-color":"#FFFFFF","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858",items:p.value,modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=o=>n.value=o)},null,8,["items","modelValue"])]),_:1})]),_:1}))}},W=I(B,[["__scopeId","data-v-515e1d85"]]);export{W as default};
