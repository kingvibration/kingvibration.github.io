(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{318:function(n,t,e){"use strict";e.r(t);var i=e(319),a=e.n(i);for(var h in i)["default"].indexOf(h)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(h);t.default=a.a},319:function(n,t){},428:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return a}));var i=function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("html",{attrs:{lang:"en"}},[t("head",[t("meta",{attrs:{charset:"UTF-8"}}),this._v(" "),t("title",[this._v("Title")])]),this._v(" "),t("body",[t("pre",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[this._v('[html] 说说你对HTML元素的显示优先级的理解\n\n\n  帧元素（frameset) 优先级最高 >>> 表单元素 > 非表单元素，即 input type="radio" 之类的表单控件 > 普通的如 a,div 等元素。\n\n  从有窗口和无窗口元素来分，有窗口元素 > 无窗口元素。有窗口元素如 Select 元素、Object 元素。\n\n  z-index 属性也可以改变显示优先级，但只对同种类型的元素才有效。\n\n\n[css] 说下line-height三种赋值方式有何区别？\n\n  line-height 可以有带单位及不带单位的写法（感觉其实是两种）。\n\n  div{\n    line-height: 24px;\n    line-height: 1.5;\n    line-height: 1.5em;\n    line-height: 150%;\n  }\n  对于应用在单个元素上，这几种写法的效果都是一样的（除了 px 需要一些计算）。但由于 line-height 是可以被继承的，因此会影响内部子元素的 line-height。简单的可以总结为：\n\n  带有单位的 line-height 会被计算成 px 后继承。子元素的 line-height = 父元素的 line-height * font-size （如果是 px 了就直接继承）\n\n  而不带单位的 line-height 被继承的是倍数，子元素的 line-height = 子元素的 font-size * 继承的倍数\n\n  简单的示例： <a href="https://codepen.io/Konata9/pen/oNvZGqo" target="_blank">https://codepen.io/Konata9/pen/oNvZGqo</a>\n\n  参考文章：\n  <a href="https://juejin.im/post/5a6dd1356fb9a01cb0499177" target="_blank">line-height 3种设置方式的区别</a>\n\n[js] 造成内存泄漏的操作有哪些？\n\n  现在的GC好像是越来越牛逼了，有时候感觉无效的闭包都能被回收掉（还没有做过测试）\n  1 闭包\n  2 无效的全局变量\n  3 addEventListener\n  4 setInterval\n  5 还有一种是递归的时候不用尾调用优化，如果层级比较深的话会造成内存消耗激增，有时候还会崩，但是只要递归完成了这些内存是会被释放的。\n\n[软技能] 你在上一家公司工作流程是怎么样的，如何与其他人协作的？是怎样跨部门合作的？\n\n  前端开发工作流程\n\n  项目描述\n  公司开发的项目是类似钉钉的TO B企业管理软件，后端是PHP，只负责提供接口API等，前端采用单页面模式开发，不做服务端渲染，其中产品有小程序，公众号，PC后台管理，使用的技术主要有：vue element taro\n\n  产品或功能研讨阶段\n  每当开发一个新功能或新产品，首先产品经理会开一个简单的交底会议，讨论功能模块的可行性及开发难度，开发周期等。\n\n  UI设计阶段\n  这个阶段一般没开发什么事\n\n  开发阶段\n  文档\n  比较重要的两样东西“UI设计稿” 和 “产品说明文档” 我们统一放在蓝湖\n\n  代码托管\n  代码直接托管在gitlab\n\n  协作开发\n  多人协作的话则会采用 gitflow 工作流，一般如果是新项目则会组件拆分，优先开始组件开发。\n\n  软件测试阶段\n  开发完成后将代码上传到svn仓库（其实当FTP用了），由运维人员进行部署及版本管理。\n  这里补充说明下后端是PHP，在上传代码的时候是和PHP代码一起给运维的，虽然不同仓库。\n  BUG管理采用tapd\n\n  软件发布阶段\n  这也是又运维直接管控，除非特殊环境问题需要协同解决。\n')])])])])])])])},a=[]},444:function(n,t,e){"use strict";e.r(t);var i=e(428),a=e(318);for(var h in a)["default"].indexOf(h)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(h);var l=e(42),r=Object(l.a)(a.default,i.a,i.b,!1,null,null,null);t.default=r.exports}}]);