(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{463:function(s,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"html-src、href、link的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-src、href、link的区别是什么"}},[s._v("#")]),s._v(" [html] src、href、link的区别是什么？")]),s._v(" "),a("p",[s._v("谈谈src和href的区别")]),s._v(" "),a("p",[s._v("src和href都是用于外部资源的引入， src一般引入js文件， 图片文件，href一般链接css资源文件，网页资源文件。这里给出几个使用得例子：")]),s._v(" "),a("p",[s._v('引用js文件时：src="myscript.js"')]),s._v(" "),a("p",[s._v('引用图片：src="mypic.jpg"')]),s._v(" "),a("p",[s._v('引用css文件时：href="cssfile.css"\n网站链接：href="http://www.webpage.com"')]),s._v(" "),a("p",[s._v("它们之间的主要区别可以用这样一句话来概括：")]),s._v(" "),a("p",[s._v("src用于替代这个元素，而href用于建立这个标签与外部资源之间的关系。")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("p",[s._v('<a href="www.xxx.com">\n<img src="1.jpg">\n</a>')]),s._v(" "),a("p",[s._v("a 标签里面的内容是一张图片，a标签加上href属性将图片链接到了www.xxx.com这个网站，但并未替换a标签里面的内容。")]),s._v(" "),a("p",[s._v("而img标签的src属性则是将这个标签完全替换成了src里面的资源。")]),s._v(" "),a("p",[s._v("href (Hypertext Reference) 超文本引用")]),s._v(" "),a("p",[s._v("href这个属性指定web资源的位置，从而定义当前元素（如锚点a）或当前文档（如链接）与目标锚点或目标资源之间的联系。例如当我们写：")]),s._v(" "),a("p",[s._v('<link href="style.css" rel="stylesheet" />')]),s._v(" "),a("p",[s._v("浏览器知道这是个样式表文件，"),a("b",[s._v("html页面的解析和渲染不会暂停，css文件的加载是同时进行的，")]),s._v("用@import添加的样式是在页面载入之后再加载，这可能会导致页面因重新渲染而闪烁。所以我们建议使用link而不是@import。")]),s._v(" "),a("p",[s._v("src (Source)源")]),s._v(" "),a("p",[s._v("这个属性是将资源嵌入到当前文档中元素所在的位置。例如当我们写：")]),s._v(" "),a("p",[s._v('<script src="script.js"><\/script>')]),s._v(" "),a("p",[s._v("当浏览器解析到这句代码时，"),a("b",[s._v("html页面的加载和解析都会暂停，直到浏览器加载、编译、执行完毕js文件。")]),s._v("这就像是把js文件里的内容全部注入到这个script标签中，类似于img，img标签是一个空标签，它的内容就是由src这个属性定义，浏览器会暂停加载直到这个图片加载完成，iframe标签也有这样这样得特性。")]),s._v(" "),a("p",[s._v("这也是为什么要将js文件的加载放在body最后的原因（ 在<body>前面 ）。")]),s._v(" "),a("h2",{attrs:{id:"css-用css画一个太阳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-用css画一个太阳"}},[s._v("#")]),s._v(" [css] 用css画一个太阳")]),s._v(" "),a("h2",{attrs:{id:"js-请实现一个flattendeep函数-把多维数组扁平化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-请实现一个flattendeep函数-把多维数组扁平化"}},[s._v("#")]),s._v(" [js] 请实现一个flattenDeep函数，把多维数组扁平化")]),s._v(" "),a("p",[s._v("ES10的flat方法")]),s._v(" "),a("p",[s._v("参数【可选】：指定嵌套数组中的结构深度，默认值为1, Infinity展开所有")]),s._v(" "),a("h2",{attrs:{id:"软技能-如何预防掉头发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软技能-如何预防掉头发"}},[s._v("#")]),s._v(" [软技能] 如何预防掉头发？")]),s._v(" "),a("p",[s._v("肝藏血，发为血之余，血亏则发枯。肾为先天之本，精血之源，其华在发。-- 老中医")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//手写")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// const newArray = arr.flat(depth)")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("flat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("Infinity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [1,2,1,2]")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//实现")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("flattenDeep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("arr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("acc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cur")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" _val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("flattenDeep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("acc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("_val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("flattenDeep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'======= 测试 ========'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" numbers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" item\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'======= 测试结束 ========'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);