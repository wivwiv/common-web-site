(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1254:function(s,t,a){s.exports=a.p+"docs-assets/img/rpc-action-0.533cf244.png"},1255:function(s,t,a){s.exports=a.p+"docs-assets/img/rpc-action-1.4da49f40.png"},1256:function(s,t,a){s.exports=a.p+"docs-assets/img/rpc-resource-1.a093cfc1.png"},1257:function(s,t,a){s.exports=a.p+"docs-assets/img/rpc-action-2.0bc33897.png"},1258:function(s,t,a){s.exports=a.p+"docs-assets/img/rpc-rulesql-1.efd2b585.png"},1259:function(s,t,a){s.exports=a.p+"docs-assets/img/rpc-result-0.f4e2183a.png"},1260:function(s,t,a){s.exports=a.p+"docs-assets/img/rpc-rulelist-0.08c4e437.png"},1810:function(s,t,a){"use strict";a.r(t);var e=a(10),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"桥接数据到-rpc-服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#桥接数据到-rpc-服务"}},[s._v("#")]),s._v(" 桥接数据到 RPC 服务")]),s._v(" "),e("p",[s._v("搭建 EMQX Broker 环境，以 MacOS X 为例:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ brew tap emqx/emqx/emqx\n\n$ brew "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" emqx\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 emqx")]),s._v("\n$ emqx console\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("创建规则:")]),s._v(" "),e("p",[s._v("打开 "),e("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQX Dashboard"),e("OutboundLink")],1),s._v("，选择左侧的 “规则” 选项卡。")]),s._v(" "),e("p",[s._v("填写规则 SQL:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(392),alt:"image"}})]),s._v(" "),e("p",[s._v("关联动作:")]),s._v(" "),e("p",[s._v("在 “响应动作” 界面选择 “添加”，然后在 “动作” 下拉框里选择 “桥接数据到 MQTT Broker”。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1254),alt:"image"}})]),s._v(" "),e("p",[s._v("填写动作参数:")]),s._v(" "),e("p",[s._v("桥接数据到 MQTT Broker 动作只需要一个参数：")]),s._v(" "),e("p",[s._v("关联资源。现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 RPC Bridge 资源:")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1255),alt:"image"}})]),s._v(" "),e("p",[s._v("选择 RPC Bridge 资源。")]),s._v(" "),e("p",[s._v("填写资源配置:")]),s._v(" "),e("p",[s._v("填写真实的 emqx 节点名，其他配置保持默认值，然后点击 “测试连接” 按钮，确保连接测试成功。")]),s._v(" "),e("p",[s._v("最后点击 “新建” 按钮。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1256),alt:"image"}})]),s._v(" "),e("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1257),alt:"image"}})]),s._v(" "),e("p",[s._v("返回规则创建界面，点击 “新建”。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1258),alt:"image"}})]),s._v(" "),e("p",[s._v("规则已经创建完成，现在发一条数据:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Topic: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/1"')]),s._v("\n\nQoS: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nPayload: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, World\\!"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("然后通过 mqtt 客户端查看消息是否发布成功")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1259),alt:"image"}})]),s._v(" "),e("p",[s._v("在规则列表里，可以看到刚才创建的规则的命中次数已经增加了 1:")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1260),alt:"image"}})])])}),[],!1,null,null,null);t.default=r.exports},392:function(s,t,a){s.exports=a.p+"docs-assets/img/rule_sql.91dfbea9.png"}}]);