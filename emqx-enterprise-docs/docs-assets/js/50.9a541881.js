(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1622:function(s,a,e){"use strict";e.r(a);var t=e(10),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"桥接数据到-rocketmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#桥接数据到-rocketmq"}},[s._v("#")]),s._v(" 桥接数据到 RocketMQ")]),s._v(" "),t("p",[s._v("搭建 RocketMQ 环境，以 MacOS X\n​       为例:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://mirrors.bfsu.edu.cn/apache/rocketmq/4.8.0/rocketmq-all-4.8.0-bin-release.zip\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" rocketmq-all-4.8.0-bin-release.zip\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" rocketmq-all-4.8.0-bin-release/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在conf/broker.conf添加了2个配置")]),s._v("\nbrokerIP1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\nautoCreateTopicEnable "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 RocketMQ NameServer")]),s._v("\n$ ./bin/mqnamesrv\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 RocketMQ Broker")]),s._v("\n$ ./bin/mqbroker -n localhost:9876 -c conf/broker.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("创建规则:")]),s._v(" "),t("p",[s._v("打开 "),t("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQX Dashboard"),t("OutboundLink")],1),s._v("，选择左侧的 “规则” 选项卡。")]),s._v(" "),t("p",[s._v("填写规则 SQL:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:e(396),alt:"image"}})]),s._v(" "),t("p",[s._v("关联动作:")]),s._v(" "),t("p",[s._v("在 “响应动作” 界面选择 “添加”，然后在 “动作” 下拉框里选择 “桥接数据到 RocketMQ”。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(807),alt:"image"}})]),s._v(" "),t("p",[s._v("填写动作参数:")]),s._v(" "),t("p",[s._v("“保存数据到 RocketMQ 动作需要两个参数：")]),s._v(" "),t("p",[s._v("1). RocketMQ 的消息主题")]),s._v(" "),t("p",[s._v("2). 关联资源。现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 RocketMQ 资源:")]),s._v(" "),t("p",[t("img",{attrs:{src:e(808),alt:"image"}})]),s._v(" "),t("p",[s._v("按照 RocketMQ ACL 的配置填写。\nACL 信息请咨询服务提供商，本地或私有部署，可以在配置文件中查看，配置文件路径需要按照部署方式的不同改变前缀。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${rocket_path}")]),s._v("/conf/plain_acl.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("填写资源配置:")]),s._v(" "),t("p",[s._v("填写真实的 RocketMQ 服务器地址，多个地址用,分隔，其他配置保持默认值，然后点击 “测试连接” 按钮，确保连接测试成功。")]),s._v(" "),t("p",[s._v("最后点击 “新建” 按钮。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(809),alt:"image"}})]),s._v(" "),t("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(810),alt:"image"}})]),s._v(" "),t("p",[s._v("返回规则创建界面，点击 “新建”。")]),s._v(" "),t("p",[t("img",{attrs:{src:e(811),alt:"image"}})]),s._v(" "),t("p",[s._v("规则已经创建完成，现在发一条数据:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Topic: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/1"')]),s._v("\n\nQoS: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nPayload: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("然后通过 RocketMQ 命令去查看消息是否生产成功:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer TopicTest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:e(812),alt:"image"}})]),s._v(" "),t("p",[s._v("在规则列表里，可以看到刚才创建的规则的命中次数已经增加了 1:")]),s._v(" "),t("p",[t("img",{attrs:{src:e(813),alt:"image"}})])])}),[],!1,null,null,null);a.default=n.exports},396:function(s,a,e){s.exports=e.p+"docs-assets/img/rule_sql.91dfbea9.png"},807:function(s,a,e){s.exports=e.p+"docs-assets/img/rocket-action-0@2x.50b6219b.png"},808:function(s,a,e){s.exports=e.p+"docs-assets/img/rocket-resource-0@2x.06164254.png"},809:function(s,a,e){s.exports=e.p+"docs-assets/img/rocket-resource-2@2x.87971215.png"},810:function(s,a,e){s.exports=e.p+"docs-assets/img/rocket-action-1@2x.01a77842.png"},811:function(s,a,e){s.exports=e.p+"docs-assets/img/rocket-rulesql-1@2x.a59fad56.png"},812:function(s,a,e){s.exports=e.p+"docs-assets/img/rocket-consumer.b3613362.png"},813:function(s,a,e){s.exports=e.p+"docs-assets/img/rocket-rulelist-0@2x.ebb1ac30.png"}}]);