(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{mJ7X:function(e,t,n){"use strict";n.r(t);n("tU7J");var r=n("wFql"),a=n("2Taf"),i=n.n(a),o=n("vZ4D"),c=n.n(o),u=n("l4Ni"),l=n.n(u),s=n("ujKo"),f=n.n(s),p=n("MhPg"),d=n.n(p),h=n("q1tI"),m=n.n(h),v=n("HTZB"),y=n("QLqA"),g=n.n(y);function w(e){return function(){var t,n=f()(e);if(E()){var r=f()(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return l()(this,t)}}function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var b=function(e){d()(n,e);var t=w(n);function n(){return i()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var e=r["a"].Title,t=this.props,n=t.height,a=t.data,i=t.items,o=t.title,c=new g.a;c.setState("type","");var u=c.createView().source(a).transform({type:"fold",fields:i,key:"type",value:"value"}),l=["#2b6cbb","#54ca76"],s=[];return i.forEach(function(e,t){s.push({value:e,marker:{symbol:"square",fill:l[t],radius:5}})}),m.a.createElement("div",{style:{height:n}},o&&m.a.createElement(e,{level:4,style:{textAlign:"center"}},o),m.a.createElement(v["Chart"],{height:o?n-40:n,forceFit:!0,data:u,padding:"auto"},m.a.createElement(v["Legend"],{custom:!0,items:s}),m.a.createElement(v["Axis"],{name:"value",position:"left"}),m.a.createElement(v["Tooltip"],null),m.a.createElement(v["Geom"],{type:"interval",position:"week*value",color:["type",function(e){return e===i[0]?l[0]:e===i[1]?l[1]:void 0}],adjust:[{type:"dodge",marginRatio:1/32}]})))}}]),n}(m.a.Component);t["default"]=b}}]);