(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6452524f"],{"34ee":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-navigation-drawer",{attrs:{value:t.isQuotaSendSidebarActive,temporary:"",touchless:"",right:!t.$vuetify.rtl,width:"350",app:""},on:{input:function(a){return t.$emit("update:is-quota-send-sidebar-active",a)}}},[e("v-card",{attrs:{height:"100%"}},[e("div",{staticClass:"drawer-header d-flex align-center mb-4"},[e("h4",{staticClass:"font-weight-semibold text-base"},[t._v(" Send Quota ")]),e("v-spacer"),e("v-btn",{attrs:{icon:"",small:""},on:{click:function(a){return t.$emit("update:is-quota-send-sidebar-active",!1)}}},[e("v-icon",{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiClose)+" ")])],1)],1),e("v-card-text",{staticClass:"pt-5"},[e("v-form",[e("v-text-field",{staticClass:"mb-6",attrs:{outlined:"",label:"From",dense:"","hide-details":"auto"},model:{value:t.sendQuotaData.from,callback:function(a){t.$set(t.sendQuotaData,"from",a)},expression:"sendQuotaData.from"}}),e("v-text-field",{staticClass:"mb-6",attrs:{outlined:"",label:"To",dense:"","hide-details":"auto"},model:{value:t.sendQuotaData.to,callback:function(a){t.$set(t.sendQuotaData,"to",a)},expression:"sendQuotaData.to"}}),e("v-text-field",{staticClass:"mb-6",attrs:{outlined:"",label:"Subject",dense:"","hide-details":"auto"},model:{value:t.sendQuotaData.subject,callback:function(a){t.$set(t.sendQuotaData,"subject",a)},expression:"sendQuotaData.subject"}}),e("v-textarea",{staticClass:"mb-6",attrs:{outlined:"",label:"Message",rows:"11","hide-details":"auto"},model:{value:t.sendQuotaData.message,callback:function(a){t.$set(t.sendQuotaData,"message",a)},expression:"sendQuotaData.message"}}),e("v-chip",{staticClass:"v-chip-light-bg primary--text mb-6",attrs:{color:"primary",small:"",label:""}},[t._v(" Quota Attached ")]),e("div",{staticClass:"d-flex flex-wrap"},[e("v-btn",{staticClass:"me-3",attrs:{color:"primary"},on:{click:function(a){return t.$emit("update:is-quota-send-sidebar-active",!1)}}},[t._v(" send ")]),e("v-btn",{attrs:{color:"secondary",outlined:""},on:{click:function(a){return t.$emit("update:is-quota-send-sidebar-active",!1)}}},[t._v(" cancel ")])],1)],1)],1)],1)],1)},i=[],s=e("94ed"),o=e("a6f4"),d={model:{prop:"isQuotaSendSidebarActive",event:"update:is-quota-send-sidebar-active"},props:{isQuotaSendSidebarActive:{type:Boolean,required:!0}},setup:function(){var t=Object(o["F"])({from:"shelbyComapny@email.com",to:"qConsolidated@email.com",subject:"Quota of purchased Admin Templates",message:"Dear Queen Consolidated,\n\nThank you for your business, always a pleasure to work with you!\n\nWe have generated a new quota in the amount of $95.59\n\nWe would appreciate payment of this quota by 05/11/2019"});return{sendQuotaData:t,icons:{mdiClose:s["fc"]}}}},r=d,c=e("2877"),l=e("6544"),u=e.n(l),m=e("8336"),p=e("b0af"),v=e("99d9"),f=e("cc20"),b=e("4bd4"),h=e("132d"),y=e("f774"),D=e("2fa4"),C=e("8654"),w=e("a844"),P=Object(c["a"])(r,n,i,!1,null,null,null);a["a"]=P.exports;u()(P,{VBtn:m["a"],VCard:p["a"],VCardText:v["c"],VChip:f["a"],VForm:b["a"],VIcon:h["a"],VNavigationDrawer:y["a"],VSpacer:D["a"],VTextField:C["a"],VTextarea:w["a"]})},"3df5":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-navigation-drawer",{attrs:{value:t.isAddPaymentSidebarActive,temporary:"",touchless:"",right:!t.$vuetify.rtl,width:"350",app:""},on:{input:function(a){return t.$emit("update:is-add-payment-sidebar-active",a)}}},[e("v-card",{attrs:{height:"100%"}},[e("div",{staticClass:"drawer-header d-flex align-center mb-4"},[e("h4",{staticClass:"font-weight-semibold text-base"},[t._v(" Add Payment ")]),e("v-spacer"),e("v-btn",{attrs:{icon:"",small:""},on:{click:function(a){return t.$emit("update:is-add-payment-sidebar-active",!1)}}},[e("v-icon",{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiClose)+" ")])],1)],1),e("v-card-text",{staticClass:"pt-5"},[e("v-form",[e("v-text-field",{staticClass:"mb-6",attrs:{outlined:"",label:"Quota Balance",dense:"","hide-details":"auto"},model:{value:t.addPaymentData.balance,callback:function(a){t.$set(t.addPaymentData,"balance",a)},expression:"addPaymentData.balance"}}),e("v-text-field",{staticClass:"mb-6",attrs:{outlined:"",label:"Payment Amount",dense:"","hide-details":"auto"},model:{value:t.addPaymentData.amount,callback:function(a){t.$set(t.addPaymentData,"amount",a)},expression:"addPaymentData.amount"}}),e("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,i=a.attrs;return[e("v-text-field",t._g(t._b({staticClass:"mb-6",attrs:{outlined:"",dense:"",label:"Payment Date","prepend-icon":t.icons.mdiCalendar,readonly:"","hide-details":"auto"},model:{value:t.addPaymentData.paymentDate,callback:function(a){t.$set(t.addPaymentData,"paymentDate",a)},expression:"addPaymentData.paymentDate"}},"v-text-field",i,!1),n))]}}])},[e("v-date-picker",{attrs:{color:"primary"},on:{input:function(a){t.menu2=!1}},model:{value:t.addPaymentData.paymentDate,callback:function(a){t.$set(t.addPaymentData,"paymentDate",a)},expression:"addPaymentData.paymentDate"}})],1),e("v-select",{attrs:{items:t.paymentOptions,outlined:"",dense:"",label:"Select Payment Method"},model:{value:t.addPaymentData.selectedPaymentMethod,callback:function(a){t.$set(t.addPaymentData,"selectedPaymentMethod",a)},expression:"addPaymentData.selectedPaymentMethod"}}),e("v-textarea",{attrs:{label:"Internal Payment Note",placeholder:"Internal Payment Note",outlined:""},model:{value:t.addPaymentData.paymentNote,callback:function(a){t.$set(t.addPaymentData,"paymentNote",a)},expression:"addPaymentData.paymentNote"}}),e("div",{staticClass:"d-flex flex-wrap"},[e("v-btn",{staticClass:"me-3",attrs:{color:"primary"},on:{click:function(a){return t.$emit("update:is-add-payment-sidebar-active",!1)}}},[t._v(" send ")]),e("v-btn",{attrs:{color:"secondary",outlined:""},on:{click:function(a){return t.$emit("update:is-add-payment-sidebar-active",!1)}}},[t._v(" cancel ")])],1)],1)],1)],1)],1)},i=[],s=e("94ed"),o=e("a6f4"),d={model:{prop:"isAddPaymentSidebarActive",event:"update:is-add-payment-sidebar-active"},props:{isAddPaymentSidebarActive:{type:Boolean,required:!0}},setup:function(){var t=(new Date).toISOString().substr(0,10),a=Object(o["F"])({balance:5e3,amount:null,paymentDate:(new Date).toISOString().substr(0,10),selectedPaymentMethod:"",paymentNote:""}),e=["Cash","Bank Transfer","Debit","Credit","Paypal"];return{date:t,addPaymentData:a,paymentOptions:e,icons:{mdiClose:s["fc"]}}}},r=d,c=e("2877"),l=e("6544"),u=e.n(l),m=e("8336"),p=e("b0af"),v=e("99d9"),f=e("2e4b"),b=e("4bd4"),h=e("132d"),y=e("e449"),D=e("f774"),C=e("b974"),w=e("2fa4"),P=e("8654"),x=e("a844"),S=Object(c["a"])(r,n,i,!1,null,null,null);a["a"]=S.exports;u()(S,{VBtn:m["a"],VCard:p["a"],VCardText:v["c"],VDatePicker:f["a"],VForm:b["a"],VIcon:h["a"],VMenu:y["a"],VNavigationDrawer:D["a"],VSelect:C["a"],VSpacer:w["a"],VTextField:P["a"],VTextarea:x["a"]})},"4bd4":function(t,a,e){"use strict";var n=e("5530"),i=(e("caad"),e("2532"),e("07ac"),e("4de4"),e("159b"),e("7db0"),e("58df")),s=e("7e2b"),o=e("3206");a["a"]=Object(i["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(a.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))})):n.valid=e(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},"756a":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",{staticClass:"app-invoice-preview"},[e("v-col",{attrs:{cols:"12",md:"9"}},[e("quota-editable",{attrs:{data:t.quotaData}})],1),e("v-col",{attrs:{cols:"12",md:"3"}},[e("v-card",{staticClass:"mb-6"},[e("v-card-text",[e("v-btn",{staticClass:"mb-3",attrs:{color:"primary",block:""},on:{click:function(a){t.isQuotaSendSidebarActive=!0}}},[e("v-icon",{staticClass:"me-2",attrs:{left:""}},[t._v(" "+t._s(t.icons.mdiSendOutline)+" ")]),e("span",[t._v("Send Quota")])],1),e("v-btn",{staticClass:"mb-3",attrs:{color:"secondary",block:"",outlined:""}},[t._v(" Preview ")]),e("v-btn",{staticClass:"mb-3",attrs:{color:"secondary",block:"",outlined:""}},[t._v(" Save ")]),e("v-btn",{attrs:{color:"success",block:""},on:{click:function(a){t.isAddPaymentSidebarActive=!0}}},[e("v-icon",{staticClass:"me-2",attrs:{left:""}},[t._v(" "+t._s(t.icons.mdiCurrencyUsd)+" ")]),e("span",[t._v("Add Payment")])],1)],1)],1),e("v-select",{staticClass:"mb-6",attrs:{outlined:"",items:t.paymentMethods,dense:"",placeholder:"Accept Payment Via","menu-props":{offsetY:!0},"hide-details":"auto"},model:{value:t.quotaData.paymentMethod,callback:function(a){t.$set(t.quotaData,"paymentMethod",a)},expression:"quotaData.paymentMethod"}}),e("div",{staticClass:"d-flex align-center justify-space-between mb-3"},[e("span",[t._v("Payment Terms")]),e("v-switch",{staticClass:"mt-0",attrs:{"hide-details":"auto","input-value":!0}})],1),e("div",{staticClass:"d-flex align-center justify-space-between mb-3"},[e("span",[t._v("Client Notes")]),e("v-switch",{staticClass:"mt-0",attrs:{"hide-details":"auto","input-value":!1}})],1),e("div",{staticClass:"d-flex align-center justify-space-between"},[e("span",[t._v("Payment Stub")]),e("v-switch",{staticClass:"mt-0",attrs:{"hide-details":"auto","input-value":!1}})],1)],1),e("quota-sidebar-send-quota",{model:{value:t.isQuotaSendSidebarActive,callback:function(a){t.isQuotaSendSidebarActive=a},expression:"isQuotaSendSidebarActive"}}),e("quota-sidebar-add-payment",{model:{value:t.isAddPaymentSidebarActive,callback:function(a){t.isAddPaymentSidebarActive=a},expression:"isAddPaymentSidebarActive"}})],1)},i=[],s=e("94ed"),o=e("a6f4"),d=e("4360"),r=e("a18c"),c=e("59e4"),l=e("351c"),u=e("34ee"),m=e("3df5"),p={components:{QuotaEditable:c["a"],QuotaSidebarSendQuota:u["a"],QuotaSidebarAddPayment:m["a"]},setup:function(){var t="app-quota",a=Object(o["F"])(!1),e=Object(o["F"])(!1);d["a"].hasModule(t)||d["a"].registerModule(t,l["a"]),Object(o["z"])((function(){d["a"].hasModule(t)&&d["a"].unregisterModule(t)}));var n=Object(o["F"])({});d["a"].dispatch("app-quota/fetchQuota",{id:r["a"].currentRoute.params.id}).then((function(t){n.value={quotaData:t.data.quota,paymentDetails:t.data.paymentDetails,purchasedProducts:[{itemTitle:"App Design",cost:24,hours:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"}})).catch((function(t){404===t.response.status&&(n.value=void 0)}));var i=["Bank Account","PayPal","UPI Transfer"];return{quotaData:n,paymentMethods:i,isQuotaSendSidebarActive:a,isAddPaymentSidebarActive:e,icons:{mdiSendOutline:s["ef"],mdiCurrencyUsd:s["Dc"]}}}},v=p,f=(e("a568"),e("2877")),b=e("6544"),h=e.n(b),y=e("8336"),D=e("b0af"),C=e("99d9"),w=e("62ad"),P=e("132d"),x=e("0fd9"),S=e("b974"),g=e("b73d"),k=Object(f["a"])(v,n,i,!1,null,null,null);a["default"]=k.exports;h()(k,{VBtn:y["a"],VCard:D["a"],VCardText:C["c"],VCol:w["a"],VIcon:P["a"],VRow:x["a"],VSelect:S["a"],VSwitch:g["a"]})},a568:function(t,a,e){"use strict";e("caa6")},caa6:function(t,a,e){}}]);
//# sourceMappingURL=chunk-6452524f.c22cf82a.js.map