import{_ as T,u as D,f as g,D as S,v as I,g as f,k as u,x as w,P as i,m as C,O as B,r as R,o as l,c as a,a as s,I as A,G as _,J as p,i as b,t as h,F as x,h as M,j as m,q as E,b as j,w as V,p as P,e as Y,K as J}from"./index-1e2f9b09.js";const L={setup(){const r=D(),o=g(!1),y=g({});let e=g(!1);async function k(){try{const t=r.params.clubId;await J.getBooksByClubId(t)}catch(t){i.error(t.message)}}return S(()=>{k(r.params.clubId)}),{steps:[{target:"#v-step-0",header:{title:"Here's a section About the club here to gain user interest"},content:"This includes buttons for a user to join or leave the club, or if you're the creator of the club, you can Edit or Delete your club.",params:{placement:"bottom",originalPlacement:"bottom"}}],tourCallBacks:{onFinish:()=>I.editAccount({needsTour:!1}),onSkip:()=>I.editAccount({needsTour:!1})},editable:y,isEditing:o,currentBooks:f(()=>u.books.filter(c=>c.status=="reading")),selectedClub:f(()=>u.selectedClub),inClub:f(()=>{const t=u.myMemberships.find(c=>c.clubId==r.params.clubId);return t||{}}),account:f(()=>u.account),myMemberships:f(()=>u.myMemberships),loadingRef:e,route:r,enableEditing(){o.value=!0,y.value={...u.selectedClub}},async editClub(){try{const t=y.value;await w.editClub(t),o.value=!1}catch(t){i.error(t.message)}},async becomeMember(){try{e.value=!0;const c={clubId:r.params.clubId};await C.becomeMember(c),u.selectedClub.memberCount++,i.success("You are now a member of this club."),e.value=!1}catch(t){i.error(t.message)}},async addRequest(){try{e.value=!0;const c={clubId:r.params.clubId};await C.becomeMember(c),i.toast("You have requested to join this club.","success","bottom-end"),e.value=!1}catch(t){i.error(t.message)}},async leaveClub(){try{if(!await i.confirm("Are you sure you want to leave this club?"))return;e.value=!0;const v=u.myMemberships.find(n=>n.clubId==r.params.clubId).id;await C.leaveClub(v),u.selectedClub.memberCount--,i.success("You have left this club."),e.value=!1,B.push({name:"Home"})}catch(t){i.error(t.message)}},async removeRequest(){try{if(!await i.confirm("Are you sure you want to remove this request?"))return;e.value=!0;const v=u.myMemberships.find(n=>n.clubId==r.params.clubId).id;await C.leaveClub(v),i.toast("Your request has been removed","success","bottom-end"),e.value=!1}catch(t){i.error(t.message)}},async deleteClub(){try{if(!await i.confirm("Deleting your club is permanent, are you sure you want to let down your members?"))return;const c=r.params.clubId;await w.deleteClub(c),B.push({name:"Home"})}catch(t){i.error(t.message)}}}}},d=r=>(P("data-v-b0adb944"),r=r(),Y(),r),N={class:"container-fluid"},F={class:"row",id:"v-step-0"},H={class:"col-12 mt-3 dark-blue-bg rounded elevation-3 text-light"},U={class:"p-3"},G=d(()=>s("p",{class:"fs-3 fw-bold"},"About us",-1)),K={key:3,class:"fs-4 club-description"},O={key:4,type:"submit",class:"btn light-blue-btn"},z={class:"fs-4"},Q=d(()=>s("span",{class:"pe-2 fw-semibold"},"Currently Reading:",-1)),W={class:"text-light"},X={key:0},Z={class:"d-flex justify-content-between mt-5 align-items-end"},$={class:"fs-3"},ee=d(()=>s("i",{class:"mdi mdi-account"},null,-1)),te={class:"fw-light fs-5"},oe={class:"pe-5"},se={key:0},ne=d(()=>s("i",{class:"mdi mdi-account-minus"},null,-1)),le={key:1,class:"btn orange-btn fs-3",title:"You've been blocked!",disabled:""},ae=d(()=>s("i",{class:"mdi mdi-cancel"},null,-1)),re=d(()=>s("i",{class:"mdi mdi-account-minus"},null,-1)),ie=d(()=>s("i",{class:"mdi mdi-account-plus"},null,-1)),ce=d(()=>s("i",{class:"mdi mdi-account-plus"},null,-1)),ue={key:1};function de(r,o,y,e,k,t){const c=R("router-link"),v=R("Tour");return l(),a(x,null,[s("div",N,[s("section",F,[s("div",H,[s("div",U,[G,s("form",{onSubmit:o[3]||(o[3]=A(n=>e.editClub(),["prevent"]))},[e.isEditing?_((l(),a("input",{key:0,placeholder:"club name...","onUpdate:modelValue":o[0]||(o[0]=n=>e.editable.name=n),class:"form-control mb-2",type:"text",required:"",maxlength:"40",minlength:"3"},null,512)),[[p,e.editable.name]]):b("",!0),e.isEditing?_((l(),a("input",{key:1,placeholder:"club cover photo...","onUpdate:modelValue":o[1]||(o[1]=n=>e.editable.coverImg=n),class:"form-control mb-2",type:"url",maxlength:"300",minlength:"3",required:""},null,512)),[[p,e.editable.coverImg]]):b("",!0),e.isEditing?_((l(),a("textarea",{key:2,class:"form-control mb-2",minlength:"3",maxlength:"750",required:"","onUpdate:modelValue":o[2]||(o[2]=n=>e.editable.description=n),rows:"10"},null,512)),[[p,e.editable.description]]):(l(),a("p",K,h(e.selectedClub.description),1)),e.isEditing?(l(),a("button",O,"Save Changes")):b("",!0)],32),s("div",null,[s("p",z,[Q,(l(!0),a(x,null,M(e.currentBooks,(n,q)=>(l(),a("span",{key:n.id,class:"pe-2"},[j(c,{to:{name:"Book Details",params:{gbId:n.gbId}}},{default:V(()=>[s("span",W,[m(h(n.title)+" by "+h(n.author)+" ",1),q!=e.currentBooks.length-1?(l(),a("span",X,",")):b("",!0)])]),_:2},1032,["to"])]))),128))])]),s("div",Z,[s("p",$,[ee,m(" "+h(e.selectedClub.memberCount),1)]),s("p",te,[s("span",oe," Created on: "+h(e.selectedClub.createdAt.toLocaleDateString()),1)]),e.loadingRef==!1&&e.account.id&&Array.isArray(e.myMemberships)&&e.selectedClub.creatorId!=e.account.id?(l(),a("div",se,[e.inClub.status=="joined"?(l(),a("button",{key:0,class:"btn orange-btn fs-3",onClick:o[4]||(o[4]=n=>e.leaveClub()),title:"Leave Club"},[ne,m(" Leave Club ")])):e.inClub.status=="blocked"?(l(),a("button",le,[ae,m(" Blocked from Club ")])):e.inClub.status=="pending"?(l(),a("button",{key:2,class:"btn orange-btn fs-3",onClick:o[5]||(o[5]=n=>e.removeRequest()),title:"Remove request to join Club"},[re,m(" Remove Request ")])):e.selectedClub.private?(l(),a("button",{key:3,class:"btn light-blue-btn fs-3",onClick:o[6]||(o[6]=n=>e.addRequest()),title:"Request to join club"},[ie,m(" Request to Join ")])):(l(),a("button",{key:4,class:"btn light-blue-btn fs-3",onClick:o[7]||(o[7]=n=>e.becomeMember()),title:"Join Club"},[ce,m(" Join Club ")]))])):b("",!0),e.selectedClub.creatorId==e.account.id?(l(),a("div",ue,[s("button",{onClick:o[8]||(o[8]=n=>e.enableEditing()),class:"btn light-blue-btn fs-3 me-2"},"Edit Club"),s("button",{onClick:o[9]||(o[9]=n=>e.deleteClub()),class:"btn orange-btn fs-3"},"Delete Club")])):b("",!0)])])])])]),e.account.needsTour?(l(),E(v,{key:0,steps:e.steps,callbacks:e.tourCallBacks},null,8,["steps","callbacks"])):b("",!0)],64)}const me=T(L,[["render",de],["__scopeId","data-v-b0adb944"]]);export{me as default};
