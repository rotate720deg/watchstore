webpackJsonp([6],{"3scK":function(t,e){},"5myZ":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{orderList:[],page:1,totalSize:0,logisticsData:{},logisticsDialogVisible:!1}},created:function(){this.getList()},filters:{toStatusText:function(t){switch(t){case 0:return"待付款";case 1:return"待发货";case 2:return"待收货";case 3:return"已完成";case 4:return"申请售后";case 5:return"已退款";case 6:return"已取消";case 7:return"待付尾款"}}},computed:{},methods:{getList:function(){var t=this;this.$fetchPost({url:this.$api.GET_ORDER_LIST,data:{page:this.page,pageSize:5}}).then(function(e){console.log(e),t.orderList=e.data.orderList,t.hasNext=e.data.hasNext,t.totalSize=e.data.totalSize})},currentChange:function(t){this.page=t,this.getList()},toPay:function(t){this.$router.push({path:"/pay/"+t})},cancelOrder:function(t){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$fetchPost({url:e.$api.CANCEL_ORDER,data:{orderId:t}}).then(function(t){e.getList()})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},toDetail:function(t){var e=this.$store.getters.userId;this.$router.push({path:"/user/"+e+"/order/"+t})},sureRecieve:function(t){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$fetchPost({url:e.$api.FINISH_ORDERFINISH_ORDER,data:{orderId:t}}).then(function(t){e.getList()})}).catch(function(){e.$message({type:"info",message:"已取消确认"})})},checkLogistics:function(t){var e=this;this.$fetchPost({url:this.$api.QUERY_DISPACH_INFO,data:{orderId:t}}).then(function(t){e.logisticsData=t.data,e.logisticsDialogVisible=!0})},toService:function(t){var e=this.$store.getters.userId;this.$router.push({path:"/user/"+e+"/service/"+t})},toServiceStatus:function(t){var e=this.$store.getters.userId;this.$router.push({path:"/user/"+e+"/service_status/"+t})}},components:{"el-logistics":s("eYh/").a}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order_list-wrap"},[t._m(0),t._v(" "),s("div",{staticClass:"table-list-wrap"},[t._l(t.orderList,function(e,a){return s("div",{key:a,staticClass:"table-list"},[s("p",{staticClass:"title"},[s("i",{staticClass:"el-icon el-icon-document"}),t._v("订单号："+t._s(e.orderNo)+" "),s("span",[t._v("下单时间："+t._s(t._f("moments")(e.createTimestamp)))])]),t._v(" "),s("el-table",{staticStyle:{width:"100%"},attrs:{"empty-text":"没有购买，快去购物吧~",data:[t.orderList[a]],border:!0}},[s("el-table-column",{attrs:{label:"详情","class-name":"detail-cell",width:"254"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.itemList,function(e,a){return s("div",{key:a,staticClass:"detail-item"},[s("div",{staticClass:"img fl",style:{backgroundImage:"url("+e.imgUrl+")"}}),t._v(" "),s("div",{staticClass:"info"},[s("p",{staticClass:"name"},[t._v(t._s(e.itemName))]),t._v(" "),s("p",{staticClass:"style-wrap"},[s("span",{staticClass:"style"},[t._v(t._s(e.colorDescr))]),s("span",{staticClass:"price"},[t._v("￥"+t._s(e.singlePrice))]),t._v(" × "),s("span",{staticClass:"num"},[t._v(t._s(e.num))])])])])})}}])}),t._v(" "),s("el-table-column",{attrs:{label:"金额",width:"164",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[7!==e.row.orderState?s("span",{staticStyle:{color:"red"}},[t._v("￥"+t._s(e.row.totalAmount))]):s("div",[s("p",[t._v("应付款：￥"+t._s(e.row.totalAmount))]),t._v(" "),s("p",[t._v("已付定金：￥"+t._s(e.row.presaleAmount))]),t._v(" "),s("p",[t._v("待付尾款："),s("span",{staticStyle:{color:"red"}},[t._v("￥"+t._s(e.row.restAmount))])])])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"收货人",width:"126",prop:"receiver",align:"center"}}),t._v(" "),s("el-table-column",{attrs:{label:"状态",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(t._f("toStatusText")(e.row.orderState)))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作","class-name":"handle-cell",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.orderState?s("el-button",{staticClass:"custom-bg",attrs:{type:"primary"},on:{click:function(s){t.toPay(e.row.orderId)}}},[t._v("立即付款")]):t._e(),t._v(" "),7===e.row.orderState?s("el-button",{staticClass:"custom-bg",attrs:{type:"primary"},on:{click:function(s){t.toPay(e.row.orderId)}}},[t._v("付尾款")]):t._e(),t._v(" "),0===e.row.orderState?s("el-button",{attrs:{plain:""},on:{click:function(s){t.cancelOrder(e.row.orderId)}}},[t._v("取消订单")]):t._e(),t._v(" "),s("el-button",{attrs:{plain:""},on:{click:function(s){t.toDetail(e.row.orderId)}}},[t._v("查看详情")]),t._v(" "),2===e.row.orderState?s("el-button",{attrs:{plain:""},on:{click:function(s){t.sureRecieve(e.row.orderId)}}},[t._v("确认收货")]):t._e(),t._v(" "),3===e.row.orderState?s("el-button",{attrs:{plain:""},on:{click:function(s){t.toService(e.row.orderId)}}},[t._v("申请售后")]):t._e(),t._v(" "),e.row.aftersalesState?s("el-button",{attrs:{plain:""},on:{click:function(s){t.toServiceStatus(e.row.orderId)}}},[t._v("查看售后")]):t._e(),t._v(" "),2===e.row.orderState?s("el-button",{attrs:{plain:""},on:{click:function(s){t.checkLogistics(e.row.orderId)}}},[t._v("查看物流")]):t._e()]}}])})],1)],1)}),t._v(" "),s("div",{staticClass:"pagination"},[s("el-pagination",{attrs:{layout:"prev, pager, next","page-size":5,"current-page":t.page,total:t.totalSize},on:{"current-change":t.currentChange}})],1)],2),t._v(" "),s("el-dialog",{attrs:{"custom-class":"loginstics-dialog hasCancel",width:"508px",visible:t.logisticsDialogVisible},on:{"update:visible":function(e){t.logisticsDialogVisible=e}}},[s("span",{attrs:{slot:"title"},slot:"title"},[s("i",{staticClass:"el-icon el-icon-view"}),t._v("查看物流信息")]),t._v(" "),s("el-logistics",{attrs:{logisticsData:t.logisticsData}}),t._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticClass:"custom-bg custom-height",attrs:{type:"primary"},on:{click:function(e){t.logisticsDialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"table-list-title"},[s("span",{staticClass:"order-detail fl"},[t._v("订单详情")]),t._v(" "),s("span",{staticClass:"sum-price fl"},[t._v("金额")]),t._v(" "),s("span",{staticClass:"receive fl"},[t._v("收货人")]),t._v(" "),s("span",{staticClass:"status fl"},[t._v("状态")]),t._v(" "),s("span",{staticClass:"handle fl"},[t._v("操作")])])}]};var r=s("VU/8")(a,i,!1,function(t){s("LPTq")},"data-v-7fa0d404",null);e.default=r.exports},LPTq:function(t,e){},"eYh/":function(t,e,s){"use strict";var a={props:{logisticsData:{type:Object}},data:function(){return{}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",{staticClass:"address"},[s("i",{staticClass:"el-icon el-icon-location-outline"}),t._v("收货地址："+t._s(t.logisticsData.province)+t._s(t.logisticsData.city)+t._s(t.logisticsData.area)+t._s(t.logisticsData.addressDetail))]),t._v(" "),s("div",{staticClass:"step-wrap"},t._l(t.logisticsData.data,function(e,a){return s("div",{key:a,staticClass:"step-item fl",class:{achieve:0===a}},[s("p",{staticClass:"step-time fl"},[t._v(t._s(t._f("moments")(e.time)))]),t._v(" "),s("div",{staticClass:"step-icon fl"},[s("svg-icon",{attrs:{"icon-class":"xiangshangyuanjiantou",fill:"#34b035"}})],1),t._v(" "),s("div",{staticClass:"step-content fl"},[s("p",{staticClass:"step-status"},[t._v(t._s(e.status))]),t._v(" "),s("p",{staticClass:"step-desc"},[t._v(t._s(e.context))])])])}))])},staticRenderFns:[]};var r=s("VU/8")(a,i,!1,function(t){s("3scK")},"data-v-28e28f07",null);e.a=r.exports}});