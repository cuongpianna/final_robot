(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eab1ef38"],{"1cf6":function(t,e,a){"use strict";var s=a("6a14"),o=a.n(s);o.a},"33f7":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",attrs:{"data-app":""}},[a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[a("form",{staticClass:"role-info__inners",on:{submit:function(e){return e.preventDefault(),s(t.handleSubmitUser)}}},[a("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar"}},[a("div",{staticClass:"page-title"},[a("div",{staticClass:"title-container"},[a("router-link",{staticClass:"back-link",attrs:{to:"/users/robot/robotAction"}},[a("font-awesome-icon",{staticClass:"icon-back",attrs:{icon:"chevron-left",color:"#424242"}})],1),t._v(" "),a("span",{staticClass:"title-page"},[t._v(t._s(t.formTitle))])],1),t._v(" "),a("div",{staticClass:"action-container"},[a("router-link",{attrs:{to:"/users/robot/robotAction"}},[a("el-button",{staticClass:"btn-back",attrs:{plain:""}},[t._v(t._s(t.generateTitleView("cancel","usermanagement"))+"\n              ")])],1),t._v(" "),a("button",{staticClass:"btn-save",attrs:{type:"submit",plain:""}},[t._v(t._s(t.generateTitleView("save","usermanagement"))+"\n            ")])],1)])]),t._v(" "),a("md-card",{staticClass:"role-info"},[a("div",{staticClass:"role-info__inner"},[a("div",{staticClass:"role-info__inners"},[a("div",{staticClass:"info-title"},[t._v("Thêm mới lệnh điều khiển")]),t._v(" "),a("div",{staticClass:"info-content"},[a("div",{staticClass:"form"},[a("el-row",{staticClass:"mb-10",attrs:{gutter:40}},[a("el-col",{attrs:{span:12}},[a("ValidationProvider",{attrs:{rules:"required",name:t.generateTitleView("Tên lệnh điều khiển","veeValidate")},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("v-text-field",{attrs:{label:"Tên lệnh điều khiển",outlined:"",height:"10"},model:{value:t.formCreate.actionName,callback:function(e){t.$set(t.formCreate,"actionName",e)},expression:"formCreate.actionName"}}),t._v(" "),a("span",{staticClass:"vee-errors"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)],1),t._v(" "),a("el-row",{staticClass:"mb-10",attrs:{gutter:40}},[a("el-col",{attrs:{span:12}},[a("ValidationProvider",{attrs:{rules:"required",name:t.generateTitleView("Mã lệnh điều khiển","veeValidate")},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("v-text-field",{attrs:{label:"Mã lệnh điều khiển",outlined:"",height:"10"},model:{value:t.formCreate.code,callback:function(e){t.$set(t.formCreate,"code",e)},expression:"formCreate.code"}}),t._v(" "),a("span",{staticClass:"vee-errors"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)],1),t._v(" "),a("el-row",{staticClass:"mb-10",attrs:{gutter:40}},[a("el-col",{attrs:{span:12}},[a("v-text-field",{attrs:{label:"Thứ tự",outlined:"",height:"10",type:"number",min:"0"},model:{value:t.formCreate.orderIndex,callback:function(e){t.$set(t.formCreate,"orderIndex",e)},expression:"formCreate.orderIndex"}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{span:12}},[a("v-checkbox",{staticClass:"vCheckbox",attrs:{label:"Hiển thị trên bảng đk tự động",outlined:"",height:"10"},model:{value:t.formCreate.showInRobotDashboard,callback:function(e){t.$set(t.formCreate,"showInRobotDashboard",e)},expression:"formCreate.showInRobotDashboard"}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{span:12}},[a("v-checkbox",{staticClass:"vCheckbox",attrs:{label:"Hiển thị trên bảng đk bằng tay",outlined:"",height:"10"},model:{value:t.formCreate.showInManualRobotDashboard,callback:function(e){t.$set(t.formCreate,"showInManualRobotDashboard",e)},expression:"formCreate.showInManualRobotDashboard"}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{span:12}},[a("v-checkbox",{staticClass:"vCheckbox",attrs:{label:"Cần danh sách phòng để thực thi lệnh",outlined:"",height:"10"},model:{value:t.formCreate.needRoom,callback:function(e){t.$set(t.formCreate,"needRoom",e)},expression:"formCreate.needRoom"}})],1)],1)],1)])])])])],1)]}}])})],1)},o=[],n=(a("7f7f"),a("5530")),r=a("b804"),i=a("6087"),c=a("2f62"),l=a("9b45"),u={model:"robotaction/",title:"medias",edit:"Sửa",create:"Tạo mới"},d={name:"",needRoom:!1},m={name:"CreateUser",components:{Sticky:r["a"]},data:function(){return{menu:!1,formCreate:JSON.parse(JSON.stringify(d)),formTitle:"Thêm mới lệnh điều khiển",currentUser:"",currentDate:"",isEdit:!1}},computed:Object(n["a"])({},Object(c["c"])({language:"language"})),mounted:function(){this.$store.commit("app/CHANGE_APP_TITLE","HỆ THỐNG GIÁM SÁT VÀ ĐIỀU KHIỂN ROBOT"),this.currentUserId=this.$store.state.auth.id,this.currentUser=this.$store.state.auth.name;var t=this.$router.currentRoute.params.id;"undefined"!==typeof t&&null!==t&&(this.getRobotAction(t),this.formTitle="Chỉnh sửa lệnh điều khiển",this.isEdit=!0)},methods:Object(n["a"])(Object(n["a"])({},Object(c["b"])({actCreateRobotAction:u.model+l["h"],actUpdateRobotAction:u.model+l["k"],actGetRobotAction:u.model+l["c"]})),{},{handleSubmitUser:function(){this.isEdit?this.editRobotAction():this.createRobotAction()},createRobotAction:function(){var t=this;this.actCreateRobotAction(this.formCreate).then((function(e){e.isSuccess?(t.$notify.success({title:t.generateTitleView("success","message"),message:t.generateTitleView("successMessage","message"),duration:2e3}),setTimeout((function(){window.location.href="/#/users/robot/robotAction"}),2e3)):t.$notify.error({title:t.generateTitleView("commonError","message"),message:e.message,duration:2e3})}))},editRobotAction:function(){var t=this;this.actUpdateRobotAction(this.formCreate).then((function(e){e.isSuccess?(t.$notify.success({title:t.generateTitleView("success","message"),message:t.generateTitleView("successMessage","message"),duration:2e3}),setTimeout((function(){window.location.href="/#/users/robot/robotAction"}),2e3)):t.$notify.error({title:t.generateTitleView("commonError","message"),message:e.message,duration:2e3})}))},getRobotAction:function(t){var e=this;this.actGetRobotAction(t).then((function(t){var a=t.payload.records;e.formCreate=JSON.parse(JSON.stringify(a))}))},generateTitleView:i["b"]})},h=m,f=(a("1cf6"),a("2877")),b=Object(f["a"])(h,s,o,!1,null,"42c05110",null);e["default"]=b.exports},"6a14":function(t,e,a){}}]);