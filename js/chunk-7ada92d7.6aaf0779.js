(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ada92d7"],{"1f4f":function(e,t,a){"use strict";var o=a("5530"),s=(a("a9e3"),a("8b37"),a("80d2")),i=a("7560"),n=a("58df");t["a"]=Object(n["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(o["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(s["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"20f68":function(e,t,a){},"2fa4":function(e,t,a){"use strict";a("20f68");var o=a("80d2");t["a"]=Object(o["j"])("spacer","div","v-spacer")},"68cf":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("app-card-actions",{on:{refresh:e.refetchData}},[a("template",{slot:"title"},[e._v(" Card Actions ")]),a("v-card-text",[a("v-simple-table",[a("thead",[a("tr",[a("th",[e._v("ACTION")]),a("th",[e._v("ICON")]),a("th",[e._v("DETAILS")])])]),a("tbody",[a("tr",[a("td",[e._v(" Collapse ")]),a("td",[a("v-icon",{attrs:{size:"20"}},[e._v(" "+e._s(e.icons.mdiChevronUp)+" ")])],1),a("td",[e._v(" Collapse card content using collapse action. ")])]),a("tr",[a("td",[e._v(" Refresh Content ")]),a("td",[a("v-icon",{attrs:{size:"20"}},[e._v(" "+e._s(e.icons.mdiRefresh)+" ")])],1),a("td",[e._v(" Refresh your card content using refresh action. ")])]),a("tr",[a("td",[e._v(" Remove Card ")]),a("td",[a("v-icon",{attrs:{size:"20"}},[e._v(" "+e._s(e.icons.mdiClose)+" ")])],1),a("td",[e._v(" Remove card from page using remove card action ")])])])])],1)],2)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-actions",{attrs:{"action-collapse":""}},[a("template",{slot:"title"},[e._v(" Collapsible ")]),a("v-card-text",[a("p",[e._v("You can specifically add collapsible action using "),a("code",[e._v("actionCollapse")]),e._v(" prop")]),a("span",[e._v("Click on "),a("v-icon",{attrs:{size:"20"}},[e._v(e._s(e.icons.mdiChevronUp))]),e._v(" icon to see it in action")],1)])],2)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-actions",{attrs:{"action-refresh":""},on:{refresh:e.refetchData}},[a("template",{slot:"title"},[e._v(" Refresh Content ")]),a("v-card-text",[a("p",[e._v("You can specifically add refresh action using "),a("code",[e._v("actionRefresh")]),e._v(" prop")]),a("span",[e._v("Click on "),a("v-icon",{attrs:{size:"20"}},[e._v(e._s(e.icons.mdiRefresh))]),e._v(" icon to see it in action")],1)])],2)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-actions",{attrs:{"action-remove":""}},[a("template",{slot:"title"},[e._v(" Remove Card ")]),a("v-card-text",[a("p",[e._v("You can specifically add remove action using "),a("code",[e._v("actionRemove")]),e._v(" prop")]),a("span",[e._v("Click on "),a("v-icon",{attrs:{size:"20"}},[e._v(e._s(e.icons.mdiClose))]),e._v(" icon to see it in action")],1)])],2)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-actions",{on:{refresh:e.refetchData}},[a("template",{slot:"title"},[e._v(" Slots ")]),a("template",{slot:"before-actions"},[a("v-chip",{staticClass:"v-chip-light-bg primary--text me-3",attrs:{color:"primary",small:""}},[e._v(" 3 Updates ")])],1),a("v-card-text",[a("p",[a("code",[e._v("app-card-actions")]),e._v(" also provides "),a("code",[e._v("before-actions")]),e._v(" and "),a("code",[e._v("after-actions")]),e._v(" slot")]),a("span",[e._v("You can find more details in our documentation")])])],2)],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-expand-transition",[a("v-card",e._g(e._b({directives:[{name:"show",rawName:"v-show",value:!e.isRemoved,expression:"!isRemoved"}]},"v-card",e.$attrs,!1),e.$listeners),[a("v-card-title",[e._t("title"),a("v-spacer"),a("div",[e._t("before-actions"),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:(!(e.actionRefresh||e.actionRemove)||e.actionCollapse)&&!e.noActions,expression:"(!(actionRefresh || actionRemove) || actionCollapse) && !noActions"}],attrs:{icon:"",small:""},on:{click:e.triggerCollapse}},[a("v-icon",{style:{transform:e.isContentCollapsed?"rotate(-180deg)":null},attrs:{size:"20"}},[e._v(" "+e._s(e.icons.mdiChevronUp)+" ")])],1),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:(!(e.actionCollapse||e.actionRemove)||e.actionRefresh)&&!e.noActions,expression:"(!(actionCollapse || actionRemove) || actionRefresh) && !noActions"}],attrs:{icon:"",small:""},on:{click:e.triggerRefresh}},[a("v-icon",{attrs:{size:"20"}},[e._v(" "+e._s(e.icons.mdiRefresh)+" ")])],1),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:(!(e.actionCollapse||e.actionRefresh)||e.actionRemove)&&!e.noActions,expression:"(!(actionCollapse || actionRefresh) || actionRemove) && !noActions"}],attrs:{icon:"",small:""},on:{click:e.triggerRemove}},[a("v-icon",{attrs:{size:"20"}},[e._v(" "+e._s(e.icons.mdiClose)+" ")])],1),e._t("after-actions")],2)],2),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isContentCollapsed,expression:"!isContentCollapsed"}]},[e._t("default")],2)]),a("v-overlay",{attrs:{absolute:"",color:"white",opacity:"0.75"},model:{value:e.showOverlay,callback:function(t){e.showOverlay=t},expression:"showOverlay"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1)],1)},n=[],r=a("a6f4"),c=a("94ed"),l={inheritAttrs:!1,props:{collapsed:{type:Boolean,default:!1},noActions:{type:Boolean,default:!1},actionCollapse:{type:Boolean,default:!1},actionRefresh:{type:Boolean,default:!1},actionRemove:{type:Boolean,default:!1}},setup:function(e,t){var a=t.emit,o=Object(r["F"])(!1),s=Object(r["F"])(e.collapsed),i=Object(r["F"])(!1),n=function(){o.value=!1},l=function(){s.value=!s.value,a("collapsed",s.value)},v=function(){o.value=!0,a("refresh",n)},d=function(){i.value=!0,a("removed")};return{showOverlay:o,isContentCollapsed:s,isRemoved:i,triggerRefresh:v,triggerCollapse:l,triggerRemove:d,icons:{mdiChevronUp:c["Zb"],mdiRefresh:c["Ye"],mdiClose:c["fc"]}}}},v=l,d=a("2877"),p=a("6544"),f=a.n(p),h=a("8336"),u=a("b0af"),m=a("99d9"),_=a("0789"),C=a("132d"),b=a("a797"),R=a("490a"),g=a("2fa4"),w=Object(d["a"])(v,i,n,!1,null,null,null),x=w.exports;f()(w,{VBtn:h["a"],VCard:u["a"],VCardTitle:m["d"],VExpandTransition:_["a"],VIcon:C["a"],VOverlay:b["a"],VProgressCircular:R["a"],VSpacer:g["a"]});var y={components:{AppCardActions:x},setup:function(){var e=function(e){setTimeout((function(){e()}),3e3)};return{refetchData:e,icons:{mdiChevronUp:c["Zb"],mdiRefresh:c["Ye"],mdiClose:c["fc"]}}}},O=y,j=a("cc20"),V=a("62ad"),A=a("0fd9"),$=a("1f4f"),k=Object(d["a"])(O,o,s,!1,null,null,null);t["default"]=k.exports;f()(k,{VCardText:m["c"],VChip:j["a"],VCol:V["a"],VIcon:C["a"],VRow:A["a"],VSimpleTable:$["a"]})},"8b37":function(e,t,a){},"99d9":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return c}));var o=a("b0af"),s=a("80d2"),i=Object(s["j"])("v-card__actions"),n=Object(s["j"])("v-card__subtitle"),r=Object(s["j"])("v-card__text"),c=Object(s["j"])("v-card__title");o["a"]}}]);
//# sourceMappingURL=chunk-7ada92d7.6aaf0779.js.map