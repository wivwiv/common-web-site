(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1214:function(s,t,a){s.exports=a.p+"docs-assets/img/pgsql-action-0@2x.177f134e.png"},1215:function(s,t,a){s.exports=a.p+"docs-assets/img/pgsql-resource-0@2x.4c842200.png"},1216:function(s,t,a){s.exports=a.p+"docs-assets/img/pgsql-action-2@2x.505824d3.png"},1217:function(s,t,a){s.exports=a.p+"docs-assets/img/pgsql-rulesql-2@2x.002d6f96.png"},1218:function(s,t,a){s.exports=a.p+"docs-assets/img/pgsql-result-1@2x.f3885317.png"},1219:function(s,t,a){s.exports=a.p+"docs-assets/img/pgsql-rulelist-1@2x.52217421.png"},1804:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"保存数据到-postgresql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#保存数据到-postgresql"}},[s._v("#")]),s._v(" 保存数据到 PostgreSQL")]),s._v(" "),n("p",[s._v("搭建 PostgreSQL 数据库，以 MacOS X 为例:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ brew "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql\n$ brew services start postgresql\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 使用用户名 root 创建名为 'mqtt' 的数据库")]),s._v("\n$ createdb -U root mqtt\n\n$ psql -U root mqtt\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mqtt")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("dn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nList of schemas\nName  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Owner\n--------+-------\npublic "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" shawn\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("初始化 PgSQL 表:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ psql -U root mqtt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("创建 "),n("code",[s._v("t_mqtt_msg")]),s._v(" 表:")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" t_mqtt_msg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SERIAL")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    msgid "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varying")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sender "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varying")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    topic "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varying")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    qos "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    payload "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    arrived "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),s._v(" without "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" zone\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("创建规则:")]),s._v(" "),n("p",[s._v("打开 "),n("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQX Dashboard"),n("OutboundLink")],1),s._v("，选择左侧的 “规则” 选项卡。")]),s._v(" "),n("p",[s._v("填写规则 SQL:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("SELECT * FROM "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(392),alt:"image"}})]),s._v(" "),n("p",[s._v("关联动作:")]),s._v(" "),n("p",[s._v("在 “响应动作” 界面选择 “添加”，然后在 “动作” 下拉框里选择 “保存数据到 PostgreSQL”。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1214),alt:"image"}})]),s._v(" "),n("p",[s._v("填写动作参数:")]),s._v(" "),n("p",[s._v("“保存数据到 PostgreSQL” 动作需要两个参数：")]),s._v(" "),n("p",[s._v("1). 关联资源的 ID。现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 PostgreSQL 资源:")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1215),alt:"image"}})]),s._v(" "),n("p",[s._v("选择 “PostgreSQL 资源”。")]),s._v(" "),n("p",[s._v("填写资源配置:")]),s._v(" "),n("p",[s._v("数据库名填写 “mqtt”，用户名填写 “root”，其他配置保持默认值，然后点击 “测试连接” 按钮，确保连接测试成功。")]),s._v(" "),n("p",[s._v("最后点击 “新建” 按钮。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(419),alt:"image"}})]),s._v(" "),n("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),n("p",[s._v("2).SQL 模板。这个例子里我们向 PostgreSQL 插入一条数据，SQL\n​    模板为:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("insert into t_mqtt_msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msgid, topic, qos, payload, arrived"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${id}")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${topic}")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${qos}")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${payload}")]),s._v(", to_timestamp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${timestamp}")]),s._v("::double precision /1000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("插入数据之前，SQL 模板里的 ${key} 占位符会被替换为相应的值。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1216),alt:"image"}})]),s._v(" "),n("p",[s._v("返回规则创建界面，点击 “创建”。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1217),alt:"image"}})]),s._v(" "),n("p",[s._v("规则已经创建完成，现在发一条数据:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("Topic: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/1"')]),s._v("\nQoS: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nPayload: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello1"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("然后检查 PostgreSQL 表，新的 record 是否添加成功:")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1218),alt:"image"}})]),s._v(" "),n("p",[s._v("在规则列表里，可以看到刚才创建的规则的命中次数已经增加了 1:")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1219),alt:"image"}})])])}),[],!1,null,null,null);t.default=e.exports},392:function(s,t,a){s.exports=a.p+"docs-assets/img/rule_sql.91dfbea9.png"},419:function(s,t,a){s.exports=a.p+"docs-assets/img/pgsql-resource-1@2x.b92118c8.png"}}]);