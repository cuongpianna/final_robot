(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-342b40f8"],{"0919":function(t,e,i){"use strict";i.r(e);var n=i("ef51"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},2257:function(t,e,i){"use strict";var n=i("b3fe"),a=i.n(n);a.a},"5d29":function(t,e,i){"use strict";i.r(e);var n=i("90f9"),a=i("0919");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2257");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"768c4702",null);e["default"]=s.exports},"90f9":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"meet1"}}),t._v(" "),i("ul",t._l(t.cameras,(function(e){return i("li",{key:e.deviceId},[t._v("\n      "+t._s(e.label)+"\n    ")])})),0)])},a=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}))},b3fe:function(t,e,i){},ef51:function(t,e,i){"use strict";var n=i("dbce"),a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("7f7f");var o=a(i("ded3")),r=i("2f62"),s=n(i("4fd3")),u={modelRobot:"robot/",modelMediaRobot:"robotmedia/",model:"setting/"},f={name:"RobotCall",data:function(){return{cameras:[],formCreate:{},listQuery:{page:1,name:"",status:null,limit:10},jistiDomain:""}},computed:(0,o.default)({},(0,r.mapGetters)({listRobotMedia:u.modelRobot+"listRobotMedia"})),mounted:function(){this.getSetting()},methods:(0,o.default)((0,o.default)({},(0,r.mapActions)({actGetSetting:u.model+s.ACT_GET_SETTING,actUpdateSetting:u.model+s.ACT_UPDATE_SETTING,setting:"auth/setting"})),{},{initJitsi:function(){var t=this,e=this.jistiDomain,i={interfaceConfigOverwrite:{filmStripOnly:!0},roomName:"CONFIGCAMERA",parentNode:document.querySelector("#meet1")},n=new JitsiMeetExternalAPI(e,i);n.getAvailableDevices().then((function(e){t.cameras=e.videoInput}))},getSetting:function(){var t=this;this.actGetSetting({current_page:this.listQuery.page,name:this.listQuery.name,is_active:this.listQuery.status,limit:this.listQuery.limit}).then((function(e){t.formCreate=JSON.parse(JSON.stringify(e.payload.records[0])),t.jistiDomain=t.formCreate.jistiDomain,t.formCreate.isOnline?t.jistiDomain=t.formCreate.jistiDomainInternet:t.jistiDomain=t.formCreate.jistiDomain,t.initJitsi()}))}})};e.default=f}}]);