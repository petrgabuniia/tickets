(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1733:function(e,t,n){},2270:function(e,t,n){"use strict";n(1733)},2682:function(e,t,n){"use strict";n.r(t);var r=n(13),s=n(443),i=n.n(s),a=n(6),o=n.n(a),c=n(7),b=n(16),d=n.n(b);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={components:{VLazyImage:i.a},props:{banner:{type:Object,required:!0},origDestLabels:{type:Object,required:!0},origDestData:{type:Object,required:!0},selectedCountry:{type:String,required:!0},selectedLang:{type:String,required:!0}},computed:u(u({},Object(r.c)("device",["isDesktop","isTablet"])),{},{intersectionOptions:()=>({rootMargin:"10%"}),monthName(){const e=(new o.a).add(this.banner.monthId-2,"months").date(1);return o.a.months(parseInt(e.format("M")))},formattedPrice(){return Math.trunc(this.banner.price)},destinImage(){return"/destinations-silo-2019/".concat(this.banner.dest.toLowerCase(),".jpg?").concat(d.a.assetsVersion)},originName(){return this.getCityName(this.banner.orig)},destinName(){return this.getCityName(this.banner.dest)},bannerHeight(){return this.isDesktop?360:this.isTablet?160:180},bannerHref(){const e="".concat(d.a.newIbeUrl,"/").concat(this.selectedLang,"/fb/calendar"),t={p:"BTI",sref:"BBX",pos:this.selectedCountry,l:this.selectedLang,originCode:this.banner.orig,destinCode:this.banner.dest,originType:"A",destinType:"A",selectedMonth:Number(this.banner.monthId-1),numAdt:1,tripType:"oneway"};return e+"?"+Object.keys(t).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e])).join("&")},ariaLabel(){return this.originName+" - "+this.destinName}}),methods:{getCityName(e){return this.origDestData&&void 0!==this.origDestData["".concat(e,"A")]?this.origDestData["".concat(e,"A")].city:e},getItemLabelTranslated(e){const t=e.toLowerCase();return Object(c.a)(this.origDestLabels,t,"")}}},g=(n(2270),n(11)),h=Object(g.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"bbb-item",attrs:{"aria-label":e.ariaLabel,href:e.bannerHref}},[n("v-lazy-image",{staticClass:"image",attrs:{src:e.destinImage,alt:e.destinName,height:e.bannerHeight,"intersection-options":e.intersectionOptions}}),e._v(" "),n("div",{staticClass:"labels"},e._l(e.banner.labels,(function(t,r){return n("div",{key:e.banner.orig+"-"+e.banner.dest+"-"+r},[e._v(e._s(e.getItemLabelTranslated(t)))])})),0),e._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"origin"},[e._v(e._s(e.originName)+" –")]),e._v(" "),n("div",{staticClass:"destination"},[e._v(e._s(e.destinName))]),e._v(" "),n("div",{staticClass:"details"},[n("div",[e._v(e._s(e.$t("bestBuyBanners.from"))+" "),n("span",{staticClass:"price"},[e._v(e._s(e.formattedPrice)),n("sup",[e._v("99")]),e._v("€")])]),e._v(" "),n("div",{staticClass:"month"},[e._v(e._s(e.monthName))])]),e._v(" "),n("span",{staticClass:"cta"},[e._v(e._s(e.$t("buttons.bookNow")))])])],1)}),[],!1,null,"3b764f4d",null);t.default=h.exports}}]);
//# sourceMappingURL=best-buy-banner.js.map