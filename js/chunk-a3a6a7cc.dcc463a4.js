(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3a6a7cc"],{"0e20":function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o}));a("b680"),a("d3b7"),a("25f0"),a("ac1f"),a("1276"),a("159b"),a("fb6a"),a("a15b"),a("d81d"),a("5319");var s=a("2405"),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return t>999?"".concat((t/1e3).toFixed(e),"k"):t},r=function(t){if(!t)return"";var e=t.split(" ");return e.map((function(t){return t.charAt(0).toUpperCase()})).join("")},n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric"};return t?new Intl.DateTimeFormat("en-US",e).format(new Date(t)):t},o=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=new Date(t),i={month:"short",day:"numeric"};return e&&Object(s["h"])(a)&&(i={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",i).format(new Date(t))}},1681:function(t,e,a){},"4bd4":function(t,e,a){"use strict";var s=a("5530"),i=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),r=a("7e2b"),n=a("3206");e["a"]=Object(i["a"])(r["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},s={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(s.valid=a(t)))})):s.valid=a(t),s},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(s["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5791:function(t,e,a){"use strict";a("e7c3")},a844:function(t,e,a){"use strict";var s=a("5530"),i=(a("a9e3"),a("1681"),a("8654")),r=a("58df"),n=Object(r["a"])(i["a"]);e["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},af8e:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("b0c0");var s=a("2405"),i=a("a6f4"),r=function(t){var e=t.sidebarWidth,a=Object(i["F"])(!0),r=Object(s["d"])(),n=function(){r.breakpoint.smAndDown?a.value=!1:a.value=!0};n(),Object(i["S"])((function(){return r.breakpoint.name}),(function(){r.breakpoint.smAndDown&&(a.value=!1),r.breakpoint.mdAndUp&&(a.value=!0)}));var o=Object(i["a"])((function(){var t={},s=r.rtl?"marginRight":"marginLeft";return t[s]=a.value&&r.breakpoint.mdAndUp?"".concat(e,"px"):null,t}));return{isLeftSidebarOpen:a,contentStyles:o}}},c8ee:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"max-h-content-container app-chat position-relative overflow-hidden text-sm"},[a("v-navigation-drawer",{attrs:{width:"374",touchless:"",right:t.$vuetify.rtl,"mobile-breakpoint":"sm",temporary:t.$vuetify.breakpoint.xsOnly,absolute:""},model:{value:t.isLeftSidebarOpen,callback:function(e){t.isLeftSidebarOpen=e},expression:"isLeftSidebarOpen"}},[a("chat-left-sidebar-content",{attrs:{"chats-contacts":t.chatsContacts,contacts:t.contacts,"active-chat-contact-id":t.activeChat.contact?t.activeChat.contact.id:null,"profile-user-minimal-data":t.profileUserDataMinimal},on:{"close-left-sidebar":function(e){t.isLeftSidebarOpen=!1},"open-chat":t.openChatOfContact,"open-chat-user-profile-sidebar-content":function(e){t.isUserProfileSidebarOpen=!0}}})],1),a("v-navigation-drawer",{attrs:{width:"374",absolute:"",right:t.$vuetify.rtl,touchless:"",temporary:""},model:{value:t.isUserProfileSidebarOpen,callback:function(e){t.isUserProfileSidebarOpen=e},expression:"isUserProfileSidebarOpen"}},[a("chat-user-profile-sidebar-content",{attrs:{"profile-user-data":t.profileUserData},on:{"close-user-profile-sidebar":function(e){t.isUserProfileSidebarOpen=!1}}})],1),a("v-navigation-drawer",{attrs:{width:"374",absolute:"",temporary:"",right:!t.$vuetify.rtl,touchless:""},model:{value:t.isActiveChatUserProfileSidebarOpen,callback:function(e){t.isActiveChatUserProfileSidebarOpen=e},expression:"isActiveChatUserProfileSidebarOpen"}},[t.activeChat.contact?a("chat-active-chat-user-profile-sidebar-content",{attrs:{"profile-user-data":t.activeChat.contact},on:{"close-active-chat-user-profile-sidebar":function(e){t.isActiveChatUserProfileSidebarOpen=!1}}}):t._e()],1),a("div",{staticClass:"chat-content-area h-full d-flex flex-column",style:t.contentStyles},[t.activeChat.contact?a("div",{staticClass:"h-full"},[a("div",{staticClass:"d-flex align-center justify-space-between px-5 py-4",staticStyle:{height:"72px"}},[a("div",{staticClass:"d-flex align-center"},[a("v-btn",{staticClass:"me-2 d-inline-block d-md-none",attrs:{icon:""}},[a("v-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isLeftSidebarOpen,expression:"!isLeftSidebarOpen"}],on:{click:function(e){t.isLeftSidebarOpen=!0}}},[t._v(" "+t._s(t.icons.mdiMenu)+" ")])],1),a("v-badge",{staticClass:"me-3 user-status-badge",attrs:{bottom:"",overlap:"",dot:"",bordered:"",color:t.resolveAvatarBadgeVariant(t.activeChat.contact.status),"offset-x":"11","offset-y":"11"}},[a("v-avatar",{staticClass:"cursor-pointer",class:"v-avatar-light-bg "+t.resolveAvatarBadgeVariant(t.activeChat.contact.status)+"--text",attrs:{size:"38"},on:{click:function(e){t.isActiveChatUserProfileSidebarOpen=!0}}},[t.activeChat.contact.avatar?a("v-img",{attrs:{src:t.activeChat.contact.avatar}}):a("span",[t._v(t._s(t.avatarText(t.activeChat.contact.fullName)))])],1)],1),a("div",{staticClass:"d-flex flex-column"},[a("p",{staticClass:"mb-0 text--primary font-weight-medium"},[t._v(" "+t._s(t.activeChat.contact.fullName)+" ")]),a("span",{staticClass:"text--disabled text-xs"},[t._v(t._s(t.activeChat.contact.role))])])],1),a("div",{staticClass:"d-flex align-baseline"},[a("v-icon",{staticClass:"me-3 cursor-pointer d-none d-sm-inline-flex"},[t._v(" "+t._s(t.icons.mdiPhone)+" ")]),a("v-icon",{staticClass:"me-3 cursor-pointer d-none d-sm-inline-flex"},[t._v(" "+t._s(t.icons.mdiVideoOutline)+" ")]),a("v-icon",{staticClass:"me-3 cursor-pointer d-none d-sm-inline-flex"},[t._v(" "+t._s(t.icons.mdiMagnify)+" ")]),a("v-icon",{staticClass:"cursor-pointer"},[t._v(" "+t._s(t.icons.mdiDotsVertical)+" ")])],1)]),a("v-divider"),a("perfect-scrollbar",{ref:"refChatLogPS",staticClass:"ps-chat-log h-full",attrs:{options:t.perfectScrollbarOptions}},[a("chat-log",{attrs:{"chat-data":t.activeChat,"profile-user-avatar":t.profileUserDataMinimal.avatar}})],1),a("v-form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.sendMessage.apply(null,arguments)}}},[a("v-text-field",{key:t.activeChat.contact.id,staticClass:"pb-5 px-5 flex-grow-0 msg-input",attrs:{placeholder:"Type your message",solo:"","hide-details":"",height:"50",autofocus:""},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v(t._s(t.icons.mdiMicrophone))])],1),a("v-btn",{staticClass:"me-3",attrs:{icon:""}},[a("v-icon",[t._v(" "+t._s(t.icons.mdiAttachment)+" ")])],1),a("v-btn",{attrs:{color:"primary",elevation:"0",type:"submit",icon:t.$vuetify.breakpoint.xsOnly}},[t.$vuetify.breakpoint.smAndUp?[t._v(" Send ")]:[a("v-icon",[t._v(t._s(t.icons.mdiSendOutline))])]],2)]},proxy:!0}],null,!1,2022711636),model:{value:t.chatInputMessage,callback:function(e){t.chatInputMessage=e},expression:"chatInputMessage"}})],1)],1):a("div",{staticClass:"d-flex align-center justify-center flex-grow-1 flex-column"},[a("v-avatar",{staticClass:"elevation-3 mb-6 bg-card",attrs:{size:"109"}},[a("v-icon",{staticClass:"rounded-0 text--primary",attrs:{size:"50"}},[t._v(" "+t._s(t.icons.mdiMessageTextOutline)+" ")])],1),a("p",{staticClass:"mb-0 px-6 py-1 font-weight-medium text-lg elevation-3 rounded-xl text--primary bg-card",class:[{"cursor-pointer":t.$vuetify.breakpoint.smAndDown}],on:{click:t.startConversation}},[t._v(" Start Conversation ")])],1)])],1)},i=[],r=a("5530"),n=a("1da1"),o=(a("7db0"),a("96cf"),a("af8e")),c=a("94ed"),l=a("a4a1"),u=a("a6f4"),d=a("7bbe"),v=a("2405"),f=a("0e20"),p=a("4360"),h=(a("d3b7"),a("be3b")),m={namespaced:!0,state:{},getters:{},mutations:{},actions:{fetchChatsAndContacts:function(){return new Promise((function(t,e){h["a"].get("/apps/chat/chats-and-contacts").then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},getProfileUser:function(){return new Promise((function(t,e){h["a"].get("/apps/chat/users/profile-user").then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},getChat:function(t,e){var a=e.userId;return new Promise((function(t,e){h["a"].get("/apps/chat/chats/".concat(a)).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},sendMessage:function(t,e){var a=e.contactId,s=e.message,i=e.senderId;return new Promise((function(t,e){h["a"].post("/apps/chat/chats/".concat(a),{message:s,senderId:i}).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))}}},b=function(){var t=function(t){return"online"===t?"success":"busy"===t?"error":"away"===t?"warning":"secondary"};return{resolveAvatarBadgeVariant:t}},g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chat-left-sidebar h-full"},[a("div",{staticClass:"d-flex align-center pa-4"},[a("v-badge",{staticClass:"me-3 user-status-badge",attrs:{bottom:"",overlap:"",dot:"",bordered:"",color:t.resolveAvatarBadgeVariant(t.profileUserMinimalData.status),"offset-x":"11","offset-y":"11"}},[a("v-avatar",{staticClass:"cursor-pointer",class:"v-avatar-light-bg "+t.resolveAvatarBadgeVariant(t.profileUserMinimalData.status)+"--text",attrs:{size:"2.375rem"},on:{click:function(e){t.$emit("open-chat-user-profile-sidebar-content",!0),t.$vuetify.breakpoint.smAndDown&&t.$emit("close-left-sidebar")}}},[t.profileUserMinimalData.avatar?a("v-img",{attrs:{src:t.profileUserMinimalData.avatar}}):a("span",[t._v(t._s(t.avatarText(t.profileUserMinimalData.fullName)))])],1)],1),a("v-text-field",{staticClass:"chat-search",attrs:{placeholder:"search...","hide-details":"",outlined:"",rounded:"",dense:"","prepend-inner-icon":t.icons.mdiMagnify},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}),a("v-icon",{staticClass:"d-inline-flex d-md-none ms-1",on:{click:function(e){return t.$emit("close-left-sidebar")}}},[t._v(" "+t._s(t.icons.mdiClose)+" ")])],1),a("v-divider"),a("perfect-scrollbar",{staticClass:"ps-chat-left-sidebar pt-7 pb-3 px-3",attrs:{options:t.perfectScrollbarOptions}},[a("p",{staticClass:"font-weight-medium text-xl primary--text ms-3"},[t._v(" Chats ")]),t._l(t.filteredChatsContacts,(function(e){return a("chat-contact",{key:"chat-"+e.id,class:{"bg-gradient-primary active-chat-contact":t.activeChatContactId===e.id},attrs:{user:e,"is-chat-contact":"","is-active":t.activeChatContactId===e.id},on:{click:function(a){return t.$emit("open-chat",e.id)}}})})),a("p",{staticClass:"font-weight-medium text-xl primary--text mt-7 ms-3"},[t._v(" Contacts ")]),t._l(t.filteredContacts,(function(e){return a("chat-contact",{key:e.id,attrs:{user:e},on:{click:function(a){return t.$emit("open-chat",e.id)}}})}))],2)],1)},C=[],x=(a("a9e3"),a("caad"),a("2532"),a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._g({staticClass:"chat-contact d-flex align-center pa-3 cursor-pointer rounded-lg",class:{"bg-gradient-primary active-chat-contact":t.isActive}},t.$listeners),[a("v-badge",{staticClass:"me-3 user-status-badge",attrs:{bottom:"",overlap:"",dot:"",bordered:"",color:t.resolveAvatarBadgeVariant(t.user.status),"offset-x":"11","offset-y":"11",value:t.isChatContact}},[a("v-avatar",{staticClass:"v-avatar-light-bg",class:[{"bg-static-white":t.isChatContact&&t.isActive},t.resolveAvatarBadgeVariant(t.user.status)+"--text"],attrs:{size:"38"}},[t.user.avatar?a("v-img",{attrs:{src:t.user.avatar}}):a("span",[t._v(t._s(t.avatarText(t.user.fullName)))])],1)],1),a("div",{staticClass:"flex-grow-1 overflow-hidden"},[a("p",{staticClass:"mb-0 font-weight-medium text--primary"},[t._v(" "+t._s(t.user.fullName)+" ")]),a("p",{staticClass:"text--disabled mb-0 text-truncate"},[t._v(" "+t._s(t.isChatContact?t.user.chat.lastMessage.message:t.user.about)+" ")])]),t.isChatContact?a("div",{staticClass:"chat-meta d-flex flex-column align-self-stretch align-end"},[a("p",{staticClass:"text-no-wrap mb-0"},[t._v(" "+t._s(t.formatDateToMonthShort(t.user.chat.lastMessage.time,{hour:"numeric",minute:"numeric"}))+" ")]),t.user.chat.unseenMsgs?a("v-badge",{staticClass:"number-badge",attrs:{color:"error",inline:"",content:t.user.chat.unseenMsgs}}):t._e()],1):t._e()],1)}),_=[],O={props:{user:{type:Object,required:!0},isChatContact:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1}},setup:function(){var t=b(),e=t.resolveAvatarBadgeVariant;return{formatDateToMonthShort:f["c"],resolveAvatarBadgeVariant:e,avatarText:f["a"]}}},y=O,w=a("2877"),S=a("6544"),D=a.n(S),A=a("8212"),V=a("4ca6"),k=a("adda"),U=Object(w["a"])(y,x,_,!1,null,null,null),I=U.exports;D()(U,{VAvatar:A["a"],VBadge:V["a"],VImg:k["a"]});var B={components:{PerfectScrollbar:l["PerfectScrollbar"],ChatContact:I},props:{chatsContacts:{type:Array,required:!0},contacts:{type:Array,required:!0},activeChatContactId:{type:Number,default:null},profileUserMinimalData:{type:Object,required:!0}},setup:function(t){var e=b(),a=e.resolveAvatarBadgeVariant,s=Object(u["F"])(""),i=function(t){return t.fullName.toLowerCase().includes(s.value.toLowerCase())},r=Object(u["a"])((function(){return t.chatsContacts.filter(i)})),n=Object(u["a"])((function(){return t.contacts.filter(i)})),o={maxScrollbarLength:60,wheelPropagation:!1,wheelSpeed:.7};return{resolveAvatarBadgeVariant:a,searchQuery:s,filteredChatsContacts:r,filteredContacts:n,perfectScrollbarOptions:o,avatarText:f["a"],icons:{mdiMagnify:c["le"],mdiClose:c["fc"]}}}},j=B,M=a("ce7e"),T=a("132d"),P=a("8654"),$=Object(w["a"])(j,g,C,!1,null,null,null),L=$.exports;D()($,{VAvatar:A["a"],VBadge:V["a"],VDivider:M["a"],VIcon:T["a"],VImg:k["a"],VTextField:P["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-profile-sidebar-content h-full"},[a("div",{staticClass:"pt-2 me-2 text-right"},[a("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return t.$emit("close-user-profile-sidebar")}}},[a("v-icon",[t._v(" "+t._s(t.icons.mdiClose)+" ")])],1)],1),a("div",{staticClass:"text-center px-6 pt-4"},[a("v-badge",{staticClass:"user-status-badge-lg mb-5",attrs:{bottom:"",overlap:"",bordered:"",color:t.resolveAvatarBadgeVariant(t.profileUserData.status),"offset-x":"24","offset-y":"18"}},[a("v-avatar",{class:"v-avatar-light-bg "+t.resolveAvatarBadgeVariant(t.profileUserData.status)+"--text",attrs:{size:"80"}},[t.profileUserData.avatar?a("v-img",{attrs:{src:t.profileUserData.avatar}}):a("span",{staticClass:"text-3xl"},[t._v(t._s(t.avatarText(t.profileUserData.fullName)))])],1)],1),a("h2",{staticClass:"mb-1 font-weight-medium text-base"},[t._v(" "+t._s(t.profileUserData.fullName)+" ")]),a("p",{staticClass:"text-capitalize"},[t._v(" "+t._s(t.profileUserData.role)+" ")])],1),a("perfect-scrollbar",{staticClass:"ps-chat-user-profile-sidebar-content pb-6 px-6",attrs:{options:t.perfectScrollbarOptions}},[a("div",{staticClass:"my-5"},[a("span",{staticClass:"text-xs text--disabled",class:t.rootThemeClasses,attrs:{for:"textarea-user-about"}},[t._v("ABOUT")]),a("v-textarea",{staticClass:"mt-2",attrs:{id:"textarea-user-about",outlined:"","auto-grow":"",rows:"4"},model:{value:t.profileUserData.about,callback:function(e){t.$set(t.profileUserData,"about",e)},expression:"profileUserData.about"}})],1),a("div",{staticClass:"mb-5"},[a("span",{staticClass:"text-xs text--disabled",class:t.rootThemeClasses},[t._v("STATUS")]),a("v-radio-group",{staticClass:"mt-2",model:{value:t.profileUserData.status,callback:function(e){t.$set(t.profileUserData,"status",e)},expression:"profileUserData.status"}},t._l(t.userStatusRadioOptions,(function(t){return a("v-radio",{key:t.title,attrs:{label:t.title,value:t.value,color:t.color}})})),1)],1),a("div",[a("span",{staticClass:"text-xs text--disabled",class:t.rootThemeClasses},[t._v("SETTINGS")]),a("div",{staticClass:"d-flex align-center my-3"},[a("v-icon",{staticClass:"me-2"},[t._v(" "+t._s(t.icons.mdiCheckCircleOutline)+" ")]),a("span",[t._v("Two-step Vertification")])],1),a("div",{staticClass:"d-flex align-center mb-3"},[a("v-icon",{staticClass:"me-2"},[t._v(" "+t._s(t.icons.mdiBellOutline)+" ")]),a("span",[t._v("Notification")])],1),a("div",{staticClass:"d-flex align-center mb-3"},[a("v-icon",{staticClass:"me-2"},[t._v(" "+t._s(t.icons.mdiAccountOutline)+" ")]),a("span",[t._v("Invite Friends")])],1),a("div",{staticClass:"d-flex align-center"},[a("v-icon",{staticClass:"me-2"},[t._v(" "+t._s(t.icons.mdiTrashCanOutline)+" ")]),a("span",[t._v("Delete Account")])],1)]),a("v-btn",{staticClass:"mt-11",attrs:{color:"primary"}},[t._v(" Logout ")])],1)],1)},F=[],z=a("ac43"),E={components:{PerfectScrollbar:l["PerfectScrollbar"]},props:{profileUserData:{type:Object,required:!0}},setup:function(){var t=b(),e=t.resolveAvatarBadgeVariant,a=Object(z["a"])(),s=a.rootThemeClasses,i=[{title:"Online",value:"online",color:"success"},{title:"Away",value:"away",color:"warning"},{title:"Do not disturb",value:"busy",color:"error"},{title:"Offline",value:"offline",color:"secondary"}],r={maxScrollbarLength:60,wheelPropagation:!1};return{resolveAvatarBadgeVariant:e,userStatusRadioOptions:i,perfectScrollbarOptions:r,rootThemeClasses:s,avatarText:f["a"],icons:{mdiClose:c["fc"],mdiCheckCircleOutline:c["Pb"],mdiBellOutline:c["mb"],mdiAccountOutline:c["C"],mdiTrashCanOutline:c["Cf"]}}}},H=E,R=a("8336"),q=a("67b6"),G=a("43a6"),Q=a("a844"),J=Object(w["a"])(H,N,F,!1,null,null,null),W=J.exports;D()(J,{VAvatar:A["a"],VBadge:V["a"],VBtn:R["a"],VIcon:T["a"],VImg:k["a"],VRadio:q["a"],VRadioGroup:G["a"],VTextarea:Q["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-profile-sidebar-content h-full"},[a("div",{staticClass:"pt-2 me-2",class:t.$vuetify.rtl?"text-left":"text-right"},[a("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return t.$emit("close-active-chat-user-profile-sidebar")}}},[a("v-icon",[t._v(" "+t._s(t.icons.mdiClose)+" ")])],1)],1),a("div",{staticClass:"text-center px-6 pt-4"},[a("v-badge",{staticClass:"user-status-badge-lg mb-5",attrs:{bottom:"",overlap:"",bordered:"",color:t.resolveAvatarBadgeVariant(t.profileUserData.status),"offset-x":"24","offset-y":"18"}},[a("v-avatar",{class:"v-avatar-light-bg "+t.resolveAvatarBadgeVariant(t.profileUserData.status)+"--text",attrs:{size:"80"}},[t.profileUserData.avatar?a("v-img",{attrs:{src:t.profileUserData.avatar}}):a("span",{staticClass:"text-3xl"},[t._v(t._s(t.avatarText(t.profileUserData.fullName)))])],1)],1),a("h2",{staticClass:"mb-1 font-weight-medium text-base"},[t._v(" "+t._s(t.profileUserData.fullName)+" ")]),a("p",{staticClass:"text-capitalize"},[t._v(" "+t._s(t.profileUserData.role)+" ")])],1),a("perfect-scrollbar",{staticClass:"ps-chat-user-profile-sidebar-content pb-6 px-6",attrs:{options:t.perfectScrollbarOptions}},[a("div",{staticClass:"my-5"},[a("span",{staticClass:"text-xs text--disabled",class:t.rootThemeClasses,attrs:{for:"textarea-user-about"}},[t._v("ABOUT")]),a("p",{staticClass:"mt-3"},[t._v(" "+t._s(t.profileUserData.about)+" ")])]),a("div",{staticClass:"mb-5"},[a("span",{staticClass:"text-xs text--disabled",class:t.rootThemeClasses},[t._v("PERSONAL INFORMATION")]),a("div",{staticClass:"d-flex align-center my-3"},[a("v-icon",{staticClass:"me-2"},[t._v(" "+t._s(t.icons.mdiEmailOutline)+" ")]),a("span",[t._v("lucifer@email.com")])],1),a("div",{staticClass:"d-flex align-center mb-3"},[a("v-icon",{staticClass:"me-2"},[t._v(" "+t._s(t.icons.mdiPhoneOutline)+" ")]),a("span",[t._v("+1(123) 456 - 7890")])],1),a("div",{staticClass:"d-flex align-center"},[a("v-icon",{staticClass:"me-2"},[t._v(" "+t._s(t.icons.mdiClockOutline)+" ")]),a("span",[t._v("Mon - Fri 10AM - 8PM")])],1)]),a("div",[a("span",{staticClass:"text-xs text--disabled",class:t.rootThemeClasses},[t._v("OPTIONS")]),a("div",{staticClass:"d-flex align-center my-3"},[a("v-icon",{staticClass:"me-2"},[t._v(" "+t._s(t.icons.mdiBookmarkOutline)+" ")]),a("span",[t._v("Add Tag")])],1),a("div",{staticClass:"d-flex align-center mb-3"},[a("v-icon",{staticClass:"me-2"},[t._v(" "+t._s(t.icons.mdiStarOutline)+" ")]),a("span",[t._v("Important Contact")])],1),a("div",{staticClass:"d-flex align-center mb-3"},[a("v-icon",{staticClass:"me-2"},[t._v(" "+t._s(t.icons.mdiImageOutline)+" ")]),a("span",[t._v("Shared Media")])],1),a("div",{staticClass:"d-flex align-center mb-3"},[a("v-icon",{staticClass:"me-2"},[t._v(" "+t._s(t.icons.mdiTrashCanOutline)+" ")]),a("span",[t._v("Delete Contact")])],1),a("div",{staticClass:"d-flex align-center"},[a("v-icon",{staticClass:"me-3 ms-1",attrs:{size:"18"}},[t._v(" "+t._s(t.icons.mdiBlockHelper)+" ")]),a("span",[t._v("Block Contact")])],1)])])],1)},X=[],Y={components:{PerfectScrollbar:l["PerfectScrollbar"]},props:{profileUserData:{type:Object,required:!0}},setup:function(){var t=b(),e=t.resolveAvatarBadgeVariant,a=Object(z["a"])(),s=a.rootThemeClasses,i=[{title:"Online",value:"online",color:"success"},{title:"Away",value:"away",color:"warning"},{title:"Do not disturb",value:"busy",color:"error"},{title:"Offline",value:"offline",color:"secondary"}],r={maxScrollbarLength:60,wheelPropagation:!1};return{resolveAvatarBadgeVariant:e,userStatusRadioOptions:i,perfectScrollbarOptions:r,rootThemeClasses:s,avatarText:f["a"],icons:{mdiClose:c["fc"],mdiEmailOutline:c["Pc"],mdiBookmarkOutline:c["rb"],mdiPhoneOutline:c["Me"],mdiClockOutline:c["dc"],mdiStarOutline:c["rf"],mdiImageOutline:c["Od"],mdiTrashCanOutline:c["Cf"],mdiBlockHelper:c["nb"]}}}},Z=Y,tt=Object(w["a"])(Z,K,X,!1,null,null,null),et=tt.exports;D()(tt,{VAvatar:A["a"],VBadge:V["a"],VBtn:R["a"],VIcon:T["a"],VImg:k["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chat-log pa-5"},t._l(t.formattedChatData.formattedChatLog,(function(e,s){return a("div",{key:e.senderId+String(s),staticClass:"chat-group d-flex align-start",class:[{"flex-row-reverse":e.senderId!==t.formattedChatData.contact.id},{"mb-8":t.formattedChatData.formattedChatLog.length-1!==s}]},[a("div",{staticClass:"chat-avatar",class:e.senderId!==t.formattedChatData.contact.id?"ms-4":"me-4"},[a("v-avatar",{attrs:{size:"38"}},[a("v-img",{attrs:{src:e.senderId===t.formattedChatData.contact.id?t.formattedChatData.contact.avatar:t.profileUserAvatar}})],1)],1),a("div",{staticClass:"chat-body d-inline-flex flex-column",class:e.senderId!==t.formattedChatData.contact.id?"align-end":"align-start"},[t._l(e.messages,(function(s,i){return a("p",{key:s.time,staticClass:"chat-content py-3 px-4 elevation-1",class:[e.senderId===t.formattedChatData.contact.id?"bg-card chat-left":"primary white--text chat-right",e.messages.length-1!==i?"mb-2":"mb-1"]},[t._v(" "+t._s(s.msg)+" ")])})),a("div",{class:{"text-right":e.senderId!==t.formattedChatData.contact.id}},[a("span",{staticClass:"text-xs me-1 text--disabled"},[t._v(t._s(t.formatDate(e.messages[e.messages.length-1].time,{hour:"numeric",minute:"numeric"})))]),e.senderId!==t.formattedChatData.contact.id?a("v-icon",{attrs:{size:"16",color:t.resolveFeedbackIcon(e.messages[e.messages.length-1].feedback).color}},[t._v(" "+t._s(t.resolveFeedbackIcon(e.messages[e.messages.length-1].feedback).icon)+" ")]):t._e()],1)],2)])})),0)},st=[],it=(a("159b"),{props:{chatData:{type:Object,required:!0},profileUserAvatar:{type:String,required:!0}},setup:function(t){var e=Object(u["a"])((function(){var e={id:t.chatData.contact.id,avatar:t.chatData.contact.avatar},a=[];t.chatData.chat&&(a=t.chatData.chat.chat);var s=[],i=a[0]?a[0].senderId:void 0,r={sender:i,messages:[]};return a.forEach((function(t,e){i===t.senderId?r.messages.push({msg:t.message,time:t.time,feedback:t.feedback}):(i=t.senderId,s.push(r),r={senderId:t.senderId,messages:[{msg:t.message,time:t.time,feedback:t.feedback}]}),e===a.length-1&&s.push(r)})),{formattedChatLog:s,contact:e,profileUserAvatar:t.profileUserAvatar}})),a=function(t){return t.isSeen?{icon:c["Nb"],color:"success"}:t.isDelivered?{icon:c["Nb"],color:null}:{icon:c["Mb"],color:null}};return{formattedChatData:e,formatDate:f["b"],resolveFeedbackIcon:a,icons:{mdiCheck:c["Mb"],mdiCheckAll:c["Nb"]}}}}),rt=it,nt=Object(w["a"])(rt,at,st,!1,null,null,null),ot=nt.exports;D()(nt,{VAvatar:A["a"],VIcon:T["a"],VImg:k["a"]});var ct={components:{PerfectScrollbar:l["PerfectScrollbar"],ChatLog:ot,ChatLeftSidebarContent:L,ChatUserProfileSidebarContent:W,ChatActiveChatUserProfileSidebarContent:et},setup:function(){var t=b(),e=t.resolveAvatarBadgeVariant,a=Object(v["d"])(),s=Object(o["a"])({sidebarWidth:374}),i=s.isLeftSidebarOpen,l=s.contentStyles,h="app-chat";p["a"].hasModule(h)||p["a"].registerModule(h,m),Object(u["z"])((function(){p["a"].hasModule(h)&&p["a"].unregisterModule(h)}));var g=Object(u["F"])(null),C=function(){var t=g.value.$el||g.value;t.scrollTop=t.scrollHeight},x=Object(u["F"])({}),_=Object(u["F"])({}),O=Object(u["F"])(!1);Object(d["i"])(Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["w"])(O).toBe(!0);case 2:p["a"].dispatch("app-chat/getProfileUser").then((function(t){x.value=t.data}));case 3:case"end":return t.stop()}}),t)}))));var y=Object(u["F"])([]),w=Object(u["F"])([]),S=function(){p["a"].dispatch("app-chat/fetchChatsAndContacts").then((function(t){y.value=t.data.chatsContacts,w.value=t.data.contacts,_.value=t.data.profileUser}))};S();var D=Object(u["F"])({}),A=Object(u["F"])(""),V=function(t){A.value="",p["a"].dispatch("app-chat/getChat",{userId:t}).then((function(e){D.value=e.data;var a=y.value.find((function(e){return e.id===t}));a&&(a.chat.unseenMsgs=0),Object(u["q"])((function(){C()}))})),a.breakpoint.smAndDown&&(i.value=!1)},k=function(){if(A.value){var t={contactId:D.value.contact.id,senderId:_.value.id,message:A.value};p["a"].dispatch("app-chat/sendMessage",t).then((function(t){var e=t.data,a=e.newMessageData,s=e.chat;void 0!==s?(D.value={chat:s,contact:D.value.contact},y.value.push(Object(r["a"])(Object(r["a"])({},D.value.contact),{},{chat:{id:s.id,lastMessage:a,unseenMsgs:0}}))):D.value.chat.chat.push(a),A.value="";var i=y.value.find((function(t){return t.id===D.value.contact.id}));i.chat.lastMessage=a,Object(u["q"])((function(){C()}))}))}},U=Object(u["F"])(!1),I=function(){a.breakpoint.mdAndUp||(i.value=!0)},B={maxScrollbarLength:60,wheelPropagation:!1};return{resolveAvatarBadgeVariant:e,isLeftSidebarOpen:i,contentStyles:l,refChatLogPS:g,profileUserDataMinimal:_,profileUserData:x,isUserProfileSidebarOpen:O,chatsContacts:y,contacts:w,activeChat:D,chatInputMessage:A,openChatOfContact:V,sendMessage:k,isActiveChatUserProfileSidebarOpen:U,startConversation:I,perfectScrollbarOptions:B,avatarText:f["a"],icons:{mdiMenu:c["te"],mdiMessageTextOutline:c["ye"],mdiPhone:c["Le"],mdiVideoOutline:c["Hf"],mdiMagnify:c["le"],mdiDotsVertical:c["Lc"],mdiAttachment:c["jb"],mdiMicrophone:c["ze"],mdiSendOutline:c["ef"]}}}},lt=ct,ut=(a("5791"),a("b0af")),dt=a("4bd4"),vt=a("f774"),ft=Object(w["a"])(lt,s,i,!1,null,null,null);e["default"]=ft.exports;D()(ft,{VAvatar:A["a"],VBadge:V["a"],VBtn:R["a"],VCard:ut["a"],VDivider:M["a"],VForm:dt["a"],VIcon:T["a"],VImg:k["a"],VNavigationDrawer:vt["a"],VTextField:P["a"]})},e7c3:function(t,e,a){}}]);
//# sourceMappingURL=chunk-a3a6a7cc.dcc463a4.js.map