(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{b0Sb:function(e,a,t){e.exports={main:"antd-pro-pages-requirement-detail-requirement-detail-main",requirementState:"antd-pro-pages-requirement-detail-requirement-detail-requirementState",scroll:"antd-pro-pages-requirement-detail-requirement-detail-scroll",list:"antd-pro-pages-requirement-detail-requirement-detail-list",time:"antd-pro-pages-requirement-detail-requirement-detail-time",text:"antd-pro-pages-requirement-detail-requirement-detail-text",name:"antd-pro-pages-requirement-detail-requirement-detail-name",interviewTime:"antd-pro-pages-requirement-detail-requirement-detail-interviewTime",addResume:"antd-pro-pages-requirement-detail-requirement-detail-addResume",mB8:"antd-pro-pages-requirement-detail-requirement-detail-mB8",mL10:"antd-pro-pages-requirement-detail-requirement-detail-mL10",mB10:"antd-pro-pages-requirement-detail-requirement-detail-mB10",mL20:"antd-pro-pages-requirement-detail-requirement-detail-mL20",mB20:"antd-pro-pages-requirement-detail-requirement-detail-mB20",borderBlue:"antd-pro-pages-requirement-detail-requirement-detail-borderBlue",cardBodyTitle:"antd-pro-pages-requirement-detail-requirement-detail-cardBodyTitle",p10:"antd-pro-pages-requirement-detail-requirement-detail-p10",pB15:"antd-pro-pages-requirement-detail-requirement-detail-pB15",checkBox:"antd-pro-pages-requirement-detail-requirement-detail-checkBox"}},lvIy:function(e,a,t){"use strict";t.r(a);t("IzEo");var n,r,l,i,c=t("bx4M"),m=(t("14J3"),t("BMrR")),s=(t("jCWc"),t("kPKH")),o=(t("+L6B"),t("2/Rp")),d=t("p0pE"),u=t.n(d),p=(t("2qtc"),t("kLXV")),f=(t("miYZ"),t("tsqr")),E=t("2Taf"),y=t.n(E),g=t("vZ4D"),h=t.n(g),v=t("l4Ni"),b=t.n(v),q=t("ujKo"),w=t.n(q),B=t("MhPg"),k=t.n(B),S=(t("tU7J"),t("wFql")),x=t("q1tI"),R=t.n(x),_=t("MuoO"),j=t("7DNP"),N=t("wd/R"),M=t.n(N),T=t("zHco"),C=(t("giR+"),t("fyUT")),D=t("jehZ"),O=t.n(D),z=(t("5NDa"),t("5rEg")),P=(t("OaEy"),t("2fM7")),L=(t("y8nQ"),t("Vl3Y"));function I(e){return function(){var a,t=w()(e);if(F()){var n=w()(this).constructor;a=Reflect.construct(t,arguments,n)}else a=t.apply(this,arguments);return b()(this,a)}}function F(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var V,H,A,J=L["a"].Item,U=P["a"].Option,Z=z["a"].TextArea,$=(n=Object(_["connect"])(function(e){var a=e.projects,t=e.menu,n=e.loading,r=e.positionManagement,l=e.levelManagement,i=e.projectManagement,c=e.requirementManagement;return{projects:a.list.data,position:r.list.data,level:l.list.data,projectManagement:i.list.data,detail:c.detail,companyId:t.companyId,loading:n.effects["requirementManagement/getDetail"]}}),r=L["a"].create(),n(l=r((i=function(e){k()(t,e);var a=I(t);function t(){var e;y()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=a.call.apply(a,[this].concat(r)),e.state={visible:!1},e.showModal=function(){e.setState({visible:!0}),e.getProjects()},e.getProjects=function(){var a=e.props,t=a.dispatch,n=a.companyId,r=a.id;t({type:"projects/getList",payload:{company_id:n}}),t({type:"levelManagement/getList",payload:{company_id:n}}),t({type:"positionManagement/getList",payload:{company_id:n}}),t({type:"projectManagement/getList",payload:{company_id:n}}),t({type:"requirementManagement/getDetail",payload:{company_id:n,id:r}})},e.handleOk=function(){var a=e.props,t=a.update,n=a.id,r=e.props,l=r.form,i=l.validateFields,c=l.resetFields;i(function(a,l){if(!a){c();var i=u()({},l,{company_id:r.companyId,id:n,schema:"OfferModifySchema"});t(i),e.setState({visible:!1})}}),e.setState({visible:!1})},e.handleCancel=function(){e.setState({visible:!1})},e.PMchange=function(a){var t=e.props.projectManagement,n=e.props,r=n.form.setFieldsValue,l=t.filter(function(e){return e.id===a});r({phone:l[0].phone,email:l[0].email})},e}return h()(t,[{key:"render",value:function(){var e=this.props,a=e.projects,t=e.position,n=e.level,r=e.projectManagement,l=e.detail,i=e.form.getFieldDecorator,c=this.state.visible,o={labelCol:{xs:{span:24},sm:{span:8},md:{span:6}},wrapperCol:{xs:{span:24},sm:{span:16},md:{span:18}}},d={labelCol:{sm:{span:20},md:{span:3}},wrapperCol:{sm:{span:24},md:{span:21}}};return R.a.createElement("span",null,R.a.createElement("a",{onClick:this.showModal},"\u8be6\u60c5"),R.a.createElement(p["a"],{title:"\u8be6\u60c5",visible:c,onOk:this.handleOk,onCancel:this.handleCancel,width:1e3,destroyOnClose:!0,footer:null},R.a.createElement(L["a"],null,R.a.createElement(m["a"],{gutter:{md:8,lg:20,xl:40}},R.a.createElement(s["a"],{span:10,md:12,sm:18},R.a.createElement(J,O()({label:"\u9700\u6c42\u540d\u79f0"},o),i("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9700\u6c42\u540d\u79f0"}],initialValue:l.name})(R.a.createElement(z["a"],{placeholder:"\u8bf7\u8f93\u5165\u9700\u6c42\u540d\u79f0",type:"text",readOnly:!0})))),R.a.createElement(s["a"],{span:10,md:12,sm:18},R.a.createElement(J,O()({label:"\u804c\u4f4d"},o),i("position_id",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u804c\u4f4d"}],initialValue:l.position_id})(R.a.createElement(P["a"],{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u804c\u4f4d",disabled:!0},t.map(function(e){return R.a.createElement(U,{value:e.id},e.name)})))))),R.a.createElement(m["a"],{gutter:{md:8,lg:20,xl:40}},R.a.createElement(s["a"],{span:10,md:12,sm:18},R.a.createElement(J,O()({label:"\u7ea7\u522b"},o),i("position_level_id",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ea7\u522b"}],initialValue:l.position_level_id})(R.a.createElement(P["a"],{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u7ea7\u522b",disabled:!0},n.map(function(e){return R.a.createElement(U,{value:e.id},e.name)}))))),R.a.createElement(s["a"],{span:10,md:12,sm:18},R.a.createElement(J,O()({label:"\u9700\u6c42\u4eba\u6570"},o),i("amount",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9700\u6c42\u4eba\u6570"},{message:"\u9700\u6c42\u4eba\u6570\u4e0d\u80fd\u4e3a\u8d1f\u6570",pattern:/^\d+(\.\d+)?$/},{pattern:/^\+?[1-9][0-9]*$/,message:"\u9700\u6c42\u4eba\u6570\u5fc5\u987b\u4e3a\u6b63\u6574\u6570"}],initialValue:l.amount})(R.a.createElement(C["a"],{style:{width:"100%"},min:1,placeholder:"\u8bf7\u8f93\u5165\u9700\u6c42\u4eba\u6570",readOnly:!0}))))),R.a.createElement(m["a"],{gutter:{md:8,lg:20,xl:40}},R.a.createElement(s["a"],{span:10,md:12,sm:18},R.a.createElement(J,O()({label:"\u9879\u76ee\u540d\u79f0"},o),i("project_id",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u9879\u76ee\u540d\u79f0"}],initialValue:l.project_id})(R.a.createElement(P["a"],{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u9879\u76ee\u540d\u79f0",disabled:!0},a.map(function(e){return R.a.createElement(U,{value:e.id},e.name)}))))),R.a.createElement(s["a"],{span:10,md:12,sm:18},R.a.createElement(J,O()({label:"\u9879\u76ee\u7ecf\u7406"},o),i("pm_id",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u9879\u76ee\u7ecf\u7406"}],initialValue:l.pm_id})(R.a.createElement(P["a"],{style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u9879\u76ee\u7ecf\u7406",disabled:!0},r.map(function(e){return R.a.createElement(U,{value:e.id},e.real_name)})))))),R.a.createElement(m["a"],{gutter:{md:8,lg:20,xl:40}},R.a.createElement(s["a"],{span:10,md:12,sm:18},R.a.createElement(J,O()({label:"\u7535\u8bdd"},o),i("phone",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7535\u8bdd\u53f7\u7801"},{message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7535\u8bdd\u53f7\u7801",pattern:/^1[3456789]\d{9}$/}],initialValue:l.pm&&l.pm.phone})(R.a.createElement(z["a"],{placeholder:"\u8bf7\u8f93\u5165\u7535\u8bdd",readOnly:!0})))),R.a.createElement(s["a"],{span:10,md:12,sm:18},R.a.createElement(J,O()({label:"\u90ae\u7bb1"},o),i("email",{rules:[{message:"\u8bf7\u8f93\u5165\u6b63\u786e\u90ae\u7bb1",pattern:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/}],initialValue:l.pm&&l.pm.email})(R.a.createElement(z["a"],{placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1",readOnly:!0,maxLength:64}))))),R.a.createElement(m["a"],{gutter:{md:8,lg:20,xl:40}},R.a.createElement(s["a"],{md:24,sm:18},R.a.createElement(J,O()({label:"\u9700\u6c42\u8be6\u60c5"},d),i("description",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:l.description})(R.a.createElement(Z,{autosize:{minRows:10,maxRows:20},readOnly:!0}))))))))}}]),t}(R.a.Component),l=i))||l),t("sRBo"),t("kaz8")),K=t("b0Sb"),W=t.n(K);function Y(e){return function(){var a,t=w()(e);if(Q()){var n=w()(this).constructor;a=Reflect.construct(t,arguments,n)}else a=t.apply(this,arguments);return b()(this,a)}}function Q(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var X,G,ee,ae=S["a"].Title,te=S["a"].Text,ne=(V=Object(_["connect"])(function(e){var a=e.engineer,t=e.loading;return{list:a.list,loading:t.effects["engineer/getList"]}}),V((A=function(e){k()(t,e);var a=Y(t);function t(){var e;y()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=a.call.apply(a,[this].concat(r)),e.state={},e.add=function(a){var t=e.props,n=t.dispatch,r=t.id,l=t.onSuccess;n({type:"interview/add",payload:{offer_id:r,engineer_id:a.id},callback:function(a){a?f["a"].success("\u63d0\u4ea4\u6210\u529f"):f["a"].error("\u9519\u8bef"),e.getList(),l()}})},e}return h()(t,[{key:"render",value:function(){var e=this.props;e.list,e.loading;return R.a.createElement(c["a"],{size:"small"},R.a.createElement(m["a"],null,R.a.createElement(s["a"],{md:12},R.a.createElement(ae,{level:2},R.a.createElement($["a"],{className:W.a.checkBox}),R.a.createElement(te,{style:{color:"#2979FF"}},"\u738b\u660e"))),R.a.createElement(s["a"],{md:12,style:{textAlign:"right"}},R.a.createElement(ae,{level:2},R.a.createElement(te,{style:{fontSize:14}},"\u603b\u6210\u7ee9"),"180"))),R.a.createElement(m["a"],{gutter:12},R.a.createElement(s["a"],{md:12},R.a.createElement(o["a"],{type:"primary",block:!0},"\u67e5\u770b\u7b80\u5386")),R.a.createElement(s["a"],{md:12},R.a.createElement(o["a"],{type:"primary",block:!0},"\u4eba\u5458\u8be6\u60c5"))))}}]),t}(R.a.Component),H=A))||H),re=ne;function le(e){return function(){var a,t=w()(e);if(ie()){var n=w()(this).constructor;a=Reflect.construct(t,arguments,n)}else a=t.apply(this,arguments);return b()(this,a)}}function ie(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var ce=S["a"].Title,me=S["a"].Text,se={cardHeadStyle:{backgroundColor:"#2979FF",color:"#fafafa",fontWeight:"bold",fontSize:20},subCardHeadStyle:{backgroundColor:"#2979FF",color:"#fafafa",fontSize:15}},oe=(X=Object(_["connect"])(function(e){var a=e.requirementManagement,t=e.menu,n=e.loading,r=e.interview;return{list:a.list.data,companyId:t.companyId,detail:r.detail,loading:n.effects["interview/getDetail"]}}),X((ee=function(e){k()(t,e);var a=le(t);function t(){var e;y()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=a.call.apply(a,[this].concat(r)),e.state={lists:[{},{},{},{},{},{},{},{},{},{}],logs:["16:00 \u7b80\u5386\u201c\u5c0f\u7ea2\u201d\u786e\u8ba4\u6ee1\u8db3\u9700\u6c42","16:00 \u7b80\u5386\u201c\u5c0f\u7ea2\u201d\u7b14\u8bd5\u7ed3\u675f\uff0c\u7b14\u8bd5\u6210\u7ee980\u5206","15:45 \u7b80\u5386\u201c\u5c0f\u660e\u201d\u9762\u8bd5\u7ed3\u675f\uff0c\u9762\u8bd5\u6210\u7ee965\u5206\uff0c\u8bc4\u4ef7\u4e3a\u63a8\u8350","15:30 \u7b80\u5386\u201c\u5c0f\u7ea2\u201d\u5f00\u59cb\u7b14\u8bd5","15:15 \u7b80\u5386\u201c\u5c0f\u660e\u201d\u5f00\u59cb\u9762\u8bd5","15:05 \u6536\u96c6\u5230\u7b80\u5386\u201c\u5c0f\u7ea2\u201d","15:00 \u6536\u96c6\u5230\u7b80\u5386\u201c\u5c0f\u660e\u201d","15:00 \u6536\u96c6\u5230\u7b80\u5386\u201c\u5c0f\u660e\u201d","15:00 \u6536\u96c6\u5230\u7b80\u5386\u201c\u5c0f\u660e\u201d","15:00 \u6536\u96c6\u5230\u7b80\u5386\u201c\u5c0f\u660e\u201d","15:00 \u6536\u96c6\u5230\u7b80\u5386\u201c\u5c0f\u660e\u201d","15:00 \u6536\u96c6\u5230\u7b80\u5386\u201c\u5c0f\u660e\u201d","15:00 \u6536\u96c6\u5230\u7b80\u5386\u201c\u5c0f\u660e\u201d"]},e.getProjects=function(){var a=new URL(window.location.href),t=a.searchParams.get("id"),n=e.props,r=n.dispatch,l=n.companyId;r({type:"requirementManagement/getList",payload:{company_id:l,id:t}}),r({type:"interview/getDetail",payload:{company_id:l,offer_id:t,sort_id:-1,schema:"InterviewClassifySchema"}})},e.deletes=function(a){var t=e.props.dispatch;t({type:"requirementManagement/delete",payload:{id:a},callback:function(e){e?(f["a"].success("\u5220\u9664\u6210\u529f"),window.history.back()):f["a"].error("\u9519\u8bef")}})},e.delete=function(a){p["a"].confirm({content:"\u786e\u5b9a\u5220\u9664\u9700\u6c42\u5417\uff1f",onOk:function(){return e.deletes(a)},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"})},e.warning=function(){p["a"].confirm({content:"\u786e\u5b9a\u5173\u95ed\u9700\u6c42\u5417\uff1f",onOk:function(){return console.log("\u544a\u8b66")},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"})},e.update=function(a){var t=e.props.dispatch;t({type:"requirementManagement/update",payload:u()({},a),callback:function(a){a?f["a"].success("\u63d0\u4ea4\u6210\u529f"):f["a"].error("\u9519\u8bef"),e.getProjects()}})},e.entryTime=function(a,t){var n=e.props.dispatch,r={date:a,schema:"InterviewEntryPutSchema",id:t.id};n({type:"interview/entryTime",payload:u()({},r),callback:function(a){a?f["a"].success("\u63d0\u4ea4\u6210\u529f"):f["a"].error("\u9519\u8bef"),e.getProjects()}})},e.toResumeDetails=function(a){var t=e.props.dispatch;t(j["routerRedux"].push("/resumeDetails?id=".concat(a)))},e.goBack=function(){window.history.back()},e.disabledDate=function(e){return e&&e<M()().endOf("day")},e.cancelRequirement=function(a){var t=e.props.dispatch;t({type:"interview/update",payload:{schema:"InterviewStatusPutSchema",status:"reject_by_engineer",id:a},callback:function(a){a?f["a"].success("\u63d0\u4ea4\u6210\u529f"):f["a"].error("\u9519\u8bef"),e.getProjects()}})},e.deleteRequirement=function(a){var t=e.props.dispatch;t({type:"interview/delete",payload:{id:a},callback:function(a){a?f["a"].success("\u5220\u9664\u6210\u529f"):f["a"].error("\u9519\u8bef"),e.getProjects()}})},e}return h()(t,[{key:"componentDidMount",value:function(){this.getProjects()}},{key:"render",value:function(){var e=this.props,a=(e.list,e.detail),t=void 0===a?{}:a,n=e.loading,r=(t.cv_new,t.cv_pass,t.entry,t.interview_new,t.interview_pass,t.reject,R.a.createElement("div",null,R.a.createElement(o["a"],{icon:"left",onClick:this.goBack},"\u8fd4\u56de"),R.a.createElement("div",{style:{marginTop:"12px",fontSize:14,color:"#2979FF"}},"\u9700\u6c42\u5217\u8868 / \u9700\u6c42\u8be6\u60c5")));return R.a.createElement(T["a"],{title:r,loading:n,hiddenBreadcrumb:!0},R.a.createElement(c["a"],{title:"\u57fa\u672c\u4fe1\u606f",headStyle:se.cardHeadStyle,bodyStyle:{paddingLeft:30,paddingRight:30},size:"small",className:W.a.mB20,extra:R.a.createElement("div",null,R.a.createElement(o["a"],{size:"small",style:{marginRight:15}},"\u7f16\u8f91\u9700\u6c42"),R.a.createElement(o["a"],{size:"small"},"\u5173\u95ed\u9700\u6c42"))},R.a.createElement(ce,{level:4,className:W.a.cardBodyTitle},"1 \u57fa\u672c\u4fe1\u606f"),R.a.createElement("div",{className:W.a.pB15},R.a.createElement(m["a"],{className:W.a.p10},R.a.createElement(s["a"],{md:5},R.a.createElement(me,null,"\u804c\u4f4d\u540d\u79f0\uff1aDBA")),R.a.createElement(s["a"],{md:5},R.a.createElement(me,null,"\u804c\u4f4d\u7c7b\u578b\uff1a\u5f00\u53d1")),R.a.createElement(s["a"],{md:5},R.a.createElement(me,null,"\u670d\u52a1\u65b9\u5f0f\uff1a\u73b0\u573a\u670d\u52a1")),R.a.createElement(s["a"],{md:5},R.a.createElement(me,null,"\u516c\u53f8\uff1a\u4e2d\u4fe1\u5efa\u6295\u6709\u9650\u516c\u53f8")),R.a.createElement(s["a"],{md:4},R.a.createElement(me,null,"\u521b\u5efa\u65f6\u95f4\uff1a2020.2.13"))),R.a.createElement(m["a"],{className:W.a.p10},R.a.createElement(s["a"],{md:5},R.a.createElement(me,null,"\u5de5\u4f5c\u5730\u70b9\uff1a\u5317\u4eac\u5e02\u6d77\u6dc0\u533a\u77e5\u6625\u8def")),R.a.createElement(s["a"],{md:5},R.a.createElement(me,null,"\u9700\u6c42\u72b6\u6001\uff1a\u8fdb\u884c\u4e2d")))),R.a.createElement(ce,{level:4,className:W.a.cardBodyTitle},"2 \u804c\u4f4d\u8981\u6c42"),R.a.createElement("div",{className:W.a.pB15},R.a.createElement(m["a"],{className:W.a.p10},R.a.createElement(s["a"],{md:5},R.a.createElement(me,null,"\u7ecf\u9a8c\uff1a3~5\u5e74\u5de5\u4f5c\u7ecf\u9a8c")),R.a.createElement(s["a"],{md:5},R.a.createElement(me,null,"\u7ecf\u9a8c\uff1a3~5\u5e74\u5de5\u4f5c\u7ecf\u9a8c")),R.a.createElement(s["a"],{md:5},R.a.createElement(me,null,"\u7ecf\u9a8c\uff1a3~5\u5e74\u5de5\u4f5c\u7ecf\u9a8c"))),R.a.createElement(m["a"],{className:W.a.p10},R.a.createElement(s["a"],{md:24},R.a.createElement(me,{className:W.a.m10},"\u804c\u4f4d\u63cf\u8ff0"),R.a.createElement("div",null,R.a.createElement(me,null,"\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002\u8fd9\u662f\u4e00\u4e2a\u597d\u804c\u4f4d\u3002"))))),R.a.createElement(ce,{level:4,className:W.a.cardBodyTitle},"3 \u62db\u8058\u8981\u6c42"),R.a.createElement("div",{className:W.a.pB15},R.a.createElement(m["a"],{className:W.a.p10},R.a.createElement(s["a"],{md:24},R.a.createElement(me,null,"\u59d4\u6258\u4ee3\u7b14\u8bd5\uff1a\u662f"),R.a.createElement(o["a"],{size:"small",type:"primary",className:W.a.mL20},"\u4e0a\u4f20\u5f85\u9762\u7b80\u5386"))))),R.a.createElement(c["a"],{title:"\u63a8\u8350\u7b80\u5386",headStyle:se.cardHeadStyle,size:"small",className:W.a.mB20,extra:R.a.createElement(o["a"],{size:"small"},"\u66f4\u591a\u7b80\u5386")},R.a.createElement("div",null,R.a.createElement(m["a"],{gutter:[24,16]},this.state.lists.map(function(e,a){return R.a.createElement(s["a"],{md:6},R.a.createElement(re,{list:e,key:a}))}))),R.a.createElement(m["a"],null,R.a.createElement(s["a"],{offset:8,md:8},R.a.createElement(o["a"],{type:"danger",block:!0},"\u4e00\u952e\u5bf9\u6bd4\uff080/5")))),R.a.createElement(c["a"],{title:"\u5b9e\u65f6\u8fdb\u5ea6\u8ffd\u8e2a",headStyle:se.cardHeadStyle,className:W.a.mB20,size:"small"},R.a.createElement(m["a"],{gutter:16},R.a.createElement(s["a"],{md:10},R.a.createElement(c["a"],{className:[W.a.mB20,W.a.borderBlue]},R.a.createElement(m["a"],null,R.a.createElement(s["a"],{md:6}),R.a.createElement(s["a"],{md:6}),R.a.createElement(s["a"],{md:6}),R.a.createElement(s["a"],{md:6}))),R.a.createElement(c["a"],{className:[W.a.mB20,W.a.borderBlue]}),R.a.createElement(c["a"],{className:[W.a.mB20,W.a.borderBlue]})),R.a.createElement(s["a"],{md:14},R.a.createElement(c["a"],{className:[W.a.mB20,W.a.borderBlue]},R.a.createElement(ce,{level:4},"2\u670825\u65e5\u62db\u8058\u8fdb\u5c55\u8ddf\u8e2a"),this.state.logs.map(function(e,a){return R.a.createElement("p",{key:a,className:W.a.mB8},e)})),R.a.createElement(c["a"],{className:[W.a.mB20,W.a.borderBlue],title:"\u4eba\u5458\u7b14\u8bd5\u76d1\u63a7",headStyle:se.subCardHeadStyle,size:"small"}),R.a.createElement(c["a"],{className:[W.a.mB20,W.a.borderBlue],title:"\u4eba\u5458\u9762\u8bd5\u76d1\u63a7",headStyle:se.subCardHeadStyle,size:"small"})))))}}]),t}(x["Component"]),G=ee))||G);a["default"]=oe}}]);