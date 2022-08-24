(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1715:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"rocketmq-桥接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq-桥接"}},[s._v("#")]),s._v(" RocketMQ 桥接")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("EMQX 3.1 版本后推出强大的规则引擎用于替换插件，建议您前往使用"),e("RouterLink",{attrs:{to:"/zh/enterprise/latest/rule/bridge_rocketmq.html"}},[s._v("RocketMQ 桥接")]),s._v("规则引擎中创建 RocketMQ 桥接")],1)]),s._v(" "),e("p",[s._v("EMQX 桥接转发 MQTT 消息到 RocketMQ 集群:")]),s._v(" "),e("p",[e("img",{attrs:{src:t(417),alt:"image"}})]),s._v(" "),e("p",[s._v("RocketMQ 桥接插件配置文件: etc/plugins/emqx_bridge_rocket.conf。")]),s._v(" "),e("h2",{attrs:{id:"配置-rocketmq-集群地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-rocketmq-集群地址"}},[s._v("#")]),s._v(" 配置 RocketMQ 集群地址")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## RocketMQ 服务器集群配置")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.servers = 127.0.0.1:9876,127.0.0.2:9876,127.0.0.3:9876")]),s._v("\nbridge.rocket.servers "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9876\n\nbridge.rocket.refresh_topic_route_interval "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 5S\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 分区生产者是同步/异步模式选择")]),s._v("\nbridge.rocket.produce "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 生产者同步模式下的超时时间")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.produce.sync_timeout = 3s")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 生产者 batch 的消息数量")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.producer.batch_size = 100")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 采用 base64 编码或不编码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.encode_payload_type = base64")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.sock.buffer = 32KB")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.sock.recbuf = 32KB")]),s._v("\nbridge.rocket.sock.sndbuf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1MB\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.sock.read_packets = 20")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("h2",{attrs:{id:"配置-rocketmq-桥接规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-rocketmq-桥接规则"}},[s._v("#")]),s._v(" 配置 RocketMQ 桥接规则")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Bridge RocketMQ Hooks")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ${topic}: the RocketMQ topics to which the messages will be published.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ${filter}: the mqtt topic (may contain wildcard) on which the action will be performed .")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Client Connected Record Hook")]),s._v("\nbridge.rocket.hook.client.connected.1     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ClientConnected"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Client Disconnected Record Hook")]),s._v("\nbridge.rocket.hook.client.disconnected.1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ClientDisconnected"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Session Subscribed Record Hook")]),s._v("\nbridge.rocket.hook.session.subscribed.1   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filter"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(",  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SessionSubscribed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Session Unsubscribed Record Hook")]),s._v("\nbridge.rocket.hook.session.unsubscribed.1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filter"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(",  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SessionUnsubscribed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Message Publish Record Hook")]),s._v("\nbridge.rocket.hook.message.publish.1      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filter"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(",  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MessagePublish"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Message Delivered Record Hook")]),s._v("\nbridge.rocket.hook.message.delivered.1    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filter"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(",  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MessageDeliver"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Message Acked Record Hook")]),s._v("\nbridge.rocket.hook.message.acked.1        "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filter"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(",  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MessageAcked"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("h2",{attrs:{id:"rocketmq-桥接规则说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq-桥接规则说明"}},[s._v("#")]),s._v(" RocketMQ 桥接规则说明")]),s._v(" "),e("table",{staticStyle:{width:"85%"}},[e("colgroup",[e("col",{staticStyle:{width:"58%"}}),s._v(" "),e("col",{staticStyle:{width:"26%"}})]),s._v(" "),e("thead",[e("tr",{staticClass:"header"},[e("th",[s._v("事件")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",{staticClass:"odd"},[e("td",[s._v("bridge.rocket.hook.client.connected.1")]),s._v(" "),e("td",[e("div",{staticClass:"line-block"},[s._v("客户端登录")])])]),s._v(" "),e("tr",{staticClass:"even"},[e("td",[s._v("bridge.rocket.hook.client.disconnected.1")]),s._v(" "),e("td",[e("div",{staticClass:"line-block"},[s._v("客户端退出")])])]),s._v(" "),e("tr",{staticClass:"odd"},[e("td",[s._v("bridge.rocket.hook.session.subscribed.1")]),s._v(" "),e("td",[e("div",{staticClass:"line-block"},[s._v("订阅主题")])])]),s._v(" "),e("tr",{staticClass:"even"},[e("td",[s._v("bridge.rocket.hook.session.unsubscribed.1")]),s._v(" "),e("td",[e("div",{staticClass:"line-block"},[s._v("取消订阅主题    ")])])]),s._v(" "),e("tr",{staticClass:"odd"},[e("td",[s._v("bridge.rocket.hook.message.publish.1")]),s._v(" "),e("td",[e("div",{staticClass:"line-block"},[s._v("发布消息")])])]),s._v(" "),e("tr",{staticClass:"even"},[e("td",[s._v("bridge.rocket.hook.message.delivered.1")]),s._v(" "),e("td",[e("div",{staticClass:"line-block"},[s._v("delivered 消息")])])]),s._v(" "),e("tr",{staticClass:"odd"},[e("td",[s._v("bridge.rocket.hook.message.acked.1")]),s._v(" "),e("td",[e("div",{staticClass:"line-block"},[s._v("ACK 消息")])])])])]),s._v(" "),e("h2",{attrs:{id:"客户端上下线事件转发-rocketmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端上下线事件转发-rocketmq"}},[s._v("#")]),s._v(" 客户端上下线事件转发 RocketMQ")]),s._v(" "),e("p",[s._v("设备上线 EMQX 转发上线事件消息到 RocketMQ:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("topic "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ClientConnected"')]),s._v(",\nvalue "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ts}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("设备下线 EMQX 转发下线事件消息到 RocketMQ:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("topic "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ClientDisconnected"')]),s._v(",\nvalue "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reason"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${reason}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ts}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"客户端订阅主题事件转发-rocketmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端订阅主题事件转发-rocketmq"}},[s._v("#")]),s._v(" 客户端订阅主题事件转发 RocketMQ")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("topic "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SessionSubscribed"')]),s._v("\n\nvalue "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${topic}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${qos}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${timestamp}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"客户端取消订阅主题事件转发-rocketmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端取消订阅主题事件转发-rocketmq"}},[s._v("#")]),s._v(" 客户端取消订阅主题事件转发 RocketMQ")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("topic "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SessionUnsubscribed"')]),s._v("\n\nvalue "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${topic}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${qos}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${timestamp}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"mqtt-消息转发到-rocketmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-消息转发到-rocketmq"}},[s._v("#")]),s._v(" MQTT 消息转发到 RocketMQ")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("topic "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MessagePublish"')]),s._v("\n\nvalue "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${topic}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"payload"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${payload}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${qos}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${timestamp}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h2",{attrs:{id:"mqtt-消息派发-deliver-事件转发-rocketmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-消息派发-deliver-事件转发-rocketmq"}},[s._v("#")]),s._v(" MQTT 消息派发 (Deliver) 事件转发 RocketMQ")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("topic "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MessageDeliver"')]),s._v("\n\nvalue "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"from"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${fromClientId}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${topic}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"payload"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${payload}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${qos}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${timestamp}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h2",{attrs:{id:"mqtt-消息确认-ack-事件转发-rocketmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-消息确认-ack-事件转发-rocketmq"}},[s._v("#")]),s._v(" MQTT 消息确认 (Ack) 事件转发 RocketMQ")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("topic "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MessageAcked"')]),s._v("\n\nvalue "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"from"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${fromClientId}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${topic}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"payload"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${payload}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${qos}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${timestamp}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h2",{attrs:{id:"rocketmq-消费示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq-消费示例"}},[s._v("#")]),s._v(" RocketMQ 消费示例")]),s._v(" "),e("p",[s._v("RocketMQ 读取 MQTT 客户端上下线事件消息:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer ClientConnected\n  \nbin/tools.sh org.apache.rocketmq.example.quickstart.Consumer ClientDisconnected\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("RocketMQ 读取 MQTT 主题订阅事件消息:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer SessionSubscribed\n\nbin/tools.sh org.apache.rocketmq.example.quickstart.Consumer SessionUnsubscribed\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("RocketMQ 读取 MQTT 发布消息:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer MessagePublish\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("RocketMQ 读取 MQTT 消息发布 (Deliver)、确认 (Ack) 事件:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer MessageDeliver\n\nbin/tools.sh org.apache.rocketmq.example.quickstart.Consumer MessageAcked\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("默认 payload 被 base64 编码，可通过修改配置 bridge.rocket.encode_payload_type 指定\npayload 数据格式。")])]),s._v(" "),e("h2",{attrs:{id:"启用-rocketmq-桥接插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启用-rocketmq-桥接插件"}},[s._v("#")]),s._v(" 启用 RocketMQ 桥接插件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("./bin/emqx_ctl plugins load emqx_bridge_rocket\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports},417:function(s,a,t){s.exports=t.p+"docs-assets/img/bridge_rocket.7e484e2b.png"}}]);