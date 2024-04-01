import{y as c,e as o,f as l,n as e,A as y,B as m,g as k,j as v,h as p,w as i,F as u,z as f,m as b,k as _,t as g,q as x}from"./index-ClDT6PCn.js";import{V as w}from"./VTable-CYVe6UXd.js";import{_ as V}from"./lodash-CXGpkqCe.js";const D=e("label",{for:"search",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"},"Search",-1),S={class:"relative"},B=e("div",{class:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"},[e("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1),C=e("button",{type:"submit",class:"text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Поиск ",-1),I=e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"},"ID"),e("th",{scope:"col",class:"px-6 py-3"},"Название"),e("th",{scope:"col",class:"px-6 py-3"},"Активность")],-1),N={class:"cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"},j=e("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},[e("div",{class:"animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-12 mb-4"})],-1),q=e("td",{class:"px-6 py-4"},[e("div",{class:"animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-240 mb-4"})],-1),z=e("td",{class:"px-6 py-4"},[e("div",{class:"animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-8 mb-4"})],-1),A=[j,q,z],E=["onClick"],F={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},L={class:"px-6 py-4"},T={class:"px-6 py-4"},$=e("div",{class:"font-semibold text-gray-900 dark:text-white block w-full"},[e("div",{class:"px-6 py-3 text-base text-center"},"Ничего не найдено")],-1),J={__name:"Search",setup(M){const a=c(""),d=c(""),r=c(!1),h=async n=>{n.preventDefault(),r.value=!0;const{data:s}=await f.get("",{params:{search:a.value}});d.value=s,r.value=!1};return(n,s)=>(o(),l(u,null,[e("form",{onSubmit:h},[D,e("div",S,[B,y(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t),id:"search",name:"search",type:"search",class:"block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search",required:""},null,512),[[m,a.value,void 0,{lazy:!0}]]),C])],32),k(w,null,v({header:i(()=>[I]),default:i(()=>[r.value?(o(),l(u,{key:0},b([1,2,3],t=>e("tr",N,A)),64)):_("",!0),(o(!0),l(u,null,b(d.value,t=>(o(),l("tr",{onClick:U=>n.$router.push({name:"product",params:{category:t["Раздел ТК"],product:t["ID ТЕ"]}}),class:"cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"},[e("th",F,g(t["ID ТЕ"]),1),e("td",L,g(t.Наименование),1),e("td",T,g(p(x)(t.Активность,"Да","Нет","Неизвестно")),1)],8,E))),256))]),_:2},[a.value!=""&&!r.value&&p(V).isEmpty(d.value)?{name:"pagination",fn:i(()=>[$]),key:"0"}:void 0]),1024)],64))}};export{J as default};
