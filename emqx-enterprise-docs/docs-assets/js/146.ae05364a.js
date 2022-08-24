(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1676:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"分布式集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式集群"}},[s._v("#")]),s._v(" 分布式集群")]),s._v(" "),e("h2",{attrs:{id:"分布式-erlang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式-erlang"}},[s._v("#")]),s._v(" 分布式 Erlang")]),s._v(" "),e("p",[s._v("Erlang/OTP 最初是爱立信为开发电信设备系统设计的编程语言平台，电信设备 (路由器、接入网关...) 典型设计是通过背板连接主控板卡与多块业务板卡的分布式系统。")]),s._v(" "),e("h3",{attrs:{id:"节点与分布式-erlang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点与分布式-erlang"}},[s._v("#")]),s._v(" 节点与分布式 Erlang")]),s._v(" "),e("p",[s._v("Erlang/OTP 语言平台的分布式程序，由分布互联的 Erlang 运行时系统组成，每个 Erlang\n运行时系统被称为节点(Node)，节点间通过 TCP 两两互联，组成一个网状结构。")]),s._v(" "),e("p",[s._v("Erlang 节点由唯一的节点名称标识，节点名称由 "),e("code",[s._v("@")]),s._v(" 分隔的两部分组成:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip-address"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("节点间通过节点名称进行通信寻址。例如在本机启动四个 shell 终端，然后使用 "),e("code",[s._v("-name")]),s._v(" 参数分别启动四个 Erlang 节点:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("erl -name node1@127.0.0.1 -setcookie my_nodes\nerl -name node2@127.0.0.1 -setcookie my_nodes\nerl -name node3@127.0.0.1 -setcookie my_nodes\nerl -name node4@127.0.0.1 -setcookie my_nodes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("使用 "),e("code",[s._v("node().")]),s._v(" 可查看本节点名，使用 "),e("code",[s._v("nodes().")]),s._v(" 可查看已与当前节点建立连接的其他节点。我们现在到 'node1@127.0.0.1' 的控制台下，查看当前节点名和已连接的节点:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node1@127.0.0.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">")]),s._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node1@127.0.0.1'")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node1@127.0.0.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">")]),s._v(" nodes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("然后我们让 node1 发起与其他节点的连接:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node1@127.0.0.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" net_kernel:connect_node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node2@127.0.0.1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node1@127.0.0.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" net_kernel:connect_node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node3@127.0.0.1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node1@127.0.0.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v(" net_kernel:connect_node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node4@127.0.0.1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("现在再次可查看已与 node1 建立连接的其他节点:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node1@127.0.0.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">")]),s._v(" nodes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node2@127.0.0.1'")]),s._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node3@127.0.0.1'")]),s._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node4@127.0.0.1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("可以看到 node2、node3、node4 都已与 node1 建立了分布式连接，四个节点组成了一个集群。注意每当一个新的节点加入集群时，它会与集群中所有的节点都建立一个 TCP 连接。至此，四个节点完成了如下图所示的网状结构:")]),s._v(" "),e("p",[e("img",{attrs:{src:a(410),alt:"image"}})]),s._v(" "),e("h3",{attrs:{id:"安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[s._v("#")]),s._v(" 安全")]),s._v(" "),e("p",[s._v("Erlang 节点间通过 cookie 进行互连认证。cookie 是一个字符串，只有 cookie 相同的两个节点才能建立连接。"),e("a",{attrs:{href:"#node-and-distributed-erlang"}},[s._v("上节")]),s._v(" 中我们曾经使用 "),e("code",[s._v("-setcookie my_nodes")]),s._v(" 参数给四个节点设置了相同的 cookie: "),e("code",[s._v("my_nodes")]),s._v("。")]),s._v(" "),e("p",[s._v("详见: "),e("a",{attrs:{href:"http://erlang.org/doc/reference_manual/distributed.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://erlang.org/doc/reference_manual/distributed.html"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"emqx-集群协议设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emqx-集群协议设置"}},[s._v("#")]),s._v(" EMQX 集群协议设置")]),s._v(" "),e("p",[s._v("Erlang 集群中各节点可通过 TCPv4、TCPv6 或 TLS 方式连接，可在 "),e("code",[s._v("etc/emqx.conf")]),s._v("\n中配置连接方式:")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("配置名")]),s._v(" "),e("th",[s._v("类型")]),s._v(" "),e("th",[s._v("默认值")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("cluster.proto_dist")]),s._v(" "),e("td",[s._v("enum")]),s._v(" "),e("td",[e("code",[s._v("inet_tcp")])]),s._v(" "),e("td",[s._v("分布式协议，可选值："),e("br"),s._v("  - inet_tcp: 使用 TCP IPv4"),e("br"),s._v("  - inet6_tcp: 使用 TCP IPv6"),e("br"),s._v("  - inet_tls: 使用 TLS")])]),s._v(" "),e("tr",[e("td",[s._v("node.ssl_dist_optfile")]),s._v(" "),e("td",[s._v("文件路径")]),s._v(" "),e("td",[e("code",[s._v("etc/ssl_dist.conf")])]),s._v(" "),e("td",[s._v("当 "),e("code",[s._v("cluster.proto_dist")]),s._v(" 选定为 inet_tls 时，需要配置 "),e("code",[s._v("etc/ssl_dist.conf")]),s._v(" 文件，指定 TLS 证书等")])])])]),s._v(" "),e("h2",{attrs:{id:"emqx-分布式集群设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emqx-分布式集群设计"}},[s._v("#")]),s._v(" EMQX 分布式集群设计")]),s._v(" "),e("p",[s._v("EMQX 分布式的基本功能是将消息转发和投递给各节点上的订阅者，如下图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:a(397),alt:"image"}})]),s._v(" "),e("p",[s._v("为实现此过程，EMQX 维护了几个与之相关的数据结构：订阅表，路由表，主题树。")]),s._v(" "),e("h3",{attrs:{id:"订阅表-主题-订阅者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#订阅表-主题-订阅者"}},[s._v("#")]),s._v(" 订阅表: 主题 - 订阅者")]),s._v(" "),e("p",[s._v("MQTT 客户端订阅主题时，EMQX 会维护主题(Topic) -> 订阅者(Subscriber) 映射的"),e("strong",[s._v("订阅表")]),s._v("。订阅表只存在于订阅者所在的 EMQX 节点上，例如:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("node1:\n\n    topic1 -"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" client1, client2\n    topic2 -"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" client3\n\nnode2:\n\n    topic1 -"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" client4\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"路由表-主题-节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由表-主题-节点"}},[s._v("#")]),s._v(" 路由表: 主题 - 节点")]),s._v(" "),e("p",[s._v("而同一集群的所有节点，都会"),e("strong",[s._v("复制")]),s._v("一份主题(Topic) -> 节点(Node) 映射的"),e("strong",[s._v("路由表")]),s._v("，例如:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("topic1 -"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" node1, node2\ntopic2 -"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" node3\ntopic3 -"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" node2, node4\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"主题树-带统配符的主题匹配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主题树-带统配符的主题匹配"}},[s._v("#")]),s._v(" 主题树: 带统配符的主题匹配")]),s._v(" "),e("p",[s._v("除路由表之外，EMQX 集群中的每个节点也会维护一份"),e("strong",[s._v("主题树")]),s._v("(Topic Trie) 的备份。")]),s._v(" "),e("p",[s._v("例如下述主题订阅关系:")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("客户端")]),s._v(" "),e("th",[s._v("节点")]),s._v(" "),e("th",[s._v("订阅主题")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("client1")]),s._v(" "),e("td",[s._v("node1")]),s._v(" "),e("td",[s._v("t/+/x, t/+/y")])]),s._v(" "),e("tr",[e("td",[s._v("client2")]),s._v(" "),e("td",[s._v("node2")]),s._v(" "),e("td",[s._v("t/#")])]),s._v(" "),e("tr",[e("td",[s._v("client3")]),s._v(" "),e("td",[s._v("node3")]),s._v(" "),e("td",[s._v("t/+/x, t/a")])])])]),s._v(" "),e("p",[s._v("在所有订阅完成时，EMQX 中会维护如下主题树 (Topic Trie) 和路由表 (Route Table):")]),s._v(" "),e("p",[e("img",{attrs:{src:a(411),alt:"image"}})]),s._v(" "),e("h3",{attrs:{id:"消息派发过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#消息派发过程"}},[s._v("#")]),s._v(" 消息派发过程")]),s._v(" "),e("p",[s._v("当 MQTT 客户端发布消息时，所在节点会根据消息主题，检索路由表并转发消息到相关节点，再由相关节点检索本地的订阅表并将消息发送给相关订阅者。")]),s._v(" "),e("p",[s._v("例如 client1 向主题 "),e("code",[s._v("t/a")]),s._v(" 发布消息，消息在节点间的路由与派发流程:")]),s._v(" "),e("ol",[e("li",[s._v("client1 发布主题为 "),e("code",[s._v("t/a")]),s._v(" 的消息到节点 node1")]),s._v(" "),e("li",[s._v("node1 通过查询主题树，得知 "),e("code",[s._v("t/a")]),s._v(" 可匹配到现有的 "),e("code",[s._v("t/a")]),s._v("、"),e("code",[s._v("t/#")]),s._v(" 这两个主题。")]),s._v(" "),e("li",[s._v("node1 通过查询路由表，得知主题 "),e("code",[s._v("t/a")]),s._v(" 只在 node3 上有订阅者，而主题 "),e("code",[s._v("t/#")]),s._v(" 只在 node2 上有订阅者。故 node1 将消息转发给 node2 和 node3。")]),s._v(" "),e("li",[s._v("node2 收到转发来的 "),e("code",[s._v("t/a")]),s._v(" 消息后，查询本地订阅表，获取本节点上订阅了 "),e("code",[s._v("t/#")]),s._v(" 的订阅者，并把消息投递给他们。")]),s._v(" "),e("li",[s._v("node3 收到转发来的 "),e("code",[s._v("t/a")]),s._v(" 消息后，查询本地订阅表，获取本节点上订阅了 "),e("code",[s._v("t/a")]),s._v(" 的订阅者，并把消息投递给他们。")]),s._v(" "),e("li",[s._v("消息转发和投递结束。")])]),s._v(" "),e("h3",{attrs:{id:"数据分片与共享方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据分片与共享方式"}},[s._v("#")]),s._v(" 数据分片与共享方式")]),s._v(" "),e("p",[s._v("EMQX 的订阅表在集群中是分片(partitioned)的，而主题树和路由表是共享(replicated)的。")]),s._v(" "),e("h2",{attrs:{id:"节点发现与自动集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点发现与自动集群"}},[s._v("#")]),s._v(" 节点发现与自动集群")]),s._v(" "),e("p",[s._v("EMQX 支持基于 Ekka 库的集群自动发现 (Autocluster)。Ekka 是为 Erlang/OTP 应用开发的集群管理库，支持\nErlang 节点自动发现 (Service Discovery)、自动集群 (Autocluster)、脑裂自动愈合 (Network Partition\nAutoheal)、自动删除宕机节点 (Autoclean)。")]),s._v(" "),e("p",[s._v("EMQX 支持多种节点发现策略:")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("策略")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("manual")]),s._v(" "),e("td",[s._v("手动命令创建集群")])]),s._v(" "),e("tr",[e("td",[s._v("static")]),s._v(" "),e("td",[s._v("静态节点列表自动集群")])]),s._v(" "),e("tr",[e("td",[s._v("mcast")]),s._v(" "),e("td",[s._v("UDP 组播方式自动集群")])]),s._v(" "),e("tr",[e("td",[s._v("dns")]),s._v(" "),e("td",[s._v("DNS A 记录自动集群")])]),s._v(" "),e("tr",[e("td",[s._v("etcd")]),s._v(" "),e("td",[s._v("通过 etcd 自动集群")])]),s._v(" "),e("tr",[e("td",[s._v("k8s")]),s._v(" "),e("td",[s._v("Kubernetes 服务自动集群")])])])]),s._v(" "),e("h3",{attrs:{id:"manual-手动创建集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manual-手动创建集群"}},[s._v("#")]),s._v(" manual 手动创建集群")]),s._v(" "),e("p",[s._v("默认配置为手动创建集群，节点须通过 ./bin/emqx_ctl join <Node> 命令加入:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("cluster.discovery "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" manual\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"基于-static-节点列表自动集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于-static-节点列表自动集群"}},[s._v("#")]),s._v(" 基于 static 节点列表自动集群")]),s._v(" "),e("p",[s._v("配置固定的节点列表，自动发现并创建集群:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("cluster.discovery "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" static\ncluster.static.seeds "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" emqx1@127.0.0.1,emqx2@127.0.0.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"基于-mcast-组播自动集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于-mcast-组播自动集群"}},[s._v("#")]),s._v(" 基于 mcast 组播自动集群")]),s._v(" "),e("p",[s._v("基于 UDP 组播自动发现并创建集群:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("cluster.discovery "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mcast\ncluster.mcast.addr "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("239.192")]),s._v(".0.1\ncluster.mcast.ports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4369,4370")]),s._v("\ncluster.mcast.iface "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\ncluster.mcast.ttl "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),s._v("\ncluster.mcast.loop "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" on\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"基于-dns-a-记录自动集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于-dns-a-记录自动集群"}},[s._v("#")]),s._v(" 基于 DNS A 记录自动集群")]),s._v(" "),e("p",[s._v("基于 DNS A 记录自动发现并创建集群:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("cluster.discovery "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dns\ncluster.dns.name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" localhost\ncluster.dns.app  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ekka\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"基于-etcd-自动集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于-etcd-自动集群"}},[s._v("#")]),s._v(" 基于 etcd 自动集群")]),s._v(" "),e("p",[s._v("基于 "),e("a",{attrs:{href:"https://coreos.com/etcd/",target:"_blank",rel:"noopener noreferrer"}},[s._v("etcd"),e("OutboundLink")],1),s._v(" 自动发现并创建集群:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("cluster.discovery "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" etcd\ncluster.etcd.server "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" http://127.0.0.1:2379\ncluster.etcd.prefix "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" emqcl\ncluster.etcd.node_ttl "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1m\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"基于-kubernetes-自动集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于-kubernetes-自动集群"}},[s._v("#")]),s._v(" 基于 kubernetes 自动集群")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Kubernetes"),e("OutboundLink")],1),s._v(" 下自动发现并创建集群:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("cluster.discovery "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" k8s\ncluster.k8s.apiserver "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" http://10.110.111.204:8080\ncluster.k8s.service_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ekka\ncluster.k8s.address_type "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v("\ncluster.k8s.app_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ekka\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("blockquote",[e("p",[s._v("Kubernetes 不建议使用 Fannel 网络插件，推荐使用 Calico 网络插件。")])]),s._v(" "),e("h3",{attrs:{id:"手动-manual-方式管理集群介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动-manual-方式管理集群介绍"}},[s._v("#")]),s._v(" 手动(manual) 方式管理集群介绍")]),s._v(" "),e("p",[s._v("假设要在两台服务器 s1.emqx.io, s2.emqx.io 上部署 EMQX 集群:")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("节点名")]),s._v(" "),e("th",[s._v("主机名 (FQDN)")]),s._v(" "),e("th",[s._v("IP 地址")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("emqx@s1.emqx.io 或 emqx@192.168.0.10")]),s._v(" "),e("td",[s._v("s1.emqx.io")]),s._v(" "),e("td",[s._v("192.168.0.10")])]),s._v(" "),e("tr",[e("td",[s._v("emqx@s2.emqx.io 或 emqx@192.168.0.20")]),s._v(" "),e("td",[s._v("s2.emqx.io")]),s._v(" "),e("td",[s._v("192.168.0.20")])])])]),s._v(" "),e("p",[e("strong",[s._v("注意：")]),s._v(" 节点名格式为 "),e("a",{attrs:{href:"mailto:Name@Host"}},[s._v("Name@Host")]),s._v(", Host 必须是 IP 地址或 FQDN (主机名。域名)")]),s._v(" "),e("h4",{attrs:{id:"配置-emqx-s1-emqx-io-节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-emqx-s1-emqx-io-节点"}},[s._v("#")]),s._v(" 配置 emqx@s1.emqx.io 节点")]),s._v(" "),e("p",[s._v("emqx/etc/emqx.conf:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("node.name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" emqx@s1.emqx.io\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\nnode.name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" emqx@192.168.0.10\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("也可通过环境变量:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EMQX_NODE_NAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("emqx@s1.emqx.io "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./bin/emqx start\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("注意:")]),s._v(" 节点启动加入集群后，节点名称不能变更。")]),s._v(" "),e("h4",{attrs:{id:"配置-emqx-s2-emqx-io-节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-emqx-s2-emqx-io-节点"}},[s._v("#")]),s._v(" 配置 emqx@s2.emqx.io 节点")]),s._v(" "),e("p",[s._v("emqx/etc/emqx.conf:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("node.name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" emqx@s2.emqx.io\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\nnode.name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" emqx@192.168.0.20\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"节点加入集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点加入集群"}},[s._v("#")]),s._v(" 节点加入集群")]),s._v(" "),e("p",[s._v("启动两台节点后，在 s2.emqx.io 上执行:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ ./bin/emqx_ctl cluster "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" emqx@s1.emqx.io\n\nJoin the cluster successfully.\nCluster status: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("running_nodes,"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'emqx@s1.emqx.io'")]),s._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'emqx@s2.emqx.io'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("或者在 s1.emqx.io 上执行:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ ./bin/emqx_ctl cluster "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" emqx@s2.emqx.io\n\nJoin the cluster successfully.\nCluster status: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("running_nodes,"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'emqx@s1.emqx.io'")]),s._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'emqx@s2.emqx.io'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("在任意节点上查询集群状态:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ ./bin/emqx_ctl cluster status\n\nCluster status: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("running_nodes,"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'emqx@s1.emqx.io'")]),s._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'emqx@s2.emqx.io'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"退出集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#退出集群"}},[s._v("#")]),s._v(" 退出集群")]),s._v(" "),e("p",[s._v("节点退出集群，两种方式:")]),s._v(" "),e("ol",[e("li",[s._v("leave: 让本节点退出集群")]),s._v(" "),e("li",[s._v("force-leave: 从集群删除其他节点")])]),s._v(" "),e("p",[s._v("让 emqx@s2.emqx.io 主动退出集群:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ ./bin/emqx_ctl cluster leave\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("或在 s1.emqx.io 上，从集群删除 emqx@s2.emqx.io 节点:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ ./bin/emqx_ctl cluster force-leave emqx@s2.emqx.io\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"单机伪分布式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单机伪分布式"}},[s._v("#")]),s._v(" 单机伪分布式")]),s._v(" "),e("p",[s._v("对于只有个人电脑或者一台服务器的用户来说，可以使用伪分布式集群。请注意，我们若要在单机上启动两个或多个 emqx 实例，为避免端口冲突，我们需要对其它节点的监听端口做出调整。")]),s._v(" "),e("p",[s._v("基本思路是复制一份 emqx 文件夹然后命名为 emqx2 ，将原先所有 emqx 节点监听的端口 port 加上一个偏移 offset 作为新的 emqx2 节点的监听端口。例如，将原先 emqx 的MQTT/TCP 监听端口由默认的 1883 改为了 2883 作为 emqx2 的 MQTT/TCP 监听端口。完成以上操作的自动化脚本可以参照 "),e("a",{attrs:{href:"https://github.com/terry-xiaoyu/one_more_emqx",target:"_blank",rel:"noopener noreferrer"}},[s._v("集群脚本"),e("OutboundLink")],1),s._v("，具体配置请参见 "),e("RouterLink",{attrs:{to:"/zh/enterprise/latest/getting-started/config.html"}},[s._v("配置说明")]),s._v(" 与 "),e("RouterLink",{attrs:{to:"/zh/enterprise/latest/configuration/configuration.html"}},[s._v("配置项")]),s._v("。")],1),s._v(" "),e("h2",{attrs:{id:"集群脑裂与自动愈合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群脑裂与自动愈合"}},[s._v("#")]),s._v(" 集群脑裂与自动愈合")]),s._v(" "),e("p",[e("em",[s._v("EMQX")]),s._v(" 支持集群脑裂自动恢复(Network Partition Autoheal)，可在 "),e("code",[s._v("etc/emqx.conf")]),s._v(" 中配置:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("cluster.autoheal "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" on\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("集群脑裂自动恢复流程:")]),s._v(" "),e("ol",[e("li",[s._v("节点收到 Mnesia 的 "),e("code",[s._v("inconsistent_database")]),s._v(" 事件 3 秒后进行集群脑裂确认；")]),s._v(" "),e("li",[s._v("节点确认集群脑裂发生后，向 Leader 节点 (集群中最早启动节点) 上报脑裂消息；")]),s._v(" "),e("li",[s._v("Leader 节点延迟一段时间后，在全部节点在线状态下创建脑裂视图 (SplitView)；")]),s._v(" "),e("li",[s._v("Leader 节点在多数派 (majority) 分区选择集群自愈的 Coordinator 节点；")]),s._v(" "),e("li",[s._v("Coordinator 节点重启少数派 (minority) 分区节点恢复集群。")])]),s._v(" "),e("h2",{attrs:{id:"集群节点自动清除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群节点自动清除"}},[s._v("#")]),s._v(" 集群节点自动清除")]),s._v(" "),e("p",[e("em",[s._v("EMQX")]),s._v(" 支持从集群自动删除宕机节点 (Autoclean)，可在 "),e("code",[s._v("etc/emqx.conf")]),s._v(" 中配置:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("cluster.autoclean "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 5m\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"防火墙设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防火墙设置"}},[s._v("#")]),s._v(" 防火墙设置")]),s._v(" "),e("h3",{attrs:{id:"集群节点发现端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群节点发现端口"}},[s._v("#")]),s._v(" 集群节点发现端口")]),s._v(" "),e("p",[s._v("若预先设置了环境变量 WITH_EPMD=1, 启动 emqx 时会使用启动 epmd (监听端口 4369) 做节点发现。称为 "),e("code",[s._v("epmd 模式")]),s._v("。")]),s._v(" "),e("p",[s._v("若环境变量 WITH_EPMD 没有设置，则启动 emqx 时不启用 epmd，而使用 emqx ekka 的节点发现，这也是 4.0 之后的默认节点发现方式。称为 "),e("code",[s._v("ekka 模式")]),s._v("。")]),s._v(" "),e("p",[e("strong",[s._v("epmd 模式：")])]),s._v(" "),e("p",[s._v("如果集群节点间存在防火墙，防火墙需要为每个节点开通 TCP 4369 端口，用来让各节点能互相访问。")]),s._v(" "),e("p",[s._v("防火墙还需要开通一个 TCP 从 "),e("code",[s._v("node.dist_listen_min")]),s._v("(包含) 到 "),e("code",[s._v("node.dist_listen_max")]),s._v("(包含) 的端口段，\n这两个配置的默认值都是 "),e("code",[s._v("6369")]),s._v("。")]),s._v(" "),e("p",[e("strong",[s._v("ekka 模式（4.0 版本之后的默认模式）：")])]),s._v(" "),e("p",[s._v("跟"),e("code",[s._v("empd 模式")]),s._v("不同，在"),e("code",[s._v("ekka 模式")]),s._v("下，集群发现端口的映射关系是约定好的，而不是动态的。\n"),e("code",[s._v("node.dist_listen_min")]),s._v(" and "),e("code",[s._v("node.dist_listen_max")]),s._v(" 两个配置在"),e("code",[s._v("ekka 模式")]),s._v("下不起作用。")]),s._v(" "),e("p",[s._v("如果集群节点间存在防火墙，防火墙需要放开这个约定的端口。约定端口的规则如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ListeningPort = BasePort + Offset\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其中 "),e("code",[s._v("BasePort")]),s._v(" 为 4370 (不可配置), "),e("code",[s._v("Offset")]),s._v(" 为节点名的数字后缀. 如果节点名没有数字后缀的话，\n"),e("code",[s._v("Offsset")]),s._v(" 为 0。")]),s._v(" "),e("p",[s._v("举例来说, 如果 "),e("code",[s._v("emqx.conf")]),s._v(" 里配置了节点名："),e("code",[s._v("node.name = emqx@192.168.0.12")]),s._v("，那么监听端口为 "),e("code",[s._v("4370")]),s._v("，\n但对于 "),e("code",[s._v("emqx1")]),s._v(" (或者 "),e("code",[s._v("emqx-1")]),s._v(") 端口就是 "),e("code",[s._v("4371")]),s._v("，以此类推。")]),s._v(" "),e("h3",{attrs:{id:"the-cluster-prc-port"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-cluster-prc-port"}},[s._v("#")]),s._v(" The Cluster PRC Port")]),s._v(" "),e("p",[s._v("每个节点还需要监听一个 RPC 端口，也需要被防火墙也放开。跟上面说的"),e("code",[s._v("ekka 模式")]),s._v("下的集群发现端口一样，这个 RPC 端口也是约定式的。")]),s._v(" "),e("p",[s._v("RPC 端口的规则跟"),e("code",[s._v("ekka 模式")]),s._v("下的集群发现端口类似，只不过 "),e("code",[s._v("BasePort = 5370")]),s._v("。")]),s._v(" "),e("p",[s._v("就是说，如果 "),e("code",[s._v("emqx.conf")]),s._v(" 里配置了节点名："),e("code",[s._v("node.name = emqx@192.168.0.12")]),s._v("，那么监听端口为 "),e("code",[s._v("5370")]),s._v("，\n但对于 "),e("code",[s._v("emqx1")]),s._v(" (或者 "),e("code",[s._v("emqx-1")]),s._v(") 端口就是 "),e("code",[s._v("5371")]),s._v("，以此类推。")])])}),[],!1,null,null,null);t.default=n.exports},397:function(s,t,a){s.exports=a.p+"docs-assets/img/design_9.46b9a10f.png"},410:function(s,t,a){s.exports=a.p+"docs-assets/img/cluster_1.7f2c87ef.png"},411:function(s,t,a){s.exports=a.p+"docs-assets/img/cluster_2.8a49ae02.png"}}]);