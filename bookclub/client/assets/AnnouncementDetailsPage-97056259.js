import{_ as g,v,g as f,j as d,C as y,r as n,o as s,c as a,s as b,n as h,a as r,q as k,t as I,b as l,F as x,k as B,x as i,P as p,l as D,u}from"./index-627609b6.js";const F={setup(){const o=v();async function c(){try{const t=o.params.postId;await i.getPostById(t)}catch(t){p.error(t.message)}}async function m(){try{const t=o.params.postId;D.log("[announcement comments...]",t),await i.getPostComments(t)}catch(t){p.error(t.message)}}return f(()=>{c(o.params.postId),m()}),{comments:d(()=>u.postComments),activeClubPost:d(()=>u.activeClubPost)}},components:{CommentCard:y}},N={class:"container-fluid"},V={class:"fs-3"},w=r("i",{class:"mdi mdi-comment"},null,-1),A={class:"row py-3"};function S(o,c,m,t,j,q){const _=n("PostDetailsCard"),C=n("CommentsForm"),P=n("CommentCard");return s(),a("div",N,[t.activeClubPost?(s(),b(_,{key:0,postProp:t.activeClubPost},null,8,["postProp"])):h("",!0),r("p",V,[w,k(" "+I(t.comments.length)+" Comments",1)]),l(C),r("div",A,[(s(!0),a(x,null,B(t.comments,e=>(s(),a("div",{key:e==null?void 0:e.id,class:"col-12 dark-blue-bg rounded elevation-5 text-light p-3 mb-3"},[l(P,{commentProp:e},null,8,["commentProp"])]))),128))])])}const L=g(F,[["render",S]]);export{L as default};
