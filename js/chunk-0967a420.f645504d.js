(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0967a420"],{"2b5d":function(i,n,e){"use strict";var t=e("53ca"),s=e("5530"),c=(e("d3b7"),e("25f0"),e("7db0"),e("8a79"),e("fb6a"),e("b0c0"),e("caad"),e("2532"),e("c740"),e("a434"),e("2bfd"),e("b974")),l=e("c6a6"),a=e("80d2");n["a"]=l["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return c["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(i){if(i&&this.multiple&&this.delimiters.length){var n=this.delimiters.find((function(n){return i.endsWith(n)}));null!=n&&(this.internalSearch=i.slice(0,i.length-n.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var i=l["a"].options.methods.genInput.call(this);return delete i.data.attrs.name,i.data.on.paste=this.onPaste,i},genChipSelection:function(i,n){var e=this,t=c["a"].options.methods.genChipSelection.call(this,i,n);return this.multiple&&(t.componentOptions.listeners=Object(s["a"])(Object(s["a"])({},t.componentOptions.listeners),{},{dblclick:function(){e.editingIndex=n,e.internalSearch=e.getText(i),e.selectedIndex=-1}})),t},onChipInput:function(i){c["a"].options.methods.onChipInput.call(this,i),this.editingIndex=-1},onEnterDown:function(i){i.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(i,n){this.autoSelectFirst&&l["a"].options.methods.onFilteredItemsChanged.call(this,i,n)},onKeyDown:function(i){var n=i.keyCode;!i.ctrlKey&&[a["z"].home,a["z"].end].includes(n)||c["a"].options.methods.onKeyDown.call(this,i),this.multiple&&n===a["z"].left&&0===this.$refs.input.selectionStart?this.updateSelf():n===a["z"].enter&&this.onEnterDown(i),this.changeSelectedIndex(n)},onTabDown:function(i){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return i.preventDefault(),i.stopPropagation(),this.updateTags();l["a"].options.methods.onTabDown.call(this,i)},selectItem:function(i){this.editingIndex>-1?this.updateEditing():(l["a"].options.methods.selectItem.call(this,i),this.internalSearch&&this.multiple&&this.getText(i).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(i){c["a"].options.methods.setValue.call(this,null!=i?i:this.internalSearch)},updateEditing:function(){var i=this,n=this.internalValue.slice(),e=this.selectedItems.findIndex((function(n){return i.getText(n)===i.internalSearch}));if(e>-1){var s="object"===Object(t["a"])(n[e])?Object.assign({},n[e]):n[e];n.splice(e,1),n.push(s)}else n[this.editingIndex]=this.internalSearch;this.setValue(n),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){if(this.searchIsDirty){this.internalSearch!==this.getText(this.internalValue)&&this.setValue();var i=Boolean(this.$scopedSlots.selection)||this.hasChips;i&&(this.internalSearch=null)}},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var i=this,n=this.getMenuIndex();if(!(n<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.findIndex((function(n){return i.internalSearch===i.getText(n)})),s=e>-1&&"object"===Object(t["a"])(this.selectedItems[e])?Object.assign({},this.selectedItems[e]):this.internalSearch;if(e>-1){var c=this.internalValue.slice();c.splice(e,1),this.setValue(c)}if(n>-1)return this.internalSearch=null;this.selectItem(s),this.internalSearch=null}},onPaste:function(i){var n;if(this.multiple&&!this.searchIsDirty){var e=null==(n=i.clipboardData)?void 0:n.getData("text/vnd.vuetify.autocomplete.item+plain");e&&-1===this.findExistingIndex(e)&&(i.preventDefault(),c["a"].options.methods.selectItem.call(this,e))}},clearableCallback:function(){this.editingIndex=-1,l["a"].options.methods.clearableCallback.call(this)}}})},"4fa5":function(i,n,e){"use strict";e.r(n);var t=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("v-row",{staticClass:"match-height"},[e("v-col",{attrs:{md:"6",cols:"12"}},[e("app-card-code",{attrs:{title:"Color",code:i.codeSnippets.chipColor}},[e("v-card-text",[i._v(" Use "),e("code",[i._v("color")]),i._v(" prop to change the background color of chips. ")]),e("v-card-text",[e("demo-chip-color")],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("app-card-code",{attrs:{title:"Outlined",code:i.codeSnippets.chipOutlined}},[e("v-card-text",[i._v(" Use "),e("code",[i._v("outlined")]),i._v(" prop to create outline border chips. ")]),e("v-card-text",[e("demo-chip-outlined")],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("app-card-code",{attrs:{title:"Label",code:i.codeSnippets.chipLabel}},[e("v-card-text",[i._v(" Label chips use the v-card border-radius. Use "),e("code",[i._v("label")]),i._v(" prop to create label chips. ")]),e("v-card-text",[e("demo-chip-label")],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("app-card-code",{attrs:{title:"Light",code:i.codeSnippets.chipLight}},[e("v-card-text",[i._v(" Use "),e("code",[i._v("v-chip-light-bg")]),i._v(" class with relative text color class for creating light chip. ")]),e("v-card-text",[e("demo-chip-light")],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("app-card-code",{attrs:{title:"Closable",code:i.codeSnippets.chipClosable}},[e("v-card-text",[i._v(" Closable chips can be controlled with a v-model. ")]),e("v-card-text",[e("demo-chip-closable")],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("app-card-code",{attrs:{title:"Chip with Icon",code:i.codeSnippets.chipWithIcon}},[e("v-card-text",[i._v(" Chips can use text or any icon available in the Material Icons font library. ")]),e("v-card-text",[e("demo-chip-with-icon")],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("app-card-code",{attrs:{title:"Pill",code:i.codeSnippets.chipPill}},[e("v-card-text",[i._v(" Use "),e("code",[i._v("pill")]),i._v(" prop to remove the "),e("code",[i._v("v-avatar")]),i._v(" padding. ")]),e("v-card-text",[e("demo-chip-pill")],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("app-card-code",{attrs:{title:"Sizes",code:i.codeSnippets.chipSizes}},[e("v-card-text",[e("code",[i._v("v-chip")]),i._v(" component can have various sizes from "),e("code",[i._v("x-small")]),i._v(" to "),e("code",[i._v("x-large")]),i._v(". ")]),e("v-card-text",[e("demo-chip-sizes")],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("app-card-code",{attrs:{title:"In Selects",code:i.codeSnippets.chipInSelects}},[e("v-card-text",[i._v(" Selects can use chips to display the selected data. Try adding your own tags below. ")]),e("v-card-text",[e("demo-chip-in-selects")],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("app-card-code",{attrs:{title:"Expandable",code:i.codeSnippets.chipExpandable}},[e("v-card-text",[i._v(" Chips can be combined with "),e("code",[i._v("v-menu")]),i._v(" to enable a specific set of actions for a chip. ")]),e("v-card-text",[e("demo-chip-expandable")],1)],1)],1)],1)},s=[],c=e("47d1"),l=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("div",{staticClass:"demo-space-x"},[e("v-chip",[i._v(" Default ")]),e("v-chip",{attrs:{color:"primary"}},[i._v(" Primary ")]),e("v-chip",{attrs:{color:"secondary"}},[i._v(" Secondary ")]),e("v-chip",{attrs:{color:"success"}},[i._v(" Success ")]),e("v-chip",{attrs:{color:"info"}},[i._v(" Info ")]),e("v-chip",{attrs:{color:"warning"}},[i._v(" Warning ")]),e("v-chip",{attrs:{color:"error"}},[i._v(" Error ")])],1)},a=[],r=e("2877"),o=e("6544"),p=e.n(o),v=e("cc20"),h={},u=Object(r["a"])(h,l,a,!1,null,null,null),d=u.exports;p()(u,{VChip:v["a"]});var m=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("div",{staticClass:"demo-space-x"},[e("v-chip",{attrs:{outlined:""}},[i._v(" Default ")]),e("v-chip",{attrs:{outlined:"",color:"primary"}},[i._v(" Primary ")]),e("v-chip",{attrs:{outlined:"",color:"secondary"}},[i._v(" Secondary ")]),e("v-chip",{attrs:{outlined:"",color:"success"}},[i._v(" Success ")]),e("v-chip",{attrs:{outlined:"",color:"info"}},[i._v(" Info ")]),e("v-chip",{attrs:{outlined:"",color:"warning"}},[i._v(" Warning ")]),e("v-chip",{attrs:{outlined:"",color:"error"}},[i._v(" Error ")])],1)},b=[],f={},g=Object(r["a"])(f,m,b,!1,null,null,null),_=g.exports;p()(g,{VChip:v["a"]});var V=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("div",{staticClass:"demo-space-x"},[e("v-chip",{attrs:{label:""}},[i._v(" Default ")]),e("v-chip",{attrs:{label:"",color:"primary"}},[i._v(" Primary ")]),e("v-chip",{attrs:{label:"",color:"secondary"}},[i._v(" Secondary ")]),e("v-chip",{attrs:{label:"",color:"success"}},[i._v(" Success ")]),e("v-chip",{attrs:{label:"",color:"info"}},[i._v(" Info ")]),e("v-chip",{attrs:{label:"",color:"warning"}},[i._v(" Warning ")]),e("v-chip",{attrs:{label:"",color:"error"}},[i._v(" Error ")])],1)},x=[],S={},C=Object(r["a"])(S,V,x,!1,null,null,null),y=C.exports;p()(C,{VChip:v["a"]});var I=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("div",{staticClass:"demo-space-x"},[e("v-chip",{staticClass:"v-chip-light-bg"},[i._v(" Default ")]),e("v-chip",{staticClass:"v-chip-light-bg primary--text",attrs:{color:"primary"}},[i._v(" Primary ")]),e("v-chip",{staticClass:"v-chip-light-bg secondary--text",attrs:{color:"secondary"}},[i._v(" Secondary ")]),e("v-chip",{staticClass:"v-chip-light-bg success--text",attrs:{color:"success"}},[i._v(" Success ")]),e("v-chip",{staticClass:"v-chip-light-bg info--text",attrs:{color:"info"}},[i._v(" Info ")]),e("v-chip",{staticClass:"v-chip-light-bg warning--text",attrs:{color:"warning"}},[i._v(" Warning ")]),e("v-chip",{staticClass:"v-chip-light-bg error--text",attrs:{color:"error"}},[i._v(" Error ")])],1)},O=[],D={},E=Object(r["a"])(D,I,O,!1,null,null,null),w=E.exports;p()(E,{VChip:v["a"]});var k=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("div",{staticClass:"demo-space-x"},[i.isDefaultVisible?e("v-chip",{attrs:{close:""},on:{"click:close":function(n){i.isDefaultVisible=!i.isDefaultVisible}}},[i._v(" Default ")]):i._e(),i.isPrimaryVisible?e("v-chip",{attrs:{close:"",color:"primary"},on:{"click:close":function(n){i.isPrimaryVisible=!i.isPrimaryVisible}}},[i._v(" Primary ")]):i._e(),i.isSecondaryVisible?e("v-chip",{attrs:{close:"",color:"secondary"},on:{"click:close":function(n){i.isSecondaryVisible=!i.isSecondaryVisible}}},[i._v(" Secondary ")]):i._e(),i.isSuccessVisible?e("v-chip",{attrs:{close:"",color:"success"},on:{"click:close":function(n){i.isSuccessVisible=!i.isSuccessVisible}}},[i._v(" Success ")]):i._e(),i.isInfoVisible?e("v-chip",{attrs:{close:"",color:"info"},on:{"click:close":function(n){i.isInfoVisible=!i.isInfoVisible}}},[i._v(" Info ")]):i._e(),i.isWarningVisible?e("v-chip",{attrs:{close:"",color:"warning"},on:{"click:close":function(n){i.isWarningVisible=!i.isWarningVisible}}},[i._v(" Warning ")]):i._e(),i.isErrorVisible?e("v-chip",{attrs:{close:"",color:"error"},on:{"click:close":function(n){i.isErrorVisible=!i.isErrorVisible}}},[i._v(" Error ")]):i._e()],1)},j=[],P=e("a6f4"),F={setup:function(){var i=Object(P["F"])(!0),n=Object(P["F"])(!0),e=Object(P["F"])(!0),t=Object(P["F"])(!0),s=Object(P["F"])(!0),c=Object(P["F"])(!0),l=Object(P["F"])(!0);return{isDefaultVisible:i,isPrimaryVisible:n,isSecondaryVisible:e,isSuccessVisible:t,isInfoVisible:s,isWarningVisible:c,isErrorVisible:l}}},W=F,z=Object(r["a"])(W,k,j,!1,null,null,null),A=z.exports;p()(z,{VChip:v["a"]});var M=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("div",{staticClass:"demo-space-x"},[e("v-chip",[e("v-icon",{staticClass:"me-1",attrs:{size:"18"}},[i._v(" "+i._s(i.icons.mdiAccountOutline)+" ")]),i._v(" Account ")],1),e("v-chip",{attrs:{color:"primary"}},[e("v-icon",{staticClass:"me-1",attrs:{size:"18"}},[i._v(" "+i._s(i.icons.mdiStarOutline)+" ")]),i._v(" Premium ")],1),e("v-chip",{attrs:{color:"secondary"}},[e("v-icon",{staticClass:"me-1",attrs:{size:"18"}},[i._v(" "+i._s(i.icons.mdiCake)+" ")]),i._v(" 1 Year ")],1),e("v-chip",{attrs:{color:"success"}},[e("v-icon",{staticClass:"me-1",attrs:{size:"18"}},[i._v(" "+i._s(i.icons.mdiBellOutline)+" ")]),i._v(" Notification ")],1),e("v-chip",{attrs:{color:"info"}},[e("v-icon",{staticClass:"me-1",attrs:{size:"18"}},[i._v(" "+i._s(i.icons.mdiForumOutline)+" ")]),i._v(" Message ")],1),e("v-chip",{attrs:{color:"warning"}},[e("v-icon",{staticClass:"me-1",attrs:{size:"18"}},[i._v(" "+i._s(i.icons.mdiAlertOutline)+" ")]),i._v(" Warning ")],1),e("v-chip",{attrs:{color:"error"}},[e("v-icon",{staticClass:"me-1",attrs:{size:"18"}},[i._v(" "+i._s(i.icons.mdiAlertCircleOutline)+" ")]),i._v(" Error ")],1)],1)},L=[],T=e("94ed"),$={setup:function(){return{icons:{mdiAccountOutline:T["C"],mdiStarOutline:T["rf"],mdiCake:T["wb"],mdiBellOutline:T["mb"],mdiAlertCircleOutline:T["M"],mdiAlertOutline:T["R"],mdiForumOutline:T["xd"]}}}},J=$,B=e("132d"),N=Object(r["a"])(J,M,L,!1,null,null,null),U=N.exports;p()(N,{VChip:v["a"],VIcon:B["a"]});var R=function(){var i=this,n=i.$createElement,t=i._self._c||n;return t("div",{staticClass:"demo-space-x"},[t("v-chip",{attrs:{pill:""}},[t("v-avatar",{attrs:{left:""}},[t("v-img",{attrs:{src:e("f7d6")}})],1),i._v(" John Doe ")],1),t("v-chip",{attrs:{pill:""}},[t("v-avatar",{attrs:{left:""}},[t("v-img",{attrs:{src:e("3e88")}})],1),i._v(" Darcey Nooner ")],1),t("v-chip",{attrs:{pill:""}},[t("v-avatar",{attrs:{left:""}},[t("v-img",{attrs:{src:e("e251")}})],1),i._v(" Elicia Rieske ")],1),t("v-chip",{attrs:{pill:""}},[t("v-avatar",{attrs:{left:""}},[t("v-img",{attrs:{src:e("5235")}})],1),i._v(" Vinnie Mostowy ")],1)],1)},Y=[],K=e("8212"),q=e("adda"),G={},H=Object(r["a"])(G,R,Y,!1,null,null,null),Q=H.exports;p()(H,{VAvatar:K["a"],VChip:v["a"],VImg:q["a"]});var X=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("div",{staticClass:"demo-space-x"},[e("v-chip",{attrs:{"x-small":""}},[i._v(" x-small chip ")]),e("v-chip",{attrs:{small:""}},[i._v(" small chip ")]),e("v-chip",[i._v("Default")]),e("v-chip",{attrs:{large:""}},[i._v(" large chip ")]),e("v-chip",{attrs:{"x-large":""}},[i._v(" x-large chip ")])],1)},Z=[],ii={},ni=Object(r["a"])(ii,X,Z,!1,null,null,null),ei=ni.exports;p()(ni,{VChip:v["a"]});var ti=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("v-menu",{attrs:{bottom:"",right:"",transition:"scale-transition",origin:"top left"},scopedSlots:i._u([{key:"activator",fn:function(n){var t=n.on;return[e("v-chip",i._g({},t),[i._v(" VueJS ")])]}}]),model:{value:i.isMenuVisible,callback:function(n){i.isMenuVisible=n},expression:"isMenuVisible"}},[e("v-list",[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",[i._v("VueJS")]),e("v-list-item-subtitle",[i._v(" The Progressive JavaScript Framework ")])],1),e("v-list-item-action",[e("v-btn",{attrs:{icon:""},on:{click:function(n){i.isMenuVisible=!1}}},[e("v-icon",[i._v(i._s(i.icons.mdiClose))])],1)],1)],1)],1)],1)},si=[],ci={setup:function(){var i=Object(P["F"])(!1);return{isMenuVisible:i,icons:{mdiClose:T["fc"]}}}},li=ci,ai=e("8336"),ri=e("8860"),oi=e("da13"),pi=e("1800"),vi=e("5d23"),hi=e("e449"),ui=Object(r["a"])(li,ti,si,!1,null,null,null),di=ui.exports;p()(ui,{VBtn:ai["a"],VChip:v["a"],VIcon:B["a"],VList:ri["a"],VListItem:oi["a"],VListItemAction:pi["a"],VListItemContent:vi["b"],VListItemSubtitle:vi["c"],VListItemTitle:vi["d"],VMenu:hi["a"]});var mi=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("v-combobox",{attrs:{items:i.items,chips:"",clearable:"",label:"Your favorite hobbies",multiple:"","prepend-icon":i.icons.mdiFilterVariant,solo:""},scopedSlots:i._u([{key:"selection",fn:function(n){var t=n.attrs,s=n.item,c=n.select,l=n.selected;return[e("v-chip",i._b({attrs:{"input-value":l,close:""},on:{click:c,"click:close":function(n){return i.remove(s)}}},"v-chip",t,!1),[e("strong",[i._v(i._s(s))]),i._v("  ")])]}}]),model:{value:i.chips,callback:function(n){i.chips=n},expression:"chips"}})},bi=[],fi=e("2909"),gi=(e("a434"),{setup:function(){var i=Object(P["F"])(["Programming","Playing video games","Sleeping"]),n=Object(P["F"])(["Streaming","Eating"]),e=function(n){i.value.splice(i.value.indexOf(n),1),i.value=Object(fi["a"])(i.value)};return{chips:i,items:n,remove:e,icons:{mdiFilterVariant:T["id"]}}}}),_i=gi,Vi=e("2b5d"),xi=Object(r["a"])(_i,mi,bi,!1,null,null,null),Si=xi.exports;p()(xi,{VChip:v["a"],VCombobox:Vi["a"]});var Ci='\n<template>\n  <div class="demo-space-x">\n    <v-chip>\n      <v-icon\n        class="me-1"\n        size="18"\n      >\n        {{ icons.mdiAccountOutline }}\n      </v-icon>\n      Account\n    </v-chip>\n\n    <v-chip color="primary">\n      <v-icon\n        class="me-1"\n        size="18"\n      >\n        {{ icons.mdiStarOutline }}\n      </v-icon>\n      Premium\n    </v-chip>\n\n    <v-chip color="secondary">\n      <v-icon\n        size="18"\n        class="me-1"\n      >\n        {{ icons.mdiCake }}\n      </v-icon>\n      1 Year\n    </v-chip>\n\n    <v-chip color="success">\n      <v-icon\n        class="me-1"\n        size="18"\n      >\n        {{ icons.mdiBellOutline }}\n      </v-icon>\n      Notification\n    </v-chip>\n\n    <v-chip color="info">\n      <v-icon\n        class="me-1"\n        size="18"\n      >\n        {{ icons.mdiForumOutline }}\n      </v-icon>\n      Message\n    </v-chip>\n\n    <v-chip color="warning">\n      <v-icon\n        class="me-1"\n        size="18"\n      >\n        {{ icons.mdiAlertOutline }}\n      </v-icon>\n      Warning\n    </v-chip>\n\n    <v-chip color="error">\n      <v-icon\n        class="me-1"\n        size="18"\n      >\n        {{ icons.mdiAlertCircleOutline }}\n      </v-icon>\n      Error\n    </v-chip>\n  </div>\n</template>\n\n<script>\nimport {\n  mdiAccountOutline,\n  mdiStarOutline,\n  mdiCake,\n  mdiBellOutline,\n  mdiAlertCircleOutline,\n  mdiAlertOutline,\n  mdiForumOutline,\n} from \'@mdi/js\'\n\nexport default {\n  setup() {\n    return {\n      icons: {\n        mdiAccountOutline,\n        mdiStarOutline,\n        mdiCake,\n        mdiBellOutline,\n        mdiAlertCircleOutline,\n        mdiAlertOutline,\n        mdiForumOutline,\n      },\n    }\n  },\n}\n<\/script>\n',yi='\n<template>\n  <div class="demo-space-x">\n    <v-chip>\n      Default\n    </v-chip>\n\n    <v-chip color="primary">\n      Primary\n    </v-chip>\n\n    <v-chip color="secondary">\n      Secondary\n    </v-chip>\n\n    <v-chip color="success">\n      Success\n    </v-chip>\n\n    <v-chip color="info">\n      Info\n    </v-chip>\n\n    <v-chip color="warning">\n      Warning\n    </v-chip>\n\n    <v-chip color="error">\n      Error\n    </v-chip>\n  </div>\n</template>\n',Ii='\n<template>\n  <v-combobox\n    v-model="chips"\n    :items="items"\n    chips\n    clearable\n    label="Your favorite hobbies"\n    multiple\n    :prepend-icon="icons.mdiFilterVariant"\n    solo\n  >\n    <template #selection="{ attrs, item, select, selected }">\n      <v-chip\n        v-bind="attrs"\n        :input-value="selected"\n        close\n        @click="select"\n        @click:close="remove(item)"\n      >\n        <strong>{{ item }}</strong>&nbsp;\n      </v-chip>\n    </template>\n  </v-combobox>\n</template>\n\n<script>\nimport { ref } from \'@vue/composition-api\'\nimport { mdiFilterVariant } from \'@mdi/js\'\n\nexport default {\n  setup() {\n    const chips = ref([\'Programming\', \'Playing video games\', \'Sleeping\'])\n    const items = ref([\'Streaming\', \'Eating\'])\n\n    const remove = item => {\n      chips.value.splice(chips.value.indexOf(item), 1)\n      chips.value = [...chips.value]\n    }\n\n    return {\n      chips,\n      items,\n      remove,\n      icons: {\n        mdiFilterVariant,\n      },\n    }\n  },\n}\n<\/script>\n',Oi='\n<template>\n  <div class="demo-space-x">\n    <v-chip class="v-chip-light-bg">\n      Default\n    </v-chip>\n\n    <v-chip\n      class="v-chip-light-bg primary--text"\n      color="primary"\n    >\n      Primary\n    </v-chip>\n\n    <v-chip\n      class="v-chip-light-bg secondary--text"\n      color="secondary"\n    >\n      Secondary\n    </v-chip>\n\n    <v-chip\n      class="v-chip-light-bg success--text"\n      color="success"\n    >\n      Success\n    </v-chip>\n\n    <v-chip\n      class="v-chip-light-bg info--text"\n      color="info"\n    >\n      Info\n    </v-chip>\n\n    <v-chip\n      class="v-chip-light-bg warning--text"\n      color="warning"\n    >\n      Warning\n    </v-chip>\n\n    <v-chip\n      class="v-chip-light-bg error--text"\n      color="error"\n    >\n      Error\n    </v-chip>\n  </div>\n</template>\n',Di='\n<template>\n  <div class="demo-space-x">\n    <v-chip\n      v-if="isDefaultVisible"\n      close\n      @click:close="isDefaultVisible = !isDefaultVisible"\n    >\n      Default\n    </v-chip>\n\n    <v-chip\n      v-if="isPrimaryVisible"\n      close\n      color="primary"\n      @click:close="isPrimaryVisible = !isPrimaryVisible"\n    >\n      Primary\n    </v-chip>\n\n    <v-chip\n      v-if="isSecondaryVisible"\n      close\n      color="secondary"\n      @click:close="isSecondaryVisible = !isSecondaryVisible"\n    >\n      Secondary\n    </v-chip>\n\n    <v-chip\n      v-if="isSuccessVisible"\n      close\n      color="success"\n      @click:close="isSuccessVisible = !isSuccessVisible"\n    >\n      Success\n    </v-chip>\n\n    <v-chip\n      v-if="isInfoVisible"\n      close\n      color="info"\n      @click:close="isInfoVisible = !isInfoVisible"\n    >\n      Info\n    </v-chip>\n\n    <v-chip\n      v-if="isWarningVisible"\n      close\n      color="warning"\n      @click:close="isWarningVisible = !isWarningVisible"\n    >\n      Warning\n    </v-chip>\n\n    <v-chip\n      v-if="isErrorVisible"\n      close\n      color="error"\n      @click:close="isErrorVisible = !isErrorVisible"\n    >\n      Error\n    </v-chip>\n  </div>\n</template>\n\n<script>\nimport { ref } from \'@vue/composition-api\'\n\nexport default {\n  setup() {\n    const isDefaultVisible = ref(true)\n    const isPrimaryVisible = ref(true)\n    const isSecondaryVisible = ref(true)\n    const isSuccessVisible = ref(true)\n    const isInfoVisible = ref(true)\n    const isWarningVisible = ref(true)\n    const isErrorVisible = ref(true)\n\n    return {\n      isDefaultVisible,\n      isPrimaryVisible,\n      isSecondaryVisible,\n      isSuccessVisible,\n      isInfoVisible,\n      isWarningVisible,\n      isErrorVisible,\n    }\n  },\n}\n<\/script>\n',Ei='\n<template>\n  <div class="demo-space-x">\n    <v-chip pill>\n      <v-avatar left>\n        <v-img src="@/assets/images/avatars/1.png"></v-img>\n      </v-avatar>\n      John Doe\n    </v-chip>\n\n    <v-chip pill>\n      <v-avatar left>\n        <v-img src="@/assets/images/avatars/2.png"></v-img>\n      </v-avatar>\n      Darcey Nooner\n    </v-chip>\n\n    <v-chip pill>\n      <v-avatar left>\n        <v-img src="@/assets/images/avatars/3.png"></v-img>\n      </v-avatar>\n      Elicia Rieske\n    </v-chip>\n\n    <v-chip pill>\n      <v-avatar left>\n        <v-img src="@/assets/images/avatars/4.png"></v-img>\n      </v-avatar>\n      Vinnie Mostowy\n    </v-chip>\n  </div>\n</template>\n',wi='\n<template>\n  <div class="demo-space-x">\n    <v-chip x-small>\n      x-small chip\n    </v-chip>\n\n    <v-chip small>\n      small chip\n    </v-chip>\n\n    <v-chip>Default</v-chip>\n\n    <v-chip large>\n      large chip\n    </v-chip>\n\n    <v-chip x-large>\n      x-large chip\n    </v-chip>\n  </div>\n</template>\n',ki='\n<template>\n  <div class="demo-space-x">\n    <v-chip label>\n      Default\n    </v-chip>\n\n    <v-chip\n      label\n      color="primary"\n    >\n      Primary\n    </v-chip>\n\n    <v-chip\n      label\n      color="secondary"\n    >\n      Secondary\n    </v-chip>\n\n    <v-chip\n      label\n      color="success"\n    >\n      Success\n    </v-chip>\n\n    <v-chip\n      label\n      color="info"\n    >\n      Info\n    </v-chip>\n\n    <v-chip\n      label\n      color="warning"\n    >\n      Warning\n    </v-chip>\n\n    <v-chip\n      label\n      color="error"\n    >\n      Error\n    </v-chip>\n  </div>\n</template>\n',ji='\n<template>\n  <div class="demo-space-x">\n    <v-chip outlined>\n      Default\n    </v-chip>\n\n    <v-chip\n      outlined\n      color="primary"\n    >\n      Primary\n    </v-chip>\n\n    <v-chip\n      outlined\n      color="secondary"\n    >\n      Secondary\n    </v-chip>\n\n    <v-chip\n      outlined\n      color="success"\n    >\n      Success\n    </v-chip>\n\n    <v-chip\n      outlined\n      color="info"\n    >\n      Info\n    </v-chip>\n\n    <v-chip\n      outlined\n      color="warning"\n    >\n      Warning\n    </v-chip>\n\n    <v-chip\n      outlined\n      color="error"\n    >\n      Error\n    </v-chip>\n  </div>\n</template>\n',Pi='\n<template>\n  <v-menu\n    v-model="isMenuVisible"\n    bottom\n    right\n    transition="scale-transition"\n    origin="top left"\n  >\n    <template #activator="{ on }">\n      <v-chip v-on="on">\n        VueJS\n      </v-chip>\n    </template>\n\n    <v-list>\n      <v-list-item>\n        <v-list-item-content>\n          <v-list-item-title>VueJS</v-list-item-title>\n          <v-list-item-subtitle>\n            The Progressive JavaScript Framework\n          </v-list-item-subtitle>\n        </v-list-item-content>\n\n        <v-list-item-action>\n          <v-btn\n            icon\n            @click="isMenuVisible = false"\n          >\n            <v-icon>{{ icons.mdiClose }}</v-icon>\n          </v-btn>\n        </v-list-item-action>\n      </v-list-item>\n    </v-list>\n  </v-menu>\n</template>\n\n<script>\nimport { ref } from \'@vue/composition-api\'\nimport { mdiClose } from \'@mdi/js\'\n\nexport default {\n  setup() {\n    const isMenuVisible = ref(false)\n\n    return {\n      isMenuVisible,\n      icons: { mdiClose },\n    }\n  },\n}\n<\/script>\n',Fi={components:{AppCardCode:c["a"],DemoChipColor:d,DemoChipOutlined:_,DemoChipLabel:y,DemoChipLight:w,DemoChipClosable:A,DemoChipWithIcon:U,DemoChipPill:Q,DemoChipSizes:ei,DemoChipExpandable:di,DemoChipInSelects:Si},setup:function(){return{codeSnippets:{chipColor:yi,chipOutlined:ji,chipLabel:ki,chipLight:Oi,chipClosable:Di,chipWithIcon:Ci,chipPill:Ei,chipSizes:wi,chipExpandable:Pi,chipInSelects:Ii}}}},Wi=Fi,zi=e("99d9"),Ai=e("62ad"),Mi=e("0fd9"),Li=Object(r["a"])(Wi,t,s,!1,null,null,null);n["default"]=Li.exports;p()(Li,{VCardText:zi["c"],VCol:Ai["a"],VRow:Mi["a"]})}}]);
//# sourceMappingURL=chunk-0967a420.f645504d.js.map