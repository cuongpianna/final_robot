(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af0f0a94"],{"0ccd":function(t,e,o){"use strict";var a=o("5d7e"),n=o.n(a);n.a},"2e08":function(t,e,o){var a=o("9def"),n=o("9744"),i=o("be13");t.exports=function(t,e,o,r){var s=String(i(t)),c=s.length,l=void 0===o?" ":String(o),u=a(e);if(u<=c||""==l)return s;var d=u-c,f=n.call(l,Math.ceil(d/l.length));return f.length>d&&(f=f.slice(0,d)),r?f+s:s+f}},"3b2b":function(t,e,o){var a=o("7726"),n=o("5dbc"),i=o("86cc").f,r=o("9093").f,s=o("aae3"),c=o("0bfb"),l=a.RegExp,u=l,d=l.prototype,f=/a/g,m=/a/g,b=new l(f)!==f;if(o("9e1e")&&(!b||o("79e5")((function(){return m[o("2b4c")("match")]=!1,l(f)!=f||l(m)==m||"/a/i"!=l(f,"i")})))){l=function(t,e){var o=this instanceof l,a=s(t),i=void 0===e;return!o&&a&&t.constructor===l&&i?t:n(b?new u(a&&!i?t.source:t,e):u((a=t instanceof l)?t.source:t,a&&i?c.call(t):e),o?this:d,l)};for(var v=function(t){t in l||i(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},p=r(u),h=0;p.length>h;)v(p[h++]);d.constructor=l,l.prototype=d,o("2aba")(a,"RegExp",l)}o("7a56")("RegExp")},4917:function(t,e,o){"use strict";var a=o("cb7c"),n=o("9def"),i=o("0390"),r=o("5f1b");o("214f")("match",1,(function(t,e,o,s){return[function(o){var a=t(this),n=void 0==o?void 0:o[e];return void 0!==n?n.call(o,a):new RegExp(o)[e](String(a))},function(t){var e=s(o,t,this);if(e.done)return e.value;var c=a(t),l=String(this);if(!c.global)return r(c,l);var u=c.unicode;c.lastIndex=0;var d,f=[],m=0;while(null!==(d=r(c,l))){var b=String(d[0]);f[m]=b,""===b&&(c.lastIndex=i(l,n(c.lastIndex),u)),m++}return 0===m?null:f}]}))},"5d7e":function(t,e,o){},7954:function(t,e,o){"use strict";var a=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.checkNumber=r,e.exportExcel=s,e.parseTime=c,e.formatTime=l,e.param2Obj=u,e.checkEmail=d,e.hasClass=f,e.addClass=m,e.removeClass=b,e.hasPermissionAction=v,e.data2blob=p,o("34ef"),o("6762"),o("2fdb"),o("3b2b"),o("4917"),o("28a5"),o("f576"),o("a481"),o("6b54");var n=a(o("7037"));o("c5f6"),o("7cdf");var i=o("5c96");function r(t,e,o){var a=parseFloat(e);return 0===a?o():a?void setTimeout((function(){Number.isInteger(a)?a<=0?o(new Error("Vui lòng nhập số lớn hơn hoặc bằng 0")):a>1e10?o(new Error("Vui lòng nhập số nhỏ hơn 10 tỷ")):o():o(new Error("Vui lòng nhập số"))}),1e3):o(new Error("Phải là số lớn hơn hoặc bằng 0"))}function s(t){}function c(t,e){if(0===arguments.length)return null;var o,a=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===(0,n.default)(t)?o=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),o=new Date(t));var i={y:o.getFullYear(),m:o.getMonth()+1,d:o.getDate(),h:o.getHours(),i:o.getMinutes(),s:o.getSeconds(),a:o.getDay()},r=a.replace(/{([ymdhisa])+}/g,(function(t,e){var o=i[e];return"a"===e?["日","一","二","三","四","五","六"][o]:o.toString().padStart(2,"0")}));return r}function l(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var o=new Date(t),a=Date.now(),n=(a-o)/1e3;return n<30?"chỉ cần":n<3600?Math.ceil(n/60)+"vài phút trước":n<86400?Math.ceil(n/3600)+"vài giờ trước":n<172800?"1 ngày trước":e?c(t,e):o.getMonth()+1+"tháng"+o.getDate()+"ngày "+o.getHours()+" giờ"+o.getMinutes()+" phút"}function u(t){var e=t.split("?")[1];return e?JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")+'"}'):{}}function d(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}function f(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function m(t,e){f(t,e)||(t.className+=" "+e)}function b(t,e){if(f(t,e)){var o=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(o," ")}}function v(t,e,o,a){return t.includes(e)?(""!==o&&(window.location.href="/#/"+o),!0):((0,i.Message)({message:a,type:"error",duration:5e3}),!1)}function p(t,e){t=t.split(",")[1],t=window.atob(t);for(var o=new Uint8Array(t.length),a=0;a<t.length;a++)o[a]=t.charCodeAt(a);return new Blob([o],{type:e})}},"79a2":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"callContainer"},[a("div",{staticClass:"call-wrap"},[a("div",{staticClass:"call-left",staticStyle:{overflow:"hidden"}},[a("div",{staticClass:"video-call-wrap"},[null==t.mediaSelected?a("span",{attrs:{id:"meetrb1"}}):a("div",{staticStyle:{height:"100%"}},["Video"==t.mediaSelected.fileType?a("video",{attrs:{controls:"",autoplay:""}},[a("source",{attrs:{src:t.mediaSelected.serverMediaPath,type:"video/mp4"}})]):"Pdf"==t.mediaSelected.fileType?a("embed",{staticStyle:{height:"100%"},attrs:{src:t.mediaSelected.serverMediaPath,width:"100%",height:"100%"}}):a("img",{staticClass:"media-item",attrs:{src:t.mediaSelected.serverMediaPath,alt:t.mediaSelected.fileName}})])]),t._v(" "),a("div",{staticClass:"media-wrap"},[a("div",{staticClass:"media_inner"},[a("swiper",{attrs:{options:t.swiperOption}},[a("swiper-slide",{staticClass:"media_inner__left"},[a("img",{staticClass:"mainImg",attrs:{src:o("f853"),alt:""},on:{click:t.openVideoCall}})]),t._v(" "),t._l(t.listRobotMedia,(function(e,n){return a("swiper-slide",{key:n,staticClass:"media-item"},["Video"==e.fileType?a("img",{staticClass:"media-item__inner",attrs:{src:o("eaa8")},on:{click:function(o){return t.selectItem(e)}}}):t._e(),t._v(" "),"Pdf"==e.fileType?a("div",{staticClass:"pdfItem"},[a("font-awesome-icon",{staticClass:"pdfIcon",attrs:{icon:"file-pdf"}}),t._v("\n                "+t._s(e.fileName)+"\n              ")],1):a("img",{staticClass:"media-item__inner",attrs:{src:e.serverMediaPath,alt:e.fileName},on:{click:function(o){return t.selectItem(e)}}}),t._v(" "),a("div",{staticClass:"overlay",class:e.fileType,on:{click:function(o){return t.selectItem(e)}}},[t._v(t._s(e.fileName))])])}))],2)],1)])]),t._v(" "),a("div",{staticClass:"call-right"},[a("div",{staticClass:"call-right__top"},[a("div",{staticClass:"top"},[a("div",{staticClass:"avatar-container"},[a("div",{staticClass:"avatar-wrap"},[a("div",{staticClass:"avatar-inner"},[t.robotInfo.thumb?a("img",{attrs:{src:t.folderUpload+t.robotInfo.thumb,alt:""}}):t._e()])]),t._v(" "),a("div",{staticClass:"robot-name__wrap"},[a("div",{staticClass:"robot-name"},[a("span",{staticClass:"label",staticStyle:{color:"black"}},[t._v("Thông tin robot:")]),t._v(" "+t._s(t.robotInfo.code)+" -\n                "+t._s(t.robotInfo.name)+" ( "+t._s(t.robotInfo.robotVersion.name)+" )\n              ")]),t._v(" "),a("div",{staticClass:"robot-name"},[a("span",{staticClass:"label",staticStyle:{color:"black"}},[t._v(t._s(t.generateTitleView("workAt","robot"))+":")]),t._v("\n                "+t._s(t.areaName)+" - "+t._s(t.robotInfo.map.name)+"\n              ")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"robot-name"},[t._v("\n                "+t._s(t.generateTitleView("status","robot"))+":\n                "),void 0!=t.robotStatus.point_x?a("span",{staticStyle:{color:"green"}},[t._v("\n                  "+t._s(t.generateTitleView("working","robot"))+"\n                ")]):a("span",{staticStyle:{color:"red"}},[t._v(" "+t._s(t.generateTitleView("notWorking","robot"))+" ")])])])]),t._v(" "),a("div",{staticClass:"robot_info__under"},[a("div",{staticClass:"info_under__inner"},[a("div",{staticClass:"robot-rows__wrap"},[a("div",{staticClass:"robot-rows__left"},[a("div",{staticClass:"robot-rows"},[a("font-awesome-icon",{staticClass:"infoIcon",attrs:{icon:"map-marker-alt"}}),t._v("\n                    Vị trí "),a("span",{directives:[{name:"show",rawName:"v-show",value:void 0!=t.robotStatus.point_x,expression:"robotStatus.point_x != undefined"}]},[t._v("["+t._s(t.robotStatus.point_x)+", "+t._s(t.robotStatus.point_y)+"]")])],1),t._v(" "),a("div",{staticClass:"robot-rows"},[a("font-awesome-icon",{staticClass:"infoIcon",attrs:{icon:"battery-half"}}),t._v("\n                    Pin ("+t._s(t.robotStatus.pin)+"%)\n                  ")],1),t._v(" "),a("div",{staticClass:"robot-rows"},[a("font-awesome-icon",{staticClass:"infoIcon",attrs:{icon:"wifi",color:t.wifiColor}}),t._v(" "),t.setting.isOnline?a("span",[t._v("Wifi")]):a("span",[t._v("Wifi-LAN")])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.workType,expression:"workType"}],staticClass:"robot-rows"},[a("font-awesome-icon",{staticClass:"infoIcon",attrs:{icon:"sign-in-alt"}}),t._v("\n                    "+t._s(t.workType)+"\n                  ")],1)]),t._v(" "),a("div",{staticClass:"robot-rows__right"},[a("div",{staticClass:"robot-rows",staticStyle:{"min-height":"20px"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:""!==t.currentRoomName,expression:"currentRoomName !== ''"}]},[t._v(t._s(t.currentRoomName))])]),t._v(" "),a("div",{staticClass:"robot-rows"},[a("font-awesome-icon",{staticClass:"infoIcon",attrs:{icon:"certificate",color:t.colorBarrier}}),t._v("\n                    Vật cản\n                  ")],1),t._v(" "),a("div",{staticClass:"robot-rows"},[a("font-awesome-icon",{staticClass:"infoIcon",attrs:{icon:"pause",color:t.colorPause}}),t._v("\n                    Dừng khẩn cấp\n                  ")],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.workMode,expression:"workMode"}],staticClass:"robot-rows"},[a("font-awesome-icon",{staticClass:"infoIcon",attrs:{icon:"play",color:"green"}}),t._v("\n                    "+t._s(t.workMode)+"\n                  ")],1)])])])])]),t._v(" "),a("div",{staticClass:"bottom"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.setting.isTwoCamera,expression:"setting.isTwoCamera"}],staticClass:"robot-camera",attrs:{id:"meetrb2"}})])]),t._v(" "),a("div",{staticClass:"call-right__bottom"},[a("div",{staticClass:"notification"},[a("div",{staticClass:"left"},[a("v-textarea",{attrs:{solo:"",rows:"2"}})],1),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"robot-actions"},[a("button",{staticClass:"action-button",attrs:{title:t.generateTitleView("mediaManagement","robot")},on:{click:t.redirectToMedia}},[t._v("\n            "+t._s(t.generateTitleView("mediaManagement","robot"))+"\n            "),a("font-awesome-icon",{attrs:{icon:"file-alt",color:"#828282"}})],1),t._v(" "),a("button",{staticClass:"action-button camera-button",on:{click:t.redirectRobotControl}},[t._v("\n            Giám sát robot\n            "),a("font-awesome-icon",{attrs:{icon:"arrows-alt",color:"#ffffff"}})],1)])])])])])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"right"},[o("button",{staticClass:"btn-notification"},[t._v("Thông báo")])])}],i=(o("28a5"),o("ac6a"),o("7f7f"),o("b85c")),r=o("5530"),s=(o("dfa4"),o("7212")),c=o("2f62"),l=o("6087"),u=o("53d2"),d=o("cf10"),f=o("7954"),m=o("a55b"),b=o("7eeb"),v={modelRobot:"robot/",modelMediaRobot:"robotmedia/",modelAuth:"auth/",modelRobotAction:"robotaction/",robotControl:"robotcontrol/",modelArea:"area/"},p={chuyenCom:5,thamBenhNhan:6,chuyenThuoc:7,thuRac:8,veLayDO:3,veGara:4},h={name:"RobotCall",components:{swiper:s["swiper"],swiperSlide:s["swiperSlide"]},data:function(){return{areaName:"",realRoomList:[],VUE_APP_JITSI_DOMAIN:"",currentPage:0,pageCount:0,isLoading:!1,listQuery:{page:1,limit:100,name:"",status:null,socket:null,webSocketURI:"wss://172.20.10.2:9000/agency/downloadMedia"},robotId:this.$router.currentRoute.params.id,mediaSelected:null,robotInfo:{map:{},robotVersion:{}},swiperOption:{slidesPerView:8,spaceBetween:10,slidesPerGroup:1,autoResize:!1,loop:!1,autoHeight:!1,loopFillGroupWithBlank:!1,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1340:{slidesPerView:7,spaceBetween:10},1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},folderUpload:"https://172.20.10.2:9000/agency/Images/User//"}},computed:Object(r["a"])(Object(r["a"])({},Object(c["mapGetters"])({listRobotMedia:v.modelRobot+"listRobotMedia",setting:v.modelAuth+"setting",robotStatus:v.robotControl+"robotStatus",currentRoomName:v.robotControl+"currentRoomName"})),{},{workType:function(){var t="",e=parseInt(this.robotStatus.workType);return e===p.chuyenCom?t="Chuyển cơm":e===p.thamBenhNhan?t="Thăm bệnh nhân":e===p.chuyenThuoc?t="Chuyển thuốc":e===p.thuRac?t="Thu rác":e===p.veLayDO?t="Về lấy đồ":e===p.veGara&&(t="Về gara"),t},wifiColor:function(){var t="";return"1"===this.robotStatus.networkStatus&&(t="green"),t},colorBarrier:function(){var t="";return"1"===this.robotStatus.barrier&&(t="green"),t},workMode:function(){var t="";return"0"===this.robotStatus.workMode?t="Bằng tay":"1"===this.robotStatus.workMode?t="Tự động":"2"===this.robotStatus.workMode&&(t="Bám vạch"),t},colorPause:function(){var t="";return"1"===this.robotStatus.e_stop&&(t="green"),t}}),watch:{robotStatus:{deep:!0,handler:function(){var t,e=this.robotStatus.point_x,o=this.robotStatus.point_y,a=!0,n=Object(i["a"])(this.realRoomList);try{for(n.s();!(t=n.n()).done;){var r=t.value,s=Math.abs(parseFloat(e)-parseFloat(r.realX3)),c=Math.abs(parseFloat(o)-parseFloat(r.realY3));if(s<=100*parseFloat(r.deltax)&&c<=100*parseFloat(r.deltay)){this.mutationChangeCurrentName(r.name),a=!1;break}}}catch(l){n.e(l)}finally{n.f()}a&&this.mutationChangeCurrentName("")}}},mounted:function(){this.robotId=this.$router.currentRoute.params.id,this.socket=this.initSocket(),this.getRobotMedia(),this.getRobotInfo(),this.changeAppTitle("HỆ THỐNG GIAO TIẾP QUA ROBOT")},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(c["mapMutations"])({mutUpdateRobotStatus:v.robotControl+b["MUTATION_UPDATE_ROBOT_STATUS"],mutationChangeRobotCode:v.robotControl+"mutationChangeRobotCode",mutationChangeCurrentName:v.robotControl+b["MUTATION_UPDATE_CURRENT_ROOM_NAME"],changeAppTitle:"app/CHANGE_APP_TITLE"})),Object(c["mapActions"])({actGetRobotMedia:v.modelRobot+u["ACT_GET_ROBOT_MEDIA"],actGetRobotInfo:v.modelRobot+u["ACT_FETCH_ONE_ROBOT"],actExportMedia:v.modelMediaRobot+d["ACT_EXPORT_MEDIA"],actGetCurrentArea:v.modelArea+"actFetchOneArea"})),{},{getRobotMedia:function(){this.actGetRobotMedia({current_page:this.listQuery.page,name:this.listQuery.name,robot_id:this.robotId,is_active:this.listQuery.status,limit:this.listQuery.limit})},selectItem:function(t){this.mediaSelected=t;var e=this.robotInfo.code,o=(t.mediaId,Object(m["b64EncodeUnicode"])("SelectMedia_"+e+"_"+t.mediaId));this.socket.send(o)},redirectToMedia:function(){window.location.href="/#/users/robots/media/"+this.robotId},openVideoCall:function(){this.mediaSelected=null;var t=this.robotInfo.code,e=this;setTimeout((function(){e.initComunicationCamera(e.robotInfo.cameras)}));var o=Object(m["b64EncodeUnicode"])("SelectMedia_"+t+"_video");this.socket.send(o)},getArea:function(t){var e=this;this.actGetCurrentArea(t).then((function(t){e.areaName=t.payload.records.name}))},getRobotInfo:function(){var t=this;this.actGetRobotInfo(this.robotId).then((function(e){t.robotInfo=e.payload.records,t.getArea(t.robotInfo.map.parentId),t.setting.isOnline?t.VUE_APP_JITSI_DOMAIN=t.robotInfo.videoCallOnlineUrl:t.VUE_APP_JITSI_DOMAIN=t.robotInfo.videoCallUrl,t.robotObject=JSON.parse(JSON.stringify(t.robotInfo));var o,a=JSON.parse(t.robotObject.map.jsonData),n=a.sizeMap,r=t.robotObject.map,s=Object(i["a"])(a.objectList);try{for(s.s();!(o=s.n()).done;){var c=o.value,l=c.points[2],u=l.x/n.w*100,d=l.y/n.h*100;c.realX3=u*r.width/100*100,c.realY3=d*r.height/100*100}}catch(m){s.e(m)}finally{s.f()}t.realRoomList=a.objectList;var f=t;setTimeout((function(){f.initJitsi(f.robotInfo.cameras)}),1e3)}))},initComunicationCamera:function(t){var e=null;t.forEach((function(t){1==t.functionType&&(e=t)}));null!=e&&e.labelName;var o=null!=e?e.jitsiCallRoom:this.robotInfo.code,a=this.VUE_APP_JITSI_DOMAIN,n={roomName:o,parentNode:document.querySelector("#meetrb1")};new JitsiMeetExternalAPI(a,n)},initJitsi:function(t){var e=null,o=null;t.forEach((function(t){1==t.functionType&&(e=t),2==t.functionType&&(o=t)}));null!=e&&e.labelName;var a=null!=e?e.jitsiCallRoom:this.robotInfo.code;console.log(this.robotInfo.code);null!=o&&o.labelName;var n=null!=o?o.jitsiCallRoom:this.robotInfo.code+"_1",i=this.VUE_APP_JITSI_DOMAIN,r={configOverwrite:{enableInsecureRoomNameWarning:!1,enableCalendarIntegration:!0,enableWelcomePage:!1},interfaceConfigOverwrite:{DISABLE_JOIN_LEAVE_NOTIFICATIONS:!0,SHOW_BRAND_WATERMARK:!0},roomName:a,parentNode:document.querySelector("#meetrb1"),enableInsecureRoomNameWarning:!1};new JitsiMeetExternalAPI(i,r);if(this.setting.isTwoCamera){var s={configOverwrite:{disableAudioLevels:!0},interfaceConfigOverwrite:{DISABLE_JOIN_LEAVE_NOTIFICATIONS:!1,ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT:10,DISABLE_PRESENCE_STATUS:!0,SHOW_CHROME_EXTENSION_BANNER:!0,DISABLE_TRANSCRIPTION_SUBTITLES:!0,HIDE_INVITE_MORE_HEADER:!0,AUTO_PIN_LATEST_SCREEN_SHARE:"",TOOLBAR_BUTTONS:[],GENERATE_ROOMNAMES_ON_WELCOME_PAGE:!1,SHOW_JITSI_WATERMARK:!1,SHOW_PROMOTIONAL_CLOSE_PAGE:!1,SHOW_WATERMARK_FOR_GUESTS:!1,DISABLE_VIDEO_BACKGROUND:!0,VIDEO_QUALITY_LABEL_DISABLED:!0,SETTINGS_SECTIONS:[],RECENT_LIST_ENABLED:!1},roomName:n,width:"100%",parentNode:document.querySelector("#meetrb2")},c=new JitsiMeetExternalAPI(i,s);c.executeCommand("toggleFilmStrip"),c.executeCommand("toggleVideo")}},initSocket:function(){var t="wss://172.20.10.2:9000/agency/downloadMedia",e=this,o=new WebSocket(t);return o.onopen=function(){console.log("Connected.")},o.onclose=function(t){setTimeout((function(){e.socket=e.initSocket()}),1e3),t.wasClean?console.log("Disconnected."):console.log("Connection lost."),console.log("Code: "+t.code+". Reason: "+t.reason)},o.onmessage=function(t){var o=t.data;if("@"===o[0]){var a=o.split("#"),n=a[a.length-1];e.robotInfo.code===n&&e.mutUpdateRobotStatus(o)}},o.onerror=function(t){console.log("Error: "+t.message)},o},redirectRobotControl:function(){window.location.href="/#/users/robots/control/"+this.robotInfo.id},generateTitleView:l["generateTitleView"],hasPermissionAction:f["hasPermissionAction"]})},A=h,g=(o("0ccd"),o("2877")),w=Object(g["a"])(A,a,n,!1,null,"41dc5fa3",null);e["default"]=w.exports},9744:function(t,e,o){"use strict";var a=o("4588"),n=o("be13");t.exports=function(t){var e=String(n(this)),o="",i=a(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(o+=e);return o}},a55b:function(t,e,o){"use strict";function a(t){return btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,(function(t,e){return String.fromCharCode("0x"+e)})))}function n(t){if(t&&t.length>0)try{return decodeURIComponent(atob(t).split("").map((function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join(""))}catch(e){return void console.log(e)}}Object.defineProperty(e,"__esModule",{value:!0}),e.b64EncodeUnicode=a,e.b64DecodeUnicode=n,o("6b54"),o("28a5"),o("a481")},eaa8:function(t,e){t.exports="data:image/jpeg;base64,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"},f576:function(t,e,o){"use strict";var a=o("5ca1"),n=o("2e08"),i=o("a25f"),r=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);a(a.P+a.F*r,"String",{padStart:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},f853:function(t,e,o){t.exports=o.p+"static/img/doctor2.c5383802.png"}}]);