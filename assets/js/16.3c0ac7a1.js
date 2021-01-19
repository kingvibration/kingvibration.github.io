(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{334:function(n,t,e){"use strict";e.r(t);var r=e(335),i=e.n(r);for(var o in r)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(o);t.default=i.a},335:function(n,t){},436:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i}));var r=function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("html",{attrs:{lang:"en"}},[t("head",[t("meta",{attrs:{charset:"UTF-8"}}),this._v(" "),t("title",[this._v("Title")]),this._v(" "),t("style",[this._v("\n    .wrap>span {\n      background: red;\n    }\n  ")])]),this._v(" "),t("body",[t("pre",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[this._v("[html] 如何让元素固定在页面底部？有哪些比较好的实践？\n\n  fixed\n  flex\n  absolute\n\n[css] span与span之间有看不见的空白间隔是什么原因引起的？有什么解决办法？\n\n<div class=\"wrap\">\n  <span>hello</span>\n  <span>world</span>\n</div>\n上面代码中的span可以明显地看到有间隔，解这几种决办法：\n\n1. 去掉换行，将 span 写成一行 <span>hello</span><span>world</span>\n2. 父元素使用 flex 布局：.wrap {display: flex; flex-direction: row;}\n3. 父元素设置 font-size: 0;，span 子元素再设置字体大小 font-size: 16px;\n4. span 子元素设置 float: left\n\n[js] JQuery的源码看过吗？能不能简单概括一下它的实现原理？\n\n  (function(window,undefined,document){\n    function jQuery(prop){\n      return new jQuery.prototype.init()\n    }\n    jQuery.prototype = {\n      contructor:jQuery,\n      init:function(prop){},\n      //  ...\n   }\n   jQuery.prototype.init.prototype = jQuery.prototype;\n   window['jQuery'] = window['$'] = new jQuery()\n  })(window,undefined,document)\n\n  jQuery是通过封装浏览器原生的DOM API实现dom元素的选取，然后封装到jQuery对象中去，同时根据浏览器检测对不同浏览器操作不同的APi .jQuery 对象上高度集成了超的API。\n  当然 jQuery 还有做的更多比如，我们可以new jQuery('div'),也可以直接$('div'),这个巧妙地运算就是上面init方法；如果页面已经有$时，jQuery会先将$接管把之前$的全局名保存下来 等后面使用是在释放、。。。大致了解。\n\n[软技能] 最近在学什么？能谈谈你未来3，5年给自己的规划吗？\n\n  未来规划：前端向3D发展：WebGL，three.js，thing.js，egret3D。后端继续钻研框架，多练习算法和设计模式，加强计算机科学素养。反正往纯技术方向发展，对管理兴趣不大。\n")])])])])])])])},i=[]},452:function(n,t,e){"use strict";e.r(t);var r=e(436),i=e(334);for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);var s=e(42),a=Object(s.a)(i.default,r.a,r.b,!1,null,null,null);t.default=a.exports}}]);