webpackJsonp([7],{"3scK":function(t,a){},A3nk:function(t,a){},ApJW:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={data:function(){return{logisticsDialogVisible:!1,detailData:{},logisticsData:{}}},created:function(){this.getDetail()},computed:{svgClass:function(t){switch(t){case 10:return"tijiaochenggong";case 20:return"yifukuan";case 21:return"nopayment";case 28:return"yifukuan";case 30:return"shangchuan";case 38:return"yunshupeisong";case 48:return"shouhuo"}}},methods:{getDetail:function(){var t=this;this.$fetchPost({url:this.$api.GET_ORDER_DETAIL,data:{orderId:this.$route.params.orderId}}).then(function(a){t.detailData=a.data})},objectSpanMethod:function(t){t.row,t.column,t.rowIndex;if(4===t.columnIndex)return{rowspan:this.detailData.itemList.length,colspan:1}},checkLogistics:function(t){var a=this;this.logisticsData.nu?this.logisticsDialogVisible=!0:this.$fetchPost({url:this.$api.QUERY_DISPACH_INFO,data:{orderId:t}}).then(function(t){a.logisticsData=t.data,a.logisticsDialogVisible=!0})},toService:function(t){var a=this.$store.getters.userId;this.$router.push({path:"/user/"+a+"/service/"+t})},toOrderList:function(){var t=this.$store.getters.userId;this.$router.push({path:"/user/"+t+"/order_list"})},toServiceStatus:function(t){var a=this.$store.getters.userId;this.$router.push({path:"/user/"+a+"/service_status/"+t})},cancelOrder:function(t){var a=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$fetchPost({url:a.$api.CANCEL_ORDER,data:{orderId:t}}).then(function(t){a.getDetail()})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},sureRecieve:function(t){var a=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$fetchPost({url:a.$api.FINISH_ORDERFINISH_ORDER,data:{orderId:t}}).then(function(t){a.getDetail()})}).catch(function(){a.$message({type:"info",message:"已取消确认"})})}},components:{"el-logistics":s("eYh/").a}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"detail-wrap"},[s("p",{staticClass:"title"},[s("i",{staticClass:"el-icon el-icon-tickets"}),t._v("订单号："+t._s(t.detailData.orderNo))]),t._v(" "),s("div",{staticClass:"step-wrap"},t._l(t.detailData.flowList,function(a,e){return s("div",{key:e,staticClass:"step-item fl",class:{achieve:a.isShow}},[s("div",{staticClass:"step-icon"},[10===a.flowId?s("svg-icon",{attrs:{"icon-class":"tijiaochenggong"}}):t._e(),t._v(" "),20===a.flowId?s("svg-icon",{attrs:{"icon-class":"yifukuan"}}):t._e(),t._v(" "),21===a.flowId?s("svg-icon",{attrs:{"icon-class":"nopayment"}}):t._e(),t._v(" "),28===a.flowId?s("svg-icon",{attrs:{"icon-class":"yifukuan"}}):t._e(),t._v(" "),30===a.flowId?s("svg-icon",{attrs:{"icon-class":"shangchuan"}}):t._e(),t._v(" "),38===a.flowId?s("svg-icon",{attrs:{"icon-class":"yunshupeisong"}}):t._e(),t._v(" "),48===a.flowId?s("svg-icon",{attrs:{"icon-class":"shouhuo"}}):t._e()],1),t._v(" "),s("p",{staticClass:"step-desc"},[t._v(t._s(a.flowDescr))]),t._v(" "),s("p",{staticClass:"step-time"},[t._v(t._s(t._f("moments")(a.flowTimestamp)))])])})),t._v(" "),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"fl address panel"},[s("p",{staticClass:"title"},[s("svg-icon",{attrs:{"icon-class":"my"}}),t._v("收货人信息")],1),t._v(" "),s("div",{staticClass:"address-wrap panel-wrap"},[s("p",{staticClass:"receiver"},[t._v("收货人："+t._s(t.detailData.receiver))]),t._v(" "),s("p",{staticClass:"phone"},[t._v("手机号码："+t._s(t.detailData.phone))]),t._v(" "),s("p",{staticClass:"address-info"},[t._v("地址："+t._s(t.detailData.province)+t._s(t.detailData.city)+t._s(t.detailData.area)+t._s(t.detailData.addressDetail))])])]),t._v(" "),s("div",{staticClass:"fl pay panel"},[s("p",{staticClass:"title"},[s("svg-icon",{attrs:{"icon-class":"refund"}}),t._v("付款信息")],1),t._v(" "),s("div",{staticClass:"pay-wrap panel-wrap"},[s("p",{staticClass:"type"},[t._v("付款方式：在线支付")]),t._v(" "),s("p",{staticClass:"total"},[t._v("商品总额："+t._s(t.detailData.totalAmount))]),t._v(" "),7===t.detailData.orderState?[s("p",{staticClass:"presaleAmount"},[t._v("已付定金："+t._s(t.detailData.presaleAmount))]),t._v(" "),s("p",{staticClass:"restAmount"},[t._v("代付尾款金额："),s("span",{staticStyle:{color:"red"}},[t._v(t._s(t.detailData.restAmount))])])]:[s("p",{staticClass:"pay"},[t._v("支付金额："),0!==t.detailData.orderState&&6!==t.detailData.orderState?s("span",[t._v(t._s(t.detailData.totalAmount))]):s("span",[t._v("未支付")])]),t._v(" "),0!==t.detailData.payTimestamp?s("p",{staticClass:"pay-time"},[t._v("支付时间："+t._s(t._f("moments")(t.detailData.payTimestamp)))]):t._e()]],2)]),t._v(" "),s("div",{staticClass:"fl invoice panel"},[t._m(0),t._v(" "),s("div",{staticClass:"address-wrap panel-wrap"},[0!==t.detailData.invoiceType?s("p",{staticClass:"invoiceType"},[t._v("发票类型："+t._s(t.detailData.invoiceType))]):s("p",{staticClass:"invoiceType"},[t._v("发票类型：不开发票")]),t._v(" "),0!==t.detailData.invoiceType?s("p",{staticClass:"phone"},[t._v("发票抬头："+t._s(t.detailData.title))]):t._e(),t._v(" "),0!==t.detailData.invoiceType?s("p",{staticClass:"phone"},[t._v("发票内容：商品明细")]):t._e(),t._v(" "),0!==t.detailData.invoiceType?s("p",{staticClass:"address-info"},[t._v("纳税人税号："+t._s(t.detailData.taxNumber))]):t._e()])])]),t._v(" "),s("el-table",{staticStyle:{width:"100%"},attrs:{"empty-text":"没有购买，快去购物吧~",data:t.detailData.itemList,border:!0,"span-method":t.objectSpanMethod}},[s("el-table-column",{attrs:{label:"商品","class-name":"detail-cell","header-align":"center",width:"254"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("div",{staticClass:"img fl",style:{backgroundImage:"url("+a.row.imgUrl+")"}}),t._v(" "),s("p",{staticClass:"name"},[t._v(t._s(a.row.itemName))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"颜色",width:"126",prop:"colorDescr",align:"center"}}),t._v(" "),s("el-table-column",{attrs:{label:"价格",width:"126",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",[t._v("￥"+t._s(a.row.subtotal))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"数量",width:"126",prop:"num",align:"center"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作","class-name":"handle-cell",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[0===t.detailData.orderState?s("el-button",{staticClass:"custom-bg",attrs:{type:"primary"},on:{click:function(a){t.toPay(t.detailData.orderId)}}},[t._v("立即付款")]):t._e(),t._v(" "),7===t.detailData.orderState?s("el-button",{staticClass:"custom-bg",attrs:{type:"primary"},on:{click:function(a){t.toPay(t.detailData.orderId)}}},[t._v("付尾款")]):t._e(),t._v(" "),0===t.detailData.orderState?s("el-button",{attrs:{plain:""},on:{click:function(a){t.cancelOrder(t.detailData.orderId)}}},[t._v("取消订单")]):t._e(),t._v(" "),6===t.detailData.orderState?s("span",[t._v("已取消")]):t._e(),t._v(" "),1===t.detailData.orderState?s("span",[t._v("待发货")]):t._e(),t._v(" "),2===t.detailData.orderState?s("el-button",{attrs:{plain:""},on:{click:function(a){t.sureRecieve(t.detailData.orderId)}}},[t._v("确认收货")]):t._e(),t._v(" "),3===t.detailData.orderState?s("el-button",{attrs:{plain:""},on:{click:function(a){t.toService(t.detailData.orderId)}}},[t._v("申请售后")]):t._e(),t._v(" "),4===t.detailData.orderState?s("el-button",{attrs:{plain:""},on:{click:function(a){t.toServiceStatus(t.detailData.orderId)}}},[t._v("查看售后")]):t._e(),t._v(" "),2===t.detailData.orderState?s("el-button",{attrs:{plain:""},on:{click:function(a){t.checkLogistics(t.detailData.orderId)}}},[t._v("查看物流")]):t._e()]}}])})],1),t._v(" "),s("el-button",{staticClass:"custom-height fr",attrs:{plain:""},on:{click:t.toOrderList}},[s("svg-icon",{attrs:{"icon-class":"fanhui"}}),t._v("返回订单列表")],1),t._v(" "),s("el-dialog",{attrs:{"custom-class":"loginstics-dialog hasCancel",width:"508px",visible:t.logisticsDialogVisible},on:{"update:visible":function(a){t.logisticsDialogVisible=a}}},[s("span",{attrs:{slot:"title"},slot:"title"},[s("i",{staticClass:"el-icon el-icon-view"}),t._v("查看物流信息")]),t._v(" "),s("el-logistics",{attrs:{logisticsData:t.logisticsData}}),t._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticClass:"custom-bg custom-height",attrs:{type:"primary"},on:{click:function(a){t.logisticsDialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"title"},[a("i",{staticClass:"el-icon el-icon-tickets"}),this._v("发票信息")])}]};var l=s("VU/8")(e,i,!1,function(t){s("A3nk")},"data-v-6d0c968a",null);a.default=l.exports},"eYh/":function(t,a,s){"use strict";var e={props:{logisticsData:{type:Object}},data:function(){return{}}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("p",{staticClass:"address"},[s("i",{staticClass:"el-icon el-icon-location-outline"}),t._v("收货地址："+t._s(t.logisticsData.province)+t._s(t.logisticsData.city)+t._s(t.logisticsData.area)+t._s(t.logisticsData.addressDetail))]),t._v(" "),s("div",{staticClass:"step-wrap"},t._l(t.logisticsData.data,function(a,e){return s("div",{key:e,staticClass:"step-item fl",class:{achieve:0===e}},[s("p",{staticClass:"step-time fl"},[t._v(t._s(t._f("moments")(a.time)))]),t._v(" "),s("div",{staticClass:"step-icon fl"},[s("svg-icon",{attrs:{"icon-class":"xiangshangyuanjiantou",fill:"#34b035"}})],1),t._v(" "),s("div",{staticClass:"step-content fl"},[s("p",{staticClass:"step-status"},[t._v(t._s(a.status))]),t._v(" "),s("p",{staticClass:"step-desc"},[t._v(t._s(a.context))])])])}))])},staticRenderFns:[]};var l=s("VU/8")(e,i,!1,function(t){s("3scK")},"data-v-28e28f07",null);a.a=l.exports}});