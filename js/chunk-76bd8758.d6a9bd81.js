(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76bd8758"],{"2db4":function(t,e,s){"use strict";var a=s("ade3"),i=(s("a9e3"),s("caad"),s("ca71"),s("8dd9")),r=s("a9ad"),n=s("7560"),o=s("f2e7"),l=s("fe6c"),c=s("58df"),u=s("80d2"),p=s("d9bd");e["a"]=Object(c["a"])(i["a"],r["a"],o["a"],Object(l["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:n["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,s=t.bottom,a=t.footer,i=t.insetFooter,r=t.left,n=t.right,o=t.top;return{paddingBottom:Object(u["h"])(s+a+i),paddingLeft:this.app?Object(u["h"])(r):void 0,paddingRight:this.app?Object(u["h"])(n):void 0,paddingTop:Object(u["h"])(e+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(p["e"])("auto-height",this),0==this.timeout&&Object(p["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(u["t"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(a["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(u["t"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,s=e(this.color,{staticClass:"v-snack__wrapper",class:i["a"].options.computed.classes.call(this),style:i["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",s,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"4bd4":function(t,e,s){"use strict";var a=s("5530"),i=(s("caad"),s("2532"),s("07ac"),s("4de4"),s("159b"),s("7db0"),s("58df")),r=s("7e2b"),n=s("3206");e["a"]=Object(i["a"])(r["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,s=function(t){return t.$watch("hasError",(function(s){e.$set(e.errorBag,t._uid,s)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=s(t)))})):a.valid=s(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var s=this.watchers.find((function(t){return t._uid===e._uid}));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"7f98":function(t,e,s){"use strict";s.d(e,"j",(function(){return i})),s.d(e,"e",(function(){return r})),s.d(e,"h",(function(){return n})),s.d(e,"d",(function(){return o})),s.d(e,"c",(function(){return l})),s.d(e,"f",(function(){return c})),s.d(e,"i",(function(){return u})),s.d(e,"b",(function(){return p})),s.d(e,"k",(function(){return d})),s.d(e,"g",(function(){return v})),s.d(e,"a",(function(){return h}));s("a9e3"),s("99af"),s("4d63"),s("ac1f"),s("25f0");var a=s("2405"),i=function(t){return!(!t||!t.length)||"This field is required"},r=function(t){if(Object(a["f"])(t))return!0;var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(t)?t.every((function(t){return e.test(String(t))})):e.test(String(t))||"The Email field must be a valid email"},n=function(t){var e=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/,s=e.test(t);return s||"Field must contain at least one uppercase, lowercase, special character and digit with min 8 chars"},o=function(t,e){return t===e||"The Confirm Password field confirmation does not match"},l=function(t,e,s){return function(){var a=Number(t);return Number(e)<=a&&Number(s)>=a||"Enter number between ".concat(e," and ").concat(s)}},c=function(t){return!!Object(a["f"])(t)||(Array.isArray(t)?t.every((function(t){return/^-?[0-9]+$/.test(String(t))})):/^-?[0-9]+$/.test(String(t))||"This field must be an integer")},u=function t(e,s){if(Object(a["f"])(e))return!0;var i=s;return"string"===typeof i&&(i=new RegExp(i)),Array.isArray(e)?e.every((function(e){return t(e,{regeX:i})})):i.test(String(e))||"The Regex field format is invalid"},p=function(t){return!!Object(a["f"])(t)||(/^[A-Z]*$/i.test(String(t))||"The Alpha field may only contain alphabetic characters")},d=function(t){if(void 0===t||null===t||0===t.length)return!0;var e=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return e.test(t)||"URL is invalid"},v=function(t,e){return!!Object(a["f"])(t)||(t.length===e||"The Min Character field must be at least ".concat(e," characters"))},h=function(t){if(Object(a["f"])(t))return!0;var e=String(t);return/^[0-9A-Z_-]*$/i.test(e)||"All Character is not valid"}},8836:function(t,e,s){},c9f2:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",{staticClass:"text-2xl"},[t._v(" Stepper With Custom Header ")]),s("demo-stepper-custom-header"),s("p",{staticClass:"text-2xl mt-16"},[t._v(" Stepper With Transparent Header ")]),s("demo-stepper-transparent-header"),s("p",{staticClass:"text-2xl mt-16"},[t._v(" Vertical Stepper ")]),s("demo-stepper-vertical"),s("p",{staticClass:"text-2xl mt-16"},[t._v(" Stepper With Form ")]),s("demo-stepper-with-form")],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-stepper",{staticClass:"custom-header",model:{value:t.activeStep,callback:function(e){t.activeStep=e},expression:"activeStep"}},[s("v-stepper-header",[s("v-stepper-step",{attrs:{complete:t.activeStep>1,step:"1"}},[s("div",{staticClass:"d-flex align-center"},[s("span",{staticClass:"text--primary text-4xl font-weight-bold me-3"},[t._v("01")]),s("div",{staticClass:"d-flex flex-column"},[s("span",{staticClass:"text--primary text-sm font-weight-semibold"},[t._v("Account Details")]),s("span",{staticClass:"text--secondary text-xs"},[t._v("Setup your account details")])])])]),s("v-divider"),s("v-stepper-step",{attrs:{complete:t.activeStep>2,step:"2"}},[s("div",{staticClass:"d-flex align-center"},[s("span",{staticClass:"text--primary text-4xl font-weight-bold me-3"},[t._v("02")]),s("div",{staticClass:"d-flex flex-column"},[s("span",{staticClass:"text--primary text-sm font-weight-semibold"},[t._v("Personal Info")]),s("span",{staticClass:"text--secondary text-xs"},[t._v("Setup Information")])])])]),s("v-divider"),s("v-stepper-step",{attrs:{step:"3"}},[s("div",{staticClass:"d-flex align-center"},[s("span",{staticClass:"text--primary text-4xl font-weight-bold me-3"},[t._v("03")]),s("div",{staticClass:"d-flex flex-column"},[s("span",{staticClass:"text--primary text-sm font-weight-semibold"},[t._v("Review   Submit")]),s("span",{staticClass:"text--secondary text-xs"},[t._v("Write a Review")])])])])],1),s("v-stepper-items",[s("v-stepper-content",{attrs:{step:"1"}},[s("v-card",{staticClass:"mb-8",attrs:{color:"secondary",height:"200px"}}),s("div",{staticClass:"d-flex justify-end"},[s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.activeStep=2}}},[t._v(" Next ")])],1)],1),s("v-stepper-content",{attrs:{step:"2"}},[s("v-card",{staticClass:"mb-8",attrs:{color:"secondary",height:"200px"}}),s("div",{staticClass:"d-flex justify-space-between"},[s("v-btn",{attrs:{outlined:""},on:{click:function(e){t.activeStep=1}}},[t._v(" Previous ")]),s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.activeStep=3}}},[t._v(" Next ")])],1)],1),s("v-stepper-content",{attrs:{step:"3"}},[s("v-card",{staticClass:"mb-8",attrs:{color:"secondary",height:"200px"}}),s("div",{staticClass:"d-flex justify-space-between"},[s("v-btn",{attrs:{outlined:""},on:{click:function(e){t.activeStep=2}}},[t._v(" Previous ")]),s("v-btn",{staticClass:"me-2",attrs:{color:"primary"}},[t._v(" Complete ")])],1)],1)],1)],1)},n=[],o={data:function(){return{activeStep:1}}},l=o,c=s("2877"),u=s("6544"),p=s.n(u),d=s("8336"),v=s("b0af"),h=s("ce7e"),f=s("5530"),m=(s("0481"),s("a9e3"),s("b0c0"),s("4de4"),s("8836"),s("10d2")),b=s("3206"),x=s("a452"),g=s("58df"),C=s("d9bd"),y=Object(g["a"])(m["a"],Object(b["b"])("stepper"),x["a"]),S=y.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data:function(){var t={isBooted:!1,steps:[],content:[],isReverse:!1};return t.internalLazyValue=null!=this.value?this.value:(t[0]||{}).step||1,t},computed:{classes:function(){return Object(f["a"])({"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},m["a"].options.computed.classes.call(this))},styles:function(){return Object(f["a"])({},m["a"].options.computed.styles.call(this))}},watch:{internalValue:function(t,e){this.isReverse=Number(t)<Number(e),e&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(C["a"])("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister:function(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter((function(e){return e!==t})):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter((function(e){return e!==t})))},stepClick:function(t){var e=this;this.$nextTick((function(){return e.internalValue=t}))},updateView:function(){for(var t=this.steps.length;--t>=0;)this.steps[t].toggle(this.internalValue);for(var e=this.content.length;--e>=0;)this.content[e].toggle(this.internalValue,this.isReverse)}},render:function(t){return t(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}}),_=(s("d3b7"),s("25f0"),s("0789")),w=s("80d2"),V=Object(g["a"])(Object(b["a"])("stepper","v-stepper-content","v-stepper")),k=V.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){var t=this.$vuetify.rtl?!this.isReverse:this.isReverse;return t?_["j"]:_["k"]},styles:function(){return this.isVertical?{height:Object(w["h"])(this.height)}:{}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame((function(){e=t.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return t.isActive&&(t.height=e||"auto")}),450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return t.height=0}),10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={staticClass:"v-stepper__content"},s={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var a=t("div",s,[this.$slots.default]),i=t("div",e,[a]);return t(this.computedTransition,{on:this.$listeners},[i])}}),j=s("9d26"),$=s("a9ad"),D=s("5607"),O=Object(g["a"])($["a"],Object(b["a"])("stepper","v-stepper-step","v-stepper")),A=O.extend().extend({name:"v-stepper-step",directives:{ripple:D["a"]},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(t){return!0!==t()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},genIcon:function(t){return this.$createElement(j["a"],t)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var t=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(t,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var t=[];return this.hasError?t.push(this.genIcon(this.errorIcon)):this.complete?this.editable?t.push(this.genIcon(this.editIcon)):t.push(this.genIcon(this.completeIcon)):t.push(String(this.step)),t},toggle:function(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render:function(t){return t("div",{staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},[this.genStep(),this.genLabel()])}}),B=Object(w["j"])("v-stepper__header"),T=Object(w["j"])("v-stepper__items"),R=Object(c["a"])(l,r,n,!1,null,null,null),I=R.exports;p()(R,{VBtn:d["a"],VCard:v["a"],VDivider:h["a"],VStepper:S,VStepperContent:k,VStepperHeader:B,VStepperItems:T,VStepperStep:A});var N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-stepper",{staticClass:"transparent custom-header",attrs:{flat:"","alt-labels":""},model:{value:t.activeStep,callback:function(e){t.activeStep=e},expression:"activeStep"}},[s("v-stepper-header",[s("v-stepper-step",{attrs:{complete:t.activeStep>1,step:"1"}},[s("div",{staticClass:"d-flex flex-column text-center text-no-wrap"},[s("span",{staticClass:"text--primary text-sm font-weight-semibold"},[t._v("Account Details")]),s("span",{staticClass:"text--secondary text-xs"},[t._v("Setup your account details")])])]),s("v-divider"),s("v-stepper-step",{attrs:{complete:t.activeStep>2,step:"2"}},[s("div",{staticClass:"d-flex flex-column text-center text-no-wrap"},[s("span",{staticClass:"text--primary text-sm font-weight-semibold"},[t._v("Personal Info")]),s("span",{staticClass:"text--secondary text-xs"},[t._v("Setup Information")])])]),s("v-divider"),s("v-stepper-step",{attrs:{step:"3"}},[s("div",{staticClass:"d-flex flex-column text-center text-no-wrap"},[s("span",{staticClass:"text--primary text-sm font-weight-semibold"},[t._v("Review   Submit")]),s("span",{staticClass:"text--secondary text-xs"},[t._v("Write a Review")])])])],1),s("v-card",[s("v-stepper-items",[s("v-stepper-content",{attrs:{step:"1"}},[s("v-card",{staticClass:"mb-8",attrs:{color:"secondary",height:"200px"}}),s("div",{staticClass:"d-flex justify-end"},[s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.activeStep=2}}},[t._v(" Next ")])],1)],1),s("v-stepper-content",{attrs:{step:"2"}},[s("v-card",{staticClass:"mb-8",attrs:{color:"secondary",height:"200px"}}),s("div",{staticClass:"d-flex justify-space-between"},[s("v-btn",{attrs:{outlined:""},on:{click:function(e){t.activeStep=1}}},[t._v(" Previous ")]),s("v-btn",{staticClass:"me-2",attrs:{color:"primary"},on:{click:function(e){t.activeStep=3}}},[t._v(" Next ")])],1)],1),s("v-stepper-content",{attrs:{step:"3"}},[s("v-card",{staticClass:"mb-8",attrs:{color:"secondary",height:"200px"}}),s("div",{staticClass:"d-flex justify-space-between"},[s("v-btn",{attrs:{outlined:""},on:{click:function(e){t.activeStep=2}}},[t._v(" Previous ")]),s("v-btn",{staticClass:"me-2",attrs:{color:"primary"}},[t._v(" Complete ")])],1)],1)],1)],1)],1)},F=[],E={data:function(){return{activeStep:1}}},P=E,q=Object(c["a"])(P,N,F,!1,null,null,null),L=q.exports;p()(q,{VBtn:d["a"],VCard:v["a"],VDivider:h["a"],VStepper:S,VStepperContent:k,VStepperHeader:B,VStepperItems:T,VStepperStep:A});var W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-stepper",{staticClass:"custom-header",attrs:{vertical:""},model:{value:t.activeStep,callback:function(e){t.activeStep=e},expression:"activeStep"}},[s("v-stepper-step",{attrs:{complete:t.activeStep>1,step:"1"}},[s("div",{staticClass:"d-flex align-center"},[s("span",{staticClass:"text--primary text-4xl font-weight-bold me-3"},[t._v("01")]),s("div",{staticClass:"d-flex flex-column"},[s("span",{staticClass:"text--primary text-sm font-weight-semibold"},[t._v("Account Details")]),s("span",{staticClass:"text--secondary text-xs"},[t._v("Setup your account details")])])])]),s("v-stepper-content",{attrs:{step:"1"}},[s("v-card",{staticClass:"mb-6",attrs:{color:"secondary",height:"200px"}}),s("v-btn",{staticClass:"me-2",attrs:{color:"primary"},on:{click:function(e){t.activeStep=2}}},[t._v(" Next ")])],1),s("v-stepper-step",{attrs:{complete:t.activeStep>2,step:"2"}},[s("div",{staticClass:"d-flex align-center"},[s("span",{staticClass:"text--primary text-4xl font-weight-bold me-3"},[t._v("02")]),s("div",{staticClass:"d-flex flex-column"},[s("span",{staticClass:"text--primary text-sm font-weight-semibold"},[t._v("Personal Info")]),s("span",{staticClass:"text--secondary text-xs"},[t._v("Setup Information")])])])]),s("v-stepper-content",{attrs:{step:"2"}},[s("v-card",{staticClass:"mb-6",attrs:{color:"secondary",height:"200px"}}),s("v-btn",{attrs:{outlined:""},on:{click:function(e){t.activeStep=1}}},[t._v(" Previous ")]),s("v-btn",{staticClass:"ms-2",attrs:{color:"primary"},on:{click:function(e){t.activeStep=3}}},[t._v(" Next ")])],1),s("v-stepper-step",{attrs:{complete:t.activeStep>3,step:"3"}},[s("div",{staticClass:"d-flex align-center"},[s("span",{staticClass:"text--primary text-4xl font-weight-bold me-3"},[t._v("03")]),s("div",{staticClass:"d-flex flex-column"},[s("span",{staticClass:"text--primary text-sm font-weight-semibold"},[t._v("Review   Submit")]),s("span",{staticClass:"text--secondary text-xs"},[t._v("Write a Review")])])])]),s("v-stepper-content",{attrs:{step:"3"}},[s("v-card",{staticClass:"mb-6",attrs:{color:"secondary",height:"200px"}}),s("v-btn",{attrs:{outlined:""},on:{click:function(e){t.activeStep=2}}},[t._v(" Previous ")]),s("v-btn",{staticClass:"ms-2",attrs:{color:"primary"}},[t._v(" Complete ")])],1)],1)},z=[],H={data:function(){return{activeStep:1}}},Z=H,U=Object(c["a"])(Z,W,z,!1,null,null,null),G=U.exports;p()(U,{VBtn:d["a"],VCard:v["a"],VStepper:S,VStepperContent:k,VStepperStep:A});var J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-stepper",{staticClass:"custom-header",model:{value:t.activeStep,callback:function(e){t.activeStep=e},expression:"activeStep"}},[s("v-stepper-header",[s("v-stepper-step",{attrs:{complete:t.activeStep>1,step:"1",rules:[function(){return t.stepValidationResult[1]}]}},[s("div",{staticClass:"d-flex align-center"},[s("span",{staticClass:"text-4xl font-weight-bold me-3",class:t.stepValidationResult[1]?"text--primary":"error--text"},[t._v("01")]),s("div",{staticClass:"d-flex flex-column"},[s("span",{staticClass:"text-sm font-weight-semibold",class:t.stepValidationResult[1]?"text--primary":"error--text"},[t._v("Account Details")]),s("span",{staticClass:"text-xs",class:t.stepValidationResult[1]?"text--secondary":"error--text"},[t._v("Setup your account details")])])])]),s("v-divider"),s("v-stepper-step",{attrs:{complete:t.activeStep>2,step:"2",rules:[function(){return t.stepValidationResult[2]}]}},[s("div",{staticClass:"d-flex align-center"},[s("span",{staticClass:"text-4xl font-weight-bold me-3",class:t.stepValidationResult[2]?"text--primary":"error--text"},[t._v("02")]),s("div",{staticClass:"d-flex flex-column"},[s("span",{staticClass:"text-sm font-weight-semibold",class:t.stepValidationResult[2]?"text--primary":"error--text"},[t._v("Personal Info")]),s("span",{staticClass:"text-xs",class:t.stepValidationResult[2]?"text--secondary":"error--text"},[t._v("Setup Information")])])])]),s("v-divider"),s("v-stepper-step",{attrs:{step:"3",rules:[function(){return t.stepValidationResult[3]}]}},[s("div",{staticClass:"d-flex align-center"},[s("span",{staticClass:"text-4xl font-weight-bold me-3",class:t.stepValidationResult[3]?"text--primary":"error--text"},[t._v("03")]),s("div",{staticClass:"d-flex flex-column"},[s("span",{staticClass:"text-sm font-weight-semibold",class:t.stepValidationResult[3]?"text--primary":"error--text"},[t._v("Review   Submit")]),s("span",{staticClass:"text-xs",class:t.stepValidationResult[3]?"text--secondary":"error--text"},[t._v("Write a Review")])])])])],1),s("v-stepper-items",[s("v-stepper-content",{attrs:{step:"1"}},[s("v-form",{ref:"step1Form",staticClass:"pb-6 pt-2"},[s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Username",outlined:"",dense:"","hide-details":"auto",rules:[t.validators.required,t.validators.alphaDashValidator],placeholder:"Username"},model:{value:t.userData.username,callback:function(e){t.$set(t.userData,"username",e)},expression:"userData.username"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Email",outlined:"",dense:"","hide-details":"auto",rules:[t.validators.required,t.validators.emailValidator],placeholder:"Email"},model:{value:t.userData.email,callback:function(e){t.$set(t.userData,"email",e)},expression:"userData.email"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Password",outlined:"",dense:"","hide-details":"auto",type:"password",rules:[t.validators.required,t.validators.passwordValidator],placeholder:"Password"},model:{value:t.userData.password,callback:function(e){t.$set(t.userData,"password",e)},expression:"userData.password"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Confirm Password",outlined:"",dense:"","hide-details":"auto",type:"password",rules:[t.validators.required,t.validators.confirmedValidator(t.userData.confirmPassword,t.userData.password)],placeholder:"Confirm Password"},model:{value:t.userData.confirmPassword,callback:function(e){t.$set(t.userData,"confirmPassword",e)},expression:"userData.confirmPassword"}})],1)],1)],1),s("div",{staticClass:"d-flex justify-end"},[s("v-btn",{staticClass:"me-2",attrs:{color:"primary"},on:{click:function(e){return t.handleStepValidation(1)}}},[t._v(" Next ")])],1)],1),s("v-stepper-content",{attrs:{step:"2"}},[s("v-form",{ref:"step2Form",staticClass:"pb-6 pt-2 multi-col-validation"},[s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"First Name",outlined:"",dense:"","hide-details":"auto",rules:[t.validators.required,t.validators.alphaValidator],placeholder:"First Name"},model:{value:t.userData.firstName,callback:function(e){t.$set(t.userData,"firstName",e)},expression:"userData.firstName"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Last Name",outlined:"",dense:"","hide-details":"auto",rules:[t.validators.required,t.validators.alphaValidator],placeholder:"Last Name"},model:{value:t.userData.lastName,callback:function(e){t.$set(t.userData,"lastName",e)},expression:"userData.lastName"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-select",{attrs:{items:["United States","United Kingdom","France","Germany"],"menu-props":["offset-y"],rules:[t.validators.required],label:"Country",dense:"","hide-details":"auto",required:"",outlined:""},model:{value:t.userData.country,callback:function(e){t.$set(t.userData,"country",e)},expression:"userData.country"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-select",{attrs:{items:["Sanskrit","English","French","Arabic"],"menu-props":["offset-y"],rules:[t.validators.required],label:"Language",required:"",dense:"","hide-details":"auto",outlined:""},model:{value:t.userData.language,callback:function(e){t.$set(t.userData,"language",e)},expression:"userData.language"}})],1)],1)],1),s("div",{staticClass:"d-flex justify-space-between"},[s("v-btn",{attrs:{outlined:""},on:{click:function(e){return t.handleStepValidation(2,!1)}}},[t._v(" Previous ")]),s("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.handleStepValidation(2)}}},[t._v(" Next ")])],1)],1),s("v-stepper-content",{attrs:{step:"3"}},[s("v-form",{ref:"step3Form",staticClass:"pb-6 pt-2 multi-col-validation"},[s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Twitter",outlined:"",dense:"","hide-details":"auto",rules:[t.validators.required],placeholder:"Twitter"},model:{value:t.userData.social.twitter,callback:function(e){t.$set(t.userData.social,"twitter",e)},expression:"userData.social.twitter"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Facebook",outlined:"",dense:"","hide-details":"auto",rules:[t.validators.required],placeholder:"Facebook"},model:{value:t.userData.social.facebook,callback:function(e){t.$set(t.userData.social,"facebook",e)},expression:"userData.social.facebook"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Google",outlined:"",dense:"","hide-details":"auto",rules:[t.validators.required],placeholder:"Google"},model:{value:t.userData.social.google,callback:function(e){t.$set(t.userData.social,"google",e)},expression:"userData.social.google"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"LinkedIn",outlined:"",dense:"","hide-details":"auto",rules:[t.validators.required],placeholder:"LinkedIn"},model:{value:t.userData.social.linkedIn,callback:function(e){t.$set(t.userData.social,"linkedIn",e)},expression:"userData.social.linkedIn"}})],1)],1)],1),s("div",{staticClass:"d-flex justify-space-between"},[s("v-btn",{attrs:{outlined:""},on:{click:function(e){return t.handleStepValidation(3,!1)}}},[t._v(" Previous ")]),s("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.handleStepValidation(3,!0,!0)}}},[t._v(" Complete ")])],1),s("v-snackbar",{model:{value:t.isFormSubmittedSnackbarVisible,callback:function(e){t.isFormSubmittedSnackbarVisible=e},expression:"isFormSubmittedSnackbarVisible"}},[t._v(" Form Submitted Successfully. ")])],1)],1)],1)},K=[],M=s("a6f4"),X=s("7f98"),Q={setup:function(){var t=Object(M["F"])(1),e=Object(M["F"])({username:"",email:"",password:"",confirmPassword:"",firstName:"",lastName:"",country:null,language:null,social:{twitter:"",facebook:"",google:"",linkedIn:""}}),s=Object(M["F"])(!1),a=Object(M["F"])(null),i=Object(M["F"])(null),r=Object(M["F"])(null),n=Object(M["F"])({1:!0,2:!0,3:!0}),o=function(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],l=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=function(){return 1===e?a:2===e?i:3===e?r:null}();if(c){var u=c.value.validate();n.value[e]=u,u&&(o&&!l?t.value+=1:o||(t.value-=1),l&&(s.value=!0))}};return{activeStep:t,userData:e,validators:{required:X["j"],alphaDashValidator:X["a"],emailValidator:X["e"],passwordValidator:X["h"],confirmedValidator:X["d"],alphaValidator:X["b"]},stepValidationResult:n,handleStepValidation:o,step1Form:a,step2Form:i,step3Form:r,isFormSubmittedSnackbarVisible:s}}},Y=Q,tt=s("62ad"),et=s("4bd4"),st=s("0fd9"),at=s("b974"),it=s("2db4"),rt=s("8654"),nt=Object(c["a"])(Y,J,K,!1,null,null,null),ot=nt.exports;p()(nt,{VBtn:d["a"],VCol:tt["a"],VDivider:h["a"],VForm:et["a"],VRow:st["a"],VSelect:at["a"],VSnackbar:it["a"],VStepper:S,VStepperContent:k,VStepperHeader:B,VStepperItems:T,VStepperStep:A,VTextField:rt["a"]});var lt={components:{DemoStepperCustomHeader:I,DemoStepperTransparentHeader:L,DemoStepperVertical:G,DemoStepperWithForm:ot}},ct=lt,ut=Object(c["a"])(ct,a,i,!1,null,null,null);e["default"]=ut.exports},ca71:function(t,e,s){}}]);
//# sourceMappingURL=chunk-76bd8758.d6a9bd81.js.map