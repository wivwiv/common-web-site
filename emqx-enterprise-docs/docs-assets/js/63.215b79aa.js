(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1261:function(s,a,t){s.exports=t.p+"docs-assets/img/kafka-action-0@2x.57b8e74f.png"},1262:function(s,a,t){s.exports=t.p+"docs-assets/img/kafka-resource-0@2x.bab1eda3.png"},1263:function(s,a,t){s.exports=t.p+"docs-assets/img/kafka-resource-2@2x.c1f41e8a.png"},1264:function(s,a,t){s.exports=t.p+"docs-assets/img/kafka-action-1@2x.d4c87914.png"},1265:function(s,a,t){s.exports=t.p+"docs-assets/img/kafka-rulesql-1@2x.581f2c27.png"},1266:function(s,a,t){s.exports=t.p+"docs-assets/img/kafka-consumer.28f2911d.png"},1267:function(s,a,t){s.exports=t.p+"docs-assets/img/kafka-rulelist-0@2x.f95a992a.png"},1811:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"桥接数据到-kafka"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#桥接数据到-kafka"}},[s._v("#")]),s._v(" 桥接数据到 Kafka")]),s._v(" "),e("p",[s._v("搭建 Kafka 环境，以 MacOS X 为例:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://archive.apache.org/dist/kafka/2.8.0/kafka_2.13-2.8.0.tgz\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzf  kafka_2.13-2.8.0.tgz\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" kafka_2.13-2.8.0\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 Zookeeper")]),s._v("\n./bin/zookeeper-server-start.sh config/zookeeper.properties\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 Kafka")]),s._v("\n./bin/kafka-server-start.sh config/server.properties\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("创建 Kafka\n​       的主题:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ ./bin/kafka-topics.sh --zookeeper localhost:2181 --replication-factor "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --partitions "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --topic testTopic --create\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("创建 Kafka Rule 之前必须先在 Kafka 中创建好主题，否则创建 Kafka Rule 失败。")])]),s._v(" "),e("p",[s._v("创建规则:")]),s._v(" "),e("p",[s._v("打开 "),e("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQX Dashboard"),e("OutboundLink")],1),s._v("，选择左侧的 “规则” 选项卡。")]),s._v(" "),e("p",[s._v("填写规则 SQL:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(392),alt:"image"}})]),s._v(" "),e("p",[s._v("关联动作:")]),s._v(" "),e("p",[s._v("在 “响应动作” 界面选择 “添加”，然后在 “动作” 下拉框里选择 “桥接数据到 Kafka”。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(1261),alt:"image"}})]),s._v(" "),e("p",[s._v("填写动作参数:")]),s._v(" "),e("p",[s._v("“保存数据到 Kafka 动作需要两个参数：")]),s._v(" "),e("p",[s._v("1). Kafka 的消息主题")]),s._v(" "),e("p",[s._v("2). 关联资源。现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 Kafka 资源:")]),s._v(" "),e("p",[e("img",{attrs:{src:t(1262),alt:"image"}})]),s._v(" "),e("p",[s._v("选择 Kafka 资源”。")]),s._v(" "),e("p",[s._v("填写资源配置:")]),s._v(" "),e("p",[s._v("填写真实的 Kafka 服务器地址，多个地址用,分隔，其他配置保持默认值，然后点击 “测试连接” 按钮，确保连接测试成功。")]),s._v(" "),e("p",[s._v("最后点击 “新建” 按钮。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(1263),alt:"image"}})]),s._v(" "),e("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(1264),alt:"image"}})]),s._v(" "),e("p",[s._v("返回规则创建界面，点击 “新建”。\n"),e("br"),s._v("按照Kafka的业务数据，填写 "),e("code",[s._v("Kafka 主题")]),s._v(" "),e("code",[s._v("Produce 类型")]),s._v(" "),e("code",[s._v("Produce 策略")]),s._v(" "),e("code",[s._v("Strategy Key")]),s._v(" "),e("code",[s._v("磁盘缓存")]),s._v("，\n其中，"),e("code",[s._v("消息内容模板")]),s._v(" 字段，支持变量。若使用空模板（默认），消息内容为 JSON 格式的所有字段。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(1265),alt:"image"}})]),s._v(" "),e("p",[s._v("规则已经创建完成，现在发一条数据:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Topic: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/1"')]),s._v("\n\nQoS: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nPayload: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("然后通过 Kafka 命令去查看消息是否生产成功:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ ./bin/kafka-console-consumer.sh --bootstrap-server "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9092  --topic testTopic --from-beginning\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1266),alt:"image"}})]),s._v(" "),e("p",[s._v("在规则列表里，可以看到刚才创建的规则的命中次数已经增加了 1:")]),s._v(" "),e("p",[e("img",{attrs:{src:t(1267),alt:"image"}})])])}),[],!1,null,null,null);a.default=n.exports},392:function(s,a,t){s.exports=t.p+"docs-assets/img/rule_sql.91dfbea9.png"}}]);