(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{TxNF:function(e,t,n){"use strict";n.r(t);n("IzEo");var a,r,c,o,i,l=n("bx4M"),s=(n("g9YV"),n("wCAj")),u=(n("/zsF"),n("PArb")),p=(n("5Dmo"),n("3S7+")),f=(n("2qtc"),n("kLXV")),d=(n("miYZ"),n("tsqr")),m=n("p0pE"),g=n.n(m),h=n("2Taf"),v=n.n(h),y=n("vZ4D"),b=n.n(y),E=n("l4Ni"),k=n.n(E),w=n("ujKo"),C=n.n(w),P=n("MhPg"),j=n.n(P),S=(n("y8nQ"),n("Vl3Y")),x=n("q1tI"),R=n.n(x),D=n("MuoO"),L=n("7DNP"),M=n("zHco"),F=n("/6kB"),O=(n("14J3"),n("BMrR")),I=(n("jCWc"),n("kPKH")),_=n("jehZ"),q=n.n(_),z=(n("5NDa"),n("5rEg"));n("17x9");function A(e){return function(){var t,n=C()(e);if(B()){var a=C()(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return k()(this,t)}}function B(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var K,N,T,V,J=S["a"].Item,Y=(a=Object(D["connect"])(function(e){var t=e.projectManagement,n=e.loading;return{list:t.list,loading:n.effects["projectManagement/getList"]}}),r=S["a"].create(),a(c=r((i=o=function(e){j()(n,e);var t=A(n);function n(){var e;v()(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),e.state={visible:!1},e.stopPropagation=function(e){e&&e.stopPropagation?e.stopPropagation():window.event.cancelBubble=!0},e.showModal=function(t){e.stopPropagation(t),e.setState({visible:!0})},e.handleOk=function(){var t=e.props,n=t.form.validateFields;n(function(n,a){if(!n){var r=g()({},a,{id:t.id,schema:"ProjectPutSchema"});e.update(r)}})},e.update=function(t){var n=e.props.dispatch;n({type:"projects/update",payload:g()({},t),callback:function(t){t?(d["a"].success("\u63d0\u4ea4\u6210\u529f"),e.success()):d["a"].error("\u9519\u8bef")}})},e.success=function(){var t=e.props,n=t.form.resetFields,a=e.props.onSuccess;a(),e.setState({visible:!1}),n()},e.handleCancel=function(){e.setState({visible:!1})},e}return b()(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.form.getFieldDecorator,a=this.state.visible,r={labelCol:{xs:{span:24},sm:{span:8},md:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16},md:{span:16}}};return R.a.createElement("span",{onClick:function(t){return e.stopPropagation(t)}},R.a.createElement("span",null,R.a.createElement("a",{onClick:function(t){return e.showModal(t)}},"\u7f16\u8f91")),R.a.createElement(f["a"],{title:"\u4fee\u6539",visible:a,onOk:this.handleOk,onCancel:this.handleCancel,width:500,destroyOnClose:!0,maskClosable:!1},R.a.createElement(S["a"],null,R.a.createElement(O["a"],{gutter:{md:20,lg:20,xl:40}},R.a.createElement(I["a"],{span:10,md:20,sm:18},R.a.createElement(J,q()({label:"\u9879\u76ee\u540d\u79f0"},r),n("name",{initialValue:t.name,rules:[{message:"\u9879\u76ee\u540d\u79f0\u4e0d\u53ef\u4e3a\u7a7a",required:!0},{max:16,message:"\u9879\u76ee\u540d\u79f0\u6700\u5927\u957f\u5ea6\u4e3a16"}]})(R.a.createElement(z["a"],{placeholder:"\u8bf7\u8f93\u5165\u9879\u76ee\u540d\u79f0"}))))))))}}]),n}(R.a.Component),o.defaultProps={name:"",id:""},c=i))||c)||c),Z=Y;function H(e){return function(){var t,n=C()(e);if(W()){var a=C()(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return k()(this,t)}}function W(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var Q=(K=Object(D["connect"])(function(e){var t=e.projects,n=e.loading;return{list:t.list,loading:n.effects["projects/getList"]}}),N=S["a"].create(),K(T=N((V=function(e){j()(n,e);var t=H(n);function n(){var e;v()(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),e.state={page:1,per_page:10},e.onSelectChange=function(t){e.setState({selectedRowKeys:t})},e.getSearch=function(){e.setState({page:1,per_page:10},function(){return e.getList()})},e.getList=function(){var t=e.props.dispatch;t({type:"projects/getList",payload:g()({},e.state,{schema:"ProjectWithPms"})})},e.handleChange=function(t){e.setState({page:t.current},function(){e.getList()})},e.update=function(t){var n=e.props.dispatch;n({type:"purchase/update",payload:g()({},t),callback:function(t){t?d["a"].success("\u63d0\u4ea4\u6210\u529f"):d["a"].error("\u9519\u8bef"),e.getList()}})},e.deleteFuc=function(t){var n=e.props.dispatch;n({type:"projects/delete",payload:{id:t},callback:function(t){t?d["a"].success("\u5220\u9664\u6210\u529f"):d["a"].error("\u9519\u8bef"),e.getList()}})},e.delete=function(t,n){n&&n.stopPropagation?n.stopPropagation():window.event.cancelBubble=!0,f["a"].confirm({content:"\u786e\u5b9a\u5220\u9664\u5417\uff1f",onOk:function(){return e.deleteFuc(t)},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"})},e.toDetail=function(t){var n=e.props.dispatch;n(L["routerRedux"].push("/projectManager/projectDetail/".concat(t)))},e}return b()(n,[{key:"componentDidMount",value:function(){this.getList()}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.loading,r={pageSize:10,total:n.page_info.total},c=[{title:"\u5e8f\u53f7",dataIndex:"number",render:function(e,t,n){return n+1}},{title:"\u9879\u76ee\u540d\u79f0",dataIndex:"name"},{title:"\u9879\u76ee\u7ecf\u7406",dataIndex:"pms",render:function(e){return R.a.createElement(p["a"],{placement:"topLeft",title:e.length>0&&e.map(function(e){return R.a.createElement("span",null,e.real_name," \xa0")})},e&&e[0]&&e[0].real_name," ",e.length>1&&"...")}},{title:"\u4eba\u5458\u6570\u91cf",dataIndex:"engineer_count"},{title:"\u64cd\u4f5c",render:function(t){return R.a.createElement(x["Fragment"],null,R.a.createElement(Z,{id:t.id,name:t.name,onSuccess:e.getList}),R.a.createElement(u["a"],{type:"vertical"}),R.a.createElement("a",{onClick:function(n){return e.delete(t.id,n)}},"\u5220\u9664"))}}];return R.a.createElement(M["a"],null,R.a.createElement(l["a"],{bordered:!1,title:R.a.createElement(R.a.Fragment,null,R.a.createElement(F["a"],{onSuccess:this.getList})," \u9879\u76ee\u7ba1\u7406")},R.a.createElement("div",null,R.a.createElement(s["a"],{loading:a,onRow:function(t){return{onClick:function(){e.toDetail(t.id)}}},columns:c,rowKey:function(e){return e.id},dataSource:n.data,onChange:this.handleChange,pagination:g()({},r)}))))}}]),n}(x["PureComponent"]),T=V))||T)||T);t["default"]=Q}}]);