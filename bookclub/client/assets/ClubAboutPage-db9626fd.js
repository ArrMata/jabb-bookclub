import{_ as w,u as R,f as g,z as q,g as v,k as u,v as p,P as r,m as y,N as I,r as x,o as l,c as a,a as n,H as B,E as h,I as _,i as b,t as f,F as M,h as D,j as d,b as E,w as A,J as S}from"./index-f9aec92b.js";const T={setup(){const c=R(),s=g(!1),C=g({});let e=g(!1);async function k(){try{const t=c.params.clubId;await S.getBooksByClubId(t)}catch(t){r.error(t.message)}}return q(()=>{k(c.params.clubId)}),{editable:C,isEditing:s,currentBooks:v(()=>u.books.filter(i=>i.status=="reading")),selectedClub:v(()=>u.selectedClub),inClub:v(()=>{const t=u.myMemberships.find(i=>i.clubId==c.params.clubId);return t||{}}),account:v(()=>u.account),myMemberships:v(()=>u.myMemberships),loadingRef:e,route:c,enableEditing(){s.value=!0,C.value={...u.selectedClub}},async editClub(){try{const t=C.value;await p.editClub(t),s.value=!1}catch(t){r.error(t.message)}},async becomeMember(){try{e.value=!0;const i={clubId:c.params.clubId};await y.becomeMember(i),u.selectedClub.memberCount++,r.success("You are now a member of this club."),e.value=!1}catch(t){r.error(t.message)}},async addRequest(){try{e.value=!0;const i={clubId:c.params.clubId};await y.becomeMember(i),r.toast("You have requested to join this club.","success","bottom-end"),e.value=!1}catch(t){r.error(t.message)}},async leaveClub(){try{if(!await r.confirm("Are you sure you want to leave this club?"))return;e.value=!0;const o=u.myMemberships.find(m=>m.clubId==c.params.clubId).id;await y.leaveClub(o),u.selectedClub.memberCount--,r.success("You have left this club."),e.value=!1,I.push({name:"Home"})}catch(t){r.error(t.message)}},async removeRequest(){try{if(!await r.confirm("Are you sure you want to remove this request?"))return;e.value=!0;const o=u.myMemberships.find(m=>m.clubId==c.params.clubId).id;await y.leaveClub(o),r.toast("Your request has been removed","success","bottom-end"),e.value=!1}catch(t){r.error(t.message)}},async deleteClub(){try{if(!await r.confirm("Deleting your club is permanent, are you sure you want to let down your members?"))return;const i=c.params.clubId;await p.deleteClub(i),I.push({name:"Home"})}catch(t){r.error(t.message)}}}}},V={class:"container-fluid"},j={class:"row"},N={class:"col-12 mt-3 dark-blue-bg rounded elevation-3 text-light"},Y={class:"p-3"},J=n("p",{class:"fs-3 fw-bold"},"About us",-1),L={key:3,class:"fs-4"},H={key:4,type:"submit",class:"btn light-blue-btn"},P={class:"fs-4"},U=n("span",{class:"pe-2 fw-semibold"},"Currently Reading:",-1),F={class:"text-light"},z={key:0},G={class:"d-flex justify-content-between mt-5 align-items-end"},K={class:"fs-3"},O=n("i",{class:"mdi mdi-account"},null,-1),Q={class:"fw-light fs-5"},W={class:"pe-5"},X={key:0},Z=n("i",{class:"mdi mdi-account-minus"},null,-1),$={key:1,class:"btn orange-btn fs-3",title:"You've been blocked!",disabled:""},ee=n("i",{class:"mdi mdi-cancel"},null,-1),te=n("i",{class:"mdi mdi-account-minus"},null,-1),se=n("i",{class:"mdi mdi-account-plus"},null,-1),oe=n("i",{class:"mdi mdi-account-plus"},null,-1),ne={key:1};function le(c,s,C,e,k,t){const i=x("router-link");return l(),a("div",V,[n("section",j,[n("div",N,[n("div",Y,[J,n("form",{onSubmit:s[3]||(s[3]=B(o=>e.editClub(),["prevent"]))},[e.isEditing?h((l(),a("input",{key:0,placeholder:"club name...","onUpdate:modelValue":s[0]||(s[0]=o=>e.editable.name=o),class:"form-control mb-2",type:"text",required:"",maxlength:"40",minlength:"3"},null,512)),[[_,e.editable.name]]):b("",!0),e.isEditing?h((l(),a("input",{key:1,placeholder:"club cover photo...","onUpdate:modelValue":s[1]||(s[1]=o=>e.editable.coverImg=o),class:"form-control mb-2",type:"url",maxlength:"300",minlength:"3",required:""},null,512)),[[_,e.editable.coverImg]]):b("",!0),e.isEditing?h((l(),a("textarea",{key:2,class:"form-control mb-2",minlength:"3",maxlength:"750",required:"","onUpdate:modelValue":s[2]||(s[2]=o=>e.editable.description=o),rows:"10"},null,512)),[[_,e.editable.description]]):(l(),a("p",L,f(e.selectedClub.description),1)),e.isEditing?(l(),a("button",H,"Save Changes")):b("",!0)],32),n("div",null,[n("p",P,[U,(l(!0),a(M,null,D(e.currentBooks,(o,m)=>(l(),a("span",{key:o.id,class:"pe-2"},[E(i,{to:{name:"Book Details",params:{gbId:o.gbId}}},{default:A(()=>[n("span",F,[d(f(o.title)+" by "+f(o.author)+" ",1),m!=e.currentBooks.length-1?(l(),a("span",z,",")):b("",!0)])]),_:2},1032,["to"])]))),128))])]),n("div",G,[n("p",K,[O,d(" "+f(e.selectedClub.memberCount),1)]),n("p",Q,[n("span",W," Created on: "+f(e.selectedClub.createdAt.toLocaleDateString()),1)]),e.loadingRef==!1&&e.account.id&&Array.isArray(e.myMemberships)&&e.selectedClub.creatorId!=e.account.id?(l(),a("div",X,[e.inClub.status=="joined"?(l(),a("button",{key:0,class:"btn orange-btn fs-3",onClick:s[4]||(s[4]=o=>e.leaveClub()),title:"Leave Club"},[Z,d(" Leave Club ")])):e.inClub.status=="blocked"?(l(),a("button",$,[ee,d(" Blocked from Club ")])):e.inClub.status=="pending"?(l(),a("button",{key:2,class:"btn orange-btn fs-3",onClick:s[5]||(s[5]=o=>e.removeRequest()),title:"Remove request to join Club"},[te,d(" Remove Request ")])):e.selectedClub.private?(l(),a("button",{key:3,class:"btn light-blue-btn fs-3",onClick:s[6]||(s[6]=o=>e.addRequest()),title:"Request to join club"},[se,d(" Request to Join ")])):(l(),a("button",{key:4,class:"btn light-blue-btn fs-3",onClick:s[7]||(s[7]=o=>e.becomeMember()),title:"Join Club"},[oe,d(" Join Club ")]))])):b("",!0),e.selectedClub.creatorId==e.account.id?(l(),a("div",ne,[n("button",{onClick:s[8]||(s[8]=o=>e.enableEditing()),class:"btn light-blue-btn fs-3 me-2"},"Edit Club"),n("button",{onClick:s[9]||(s[9]=o=>e.deleteClub()),class:"btn orange-btn fs-3"},"Delete Club")])):b("",!0)])])])])])}const re=w(T,[["render",le]]);export{re as default};
