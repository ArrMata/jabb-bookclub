import{_ as v,f,u as h,n as y,g as c,U as I,C as b,V as D,r,o as n,c as d,q as k,i as x,a as m,j as B,t as S,b as l,F,h as V,s as _,P as u,k as p,p as w,e as N}from"./index-160b4c87.js";const j={setup(){const t=f({}),e=h();async function i(){try{const s=e.params.postId;await _.getPostById(s)}catch(s){u.error(s.message)}}async function o(){try{const s=e.params.postId;await _.getPostComments(s)}catch(s){u.error(s.message)}}return y(()=>{i(e.params.postId),o(e.params.postId)}),{route:e,editable:t,activeClubPost:c(()=>p.activeClubPost),postComments:c(()=>p.postComments),account:c(()=>p.account)}},components:{CommentsForm:I,CommentCard:b,PostDetailsCard:D}},q=t=>(w("data-v-17eed60c"),t=t(),N(),t),A={class:"container-fluid"},E={class:"fs-3"},L=q(()=>m("i",{class:"mdi mdi-comment"},null,-1)),M={class:"row py-3"};function R(t,e,i,o,s,T){const C=r("PostDetailsCard"),P=r("CommentsForm"),g=r("CommentCard");return n(),d("div",A,[o.activeClubPost?(n(),k(C,{key:0,postProp:o.activeClubPost},null,8,["postProp"])):x("",!0),m("p",E,[L,B(" "+S(o.postComments.length)+" Comments",1)]),l(P),m("div",M,[(n(!0),d(F,null,V(o.postComments,a=>(n(),d("div",{key:a==null?void 0:a.id,class:"col-12 dark-blue-bg rounded elevation-5 text-light p-3 mb-3"},[l(g,{commentProp:a},null,8,["commentProp"])]))),128))])])}const z=v(j,[["render",R],["__scopeId","data-v-17eed60c"]]);export{z as default};
