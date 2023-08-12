import{_ as v,v as y,j as i,g as x,r as p,o as d,c as h,a as e,t as k,b as u,w as c,s as g,n as f,u as r,y as P,P as w,z as n,q as o,p as I,e as B}from"./index-627609b6.js";const A={setup(){const s=y(),m=i(()=>r.myMemberships);async function _(){try{const t=s.params.clubId;await P.getClubById(t)}catch(t){w.error(t.message)}}return x(()=>{_(s.params.clubId)}),{route:s,selectedClub:i(()=>r.selectedClub),account:i(()=>r.account),clubMembership:i(()=>{if(Array.isArray(m.value)){const t=m.value.find(b=>b.clubId==r.selectedClub.id);return t||{}}return{}})}}},a=s=>(I("data-v-d20a1bf5"),s=s(),B(),s),M={key:0,class:"container-fluid h-100"},D={class:"row h-100"},S={class:"col-md-4 col-12 d-flex flex-column"},L=["src"],N={class:"dark-blue-bg rounded-bottom text-light fw-bold fs-4 text-center p-1"},V={class:"m-0"},j={class:"flex-grow-1 dark-blue-bg mt-3 rounded-top p-3 fs-4"},z=a(()=>e("i",{class:"mdi mdi-bookmark"},null,-1)),q=a(()=>e("i",{class:"mdi mdi-flag-variant"},null,-1)),E=a(()=>e("i",{class:"mdi mdi-format-list-bulleted"},null,-1)),R=a(()=>e("i",{class:"mdi mdi-forum"},null,-1)),T=a(()=>e("i",{class:"mdi mdi-account-multiple"},null,-1)),F={class:"col-md-8 col-12 h-100 router-view"},G={key:1,class:"container-fluid"},H=a(()=>e("section",{class:"row"},[e("div",{class:"col-12"},[e("h2",{class:"text-light m-4"},[o(" Loading... "),e("i",{class:"mdi mdi-loading mdi-spin"})])])],-1)),J=[H];function K(s,m,_,t,b,O){const l=p("router-link"),C=p("router-view");return t.selectedClub?(d(),h("div",M,[e("section",D,[e("div",S,[e("div",null,[e("img",{class:"img-fluid card-img",src:t.selectedClub.coverImg,alt:"card img"},null,8,L)]),e("div",N,[e("p",V,k(t.selectedClub.name),1)]),e("div",j,[u(l,{to:{name:"Club About Page"}},{default:c(()=>[e("p",{class:n(["route-text",t.route.name=="Club About Page"?"selected":""]),type:"button"},[z,o(" About us ")],2)]),_:1}),!t.selectedClub.private||t.selectedClub.private&&t.clubMembership.status=="joined"?(d(),g(l,{key:0,to:{name:"Club Announcement Page"}},{default:c(()=>[e("p",{class:n(["route-text",t.route.name=="Club Announcement Page"?"selected":""]),type:"button"},[q,o(" Announcements ")],2)]),_:1})):f("",!0),u(l,{to:{name:"Club List Page"}},{default:c(()=>[e("p",{class:n(["route-text",t.route.name=="Club List Page"?"selected":""]),type:"button"},[E,o(" Book List ")],2)]),_:1}),!t.selectedClub.private||t.selectedClub.private&&t.clubMembership.status=="joined"?(d(),g(l,{key:1,to:{name:"Club Discussion Page"}},{default:c(()=>[e("p",{class:n(["route-text",t.route.name=="Club Discussion Page"?"selected":""]),type:"button"},[R,o(" Discussion Board ")],2)]),_:1})):f("",!0),u(l,{to:{name:"Club Member Page"}},{default:c(()=>[e("p",{class:n(["route-text",t.route.name=="Club Member Page"?"selected":""]),type:"button"},[T,o(" Member List ")],2)]),_:1})])]),e("div",F,[u(C)])])])):(d(),h("div",G,J))}const U=v(A,[["render",K],["__scopeId","data-v-d20a1bf5"]]);export{U as default};
