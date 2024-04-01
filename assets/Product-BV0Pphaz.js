import{s as w,e as r,f as o,n as c,t as i,v as $,k as f,F as u,u as S,p as C,o as I,h as p,m,i as x,w as y,l as g}from"./index-CHAkZN74.js";import{_ as k}from"./lodash-CXGpkqCe.js";import{u as B}from"./products-BUYR1UKw.js";const D={class:"relative"},V=["id","placeholder","value"],N=["for"],E={key:0,class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},L=w({__name:"VInput",props:{id:{type:String},title:{type:String},placeholder:{type:String},value:{type:String},hint:{type:String}},setup(d){const a=d;return(e,n)=>(r(),o(u,null,[c("div",D,[c("input",{type:"text",id:a.id,class:"block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:a.placeholder,value:a.value,disabled:""},null,8,V),c("label",{for:a.id,class:"absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"},i(a.title),9,N)]),e.$slots.default?(r(),o("p",E,[$(e.$slots,"default")])):f("",!0)],64))}}),T={class:"inline-flex items-center cursor-pointer"},z=["checked"],F=c("div",{class:"relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),P={class:"ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"},j=w({__name:"VToggle",props:{value:{default:!1}},setup(d){const a=e=>{switch(e){case"Y":case"Да":case"true":return!0;case"N":case"Нет":case"false":default:return!1}};return(e,n)=>(r(),o("label",T,[c("input",{type:"checkbox",checked:a(d.value),class:"sr-only peer",disabled:""},null,8,z),F,c("span",P,[$(e.$slots,"default")])]))}}),A={class:"text-xl font-black my-2.5"},J={class:"mb-6"},M=["href"],G={__name:"Product",setup(d){const a=S(),e=B(),n=l=>{switch(l){case"Активность":return"toggle";case"ID ТЕ":case"Кто создал":case"Кто изменил":case"Опции":case"ID дочерних ТЕ":case"Комплектующие":case"Производитель ТЕ":case"Поставщик ТЕ":return"relation";default:return"text"}},_=(l,h)=>{try{return h.split(",").map(t=>({id:t,href:(()=>{switch(l){case"ID ТЕ":case"ID дочерних ТЕ":case"Опции":return`https://smttech.bitrix24.ru/crm/catalog/21/product/${t}/`;case"Комплектующие":return`https://b24-7jzv3s.bitrix24.ru/crm/company/details/${t}/`;case"Кто создал":case"Кто изменил":return`https://smttech.bitrix24.ru/company/personal/user/${t}/`;case"Производитель ТЕ":case"Поставщик ТЕ":return`https://smttech.bitrix24.ru/crm/company/details/${t}/`;default:return"#"}})()}))}catch{return console.log(h),[]}},v=l=>l.toLowerCase().replace(/ /g,"_");return C(()=>a.params,e.updateCurrent),I(e.updateCurrent),(l,h)=>p(k).isEmpty(p(e).current)?f("",!0):(r(),o(u,{key:0},[c("h1",A,i(p(e).current.Наименование),1),(r(!0),o(u,null,m(p(e).current,(t,s)=>(r(),o("div",J,[n(s)==="text"||n(s)==="relation"?(r(),x(L,{key:0,id:v(s),title:s,value:t,placeholder:"John"},{default:y(()=>[n(s)==="relation"&&!p(k).isEmpty(_(s,t))?(r(),o(u,{key:0},[g(" Открыть в Bitrix: /"),(r(!0),o(u,null,m(_(s,t),b=>(r(),o(u,null,[c("a",{href:b.href,target:"_blank",class:"text-blue-600 dark:text-blue-500 hover:underline"},i(b.id),9,M),g("/ ")],64))),256))],64)):f("",!0)]),_:2},1032,["id","title","value"])):n(s)==="toggle"?(r(),x(j,{key:1,value:t},{default:y(()=>[g(i(s),1)]),_:2},1032,["value"])):f("",!0)]))),256))],64))}};export{G as default};