(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{1736:function(e,t,r){},2273:function(e,t,r){"use strict";r(1736)},2685:function(e,t,r){"use strict";r.r(t);var i=r(443),n=r.n(i),c=r(13);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={name:"Service",components:{VLazyImage:n.a},props:{title:{type:String,required:!0},description:{type:String,required:!1,default:""},icon:{type:Object,required:!0},link:{type:Object,required:!0},newItem:{type:Boolean,required:!1,default:!1}},computed:o(o({},Object(c.c)("device",["isMobile"])),{},{getWidth(){return this.isMobile?40:100},getHeight(){return this.isMobile?40:100}})},u=(r(2273),r(11)),p=Object(u.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"service",attrs:{target:e.link.target,href:e.link.href}},[e.icon?r("v-lazy-image",{staticClass:"icon",attrs:{src:e.icon.source,alt:e.icon.alt,width:e.getWidth,height:e.getHeight}}):e._e(),e._v(" "),r("div",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),!e.isMobile&&e.description?r("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.description,expression:"description"}],staticClass:"description"}):e._e(),e._v(" "),e.newItem?r("span",{staticClass:"badge"},[e._v(e._s(e.$t("reusable.label_new")))]):e._e()],1)}),[],!1,null,"68a1a8d5",null);t.default=p.exports}}]);
//# sourceMappingURL=service-component.js.map