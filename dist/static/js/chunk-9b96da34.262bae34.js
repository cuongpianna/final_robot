(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b96da34"],{"07f3":function(e,t,a){"use strict";var r=a("d87f"),s=a.n(r);s.a},c401:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.handleSubmit;return[a("form",{staticClass:"role-info__inners",on:{submit:function(t){return t.preventDefault(),r(e.handleSubmitUser)}}},[a("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar"}},[a("div",{staticClass:"page-title"},[a("div",{staticClass:"title-container"},[a("router-link",{staticClass:"back-link",attrs:{to:"/users/index"}},[a("font-awesome-icon",{staticClass:"icon-back",attrs:{icon:"chevron-left",color:"#424242"}})],1),e._v(" "),a("span",{staticClass:"title-page"},[e._v(e._s(e.formTitle))])],1),e._v(" "),a("div",{staticClass:"action-container"},[a("router-link",{attrs:{to:"/users/index"}},[a("el-button",{staticClass:"btn-back",attrs:{plain:""}},[e._v(e._s(e.generateTitleView("cancel","usermanagement")))])],1),e._v(" "),a("button",{staticClass:"btn-save",attrs:{type:"submit",plain:""}},[e._v(e._s(e.generateTitleView("save","usermanagement"))+"\n            ")])],1)])]),e._v(" "),a("v-container",{attrs:{fluid:""}},[a("v-card",{staticClass:"role-info"},[a("div",{staticClass:"role-info__inner"},[a("div",{staticClass:"role-info__inners"},[a("div",{staticClass:"info-title"},[e._v(e._s(e.generateTitleView("info","usermanagement")))]),e._v(" "),a("div",{staticClass:"info-content"},[a("div",{staticClass:"form"},[a("el-row",{staticClass:"mb-10",attrs:{gutter:40}},[a("el-col",{attrs:{span:12}},[a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("username","veeValidate")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{label:e.generateTitleView("username","usermanagement"),outlined:"",height:10},model:{value:e.formCreate.userName,callback:function(t){e.$set(e.formCreate,"userName",t)},expression:"formCreate.userName"}}),e._v(" "),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("fullName","veeValidate")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{label:e.generateTitleView("fullname","usermanagement"),outlined:"",height:10},model:{value:e.formCreate.name,callback:function(t){e.$set(e.formCreate,"name",t)},expression:"formCreate.name"}}),e._v(" "),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)],1),e._v(" "),a("el-row",{staticClass:"mb-10",attrs:{gutter:40}},[a("el-col",{attrs:{span:12}},[a("md-field",[a("label",[e._v(e._s(e.generateTitleView("usertype","usermanagement")))]),e._v(" "),a("md-select",{attrs:{id:"movie",name:"movie"},model:{value:e.formCreate.userType,callback:function(t){e.$set(e.formCreate,"userType",t)},expression:"formCreate.userType"}},e._l(e.userType,(function(t,r){return a("md-option",{key:r,attrs:{value:t.value}},[e._v(e._s(t.label)+"\n                          ")])})),1)],1),e._v(" "),a("div",[a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("Position","veeValidate")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{label:e.generateTitleView("position","usermanagement"),outlined:"",height:10},model:{value:e.formCreate.position,callback:function(t){e.$set(e.formCreate,"position",t)},expression:"formCreate.position"}}),e._v(" "),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("thumb-upload",{attrs:{img:e.formCreate.thumbnail,"api-url":e.urlUpload,"folder-upload":e.folderUpload,title:"Ảnh"},on:{"update:img":function(t){return e.$set(e.formCreate,"thumbnail",t)}}})],1)],1),e._v(" "),a("el-row",{staticClass:"mb-10",attrs:{gutter:40}},[a("el-col",{attrs:{span:12}},[a("ValidationProvider",{attrs:{rules:"required|email",name:e.generateTitleView("Email","veeValidate")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{label:e.generateTitleView("email","usermanagement"),outlined:"",height:10},model:{value:e.formCreate.email,callback:function(t){e.$set(e.formCreate,"email",t)},expression:"formCreate.email"}}),e._v(" "),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("ValidationProvider",{attrs:{rules:{regex:/([0-9]{10})\b/},name:e.generateTitleView("phone","veeValidate")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{label:e.generateTitleView("phone","usermanagement"),outlined:"",height:10},model:{value:e.formCreate.phone,callback:function(t){e.$set(e.formCreate,"phone",t)},expression:"formCreate.phone"}}),e._v(" "),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)],1),e._v(" "),a("el-row",{staticClass:"mb-10",attrs:{gutter:40}},[a("el-col",{attrs:{span:12}},[a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("Fax","veeValidate")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{label:e.generateTitleView("Fax","usermanagement"),outlined:"",height:10},model:{value:e.formCreate.fax,callback:function(t){e.$set(e.formCreate,"fax",t)},expression:"formCreate.fax"}}),e._v(" "),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("ValidationProvider",{attrs:{rules:"required",name:"Quyền"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("div",{staticClass:"selectRole"},[a("v-select",{attrs:{items:e.roleList,"item-text":"name",label:e.generateTitleView("selectRole","usermanagement"),"return-object":"",multiple:"",chips:"",dense:"",clearable:"true"},model:{value:e.formCreate.roleUser,callback:function(t){e.$set(e.formCreate,"roleUser",t)},expression:"formCreate.roleUser"}}),e._v(" "),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])],1)]}}],null,!0)})],1)],1),e._v(" "),a("el-row",{staticClass:"mb-20",attrs:{gutter:40,align:"center"}},[a("el-col",{attrs:{span:12}},[a("div",[a("v-combobox",{staticClass:"vb-select",attrs:{items:e.allDoctors,"item-text":"name",dense:"",clearable:"true","item-value":"id","return-object":"","allow-overflow":!1,label:e.generateTitleView("selectDoctor","usermanagement")},model:{value:e.formCreate.doctor,callback:function(t){e.$set(e.formCreate,"doctor",t)},expression:"formCreate.doctor"}})],1)])],1),e._v(" "),a("el-row",{staticClass:"mb-20",attrs:{gutter:40}},[a("el-col",{attrs:{span:12}},[a("v-select",{staticClass:"vb-select",attrs:{items:e.listParentArea,"item-text":"name","item-value":"id",label:e.generateTitleView("selectBigArea","robot"),dense:""},on:{change:e.changeAreaParent},model:{value:e.parentId,callback:function(t){e.parentId=t},expression:"parentId"}})],1),e._v(" "),a("el-col",{attrs:{gutter:40,span:12}},[a("v-select",{staticClass:"vb-select",attrs:{items:e.listChildrenArea,"item-text":"name",label:e.generateTitleView("selectChildArea","robot"),dense:"","item-value":"id"},on:{change:e.changeAreaChild},model:{value:e.childId,callback:function(t){e.childId=t},expression:"childId"}})],1)],1),e._v(" "),a("el-row",{staticClass:"mb-20",attrs:{gutter:40}},[a("el-col",{attrs:{span:24}},[a("v-select",{staticClass:"vb-select",attrs:{items:e.listRobotByArea,"item-text":"name",label:e.generateTitleView("selectRobot","usermanagement"),"return-object":"",multiple:"",chips:"",dense:"",clearable:"true"},model:{value:e.formCreate.robotList,callback:function(t){e.$set(e.formCreate,"robotList",t)},expression:"formCreate.robotList"}})],1)],1),e._v(" "),a("el-row",{staticClass:"mb-10",attrs:{gutter:40}},[a("el-col",{attrs:{span:24}},[a("ValidationProvider",{attrs:{rules:"required",name:e.generateTitleView("Address","veeValidate")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{label:e.generateTitleView("address","usermanagement"),outlined:"",height:10},model:{value:e.formCreate.contact,callback:function(t){e.$set(e.formCreate,"contact",t)},expression:"formCreate.contact"}}),e._v(" "),a("span",{staticClass:"vee-errors"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)],1)],1)])])])])],1)],1)]}}])})],1)},s=[],i=a("b85c"),l=(a("7f7f"),a("5530")),n=a("b804"),o=a("2c72"),c=a("6087"),u=a("2f62"),m=a("90ec"),d=a("53d2"),f=a("bd9d"),v={model:"usermanagement/",modelRobot:"robot/",modelDoctor:"doctor/",title:"user",edit:"Sửa",create:"Tạo mới"},p={name:"",contact:"",email:"",phone:"",isActive:!0,password:"123456",roleUser:[],thumbnail:"",userType:1,fax:"",position:"",doctor:null},h={name:"CreateUser",components:{Sticky:n["default"],ThumbUpload:o["default"]},data:function(){return{parentId:"",childId:"",roles:[],formCreate:JSON.parse(JSON.stringify(p)),isLoading:!1,formTitle:null!=this.$router.currentRoute.params.id?this.generateTitleView("editUser","usermanagement"):this.generateTitleView("createUser","usermanagement"),currentUser:"",currentDate:"",isEdit:!1,urlUpload:"file/upUserAvatar",folderUpload:"https://172.20.10.2:9000/agency/Images/User/",userType:[{label:"System Admin",value:1},{label:"Bác sĩ",value:2}]}},computed:Object(l["a"])({},Object(u["mapGetters"])({language:"language",roleList:"usermanagement/listRoles",allRobots:"robot/allRobots",allDoctors:v.modelDoctor+"allDoctors",listParentArea:v.model+"listParentArea",listChildrenArea:v.model+"listChildrenArea",listRobotByArea:v.model+"listRobotByArea"})),watch:{language:{immediate:!0,handler:function(e,t){}}},mounted:function(){this.$store.commit("app/CHANGE_APP_TITLE","HỆ THỐNG GIÁM SÁT VÀ ĐIỀU KHIỂN ROBOT");var e=this.$router.currentRoute.params.id;"undefined"!==typeof e&&null!==e&&this.getUser(e),this.getRole(),this.currentUser=this.$store.state.auth.name,this.formTitle===v.edit&&(this.isEdit=!0),this.getAllRobots(),this.getAllDoctors(),this.getParentArea()},methods:Object(l["a"])(Object(l["a"])({},Object(u["mapActions"])({getAllRobots:v.modelRobot+d["ACT_FETCH_ALL_ROBOTS"],getAllDoctors:v.modelDoctor+f["ACT_GET_ALL_DOCTORS"],getParentArea:v.model+m["ACT_GET_PARENT_AREA"],actGetChildAreaByParent:v.model+m["ACT_GET_CHILD_AREA_BY_PARENT"],actRobotByArea:v.model+m["ACT_GET_ROBOT_BY_AREA"]})),{},{handleSubmitUser:function(){this.formTitle===this.generateTitleView("editUser","usermanagement")?this.editUser():this.createUser()},getUser:function(e){var t=this,a=this.$store.dispatch(v.model+m["ACT_FETCH_ONE_USER"],e).then((function(e){var a=e.payload.records[0];if(null!=a.roleUser){var r,s=Object(i["a"])(a.roleUser);try{for(s.s();!(r=s.n()).done;){var l=r.value;t.roles.push(l.id)}}catch(o){s.e(o)}finally{s.f()}}if(t.formCreate=JSON.parse(JSON.stringify(a)),t.formCreate.robotList.length>0){var n=t.formCreate.robotList[0];t.parentId=n.map.parentId,t.actGetChildAreaByParent({ParentId:t.parentId}),t.childId=n.map.id,t.actRobotByArea(t.childId)}}));return a},getRole:function(){this.$store.dispatch(v.model+m["ACT_FETCH_ROLES"],{current_page:1,status:!0,name:"",limit:100})},createUser:function(){var e=this;"admin"===this.formCreate.userType?(this.formCreate.isSystemAdmin=!0,this.formCreate.isAgencyOwner=!1):"hotel"===this.formCreate.userType&&(this.formCreate.isSystemAdmin=!1,this.formCreate.isAgencyOwner=!0),this.formCreate["created"]=(new Date).toJSON(),this.formCreate["createdBy"]=this.currentUser;var t=this.$store.dispatch(v.model+m["ACT_INSERT_USER"],this.formCreate).then((function(t){t.isSuccess?(e.$notify.success({title:e.generateTitleView("success","message"),message:e.generateTitleView("successMessage","message"),duration:2e3}),setTimeout((function(){window.location.href="/#/users/index"}),2e3)):e.$notify.error({title:"Thất bại",message:t.message,duration:2e3})}));return t},editUser:function(){var e=this;this.formCreate["modified"]=(new Date).toJSON(),this.formCreate["modifiedBy"]=this.currentUser;var t=this.$store.dispatch(v.model+m["ACT_EDIT_USER"],this.formCreate).then((function(t){t.isSuccess?(e.$notify.success({title:e.generateTitleView("success","message"),message:e.generateTitleView("successMessage","message"),duration:2e3}),setTimeout((function(){window.location.href="/#/users/index"}),2e3)):(e.$notify.error({title:"Thất bại",message:"Dữ liệu cập nhật thất bại!",duration:2e3}),setTimeout((function(){window.location.href="/#/users/index"}),2e3))}));return t},changeAreaParent:function(e){this.actGetChildAreaByParent({ParentId:e})},changeAreaChild:function(e){this.actRobotByArea(e)},generateTitleView:c["generateTitleView"]})},g=h,C=(a("07f3"),a("2877")),b=Object(C["a"])(g,r,s,!1,null,"1c5fa20a",null);t["default"]=b.exports},d87f:function(e,t,a){}}]);