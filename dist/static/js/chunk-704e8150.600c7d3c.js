(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-704e8150"],{"07ea":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar"}},[i("div",{staticClass:"page-title"},[i("div",{staticClass:"title-container"},[i("router-link",{attrs:{to:"/users/module"}},[i("font-awesome-icon",{staticClass:"icon-back",attrs:{icon:"chevron-left",color:"#424242"}})],1),e._v(" "),i("span",{staticClass:"title-page"},[e._v(e._s(e.generateTitleView("editModule","module")))])],1),e._v(" "),i("div",{staticClass:"action-container"},[i("router-link",{attrs:{to:"/users/module"}},[i("el-button",{staticClass:"btn-back",attrs:{plain:""}},[e._v(e._s(e.generateTitleView("skip","module")))])],1),e._v(" "),i("el-button",{staticClass:"btn-save",attrs:{type:"primary",plain:""},on:{click:function(t){return e.editModule()}}},[e._v(e._s(e.generateTitleView("save","module"))+"\n        ")])],1)])]),e._v(" "),i("div",{staticClass:"role-info"},[i("div",{staticClass:"info-title"},[e._v(e._s(e.generateTitleView("moduleInfo","module")))]),e._v(" "),i("div",{staticClass:"info-content"},[i("el-form",{ref:"form",staticClass:"user-form",attrs:{model:e.formCreate,rules:e.rules,"label-position":"top","label-width":"150px"}},[i("el-form-item",{staticClass:"item-name",attrs:{label:e.generateTitleView("moduleName","module"),prop:"name"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.formCreate.name,callback:function(t){e.$set(e.formCreate,"name",t)},expression:"formCreate.name"}})],1),e._v(" "),i("el-form-item",{staticClass:"item-description",attrs:{label:e.generateTitleView("description","module"),prop:"description"}},[i("el-input",{attrs:{disabled:!1,type:"textarea",rows:"5"},model:{value:e.formCreate.description,callback:function(t){e.$set(e.formCreate,"description",t)},expression:"formCreate.description"}})],1),e._v(" "),i("el-form-item",{staticClass:"item-status",attrs:{label:e.generateTitleView("status","module"),prop:"isActive"}},[i("el-select",{attrs:{placeholder:e.generateTitleView("placeholder","module")},model:{value:e.formCreate.isActive,callback:function(t){e.$set(e.formCreate,"isActive",t)},expression:"formCreate.isActive"}},e._l(e.listStatus,(function(t,a){return i("el-option",{key:a,attrs:{value:t.value,label:t.label}},[e._v(e._s(t.label)+"\n            ")])})),1)],1),e._v(" "),i("el-form-item",{staticClass:"item-role",attrs:{label:e.generateTitleView("functions","module"),prop:"functions"}},[i("el-drag-select",{staticStyle:{width:"100%"},attrs:{multiple:""},model:{value:e.functions,callback:function(t){e.functions=t},expression:"functions"}},e._l(e.functionList,(function(e,t){return i("el-option",{key:t+"_"+e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1)])],1)},n=[];i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n}))},"0867":function(e,t,i){"use strict";i.r(t);var a=i("4b34"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},1578:function(e,t,i){},"18a9":function(e,t,i){"use strict";var a=i("d84d"),n=i.n(a);n.a},"2c65":function(e,t,i){"use strict";i.r(t);var a=i("5064"),n=i("b904");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("18a9");var r=i("2877"),l=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"647e2434",null);t["default"]=l.exports},"4b34":function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a"),i("7f7f");var n=a(i("6374")),s=a(i("ded3")),r=i("2f62"),l=a(i("2c65")),o=a(i("b804")),u=i("6087"),c={model:"module",moduleFunctions:"functions"},d={name:"",description:"",isActive:null},f={name:"EditModule",components:{ElDragSelect:l.default,Sticky:o.default},data:function(){return{formCreate:JSON.parse(JSON.stringify(d)),isLoading:!1,rules:{name:[{required:!0,message:this.generateTitleView("nameRequired","module"),trigger:"blur"}],description:[{required:!0,message:this.generateTitleView("descriptionRequired","module"),trigger:"blur"}]},listStatus:[{value:!1,label:this.generateTitleView("deactive","module")},{value:!0,label:this.generateTitleView("active","module")}],moduleId:null,functions:[],functionList:[]}},computed:(0,s.default)({},(0,r.mapGetters)(["language"])),watch:{language:{immediate:!0,handler:function(){this.rules={name:[{required:!0,message:this.generateTitleView("nameRequired","module"),trigger:"blur"}],description:[{required:!0,message:this.generateTitleView("descriptionRequired","module"),trigger:"blur"}]},this.listStatus=[{value:!1,label:this.generateTitleView("deactive","module")},{value:!0,label:this.generateTitleView("active","module")}]}}},mounted:function(){this.$store.commit("app/CHANGE_APP_TITLE","HỆ THỐNG GIÁM SÁT VÀ ĐIỀU KHIỂN ROBOT");var e=this.$router.currentRoute.params.id;"undefined"!==typeof e&&null!=e&&(this.getModuleDetail(e),this.getFunctionAll())},methods:{editModule:function(){var e=this;this.$refs["form"].validate((function(t){if(t){e.isLoading=!0;var i,a=[],s=(0,n.default)(e.functionList);try{for(s.s();!(i=s.n()).done;){var r,l=i.value,o=(0,n.default)(e.functions);try{for(o.s();!(r=o.n()).done;){var u=r.value;u===l.id&&a.push(l)}}catch(f){o.e(f)}finally{o.f()}}}catch(f){s.e(f)}finally{s.f()}e.formCreate.ModuleFunction=a;var d=e.$store.dispatch(c.model+"/Edit",e.formCreate).then((function(t){e.isLoading=!1,t.isSuccess?(e.$notify.success({title:e.generateTitleView("success","message"),message:e.generateTitleView("successMessage","message"),duration:2e3}),window.location.href="/#/users/module"):e.$notify.error({title:e.generateTitleView("error","message"),message:e.generateTitleView("errorMessage","message"),duration:2e3})}));return d}}))},getModuleDetail:function(e){var t=this,i=this.$store.dispatch(c.model+"/FetchOne",{id:e}).then((function(e){var i=e.payload.records[0],a={id:i.id,name:i.name,description:i.description,isActive:i.isActive},n=[];i.moduleFunction.length&&i.moduleFunction.forEach((function(e){n.push(e.id)})),t.functions=n,t.formCreate=JSON.parse(JSON.stringify(a))}));return i},getFunctionAll:function(){var e=this,t=this.$store.dispatch(c.moduleFunctions+"/FetchList",{current_page:1,limit:100}).then((function(t){e.functionList=t.payload.records}));return t},generateTitleView:u.generateTitleView}};t.default=f},5064:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-select",e._g(e._b({ref:"dragSelect",staticClass:"drag-select",attrs:{multiple:""},model:{value:e.selectVal,callback:function(t){e.selectVal=t},expression:"selectVal"}},"el-select",e.$attrs,!1),e.$listeners),[e._t("default")],2)},n=[];i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n}))},"57f8":function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("448a")),s=a(i("aa47")),r={name:"DragSelect",props:{value:{type:Array,required:!0}},computed:{selectVal:{get:function(){return(0,n.default)(this.value)},set:function(e){this.$emit("input",(0,n.default)(e))}}},mounted:function(){this.setSort()},methods:{setSort:function(){var e=this,t=this.$refs.dragSelect.$el.querySelectorAll(".el-select__tags > span")[0];this.sortable=s.default.create(t,{ghostClass:"sortable-ghost",setData:function(e){e.setData("Text","")},onEnd:function(t){var i=e.value.splice(t.oldIndex,1)[0];e.value.splice(t.newIndex,0,i)}})}}};t.default=r},7060:function(e,t,i){"use strict";var a=i("1578"),n=i.n(a);n.a},b904:function(e,t,i){"use strict";i.r(t);var a=i("57f8"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},d84d:function(e,t,i){},ecf9:function(e,t,i){"use strict";i.r(t);var a=i("07ea"),n=i("0867");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("7060");var r=i("2877"),l=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"5327d2ac",null);t["default"]=l.exports}}]);