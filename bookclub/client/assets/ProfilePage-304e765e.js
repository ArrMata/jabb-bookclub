import{y as B,l as v,k as n,a0 as w,_ as M,u as S,n as A,g as f,r as P,o as l,c as a,a as s,t as m,F as u,h,i as I,j as R,P as b,J as C,b as g,w as D,p as E,e as F}from"./index-160b4c87.js";class L{constructor(i){this.id=i.id,this.coverImg=i.coverImg,this.picture=i.picture,this.bio=i.bio,this.name=i.name}}class T{async getProfile(i){const d=await B.get(`/api/profiles/${i}`);v.log("[GOT PROFILE]",d.data),n.profile=new L(d.data)}async getProfileMemberships(i){const d=await B.get(`api/profiles/${i}/clubs`);v.log("[GOT PROFILE MEMBERSHIPS]",d.data),n.profileMemberships=d.data.map(o=>new w(o))}}const x=new T;const V={setup(){const r=S();async function i(){try{const e=r.params.profileId;await x.getProfile(e)}catch(e){b.error(e.message)}}async function d(){try{const e=r.params.profileId;await x.getProfileMemberships(e)}catch(e){b.error(e.message)}}async function o(){try{const e=r.params.profileId;await C.getProfileBooks(e)}catch(e){b.error(e.message)}}return A(()=>{i(r.params.profileId),d(),o()}),{route:r,profile:f(()=>n.profile),profileMemberships:f(()=>n.profileMemberships?n.profileMemberships.filter(e=>e.club):[]),profileBooks:f(()=>n.profileBooks),finishedBooks:f(()=>{var c;return(c=n.profileBooks)==null?void 0:c.filter(_=>_.status=="finished")}),plannedBooks:f(()=>{var c;return(c=n.profileBooks)==null?void 0:c.filter(_=>_.status=="planned")}),currentBooks:f(()=>{var c;return(c=n.profileBooks)==null?void 0:c.filter(_=>_.status=="reading")})}}},p=r=>(E("data-v-888d539a"),r=r(),F(),r),G={key:0,class:"container-fluid"},H={class:"row"},N={class:"col-12 p-0"},O={class:"image-container"},j=["src","alt"],U={class:"account-name"},q={class:"fs-2 pe-2 m-0"},J=["alt"],W=["src","alt"],Y={class:"row mt-5"},z={class:"col-12 mt-5"},K={class:"m-3"},Q=p(()=>s("span",{class:"fs-2"}," About Me: ",-1)),X={class:"fs-4"},Z=p(()=>s("section",{class:"row mt-5"},[s("div",{class:"col-12 mt-5"},[s("p",{class:"m-3 fs-1"}," Clubs ")])],-1)),$={key:0,class:"row mb-4"},ss={class:"membership-card mx-3"},os=["src"],es={class:"dark-blue-bg p-3 text-light card-description"},ts={class:"fs-5"},rs={class:"row mb-4"},is={class:"col-12"},ls={class:"m-3 fs-1"},as=p(()=>s("span",{class:"pe-3"}," My Booklist ",-1)),cs={class:"fs-3 pe-4"},ns=p(()=>s("i",{class:"mdi mdi-book-multiple"},null,-1)),ds={class:"row mb-4"},ps={class:"col-12"},_s={style:{"overflow-x":"auto"},class:"ms-3"},fs={id:"books"},ms=p(()=>s("tr",null,[s("th",{class:"ps-2"}," Title "),s("th",{class:"ps-2"}," Progress "),s("th",{class:"ps-2 text-center"}," Rating "),s("th",{class:"ps-2 text-end"}," Timestamp ")],-1)),us=p(()=>s("tr",null,[s("td",{class:"large-text-style fs-4 orange-text"},"Currently Reading"),s("td"),s("td"),s("td")],-1)),hs=p(()=>s("tr",null,[s("td",{class:"large-text-style fs-4 orange-text"},"Planning to Read"),s("td"),s("td"),s("td")],-1)),gs=p(()=>s("tr",null,[s("td",{class:"large-text-style fs-4 orange-text"},"Finished Books"),s("td"),s("td"),s("td")],-1));function ks(r,i,d,o,e,c){var y;const _=P("router-link"),k=P("UserBookListItem");return o.profile?(l(),a("div",G,[s("section",H,[s("div",N,[s("div",O,[s("img",{class:"img-fluid account-img me-4",src:o.profile.picture,alt:o.profile.name},null,8,j),s("div",U,[s("p",q,m(o.profile.name),1)]),o.profile.coverImg?(l(),a("img",{key:1,class:"coverImg-style img-fluid",src:o.profile.coverImg,alt:o.profile.name},null,8,W)):(l(),a("img",{key:0,class:"coverImg-style img-fluid",src:"https://images.unsplash.com/photo-1551043047-1d2adf00f3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",alt:o.profile.name},null,8,J))])])]),s("section",Y,[s("div",z,[s("p",K,[Q,s("span",X,m(o.profile.bio),1)])])]),Z,Array.isArray(o.profileMemberships)?(l(),a("section",$,[(l(!0),a(u,null,h(o.profileMemberships,t=>(l(),a("div",{class:"col-md-4 col-12 my-3",key:t.id},[s("div",ss,[g(_,{to:{name:"Club About Page",params:{clubId:t.club.id}}},{default:D(()=>[s("img",{class:"img-fluid card-img",src:t.club.coverImg,alt:"card img"},null,8,os),s("div",es,[s("p",ts,m(t.club.name),1),s("p",null,m(t.club.description),1)])]),_:2},1032,["to"])])]))),128))])):I("",!0),s("section",rs,[s("div",is,[s("p",ls,[as,s("span",cs,[ns,R(" "+m((y=o.profileBooks)==null?void 0:y.length),1)])])])]),s("section",ds,[s("div",ps,[s("div",_s,[s("table",fs,[ms,us,(l(!0),a(u,null,h(o.currentBooks,t=>(l(),a("tr",{key:t.id},[g(k,{bookProp:t},null,8,["bookProp"])]))),128)),hs,(l(!0),a(u,null,h(o.plannedBooks,t=>(l(),a("tr",{key:t.id},[g(k,{bookProp:t},null,8,["bookProp"])]))),128)),gs,(l(!0),a(u,null,h(o.finishedBooks,t=>(l(),a("tr",{key:t.id},[g(k,{bookProp:t},null,8,["bookProp"])]))),128))])])])])])):I("",!0)}const ys=M(V,[["render",ks],["__scopeId","data-v-888d539a"]]);export{ys as default};
