import{_ as S,v as N,E as R,j as a,r as w,o as s,c as n,a as t,s as V,w as A,n as c,F as _,k as b,u as d,l as L,b as h,p as E,e as F,q as T,K as j,P as q}from"./index-c9efb8cd.js";import K from"./ClubBookListItem-07c27e0f.js";const z={setup(){const r=N();async function k(){try{const l=r.params.clubId;await j.getBooksByClubId(l)}catch(l){q.error(l.message)}}return R(()=>{k(r.params.clubId)}),{route:r,selectedClub:a(()=>d.selectedClub),myMemberships:a(()=>d.myMemberships),inClub:a(()=>{var o;const l=(o=d.myMemberships)==null?void 0:o.find(m=>m.clubId==r.params.clubId);return L.log(l),L.log(d.myMemberships),l}),books:a(()=>d.books),finishedBooks:a(()=>d.books.filter(o=>o.status=="finished")),plannedBooks:a(()=>d.books.filter(o=>o.status=="planned")),currentBooks:a(()=>d.books.filter(o=>o.status=="reading"))}},components:{ClubBookListItem:K}},e=r=>(E("data-v-e0972650"),r=r(),F(),r),D={class:"container-fluid"},G={class:"row"},H={class:"col-12"},J={class:"d-flex justify-content-between align-items-center"},O=e(()=>t("p",{class:"fs-1 fw-semibold mt-2"}," Club's Booklist ",-1)),Q=e(()=>t("button",{class:"btn orange-btn",title:"Add a Book to My List"},[t("i",{class:"mdi mdi-book-plus"}),T(" Add a Book to My List ")],-1)),U={class:"row"},W={class:"col-12"},X={style:{"overflow-x":"auto"}},Y={id:"books"},Z=e(()=>t("th",{class:"ps-2"}," Title ",-1)),$=e(()=>t("th",{class:"ps-2 text-center"}," Progress ",-1)),tt=e(()=>t("th",{class:"ps-2 text-center"}," Rating ",-1)),ot=e(()=>t("th",{class:"ps-2 text-end"}," Timestamp ",-1)),et={key:0,class:"ps-2"},st=e(()=>t("td",{class:"large-text-style fs-4 orange-text"},"Currently Reading",-1)),nt=e(()=>t("td",null,null,-1)),lt=e(()=>t("td",null,null,-1)),rt=e(()=>t("td",null,null,-1)),it={key:0},dt=e(()=>t("td",{class:"large-text-style fs-4 orange-text"},"Planning to Read",-1)),at=e(()=>t("td",null,null,-1)),ct=e(()=>t("td",null,null,-1)),ut=e(()=>t("td",null,null,-1)),_t={key:0},bt=e(()=>t("td",{class:"large-text-style fs-4 orange-text"},"Finished Books",-1)),ht=e(()=>t("td",null,null,-1)),kt=e(()=>t("td",null,null,-1)),mt=e(()=>t("td",null,null,-1)),pt={key:0};function Ct(r,k,l,o,m,ft){var p,C,f,B,y,g,x,v,I,P;const M=w("router-link"),u=w("ClubBookListItem");return s(),n("div",D,[t("div",G,[t("div",H,[t("div",J,[O,o.inClub&&(((p=o.inClub)==null?void 0:p.role)=="admin"||((C=o.inClub)==null?void 0:C.role)=="creator")?(s(),V(M,{key:0,to:{name:"Book Search"}},{default:A(()=>[Q]),_:1})):c("",!0)])])]),t("div",U,[t("div",W,[t("div",X,[t("table",Y,[t("tr",null,[Z,$,tt,ot,o.inClub&&((f=o.inClub)==null?void 0:f.role)=="admin"||((B=o.inClub)==null?void 0:B.role)=="creator"?(s(),n("th",et)):c("",!0)]),t("tr",null,[st,nt,lt,rt,o.inClub&&((y=o.inClub)==null?void 0:y.role)=="admin"||((g=o.inClub)==null?void 0:g.role)=="creator"?(s(),n("td",it)):c("",!0)]),(s(!0),n(_,null,b(o.currentBooks,i=>(s(),n("tr",{key:i.id},[h(u,{bookProp:i},null,8,["bookProp"])]))),128)),t("tr",null,[dt,at,ct,ut,o.inClub&&((x=o.inClub)==null?void 0:x.role)=="admin"||((v=o.inClub)==null?void 0:v.role)=="creator"?(s(),n("td",_t)):c("",!0)]),(s(!0),n(_,null,b(o.plannedBooks,i=>(s(),n("tr",{key:i.id},[h(u,{bookProp:i},null,8,["bookProp"])]))),128)),t("tr",null,[bt,ht,kt,mt,o.inClub&&((I=o.inClub)==null?void 0:I.role)=="admin"||((P=o.inClub)==null?void 0:P.role)=="creator"?(s(),n("td",pt)):c("",!0)]),(s(!0),n(_,null,b(o.finishedBooks,i=>(s(),n("tr",{key:i.id},[h(u,{bookProp:i},null,8,["bookProp"])]))),128))])])])])])}const gt=S(z,[["render",Ct],["__scopeId","data-v-e0972650"]]);export{gt as default};
