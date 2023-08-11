import{_,u as f,n as y,g as a,U as M,r as k,o,c as t,F as m,h as i,i as p,a as s,m as g,P as h,k as c,b as u}from"./index-04b1d668.js";const C={setup(){const l=f();async function b(){try{const e=l.params.clubId;await g.getMembersByClubId(e)}catch(e){h.error(e.message)}}return y(()=>{b()}),{members:a(()=>c.members),inClub:a(()=>{let e={};return Array.isArray(c.myMemberships)&&(e=c.myMemberships.find(r=>r.clubId==l.params.clubId)),e||{}}),joinedMembers:a(()=>c.members.filter(e=>e.status=="joined").sort((e,r)=>{if(e.role=="creator"||r.role=="creator")return 1})),blockedMembers:a(()=>c.members.filter(e=>e.status=="blocked")),pendingMembers:a(()=>c.members.filter(e=>e.status=="pending"))}},components:{MemberCard:M}},v={class:"container-fluid"},P=s("section",{class:"row"},[s("div",{class:"col-12"},[s("p",{class:"m-3 fs-1"}," Member List ")])],-1),j={key:0,class:"row justify-content-around"},B=s("div",{class:"col-12"},[s("p",{class:"m-3 fs-4"}," Pending Join Requests ")],-1),I={class:"row justify-content-around"},w=s("div",{class:"col-12"},[s("p",{class:"m-3 fs-4"}," Members ")],-1),x={key:1,class:"row justify-content-around"},A=s("div",{class:"col-12"},[s("p",{class:"m-3 fs-4"}," Blocked Users ")],-1);function N(l,b,e,r,V,F){const d=k("MemberCard");return o(),t("div",v,[P,r.inClub.role=="creator"?(o(),t("section",j,[B,(o(!0),t(m,null,i(r.pendingMembers,n=>(o(),t("div",{class:"col-md-5 col-12 dark-blue-bg my-2 rounded",key:n.id},[u(d,{memberProp:n},null,8,["memberProp"])]))),128))])):p("",!0),s("section",I,[w,(o(!0),t(m,null,i(r.joinedMembers,n=>(o(),t("div",{class:"col-md-5 col-12 dark-blue-bg my-2 rounded",key:n.id},[u(d,{memberProp:n},null,8,["memberProp"])]))),128))]),r.inClub.role=="creator"?(o(),t("section",x,[A,(o(!0),t(m,null,i(r.blockedMembers,n=>(o(),t("div",{class:"col-md-5 col-12 dark-blue-bg my-2 rounded",key:n.id},[u(d,{memberProp:n},null,8,["memberProp"])]))),128))])):p("",!0)])}const R=_(C,[["render",N]]);export{R as default};
