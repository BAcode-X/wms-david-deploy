(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f2b860a"],{"3a2f":function(e,t,n){"use strict";var o=n("ade3"),c=(n("a9e3"),n("9734"),n("4ad4")),i=n("a9ad"),l=n("16b7"),a=n("b848"),s=n("f573"),r=n("f2e7"),d=n("80d2"),h=n("d9bd"),b=n("58df");t["a"]=Object(b["a"])(i["a"],l["a"],a["a"],s["a"],r["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var e=this.dimensions,t=e.activator,n=e.content,o=!this.bottom&&!this.left&&!this.top&&!this.right,c=!1!==this.attach?t.offsetLeft:t.left,i=0;return this.top||this.bottom||o?i=c+t.width/2-n.width/2:(this.left||this.right)&&(i=c+(this.right?t.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(i-=parseInt(this.nudgeLeft)),this.nudgeRight&&(i+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(i,this.dimensions.content.width),"px")},calculatedTop:function(){var e=this.dimensions,t=e.activator,n=e.content,o=!1!==this.attach?t.offsetTop:t.top,c=0;return this.top||this.bottom?c=o+(this.bottom?t.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(c=o+t.height/2-n.height/2),this.nudgeTop&&(c-=parseInt(this.nudgeTop)),this.nudgeBottom&&(c+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(c+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(d["h"])(this.maxWidth),minWidth:Object(d["h"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var e=this;this.$nextTick((function(){e.value&&e.callActivate()}))},mounted:function(){"v-slot"===Object(d["u"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var e=this,t=c["a"].options.methods.genActivatorListeners.call(this);return t.focus=function(t){e.getActivator(t),e.runDelay("open")},t.blur=function(t){e.getActivator(t),e.runDelay("close")},t.keydown=function(t){t.keyCode===d["z"].esc&&(e.getActivator(t),e.runDelay("close"))},t},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var e=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[e]):e},genContent:function(){var e;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},Object(o["a"])(e,this.contentClass,!0),Object(o["a"])(e,"menuable__content__active",this.isActive),Object(o["a"])(e,"v-tooltip__content--fixed",this.activatorFixed),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(e){var t=this;return e(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[t.genTransition()]})),this.genActivator()])}})},"4e1d":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"match-height"},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("app-card-code",{attrs:{title:"Basic",code:e.codeSnippets.checkboxBasic}},[n("v-card-text",[e._v("A "),n("code",[e._v("v-checkbox")]),e._v(" in its simplest form provides a toggle between 2 values.")]),n("v-card-text",[n("demo-checkbox-basic")],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("app-card-code",{attrs:{title:"Dense",code:e.codeSnippets.checkboxDense}},[n("v-card-text",[e._v("Use "),n("code",[e._v("dense")]),e._v(" prop to reduces the input height.")]),n("v-card-text",[n("demo-checkbox-dense")],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("app-card-code",{attrs:{title:"Colors",code:e.codeSnippets.checkboxColors}},[n("v-card-text",[e._v(" Checkboxes can be colored by using any of the builtin colors and contextual names using the "),n("code",[e._v("color")]),e._v(" prop. ")]),n("v-card-text",[n("demo-checkbox-colors")],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("app-card-code",{attrs:{title:"Model as array",code:e.codeSnippets.checkboxModelAsArray}},[n("v-card-text",[e._v(" Multiple "),n("code",[e._v("v-checkbox")]),e._v("'s can share the same "),n("code",[e._v("v-model")]),e._v(" by using an array. ")]),n("v-card-text",[n("demo-checkbox-model-as-array")],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("app-card-code",{attrs:{title:"Icon",code:e.codeSnippets.checkboxIcon}},[n("v-card-text",[e._v(" Use "),n("code",[e._v("off-icon")]),e._v(" and "),n("code",[e._v("on-icon")]),e._v(" prop to change the icon on the checkbox. ")]),n("v-card-text",[n("demo-checkbox-icon")],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("app-card-code",{attrs:{title:"Checkbox Value",code:e.codeSnippets.checkboxValue}},[n("v-card-text",[e._v(" Use "),n("code",[e._v("false-value")]),e._v(" and "),n("code",[e._v("true-value")]),e._v(" prop to sets value for truthy and falsy state ")]),n("v-card-text",[n("demo-checkbox-value")],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("app-card-code",{attrs:{title:"States",code:e.codeSnippets.checkboxStates}},[n("v-card-text",[n("code",[e._v("v-checkbox")]),e._v(" can have different states such as "),n("code",[e._v("default")]),e._v(", "),n("code",[e._v("disabled")]),e._v(", and "),n("code",[e._v("indeterminate")]),e._v(". ")]),n("v-card-text",[n("demo-checkbox-states")],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("app-card-code",{attrs:{title:"Label Slot",code:e.codeSnippets.checkboxLabelSlot}},[n("v-card-text",[e._v("Checkbox labels can be defined in "),n("code",[e._v("label")]),e._v(" slot - that will allow to use HTML content.")]),n("v-card-text",[n("demo-checkbox-label-slot")],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("app-card-code",{attrs:{title:"Inline text-field",code:e.codeSnippets.checkboxInlineTextField}},[n("v-card-text",[e._v(" You can place "),n("code",[e._v("v-checkbox")]),e._v(" in line with other components such as "),n("code",[e._v("v-text-field")]),e._v(". ")]),n("v-card-text",[n("demo-checkbox-inline-text-field")],1)],1)],1)],1)},c=[],i=n("47d1"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex demo-space-x flex-wrap"},[n("v-checkbox",{attrs:{"hide-details":"",label:""+e.checkboxOne.toString()},model:{value:e.checkboxOne,callback:function(t){e.checkboxOne=t},expression:"checkboxOne"}}),n("v-checkbox",{attrs:{"hide-details":"",label:""+e.checkboxTwo.toString()},model:{value:e.checkboxTwo,callback:function(t){e.checkboxTwo=t},expression:"checkboxTwo"}})],1)},a=[],s=n("a6f4"),r={setup:function(){var e=Object(s["F"])(!0),t=Object(s["F"])(!1);return{checkboxOne:e,checkboxTwo:t}}},d=r,h=n("2877"),b=n("6544"),u=n.n(b),v=n("ac7c"),x=Object(h["a"])(d,l,a,!1,null,null,null),p=x.exports;u()(x,{VCheckbox:v["a"]});var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex demo-space-x flex-wrap"},[n("v-checkbox",{attrs:{dense:"","hide-details":"",label:""+e.checkboxOne.toString()},model:{value:e.checkboxOne,callback:function(t){e.checkboxOne=t},expression:"checkboxOne"}}),n("v-checkbox",{attrs:{dense:"","hide-details":"",label:""+e.checkboxTwo.toString()},model:{value:e.checkboxTwo,callback:function(t){e.checkboxTwo=t},expression:"checkboxTwo"}})],1)},f=[],m={setup:function(){var e=Object(s["F"])(!0),t=Object(s["F"])(!1);return{checkboxOne:e,checkboxTwo:t}}},g=m,C=Object(h["a"])(g,k,f,!1,null,null,null),w=C.exports;u()(C,{VCheckbox:v["a"]});var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-space-x d-flex flex-wrap"},[n("v-checkbox",{attrs:{label:"primary",color:"primary",value:"primary","hide-details":""},model:{value:e.colorCheckbox,callback:function(t){e.colorCheckbox=t},expression:"colorCheckbox"}}),n("v-checkbox",{attrs:{label:"secondary",color:"secondary",value:"secondary","hide-details":""},model:{value:e.colorCheckbox,callback:function(t){e.colorCheckbox=t},expression:"colorCheckbox"}}),n("v-checkbox",{attrs:{label:"success",color:"success",value:"success","hide-details":""},model:{value:e.colorCheckbox,callback:function(t){e.colorCheckbox=t},expression:"colorCheckbox"}}),n("v-checkbox",{attrs:{label:"info",color:"info",value:"info","hide-details":""},model:{value:e.colorCheckbox,callback:function(t){e.colorCheckbox=t},expression:"colorCheckbox"}}),n("v-checkbox",{attrs:{label:"warning",color:"warning",value:"warning","hide-details":""},model:{value:e.colorCheckbox,callback:function(t){e.colorCheckbox=t},expression:"colorCheckbox"}}),n("v-checkbox",{attrs:{label:"error",color:"error",value:"error","hide-details":""},model:{value:e.colorCheckbox,callback:function(t){e.colorCheckbox=t},expression:"colorCheckbox"}})],1)},_=[],S={setup:function(){var e=["primary","secondary","success","info","warning","error"];return{colorCheckbox:e}}},y=S,T=Object(h["a"])(y,O,_,!1,null,null,null),I=T.exports;u()(T,{VCheckbox:v["a"]});var j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"d-flex demo-space-x flex-wrap"},[n("v-checkbox",{attrs:{label:"John",value:"John"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{label:"Jacob",color:"success",value:"Jacob"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{label:"Jonhson",color:"info",value:"Jonhson"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("p",[e._v(e._s(e.selected))])])},A=[],$={setup:function(){var e=Object(s["F"])(["John"]);return{selected:e}}},F=$,E=Object(h["a"])(F,j,A,!1,null,null,null),D=E.exports;u()(E,{VCheckbox:v["a"]});var V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex demo-space-x flex-wrap"},[n("v-checkbox",{attrs:{label:""+e.toggleCheckboxOne.toString(),"on-icon":e.icons.mdiCheck,"off-icon":e.icons.mdiClose,"hide-details":""},model:{value:e.toggleCheckboxOne,callback:function(t){e.toggleCheckboxOne=t},expression:"toggleCheckboxOne"}}),n("v-checkbox",{attrs:{label:""+e.toggleCheckboxTwo.toString(),"on-icon":e.icons.mdiAlarmCheck,"off-icon":e.icons.mdiAlarm,color:"success","hide-details":""},model:{value:e.toggleCheckboxTwo,callback:function(t){e.toggleCheckboxTwo=t},expression:"toggleCheckboxTwo"}}),n("v-checkbox",{attrs:{label:""+e.toggleCheckboxThree.toString(),"on-icon":e.icons.mdiCheckCircle,"off-icon":e.icons.mdiCloseCircle,color:"error","hide-details":""},model:{value:e.toggleCheckboxThree,callback:function(t){e.toggleCheckboxThree=t},expression:"toggleCheckboxThree"}})],1)},J=[],L=n("94ed"),B={setup:function(){var e=Object(s["F"])(!0),t=Object(s["F"])(!0),n=Object(s["F"])(!0);return{toggleCheckboxOne:e,toggleCheckboxTwo:t,toggleCheckboxThree:n,icons:{mdiCheck:L["Mb"],mdiClose:L["fc"],mdiAlarm:L["G"],mdiAlarmCheck:L["H"],mdiCheckCircle:L["Ob"],mdiCloseCircle:L["hc"]}}}},M=B,R=Object(h["a"])(M,V,J,!1,null,null,null),W=R.exports;u()(R,{VCheckbox:v["a"]});var z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex demo-space-x"},[n("v-checkbox",{attrs:{"true-value":1,"false-value":0,label:""+e.checkbox.toString(),"hide-details":""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),n("v-checkbox",{attrs:{"true-value":"show","false-value":"hide",color:"success",label:""+e.checkboxString.toString(),"hide-details":""},model:{value:e.checkboxString,callback:function(t){e.checkboxString=t},expression:"checkboxString"}})],1)},Y=[],H={setup:function(){var e=Object(s["F"])(1),t=Object(s["F"])("show");return{checkbox:e,checkboxString:t}}},U=H,N=Object(h["a"])(U,z,Y,!1,null,null,null),X=N.exports;u()(N,{VCheckbox:v["a"]});var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex demo-space-x flex-wrap"},[n("v-checkbox",{attrs:{"input-value":"true",value:"",label:"On","hide-details":""}}),n("v-checkbox",{attrs:{value:"",label:"Off","hide-details":""}}),n("v-checkbox",{attrs:{value:"",indeterminate:"",label:"Indeterminate","hide-details":""}}),n("v-checkbox",{attrs:{"input-value":"true",value:"",disabled:"",label:"On disabled","hide-details":""}}),n("v-checkbox",{attrs:{value:"",disabled:"",label:"Off disabled","hide-details":""}})],1)},G=[],P={},Z=Object(h["a"])(P,q,G,!1,null,null,null),K=Z.exports;u()(Z,{VCheckbox:v["a"]});var Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-checkbox",{attrs:{"hide-details":""},scopedSlots:e._u([{key:"label",fn:function(){return[n("div",[e._v(" I agree that "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("a",e._g({attrs:{href:"javascript:void(0)"},on:{click:function(e){e.stopPropagation()}}},o),[e._v(" Vuetify ")])]}}])},[e._v(" Opens in new window ")]),e._v(" is awesome ")],1)]},proxy:!0}]),model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})},ee=[],te={setup:function(){var e=Object(s["F"])(!1);return{checkbox:e}}},ne=te,oe=n("3a2f"),ce=Object(h["a"])(ne,Q,ee,!1,null,null,null),ie=ce.exports;u()(ce,{VCheckbox:v["a"],VTooltip:oe["a"]});var le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{attrs:{align:"center"}},[n("v-checkbox",{staticClass:"shrink me-2 mt-0",attrs:{"hide-details":""},model:{value:e.includeFiles,callback:function(t){e.includeFiles=t},expression:"includeFiles"}}),n("v-text-field",{attrs:{label:"Include files"}})],1),n("v-row",{attrs:{align:"center"}},[n("v-checkbox",{staticClass:"shrink me-2 mt-0",attrs:{"hide-details":""},model:{value:e.isInputEnabled,callback:function(t){e.isInputEnabled=t},expression:"isInputEnabled"}}),n("v-text-field",{attrs:{disabled:!e.isInputEnabled,label:"I only work if you check the box"}})],1)],1)},ae=[],se={setup:function(){var e=Object(s["F"])(!0),t=Object(s["F"])(!1);return{includeFiles:e,isInputEnabled:t}}},re=se,de=n("0fd9"),he=n("8654"),be=Object(h["a"])(re,le,ae,!1,null,null,null),ue=be.exports;u()(be,{VCheckbox:v["a"],VRow:de["a"],VTextField:he["a"]});var ve='\n<template>\n  <div class="d-flex demo-space-x">\n    <v-checkbox\n      v-model="checkbox"\n      :true-value="1"\n      :false-value="0"\n      :label="`${checkbox.toString()}`"\n      hide-details\n    ></v-checkbox>\n\n    <v-checkbox\n      v-model="checkboxString"\n      true-value="show"\n      false-value="hide"\n      color="success"\n      :label="`${checkboxString.toString()}`"\n      hide-details\n    ></v-checkbox>\n  </div>\n</template>\n\n<script>\nimport { ref } from \'@vue/composition-api\'\n\nexport default {\n  setup() {\n    const checkbox = ref(1)\n    const checkboxString = ref(\'show\')\n\n    return { checkbox, checkboxString }\n  },\n}\n<\/script>\n',xe='\n<template>\n  <div>\n    <div class="d-flex demo-space-x flex-wrap">\n      <v-checkbox\n        v-model="selected"\n        label="John"\n        value="John"\n      ></v-checkbox>\n\n      <v-checkbox\n        v-model="selected"\n        label="Jacob"\n        color="success"\n        value="Jacob"\n      ></v-checkbox>\n\n      <v-checkbox\n        v-model="selected"\n        label="Jonhson"\n        color="info"\n        value="Jonhson"\n      ></v-checkbox>\n    </div>\n    <p>{{ selected }}</p>\n  </div>\n</template>\n\n<script>\nimport { ref } from \'@vue/composition-api\'\n\nexport default {\n  setup() {\n    const selected = ref([\'John\'])\n\n    return { selected }\n  },\n}\n<\/script>\n',pe='\n<template>\n  <div class="d-flex demo-space-x flex-wrap">\n    <v-checkbox\n      v-model="checkboxOne"\n      hide-details\n      :label="`${checkboxOne.toString()}`"\n    ></v-checkbox>\n\n    <v-checkbox\n      v-model="checkboxTwo"\n      hide-details\n      :label="`${checkboxTwo.toString()}`"\n    ></v-checkbox>\n  </div>\n</template>\n\n<script>\nimport { ref } from \'@vue/composition-api\'\n\nexport default {\n  setup() {\n    const checkboxOne = ref(true)\n    const checkboxTwo = ref(false)\n\n    return { checkboxOne, checkboxTwo }\n  },\n}\n<\/script>\n',ke='\n<template>\n  <div class="d-flex demo-space-x flex-wrap">\n    <v-checkbox\n      v-model="checkboxOne"\n      dense\n      hide-details\n      :label="`${checkboxOne.toString()}`"\n    ></v-checkbox>\n\n    <v-checkbox\n      v-model="checkboxTwo"\n      dense\n      hide-details\n      :label="`${checkboxTwo.toString()}`"\n    ></v-checkbox>\n  </div>\n</template>\n\n<script>\nimport { ref } from \'@vue/composition-api\'\n\nexport default {\n  setup() {\n    const checkboxOne = ref(true)\n    const checkboxTwo = ref(false)\n\n    return { checkboxOne, checkboxTwo }\n  },\n}\n<\/script>\n',fe='\n<template>\n  <div>\n    <v-row align="center">\n      <v-checkbox\n        v-model="includeFiles"\n        hide-details\n        class="shrink me-2 mt-0"\n      ></v-checkbox>\n      <v-text-field label="Include files"></v-text-field>\n    </v-row>\n    <v-row align="center">\n      <v-checkbox\n        v-model="isInputEnabled"\n        hide-details\n        class="shrink me-2 mt-0"\n      ></v-checkbox>\n      <v-text-field\n        :disabled="!isInputEnabled"\n        label="I only work if you check the box"\n      ></v-text-field>\n    </v-row>\n  </div>\n</template>\n\n<script>\nimport { ref } from \'@vue/composition-api\'\n\nexport default {\n  setup() {\n    const includeFiles = ref(true)\n    const isInputEnabled = ref(false)\n\n    return { includeFiles, isInputEnabled }\n  },\n}\n<\/script>\n',me='\n<template>\n  <div class="d-flex demo-space-x flex-wrap">\n    <v-checkbox\n      v-model="toggleCheckboxOne"\n      :label="`${toggleCheckboxOne.toString()}`"\n      :on-icon="icons.mdiCheck"\n      :off-icon="icons.mdiClose"\n      hide-details\n    ></v-checkbox>\n\n    <v-checkbox\n      v-model="toggleCheckboxTwo"\n      :label="`${toggleCheckboxTwo.toString()}`"\n      :on-icon="icons.mdiAlarmCheck"\n      :off-icon="icons.mdiAlarm"\n      color="success"\n      hide-details\n    ></v-checkbox>\n\n    <v-checkbox\n      v-model="toggleCheckboxThree"\n      :label="`${toggleCheckboxThree.toString()}`"\n      :on-icon="icons.mdiCheckCircle"\n      :off-icon="icons.mdiCloseCircle"\n      color="error"\n      hide-details\n    ></v-checkbox>\n  </div>\n</template>\n\n<script>\nimport { ref } from \'@vue/composition-api\'\n// eslint-disable-next-line object-curly-newline\nimport { mdiCheck, mdiClose, mdiAlarm, mdiAlarmCheck, mdiCheckCircle, mdiCloseCircle } from \'@mdi/js\'\n\nexport default {\n  setup() {\n    const toggleCheckboxOne = ref(true)\n    const toggleCheckboxTwo = ref(true)\n    const toggleCheckboxThree = ref(true)\n\n    return {\n      toggleCheckboxOne,\n      toggleCheckboxTwo,\n      toggleCheckboxThree,\n\n      // icons\n      icons: {\n        mdiCheck,\n        mdiClose,\n        mdiAlarm,\n        mdiAlarmCheck,\n        mdiCheckCircle,\n        mdiCloseCircle,\n      },\n    }\n  },\n}\n<\/script>\n',ge='\n<template>\n  <v-checkbox\n    v-model="checkbox"\n    hide-details\n  >\n    <template #label>\n      <div>\n        I agree that\n        <v-tooltip bottom>\n          <template #activator="{ on }">\n            <a\n              href="javascript:void(0)"\n              @click.stop\n              v-on="on"\n            >\n              Vuetify\n            </a>\n          </template>\n          Opens in new window\n        </v-tooltip>\n        is awesome\n      </div>\n    </template>\n  </v-checkbox>\n</template>\n\n<script>\nimport { ref } from \'@vue/composition-api\'\n\nexport default {\n  setup() {\n    const checkbox = ref(false)\n\n    return { checkbox }\n  },\n}\n<\/script>\n',Ce='\n<template>\n  <div class="d-flex demo-space-x flex-wrap">\n    <v-checkbox\n      input-value="true"\n      value\n      label="On"\n      hide-details\n    ></v-checkbox>\n\n    <v-checkbox\n      value\n      label="Off"\n      hide-details\n    ></v-checkbox>\n\n    <v-checkbox\n      value\n      indeterminate\n      label="Indeterminate"\n      hide-details\n    ></v-checkbox>\n\n    <v-checkbox\n      input-value="true"\n      value\n      disabled\n      label="On disabled"\n      hide-details\n    ></v-checkbox>\n\n    <v-checkbox\n      value\n      disabled\n      label="Off disabled"\n      hide-details\n    ></v-checkbox>\n  </div>\n</template>\n',we='\n<template>\n  <div class="demo-space-x d-flex flex-wrap">\n    <v-checkbox\n      v-model="colorCheckbox"\n      label="primary"\n      color="primary"\n      value="primary"\n      hide-details\n    ></v-checkbox>\n    <v-checkbox\n      v-model="colorCheckbox"\n      label="secondary"\n      color="secondary"\n      value="secondary"\n      hide-details\n    ></v-checkbox>\n\n    <v-checkbox\n      v-model="colorCheckbox"\n      label="success"\n      color="success"\n      value="success"\n      hide-details\n    ></v-checkbox>\n    <v-checkbox\n      v-model="colorCheckbox"\n      label="info"\n      color="info"\n      value="info"\n      hide-details\n    ></v-checkbox>\n\n    <v-checkbox\n      v-model="colorCheckbox"\n      label="warning"\n      color="warning"\n      value="warning"\n      hide-details\n    ></v-checkbox>\n    <v-checkbox\n      v-model="colorCheckbox"\n      label="error"\n      color="error"\n      value="error"\n      hide-details\n    ></v-checkbox>\n  </div>\n</template>\n\n<script>\nexport default {\n  setup() {\n    const colorCheckbox = [\'primary\', \'secondary\', \'success\', \'info\', \'warning\', \'error\']\n\n    return { colorCheckbox }\n  },\n}\n<\/script>\n',Oe={components:{AppCardCode:i["a"],DemoCheckboxBasic:p,DemoCheckboxDense:w,DemoCheckboxColors:I,DemoCheckboxModelAsArray:D,DemoCheckboxIcon:W,DemoCheckboxValue:X,DemoCheckboxStates:K,DemoCheckboxLabelSlot:ie,DemoCheckboxInlineTextField:ue},setup:function(){return{codeSnippets:{checkboxBasic:pe,checkboxDense:ke,checkboxColors:we,checkboxModelAsArray:xe,checkboxIcon:me,checkboxValue:ve,checkboxStates:Ce,checkboxLabelSlot:ge,checkboxInlineTextField:fe}}}},_e=Oe,Se=n("99d9"),ye=n("62ad"),Te=Object(h["a"])(_e,o,c,!1,null,null,null);t["default"]=Te.exports;u()(Te,{VCardText:Se["c"],VCol:ye["a"],VRow:de["a"]})},"6ca7":function(e,t,n){},9734:function(e,t,n){},ac7c:function(e,t,n){"use strict";var o=n("15fd"),c=n("5530"),i=(n("d3b7"),n("25f0"),n("6ca7"),n("ec29"),n("9d26")),l=n("c37a"),a=n("fe09"),s=["title"];t["a"]=a["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(c["a"])(Object(c["a"])({},l["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var e=this.attrs$,t=(e.title,Object(o["a"])(e,s));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(c["a"])(Object(c["a"])({},t),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})}}]);
//# sourceMappingURL=chunk-7f2b860a.26ca8d0c.js.map