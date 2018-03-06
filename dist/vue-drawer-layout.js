!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";var t=function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t},e=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,a=!1,o=void 0;try{for(var s,r=t[Symbol.iterator]();!(n=(s=r.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{!n&&r.return&&r.return()}finally{if(a)throw o}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),i=".drawer-layout[data-v-7e696ca1] { position: absolute; top: 0; left: 0; bottom: 0; right: 0; overflow: hidden; } .drawer-wrap[data-v-7e696ca1] { position: absolute; top: 0; bottom: 0; transform: translateZ(0); } .content-wrap[data-v-7e696ca1] { position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; transform: translateZ(0); } .drawer-mask[data-v-7e696ca1] { position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: #000; z-index: 818; } .moving[data-v-7e696ca1] { transition: transform 0.3s ease; } .will-change[data-v-7e696ca1] { will-change: transform; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i)),t.appendChild(e)}}();var i=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),n="ontouchstart"in window,a=n?{down:"touchstart",move:"touchmove",up:"touchend"}:{down:"mousedown",move:"mousemove",up:"mouseup"},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"drawer-layout"},[i("div",{staticClass:"drawer-wrap",class:t.animateStyle,style:t.drawerStyle},[t._t("drawer")],2),t._v(" "),i("div",{staticClass:"content-wrap",class:t.contentDrawable?t.animateStyle:{},style:t.contentDrawable?t.contentStyle:{}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.backdrop&&t.pos,expression:"backdrop && pos"}],staticClass:"drawer-mask",style:{opacity:t.backdropOpacity},on:{click:t.handleMaskClick}}),t._v(" "),t._t("content")],2)])},staticRenderFns:[],_scopeId:"data-v-7e696ca1",name:"vue-drawer-layout",props:{drawerWidth:{type:Number},drawableDistance:{type:Number},zIndex:{type:Number,default:818},contentDrawable:{type:Boolean,default:!1},backdrop:{type:Boolean,default:!0},backdropOpacityRange:{type:Array,default:function(){return[0,.4]},validator:function(t){var i=e(t,2),n=i[0],a=i[1];return n<a&&n>=0&&a<=1}},enable:{type:Boolean,default:!0},animatable:{type:Boolean,default:!0},reverse:{type:Boolean,default:!1}},data:function(){return{width:this.drawerWidth,distance:this.drawableDistance,pos:0,visible:!1,moving:!1,willChange:!1}},methods:{toggle:function(t){void 0===t&&(t=!this.visible),this.visible=t,this.pos=t?this.width:0,this.moving=!0},handleMaskClick:function(){this.moving||this.$emit("mask-click")}},watch:{moving:function(){this.animatable||(this.moving=!1)},willChange:function(){this.animatable||(this.willChange=!1)}},computed:{animateStyle:function(){return{moving:this.moving,"will-change":this.willChange}},drawerStyle:function(){var e,i=this.zIndex,n=this.width,a=this.moveRate,o=this.pos,s=this.reverse;return t(e={zIndex:i,width:n+"px"},s?"right":"left","-"+Math.ceil(n*a)+"px"),t(e,"transform","translate3d("+(s?"-":"")+Math.ceil(o*a)+"px,0,0)"),e},contentStyle:function(){var t=this.pos;return{transform:"translate3d("+(this.reverse?"-":"")+t+"px,0,0)"}},backdropOpacity:function(){var t=this.backdropOpacityRange,i=this.pos,n=this.width,a=e(t,2);return a[0]+a[1]*(i/n)||0},moveRate:function(){var t=this.width;return this.distance/t}},mounted:function(){var t=this,e=this.$el,o=.8*parseInt(window.getComputedStyle(this.$el.parentNode).width);this.width=this.width||o,this.distance=this.distance||o;var s=this.width,r=this.reverse,d=void 0,l=void 0,c=void 0,h=void 0,u=void 0,v=void 0,p=void 0,m=void 0,f=void 0,w=void 0,b=function(t){this.enable&&(this.willChange=!0,w=void 0,v=h=t.clientX||t.changedTouches[0].clientX,u=t.clientY||t.changedTouches[0].clientY,l=+new Date,f=this.pos,document.addEventListener(a.move,y,!(!n||!i)&&{passive:!0}),document.addEventListener(a.up,g,!(!n||!i)&&{passive:!0}),this.$emit("slide-start"))}.bind(this),y=function(t){d=l,l=+new Date,m=v,v=t.clientX||t.changedTouches[0].clientX,p=t.clientY||t.changedTouches[0].clientY,c=[1,-1][+r]*(v-m)/(l-d);var e=f+[1,-1][+r]*(v-h);e=Math.min(s,e),e=Math.max(0,e),void 0===w&&(w=Math.abs(v-h)/Math.abs(p-u)<Math.sqrt(3)),w||(n&&i||t.preventDefault(),this.pos=e,this.$emit("slide-move",e))}.bind(this),g=function(t){if(void 0!==w){if(!w){var e=this.pos;this.visible=c>0?(s-e)/c<500||e>3*s/5:!((0-e)/c<500||e<3*s/5),this.pos>0&&this.pos<s&&(this.moving=!0)}this.pos=this.visible?s:0}this.moving||(this.willChange=!1,this.$emit("slide-end",this.visible)),w=void 0,document.removeEventListener(a.move,y,!(!n||!i)&&{passive:!0}),document.removeEventListener(a.up,g,!(!n||!i)&&{passive:!0})}.bind(this);"transitionend webkitTransitionEnd msTransitionEnd otransitionend oTransitionEnd".split(" ").forEach(function(e){t.$el.addEventListener(e,function(){t.moving&&(t.moving=!1,t.willChange=!1,t.pos=t.visible?s:0,t.$emit("slide-end",t.visible))},!1)}),e.addEventListener(a.down,b,!(!n||!i)&&{passive:!0})}};module.exports={DrawerLayout:o,install:function t(e){t.installed||e.component(o.name,o)}},module.exports.default=module.exports});
