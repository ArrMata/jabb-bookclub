import{B as T,u as r,_ as ye,D as pe,M as Be,v as xe,f as C,j as v,E as z,h as Re,r as N,o as a,c as n,a as e,t as _,q as De,G as p,H as L,F as x,k as P,n as w,z as S,I as Ce,J,b as M,w as V,K as g,P as l,L as K,y as Q,N as W,p as Pe,e as Ie}from"./index-c9efb8cd.js";class A{constructor(t){this.id=t.id,this.gbId=t.gbId,this.creatorId=t.creatorId,this.content=t.content,this.rating=t.rating,this.creator=t.creator,this.createdAt=new Date(t.createdAt),this.updatedAt=new Date(t.updatedAt)}}class Ue{async setBookDetailsPageReviews(t){const s=(await T.get(`api/bookReviews?gbId=${t}`)).data;r.bookDetailsPage.userReviews=s.map(m=>new A(m))}async createBookReview(t){const k=await T.post("api/bookReviews",t),s=new A(k.data);return r.bookDetailsPage.userReviews.unshift(s),s}async updateBookReview(t){const k=await T.put(`api/bookReviews/${t.id}`,t),s=new A(k.data),m=r.bookDetailsPage.userReviews.find(B=>B.id==s.id);r.bookDetailsPage.userReviews.splice(m,1,s)}async deleteBookReview(t){await T.delete(`api/bookReviews/${t}`);const k=r.bookDetailsPage.userReviews.findIndex(s=>s.id==t);r.bookDetailsPage.userReviews.splice(k,1)}}const F=new Ue;const Te={components:{BookClubCard:pe,ModalBasic:Be},setup(){const f=xe();let t=f.params.gbId;const k=C({rating:0,status:"planned"}),s=C("reviews"),m=C({gbId:t}),B=C(!1),R=C(!0),D=C({}),o=v(()=>r.account),u=v(()=>r.user),b=v(()=>r.bookDetailsPage.book),h=v(()=>r.bookDetailsPage.userBook),I=v(()=>!!r.bookDetailsPage.userBook),X=v(()=>r.bookDetailsPage.userCreatorAdminClubs),O=v(()=>r.bookDetailsPage.userReviews),Y=v(()=>r.bookDetailsPage.clubs.planned),Z=v(()=>r.bookDetailsPage.clubs.reading),$=v(()=>r.bookDetailsPage.clubs.finished),ee=v(()=>Number(r.bookDetailsPage.bookScore).toFixed(2)),se=v(()=>r.bookDetailsPage.bookScoreUserCount),te=v(()=>r.bookDetailsPage.userBook?r.bookDetailsPage.userBook.rating:0),oe=v(()=>r.bookDetailsPage.userBook?r.bookDetailsPage.userBook.status:"planned"),ie=[{rating:1,description:"Horrendous"},{rating:2,description:"Terrible"},{rating:3,description:"Bad"},{rating:4,description:"Meh"},{rating:5,description:"Average"},{rating:6,description:"Good"},{rating:7,description:"Very Good"},{rating:8,description:"Great"},{rating:9,description:"Outstanding"},{rating:10,description:"Masterpiece"}];async function ae(){try{await g.setBookDetailsPageBook(t),await E(),await j()}catch(i){l.error(i.message)}}async function E(){try{await g.setBookScore(t)}catch(i){l.error(i.message)}}async function j(){try{await F.setBookDetailsPageReviews(t),U()}catch(i){l.error(i.message)}}async function ne(){await H(),await q(),await ce(),U()}async function H(){try{await g.setBookDetailsPageUserBooks(),await q()}catch(i){l.error(i.message)}}async function q(){try{g.setBookDetailsPageUserBook(t),k.value.rating=h.value?h.value.rating:"null",k.value.status=h.value?h.value.status:"null"}catch(i){l.error(i.message)}}async function ce(){try{await Q.setBookDetailsPageUserClubs(u.value.id)}catch(i){l.error(i.message)}}function U(){if("id"in u.value)try{const i=O.value.filter(d=>d.gbId==t&&d.creatorId==u.value.id);R.value=!!i.length}catch(i){l.error(i.message)}}async function de(){try{await g.updateUserBook(h.value.id,{rating:k.value.rating}),E(),l.toast("Rating updated successfully","success")}catch(i){l.error(i.message)}}async function le(){try{await g.updateUserBook(h.value.id,{status:k.value.status}),l.toast("Progress updated successfully","success")}catch(i){l.error(i.message)}}async function re(){D.value.My={bookListType:"user",bookId:I.value?h.value.id:"",existsInBookList:I.value,selected:I.value},X.value.forEach(async i=>{const d=await ue(i);D.value[i.name]={bookListType:"club",bookId:d?d.id:"",clubId:i.id,existsInBookList:!!d,selected:!!d}}),K.getOrCreateInstance("#bookLists").show()}async function ue(i){const d=await g.getBooksByClubId(i.id);if(!d)return null;const y=d.find(we=>we.gbId==t);return y||null}async function _e(){for(const[i,d]of Object.entries(D.value))try{switch(d.bookListType){case"user":d.selected&&!d.existsInBookList?(await g.createUserBook(b.value),l.toast(`Added to ${i} Books successfully`,"success")):!d.selected&&d.existsInBookList&&(await l.confirm(`Are you sure you want to remove this book from ${i} Books?`)?(await g.deleteUserBook(d.bookId),l.toast(`Removed from ${i} Books successfully`,"success")):d.selected=!0),await H();break;case"club":if(d.selected&&!d.existsInBookList){const y={clubId:d.clubId,gbId:b.value.gbId,title:b.value.title,imgUrl:b.value.imgUrl,author:b.value.author,rating:0,status:"planned"};await g.createClubBook(y),l.toast(`Added to ${i} Books successfully`,"success")}else!d.selected&&d.existsInBookList&&(await l.confirm(`Are you sure you want to remove this book from ${i} Books?`)?(await g.deleteClubBook(d.bookId),l.toast(`Removed from ${i} Books successfully`,"success")):d.selected=!0);break}}catch(y){l.error(y.message)}K.getOrCreateInstance("#bookLists").hide()}async function be(){try{const i=await F.createBookReview(m.value);m.value=i,U()}catch(i){l.error(i.message)}}function ve(i){m.value={...i},B.value=!0}function ke(){B.value=!1}async function he(){try{await F.updateBookReview(m.value),B.value=!1,l.toast("Book Review updated successfully","success")}catch(i){l.error(i.message)}}async function ge(i){try{if(!await l.confirm("Are you sure you want to delete this review?"))return;await F.deleteBookReview(i.id),U()}catch(d){l.error(d.message)}}async function G(i){s.value=i,s.value=="reviews"?await j():await me(i)}async function me(i){try{await Q.setBookDetailsPageClubs(t,i)}catch(d){l.error(d.message)}}function fe(){try{g.clearBooks()}catch(i){l.error(i.message)}}return z(async()=>{u.value.id&&await ne()}),z(async()=>{t=f.params.gbId,await ae(),await G("reviews")}),Re(()=>{fe()}),{book:b,account:o,user:u,userBook:h,userBookRating:te,userBookStatus:oe,userHasThisBook:I,bookScore:ee,bookScoreUserCount:se,userBookData:k,userReviews:O,userReviewedStatus:R,clubsPlanned:Y,clubsReading:Z,clubsFinished:$,selectedTab:s,userReviewData:m,bookListsOptions:D,reviewEditMode:B,ratingOptions:ie,updateUserBookRating:de,updateUserBookStatus:le,openBookListsModal:re,updateBookLists:_e,createReview:be,editReview:ve,cancelEditReview:ke,updateReview:he,deleteReview:ge,selectTab:G}}},c=f=>(Pe("data-v-e0cc3eff"),f=f(),Ie(),f),Le={class:"container-fluid"},Se={class:"row"},Me={class:"col-12"},Fe={key:0,class:"row mt-4"},Ve={class:"col-12 col-md-5 d-flex justify-content-md-center"},Ae=["src"],Oe={class:"col-7 h-100"},Ee={class:"d-flex flex-column h-100"},je={class:"fs-4 fw-bold"},He={class:"fs-5 fw-bold"},qe={class:"fs-5"},Ge={class:"mt-2 d-flex justify-content-between"},ze={class:"text-center me-2 mb-2"},Ne=c(()=>e("div",{class:"text-light light-blue-bg rounded px-2"},"Score",-1)),Je={class:"fw-bold"},Ke={key:0,class:"text-muted"},Qe={key:1,class:"fw-bold text-muted"},We={key:0},Xe={class:"d-flex justify-content-around"},Ye={key:0,class:"text-center pe-2"},Ze=c(()=>e("div",{class:"text-light light-blue-bg rounded px-2"},"Rating",-1)),$e=c(()=>e("option",{value:"0"},"Not Rated",-1)),es=["value"],ss={key:1,class:"text-center pe-2"},ts=c(()=>e("div",{class:"text-light light-blue-bg rounded px-2"},"Progress",-1)),os=c(()=>e("option",{value:"planned"},"Plan To Read",-1)),is=c(()=>e("option",{value:"reading"},"Currently Reading",-1)),as=c(()=>e("option",{value:"finished"},"Finished",-1)),ns=[os,is,as],cs={class:"d-flex justify-content-around"},ds={class:"me-2"},ls=c(()=>e("div",{class:"d-flex align-items-center"},[e("i",{class:"mdi mdi-list-status fs-5 pe-2"}),e("div",null,"Lists")],-1)),rs=[ls],us={class:"description-section"},_s=c(()=>e("div",{class:"mt-2 fs-5 fw-bold"},"Description",-1)),bs=["innerHTML"],vs={class:"row mt-3 g-1"},ks={class:"col-3 text-center selectable"},hs={class:"col-3 text-center selectable"},gs={class:"col-4 text-center selectable"},ms={class:"col-2 text-center selectable"},fs={class:"row"},ws={class:"col-12"},ys={class:"dark-blue-bg p-2"},ps={key:0,class:"bg-dark"},Bs={key:0},xs=c(()=>e("div",{class:"p-2"},"There are no clubs currently reading this book.",-1)),Rs=[xs],Ds={key:1,class:"row py-2"},Cs={key:1,class:"bg-dark"},Ps={key:0},Is=c(()=>e("div",{class:"p-2"},"There are no clubs planning to read this book.",-1)),Us=[Is],Ts={key:1,class:"row py-2"},Ls={key:2,class:"bg-dark"},Ss={key:0},Ms=c(()=>e("div",{class:"p-2"},"There are no clubs finished reading this book.",-1)),Fs=[Ms],Vs={key:1,class:"row py-2"},As={key:3,class:"bg-dark"},Os={key:0},Es=c(()=>e("div",{class:"px-3 py-2"},[e("button",{class:"btn btn-sm orange-btn",type:"button","data-bs-toggle":"collapse","data-bs-target":"#bookReviewForm","aria-expanded":"false","aria-controls":"bookReviewForm"}," Add Review ")],-1)),js={class:"collapse",id:"bookReviewForm"},Hs={class:"card mx-3"},qs={class:"card-body"},Gs={class:"row mb-3"},zs={class:"col-3 d-flex align-items-center"},Ns=["src","alt","title"],Js={class:"ms-2 fw-bold"},Ks=c(()=>e("div",{class:"col-5"},null,-1)),Qs={class:"col-4"},Ws={class:"d-flex align-items-center justify-content-around"},Xs={class:"me-2"},Ys=c(()=>e("option",{value:"Recommended"},"Recommend",-1)),Zs=c(()=>e("option",{value:"Mixed Feelings"},"Mixed Feelings",-1)),$s=c(()=>e("option",{value:"Not Recommended"},"Not Recommended",-1)),et=[Ys,Zs,$s],st=c(()=>e("div",{class:""},[e("button",{type:"submit",class:"py-0 px-2 btn btn-sm btn-success"},[e("i",{class:"mdi mdi-send-circle-outline fs-4"})])],-1)),tt={class:"row"},ot={class:"col-12"},it={key:1},at=c(()=>e("div",{class:"p-2"},"There are no reviews for this book.",-1)),nt=[at],ct={key:2,class:"pt-2"},dt={class:"mx-3 rounded dark-blue-bg"},lt={class:"p-3 text-light"},rt={class:"row mb-3"},ut={class:"col-3 d-flex align-items-center"},_t=["src","alt","title"],bt={class:"ms-2"},vt={class:"fw-bold"},kt={class:"text-secondary"},ht={class:"col-9 d-flex flex-column align-items-end"},gt={class:"d-flex align-items-center"},mt={key:0},ft={class:"d-flex align-items-center"},wt=c(()=>e("option",{value:"Recommended"},"Recommend",-1)),yt=c(()=>e("option",{value:"Mixed Feelings"},"Mixed Feelings",-1)),pt=c(()=>e("option",{value:"Not Recommended"},"Not Recommended",-1)),Bt=[wt,yt,pt],xt={class:""},Rt=c(()=>e("i",{class:"mdi mdi-close-outline fs-4"},null,-1)),Dt=[Rt],Ct=c(()=>e("i",{class:"mdi mdi-check-outline fs-4"},null,-1)),Pt=[Ct],It={key:1},Ut={key:0},Tt={class:"px-2 d-flex align-items-center justify-content-center text-light light-blue-bg rounded"},Lt=c(()=>e("i",{class:"mdi mdi-star fs-4"},null,-1)),St={class:"ms-1"},Mt={key:1},Ft={class:"px-2 d-flex align-items-center justify-content-center text-light bg-secondary rounded"},Vt=c(()=>e("i",{class:"mdi mdi-star-half-full fs-4"},null,-1)),At={class:"ms-1"},Ot={key:2},Et={class:"px-2 d-flex align-items-center justify-content-center text-dark bg-danger rounded"},jt=c(()=>e("i",{class:"mdi mdi-star-outline fs-4"},null,-1)),Ht={class:"ms-1"},qt={key:2},Gt={key:0,class:"d-flex"},zt={class:"mx-2"},Nt=["onClick"],Jt=c(()=>e("i",{class:"mdi mdi-pencil-outline fs-4"},null,-1)),Kt=[Jt],Qt={class:""},Wt=["onClick"],Xt=c(()=>e("i",{class:"mdi mdi-trash-can-outline fs-4"},null,-1)),Yt=[Xt],Zt={class:"row"},$t={class:"col-12"},eo={key:0,class:"px-2"},so={key:1,class:"px-2 newline-break"},to=c(()=>e("div",{class:"fw-bold fs-5"},"Book Lists",-1)),oo={key:0},io=["id","onUpdate:modelValue"],ao=["for"],no={key:1},co=["id","onUpdate:modelValue"],lo=["for"],ro=c(()=>e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancel",-1));function uo(f,t,k,s,m,B){const R=N("BookClubCard"),D=N("ModalBasic");return a(),n(x,null,[e("div",Le,[e("div",Se,[e("div",Me,[s.book?(a(),n("div",Fe,[e("div",Ve,[e("img",{class:"img-fluid book-img rounded elevation-2",src:s.book.imgUrlLarge,alt:""},null,8,Ae)]),e("div",Oe,[e("div",Ee,[e("div",je,_(s.book.title),1),e("div",He,_(s.book.subtitle),1),e("div",qe,[De("By "),e("span",null,_(s.book.author),1)]),e("div",Ge,[e("div",ze,[Ne,e("div",Je,_(s.bookScore),1),s.bookScoreUserCount==1?(a(),n("small",Ke,_(s.bookScoreUserCount)+" User",1)):(a(),n("small",Qe,_(s.bookScoreUserCount)+" Users",1))]),s.user.id?(a(),n("div",We,[e("div",Xe,[s.userHasThisBook?(a(),n("div",Ye,[Ze,p(e("select",{onChange:t[0]||(t[0]=o=>s.updateUserBookRating()),"onUpdate:modelValue":t[1]||(t[1]=o=>s.userBookData.rating=o),class:"fw-bold form-select form-select-sm ghost-bg border-0 rounded-start shadow-none selectable","aria-label":".form-select-sm rating"},[$e,(a(!0),n(x,null,P(s.ratingOptions,o=>(a(),n("option",{key:o.rating,value:o.rating},_(o.rating)+" - "+_(o.description),9,es))),128))],544),[[L,s.userBookData.rating]])])):w("",!0),s.userHasThisBook?(a(),n("div",ss,[ts,p(e("select",{onChange:t[2]||(t[2]=o=>s.updateUserBookStatus()),"onUpdate:modelValue":t[3]||(t[3]=o=>s.userBookData.status=o),class:"fw-bold form-select form-select-sm ghost-bg border-0 rounded-start shadow-none selectable","aria-label":".form-select-sm status"},ns,544),[[L,s.userBookData.status]])])):w("",!0),e("div",cs,[e("div",ds,[e("button",{onClick:t[4]||(t[4]=o=>s.openBookListsModal()),type:"button",class:"btn orange-btn"},rs)])])])])):w("",!0)]),e("div",us,[_s,e("small",{innerHTML:s.book.description,class:"pe-3"},null,8,bs)])])])])):w("",!0)])]),e("div",vs,[e("div",ks,[e("div",{class:S(["tab-text text-light px-2 pt-1 rounded-top",{"bg-dark":s.selectedTab!="reading","dark-blue-bg":s.selectedTab=="reading"}]),onClick:t[5]||(t[5]=o=>s.selectTab("reading"))},"Clubs Currently Reading",2)]),e("div",hs,[e("div",{class:S(["tab-text text-light px-2 pt-1 rounded-top",{"bg-dark":s.selectedTab!="planned","dark-blue-bg":s.selectedTab=="planned"}]),onClick:t[6]||(t[6]=o=>s.selectTab("planned"))},"Clubs Planning To Read",2)]),e("div",gs,[e("div",{class:S(["tab-text text-light px-2 pt-1 rounded-top",{"bg-dark":s.selectedTab!="finished","dark-blue-bg":s.selectedTab=="finished"}]),onClick:t[7]||(t[7]=o=>s.selectTab("finished"))},"Clubs Finished Reading",2)]),e("div",ms,[e("div",{class:S(["tab-text text-light px-2 pt-1 rounded-top",{"bg-dark":s.selectedTab!="reviews","dark-blue-bg":s.selectedTab=="reviews"}]),onClick:t[8]||(t[8]=o=>s.selectTab("reviews"))},"User Reviews",2)])]),e("div",fs,[e("div",ws,[e("div",ys,[s.selectedTab=="reading"?(a(),n("div",ps,[s.clubsReading.length?(a(),n("div",Ds,[(a(!0),n(x,null,P(s.clubsReading,o=>(a(),n("div",{key:o.id,class:"col-4 card-height"},[M(R,{clubProp:o},null,8,["clubProp"])]))),128))])):(a(),n("div",Bs,Rs))])):s.selectedTab=="planned"?(a(),n("div",Cs,[s.clubsPlanned.length?(a(),n("div",Ts,[(a(!0),n(x,null,P(s.clubsPlanned,o=>(a(),n("div",{key:o.id,class:"col-4 card-height"},[M(R,{clubProp:o},null,8,["clubProp"])]))),128))])):(a(),n("div",Ps,Us))])):s.selectedTab=="finished"?(a(),n("div",Ls,[s.clubsFinished.length?(a(),n("div",Vs,[(a(!0),n(x,null,P(s.clubsFinished,o=>(a(),n("div",{key:o.id,class:"col-4 card-height"},[M(R,{clubProp:o},null,8,["clubProp"])]))),128))])):(a(),n("div",Ss,Fs))])):s.selectedTab=="reviews"?(a(),n("div",As,[s.user.id&&s.userHasThisBook&&!s.userReviewedStatus?(a(),n("div",Os,[Es,e("div",js,[e("div",Hs,[e("div",qs,[e("form",{onSubmit:t[11]||(t[11]=Ce(o=>s.createReview(),["prevent"]))},[e("div",Gs,[e("div",zs,[e("img",{class:"user-img",src:s.account.picture||s.user.picture,alt:s.account.name,title:s.account.name},null,8,Ns),e("div",Js,_(s.account.name),1)]),Ks,e("div",Qs,[e("div",Ws,[e("div",Xs,[p(e("select",{"onUpdate:modelValue":t[9]||(t[9]=o=>s.userReviewData.rating=o),class:"form-select","aria-label":"Rating",required:""},et,512),[[L,s.userReviewData.rating]])]),st])])]),e("div",tt,[e("div",ot,[p(e("textarea",{"onUpdate:modelValue":t[10]||(t[10]=o=>s.userReviewData.content=o),class:"mb-2 pb-2 form-control",rows:"3",placeholder:"add review...",required:""},null,512),[[J,s.userReviewData.content]])])])],32)])])])])):w("",!0),s.userReviews.length?(a(),n("div",ct,[(a(!0),n(x,null,P(s.userReviews,(o,u)=>(a(),n("div",{key:u,class:"col-12 pb-2"},[e("div",dt,[e("div",lt,[e("div",rt,[e("div",ut,[e("img",{class:"user-img",src:o.creator.picture,alt:o.creator.name,title:o.creator.name},null,8,_t),e("div",bt,[e("div",vt,_(o.creator.name),1),e("small",kt,"Posted "+_(o.createdAt.toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})),1)])]),e("div",ht,[e("div",gt,[s.reviewEditMode?(a(),n("div",mt,[e("div",ft,[e("div",null,[p(e("select",{"onUpdate:modelValue":t[12]||(t[12]=b=>s.userReviewData.rating=b),class:"form-select form-control input-sm","aria-label":"Rating",required:""},Bt,512),[[L,s.userReviewData.rating]])]),e("div",xt,[e("button",{class:"mx-2 btn btn-sm btn-secondary py-0 px-2",onClick:t[13]||(t[13]=b=>s.cancelEditReview()),title:"Cancel Changes"},Dt),e("button",{class:"btn btn-sm btn-success py-0 px-2",onClick:t[14]||(t[14]=b=>s.updateReview()),title:"Save Changes"},Pt)])])])):(a(),n("div",It,[o.rating=="Recommended"?(a(),n("div",Ut,[e("div",Tt,[Lt,e("div",St,_(o.rating),1)])])):o.rating=="Mixed Feelings"?(a(),n("div",Mt,[e("div",Ft,[Vt,e("div",At,_(o.rating),1)])])):o.rating=="Not Recommended"?(a(),n("div",Ot,[e("div",Et,[jt,e("div",Ht,_(o.rating),1)])])):w("",!0)])),s.reviewEditMode?w("",!0):(a(),n("div",qt,[s.user.id==o.creatorId?(a(),n("div",Gt,[e("div",zt,[e("button",{class:"btn btn-sm btn-secondary py-0 px-2",onClick:b=>s.editReview(o),title:"Edit Review"},Kt,8,Nt)]),e("div",Qt,[e("button",{class:"btn btn-sm btn-danger py-0 px-2",onClick:b=>s.deleteReview(o),title:"Delete Review"},Yt,8,Wt)])])):w("",!0)]))])])]),e("div",Zt,[e("div",$t,[s.reviewEditMode?(a(),n("div",eo,[p(e("textarea",{"onUpdate:modelValue":t[15]||(t[15]=b=>s.userReviewData.content=b),class:"mb-2 pb-2 form-control",rows:"3",required:""},null,512),[[J,s.userReviewData.content]])])):(a(),n("div",so,_(o.content),1))])])])])]))),128))])):(a(),n("div",it,nt))])):w("",!0)])])])]),M(D,{id:"bookLists"},{header:V(()=>[to]),body:V(()=>[(a(!0),n(x,null,P(s.bookListsOptions,(o,u,b)=>(a(),n("div",{key:b,class:"form-check"},[s.bookListsOptions[u].existsInBookList?(a(),n("div",oo,[p(e("input",{id:u,"onUpdate:modelValue":h=>s.bookListsOptions[u].selected=h,type:"checkbox",class:"form-check-input",checked:""},null,8,io),[[W,s.bookListsOptions[u].selected]]),e("label",{for:u,class:"form-check-label"},_(u)+" Books",9,ao)])):(a(),n("div",no,[p(e("input",{id:u,"onUpdate:modelValue":h=>s.bookListsOptions[u].selected=h,type:"checkbox",class:"form-check-input"},null,8,co),[[W,s.bookListsOptions[u].selected]]),e("label",{for:u,class:"form-check-label"},_(u)+" Books",9,lo)]))]))),128))]),footer:V(()=>[ro,e("button",{onClick:t[16]||(t[16]=o=>s.updateBookLists()),type:"button",class:"btn btn-primary"},"Submit")]),_:1})],64)}const bo=ye(Te,[["render",uo],["__scopeId","data-v-e0cc3eff"]]);export{bo as default};
