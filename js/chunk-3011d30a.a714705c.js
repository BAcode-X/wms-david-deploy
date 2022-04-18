(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3011d30a"],{"095e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"knowledge-base"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"5",lg:"3",order:"2","order-md":"1"}},t._l(t.kbContentData,(function(e){return a("v-card",{key:e.character},[a("v-card-title",{staticClass:"kbc-title align-center flex-nowrap"},[a("v-icon",{staticClass:"me-3",attrs:{color:"primary"}},[t._v(" "+t._s(e.icon)+" ")]),a("span",{staticClass:"text-truncate"},[t._v(t._s(e.title)+" ("+t._s(e.questions.length)+")")])],1),a("div",{staticClass:"kb-questions py-1"},t._l(e.questions,(function(e){return a("div",{key:e.question,staticClass:"kb-question d-flex align-start text-sm px-5 my-6 cursor-pointer"},[a("v-icon",{staticClass:"me-2 mt-1",attrs:{size:"14",color:"secondary"}},[t._v(" "+t._s(t.icons.mdiCheckboxBlankCircleOutline)+" ")]),a("span",{staticClass:"text--secondary"},[t._v(t._s(e.question))])],1)})),0)],1)})),1),a("v-col",{attrs:{cols:"12",md:"7",lg:"9",order:"1","order-md":"2"}},[a("v-card",[a("v-card-text",{staticClass:"pb-0"},[a("v-btn",{attrs:{dark:"",color:"secondary",outlined:""},nativeOn:{click:function(e){return t.$router.push({name:"page-knowledge-base-category",params:{category:t.$route.params.category}})}}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" "+t._s(t.icons.mdiChevronLeft)+" ")]),a("span",[t._v("Back")])],1)],1),a("v-card-title",{staticClass:"flex-nowrap"},[a("v-icon",{staticClass:"text--primary me-2"},[t._v(" "+t._s(t.article.titleIcon)+" ")]),a("span",{staticClass:"text-break"},[t._v(t._s(t.article.title))])],1),a("v-card-text",[t._v("Last updated on "+t._s(t.article.lastUpdated))]),a("v-card-text",[t._v(" "+t._s(t.article.postDesc)+" ")]),a("v-card-text",[a("v-img",{attrs:{contain:"",src:t.article.postImg}})],1),a("v-card-text",[a("span",{staticClass:"text-base"},[t._v(t._s(t.article.subtitle))])]),a("v-card-text",{staticClass:"pb-3"},[t._v(" "+t._s(t.article.postDesc2)+" ")]),a("v-card-text",[a("v-list",{staticClass:"kb-questions py-0 ps-2"},t._l(t.article.postTopics,(function(e){return a("v-list-item",{key:e,staticClass:"d-flex align-start cursor-pointer text-sm"},[a("v-icon",{staticClass:"me-2 mt-1",attrs:{size:"14",color:"secondary"}},[t._v(" "+t._s(t.icons.mdiCheckboxBlankCircleOutline)+" ")]),a("span",{staticClass:"text--secondary"},[t._v(" "+t._s(e)+" ")])],1)})),1)],1)],1)],1)],1)],1)},o=[],n=a("94ed"),r={setup:function(){var t=[{category:"account-settings",icon:n["sc"],color:"primary",title:"Account Settings",questions:[{question:"How Secure Is My Password?",slug:"how-secure-is-my-password"},{question:"Can I Change My Username?",slug:"can-i-change-my-username"},{question:"Where Can I Upload My Avatar?",slug:"where-can-i-upload-my-avatar"},{question:"How Do I Change My Timezone?",slug:"how-do-i-change-my-timezone"},{question:"How Do I Change My Password?",slug:"how-do-i-change-my-password"}]}],e={title:"Why Was My Developer Application Rejected?",titleIcon:n["Hb"],lastUpdated:"10 Dec 2018",postDesc:"It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we’ve ever known. The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds.",postImg:a("0d5f"),subtitle:"Houston",postDesc2:"that may have seemed like a very long final phase. The auto targeting was taking us right into a … crater, with a large number of big boulders and rocks … and it required … flying manually over the rock field to find a reasonably good area.",postTopics:["I am a stranger. I come in peace. Take me to your leader and there will be a massive reward for you in eternity.","It’s just mind-blowingly awesome. I apologize, and I wish I was more articulate, but it’s hard to be articulate when your mind’s blown—but in a very good way.","A good rule for rocket experimenters to follow is this"]};return{kbContentData:t,article:e,icons:{mdiCogOutline:n["sc"],mdiCheckboxBlankCircleOutline:n["Sb"],mdiCellphoneCog:n["Hb"],mdiChevronLeft:n["Xb"]}}}},i=r,c=(a("3695"),a("2877")),l=a("6544"),d=a.n(l),u=a("8336"),h=a("b0af"),m=a("99d9"),p=a("62ad"),v=a("132d"),b=a("adda"),g=a("8860"),y=a("da13"),f=a("0fd9"),w=Object(c["a"])(i,s,o,!1,null,null,null);e["default"]=w.exports;d()(w,{VBtn:u["a"],VCard:h["a"],VCardText:m["c"],VCardTitle:m["d"],VCol:p["a"],VIcon:v["a"],VImg:b["a"],VList:g["a"],VListItem:y["a"],VRow:f["a"]})},"0d5f":function(t,e,a){t.exports=a.p+"img/mac-pc.e6a116ce.png"},3695:function(t,e,a){"use strict";a("b5c6")},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"d",(function(){return c}));var s=a("b0af"),o=a("80d2"),n=Object(o["j"])("v-card__actions"),r=Object(o["j"])("v-card__subtitle"),i=Object(o["j"])("v-card__text"),c=Object(o["j"])("v-card__title");s["a"]},b5c6:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3011d30a.a714705c.js.map