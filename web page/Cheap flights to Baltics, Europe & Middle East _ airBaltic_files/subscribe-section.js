(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{1540:function(e,t,r){},1541:function(e,t,r){},2074:function(e,t,r){"use strict";r(1540)},2075:function(e,t,r){"use strict";r(1541)},2530:function(e,t,r){"use strict";r.r(t);r(9),r(4),r(10);var i=r(1971),s=r(13),n=r(14),c=r(1);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={name:"SubscribeForm",components:{"input-field":()=>Promise.all([r.e(5),r.e(17),r.e(58),r.e(26),r.e(256)]).then(r.bind(null,280)),ElementButton:()=>Promise.resolve().then(r.bind(null,607))},mixins:[n.validationMixin,i.a],props:{subscribedRedirectURL:{type:String,required:!0},subscribeSource:{type:String,required:!0}},data:()=>({email:"",formErrors:[]}),validations:{email:{required:c.required,email:c.email}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(s.e)("main",["selectedLang","selectedCountry"])),methods:{setEmail(e){this.$v.email.$model=e,this.onInput(),this.onChange()}}},a=(r(2074),r(11)),b={name:"SubscribeSection",components:{SubscribeForm:Object(a.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"subscribe-form",on:{submit:function(t){return t.preventDefault(),e.subscribeWithApi.apply(null,arguments)}}},[r("div",{staticClass:"subscribe-input"},[r("input-field",{attrs:{type:"email",name:"email",field:"email",error:e.formErrors.length>0,"error-msg":e.$t(e.formErrors[0]),label:e.$t("footerWide.subscribe.label"),value:e.email},on:{input:e.setEmail}}),e._v(" "),r("span",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.$t("privacyPolicyAgreement.subscribe"),expression:"$t('privacyPolicyAgreement.subscribe')"}],staticClass:"privacy-policy-agreement"})],1),e._v(" "),r("element-button",{staticClass:"btn-blue",attrs:{text:e.$t("buttons.submitBtnText")},on:{click:function(t){return t.preventDefault(),e.subscribeWithApi.apply(null,arguments)}}})],1)}),[],!1,null,"1eeee6c2",null).exports},props:{section:{type:Object,required:!0}}},p=(r(2075),Object(a.a)(b,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("div",{staticClass:"subscribe-section"},[t("h2",{staticClass:"section-title"},[this._v(this._s(this.section.title))]),this._v(" "),t("subscribe-form",{attrs:{"subscribed-redirect-u-r-l":this.$t("footerWide.subscribedURL"),"subscribe-source":this.$t("footerWide.subscribeSource")}})],1)])}),[],!1,null,"4a18fb28",null));t.default=p.exports}}]);
//# sourceMappingURL=subscribe-section.js.map