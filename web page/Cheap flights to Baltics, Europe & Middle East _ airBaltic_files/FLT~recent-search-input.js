(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1271:function(e,t,i){"use strict";var o=i(13);function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const s={computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},Object(o.e)("eHorizonSearchForm",["origin"])),methods:{$_searchSessionStorageMixin_updateOriginSessionStorage(e){let t=this.$store.state.eHorizonSearchForm.origin.typeahead.value.code,i=this.$store.state.eHorizonSearchForm.origin.typeahead.value.type;e&&t!==sessionStorage.getItem("origin")&&this.resetSearchSessionStorage(),t&&(sessionStorage.setItem("origin",t),sessionStorage.setItem("originType",i))},$_searchSessionStorageMixin_updateDestinSessionStorage(e){let t=this.$store.state.eHorizonSearchForm.destin.value.code,i=this.$store.state.eHorizonSearchForm.destin.value.type;e&&t!==sessionStorage.getItem("destin")&&this.resetSearchSessionStorage(),t&&(sessionStorage.setItem("destin",t),sessionStorage.setItem("destinType",i))},resetSearchSessionStorage(){sessionStorage.setItem("voucher",""),sessionStorage.setItem("adtPassengers",""),sessionStorage.setItem("chdPassengers",""),sessionStorage.setItem("infPassengers",""),sessionStorage.setItem("tripType",""),sessionStorage.setItem("departure",""),sessionStorage.setItem("return","")},$_searchSessionStorageMixin_updateVoucherSessionStorage(){const e=this.$store.state.eHorizonSearchForm.promoCodes.promoCodes.filter(e=>""!==e.code).map(e=>e.code).join(",");sessionStorage.setItem("voucher",e)}}};t.a=s},1274:function(e,t,i){"use strict";var o=i(13),r=i(1208),n=i(1271);function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const c={computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},Object(o.e)("eHorizonSearchForm",["origin"])),mixins:[n.a],methods:{onOriginFocused(){this.showOriginTypeahead()},originCloseAll(){this.$store.dispatch("eHorizonSearchForm/origin/closeTypeahead")},showOriginTypeahead(){this.$store.commit("eHorizonSearchForm/origin/typeahead/open")},onOriginFilter:Object(r.a)((function(e){this.$store.dispatch("eHorizonSearchForm/origin/doFilter",e)}),0),onOriginOpenUpdate(e){!e&&this.origin.typeahead.open&&this.originCloseAll()},onOriginSelect(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.$store.dispatch("eHorizonSearchForm/selectOrigin",e),t&&this.$_searchSessionStorageMixin_updateOriginSessionStorage(i)},onOriginLabelUpdate(e){this.$store.dispatch("eHorizonSearchForm/origin/setSelectedLabel",e)}}};t.a=c},1277:function(e,t,i){"use strict";var o=i(13),r=i(1208),n=i(272),s=i(1271);function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const h={computed:c(c({},Object(o.e)("searchForm",["destin"])),Object(o.e)("device",["deviceType"])),mixins:[s.a],methods:{onDestinFocused(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(void 0===this.origin.value.code)this.$refs.origin.focus();else{this.destin.typeahead.open||this.showDestinTypeahead(!1,e)}},destinCloseAll(){this.$store.dispatch("eHorizonSearchForm/destin/closeTypeahead")},onDestinCountrySelected(e){this.$store.dispatch("eHorizonSearchForm/destin/updateCountry",e)},showDestinTypeahead(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$store.commit("eHorizonSearchForm/destin/typeahead/open"),this.$refs.destin.hasFocus()||"mobile"===this.deviceType||this.$refs.destin.focus(),t&&n.a.labelsSeen(t),e||n.a.destinTypeaheadNoResultsShow(this.origin.value.code)},onDestinFilter:Object(r.a)((function(e){this.$store.dispatch("eHorizonSearchForm/destin/doFilter",e),this.$store.commit("eHorizonSearchForm/destin/setSelectedLabel","label_all")}),0),onDestinOpenUpdate(e){!e&&this.destin.typeahead.open&&this.destinCloseAll()},onDestinLabelUpdate(e){this.$store.commit("eHorizonSearchForm/destin/setSelectedLabel",e)},onDestinSelected(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];void 0!==e.bxClickUrl&&n.a.onDestinSelected(this.origin.value.code,e.code),this.$store.dispatch("eHorizonSearchForm/destin/onValueSelect",e),t&&this.$_searchSessionStorageMixin_updateDestinSessionStorage(i)}}};t.a=h},1278:function(e,t,i){"use strict";i(154);var o=i(6),r=i.n(o),n=i(16),s=i.n(n),a=i(2),c=i(19),l=i(272),h=i(72),d=i(1311);const p={mixins:[d.a],methods:{loadSearch(e){var t;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.addSearchToCookie(e),l.a.fsfRecentSearch(e);const o=this.getFlightDate(e.departure),r=this.getFlightDate(e.return),n=1===e.tripType?"oneway":"return";if(!o||null!==(t=e.promoCodes)&&void 0!==t&&t.length){this.$_fsfMixin_openFsfModal(!1,!0),this.getOrigDestData(),this.$store.commit("eHorizonSearchForm/setTripType",n),this.$store.commit("eHorizonSearchForm/paxSelector/setAdults",parseInt(e.adults)),this.$store.commit("eHorizonSearchForm/paxSelector/setChildren",parseInt(e.children)),this.$store.commit("eHorizonSearchForm/paxSelector/setInfants",parseInt(e.infants));let t=[];if(e.promoCodes&&e.promoCodes.forEach((e,i)=>{e&&t.push({index:i,code:e,error:""})}),this.$store.commit("eHorizonSearchForm/promoCodes/setPromoCodes",t),this.$store.dispatch("eHorizonSearchForm/calendar/updateDepartureDate",o),this.$store.dispatch("eHorizonSearchForm/calendar/updateReturnDate",r),origDestData){const t=origDestData[e.fromCode+e.fromType],i=origDestData[e.toCode+e.toType];this.$store.dispatch("eHorizonSearchForm/selectOrigin",t),this.$store.dispatch("eHorizonSearchForm/destin/onValueSelect",i)}return}let c=s.a.newIbeUrl+"/"+a.default.i18n.locale()+"/fb/availability?"+(""!==o?"&departure="+o:"")+(""!==r?"&return="+r:"")+"&originCode="+e.fromCode+"&destinCode="+e.toCode+"&tripType="+n+"&originType="+e.fromType+"&destinType="+e.toType+(i?"&sref="+i:"")+"p=bti&pos=LV&l="+a.default.i18n.locale()+"&numAdt="+e.adults;e.children>0&&(c+="&numChd="+e.children),e.infants>0&&(c+="&numInf="+e.infants),window.location.href=c},getAirportType:e=>"LON"===e||"MIL"===e||"TCI"===e?"C":"A",getFlightDate:e=>r()().diff(r()(e),"days")<=0?e:"",addSearchToCookie(e){let t=[e];const i=c.a.getCookie("recentSearch");if(i)try{if(t=JSON.parse(i),void 0!==t[0]){const i=t.findIndex(t=>t.fromCode===e.fromCode&&t.toCode===e.toCode);-1!==i&&t.splice(i,1)}t.unshift(e),t=t.slice(0,2)}catch(e){h.a(e)}t=JSON.stringify(t),c.a.setCookie("recentSearch",t,14)},removeRecentSearchByIndex(e){const t=this.getSearchCookie();try{let i=JSON.parse(t);i.splice(e,1),i=JSON.stringify(i),c.a.setCookie("recentSearch",i,14),this.$store.commit("eHorizonSearchForm/recentSearch/removeSearch",e)}catch(e){h.a(e)}},getSearchCookie:()=>c.a.getCookie("recentSearch")}};t.a=p},1311:function(e,t,i){"use strict";i(4),i(154),i(9),i(10),i(446),i(274),i(20);var o=i(42),r=i(61),n=i(72),s=i(23),a=i(53),c=i(19),l=i(29),h=i(67),d=i(1274),p=i(1277),g=i(13),u=i(78),m=i(272);function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function S(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){y(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function y(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const O={data:()=>({responseStatus:"",fsfOrigDest:{}}),mixins:[d.a,p.a],created(){this.getOrigDestData(),this.initAnyDestData()},computed:S(S(S(S({},Object(g.e)("main",["selectedLang"])),Object(g.e)("indexTabs",["anyDestinationButtonData","openFsfOvl"])),Object(g.e)("eHorizonSearchForm",["destin","origin"])),Object(g.e)("eHorizonSearchForm/origin",["value"])),methods:{$_fsfMixin_openOnLoad(){let e=r.a.getUrlParam(window.location.href,"opentab");(this.openFsfOvl||"OVL"===(null==e?void 0:e.toUpperCase()))&&this.$_fsfMixin_openFsfModal(!0)},getOrigDestData(){this.$store.hasModule("eHorizonSearchForm")||this.$store.registerModule("eHorizonSearchForm",h.a);const e=setInterval(()=>{this.$store.hasModule("eHorizonSearchForm")&&"undefined"!=typeof origDestData&&(this.initOrigDestData(),clearInterval(e))},20)},initOrigDestData(){if("undefined"!=typeof origDestLabels&&this.$store.commit("eHorizonSearchForm/destin/setLabels",origDestLabels),"undefined"!=typeof origDestData){const e=l.a.parseData(origDestData);this.$store.commit("eHorizonSearchForm/setOrigDestData",e),this.$store.commit("eHorizonSearchForm/origin/setDestinations",s.a.prepareData(e).filter(e=>e.isOrig));const t=Object(a.a)();t&&void 0!==e[t]&&!Object.keys(this.value).length&&this.$store.dispatch("eHorizonSearchForm/selectOrigin",e[t])}const e=c.a.getCookie("country")||null;e&&this.$store.dispatch("eHorizonSearchForm/origin/setHomeCountry",e)},async initAnyDestData(){let e=await this.getAnyDestData();this.setAnyDestButtonData(e)},getAnyDestData(){return(new u.a).get("/fsf-any-dest-data/".concat(this.selectedLang)).then(e=>Promise.resolve(e.data[0]))},setAnyDestButtonData(e){this.$store.commit("indexTabs/setAnyDestinationButtonData",e)},$_fsfMixin_originCategories(){return this.origin.homeCountry?{nearby:"searchForm.originDestin.origin.labels.nearbyOrigins",countries:"searchForm.originDestin.origin.labels.countries",all:"searchForm.originDestin.origin.labels.allOrigins"}:{popular:"searchForm.originDestin.origin.labels.popularOrigins",countries:"searchForm.originDestin.origin.labels.countries",all:"searchForm.originDestin.origin.labels.allOrigins"}},$_fsfMixin_destinCategories:()=>({all:"searchForm.originDestin.destin.labels.allDestinations",countries:"searchForm.originDestin.destin.labels.countries",interests:"searchForm.originDestin.destin.labels.interests"}),$_fsfMixin_getAnyDestinationButtonData(){var e;let t=JSON.parse(JSON.stringify(this.anyDestinationButtonData)),i="?origin=".concat(this.origin.value.code);return null!=(null==t||null===(e=t.data)||void 0===e?void 0:e.href)&&(t.data.href=t.data.href+i),t},$_fsfMixin_onOriginCategorylUpdate(e){this.$store.commit("eHorizonSearchForm/origin/setSelectedCategory",e)},$_fsfMixin_onOriginSubCategorylUpdate(e){let t=e.country||e;this.$store.commit("eHorizonSearchForm/origin/setSelectedSubCategory",t)},$_fsfMixin_onDestinCategorylUpdate(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$store.commit("eHorizonSearchForm/destin/setSelectedCategory",e),t&&m.a.selectedLabel(e,t)},$_fsfMixin_onDestinSubCategorylUpdate(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=e.country||e,o=e.code||e;if(this.$store.commit("eHorizonSearchForm/destin/setSelectedSubCategory",i),this.$store.commit("eHorizonSearchForm/destin/setSelectedSubCategoryLabel",o),t){const e=this.$store.state.eHorizonSearchForm.destin.selectedCategory;m.a.selectedSubLabel(o,e,t)}},$_fsfMixin_typeaheadOpenOrigin(e){e&&o.a.disableScroll(),this.showOriginTypeahead()},$_fsfMixin_typeaheadOpenDestin(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&o.a.disableScroll(),this.onDestinFocused(t)},$_fsfMixin_typeaheadCloseOrigin(e,t){t&&o.a.enableScroll(),this.onOriginOpenUpdate(e)},$_fsfMixin_typeaheadCloseDestin(e,t){t&&o.a.enableScroll(),this.onDestinOpenUpdate(e)},$_fsfMixin_selectOrigin(e,t){this.onOriginSelect(e,!0,t),t&&o.a.enableScroll()},$_fsfMixin_selectDestin(e,t){this.onDestinSelected(e,!0,t)},$_fsfMixin_openFsfModal(){let e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.$store.state.main.modal.isModalOpened)return;this.$store.commit("main/showPlaneLoader",!0),e={disableCloseOnClickOutside:!1,ignoreSessionStorage:o,showHeader:!1};Promise.all([i.e(0),i.e(11),i.e(30),i.e(51),i.e(220)]).then(i.bind(null,1387)).then(e=>this.$_fsfMixin_componentLoaded(e,t)).catch(e=>this.$_fsfMixin_componentFailed(e)),this.$store.commit("main/setModalCloseFn",this.$_fsfMixin_closeModalFunction),this.$store.commit("main/setModalProps",e),this.$store.commit("main/setShowModalHeader",!1)},$_fsfMixin_componentLoaded(e,t){this.$store.commit("main/setModalContent",e.default),this.$store.dispatch("main/openFsfModal"),t||m.a.overlayOpened(this.$store.state.eHorizonSearchForm)},$_fsfMixin_componentFailed(e){this.$store.commit("main/setShowCloseIcon",!0),this.$store.dispatch("main/openModal"),this.$store.commit("main/showPlaneLoader",!1),n.a(e)},$_fsfMixin_closeModalFunction(){o.a.enableScroll(),this.$store.dispatch("main/closeModal")},$_fsfMixin_onAnyDestinationSelected(){m.a.flightSearchOverlay("any_destination",this.$store.state.eHorizonSearchForm)},$_fsfMixin_onSubmitForm(){m.a.flightSearchOverlay("flight_search",this.$store.state.eHorizonSearchForm)},$_fsfMixin_createDeeplink(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new URL("https://".concat(window.location.hostname).concat(window.location.pathname,"?")),i=new URLSearchParams(t.search);return i.append("opentab","OVL"),i.append("sref","WPU"),this.pos&&i.append("pos",this.pos),this.calendar.departureDate&&e&&i.append("departure",this.calendar.departureDate),this.calendar.returnDate&&e&&i.append("return",this.calendar.returnDate),i.append("l",this.selectedLang),this.origin.value.code&&i.append("originCode",this.origin.value.code),this.origin.value.type&&i.append("originType",this.origin.value.type),this.destin.value.code&&i.append("destinCode",this.destin.value.code),this.destin.value.type&&i.append("destinType",this.destin.value.type),e&&(i.append("numAdt",this.paxSelector.adults),i.append("numChd",this.paxSelector.children),i.append("numInf",this.paxSelector.infants),i.append("tripType",this.tripType)),t.toString()+i.toString()},$_fsfMixin_getSessionItem(e){var t;return null!==(t=window)&&void 0!==t&&t.sessionStorage?sessionStorage.getItem(e):null}}};t.a=O}}]);
//# sourceMappingURL=FLT~recent-search-input.js.map