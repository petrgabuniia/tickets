(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1554:function(e,t,n){},2088:function(e,t,n){"use strict";n(1554)},2671:function(e,t,n){"use strict";n.r(t);var r=n(273),a=n(13);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={name:"InfoBanner",mixins:[r.a],data:()=>({backgroundImage:""}),computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(a.e)("indexTabs",["infoBanner"])),created(){this.infoBanner.isImage&&(this.getBackgroundImage(),window.addEventListener("resize",this.getBackgroundImage))},destroyed(){window.removeEventListener("resize",this.getBackgroundImage)},methods:{getBackgroundImage(){const e=this.$_ImageHelpers_responsiveImage({desktop:this.infoBanner.images.desktopImg.img,tablet:this.infoBanner.images.tabletImg.img,mobile:this.infoBanner.images.mobileImg.img});this.backgroundImage=this.$_ImageHelpers_getBackgroundImage(e)}}},c=(n(2088),n(11)),g=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.infoBanner.isImage?n("a",{staticClass:"imageBanner",style:e.backgroundImage,attrs:{href:e.infoBanner.link.href,target:e.infoBanner.link.target}}):n("div",{staticClass:"infoBanner"},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"title"},[e._v(e._s(e.infoBanner.title))]),e._v(" "),e.infoBanner.link?n("a",{staticClass:"infoLink",attrs:{href:e.infoBanner.link.href,target:e.infoBanner.link.target}},[e._v(e._s(e.$t("link.readMore")))]):e._e()])])}),[],!1,null,"1a49bc2c",null);t.default=g.exports}}]);
//# sourceMappingURL=info-banner.js.map