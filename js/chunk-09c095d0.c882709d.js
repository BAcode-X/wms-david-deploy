(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09c095d0"],{1681:function(e,t,a){},a844:function(e,t,a){"use strict";var n=a("5530"),r=(a("a9e3"),a("1681"),a("8654")),o=a("58df"),l=Object(o["a"])(r["a"]);t["a"]=l.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"}},genInput:function(){var e=r["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){r["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},ea73:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"match-height"},[a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-code",{attrs:{title:"Basic",code:e.codeSnippets.textareaBasic}},[a("v-card-text",[a("code",[e._v("v-textarea")]),e._v(" in its simplest form is a multi-line text-field, useful for larger amounts of text. ")]),a("v-card-text",[a("demo-textarea-basic")],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-code",{attrs:{title:"Auto Grow",code:e.codeSnippets.textareaAutoGrow}},[a("v-card-text",[e._v(" When using the "),a("code",[e._v("auto-grow")]),e._v(" prop, textarea’s will automatically increase in size when the contained text exceeds its size. ")]),a("v-card-text",[a("demo-textarea-auto-grow")],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("app-card-code",{attrs:{title:"Variant",code:e.codeSnippets.textareaVariant}},[a("v-card-text",[e._v(" Use "),a("code",[e._v("filled")]),e._v(", "),a("code",[e._v("flat")]),e._v(", "),a("code",[e._v("outlined")]),e._v(", "),a("code",[e._v("rounded")]),e._v(", "),a("code",[e._v("shaped")]),e._v(", "),a("code",[e._v("solo")]),e._v(" and "),a("code",[e._v("solo-inverted")]),e._v(" prop to change the look of file input. ")]),a("v-card-text",[a("demo-textarea-variant")],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-code",{attrs:{title:"States",code:e.codeSnippets.textareaStates}},[a("v-card-text",[e._v(" Use "),a("code",[e._v("disabled")]),e._v(" and "),a("code",[e._v("readonly")]),e._v(" prop to change the state of textarea. ")]),a("v-card-text",[a("demo-textarea-states")],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-code",{attrs:{title:"Browser autocomplete",code:e.codeSnippets.textareaBrowserAutocomplete}},[a("v-card-text",[e._v(" The "),a("code",[e._v("autocomplete")]),e._v(" prop gives you the option to enable the browser to predict user input. ")]),a("v-card-text",[a("demo-textarea-browser-autocomplete")],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-code",{attrs:{title:"Clearable",code:e.codeSnippets.textareaClearable}},[a("v-card-text",[e._v(" You can clear the text from a "),a("code",[e._v("v-textarea")]),e._v(" by using the "),a("code",[e._v("clearable")]),e._v(" prop, and customize the icon used with the "),a("code",[e._v("clearable-icon")]),e._v(" prop. ")]),a("v-card-text",[a("demo-textarea-clearable")],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-code",{attrs:{title:"Counter",code:e.codeSnippets.textareaCounter}},[a("v-card-text",[e._v(" The "),a("code",[e._v("counter")]),e._v(" prop informs the user of a character limit for the "),a("code",[e._v("v-textarea")]),e._v(". ")]),a("v-card-text",[a("demo-textarea-counter")],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-code",{attrs:{title:"Icons",code:e.codeSnippets.textareaIcons}},[a("v-card-text",[e._v(" The "),a("code",[e._v("append-icon")]),e._v(" and "),a("code",[e._v("prepend-icon")]),e._v(" props help add context to "),a("code",[e._v("v-textarea")]),e._v(". ")]),a("v-card-text",[a("demo-textarea-icons")],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-code",{attrs:{title:"Rows",code:e.codeSnippets.textareaRows}},[a("v-card-text",[e._v(" The "),a("code",[e._v("rows")]),e._v(" prop allows you to define how many rows the textarea has, when combined with the "),a("code",[e._v("row-height")]),e._v(" prop you can further customize your rows by defining their height. ")]),a("v-card-text",[a("demo-textarea-rows")],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-code",{attrs:{title:"No resize",code:e.codeSnippets.textareaNoResize}},[a("v-card-text",[a("code",[e._v("v-textarea")]),e._v("'s have the option to remain the same size regardless of their content’s size, using the "),a("code",[e._v("no-resize")]),e._v(" prop. ")]),a("v-card-text",[a("demo-textarea-no-resize")],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-code",{attrs:{title:"Validation",code:e.codeSnippets.textareaValidation}},[a("v-card-text",[e._v(" Use "),a("code",[e._v("rules")]),e._v(" prop to validate the textarea. ")]),a("v-card-text",[a("demo-textarea-validation")],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("app-card-code",{attrs:{title:"Validation On Blur",code:e.codeSnippets.textareaValidationOnBlur}},[a("v-card-text",[e._v(" Delays validation until blur event ")]),a("v-card-text",[a("demo-textarea-validation-on-blur")],1)],1)],1)],1)},r=[],o=a("47d1"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-textarea",{attrs:{label:"Default","hide-details":""}})},s=[],i=a("2877"),c=a("6544"),u=a.n(c),d=a("a844"),v={},p=Object(i["a"])(v,l,s,!1,null,null,null),x=p.exports;u()(p,{VTextarea:d["a"]});var m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-textarea",{attrs:{label:"Label","auto-grow":"",value:"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.","hide-details":""}})},h=[],w={},b=Object(i["a"])(w,m,h,!1,null,null,null),f=b.exports;u()(b,{VTextarea:d["a"]});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-textarea",{attrs:{label:"Default",rows:"2"}}),a("v-textarea",{attrs:{label:"Outlined",rows:"2",outlined:""}}),a("v-textarea",{attrs:{label:"Shaped",rows:"2",outlined:"",shaped:""}}),a("v-textarea",{attrs:{label:"Solo",rows:"2",solo:"","hide-details":""}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-textarea",{attrs:{label:"Filled",rows:"2",filled:""}}),a("v-textarea",{attrs:{label:"Solo Inverted",rows:"2","solo-inverted":""}}),a("v-textarea",{attrs:{label:"Flat",rows:"2","solo-inverted":"",flat:""}}),a("v-textarea",{attrs:{label:"Solo Inverted",rows:"1",filled:"",rounded:"","hide-details":""}})],1)],1)},g=[],T=a("62ad"),O=a("0fd9"),C={},V=Object(i["a"])(C,_,g,!1,null,null,null),S=V.exports;u()(V,{VCol:T["a"],VRow:O["a"],VTextarea:d["a"]});var y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-textarea",{attrs:{disabled:"",label:"Disabled",hint:"Hint text",rows:"2"}}),a("v-textarea",{attrs:{readonly:"",rows:"2",label:"Readonly",hint:"Hint text"}})],1)},H=[],j={},z=Object(i["a"])(j,y,H,!1,null,null,null),D=z.exports;u()(z,{VTextarea:d["a"]});var I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-textarea",{attrs:{autocomplete:"email",label:"Email"}})},$=[],R={},E=Object(i["a"])(R,I,$,!1,null,null,null),B=E.exports;u()(E,{VTextarea:d["a"]});var F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-textarea",{attrs:{clearable:"","clear-icon":e.icons.mdiCloseCircleOutline,label:"Text",value:"This is clearable text.","hide-details":""}})},G=[],k=a("94ed"),N={setup:function(){return{icons:{mdiCloseCircleOutline:k["ic"]}}}},q=N,A=Object(i["a"])(q,F,G,!1,null,null,null),M=A.exports;u()(A,{VTextarea:d["a"]});var U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-textarea",{attrs:{counter:"",label:"Text",value:e.value}})},L=[],W=a("a6f4"),J={setup:function(){var e=Object(W["F"])("Hello!");return{value:e}}},K=J,P=Object(i["a"])(K,U,L,!1,null,null,null),Y=P.exports;u()(P,{VTextarea:d["a"]});var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-textarea",{attrs:{label:"prepend-icon",rows:"1","prepend-icon":e.icons.mdiCommentOutline}}),a("v-textarea",{attrs:{"append-icon":e.icons.mdiCommentOutline,label:"append-icon",rows:"1"}}),a("v-textarea",{staticClass:"mx-2",attrs:{"prepend-inner-icon":e.icons.mdiCommentOutline,label:"prepend-inner-icon",rows:"1"}}),a("v-textarea",{staticClass:"mx-2",attrs:{"append-outer-icon":e.icons.mdiCommentOutline,label:"append-outer-icon",rows:"1"}})],1)},X=[],Z={setup:function(){return{icons:{mdiCommentOutline:k["tc"]}}}},ee=Z,te=Object(i["a"])(ee,Q,X,!1,null,null,null),ae=te.exports;u()(te,{VTextarea:d["a"]});var ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-textarea",{attrs:{label:"One row","auto-grow":"",outlined:"",rows:"1","row-height":"15"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-textarea",{attrs:{outlined:"","auto-grow":"",label:"Two rows",rows:"2","row-height":"20"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-textarea",{attrs:{label:"Three rows","auto-grow":"",outlined:"",rows:"3","row-height":"25"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-textarea",{attrs:{outlined:"","auto-grow":"",label:"Four rows",rows:"4","row-height":"30","hide-details":""}})],1)],1)},re=[],oe={},le=Object(i["a"])(oe,ne,re,!1,null,null,null),se=le.exports;u()(le,{VCol:T["a"],VRow:O["a"],VTextarea:d["a"]});var ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-textarea",{attrs:{label:"Text","no-resize":"",rows:"2",value:e.value,"hide-details":""}})},ce=[],ue={setup:function(){var e="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      ";return{value:e}}},de=ue,ve=Object(i["a"])(de,ie,ce,!1,null,null,null),pe=ve.exports;u()(ve,{VTextarea:d["a"]});var xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-textarea",{attrs:{label:"Validation",rules:e.rules,value:e.value,rows:"2"}})},me=[],he={setup:function(){var e=[function(e){return e.length<=25||"Max 25 characters"}],t=Object(W["F"])("Hello!");return{rules:e,value:t}}},we=he,be=Object(i["a"])(we,xe,me,!1,null,null,null),fe=be.exports;u()(be,{VTextarea:d["a"]});var _e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-textarea",{attrs:{label:"Validation",rules:e.rules,value:e.value,rows:"2","validate-on-blur":""}})},ge=[],Te={setup:function(){var e=[function(e){return e.length<=25||"Max 25 characters"}],t=Object(W["F"])("Hello!");return{rules:e,value:t}}},Oe=Te,Ce=Object(i["a"])(Oe,_e,ge,!1,null,null,null),Ve=Ce.exports;u()(Ce,{VTextarea:d["a"]});var Se='\n<template>\n  <v-row>\n    <v-col\n      cols="12"\n      sm="6"\n    >\n      <v-textarea\n        label="Default"\n        rows="2"\n      ></v-textarea>\n\n      <v-textarea\n        label="Outlined"\n        rows="2"\n        outlined\n      ></v-textarea>\n\n      <v-textarea\n        label="Shaped"\n        rows="2"\n        outlined\n        shaped\n      ></v-textarea>\n\n      <v-textarea\n        label="Solo"\n        rows="2"\n        solo\n        hide-details\n      ></v-textarea>\n    </v-col>\n\n    <v-col\n      cols="12"\n      sm="6"\n    >\n      <v-textarea\n        label="Filled"\n        rows="2"\n        filled\n      ></v-textarea>\n\n      <v-textarea\n        label="Solo Inverted"\n        rows="2"\n        solo-inverted\n      ></v-textarea>\n\n      <v-textarea\n        label="Flat"\n        rows="2"\n        solo-inverted\n        flat\n      ></v-textarea>\n\n      <v-textarea\n        label="Solo Inverted"\n        rows="1"\n        filled\n        rounded\n        hide-details\n      ></v-textarea>\n    </v-col>\n  </v-row>\n</template>\n',ye='\n<template>\n  <v-textarea\n    clearable\n    :clear-icon="icons.mdiCloseCircleOutline"\n    label="Text"\n    value="This is clearable text."\n    hide-details\n  ></v-textarea>\n</template>\n\n<script>\nimport { mdiCloseCircleOutline } from \'@mdi/js\'\n\nexport default {\n  setup() {\n    return {\n      icons: {\n        mdiCloseCircleOutline,\n      },\n    }\n  },\n}\n<\/script>\n',He='\n<template>\n  <v-textarea\n    label="Default"\n    hide-details\n  ></v-textarea>\n</template>\n',je='\n<template>\n  <v-textarea\n    label="Label"\n    auto-grow\n    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."\n    hide-details\n  ></v-textarea>\n</template>\n',ze='\n<template>\n  <div>\n    <v-textarea\n      disabled\n      label="Disabled"\n      hint="Hint text"\n      rows="2"\n    ></v-textarea>\n\n    <v-textarea\n      readonly\n      rows="2"\n      label="Readonly"\n      hint="Hint text"\n    ></v-textarea>\n  </div>\n</template>\n',De='\n<template>\n  <v-textarea\n    label="Validation"\n    :rules="rules"\n    :value="value"\n    rows="2"\n    validate-on-blur\n  ></v-textarea>\n</template>\n\n<script>\nimport { ref } from \'@vue/composition-api\'\n\nexport default {\n  setup() {\n    const rules = [v => v.length <= 25 || \'Max 25 characters\']\n    const value = ref(\'Hello!\')\n\n    return { rules, value }\n  },\n}\n<\/script>\n',Ie='\n<template>\n  <v-row>\n    <v-col\n      cols="12"\n      sm="6"\n    >\n      <v-textarea\n        label="One row"\n        auto-grow\n        outlined\n        rows="1"\n        row-height="15"\n      ></v-textarea>\n    </v-col>\n    <v-col\n      cols="12"\n      sm="6"\n    >\n      <v-textarea\n        outlined\n        auto-grow\n        label="Two rows"\n        rows="2"\n        row-height="20"\n      ></v-textarea>\n    </v-col>\n    <v-col\n      cols="12"\n      sm="6"\n    >\n      <v-textarea\n        label="Three rows"\n        auto-grow\n        outlined\n        rows="3"\n        row-height="25"\n      ></v-textarea>\n    </v-col>\n    <v-col\n      cols="12"\n      sm="6"\n    >\n      <v-textarea\n        outlined\n        auto-grow\n        label="Four rows"\n        rows="4"\n        row-height="30"\n        hide-details\n      ></v-textarea>\n    </v-col>\n  </v-row>\n</template>\n',$e='\n<template>\n  <div>\n    <v-textarea\n      label="prepend-icon"\n      rows="1"\n      :prepend-icon="icons.mdiCommentOutline"\n    ></v-textarea>\n\n    <v-textarea\n      :append-icon="icons.mdiCommentOutline"\n      label="append-icon"\n      rows="1"\n    ></v-textarea>\n\n    <v-textarea\n      :prepend-inner-icon="icons.mdiCommentOutline"\n      class="mx-2"\n      label="prepend-inner-icon"\n      rows="1"\n    ></v-textarea>\n\n    <v-textarea\n      :append-outer-icon="icons.mdiCommentOutline"\n      class="mx-2"\n      label="append-outer-icon"\n      rows="1"\n    ></v-textarea>\n  </div>\n</template>\n\n<script>\nimport { mdiCommentOutline } from \'@mdi/js\'\n\nexport default {\n  setup() {\n    return {\n      icons: {\n        mdiCommentOutline,\n      },\n    }\n  },\n}\n<\/script>\n',Re='\n<template>\n  <v-textarea\n    label="Validation"\n    :rules="rules"\n    :value="value"\n    rows="2"\n  ></v-textarea>\n</template>\n\n<script>\nimport { ref } from \'@vue/composition-api\'\n\nexport default {\n  setup() {\n    const rules = [v => v.length <= 25 || \'Max 25 characters\']\n    const value = ref(\'Hello!\')\n\n    return { rules, value }\n  },\n}\n<\/script>\n',Ee='\n<template>\n  <v-textarea\n    label="Text"\n    no-resize\n    rows="2"\n    :value="value"\n    hide-details\n  ></v-textarea>\n</template>\n\n<script>\nexport default {\n  setup() {\n    const value = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      `\n\n    return { value }\n  },\n}\n<\/script>\n',Be='\n<template>\n  <v-textarea\n    autocomplete="email"\n    label="Email"\n  ></v-textarea>\n</template>\n',Fe="\n<template>\n  <v-textarea\n    counter\n    label=\"Text\"\n    :value=\"value\"\n  ></v-textarea>\n</template>\n\n<script>\nimport { ref } from '@vue/composition-api'\n\nexport default {\n  setup() {\n    const value = ref('Hello!')\n\n    return { value }\n  },\n}\n<\/script>\n",Ge={components:{AppCardCode:o["a"],DemoTextareaBasic:x,DemoTextareaAutoGrow:f,DemoTextareaVariant:S,DemoTextareaStates:D,DemoTextareaBrowserAutocomplete:B,DemoTextareaClearable:M,DemoTextareaCounter:Y,DemoTextareaIcons:ae,DemoTextareaRows:se,DemoTextareaNoResize:pe,DemoTextareaValidation:fe,DemoTextareaValidationOnBlur:Ve},setup:function(){return{codeSnippets:{textareaBasic:He,textareaAutoGrow:je,textareaVariant:Se,textareaStates:ze,textareaBrowserAutocomplete:Be,textareaClearable:ye,textareaCounter:Fe,textareaIcons:$e,textareaRows:Ie,textareaNoResize:Ee,textareaValidation:Re,textareaValidationOnBlur:De}}}},ke=Ge,Ne=a("99d9"),qe=Object(i["a"])(ke,n,r,!1,null,null,null);t["default"]=qe.exports;u()(qe,{VCardText:Ne["c"],VCol:T["a"],VRow:O["a"]})}}]);
//# sourceMappingURL=chunk-09c095d0.c882709d.js.map