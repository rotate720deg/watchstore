webpackJsonp([2],{RSAK:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozRjlDQTQxOEU0MjhFODExOENDODlGM0M1QjExMzcxQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNDEwQkZCMzMwOTAxMUU4ODlDQ0U2RTgzRDZCREQ2QyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNDEwQkZCMjMwOTAxMUU4ODlDQ0U2RTgzRDZCREQ2QyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMyNDExODI0LWY4NjMtNDQ3Yi1iMTdjLTA3NWQyNjE5NmRkNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRjlDQTQxOEU0MjhFODExOENDODlGM0M1QjExMzcxQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PibFGfIAAADdSURBVHjaYvz//z8DKYCRbA2mG82EgFQBEDsDsQJU/gkQ7wfiiaf9Tz2HawAqBilaDcSCeAzPAGqayWiywVQdyLlBwCUgw/YB8RYmINEJFXwIxD/QFPZBnVcHxH5AvBGkwRUq+RSIjYF4LxB3A61nBNJlQJwExNeB2BOIdViABBNUgxUQiwIVukADIRlITQZiTpRQAvphM5D2gfLPAXEv1AnqWPxyEqRBG8i4QmQ0WDIBnXAVasNvPAr/AnEUUO0J5Ig7CqRAkfcNiJWhfnsMxDuAeCpQ8T2QOoAAAwBQUEY9B0r1dQAAAABJRU5ErkJggg=="},Wb8C:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("woOf"),s=i.n(a),o=i("wsvf"),n=i("//Fk"),r=i.n(n),c=i("mEoW"),l=i("Vo7i");function d(){return new r.a(function(e,t){Object(l.b)({url:c.a.INVOICE_LIST}).then(function(t){e(t)}).catch(function(e){t(e)})})}var u={props:{invoiceForm:{type:Object,dafault:{title:"",taxNumber:"",isDefault:0}},invoiceEdit:{type:Boolean},invoiceDialogVisible:{type:Boolean}},data:function(){return{content:0,contents:[{value:0,label:"商品明细"}],mold:0,molds:[{value:0,label:"普通发票"}],rules:{title:[{required:!0,message:"请填写发票抬头",trigger:"blur"}],taxNumber:[{required:!0,message:"请填写发票税号",trigger:"blur"}]}}},computed:{invoiceFormData:function(){return this.invoiceForm}},created:function(){},methods:{saveInvoice:function(e){var t=this;this.$refs[e].validate(function(i){if(!i)return console.log("error submit!!"),!1;var a;console.log("invoiceEdit",t.invoiceEdit),t.invoiceEdit?(a=t.invoiceFormData,new r.a(function(e,t){Object(l.b)({url:c.a.UPDATE_INVOICE,data:a}).then(function(t){e(t)}).catch(function(e){t(e)})})).then(function(i){t.$emit("closeInvoiceDialog"),t.$refs[e].resetFields()}):function(e){return new r.a(function(t,i){Object(l.b)({url:c.a.ADD_INVOICE,data:e}).then(function(e){t(e)}).catch(function(e){i(e)})})}(t.invoiceFormData).then(function(i){console.log(i),t.$emit("closeInvoiceDialog",i),t.$refs[e].resetFields()})})}}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-form",{ref:"invoiceForm",staticClass:"invoiceForm",attrs:{model:e.invoiceFormData,rules:e.rules,"label-width":"92px"}},[i("el-form-item",{attrs:{label:"发票类型"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.mold,callback:function(t){e.mold=t},expression:"mold"}},e._l(e.molds,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"发票内容"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}},e._l(e.contents,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"发票抬头",prop:"title"}},[i("el-input",{model:{value:e.invoiceFormData.title,callback:function(t){e.$set(e.invoiceFormData,"title",t)},expression:"invoiceFormData.title"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"发票税号",prop:"taxNumber"}},[i("el-input",{model:{value:e.invoiceFormData.taxNumber,callback:function(t){e.$set(e.invoiceFormData,"taxNumber",t)},expression:"invoiceFormData.taxNumber"}})],1),e._v(" "),i("el-form-item",{attrs:{label:""}},[i("el-checkbox",{staticClass:"has_checked",attrs:{"true-label":1,"false-label":0,name:"type",label:"设置为默认发票"},model:{value:e.invoiceFormData.isDefault,callback:function(t){e.$set(e.invoiceFormData,"isDefault",t)},expression:"invoiceFormData.isDefault"}})],1),e._v(" "),i("el-form-item",{staticClass:"btn-wrap"},[i("el-button",{staticClass:"custom-bg custom-height",attrs:{type:"primary"},on:{click:function(t){e.saveInvoice("invoiceForm")}}},[e._v("保存并使用")]),e._v(" "),i("div",{staticClass:"slot"})],1)],1)},staticRenderFns:[]};var m=i("VU/8")(u,v,!1,function(e){i("jQRG")},"data-v-d955f43a",null).exports,p=i("oH71"),h={data:function(){return{orderForm:{invoiceType:1,addressId:0,invoiceId:0,cartIds:"",itemStyleId:"",num:""},invoiceTag:0,addressList:[],addEdit:!1,addressForm:{},invoiceList:[],invoiceEdit:!1,invoiceForm:{},addressDialogVisible:!1,invoiceDialogVisible:!1}},computed:{tableData:function(){return this.$store.getters.currentGoods},totalPrice:function(){var e=0;return this.tableData.forEach(function(t){e+=t.subtotal}),e.toFixed(2)},payPrice:function(){var e=0;return this.tableData.forEach(function(t){e+=t.subtotal}),e.toFixed(2)},presaletotal:function(){var e=0;return this.tableData.forEach(function(t){e+=t.subPresaletotal}),e.toFixed(2)}},created:function(){var e=this;Object(p.c)().then(function(t){e.addressList=t.data.addressList,e.orderForm.addressId=e.addressList.length?e.addressList[0].addressId:""});var t=[];this.tableData.length&&this.tableData.forEach(function(e){t.push(e.cartId)}),this.orderForm.cartIds=t.join(","),this.orderForm.itemStyleId=this.tableData.length?this.tableData[0].itemStyleId:"",this.orderForm.num=this.tableData.length?this.tableData[0].num:"",d().then(function(t){e.invoiceList=t.data,e.orderForm.invoiceId=e.invoiceList.length?e.invoiceList[0].invoiceId:""})},methods:{orderUserCart:function(){var e=this;this.orderForm.cartIds?this.orderForm.addressId?3!==this.invoiceTag||2!==this.orderForm.invoiceType||this.orderForm.invoiceId?(0===this.invoiceTag&&(this.orderForm.invoiceType=0,delete this.orderForm.invoiceId),3===this.invoiceTag&&1===this.orderForm.invoiceType&&delete this.orderForm.invoiceId,this.$fetchPost({url:this.$api.ORDER_USER_CART,data:this.orderForm}).then(function(t){var i=t.data.orderId;e.$router.push({path:"/pay/"+i})})):this.$message.error("没有选择发票"):this.$message.error("没有选择地址"):this.$message.error("没有购买商品")},preOrderUserCart:function(){var e=this;this.orderForm.itemStyleId?this.orderForm.addressId?3!==this.invoiceTag||2!==this.orderForm.invoiceType||this.orderForm.invoiceId?(0===this.invoiceTag&&(this.orderForm.invoiceType=0,delete this.orderForm.invoiceId),3===this.invoiceTag&&1===this.orderForm.invoiceType&&delete this.orderForm.invoiceId,this.$fetchPost({url:this.$api.PRESALE_ORDER,data:this.orderForm}).then(function(t){var i=t.data.orderId;e.$router.push({path:"/pay/"+i})})):this.$message.error("没有选择发票"):this.$message.error("没有选择地址"):this.$message.error("没有购买商品")},openAddDialog:function(){this.addEdit=!1,this.addressForm={},this.addressDialogVisible=!0},openInvoiceDialog:function(){this.invoiceEdit=!1,this.invoiceForm={},this.invoiceDialogVisible=!0},closeAddDialog:function(e){var t=this;this.addressDialogVisible=!1,console.log("addressId",e),Object(p.c)().then(function(i){t.addressList=i.data.addressList,e&&(t.orderForm.addressId=e.data.addressId)})},closeInvoiceDialog:function(e){var t=this;this.invoiceDialogVisible=!1,console.log("invoiceId",e),d().then(function(i){t.invoiceList=i.data,e&&(t.orderForm.invoiceId=t.invoiceList.length?t.invoiceList[0].invoiceId:"")})},deleteAddress:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return Object(p.b)(e).then(function(e){t.$message({message:"删除成功",type:"success"})}),Object(p.c)().then(function(e){t.addressList=e.data.addressList,t.orderForm.addressId=t.addressList.length?t.addressList[0].addressId:""})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},deleteInvoice:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return function(e){return new r.a(function(t,i){Object(l.b)({url:c.a.DEL_INVOICE,data:e}).then(function(e){t(e)}).catch(function(e){i(e)})})}(e).then(function(e){t.$message({message:"删除成功",type:"success"})}),d().then(function(e){t.invoiceList=e.data,t.orderForm.invoiceId=t.invoiceList.length?t.invoiceList[0].invoiceId:""})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},chooseAdd:function(e){this.orderForm.addressId=e},chooseInvoice:function(e){this.orderForm.invoiceId=e},editAddress:function(e){this.addEdit=!0,this.addressForm=s()({},e),this.addressDialogVisible=!0},editInvoice:function(e){console.log("this.invoiceEdit",this.invoiceEdit),this.invoiceEdit=!0,console.log("this.invoiceEdit",this.invoiceEdit),this.invoiceForm=s()({},e),this.invoiceDialogVisible=!0},changeDefault:function(e){var t=this;Object(p.d)(e).then(function(e){return Object(p.c)()}).then(function(e){t.addressList=e.data.addressList})}},components:{"el-address":o.a,"el-invoice":m}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-wrap"},[i("div",{staticClass:"panel address-list"},[e._m(0),e._v(" "),i("div",{staticClass:"address-wrap"},[e._l(e.addressList,function(t,a){return i("div",{key:a,staticClass:"address fl",class:{active:t.addressId===e.orderForm.addressId},on:{click:function(i){e.chooseAdd(t.addressId)}}},[i("i",{staticClass:"el-icon el-icon-location-outline"}),e._v(" "),i("p",{staticClass:"name"},[e._v(e._s(t.receiver))]),e._v(" "),i("p",{staticClass:"phone"},[e._v(e._s(t.phone))]),e._v(" "),i("p",{staticClass:"detail"},[e._v(e._s(t.provinceName)+e._s(t.cityName)+e._s(t.areaName)+e._s(t.addressDetail))]),e._v(" "),i("div",{staticClass:"handle"},[i("el-checkbox",{staticClass:"has_checked",attrs:{"true-label":1,"false-label":0,name:"type"},on:{change:function(i){e.changeDefault({addressId:t.addressId})}},model:{value:t.isDefault,callback:function(i){e.$set(t,"isDefault",i)},expression:"item.isDefault"}},[e._v("默认地址")]),e._v(" "),i("a",{staticClass:"delete fr",attrs:{href:"javascript:;"},on:{click:function(i){i.stopPropagation(),e.deleteAddress({addressId:t.addressId})}}},[i("i",{staticClass:"el-icon el-icon-delete"}),e._v("删除")]),e._v(" "),i("a",{staticClass:"edit fr",attrs:{href:"javascript:;"},on:{click:function(i){i.stopPropagation(),e.editAddress(t)}}},[i("i",{staticClass:"el-icon el-icon-edit-outline"}),e._v("编辑")])],1)])}),e._v(" "),i("div",{staticClass:"address fl",on:{click:e.openAddDialog}},[e._v("\n         添加新地址\n       ")])],2)]),e._v(" "),i("div",{staticClass:"panel delivery-type"},[i("span",{staticClass:"title"},[i("svg-icon",{staticClass:"svg-icon",attrs:{"icon-class":"yunshupeisong"}}),e._v("配送方式：")],1),i("span",{staticClass:"text"},[i("svg-icon",{staticClass:"svg-icon",attrs:{"icon-class":"tianmaoshunfengbaoyou"}}),e._v("顺丰速运")],1)]),e._v(" "),i("div",{staticClass:"panel pay-type"},[i("span",{staticClass:"title"},[i("svg-icon",{staticClass:"svg-icon",attrs:{"icon-class":"refund"}}),e._v("网上支付：")],1),e._m(1),e._m(2)]),e._v(" "),i("div",{staticClass:"panel invoice-list"},[i("div",[e._m(3),e._v(" "),i("el-radio-group",{model:{value:e.invoiceTag,callback:function(t){e.invoiceTag=t},expression:"invoiceTag"}},[i("el-radio",{attrs:{label:0}},[e._v("不开发票")]),e._v(" "),i("el-radio",{attrs:{label:3}},[e._v("普通发票"),i("span",[e._v("（统一默认开具电子发票）")])]),e._v(" "),i("el-radio",{attrs:{label:4}},[e._v("增值税专用发票")])],1)],1),e._v(" "),3===e.invoiceTag?i("div",{staticClass:"invoice-title"},[i("span",[e._v("发票抬头：")]),e._v(" "),i("el-radio-group",{model:{value:e.orderForm.invoiceType,callback:function(t){e.$set(e.orderForm,"invoiceType",t)},expression:"orderForm.invoiceType"}},[i("el-radio",{attrs:{label:1}},[e._v("个人")]),e._v(" "),i("el-radio",{attrs:{label:2}},[e._v("公司")])],1)],1):e._e(),e._v(" "),1===e.orderForm.invoiceType&&3===e.invoiceTag?i("div",{staticClass:"invoice-content"},[i("span",[e._v("发票内容：")]),i("span",[e._v("商品明细")])]):e._e(),e._v(" "),4===e.invoiceTag?i("p",{staticStyle:{"padding-left":"60px"}},[e._v("如需开增值税发票，请联系在线客服，或拨打400-705-8885")]):e._e(),e._v(" "),2!==e.orderForm.invoiceType||3!==e.invoiceTag&&4!==e.invoiceTag?e._e():i("div",{staticClass:"invoice-wrap"},[e._l(e.invoiceList,function(t,a){return i("div",{key:a,staticClass:"invoice fl",class:{active:t.invoiceId===e.orderForm.invoiceId},on:{click:function(i){e.chooseInvoice(t.invoiceId,t.invoiceType)}}},[i("i",{staticClass:"el-icon el-icon-tickets"}),e._v(" "),i("p",{staticClass:"name"},[e._v("普通发票")]),e._v(" "),i("p",{staticClass:"phone"},[e._v("发票抬头："+e._s(t.title))]),e._v(" "),i("p",{staticClass:"detail"},[e._v("税号"+e._s(t.taxNumber))]),e._v(" "),i("div",{staticClass:"handle"},[i("a",{staticClass:"delete fr",attrs:{href:"javascript:;"},on:{click:function(i){i.stopPropagation(),e.deleteInvoice({invoiceId:t.invoiceId})}}},[i("i",{staticClass:"el-icon el-icon-delete"}),e._v("删除")]),e._v(" "),i("a",{staticClass:"edit fr",attrs:{href:"javascript:;"},on:{click:function(i){i.stopPropagation(),e.editInvoice(t)}}},[i("i",{staticClass:"el- icon el-icon-edit-outline"}),e._v(" 编辑")])])])}),e._v(" "),i("div",{staticClass:"invoice fl",on:{click:e.openInvoiceDialog}},[e._v("\n         添加新发票信息\n       ")])],2)]),e._v(" "),i("div",{staticClass:"panel my-goods"},[i("el-table",{staticStyle:{width:"100%"},attrs:{"empty-text":"没有购买，快去购物吧~",data:e.tableData}},[i("el-table-column",{attrs:{label:"商品",width:"403"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("div",{staticClass:"img fl",style:{backgroundImage:"url("+t.row.imgUrl+")"}}),e._v(" "),i("span",{staticClass:"name"},[e._v(e._s(t.row.itemName))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"属性",width:"163",align:"center",prop:"colorDescr"}}),e._v(" "),i("el-table-column",{attrs:{label:"数量",align:"center",width:"212",prop:"num"}}),e._v(" "),i("el-table-column",{attrs:{label:"单价",align:"center",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v("￥"+e._s(t.row.singlePrice))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"小计",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v("￥"+e._s(t.row.subtotal))])]}}])})],1),e._v(" "),e.tableData.length?i("div",{staticClass:"pay-wrap fr"},[i("p",{staticClass:"totalPrice"},[i("span",{staticClass:"fl"},[e._v("商品总价")]),i("span",[e._v("￥"+e._s(e.totalPrice))])]),e._v(" "),i("p",{staticClass:"payPrice"},[i("span",{staticClass:"fl"},[e._v("应付金额")]),e.tableData[0].subPresaletotal?i("span",[e._v("￥"+e._s(e.presaletotal))]):i("span",[e._v("￥"+e._s(e.payPrice))])]),e._v(" "),i("p",[i("router-link",{staticClass:"fl toGoods",attrs:{to:"/goods/"+e.tableData[0].itemBaseId}},[i("i",{staticClass:"el-icon el-icon-d-arrow-left"}),e._v("继续购物")]),e._v(" "),e.tableData[0].subPresaletotal?i("el-button",{staticClass:"custom-bg",attrs:{type:"primary"},on:{click:e.preOrderUserCart}},[e._v("提交订单")]):i("el-button",{staticClass:"custom-bg",attrs:{type:"primary"},on:{click:e.orderUserCart}},[e._v("提交订单")])],1)]):e._e()],1),e._v(" "),i("el-dialog",{attrs:{"custom-class":"address-dialog hasCancel",width:"723px",visible:e.addressDialogVisible},on:{"update:visible":function(t){e.addressDialogVisible=t}}},[i("p",{attrs:{slot:"title"},slot:"title"},[e.addEdit?i("span",[i("i",{staticClass:"el- icon el-icon-edit-outline"}),e._v(" 修改地址")]):i("span",[e._v("+ 新建地址")])]),e._v(" "),i("el-address",{attrs:{addressDialogVisible:e.addressDialogVisible,addEdit:e.addEdit,addressForm:e.addressForm},on:{closeAddDialog:e.closeAddDialog}})],1),e._v(" "),i("el-dialog",{attrs:{"custom-class":"invoice-dialog hasCancel",width:"723px",visible:e.invoiceDialogVisible},on:{"update:visible":function(t){e.invoiceDialogVisible=t}}},[i("p",{attrs:{slot:"title"},slot:"title"},[e.invoiceEdit?i("span",[i("i",{staticClass:"el- icon el-icon-edit-outline"}),e._v(" 修改发票")]):i("span",[e._v("+ 新建发票")])]),e._v(" "),i("el-invoice",{attrs:{invoiceDialogVisible:e.invoiceDialogVisible,invoiceEdit:e.invoiceEdit,invoiceForm:e.invoiceForm},on:{closeInvoiceDialog:e.closeInvoiceDialog}})],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"title"},[t("i",{staticClass:"el-icon el-icon-location-outline"}),this._v("收货人地址")])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"text"},[t("img",{staticClass:"img-icon",attrs:{src:i("RSAK")}}),this._v("微信支付")])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"text"},[t("img",{staticClass:"img-icon",attrs:{src:i("uqia")}}),this._v("支付宝")])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"title"},[t("i",{staticClass:"el-icon el-icon-tickets"}),this._v("发票：")])}]};var b=i("VU/8")(h,f,!1,function(e){i("y4zc")},"data-v-23f523c9",null);t.default=b.exports},bbid:function(e,t){},jQRG:function(e,t){},oH71:function(e,t,i){"use strict";i.d(t,"c",function(){return r}),i.d(t,"a",function(){return c}),i.d(t,"e",function(){return l}),i.d(t,"b",function(){return d}),i.d(t,"d",function(){return u});var a=i("//Fk"),s=i.n(a),o=i("mEoW"),n=i("Vo7i");function r(){return new s.a(function(e,t){Object(n.b)({url:o.a.ADDRESS_LIST,data:{page:1,pageSize:100}}).then(function(t){e(t)}).catch(function(e){t(e)})})}function c(e){return new s.a(function(t,i){Object(n.b)({url:o.a.ADD_ADDRESS,data:e}).then(function(e){t(e)}).catch(function(e){i(e)})})}function l(e){return new s.a(function(t,i){Object(n.b)({url:o.a.UPDATE_ADDRESS,data:e}).then(function(e){t(e)}).catch(function(e){i(e)})})}function d(e){return new s.a(function(t,i){Object(n.b)({url:o.a.DEL_ADDRESS,data:e}).then(function(e){t(e)}).catch(function(e){i(e)})})}function u(e){return new s.a(function(t,i){Object(n.b)({url:o.a.RESET_DEFAULT_ADDRESS,data:e}).then(function(e){t(e)}).catch(function(e){i(e)})})}},uqia:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozRjlDQTQxOEU0MjhFODExOENDODlGM0M1QjExMzcxQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzlCMEE0ODMwOEYxMUU4ODlDQ0U2RTgzRDZCREQ2QyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzlCMEE0NzMwOEYxMUU4ODlDQ0U2RTgzRDZCREQ2QyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM4Mzk1Njg1LTA0M2EtNDM1Ni1iMTE4LTAzN2FiYjBjN2YzYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRjlDQTQxOEU0MjhFODExOENDODlGM0M1QjExMzcxQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvYPdmsAAAFoSURBVHjaZFLPK0RRGD3fnaEmFpPmRyKLyUZZ2lnIhg3NHmUxsvAHWFFK/oXZWEpqFhZKycLKntBQisJGWYiMetO7x7kzb4pxX+d9P/q+e8/57rVs9QGO8TwMswTSAGhAL4IDRDKmOKbxnFHqIG3wCzDuK6/v77K//hpSLDg1rKOrVEeUhZXupDlWRMEaSepKFB5l+8TliES/9llU3NB2RdkJ4d3p10waRoS6cIY28ZC/SDCc1MRBZJQEWSGn3UqyL0LGw8al79OIjQ6z0FASv0uCm3DI0eMLcKeAXxalVzE/lt8ZgQsNT+JeV7gj7mPKv0nhifepKTEIs92W2mc5ZdXmg4ZvHRupcFR+jzBIUuJ9XiPck5iGNlwlrSjMhRMmjRqYcaYtzm5V0HSON4oLBi7JXhO2pfyhDVTvdxFmzpamMJGhUIh/i+EuaqankdHTqKlpunUHbYUfv8Yd1Maifeeb6cqPAAMAybp8JLChpuAAAAAASUVORK5CYII="},wsvf:function(e,t,i){"use strict";var a=i("//Fk"),s=i.n(a),o=i("oH71"),n=function(e){return new s.a(function(t,i){var a=e.$tools.getItem(e.addressFormData.provinceCode,1);if(a&&a.length)return e.cities=a,t(a);e.$fetchGet({url:e.$api.GET_CITY_LIST,params:{provinceCode:e.addressFormData.provinceCode}}).then(function(i){return e.$tools.setItem(e.addressFormData.provinceCode,i.data,1),e.cities=i.data,t(i.data)}).catch(function(e){return console.log(e),i(new Error("获取城市失败"))})})},r=function(e){return new s.a(function(t,i){var a=e.$tools.getItem(e.addressFormData.cityCode,1);if(console.log(a),a&&a.length)return e.areas=a,t(a);e.$fetchGet({url:e.$api.GET_AREA_LIST,params:{cityCode:e.addressFormData.cityCode}}).then(function(i){return e.$tools.setItem(e.addressFormData.cityCode,i.data,1),e.areas=i.data,t(i.data)}).catch(function(e){return console.log(e),i(new Error("获取地区失败"))})})},c={props:{addressForm:{type:Object,dafault:{receiver:"",provinceCode:"",cityCode:"",areaCode:"",addressDetail:"",phone:"",zipCode:"",isDefault:0}},addEdit:{type:Boolean},addressDialogVisible:{type:Boolean}},data:function(){return{provinces:[],cities:[],areas:[],rules:{receiver:[{required:!0,message:"请输入收货人姓名",trigger:"blur"}],provinceCode:[{required:!0,message:"请选择省",trigger:"change"}],cityCode:[{required:!0,message:"请选择市",trigger:"change"}],areaCode:[{required:!0,message:"请选择区",trigger:"change"}],addressDetail:[{required:!0,message:"请输入详细地址",trigger:"blur"}],phone:[{validator:function(e,t,i){!/^1[34578]\d{9}$/.test(t)&&t?i(new Error("请输入真实的手机号")):i()},type:"number",trigger:"blur"}],zipCode:[{validator:function(e,t,i){!/^\d{6}$/.test(t)&&t?i(new Error("请输入真实的邮编")):i()},type:"number",trigger:"blur"}]}}},watch:{addressDialogVisible:function(e,t){e&&this.addressFormData.provinceCode&&(n(this),r(this))}},computed:{addressFormData:function(){return this.addressForm}},created:function(){var e=this,t=this.$tools.getItem("province",1);t&&t.length?this.provinces=t:this.$fetchGet({url:this.$api.GET_PROVINCE_LIST}).then(function(t){e.$tools.setItem("province",t.data,1),e.provinces=t.data}),this.addressFormData.provinceCode&&(n(this),r(this))},methods:{changeProvince:function(e){var t=this;n(this).then(function(e){t.$set(t.addressFormData,"cityCode",t.cities[0].cityCode)}).then(function(e){return r(t)}).then(function(e){console.log("then",t.areas),t.$set(t.addressFormData,"areaCode",t.areas[0].areaCode)})},changeCity:function(e){var t=this;r(this).then(function(e){t.$set(t.addressFormData,"areaCode",t.areas[0].areaCode)})},saveAdd:function(e){var t=this;this.$refs[e].validate(function(i){if(!i)return console.log("error submit!!"),!1;t.addEdit?Object(o.e)(t.addressFormData).then(function(i){t.$emit("closeAddDialog"),t.$refs[e].resetFields()}):Object(o.a)(t.addressFormData).then(function(i){console.log(i),t.$emit("closeAddDialog",i),t.$refs[e].resetFields()})})}}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-form",{ref:"addressForm",staticClass:"addressForm",attrs:{model:e.addressFormData,rules:e.rules,"label-width":"92px"}},[i("el-form-item",{attrs:{label:"收货人",prop:"receiver"}},[i("el-input",{staticStyle:{width:"120px"},model:{value:e.addressFormData.receiver,callback:function(t){e.$set(e.addressFormData,"receiver",t)},expression:"addressFormData.receiver"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"所在地区",required:""}},[i("el-col",{attrs:{span:120}},[i("el-form-item",{attrs:{prop:"provinceCode"}},[i("el-select",{attrs:{placeholder:"省"},on:{change:e.changeProvince},model:{value:e.addressFormData.provinceCode,callback:function(t){e.$set(e.addressFormData,"provinceCode",t)},expression:"addressFormData.provinceCode"}},e._l(e.provinces,function(e){return i("el-option",{key:e.provinceCode,attrs:{label:e.provinceName,value:e.provinceCode}})}))],1)],1),e._v(" "),i("el-col",{attrs:{span:120}},[i("el-form-item",{attrs:{prop:"cityCode"}},[i("el-select",{attrs:{placeholder:"市"},on:{change:e.changeCity},model:{value:e.addressFormData.cityCode,callback:function(t){e.$set(e.addressFormData,"cityCode",t)},expression:"addressFormData.cityCode"}},e._l(e.cities,function(e){return i("el-option",{key:e.cityCode,attrs:{label:e.viewCityName,value:e.cityCode}})}))],1)],1),e._v(" "),i("el-col",{attrs:{span:120}},[i("el-form-item",{attrs:{prop:"areaCode"}},[i("el-select",{attrs:{placeholder:"区"},model:{value:e.addressFormData.areaCode,callback:function(t){e.$set(e.addressFormData,"areaCode",t)},expression:"addressFormData.areaCode"}},e._l(e.areas,function(e){return i("el-option",{key:e.areaCode,attrs:{label:e.areaName,value:e.areaCode}})}))],1)],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"详细地址",prop:"addressDetail"}},[i("el-input",{model:{value:e.addressFormData.addressDetail,callback:function(t){e.$set(e.addressFormData,"addressDetail",t)},expression:"addressFormData.addressDetail"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"手机号码",prop:"phone"}},[i("el-input",{staticStyle:{width:"220px"},attrs:{type:"tel"},model:{value:e.addressFormData.phone,callback:function(t){e.$set(e.addressFormData,"phone",t)},expression:"addressFormData.phone"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"邮政编码",prop:"zipCode"}},[i("el-input",{staticStyle:{width:"220px"},model:{value:e.addressFormData.zipCode,callback:function(t){e.$set(e.addressFormData,"zipCode",t)},expression:"addressFormData.zipCode"}})],1),e._v(" "),i("el-form-item",{attrs:{label:""}},[i("el-checkbox",{staticClass:"has_checked",attrs:{"true-label":1,"false-label":0,name:"type",label:"设置为默认地址"},model:{value:e.addressFormData.isDefault,callback:function(t){e.$set(e.addressFormData,"isDefault",t)},expression:"addressFormData.isDefault"}})],1),e._v(" "),i("el-form-item",{staticClass:"btn-wrap"},[i("el-button",{staticClass:"custom-bg custom-height",attrs:{type:"primary"},on:{click:function(t){e.saveAdd("addressForm")}}},[e._v("保存并使用")]),e._v(" "),e._t("default")],2)],1)},staticRenderFns:[]};var d=i("VU/8")(c,l,!1,function(e){i("bbid")},"data-v-a94fab28",null);t.a=d.exports},y4zc:function(e,t){}});