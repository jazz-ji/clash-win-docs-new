(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{345:function(t,s,a){"use strict";a.r(s);var r=a(10),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[t._v("#")]),t._v(" Actions")]),t._v(" "),s("h2",{attrs:{id:"版本要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本要求"}},[t._v("#")]),t._v(" 版本要求")]),t._v(" "),s("p",[t._v("0.18.8 版本更新后，支持使用 JavaScript 定义 proxy 及 profile 右键菜单中 "),s("code",[t._v("Run script")]),t._v(" 选项行为")]),t._v(" "),s("h2",{attrs:{id:"定义行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义行为"}},[t._v("#")]),t._v(" 定义行为")]),t._v(" "),s("ol",[s("li",[t._v("进入 Settings 界面")]),t._v(" "),s("li",[t._v("滚动至 Actions 栏")]),t._v(" "),s("li",[t._v("点击 Scripts 右边 Edit 打开编辑器，填入："),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scripts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("code")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n      module.exports.run = (payload, { dialog }) => {\n        dialog({\n          message: `proxy name: ${payload.name}`\n        })\n      }")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("点击编辑器右下角保存按钮")]),t._v(" "),s("li",[t._v("进入 Proxies 界面，在任意 proxy 中右键选择 Run script 即会弹出对话框显示该 proxy 的 name 属性")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("除了使用 code 指定运行代码，也可以用 file 属性指定执行脚本路径")])]),t._v(" "),s("h3",{attrs:{id:"参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),s("p",[t._v("CFW 调用用户定义的"),s("code",[t._v("run")]),t._v("方法时，会传入 2 个参数，分别是"),s("strong",[t._v("proxy 或 profile 属性")]),t._v("，"),s("strong",[t._v("工具类对象/方法")])]),t._v(" "),s("h4",{attrs:{id:"proxy-或-profile-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy-或-profile-属性"}},[t._v("#")]),t._v(" proxy 或 profile 属性")]),t._v(" "),s("p",[t._v("payload 是一个对象，表示右键点击的对象")]),t._v(" "),s("h4",{attrs:{id:"工具类对象-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具类对象-方法"}},[t._v("#")]),t._v(" 工具类对象/方法")]),t._v(" "),s("p",[t._v("包括：")]),t._v(" "),s("ul",[s("li",[t._v("axios：网络请求框架，"),s("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("yaml：yaml 框架，"),s("a",{attrs:{href:"https://github.com/eemeli/yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("notify：发出系统通知方法，签名为"),s("code",[t._v("function notify(title:string, message:string, silent:bool)")])]),t._v(" "),s("li",[t._v("console：日志输出至文件，方便调试，在 Settings 界面中 Actions 设置下方 Console Output 打开")]),t._v(" "),s("li",[t._v("homeDir：Home Directory 目录")]),t._v(" "),s("li",[t._v("dialog: 对话框，可以获取用户选择，"),s("a",{attrs:{href:"https://www.electronjs.org/zh/docs/latest/api/dialog#dialogshowmessageboxbrowserwindow-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docs"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("除了以上工具类，在使用"),s("code",[t._v(".js")]),t._v("文件时，也可以通过"),s("code",[t._v("npm")]),t._v("引入第三方模块")])])])}),[],!1,null,null,null);s.default=e.exports}}]);