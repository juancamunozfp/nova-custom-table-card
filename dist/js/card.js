!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(6)},function(t,e,n){Nova.booting(function(t,e){t.component("custom-table-card",n(2))})},function(t,e,n){var r=n(3)(n(4),n(5),!1,null,null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r,i,s){var o,a=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,a=t.default);var c,u="function"==typeof a?a.options:a;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId=i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):r&&(c=r),c){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:o,exports:a,options:u}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["card"],data:function(){return{rows:[],header:[],title:"",viewall:!1}},mounted:function(){var t=this,e=this.card,n=e.header,r=e.rows,i=e.title,s=e.refresh,o=e.uuid,a=e.viewall;this.rows=r,this.header=n,this.title=i,this.viewall=a,s&&setInterval(function(){Nova.request().get("/nova-api/cards").then(function(e){var n=e.data.find(function(t){return t.uuid===o});t.rows=n.rows})},1e3*s)}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("card",{staticClass:"flex flex-col"},[t.title?n("h1",{staticClass:"py-6 text-90 font-normal text-2xl text-left pl-4"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("table",{staticClass:"table w-full",attrs:{cellpadding:"0",cellspacing:"0","data-testid":"resource-table"}},[n("thead",[n("tr",[t._l(t.header,function(e){return n("th",{class:e.class,attrs:{id:e.id}},[n("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("\n                "+t._s(e.data)+"\n              ")])])}),t._v(" "),n("th")],2)]),t._v(" "),n("tbody",t._l(t.rows,function(e){return n("tr",[t._l(e.columns,function(e){return n("td",{class:e.class,attrs:{id:e.id},domProps:{innerHTML:t._s(e.data)}})}),t._v(" "),n("td",{staticClass:"td-fit text-right pr-6"},[e.view?n("span",[n("router-link",{staticClass:"cursor-pointer text-70 hover:text-primary mr-3",attrs:{to:e.view,title:t.__("View")}},[n("icon",{attrs:{type:"view",width:"22",height:"18","view-box":"0 0 22 16"}})],1)],1):t._e()])],2)}),0)])]),t._v(" "),t.viewall?n("a",{staticClass:"btn btn-default btn-primary mt-1",attrs:{href:t.viewall.link}},[t._v(t._s(t.viewall.label))]):t._e()],1)},staticRenderFns:[]}},function(t,e){}]);