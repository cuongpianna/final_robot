(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fecefc3"],{2357:function(e,t,s){"use strict";var a=s("a186"),r=s.n(a);r.a},"2e08":function(e,t,s){var a=s("9def"),r=s("9744"),n=s("be13");e.exports=function(e,t,s,i){var o=String(n(e)),l=o.length,u=void 0===s?" ":String(s),c=a(t);if(c<=l||""==u)return o;var m=c-l,d=r.call(u,Math.ceil(m/u.length));return d.length>m&&(d=d.slice(0,m)),i?d+o:o+d}},"3b2b":function(e,t,s){var a=s("7726"),r=s("5dbc"),n=s("86cc").f,i=s("9093").f,o=s("aae3"),l=s("0bfb"),u=a.RegExp,c=u,m=u.prototype,d=/a/g,g=/a/g,f=new u(d)!==d;if(s("9e1e")&&(!f||s("79e5")((function(){return g[s("2b4c")("match")]=!1,u(d)!=d||u(g)==g||"/a/i"!=u(d,"i")})))){u=function(e,t){var s=this instanceof u,a=o(e),n=void 0===t;return!s&&a&&e.constructor===u&&n?e:r(f?new c(a&&!n?e.source:e,t):c((a=e instanceof u)?e.source:e,a&&n?l.call(e):t),s?this:m,u)};for(var p=function(e){e in u||n(u,e,{configurable:!0,get:function(){return c[e]},set:function(t){c[e]=t}})},w=i(c),h=0;w.length>h;)p(w[h++]);m.constructor=u,u.prototype=m,s("2aba")(a,"RegExp",u)}s("7a56")("RegExp")},4917:function(e,t,s){"use strict";var a=s("cb7c"),r=s("9def"),n=s("0390"),i=s("5f1b");s("214f")("match",1,(function(e,t,s,o){return[function(s){var a=e(this),r=void 0==s?void 0:s[t];return void 0!==r?r.call(s,a):new RegExp(s)[t](String(a))},function(e){var t=o(s,e,this);if(t.done)return t.value;var l=a(e),u=String(this);if(!l.global)return i(l,u);var c=l.unicode;l.lastIndex=0;var m,d=[],g=0;while(null!==(m=i(l,u))){var f=String(m[0]);d[g]=f,""===f&&(l.lastIndex=n(u,r(l.lastIndex),c)),g++}return 0===g?null:d}]}))},"53ca":function(e,t,s){"use strict";function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}s.d(t,"a",(function(){return a}))},7954:function(e,t,s){"use strict";s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return n}));s("34ef"),s("6762"),s("2fdb"),s("3b2b"),s("4917"),s("28a5"),s("f576"),s("a481"),s("6b54"),s("53ca"),s("c5f6"),s("7cdf");var a=s("5c96");function r(e,t,s,r){return e.includes(t)?(""!==s&&(window.location.href="/#/"+s),!0):(Object(a["Message"])({message:r,type:"error",duration:5e3}),!1)}function n(e,t){e=e.split(",")[1],e=window.atob(e);for(var s=new Uint8Array(e.length),a=0;a<e.length;a++)s[a]=e.charCodeAt(a);return new Blob([s],{type:t})}},9744:function(e,t,s){"use strict";var a=s("4588"),r=s("be13");e.exports=function(e){var t=String(r(this)),s="",n=a(e);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(s+=t);return s}},a186:function(e,t,s){},ce84:function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),Math.easeInOutQuad=function(e,t,s,a){return e/=a/2,e<1?s/2*e*e+t:(e--,-s/2*(e*(e-2)-1)+t)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function r(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function n(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(e,t,s){var i=n(),o=e-i,l=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=l;var n=Math.easeInOutQuad(u,i,o,t);r(n),u<t?a(e):s&&"function"===typeof s&&s()};c()}},e2b7:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar"}},[s("div",{staticClass:"page-title"},[s("div",{staticClass:"title-container"},[s("router-link",{staticClass:"back-link",attrs:{to:"/"}},[s("font-awesome-icon",{staticClass:"icon-back",attrs:{icon:"chevron-left",color:"#424242"}})],1),e._v(" "),s("router-link",{staticClass:"title-page",attrs:{to:"/dashboard",title:"DashBoard"}},[e._v("\n          "+e._s(e.generateTitleView("user_management","usermanagement"))+"\n        ")])],1),e._v(" "),s("div",{staticClass:"action-container"},[s("el-button",{staticClass:"btn-create-hotel",attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.redirectCreate}},[e._v("\n          "+e._s(e.generateTitleView("create","usermanagement"))+"\n        ")])],1)])]),e._v(" "),s("md-card",{staticClass:"filter"},[s("div",{staticClass:"filter-content"},[s("el-form",{ref:"form",staticClass:"user-form",attrs:{"label-position":"top","label-width":"150px"}},[s("el-form-item",{staticClass:"item-account",attrs:{label:e.generateTitleView("username","usermanagement"),prop:"name"}},[s("el-input",{model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}})],1),e._v(" "),s("el-form-item",{staticClass:"item-status",attrs:{label:e.generateTitleView("status","usermanagement"),prop:"status"}},[s("el-select",{model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.USER_STATUS,(function(t,a){return s("el-option",{key:a,attrs:{value:t.value,label:t.label}},[e._v(e._s(t.label)+"\n            ")])})),1)],1),e._v(" "),s("el-form-item",{staticClass:"item-status",attrs:{label:e.generateTitleView("usertype","usermanagement"),prop:"status"}},[s("el-select",{model:{value:e.listQuery.userType,callback:function(t){e.$set(e.listQuery,"userType",t)},expression:"listQuery.userType"}},e._l(e.USER_TYPE,(function(t,a){return s("el-option",{key:a,attrs:{value:t.value,label:t.label}},[e._v(e._s(t.label)+"\n            ")])})),1)],1)],1),e._v(" "),s("div",{staticClass:"item-action"},[s("el-button",{staticClass:"btn-reset",attrs:{plain:""},on:{click:e.resetFilter}},[e._v(e._s(e.generateTitleView("clear","usermanagement"))+"\n        ")]),e._v(" "),s("el-button",{staticClass:"btn-search",attrs:{type:"primary",plain:""},on:{click:e.getUsers}},[e._v("\n          "+e._s(e.generateTitleView("search","usermanagement"))+"\n        ")])],1)],1)]),e._v(" "),s("md-card",{staticClass:"table-users"},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],key:0,staticClass:"table-list",staticStyle:{width:"100%"},attrs:{fit:"",data:e.listUsers,"highlight-current-row":""}},[s("el-table-column",{attrs:{label:e.generateTitleView("stt","usermanagement"),prop:"id",align:"center",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){t.row;var a=t.$index;return[s("span",[e._v(e._s(a+1))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.generateTitleView("username","usermanagement"),width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("span",[e._v(e._s(a.userName))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.generateTitleView("fullname","usermanagement"),"min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("span",{staticClass:"link-type"},[e._v(e._s(a.name))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.generateTitleView("resetpassword","usermanagement"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("font-awesome-icon",{staticClass:"icon-reset",attrs:{icon:"sync",color:"#123D8B"},on:{click:function(t){return e.showResetPassword(a.id)}}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.generateTitleView("email","usermanagement"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("span",[e._v(e._s(a.email))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.generateTitleView("usertype","usermanagement"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("span",[e._v(e._s(1==a.userType?"System Admin":e.generateTitleView("doctor","usermanagement")))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.generateTitleView("status","usermanagement"),"class-name":"status-col",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("div",[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.generateTitleView("account_status","usermanagement"),placement:"top"}},[s("el-toggle-button",{attrs:{value:!0,color:"#123D8B",sync:!0},on:{change:function(t){return e.updateUserStatus(a.id,t)}},model:{value:a.isActive,callback:function(t){e.$set(a,"isActive",t)},expression:"row.isActive"}})],1)],1)]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.generateTitleView("role","usermanagement"),align:"center","min-width":"220"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return e._l(a.roleUser,(function(t,a){return s("el-tag",{key:a,staticClass:"role-bg"},[e._v("\n            "+e._s(t.name)+"\n          ")])}))}}])}),e._v(" "),s("el-table-column",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{label:"Actions",align:"center",width:"200","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.generateTitleView("update","usermanagement"),placement:"top"}},[s("el-button",{attrs:{type:"primary",size:"mini",rounded:""},on:{click:function(t){return e.editUser(a.id)}}},[s("i",{staticClass:"el-icon-edit"})])],1),e._v(" "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.generateTitleView("delete","usermanagement"),placement:"top"}},[s("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.deleteUser(a.id)}}},[s("i",{staticClass:"el-icon-delete"})])],1)]}}])})],1),e._v(" "),s("pagination",{directives:[{name:"show",rawName:"v-show",value:e.totalUsers>0,expression:"totalUsers>0"}],staticClass:"pagination-hotel",attrs:{total:e.totalUsers,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getUsers}})],1),e._v(" "),s("el-dialog",{staticClass:"user-diaglog",attrs:{width:"660px",visible:e.dialogForm,title:e.generateTitleView("labelResetPassword","usermanagement"),"close-on-click-modal":e.clickOutsideDialog},on:{"update:visible":function(t){e.dialogForm=t}}},[s("el-form",{ref:"form-resetpassword",staticClass:"resetpassword-form",attrs:{model:e.formReset,rules:e.rules}},[s("el-form-item",{staticClass:"item-name",attrs:{label:e.generateTitleView("password","usermanagement"),prop:"password"}},[s("el-input",{attrs:{disabled:!1,type:"password"},model:{value:e.formReset.password,callback:function(t){e.$set(e.formReset,"password",t)},expression:"formReset.password"}})],1),e._v(" "),s("el-form-item",{staticClass:"item-name",attrs:{label:e.generateTitleView("repassword","usermanagement"),prop:"repassword"}},[s("el-input",{attrs:{disabled:!1,type:"password"},model:{value:e.formReset.repassword,callback:function(t){e.$set(e.formReset,"repassword",t)},expression:"formReset.repassword"}})],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"info",plain:""},on:{click:e.handleClosePopup}},[e._v(e._s(e.generateTitleView("close","usermanagement")))]),e._v(" "),s("el-button",{attrs:{type:"success"},on:{click:e.handleResetPassword}},[e._v(e._s(e.generateTitleView("save","usermanagement")))])],1)],1)],1)},r=[],n=(s("7f7f"),s("5530")),i=s("333d"),o=s("b800"),l=s("b804"),u=s("7954"),c=s("beca"),m=s("6087"),d=s("2f62"),g=s("f264"),f=s("90ec"),p={model:"usermanagement/"},w={password:"",repassword:""},h={isActive:!0},v={name:"UserIndex",components:{Pagination:i["a"],ElToggleButton:o["a"],Sticky:l["a"]},data:function(){var e=this,t=function(t,s,a){""!==e.formReset.password&&(s!==e.formReset.password?a(new Error):a())};return{loading:!0,rules:{password:[{required:!0,message:this.generateTitleView("passwordRequired","usermanagement"),trigger:"blur"},{validator:c["a"],message:this.generateTitleView("passwordLength","usermanagement"),trigger:"blur"}],repassword:[{required:!0,message:this.generateTitleView("passwordRequired","usermanagement"),trigger:"blur"},{validator:t,message:this.generateTitleView("passwordConfirm","usermanagement"),trigger:"blur"}]},users:[],total:0,USER_STATUS:[{value:!0,label:this.generateTitleView("active","usermanagement")},{value:!1,label:this.generateTitleView("deactive","usermanagement")}],USER_TYPE:[{value:1,label:"System Admin"},{value:2,label:this.generateTitleView("doctor","usermanagement")}],USER_DELETE:[{value:!0,label:this.generateTitleView("deleted","usermanagement")},{value:!1,label:this.generateTitleView("working","usermanagement")}],listQuery:{page:1,limit:10,name:"",status:null,userType:null,isDelete:!1},dialogForm:!1,formReset:JSON.parse(JSON.stringify(w)),clickOutsideDialog:!1,user_id:"",currentUser:"",formUpdateStatus:JSON.parse(JSON.stringify(h)),roleList:[]}},computed:Object(n["a"])({},Object(d["c"])({language:"language",listUsers:p.model+"listUsers",totalUsers:p.model+"totalUsers"})),watch:{language:{immediate:!0,handler:function(e,t){this.USER_STATUS=[{value:!0,label:this.generateTitleView("active","module")},{value:!1,label:this.generateTitleView("deactive","module")}],this.USER_TYPE=[{value:1,label:"System Admin"},{value:2,label:this.generateTitleView("doctor","usermanagement")}],this.USER_DELETE=[{value:!0,label:this.generateTitleView("deleted","usermanagement")},{value:!1,label:this.generateTitleView("working","usermanagement")}],this.rules={password:[{required:!0,message:this.generateTitleView("passwordRequired","usermanagement"),trigger:"blur"},{validator:c["a"],message:this.generateTitleView("passwordLength","usermanagement"),trigger:"blur"}],repassword:[{required:!0,message:this.generateTitleView("passwordRequired","usermanagement"),trigger:"blur"}]}}}},mounted:function(){this.$store.commit("app/CHANGE_APP_TITLE","HỆ THỐNG GIÁM SÁT VÀ ĐIỀU KHIỂN ROBOT"),this.roleList=this.$store.state.auth.roles,this.getUsers(),this.currentUser=this.$store.state.auth.name},methods:{getUsers:function(){var e=this,t=this.$store.dispatch(p.model+f["e"],{current_page:this.listQuery.page,name:this.listQuery.name,is_active:this.listQuery.status,limit:this.listQuery.limit,user_type:this.listQuery.userType,is_delete:this.listQuery.isDelete}).then((function(t){e.loading=!1}));return t},resetForm:function(){this.resetForm.password="",this.resetForm.repassword=""},deleteUser:function(e){var t=this,s=this.hasPermissionAction(this.roleList,g["o"],"",this.generateTitleView("permissionMessage","message"));s&&this.$confirm(this.generateTitleView("textMessageDelete","message"),this.generateTitleView("titleMessageDelete","message"),{confirmButtonText:this.generateTitleView("textBtnOk","message"),cancelButtonText:this.generateTitleView("textBtnCancel","message"),type:"warning"}).then((function(){t.$store.dispatch(p.model+f["a"],{userID:e})}))},editUser:function(e){this.hasPermissionAction(this.roleList,g["p"],"users/edit/"+e,this.generateTitleView("permissionMessage","message"))},showResetPassword:function(e){var t=this.hasPermissionAction(this.roleList,g["p"],"",this.generateTitleView("permissionMessage","message"));t&&(this.user_id=e,this.dialogForm=!0)},handleClosePopup:function(){this.dialogForm=!1,this.formReset.password="",this.formReset.repassword=""},resetFilter:function(){this.listQuery.status=null,this.listQuery.name="",this.listQuery.userType=null,this.listQuery.isDelete=!1,this.getUsers()},handleResetPassword:function(){var e=this;this.$refs["form-resetpassword"].validate((function(t){if(t){e.formReset["id"]=e.user_id,e.formReset["modified"]=(new Date).toJSON(),e.formReset["modifiedBy"]=e.currentUser;var s=e.$store.dispatch(p.model+f["k"],e.formReset).then((function(t){e.handleClosePopup(),e.resetForm(),t.isSuccess?(e.formReset.password="",e.formReset.repassword="",e.$notify.success({title:e.generateTitleView("success","message"),message:e.generateTitleView("successMessage","message"),duration:2e3}),setTimeout((function(){window.location.href="/#/users/index"}),2e3)):(e.$notify.error({title:e.generateTitleView("error","message"),message:e.generateTitleView("errorMessage","message"),duration:2e3}),setTimeout((function(){window.location.href="/#/users/index"}),2e3))}));return s}}))},updateUserStatus:function(e,t){var s=this,a=this.hasPermissionAction(this.roleList,g["p"],"",this.generateTitleView("permissionMessage","message"));if(a){var r={isActive:t.value,id:e},n=this.$store.dispatch(p.model+f["l"],r).then((function(e){s.resetForm(),e.isSuccess?(s.$notify.success({title:s.generateTitleView("success","message"),message:s.generateTitleView("successMessage","message"),duration:2e3}),window.location.href="/#/users/index"):(s.$notify.error({title:s.generateTitleView("error","message"),message:s.generateTitleView("errorMessage","message"),duration:2e3}),window.location.href="/#/users/index")}));return n}},redirectCreate:function(){this.hasPermissionAction(this.roleList,g["n"],"users/create",this.generateTitleView("permissionMessage","message"))},generateTitleView:m["b"],hasPermissionAction:u["b"]}},b=v,y=(s("2357"),s("2877")),_=Object(y["a"])(b,a,r,!1,null,"7b4a4e53",null);t["default"]=_.exports},f264:function(e,t,s){"use strict";s.d(t,"n",(function(){return a})),s.d(t,"p",(function(){return r})),s.d(t,"o",(function(){return n})),s.d(t,"g",(function(){return i})),s.d(t,"i",(function(){return o})),s.d(t,"h",(function(){return l})),s.d(t,"k",(function(){return u})),s.d(t,"j",(function(){return c})),s.d(t,"a",(function(){return m})),s.d(t,"c",(function(){return d})),s.d(t,"b",(function(){return g})),s.d(t,"d",(function(){return f})),s.d(t,"f",(function(){return p})),s.d(t,"e",(function(){return w})),s.d(t,"m",(function(){return h})),s.d(t,"l",(function(){return v}));var a="UserManagement_Create",r="UserManagement_Edit",n="UserManagement_Delete",i="Doctor_Create",o="Doctor_Edit",l="Doctor_Delete",u="Robot_Edit",c="Robot_Delete",m="Area_Create",d="Area_Edit",g="Area_Delete",f="Camera_Create",p="Camera_Edit",w="Camera_Delete",h="RobotVersion_Edit",v="RobotVersion_Delete"},f576:function(e,t,s){"use strict";var a=s("5ca1"),r=s("2e08"),n=s("a25f"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);a(a.P+a.F*i,"String",{padStart:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0,!0)}})}}]);