(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed5d41c6"],{"2e08":function(e,t,i){var n=i("9def"),a=i("9744"),o=i("be13");e.exports=function(e,t,i,r){var s=String(o(e)),l=s.length,c=void 0===i?" ":String(i),d=n(t);if(d<=l||""==c)return s;var u=d-l,m=a.call(c,Math.ceil(u/c.length));return m.length>u&&(m=m.slice(0,u)),r?m+s:s+m}},"3b2b":function(e,t,i){var n=i("7726"),a=i("5dbc"),o=i("86cc").f,r=i("9093").f,s=i("aae3"),l=i("0bfb"),c=n.RegExp,d=c,u=c.prototype,m=/a/g,f=/a/g,g=new c(m)!==m;if(i("9e1e")&&(!g||i("79e5")((function(){return f[i("2b4c")("match")]=!1,c(m)!=m||c(f)==f||"/a/i"!=c(m,"i")})))){c=function(e,t){var i=this instanceof c,n=s(e),o=void 0===t;return!i&&n&&e.constructor===c&&o?e:a(g?new d(n&&!o?e.source:e,t):d((n=e instanceof c)?e.source:e,n&&o?l.call(e):t),i?this:u,c)};for(var h=function(e){e in c||o(c,e,{configurable:!0,get:function(){return d[e]},set:function(t){d[e]=t}})},b=r(d),p=0;b.length>p;)h(b[p++]);u.constructor=c,c.prototype=u,i("2aba")(n,"RegExp",c)}i("7a56")("RegExp")},4917:function(e,t,i){"use strict";var n=i("cb7c"),a=i("9def"),o=i("0390"),r=i("5f1b");i("214f")("match",1,(function(e,t,i,s){return[function(i){var n=e(this),a=void 0==i?void 0:i[t];return void 0!==a?a.call(i,n):new RegExp(i)[t](String(n))},function(e){var t=s(i,e,this);if(t.done)return t.value;var l=n(e),c=String(this);if(!l.global)return r(l,c);var d=l.unicode;l.lastIndex=0;var u,m=[],f=0;while(null!==(u=r(l,c))){var g=String(u[0]);m[f]=g,""===g&&(l.lastIndex=o(c,a(l.lastIndex),d)),f++}return 0===f?null:m}]}))},"53ca":function(e,t,i){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}i.d(t,"a",(function(){return n}))},"5f0f":function(e,t,i){"use strict";var n=i("db7d"),a=i.n(n);a.a},"77cd":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar"}},[i("div",{staticClass:"page-title"},[i("div",{staticClass:"title-container"},[i("router-link",{staticClass:"back-link",attrs:{to:"/"}},[i("font-awesome-icon",{staticClass:"icon-back",attrs:{icon:"chevron-left",color:"#424242"}})],1),e._v(" "),i("router-link",{staticClass:"title-page",attrs:{to:"/dashboard",title:"DashBoard"}},[e._v(e._s(e.generateTitleView("userMediaManagement","userMedia")))])],1),e._v(" "),i("div",{staticClass:"action-container"},[i("el-button",{staticClass:"btn-create-hotel",attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.redirectCreate}},[e._v(e._s(e.generateTitleView("create","userMedia")))])],1)])]),e._v(" "),i("v-card",{staticClass:"filter"},[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{staticClass:"vibotCol",attrs:{md:"3",cols:"12",sm:"6"}},[i("v-text-field",{staticClass:"vibotField",attrs:{label:e.generateTitleView("mediaName","userMedia")},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}})],1),e._v(" "),i("v-col",{attrs:{"offset-md":"7"}}),e._v(" "),i("v-col",{staticClass:"search-right-wrap",attrs:{md:"2",sm:"6"}},[i("el-button",{staticClass:"btn-reset",attrs:{plain:""},on:{click:e.resetFilter}},[e._v("\n              "+e._s(e.generateTitleView("clear","usermanagement"))+"\n            ")]),e._v(" "),i("el-button",{staticClass:"btn-search",attrs:{type:"primary",plain:""},on:{click:e.getMedias}},[e._v(e._s(e.generateTitleView("search","usermanagement")))])],1)],1)],1)],1),e._v(" "),i("v-card",{staticClass:"table-users"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],key:0,staticClass:"table-list",staticStyle:{width:"100%"},attrs:{fit:"",data:e.listMedias,"highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"id",align:"center",width:"40"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mediaSelected,expression:"mediaSelected"}],attrs:{type:"checkbox"},domProps:{value:n.mediaId,checked:Array.isArray(e.mediaSelected)?e._i(e.mediaSelected,n.mediaId)>-1:e.mediaSelected},on:{change:function(t){var i=e.mediaSelected,a=t.target,o=!!a.checked;if(Array.isArray(i)){var r=n.mediaId,s=e._i(i,r);a.checked?s<0&&(e.mediaSelected=i.concat([r])):s>-1&&(e.mediaSelected=i.slice(0,s).concat(i.slice(s+1)))}else e.mediaSelected=o}}})]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.generateTitleView("stt","usermanagement"),prop:"id",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){t.row;var n=t.$index;return[i("span",[e._v(e._s(n+1))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.generateTitleView("mediaName","userMedia"),"min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("span",{staticClass:"link-type"},[e._v(e._s(n.fileName))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.generateTitleView("mediaType","userMedia"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("span",[e._v(e._s(n.fileType))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.generateTitleView("mediaPath","userMedia"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("a",{attrs:{href:n.mediaPath,target:"_blank"}},[e._v("Tải về")])]}}])}),e._v(" "),i("el-table-column",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{label:"Actions",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.generateTitleView("deleteTooltip","userMedia"),placement:"top"}},[i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.deleteMedia(n.id)}}},[i("i",{staticClass:"el-icon-delete"})])],1)]}}])})],1),e._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.totalMedias>0,expression:"totalMedias>0"}],staticClass:"pagination-hotel",attrs:{total:e.totalMedias,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getPagination}})],1),e._v(" "),i("v-dialog",{attrs:{"max-width":"550"},model:{value:e.showDialog1,callback:function(t){e.showDialog1=t},expression:"showDialog1"}},[i("v-card",[i("v-card-title",[e._v(e._s(e.generateTitleView("uploadFileToRobots","userMedia")))]),e._v(" "),i("div",{staticClass:"md-contents"},[e.listRobots.length>0?i("md-table",{attrs:{"md-card":""},on:{"md-selected":e.onSelect},scopedSlots:e._u([{key:"md-table-row",fn:function(t){var n=t.item;return i("md-table-row",{attrs:{"md-selectable":"multiple","md-auto-select":""}},[i("md-table-cell",{attrs:{"md-label":e.generateTitleView("robotName","robot")}},[e._v(e._s(n.name))]),e._v(" "),i("md-table-cell",{attrs:{"md-label":e.generateTitleView("robotIp","robot")}},[e._v(e._s(n.ip))])],1)}}],null,!1,3417421612),model:{value:e.listRobots,callback:function(t){e.listRobots=t},expression:"listRobots"}}):i("div",{staticClass:"noCamera"},[e._v(e._s(e.generateTitleView("noCamera","camera")))])],1),e._v(" "),i("md-dialog-actions",[i("md-button",{staticClass:"md-primary",on:{click:function(t){return e.hideDialog()}}},[e._v(e._s(e.generateTitleView("close","camera")))]),e._v(" "),i("md-button",{staticClass:"md-primary",on:{click:function(t){return e.uploadMediaToRobot()}}},[e._v(e._s(e.generateTitleView("uploadMedia","userMedia")))])],1)],1)],1)],1)},a=[],o=(i("ac6a"),i("7f7f"),i("5530")),r=i("333d"),s=i("b804"),l=i("7954"),c=i("6087"),d=i("2f62"),u=i("f264"),m=i("3e69"),f=i("53d2"),g=i("cf10"),h={model:"usermedia/",robotModel:"robot/"},b={isActive:!0},p={name:"Index",components:{Pagination:r["a"],Sticky:s["a"]},data:function(){return{robotSelected:[],loading:!0,showDialog1:!1,listQuery:{page:1,limit:20,name:"",status:null},dialogForm:!1,user_id:"",currentUser:"",formUpdateStatus:JSON.parse(JSON.stringify(b)),mediaSelected:[],socket:null}},computed:Object(o["a"])({},Object(d["c"])({language:"language",listMedias:h.model+"listMedias",totalMedias:h.model+"totalMedias",listRobots:h.robotModel+"listRobots",userType:"userType",userId:"userId"})),mounted:function(){this.$store.commit("app/CHANGE_APP_TITLE","HỆ THỐNG GIÁM SÁT VÀ ĐIỀU KHIỂN ROBOT"),this.socket=this.initSocket(),this.roleList=this.$store.state.auth.roles,this.currentUser=this.$store.state.auth.name,this.currentUserId=this.$store.state.auth.id,this.getMedias()},methods:Object(o["a"])(Object(o["a"])({},Object(d["b"])({actFetchAllMedia:h.model+m["d"],actUploadMediaToRobot:h.model+m["f"],actInsertMedia:h.model+m["e"],actFetchAllRobot:h.robotModel+f["e"],actDeleteMedia:h.model+g["a"]})),{},{getMedias:function(){var e=this;this.actFetchAllMedia({current_page:this.listQuery.page,name:this.listQuery.name,user_id:this.currentUserId,is_active:this.listQuery.status,limit:this.listQuery.limit}).then((function(t){e.loading=!1}))},getRobots:function(){var e=this;this.actFetchAllRobot({current_page:this.listQuery.page,name:this.listQuery.name,is_active:this.listQuery.status,limit:this.listQuery.limit,user_type:this.userType,user_id:this.userId}).then((function(t){e.loading=!1}))},uploadMediaToRobot:function(){var e=this;this.robotSelected.length>0?this.actUploadMediaToRobot({MediaIds:this.mediaSelected,RobotIds:this.robotSelected}).then((function(t){e.loading=!1,t.isSuccess?(e.$notify.success({title:"Tải media lên robot",message:"Tải media lên robot thành công",duration:2e3}),e.showDialog1=!1,e.robotSelected.forEach((function(t){e.mediaSelected.forEach((function(i){var n=b64EncodeUnicode("DownloadMedia_"+t+"_"+i);e.socket.send(n)}))}))):e.$notify.error({title:e.generateTitleView("error","message"),message:e.generateTitleView("errorMessage","message"),duration:2e3})})):this.$notify.error({title:"Chưa chọn robot",message:"Bạn cần chọn robot trước khi upload file",duration:2e3})},onSelect:function(e){var t=this;null!=e&&e.forEach((function(e){t.robotSelected.push(e.code)}))},deleteMedia:function(e){var t=this.hasPermissionAction(this.roleList,u["j"],"",this.generateTitleView("permissionMessage","message"));t&&this.actDeleteMedia(e)},hideDialog:function(){this.showDialog1=!1},openUploadMedia:function(){console.log(this.mediaSelected),this.mediaSelected.length>0?(this.showDialog1=!0,this.getRobots()):this.$notify.error({title:"Chưa chọn media",message:"Bạn cần chọn media trước khi upload file",duration:2e3})},resetFilter:function(){this.listQuery.status=null,this.listQuery.name=""},redirectCreate:function(){this.hasPermissionAction(this.roleList,u["j"],"usermedia/create",this.generateTitleView("permissionMessage","message"))},generateTitleView:c["b"],hasPermissionAction:l["b"],initSocket:function(){var e="wss://172.20.10.2:9000/agency/downloadMedia",t=new WebSocket(e),i=this;return t.onopen=function(){console.log("Connected.")},t.onclose=function(e){e.wasClean?console.log("Disconnected."):console.log("Connection lost."),console.log("Code: "+e.code+". Reason: "+e.reason),setTimeout((function(){i.socket=i.initSocket()}),1e3)},t.onmessage=function(e){var t=e.data;console.log("Data received: "+t)},t.onerror=function(e){console.log("Error: "+e.message)},t}})},v=p,_=(i("5f0f"),i("2877")),w=Object(_["a"])(v,n,a,!1,null,"475d4f20",null);t["default"]=w.exports},7954:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return o}));i("34ef"),i("6762"),i("2fdb"),i("3b2b"),i("4917"),i("28a5"),i("f576"),i("a481"),i("6b54"),i("53ca"),i("c5f6"),i("7cdf");var n=i("5c96");function a(e,t,i,a){return e.includes(t)?(""!==i&&(window.location.href="/#/"+i),!0):(Object(n["Message"])({message:a,type:"error",duration:5e3}),!1)}function o(e,t){e=e.split(",")[1],e=window.atob(e);for(var i=new Uint8Array(e.length),n=0;n<e.length;n++)i[n]=e.charCodeAt(n);return new Blob([i],{type:t})}},9744:function(e,t,i){"use strict";var n=i("4588"),a=i("be13");e.exports=function(e){var t=String(a(this)),i="",o=n(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(i+=t);return i}},ce84:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),Math.easeInOutQuad=function(e,t,i,n){return e/=n/2,e<1?i/2*e*e+t:(e--,-i/2*(e*(e-2)-1)+t)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function a(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(e,t,i){var r=o(),s=e-r,l=20,c=0;t="undefined"===typeof t?500:t;var d=function e(){c+=l;var o=Math.easeInOutQuad(c,r,s,t);a(o),c<t?n(e):i&&"function"===typeof i&&i()};d()}},db7d:function(e,t,i){},f264:function(e,t,i){"use strict";i.d(t,"n",(function(){return n})),i.d(t,"p",(function(){return a})),i.d(t,"o",(function(){return o})),i.d(t,"g",(function(){return r})),i.d(t,"i",(function(){return s})),i.d(t,"h",(function(){return l})),i.d(t,"k",(function(){return c})),i.d(t,"j",(function(){return d})),i.d(t,"a",(function(){return u})),i.d(t,"c",(function(){return m})),i.d(t,"b",(function(){return f})),i.d(t,"d",(function(){return g})),i.d(t,"f",(function(){return h})),i.d(t,"e",(function(){return b})),i.d(t,"m",(function(){return p})),i.d(t,"l",(function(){return v}));var n="UserManagement_Create",a="UserManagement_Edit",o="UserManagement_Delete",r="Doctor_Create",s="Doctor_Edit",l="Doctor_Delete",c="Robot_Edit",d="Robot_Delete",u="Area_Create",m="Area_Edit",f="Area_Delete",g="Camera_Create",h="Camera_Edit",b="Camera_Delete",p="RobotVersion_Edit",v="RobotVersion_Delete"},f576:function(e,t,i){"use strict";var n=i("5ca1"),a=i("2e08"),o=i("a25f"),r=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);n(n.P+n.F*r,"String",{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!0)}})}}]);