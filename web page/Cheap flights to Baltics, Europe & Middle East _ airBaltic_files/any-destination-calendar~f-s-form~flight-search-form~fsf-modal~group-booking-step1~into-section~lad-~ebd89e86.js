(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1349:function(t,e,o){"use strict";const i={watch:{typeAheadPointer(){this.maybeAdjustScroll()}},methods:{maybeAdjustScroll(){if(0===this.typeAheadPointer)return this.scrollTo(0);const t=this.pixelsToPointerTop(),e=this.pixelsToPointerBottom(),o=this.viewport();return t<=o.top?this.scrollTo(t):e>=o.bottom?this.scrollTo(o.top+this.pointerHeight()):null},pixelsToPointerTop(){let t=0;if(this.$refs.labelCloud&&(t+=this.$refs.labelCloud.$el.offsetHeight),this.$refs.dropdownMenu)for(let e=0;e<this.typeAheadPointer;e++)t+=this.$refs.dropdownMenu.children[parseInt(e)].offsetHeight;return t},pixelsToPointerBottom(){return this.pixelsToPointerTop()+this.pointerHeight()},pointerHeight(){const t=!!this.$refs.dropdownMenu&&this.$refs.dropdownMenu.children[this.typeAheadPointer];return t?t.offsetHeight:0},viewport(){return{top:this.$refs.dropdownContent?this.$refs.dropdownContent.scrollTop:0,bottom:this.$refs.dropdownContent?this.$refs.dropdownContent.offsetHeight+this.$refs.dropdownContent.scrollTop:0}},scrollTo(t){this.$refs.dropdownContent&&(this.$refs.dropdownContent.scrollTop=t)}}};e.a=i},1350:function(t,e,o){"use strict";const i={data:()=>({typeAheadPointer:-1}),watch:{options(){this.typeAheadPointer=-1}},methods:{typeAheadUp(){this.typeAheadPointer>0&&(this.typeAheadPointer--,this.isHeader(this.options[this.typeAheadPointer])&&this.typeAheadPointer>0&&this.typeAheadPointer--)},typeAheadDown(){this.typeAheadPointer<this.options.length-1&&(this.typeAheadPointer++,this.isHeader(this.options[this.typeAheadPointer])&&this.typeAheadPointer++)},typeAheadSelect(){this.options[this.typeAheadPointer]&&this.updateValue(this.options[this.typeAheadPointer])}}};e.a=i},1351:function(t,e,o){"use strict";o(20),o(25),o(239);e.a=class{static highlight(t,e){if(""===e)return t;const o=e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),i=new RegExp("(".concat(o,")+"),"gi");return t.replace(i,t=>"<b>".concat(t,"</b>"))}}}}]);
//# sourceMappingURL=any-destination-calendar~f-s-form~flight-search-form~fsf-modal~group-booking-step1~into-section~lad-~ebd89e86.js.map