(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1530:function(e,t,n){},2066:function(e,t,n){"use strict";n(1530)},2590:function(e,t,n){"use strict";n.r(t);n(9),n(4),n(10);var r=n(13),a=n(385);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={components:{Carousel:a.Carousel,Slide:a.Slide,"inspirational-banner-item":()=>n.e(258).then(n.bind(null,2681))},props:{banners:{type:Array,required:!0}},data:()=>({bannerPaginationColor:"rgba(21,38,73,0.2)",bannerPaginationColorActive:"#152649"}),computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(r.e)("device",["deviceType"])),methods:{paginationClick(){this.$refs.carousel.restartAutoplay()}}},s=(n(2066),n(11)),l=Object(s.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("carousel",{ref:"carousel",attrs:{"navigation-enabled":!1,"pagination-enabled":!0,"per-page":1,"scroll-per-page":!0,autoplay:!0,"autoplay-timeout":4e3,"autoplay-hover-pause":!1,loop:!0,"pagination-active-color":this.bannerPaginationColorActive,"pagination-color":this.bannerPaginationColor,"pagination-size":12,"touch-drag":!1,"mouse-drag":!1},on:{"pagination-click":this.paginationClick}},this._l(this.banners,(function(e,n){return t("slide",{key:n,attrs:{id:"insp-"+n}},[t("inspirational-banner-item",{attrs:{banner:e}})],1)})),1)],1)}),[],!1,null,"0c1aea58",null);t.default=l.exports}}]);
//# sourceMappingURL=inspirational-banner.js.map