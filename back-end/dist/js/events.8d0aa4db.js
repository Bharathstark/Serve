(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["events"],{4135:function(t,e,a){},aa9c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[n("v-card",{attrs:{flat:""}},[n("v-toolbar",{attrs:{flat:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.toggle=!t.toggle}}}),n("AppBar",{model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}}),n("v-img",{staticClass:"shrink",attrs:{src:a("3c81"),contain:"",height:"50px"}}),n("v-toolbar-title",[t._v(" "+t._s(t.moduleName)+" ")]),n("v-spacer"),n("v-spacer"),n("v-btn",{attrs:{icon:"",light:""}},[n("v-icon",{attrs:{color:"grey darken-2"}},[t._v(" mdi-magnify ")])],1)],1),n("v-container",[n("v-row",{attrs:{fluid:""}},t._l(t.eventData,(function(e){return n("v-col",{key:e.id,attrs:{cols:"6",md:"3",sm:"4",xs:"6"}},[n("v-card",{attrs:{to:t.module+"?id="+e.id,height:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?180:300,width:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?150:300}},[n("v-img",{staticClass:"event",attrs:{height:"75%",src:e.thumbnail}}),n("v-card-title",{staticClass:"text-lg-h6 text-subtitle-2"},[t._v(" "+t._s(e.name)+" ")])],1)],1)})),1)],1)],1)],1)},r=[],i=(a("b0c0"),a("96cf"),a("1da1")),s=a("dd38"),o={name:"Events",data:function(){return{eventData:null,apiURL:null,toggle:!1,moduleName:""}},components:{AppBar:s["a"]},props:{module:String},methods:{setModule:function(){this.moduleName=this.$route.name},loging:function(){},fetchData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.axios.get("/api/v1/events?module="+t.moduleName.toLowerCase()).then((function(e){t.eventData=e.data["data"]})).catch((function(t){console.log(t)}));case 1:case"end":return e.stop()}}),e)})))()}},created:function(){this.loging(),this.setModule(),this.fetchData()}},l=o,c=(a("f12a"),a("2877")),u=a("6544"),d=a.n(u),v=a("5bc1"),f=a("8336"),p=a("b0af"),m=a("99d9"),h=a("62ad"),g=a("a523"),b=a("132d"),V=a("adda"),y=a("f6c4"),_=a("0fd9"),w=a("2fa4"),k=a("71d9"),x=a("2a7f"),C=Object(c["a"])(l,n,r,!1,null,null,null);e["default"]=C.exports;d()(C,{VAppBarNavIcon:v["a"],VBtn:f["a"],VCard:p["a"],VCardTitle:m["c"],VCol:h["a"],VContainer:g["a"],VIcon:b["a"],VImg:V["a"],VMain:y["a"],VRow:_["a"],VSpacer:w["a"],VToolbar:k["a"],VToolbarTitle:x["b"]})},dd38:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",t._g(t._b({attrs:{top:""}},"v-menu",t.$attrs,!1),t.$listeners),[a("v-list",t._l(t.AppBarItems,(function(e,n){return a("v-list-item",{key:n},[a("v-btn",{attrs:{text:"",to:e.href}},[t._v(t._s(e.display))])],1)})),1)],1)},r=[],i={name:"AppBar",data:function(){return{drawer:!1,AppBarItems:[{display:"Home",href:"/"},{display:"Events",href:"/events"},{display:"Videos",href:"/videos"},{display:"Achievements",href:"/achievements"},{display:"Calendar",href:"/calendar"},{display:"Contact Us",href:"/contact"}]}}},s=i,o=a("2877"),l=a("6544"),c=a.n(l),u=a("8336"),d=a("8860"),v=a("da13"),f=a("e449"),p=Object(o["a"])(s,n,r,!1,null,null,null);e["a"]=p.exports;c()(p,{VBtn:u["a"],VList:d["a"],VListItem:v["a"],VMenu:f["a"]})},f12a:function(t,e,a){"use strict";var n=a("4135"),r=a.n(n);r.a}}]);
//# sourceMappingURL=events.8d0aa4db.js.map