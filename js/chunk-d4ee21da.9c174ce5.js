(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4ee21da"],{"1f4f":function(t,e,s){"use strict";var n=s("5530"),r=(s("a9e3"),s("8b37"),s("80d2")),a=s("7560"),c=s("58df");e["a"]=Object(c["a"])(a["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(n["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(r["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"49a9":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("app-card-code",{attrs:{title:"Basic",code:t.codeSnippets.simpleTableBasic}},[s("demo-simple-table-basic")],1)],1),s("v-col",{attrs:{cols:"12"}},[s("app-card-code",{attrs:{title:"Dark",code:t.codeSnippets.simpleTableDark}},[s("v-card-text",[t._v(" Use "),s("code",[t._v("dark")]),t._v(" prop to switch table to the dark theme. ")]),s("demo-simple-table-dark")],1)],1),s("v-col",{attrs:{cols:"12"}},[s("app-card-code",{attrs:{title:"Dense",code:t.codeSnippets.simpleTableDense}},[s("v-card-text",[t._v(" You can show a dense version of the table by using the "),s("code",[t._v("dense")]),t._v(" prop. ")]),s("demo-simple-table-dense")],1)],1),s("v-col",{attrs:{cols:"12"}},[s("app-card-code",{attrs:{title:"Height",code:t.codeSnippets.simpleTableHeight}},[s("v-card-text",[t._v(" Use the "),s("code",[t._v("height")]),t._v(" prop to set the height of the table. ")]),s("demo-simple-table-height")],1)],1),s("v-col",{attrs:{cols:"12"}},[s("app-card-code",{attrs:{title:"Fixed header",code:t.codeSnippets.simpleTableHeight}},[s("v-card-text",[t._v(" Use the "),s("code",[t._v("fixed-header")]),t._v(" prop together with the "),s("code",[t._v("height")]),t._v(" prop to fix the header to the top of the table. ")]),s("demo-simple-table-fixed-header")],1)],1)],1)},r=[],a=s("47d1"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-uppercase"},[t._v(" Dessert (100g serving) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Calories ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Fat (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Carbs (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Protein (g) ")])])]),s("tbody",t._l(t.desserts,(function(e){return s("tr",{key:e.dessert},[s("td",[t._v(t._s(e.dessert))]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.calories)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.fat)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.carbs)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.protein)+" ")])])})),0)]},proxy:!0}])})},i=[],l={setup:function(){var t=[{dessert:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{dessert:"Ice cream sandwich",calories:237,fat:6,carbs:24,protein:4},{dessert:"Eclair",calories:262,fat:6,carbs:24,protein:4},{dessert:"Cupcake",calories:305,fat:6,carbs:24,protein:4},{dessert:"Gingerbread",calories:356,fat:6,carbs:24,protein:4}];return{desserts:t}}},o=l,p=s("2877"),d=s("6544"),u=s.n(d),h=s("1f4f"),x=Object(p["a"])(o,c,i,!1,null,null,null),b=x.exports;u()(x,{VSimpleTable:h["a"]});var v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-simple-table",{attrs:{dark:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-uppercase text--primary"},[t._v(" Dessert (100g serving) ")]),s("th",{staticClass:"text-center text-uppercase text--primary"},[t._v(" Calories ")]),s("th",{staticClass:"text-center text-uppercase text--primary"},[t._v(" Fat (g) ")]),s("th",{staticClass:"text-center text-uppercase text--primary"},[t._v(" Carbs (g) ")]),s("th",{staticClass:"text-center text-uppercase text--primary"},[t._v(" Protein (g) ")])])]),s("tbody",t._l(t.desserts,(function(e){return s("tr",{key:e.dessert},[s("td",[t._v(t._s(e.dessert))]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.calories)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.fat)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.carbs)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.protein)+" ")])])})),0)]},proxy:!0}])})},f=[],m={setup:function(){var t=[{dessert:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{dessert:"Ice cream sandwich",calories:237,fat:6,carbs:24,protein:4},{dessert:"Eclair",calories:262,fat:6,carbs:24,protein:4},{dessert:"Cupcake",calories:305,fat:6,carbs:24,protein:4},{dessert:"Gingerbread",calories:356,fat:6,carbs:24,protein:4}];return{desserts:t}}},_=m,g=Object(p["a"])(_,v,f,!1,null,null,null),C=g.exports;u()(g,{VSimpleTable:h["a"]});var y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-uppercase"},[t._v(" Dessert (100g serving) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Calories ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Fat (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Carbs (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Protein (g) ")])])]),s("tbody",t._l(t.desserts,(function(e){return s("tr",{key:e.dessert},[s("td",[t._v(t._s(e.dessert))]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.calories)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.fat)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.carbs)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.protein)+" ")])])})),0)]},proxy:!0}])})},k=[],w={setup:function(){var t=[{dessert:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{dessert:"Ice cream sandwich",calories:237,fat:6,carbs:24,protein:4},{dessert:"Eclair",calories:262,fat:6,carbs:24,protein:4},{dessert:"Cupcake",calories:305,fat:6,carbs:24,protein:4},{dessert:"Gingerbread",calories:356,fat:6,carbs:24,protein:4}];return{desserts:t}}},D=w,S=Object(p["a"])(D,y,k,!1,null,null,null),F=S.exports;u()(S,{VSimpleTable:h["a"]});var T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-simple-table",{attrs:{height:"250"},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-uppercase"},[t._v(" Dessert (100g serving) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Calories ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Fat (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Carbs (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Protein (g) ")])])]),s("tbody",t._l(t.desserts,(function(e){return s("tr",{key:e.dessert},[s("td",[t._v(t._s(e.dessert))]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.calories)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.fat)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.carbs)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.protein)+" ")])])})),0)]},proxy:!0}])})},E=[],$={setup:function(){var t=[{dessert:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{dessert:"Ice cream sandwich",calories:237,fat:6,carbs:24,protein:4},{dessert:"Eclair",calories:262,fat:6,carbs:24,protein:4},{dessert:"Cupcake",calories:305,fat:6,carbs:24,protein:4},{dessert:"Gingerbread",calories:356,fat:6,carbs:24,protein:4}];return{desserts:t}}},Y=$,j=Object(p["a"])(Y,T,E,!1,null,null,null),z=j.exports;u()(j,{VSimpleTable:h["a"]});var G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-simple-table",{attrs:{height:"250","fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-uppercase"},[t._v(" Dessert (100g serving) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Calories ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Fat (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Carbs (g) ")]),s("th",{staticClass:"text-center text-uppercase"},[t._v(" Protein (g) ")])])]),s("tbody",t._l(t.desserts,(function(e){return s("tr",{key:e.dessert},[s("td",[t._v(t._s(e.dessert))]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.calories)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.fat)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.carbs)+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.protein)+" ")])])})),0)]},proxy:!0}])})},H=[],I={setup:function(){var t=[{dessert:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{dessert:"Ice cream sandwich",calories:237,fat:6,carbs:24,protein:4},{dessert:"Eclair",calories:262,fat:6,carbs:24,protein:4},{dessert:"Cupcake",calories:305,fat:6,carbs:24,protein:4},{dessert:"Gingerbread",calories:356,fat:6,carbs:24,protein:4}];return{desserts:t}}},O=I,P=Object(p["a"])(O,G,H,!1,null,null,null),V=P.exports;u()(P,{VSimpleTable:h["a"]});var B='\n<template>\n  <v-simple-table>\n    <template v-slot:default>\n      <thead>\n        <tr>\n          <th class="text-uppercase">\n            Dessert (100g serving)\n          </th>\n          <th class="text-center text-uppercase">\n            Calories\n          </th>\n          <th class="text-center text-uppercase">\n            Fat (g)\n          </th>\n          <th class="text-center text-uppercase">\n            Carbs (g)\n          </th>\n          <th class="text-center text-uppercase">\n            Protein (g)\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          v-for="item in desserts"\n          :key="item.dessert"\n        >\n          <td>{{ item.dessert }}</td>\n          <td class="text-center">\n            {{ item.calories }}\n          </td>\n          <td class="text-center">\n            {{ item.fat }}\n          </td>\n          <td class="text-center">\n            {{ item.carbs }}\n          </td>\n          <td class="text-center">\n            {{ item.protein }}\n          </td>\n        </tr>\n      </tbody>\n    </template>\n  </v-simple-table>\n</template>\n\n<script>\nexport default {\n  setup() {\n    const desserts = [\n      {\n        dessert: \'Frozen Yogurt\',\n        calories: 159,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Ice cream sandwich\',\n        calories: 237,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Eclair\',\n        calories: 262,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Cupcake\',\n        calories: 305,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Gingerbread\',\n        calories: 356,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n    ]\n\n    return {\n      desserts,\n    }\n  },\n}\n<\/script>\n',U='\n<template>\n  <v-simple-table height="250">\n    <template v-slot:default>\n      <thead>\n        <tr>\n          <th class="text-uppercase">\n            Dessert (100g serving)\n          </th>\n          <th class="text-center text-uppercase">\n            Calories\n          </th>\n          <th class="text-center text-uppercase">\n            Fat (g)\n          </th>\n          <th class="text-center text-uppercase">\n            Carbs (g)\n          </th>\n          <th class="text-center text-uppercase">\n            Protein (g)\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          v-for="item in desserts"\n          :key="item.dessert"\n        >\n          <td>{{ item.dessert }}</td>\n          <td class="text-center">\n            {{ item.calories }}\n          </td>\n          <td class="text-center">\n            {{ item.fat }}\n          </td>\n          <td class="text-center">\n            {{ item.carbs }}\n          </td>\n          <td class="text-center">\n            {{ item.protein }}\n          </td>\n        </tr>\n      </tbody>\n    </template>\n  </v-simple-table>\n</template>\n\n<script>\nexport default {\n  setup() {\n    const desserts = [\n      {\n        dessert: \'Frozen Yogurt\',\n        calories: 159,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Ice cream sandwich\',\n        calories: 237,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Eclair\',\n        calories: 262,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Cupcake\',\n        calories: 305,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Gingerbread\',\n        calories: 356,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n    ]\n\n    return {\n      desserts,\n    }\n  },\n}\n<\/script>\n',J='\n<template>\n  <v-simple-table dense>\n    <template v-slot:default>\n      <thead>\n        <tr>\n          <th class="text-uppercase">\n            Dessert (100g serving)\n          </th>\n          <th class="text-center text-uppercase">\n            Calories\n          </th>\n          <th class="text-center text-uppercase">\n            Fat (g)\n          </th>\n          <th class="text-center text-uppercase">\n            Carbs (g)\n          </th>\n          <th class="text-center text-uppercase">\n            Protein (g)\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          v-for="item in desserts"\n          :key="item.dessert"\n        >\n          <td>{{ item.dessert }}</td>\n          <td class="text-center">\n            {{ item.calories }}\n          </td>\n          <td class="text-center">\n            {{ item.fat }}\n          </td>\n          <td class="text-center">\n            {{ item.carbs }}\n          </td>\n          <td class="text-center">\n            {{ item.protein }}\n          </td>\n        </tr>\n      </tbody>\n    </template>\n  </v-simple-table>\n</template>\n\n<script>\nexport default {\n  setup() {\n    const desserts = [\n      {\n        dessert: \'Frozen Yogurt\',\n        calories: 159,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Ice cream sandwich\',\n        calories: 237,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Eclair\',\n        calories: 262,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Cupcake\',\n        calories: 305,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Gingerbread\',\n        calories: 356,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n    ]\n\n    return {\n      desserts,\n    }\n  },\n}\n<\/script>\n',W='\n<template>\n  <v-simple-table dark>\n    <template v-slot:default>\n      <thead>\n        <tr>\n          <th class="text-uppercase text--primary">\n            Dessert (100g serving)\n          </th>\n          <th class="text-center text-uppercase text--primary">\n            Calories\n          </th>\n          <th class="text-center text-uppercase text--primary">\n            Fat (g)\n          </th>\n          <th class="text-center text-uppercase text--primary">\n            Carbs (g)\n          </th>\n          <th class="text-center text-uppercase text--primary">\n            Protein (g)\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          v-for="item in desserts"\n          :key="item.dessert"\n        >\n          <td>{{ item.dessert }}</td>\n          <td class="text-center">\n            {{ item.calories }}\n          </td>\n          <td class="text-center">\n            {{ item.fat }}\n          </td>\n          <td class="text-center">\n            {{ item.carbs }}\n          </td>\n          <td class="text-center">\n            {{ item.protein }}\n          </td>\n        </tr>\n      </tbody>\n    </template>\n  </v-simple-table>\n</template>\n\n<script>\nexport default {\n  setup() {\n    const desserts = [\n      {\n        dessert: \'Frozen Yogurt\',\n        calories: 159,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Ice cream sandwich\',\n        calories: 237,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Eclair\',\n        calories: 262,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Cupcake\',\n        calories: 305,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n      {\n        dessert: \'Gingerbread\',\n        calories: 356,\n        fat: 6,\n        carbs: 24,\n        protein: 4,\n      },\n    ]\n\n    return {\n      desserts,\n    }\n  },\n}\n<\/script>\n',A={components:{AppCardCode:a["a"],DemoSimpleTableBasic:b,DemoSimpleTableDark:C,DemoSimpleTableDense:F,DemoSimpleTableHeight:z,DemoSimpleTableFixedHeader:V},setup:function(){return{codeSnippets:{simpleTableBasic:B,simpleTableDark:W,simpleTableDense:J,simpleTableHeight:U}}}},N=A,R=s("99d9"),q=s("62ad"),K=s("0fd9"),L=Object(p["a"])(N,n,r,!1,null,null,null);e["default"]=L.exports;u()(L,{VCardText:R["c"],VCol:q["a"],VRow:K["a"]})},"8b37":function(t,e,s){}}]);
//# sourceMappingURL=chunk-d4ee21da.9c174ce5.js.map