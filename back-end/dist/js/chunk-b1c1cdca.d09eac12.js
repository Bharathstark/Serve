(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1c1cdca"],{"18e3":function(t,e,a){"use strict";var i=a("37e5"),n=a.n(i);n.a},"37e5":function(t,e,a){},5170:function(t,e,a){},8547:function(t,e,a){"use strict";var i=a("2b0e"),n=a("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["i"]}}})},"9d01":function(t,e,a){},b73d:function(t,e,a){"use strict";a("0481"),a("4069");var i=a("5530"),n=(a("ec29"),a("9d01"),a("4de4"),a("45fc"),a("d3b7"),a("25f0"),a("c37a")),s=a("5607"),o=a("2b0e"),l=o["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),r=a("8547"),c=a("58df");function d(t){t.preventDefault()}var u=Object(c["a"])(n["a"],l,r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:d},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var i=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===i&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),h=a("c3f0"),v=a("0789"),p=a("490a"),f=a("80d2");e["a"]=u.extend({name:"v-switch",directives:{Touch:h["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(v["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(p["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===f["t"].left&&this.isActive||t.keyCode===f["t"].right&&!this.isActive)&&this.onChange()}}})},c7bd:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("v-toolbar",{attrs:{flat:""}},[i("v-app-bar-nav-icon",{on:{click:function(e){t.toggle=!t.toggle}}}),i("AppBar",{model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}}),i("v-img",{staticClass:"shrink",attrs:{src:a("3c81"),contain:"",height:"50px"}}),i("v-toolbar-title",[t._v(" DashBoard ")]),i("v-spacer"),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.changePassword}},[t._v(" Change Password ")]),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.logout}},[t._v(" logout ")])],1),i("v-container",{attrs:{id:"dashboard",fluid:"",tag:"section"}},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("MaterialStatsCard",{attrs:{color:"info",icon:"mdi-twitter",title:"Server Status",value:"OK","sub-icon":"mdi-clock","sub-text":"Just Updated"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("MaterialStatsCard",{attrs:{color:"info",icon:"mdi-twitter",title:"DB status",value:"OK","sub-icon":"mdi-clock","sub-text":"Just Updated"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("MaterialStatsCard",{attrs:{color:"info",icon:"mdi-calendar-range-outline",title:"Events",value:t.healthData.events,"sub-icon":"mdi-clock","sub-text":"Events data"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("MaterialStatsCard",{attrs:{color:"success",icon:"mdi-trophy",title:"Achievements",value:t.healthData.achievements,"sub-icon":"mdi-trophy","sub-text":"Just Updated"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("MaterialStatsCard",{attrs:{color:"orange",icon:"mdi-bell",title:"Notifications",value:t.healthData.notification,"sub-icon":"mdi-bell","sub-icon-color":"red","sub-text":"Get More Space..."}})],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("MaterialStatsCard",{attrs:{color:"orange",icon:"mdi-youtube",title:"Videos",value:t.healthData.videos,"sub-icon":"mdi-youtube","sub-icon-color":"red","sub-text":"Youtube Videos"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("MaterialStatsCard",{attrs:{color:"orange",icon:"mdi-account-group-outline",title:"Students",value:t.healthData.academics,"sub-icon":"mdi-account-group-outline","sub-icon-color":"blue","sub-text":"Academic result Entries"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",lg:"3"}},[i("MaterialStatsCard",{attrs:{color:"primary",icon:"mdi-calendar",title:"Website Visits",value:t.healthData.calendar,"sub-icon":"mdi-calendar","sub-text":"Tracked from Google Analytics"}})],1)],1),i("v-row",{attrs:{fluid:""}},[i("v-col",{attrs:{cols:"12",md:"6",sm:"6"}},[i("MaterialCard",{staticClass:"px-5 py-3 ma-10",scopedSlots:t._u([{key:"heading",fn:function(){return[i("div",{staticClass:"display-2 font-weight-light"},[t._v(" Notifications ")]),i("div",{staticClass:"subtitle-1 font-weight-light"},[t._v(" Notifications to be displayed ")])]},proxy:!0},{key:"actions",fn:function(){return[i("v-btn",{attrs:{fab:"",absolute:"",bottom:"",right:""},on:{click:function(e){t.notidialog=!0,t.button="Save",t.clearForm()}}},[i("v-icon",[t._v("mdi-plus")])],1)]},proxy:!0}])},[i("v-list",{staticClass:"overflow-y-auto",attrs:{height:"300"}},t._l(t.notiData.notification,(function(e){return i("v-list-item",{key:e.id},[i("v-list-item-content",{staticClass:"wrap-text"},[t._v(" "+t._s(e.name)+" ")]),i("v-list-item-icon",{on:{click:function(a){return t.editForm(e)}}},[i("v-icon",[t._v("mdi-pencil")])],1),i("v-list-item-icon",{on:{click:function(a){return t.deleteEntity(e)}}},[i("v-icon",[t._v("mdi-delete")])],1)],1)})),1)],1)],1),i("v-col",{attrs:{cols:"6"}},[i("MaterialCard",{staticClass:"px-5 py-3 ma-10",scopedSlots:t._u([{key:"heading",fn:function(){return[i("div",{staticClass:"display-2 font-weight-light"},[t._v(" Banner ")]),i("div",{staticClass:"subtitle-1 font-weight-light"},[t._v(" Banner to be displayed ")])]},proxy:!0}])},[i("v-card",{attrs:{flat:""}},[i("v-form",{ref:"bannerForm"},[i("v-text-field",{attrs:{outlined:"",label:"Banner"},model:{value:t.bannername,callback:function(e){t.bannername=e},expression:"bannername"}}),i("v-text-field",{attrs:{outlined:"",label:"Link"},model:{value:t.bannerlink,callback:function(e){t.bannerlink=e},expression:"bannerlink"}}),i("v-switch",{attrs:{value:"active",label:"banner"},model:{value:t.banneractive,callback:function(e){t.banneractive=e},expression:"banneractive"}}),i("v-btn",{staticClass:"align-end",attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.editBanner(t.bannerid,t.bannername,t.bannerlink,t.banneractive)}}},[t._v(" Save ")])],1)],1)],1)],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.notidialog,callback:function(e){t.notidialog=e},expression:"notidialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.bindinfo.module)+" ")])]),i("v-form",{ref:"notiform",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-card-text",[i("v-text-field",{attrs:{label:"Notification",outlined:"",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),i("v-text-field",{attrs:{label:"Link",outlined:"",required:""},model:{value:t.link,callback:function(e){t.link=e},expression:"link"}}),i("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-text-field",t._g(t._b({attrs:{outlined:"",label:"Created Date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",n,!1),a))]}}]),model:{value:t.datemenu,callback:function(e){t.datemenu=e},expression:"datemenu"}},[i("v-date-picker",{on:{input:function(e){t.datemenu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){"Save"==t.button?t.saveEntity():t.updateEntity()}}},[t._v(" "+t._s(t.button)+" ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.notidialog=!1}}},[t._v(" Close ")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.chanPass,callback:function(e){t.chanPass=e},expression:"chanPass"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("changePassword")])]),i("v-form",{ref:"passWord",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-card-text",[i("v-text-field",{attrs:{label:"Old Password",type:"password",rules:[function(t){return!!t||"Item is required"}],outlined:"",required:""},model:{value:t.oldPassword,callback:function(e){t.oldPassword=e},expression:"oldPassword"}}),i("v-text-field",{attrs:{label:"New Password",outlined:"",required:"",type:"password",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.newPassword,callback:function(e){t.newPassword=e},expression:"newPassword"}}),i("v-text-field",{attrs:{label:"Confirm Password",outlined:"",required:"",value:t.newPassword}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.loading},on:{click:t.savePassword}},[t._v(" Update ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.chanPass=!1,t.$refs.passWord.reset()}}},[t._v(" Close ")])],1)],1)],1),i("confirmDialog",{ref:"confirm"})],1)},n=[],s=(a("a4d3"),a("e01a"),a("b0c0"),a("d3b7"),a("3ca3"),a("9911"),a("ddb0"),a("2b3d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",t._b({staticClass:"v-card--material pa-3",class:t.classes},"v-card",t.$attrs,!1),[a("div",{staticClass:"d-flex grow flex-wrap"},[t.avatar?a("v-avatar",{staticClass:"mx-auto v-card--material__avatar elevation-6",attrs:{size:"128",color:"grey"}},[a("v-img",{attrs:{src:t.avatar}})],1):a("v-sheet",{staticClass:"text-start v-card--material__heading mb-n6",class:{"pa-7":!t.$slots.image},attrs:{color:t.color,"max-height":t.icon?90:void 0,width:t.icon?"auto":"100%",elevation:"6",dark:""}},[t.$slots.heading?t._t("heading"):t.$slots.image?t._t("image"):t.title&&!t.icon?a("div",{staticClass:"display-1 font-weight-light",domProps:{textContent:t._s(t.title)}}):t.icon?a("v-icon",{attrs:{size:"32"},domProps:{textContent:t._s(t.icon)}}):t._e(),t.text?a("div",{staticClass:"headline font-weight-thin",domProps:{textContent:t._s(t.text)}}):t._e()],2),t.$slots["after-heading"]?a("div",{staticClass:"ml-6"},[t._t("after-heading")],2):t.icon&&t.title?a("div",{staticClass:"ml-4"},[a("div",{staticClass:"card-title font-weight-light",domProps:{textContent:t._s(t.title)}})]):t._e()],1),t._t("default"),t.$slots.actions?[a("v-divider",{staticClass:"mt-2"}),a("v-card-actions",{staticClass:"pb-0"},[t._t("actions")],2)]:t._e()],2)}),o=[],l={name:"MaterialCard",props:{avatar:{type:String,default:""},color:{type:String,default:"success"},icon:{type:String,default:void 0},image:{type:Boolean,default:!1},text:{type:String,default:""},title:{type:String,default:""}},computed:{classes:function(){return{"v-card--material--has-heading":this.hasHeading}},hasHeading:function(){return Boolean(this.$slots.heading||this.title||this.icon)},hasAltHeading:function(){return Boolean(this.$slots.heading||this.title&&this.icon)}}},r=l,c=(a("d868"),a("2877")),d=a("6544"),u=a.n(d),h=a("8212"),v=a("b0af"),p=a("99d9"),f=a("ce7e"),m=a("132d"),g=a("adda"),b=a("8dd9"),C=Object(c["a"])(r,s,o,!1,null,null,null),w=C.exports;u()(C,{VAvatar:h["a"],VCard:v["a"],VCardActions:p["a"],VDivider:f["a"],VIcon:m["a"],VImg:g["a"],VSheet:b["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("MaterialCard",t._g(t._b({staticClass:"v-card--material-stats mt-5",attrs:{icon:t.icon},scopedSlots:t._u([{key:"after-heading",fn:function(){return[a("div",{staticClass:"ml-auto text-right"},[a("div",{staticClass:"body-3 grey--text font-weight",domProps:{textContent:t._s(t.title)}}),a("h3",{staticClass:"display-2 font-weight-light text--primary"},[t._v(" "+t._s(t.value)+" "),a("small",[t._v(t._s(t.smallValue))])])])]},proxy:!0}])},"MaterialCard",t.$attrs,!1),t.$listeners),[a("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[a("v-divider")],1),a("v-icon",{staticClass:"ml-2 mr-1",attrs:{color:t.subIconColor,size:"16"}},[t._v(" "+t._s(t.subIcon)+" ")]),a("span",{staticClass:"caption grey--text font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)},y=[],k={name:"MaterialStatsCard",components:{MaterialCard:w},inheritAttrs:!1,props:{icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}}},_=k,S=(a("18e3"),a("62ad")),V=Object(c["a"])(_,x,y,!1,null,null,null),D=V.exports;u()(V,{VCol:S["a"],VDivider:f["a"],VIcon:m["a"]});var P=a("dd38"),$={name:"DashBoard",components:{MaterialCard:w,MaterialStatsCard:D,AppBar:P["a"],confirmDialog:function(){return a.e("chunk-2d0e6171").then(a.bind(null,"96ec"))}},data:function(){return{toggle:!1,notidialog:!1,oldPassword:"",newPassword:"",valid:!1,datemenu:!1,loading:!1,notiURL:"/api/v1/notifications?module=notification",bannerURL:"/api/v1/notifications?module=banner ",apiURL:"/api/v1/notifications",changeUrl:"/api/v1/change",healthAPI:"/api/v1/health",logoutUrl:"/api/auth/logout",healthData:{},notiData:{notification:[],banner:{}},bannername:"",bannerlink:"",banneractive:"",chanPass:!1,bannerid:"",button:"",name:"",link:"",date:"",banner:""}},props:{bindinfo:Object},watch:{"notiData.banner":function(t){this.bannername=t.name,this.bannerlink=t.url,this.banneractive=t.description,this.bannerid=t.id}},created:function(){this.fetchNotiData("notification",this.notiURL),this.fetchNotiData("banner",this.bannerURL),this.fetchHelathData()},methods:{logout:function(){var t=this;this.axios.get(this.logoutUrl).then((function(e){200==e.data.response_status.response_code&&(t.$cookies.remove("csrf_token"),t.$router.push("/login"))})).catch((function(t){console.log(t)}))},fetchHelathData:function(){var t=this;this.axios.get(this.healthAPI).then((function(e){t.healthData=e.data["data"]})).catch((function(t){console.log(t)}))},saveEntity:function(){var t=this;this.$refs.confirm.open("Save","Are you sure?",{color:"green"}).then((function(e){e&&t.axios.post(t.notiURL,{name:t.name,url:t.link,date:new Date(t.date).getTime()}).then((function(e){200==e.data.response_status.response_code&&(t.$refs.notiform.reset(),t.notidialog=!1,t.fetchNotiData("notification",t.notiURL),t.fetchHelathData())}))}))},changePassword:function(){this.chanPass=!0},fetchNotiData:function(t,e){var a=this;this.axios.get(e).then((function(e){a.notiData[t]="banner"==t?e.data["data"][0]:e.data["data"]})).catch((function(t){console.log(t)}))},updateEntity:function(){var t=this;this.$refs.confirm.open("Update","Are you sure?",{color:"blue"}).then((function(e){e&&t.axios.put(t.apiURL+"/"+t.id,{name:t.name,url:t.link,date:new Date(t.date).getTime(),description:t.description}).then((function(e){200==e.data.response_status.response_code&&(t.clearForm(),t.notidialog=!1,t.fetchNotiData("notification",t.notiURL),t.fetchNotiData("banner",t.bannerURL))}))}))},deleteEntity:function(t){var e=this;this.$refs.confirm.open("Delete","Are you sure?",{color:"red"}).then((function(a){a&&e.axios.delete(e.apiURL+"/"+t.id).then((function(t){e.id=null,200==t.data.response_status.response_code&&(e.fetchNotiData("notification",e.notiURL),e.fetchHelathData())}))}))},clearForm:function(){this.name="",this.description="",this.link="",this.date="",this.colorpick=""},savePassword:function(){var t=this;this.loading=!0;var e=new URLSearchParams;e.append("username",this.$cookies.get("username")),e.append("oldpassword",this.oldPassword),e.append("newpassword",this.newPassword),this.axios.post(this.changeUrl,e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){200==e.data.response_status.response_code?(t.loading=!1,t.$parent.$refs.showed.open("Password Change Successfull - kindly Relogin","blue",-1,!0)):(t.loading=!1,t.$parent.$refs.showed.open("Password Change Failed - User Name Password Error","red",2e3,!1))}))},editForm:function(t){this.id=t.id,this.name=t.name,this.link=t.url,this.date=new Date(t.date).toISOString().substring(0,10),this.button="Update",this.notidialog=!0},editBanner:function(t,e,a,i){this.id=t,this.name=e,this.link=a,this.description="active"==i?"active":"inactive",this.date=0,this.updateEntity()}}},A=$,I=a("5bc1"),L=a("8336"),U=a("a523"),B=a("2e4b"),M=a("169a"),E=a("4bd4"),R=a("8860"),O=a("da13"),T=a("5d23"),F=a("34c3"),N=a("f6c4"),j=a("e449"),q=a("0fd9"),z=a("2fa4"),H=a("b73d"),J=a("8654"),K=a("71d9"),W=a("2a7f"),G=Object(c["a"])(A,i,n,!1,null,null,null);e["default"]=G.exports;u()(G,{VAppBarNavIcon:I["a"],VBtn:L["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:S["a"],VContainer:U["a"],VDatePicker:B["a"],VDialog:M["a"],VForm:E["a"],VIcon:m["a"],VImg:g["a"],VList:R["a"],VListItem:O["a"],VListItemContent:T["a"],VListItemIcon:F["a"],VMain:N["a"],VMenu:j["a"],VRow:q["a"],VSpacer:z["a"],VSwitch:H["a"],VTextField:J["a"],VToolbar:K["a"],VToolbarTitle:W["b"]})},d868:function(t,e,a){"use strict";var i=a("5170"),n=a.n(i);n.a},ec29:function(t,e,a){}}]);
//# sourceMappingURL=chunk-b1c1cdca.d09eac12.js.map