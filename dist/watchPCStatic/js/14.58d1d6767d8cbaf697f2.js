webpackJsonp([14],{"56nL":function(t,s){},"n/qQ":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"service-status-wrap"},[a("p",{staticClass:"title"},[t._v(t._s(t._f("toText")(t.statusDetail.applyState))),1===t.statusDetail.applyState?a("span",[t._v("（"+t._s(t._f("moments")(t.statusDetail.createTimestamp))+"）")]):a("span",[t._v("（"+t._s(t._f("moments")(t.statusDetail.applyState))+"）")])]),t._v(" "),a("p",{staticClass:"note"},[a("svg-icon",{attrs:{"icon-class":"info"}}),t._v("感谢您使用本次服务！")],1),t._v(" "),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"fl address panel"},[t._m(0),t._v(" "),a("div",{staticClass:"address-wrap panel-wrap"},[a("p",{staticClass:"receiver"},[t._v("收货人："+t._s(t.statusDetail.returnReceiver))]),t._v(" "),a("p",{staticClass:"phone"},[t._v("手机号码："+t._s(t.statusDetail.returnPhone))]),t._v(" "),a("p",{staticClass:"address-info"},[t._v("地址："+t._s(t.statusDetail.returnAddress))])])]),t._v(" "),a("div",{staticClass:"fl goods panel"},[a("p",{staticClass:"title"},[a("svg-icon",{attrs:{"icon-class":"xianghujiaohuan"}}),t._v("退货信息")],1),t._v(" "),a("div",{staticClass:"goods-wrap panel-wrap"},t._l(t.statusDetail.itemList,function(s,e){return a("div",{key:e},[a("div",{staticClass:"img fl",style:{backgroundImage:"url("+s.imgUrl+")"}}),t._v(" "),a("p",{staticClass:"name"},[t._v(t._s(s.itemName))])])}))]),t._v(" "),a("div",{staticClass:"fl address panel"},[a("p",{staticClass:"title"},[a("svg-icon",{attrs:{"icon-class":"info"}}),t._v("退货原因："+t._s(t.statusDetail.reasonDescr))],1),t._v(" "),a("div",{staticClass:"address-wrap panel-wrap"},[a("p",{staticClass:"num"},[t._v("换货数量："+t._s(t.statusDetail.num))]),t._v(" "),a("p",{staticClass:"time"},[t._v("申请时间："+t._s(t._f("moments")(t.statusDetail.createTimestamp)))])])])]),t._v(" "),a("el-button",{staticClass:"custom-height fr",attrs:{plain:""},on:{click:t.toOrderList}},[a("svg-icon",{attrs:{"icon-class":"fanhui"}}),t._v("返回订单")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"title"},[s("i",{staticClass:"el-icon el-icon-location-outline"}),this._v("回寄地址信息")])}]};var i=a("VU/8")({data:function(){return{statusDetail:{}}},filters:{toText:function(t){switch(t){case 1:return"申请中";case 2:return"已成功受理";case 88:return"拒绝申请"}}},created:function(){var t=this;this.$fetchPost({url:this.$api.GET_AFTER_SALES_INFO,data:{orderId:this.$route.params.orderId}}).then(function(s){t.statusDetail=s.data})},methods:{toOrderList:function(){var t=this.$store.getters.userId,s=this.$route.params.orderId;this.$router.push({path:"/user/"+t+"/order/"+s})}}},e,!1,function(t){a("56nL")},"data-v-541977cd",null);s.default=i.exports}});