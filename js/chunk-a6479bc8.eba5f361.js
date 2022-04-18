(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6479bc8"],{1681:function(t,a,e){},1949:function(t,a,e){"use strict";e("950b")},"20f68":function(t,a,e){},"2fa4":function(t,a,e){"use strict";e("20f68");var s=e("80d2");a["a"]=Object(s["j"])("spacer","div","v-spacer")},"351c":function(t,a,e){"use strict";e("d3b7");var s=e("be3b");a["a"]={namespaced:!0,state:{},getters:{},mutations:{},actions:{fetchQuotas:function(t,a){return new Promise((function(t,e){s["a"].get("/apps/quota/quotas",{params:a}).then((function(a){t(a)})).catch((function(t){return e(t)}))}))},fetchQuota:function(t,a){var e=a.id;return new Promise((function(t,a){s["a"].get("/apps/quota/quotas/".concat(e)).then((function(a){return t(a)})).catch((function(t){return a(t)}))}))},fetchClients:function(){return new Promise((function(t,a){s["a"].get("/apps/quota/clients").then((function(a){return t(a)})).catch((function(t){return a(t)}))}))}}}},"59e4":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.data.quotaData?e("v-card",{staticClass:"app-invoice-editable"},[e("v-card-text",{staticClass:"py-9 px-8"},[e("div",{staticClass:"invoice-header d-flex flex-wrap justify-space-between"},[e("div",{staticClass:"mb-6"},[e("div",{staticClass:"d-flex align-center mb-6"},[e("v-img",{staticClass:"me-3",attrs:{src:t.appLogo,"max-height":"30px","max-width":"30px",alt:"logo",contain:""}}),e("span",{staticClass:"text--primary font-weight-bold text-xl"},[t._v(" "+t._s(t.appName)+" ")])],1),e("span",{staticClass:"d-block"},[t._v("Office 149, 450 South Brand Brooklyn")]),e("span",{staticClass:"d-block"},[t._v("San Diego County, CA 91905, USA")]),e("span",{staticClass:"d-block"},[t._v("+1 (123) 456 7891, +44 (876) 543 2198")])]),e("div",{class:t.$vuetify.rtl?"text-left":"text-right"},[e("div",{staticClass:"mb-4 d-flex align-center justify-end"},[e("span",{staticClass:"me-2 font-weight-medium text-xl text--primary"},[t._v("Quota:")]),e("v-text-field",{staticClass:"header-inputs flex-grow-0",attrs:{outlined:"",disabled:"",dense:"","hide-details":"auto"},model:{value:t.data.quotaData.id,callback:function(a){t.$set(t.data.quotaData,"id",t._n(a))},expression:"data.quotaData.id"}})],1),e("div",{staticClass:"mb-4 d-flex align-center"},[e("span",{staticClass:"me-2"},[t._v("Date Issued: ")]),e("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"",eager:"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[e("v-text-field",t._g(t._b({staticClass:"header-inputs flex-grow-0",attrs:{readonly:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.data.quotaData.issuedDate,callback:function(a){t.$set(t.data.quotaData,"issuedDate",a)},expression:"data.quotaData.issuedDate"}},"v-text-field",i,!1),s))]}}],null,!1,2655629188),model:{value:t.isIssueDateMenuOpen,callback:function(a){t.isIssueDateMenuOpen=a},expression:"isIssueDateMenuOpen"}},[e("v-date-picker",{on:{input:function(a){t.isIssueDateMenuOpen=!1}},model:{value:t.data.quotaData.issuedDate,callback:function(a){t.$set(t.data.quotaData,"issuedDate",a)},expression:"data.quotaData.issuedDate"}})],1)],1),e("div",{staticClass:"mb-2 d-flex align-center justify-end"},[e("span",{staticClass:"me-2"},[t._v("Due Date: ")]),e("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"",eager:"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[e("v-text-field",t._g(t._b({staticClass:"header-inputs flex-grow-0",attrs:{readonly:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.data.quotaData.dueDate,callback:function(a){t.$set(t.data.quotaData,"dueDate",a)},expression:"data.quotaData.dueDate"}},"v-text-field",i,!1),s))]}}],null,!1,1404836589),model:{value:t.isDueDateMenuOpen,callback:function(a){t.isDueDateMenuOpen=a},expression:"isDueDateMenuOpen"}},[e("v-date-picker",{on:{input:function(a){t.isDueDateMenuOpen=!1}},model:{value:t.data.quotaData.dueDate,callback:function(a){t.$set(t.data.quotaData,"dueDate",a)},expression:"data.quotaData.dueDate"}})],1)],1)])])]),e("v-divider"),e("v-card-text",{staticClass:"py-9 px-8"},[e("div",{staticClass:"d-flex justify-space-between flex-wrap flex-column flex-sm-row"},[e("div",{staticClass:"mb-6 mb-sm-0"},[e("p",{staticClass:"font-weight-semibold payment-details-header"},[t._v(" Quota To: ")]),e("v-select",{staticClass:"select-invoice-to",attrs:{outlined:"","menu-props":{offsetY:!0},items:t.clients,dense:"","item-text":"name","item-value":"company","return-object":"",placeholder:"Select Customer"},model:{value:t.data.quotaData.client,callback:function(a){t.$set(t.data.quotaData,"client",a)},expression:"data.quotaData.client"}}),e("p",{staticClass:"mb-1"},[t._v(" "+t._s(t.data.quotaData.client.name)+" ")]),e("p",{staticClass:"mb-1"},[t._v(" "+t._s(t.data.quotaData.client.company)+" ")]),t.data.quotaData.client.address?e("p",{staticClass:"mb-1"},[t._v(" "+t._s(t.data.quotaData.client.address)+", "+t._s(t.data.quotaData.client.country)+" ")]):t._e(),e("p",{staticClass:"mb-1"},[t._v(" "+t._s(t.data.quotaData.client.contact)+" ")]),e("p",{staticClass:"mb-0"},[t._v(" "+t._s(t.data.quotaData.client.companyEmail)+" ")])],1),e("div",[e("p",{staticClass:"font-weight-semibold payment-details-header"},[t._v(" Bill To: ")]),e("table",[e("tr",[e("td",{staticClass:"pe-6"},[t._v(" Total Due: ")]),e("td",[t._v(" "+t._s(t.data.paymentDetails.totalDue)+" ")])]),e("tr",[e("td",{staticClass:"pe-6"},[t._v(" Bank Name: ")]),e("td",[t._v(" "+t._s(t.data.paymentDetails.bankName)+" ")])]),e("tr",[e("td",{staticClass:"pe-6"},[t._v(" Country: ")]),e("td",[t._v(" "+t._s(t.data.paymentDetails.country)+" ")])]),e("tr",[e("td",{staticClass:"pe-6"},[t._v(" IBAN: ")]),e("td",[t._v(" "+t._s(t.data.paymentDetails.iban)+" ")])]),e("tr",[e("td",{staticClass:"pe-6"},[t._v(" SWIFT Code: ")]),e("td",[t._v(" "+t._s(t.data.paymentDetails.swiftCode)+" ")])])])])])]),e("v-divider"),e("div",{staticClass:"add-products-form pt-9 pb-10 px-8"},[t._l(t.data.purchasedProducts,(function(a,s){return e("div",{key:s,staticClass:"single-product-form"},[e("div",{staticClass:"add-products-header mb-2 d-none d-md-flex"},[e("div",{staticClass:"px-5 flex-grow-1 font-weight-semibold"},[e("v-row",[e("v-col",{attrs:{cols:"12",md:"6"}},[e("span",[t._v("Item")])]),e("v-col",{attrs:{cols:"12",md:"2"}},[e("span",[t._v("Cost")])]),e("v-col",{attrs:{cols:"12",md:"2"}},[e("span",[t._v("Hours")])]),e("v-col",{attrs:{cols:"12",md:"2"}},[e("span",[t._v("Price")])])],1)],1),e("div",{staticClass:"header-spacer"})]),e("v-card",{staticClass:"d-flex",attrs:{outlined:""}},[e("div",{staticClass:"pa-5 flex-grow-1"},[e("v-row",[e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-select",{staticClass:"mb-3",attrs:{outlined:"",dense:"",items:t.itemsOptions,"item-text":"itemTitle","item-value":"itemTitle","menu-props":{offsetY:!0},placeholder:"Select Item",label:"Select Item","hide-details":"auto","return-object":""},on:{input:function(a){return t.updateItemForm(s,a)}},model:{value:a.itemTitle,callback:function(e){t.$set(a,"itemTitle",e)},expression:"purchasedProduct.itemTitle"}}),e("v-textarea",{attrs:{outlined:"",label:"Description",rows:"3","hide-details":"auto",placeholder:"Description"},model:{value:a.description,callback:function(e){t.$set(a,"description",e)},expression:"purchasedProduct.description"}})],1),e("v-col",{attrs:{cols:"12",md:"2",sm:"4"}},[e("v-text-field",{attrs:{outlined:"",dense:"",min:"0",type:"number","hide-details":"auto",label:"Cost",placeholder:"$"},on:{input:function(t){a.cost=Math.abs(t)}},model:{value:a.cost,callback:function(e){t.$set(a,"cost",t._n(e))},expression:"purchasedProduct.cost"}})],1),e("v-col",{attrs:{cols:"12",md:"2",sm:"4"}},[e("v-text-field",{attrs:{outlined:"",dense:"",min:"0",type:"number","hide-details":"auto",label:"Hours",placeholder:"Hours"},on:{input:function(t){a.hours=Math.abs(t)}},model:{value:a.hours,callback:function(e){t.$set(a,"hours",t._n(e))},expression:"purchasedProduct.hours"}})],1),e("v-col",{attrs:{cols:"12",md:"2",sm:"4"}},[e("p",{staticClass:"my-2"},[e("span",{staticClass:"d-inline d-md-none"},[t._v("Price: ")]),e("span",[t._v("$"+t._s(a.cost*a.hours))])])])],1)],1),e("div",{staticClass:"d-flex flex-column item-actions rounded-0 pa-1"},[e("v-btn",{attrs:{icon:"",small:""},on:{click:function(a){return t.data.purchasedProducts.splice(s,1)}}},[e("v-icon",{attrs:{size:"20"}},[t._v(" "+t._s(t.icons.mdiClose)+" ")])],1),e("v-spacer"),e("v-btn",{attrs:{icon:"",small:""}},[e("v-icon",{attrs:{size:"20"}},[t._v(" "+t._s(t.icons.mdiCogOutline)+" ")])],1)],1)])],1)})),e("v-btn",{staticClass:"mt-4",attrs:{color:"primary",outlined:""},on:{click:t.addNewItem}},[t._v(" Add Item ")])],2),e("v-divider"),e("v-card-text",{staticClass:"py-9 px-8"},[e("div",{staticClass:"d-flex justify-space-between flex-wrap flex-column flex-sm-row"},[e("div",{staticClass:"mb-6 mb-sm-0"},[e("div",{staticClass:"mb-4 d-flex align-center"},[e("span",{staticClass:"font-weight-semibold me-2"},[t._v("Salesperson:")]),e("v-text-field",{staticClass:"input-salesperson",attrs:{outlined:"",dense:"","hide-details":"auto"},model:{value:t.data.salesperson,callback:function(a){t.$set(t.data,"salesperson",a)},expression:"data.salesperson"}})],1),e("v-text-field",{staticClass:"input-thanks-note",attrs:{outlined:"",dense:"","hide-details":"auto",placeholder:"Thanks for your business"},model:{value:t.data.thanksNote,callback:function(a){t.$set(t.data,"thanksNote",a)},expression:"data.thanksNote"}})],1),e("div",[e("table",{staticClass:"w-full"},[e("tr",[e("td",{staticClass:"pe-16"},[t._v(" Subtotal: ")]),e("th",{class:t.$vuetify.rtl?"text-left":"text-right"},[t._v(" $1800 ")])]),e("tr",[e("td",{staticClass:"pe-16"},[t._v(" Discount: ")]),e("th",{class:t.$vuetify.rtl?"text-left":"text-right"},[t._v(" $28 ")])]),e("tr",[e("td",{staticClass:"pe-16"},[t._v(" Tax: ")]),e("th",{class:t.$vuetify.rtl?"text-left":"text-right"},[t._v(" 21% ")])])]),e("v-divider",{staticClass:"mt-4 mb-3"}),e("table",{staticClass:"w-full"},[e("tr",[e("td",{staticClass:"pe-16"},[t._v(" Total: ")]),e("th",{class:t.$vuetify.rtl?"text-left":"text-right"},[t._v(" $1690 ")])])])],1)])]),e("v-divider"),e("v-card-text",{staticClass:"px-8 py-6"},[e("div",{staticClass:"mb-0"},[e("p",{staticClass:"font-weight-semibold mb-2"},[t._v(" Note: ")]),e("v-textarea",{attrs:{outlined:"",rows:"3","hide-details":"auto",placeholder:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"},model:{value:t.data.note,callback:function(a){t.$set(t.data,"note",a)},expression:"data.note"}})],1)])],1):t._e()},i=[],n=(e("a4d3"),e("e01a"),e("b0c0"),e("1dff")),o=e("a6f4"),c=e("4360"),l=e("94ed"),d=e("351c"),u={props:{data:{type:Object,required:!0}},setup:function(t){var a="app-quota";c["a"].hasModule(a)||c["a"].registerModule(a,d["a"]),Object(o["z"])((function(){c["a"].hasModule(a)&&c["a"].unregisterModule(a)}));var e=Object(o["F"])(!1),s=Object(o["F"])(!1),i=Object(o["F"])([]);c["a"].dispatch("app-quota/fetchClients").then((function(t){i.value=t.data}));var u=[{itemTitle:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."},{itemTitle:"App Customization",cost:26,hours:1,description:"Customization & Bug Fixes."},{itemTitle:"ABC Template",cost:28,hours:1,description:"Vuetify admin template."},{itemTitle:"App Development",cost:32,hours:1,description:"Native App Development."}],r=function(a,e){var s=e.cost,i=e.hours,n=e.description;t.data.purchasedProducts[a].cost=s,t.data.purchasedProducts[a].hours=i,t.data.purchasedProducts[a].description=n},p=function(){t.data.purchasedProducts.push({itemTitle:"",cost:0,hours:0,description:""})};return{isIssueDateMenuOpen:e,isDueDateMenuOpen:s,clients:i,itemsOptions:u,updateItemForm:r,addNewItem:p,appName:n["a"].app.name,appLogo:n["a"].app.logo,icons:{mdiClose:l["fc"],mdiCogOutline:l["sc"]}}}},r=u,p=(e("1949"),e("2877")),v=e("6544"),m=e.n(v),f=e("8336"),h=e("b0af"),b=e("99d9"),x=e("62ad"),C=e("2e4b"),_=e("ce7e"),D=e("132d"),g=e("adda"),w=e("e449"),y=e("0fd9"),k=e("b974"),q=e("2fa4"),I=e("8654"),O=e("a844"),$=Object(p["a"])(r,s,i,!1,null,null,null);a["a"]=$.exports;m()($,{VBtn:f["a"],VCard:h["a"],VCardText:b["c"],VCol:x["a"],VDatePicker:C["a"],VDivider:_["a"],VIcon:D["a"],VImg:g["a"],VMenu:w["a"],VRow:y["a"],VSelect:k["a"],VSpacer:q["a"],VTextField:I["a"],VTextarea:O["a"]})},"950b":function(t,a,e){},"99d9":function(t,a,e){"use strict";e.d(a,"a",(function(){return n})),e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return c})),e.d(a,"d",(function(){return l}));var s=e("b0af"),i=e("80d2"),n=Object(i["j"])("v-card__actions"),o=Object(i["j"])("v-card__subtitle"),c=Object(i["j"])("v-card__text"),l=Object(i["j"])("v-card__title");s["a"]},a844:function(t,a,e){"use strict";var s=e("5530"),i=(e("a9e3"),e("1681"),e("8654")),n=e("58df"),o=Object(n["a"])(i["a"]);a["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var a=t.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(e,a)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=chunk-a6479bc8.eba5f361.js.map