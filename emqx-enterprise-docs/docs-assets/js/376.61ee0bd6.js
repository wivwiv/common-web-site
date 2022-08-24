(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{1749:function(e,v,t){"use strict";t.r(v);var _=t(10),s=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"配置说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置说明"}},[e._v("#")]),e._v(" 配置说明")]),e._v(" "),t("p",[e._v("本章节用于介绍 EMQX 配置文件基础知识，如果你需要查看配置文档，请参考"),t("RouterLink",{attrs:{to:"/zh/enterprise/latest/configuration/configuration.html"}},[e._v("配置项")]),e._v("。")],1),e._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),t("p",[e._v("EMQX 的配置文件通常以 "),t("code",[e._v(".conf")]),e._v(" 作为后缀名，你可以在 "),t("code",[e._v("etc")]),e._v(" 目录找到这些配置文件，主要配置文件包括：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("配置文件")]),e._v(" "),t("th",[e._v("说明")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("etc/emqx.conf")]),e._v(" "),t("td",[e._v("EMQX 基础配置文件")])]),e._v(" "),t("tr",[t("td",[e._v("etc/cluster.conf")]),e._v(" "),t("td",[e._v("EMQX 集群相关配置文件")])]),e._v(" "),t("tr",[t("td",[e._v("etc/rpc.conf")]),e._v(" "),t("td",[e._v("EMQX 远程调用配置文件")])]),e._v(" "),t("tr",[t("td",[e._v("etc/logger.conf")]),e._v(" "),t("td",[e._v("EMQX 日志配置文件")])]),e._v(" "),t("tr",[t("td",[e._v("etc/zones.conf")]),e._v(" "),t("td",[e._v("EMQX Zone配置文件")])]),e._v(" "),t("tr",[t("td",[e._v("etc/listeners.conf")]),e._v(" "),t("td",[e._v("EMQX 监听端口配置文件")])]),e._v(" "),t("tr",[t("td",[e._v("etc/sys_mon.conf")]),e._v(" "),t("td",[e._v("EMQX 告警监控配置文件")])]),e._v(" "),t("tr",[t("td",[e._v("etc/acl.conf")]),e._v(" "),t("td",[e._v("EMQX 默认 ACL 规则配置文件")])]),e._v(" "),t("tr",[t("td",[e._v("etc/plugins/*.conf")]),e._v(" "),t("td",[e._v("EMQX 扩展插件配置文件")])])])]),e._v(" "),t("p",[e._v("需要注意的是，安装方式不同 "),t("code",[e._v("etc")]),e._v(" 目录所处的路径可能不同，具体请参见 "),t("RouterLink",{attrs:{to:"/zh/enterprise/latest/getting-started/directory.html#"}},[e._v("目录结构")]),e._v("。")],1),e._v(" "),t("h2",{attrs:{id:"语法规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法规则"}},[e._v("#")]),e._v(" 语法规则")]),e._v(" "),t("ul",[t("li",[e._v("采用类似 sysctl 的 "),t("code",[e._v("k = v")]),e._v(" 格式")]),e._v(" "),t("li",[e._v("单个配置项的所有信息都在同一行内，换行意味着创建一个新的配置项")]),e._v(" "),t("li",[e._v("键可以通过 "),t("code",[e._v(".")]),e._v(" 进行分层，支持按树形结构管理配置项")]),e._v(" "),t("li",[e._v("值的数据类型可以是 "),t("code",[e._v("integer")]),e._v(", "),t("code",[e._v("float")]),e._v(", "),t("code",[e._v("percent")]),e._v(", "),t("code",[e._v("enum")]),e._v(", "),t("code",[e._v("ip")]),e._v(", "),t("code",[e._v("string")]),e._v(", "),t("code",[e._v("atom")]),e._v(", "),t("code",[e._v("flag")]),e._v(", "),t("code",[e._v("duration")]),e._v(" and "),t("code",[e._v("bytesize")])]),e._v(" "),t("li",[e._v("任何以 "),t("code",[e._v("＃")]),e._v(" 开头的行均被视为注释")])]),e._v(" "),t("p",[t("strong",[e._v("示例：")])]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("mqtt.max_packet_size "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" 1MB\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[e._v("#")]),e._v(" 数据类型")]),e._v(" "),t("p",[t("strong",[e._v("integer")])]),e._v(" "),t("p",[e._v("整型数据。")]),e._v(" "),t("p",[t("strong",[e._v("float")])]),e._v(" "),t("p",[e._v("浮点型数据。")]),e._v(" "),t("p",[t("strong",[e._v("percent")])]),e._v(" "),t("p",[e._v("以 "),t("code",[e._v("%")]),e._v(" 结尾的百分比数据，最终会被转换为 "),t("code",[e._v("float")]),e._v(" 类型。")]),e._v(" "),t("p",[t("strong",[e._v("enum")])]),e._v(" "),t("p",[e._v("通常我们会在类型为 "),t("code",[e._v("enum")]),e._v(" 的配置项附近列出它的所有可选值。当然，你也可以查找 "),t("RouterLink",{attrs:{to:"/zh/enterprise/latest/configuration/configuration.html"}},[e._v("配置项")]),e._v("。")],1),e._v(" "),t("p",[t("strong",[e._v("ip")])]),e._v(" "),t("p",[e._v("当你看到某个配置项的数据类型为 "),t("code",[e._v("ip")]),e._v(" 时，意味着你可以使用 "),t("code",[e._v("{ip}:{port}")]),e._v(" 的形式来设置该配置项，例如 "),t("code",[e._v("0.0.0.0:1883")]),e._v("。")]),e._v(" "),t("p",[t("strong",[e._v("string")])]),e._v(" "),t("p",[t("code",[e._v("*.conf")]),e._v(" 文件中除注释以外的所有内容都会先被解析成字符串再转换为其他类型，因此没有必要对 "),t("code",[e._v("string")]),e._v(" 类型的值额外使用双引号对值进行修饰，并且这种方式也不被支持。")]),e._v(" "),t("p",[t("em",[e._v("Yes!")])]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("dir")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" tmp\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("em",[e._v("No!!!")])]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("dir")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tmp"')]),e._v("\t\t\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("atom")])]),e._v(" "),t("p",[t("code",[e._v("atom")]),e._v(" 类型的值最终会转换成 Erlang 的 "),t("code",[e._v("atom")]),e._v("，但它在 "),t("code",[e._v("*.conf")]),e._v(" 文件中的使用方式与 "),t("code",[e._v("string")]),e._v(" 完全一致。")]),e._v(" "),t("p",[t("strong",[e._v("flag")])]),e._v(" "),t("p",[t("code",[e._v("flag")]),e._v(" 用于那些具有两个可能值的变量，"),t("code",[e._v("flag")]),e._v(" 默认可用值为 "),t("code",[e._v("on")]),e._v(" 和 "),t("code",[e._v("off")]),e._v("，它们将映射为 "),t("code",[e._v("true")]),e._v(" 和 "),t("code",[e._v("false")]),e._v(" 以供应用程序使用。如果我们为某个配置项建立了其他的映射关系，我们会在配置文件中注明，你也可以在 "),t("RouterLink",{attrs:{to:"/zh/enterprise/latest/configuration/configuration.html"}},[e._v("配置项")]),e._v(" 中查找这些信息。")],1),e._v(" "),t("p",[t("strong",[e._v("duration")])]),e._v(" "),t("p",[t("code",[e._v("duration")]),e._v(" 用于指定那些固定的时间间隔，你可以使用以下时间单位：")]),e._v(" "),t("ul",[t("li",[e._v("f - fortnight")]),e._v(" "),t("li",[e._v("w - week")]),e._v(" "),t("li",[e._v("d - day")]),e._v(" "),t("li",[e._v("h - hour")]),e._v(" "),t("li",[e._v("m - minute")]),e._v(" "),t("li",[e._v("s - second")]),e._v(" "),t("li",[e._v("ms - millisecond")])]),e._v(" "),t("p",[e._v("你可以任意组合这些时间单位，例如 "),t("code",[e._v("1w13ms")]),e._v("，也可以使用浮点数，例如 "),t("code",[e._v("0.5d")]),e._v("，这些时间间隔最终将会被转换成我们指定的基准单位。这里有一点需要注意，如果你以毫秒为单位设置了某个配置项，而它的基准单位为秒，那么它将向上舍入至最接近的描述，例如 "),t("code",[e._v("1s50ms")]),e._v(" = "),t("code",[e._v("2s")]),e._v("。因此，我们会列出这一类配置项的基准单位。")]),e._v(" "),t("p",[t("strong",[e._v("bytesize")])]),e._v(" "),t("p",[t("code",[e._v("bytesize")]),e._v(" 支持以更易读的方式来设置报文大小、缓冲区大小等配置，单位可以是 "),t("code",[e._v("KB")]),e._v("，"),t("code",[e._v("MB")]),e._v(" 和 "),t("code",[e._v("GB")]),e._v("，你也可以使用小写，例如 "),t("code",[e._v("kb")]),e._v("，但不支持大小写混合，例如 "),t("code",[e._v("Kb")]),e._v("，它们最终都将被转换为字节数。如果你未指定任何单位，那么它被直接作为字节数使用。")]),e._v(" "),t("h2",{attrs:{id:"默认配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认配置"}},[e._v("#")]),e._v(" 默认配置")]),e._v(" "),t("p",[e._v("在 EMQX 的配置文件中，你会看到很多被注释掉的配置项，这意味着这些配置项会使用他们的默认值，通常我们会在注释中列出这些配置的默认值。")]),e._v(" "),t("h2",{attrs:{id:"zone-listener"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zone-listener"}},[e._v("#")]),e._v(" Zone & Listener")]),e._v(" "),t("p",[e._v("EMQX 提供了非常多的配置项，并支持全局配置和局部配置。例如，EMQX 提供了匿名访问的功能，即允许客户端不需要用户名与密码就能连接 Broker，通常在用户的生产环境中，此功能被默认关闭，但用户可能又希望在他的内网环境中启用此功能。从 3.0 版本开始，EMQX 就通过 Zone 与 Listener 为用户提供了这种可能。")]),e._v(" "),t("h3",{attrs:{id:"listener"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listener"}},[e._v("#")]),e._v(" Listener")]),e._v(" "),t("p",[e._v("Listener 主要用于配置不同协议的监听端口和相关参数，EMQX 支持配置多个 Listener 以同时监听多个协议或端口，以下是支持的 Listener：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("监听器")]),e._v(" "),t("th",[e._v("说明")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("TCP Listener")]),e._v(" "),t("td",[e._v("A listener for MQTT which uses TCP")])]),e._v(" "),t("tr",[t("td",[e._v("SSL Listener")]),e._v(" "),t("td",[e._v("A secure listener for MQTT which uses TLS")])]),e._v(" "),t("tr",[t("td",[e._v("Websocket Listener")]),e._v(" "),t("td",[e._v("A listener for MQTT over WebSockets")])]),e._v(" "),t("tr",[t("td",[e._v("Secure Websocket Listener")]),e._v(" "),t("td",[e._v("A secure listener for MQTT over secure WebSockets (TLS)")])])])]),e._v(" "),t("p",[e._v("EMQX 默认提供 5 个 Listener，它们将占用以下端口：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("端口")]),e._v(" "),t("th",[e._v("说明")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("1883")]),e._v(" "),t("td",[e._v("MQTT/TCP 协议端口")])]),e._v(" "),t("tr",[t("td",[e._v("11883")]),e._v(" "),t("td",[e._v("MQTT/TCP 协议内部端口，仅用于本机客户端连接")])]),e._v(" "),t("tr",[t("td",[e._v("8883")]),e._v(" "),t("td",[e._v("MQTT/SSL 协议端口")])]),e._v(" "),t("tr",[t("td",[e._v("8083")]),e._v(" "),t("td",[e._v("MQTT/WS 协议端口")])]),e._v(" "),t("tr",[t("td",[e._v("8084")]),e._v(" "),t("td",[e._v("MQTT/WSS 协议端口")])])])]),e._v(" "),t("p",[e._v("Listener 配置项的命名规则为 "),t("code",[e._v("listener.<Protocol>.<Listener Name>.xxx")]),e._v("，"),t("code",[e._v("<Protocol>")]),e._v(" 即 Listener 使用的协议，目前支持 "),t("code",[e._v("tcp")]),e._v(", "),t("code",[e._v("ssl")]),e._v(", "),t("code",[e._v("ws")]),e._v(", "),t("code",[e._v("wss")]),e._v("。"),t("code",[e._v("<Listener Name>")]),e._v(" 可以随意命名，但建议是全小写的英文单词，"),t("code",[e._v("xxx")]),e._v(" 则是具体的配置项。不同协议的 Listener 的 "),t("code",[e._v("<Listener Name>")]),e._v(" 可以重复，"),t("code",[e._v("listener.tcp.external")]),e._v(" 与 "),t("code",[e._v("listener.ssl.external")]),e._v(" 是两个不同的 Listener。")]),e._v(" "),t("p",[e._v("由于默认配置的存在，我们能够非常快速地展示如何添加新的 Listener，以 TCP Listener 为例，我们只需要在 "),t("code",[e._v("emqx.conf")]),e._v(" 中添加以下一条配置即可：")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("listener.tcp.example "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("12345")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("当然这种情况我们更建议您复制一份默认 Listener 的配置进行修改。")]),e._v(" "),t("h3",{attrs:{id:"zone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zone"}},[e._v("#")]),e._v(" Zone")]),e._v(" "),t("p",[e._v("一个 Zone 定义了一组配置项 (比如最大连接数等)，Listener 可以通过配置项 "),t("code",[e._v("listener.<Protocol>.<Listener Name>.zone")]),e._v(" 指定使用某个 Zone，以使用该 Zone 下的所有配置。多个 Listener 可以共享同一个 Zone。Zone 的命名规则为 "),t("code",[e._v("zone.<Zone Name>.xxx")]),e._v("，"),t("code",[e._v("Zone Name")]),e._v(" 可以随意命名，但同样建议是全小写的英文单词，"),t("code",[e._v("xxx")]),e._v(" 是具体的配置项，你可以在 "),t("RouterLink",{attrs:{to:"/zh/enterprise/latest/configuration/configuration.html"}},[e._v("配置项")]),e._v(" 中查看 Zone 支持的所有配置项。")],1),e._v(" "),t("p",[e._v("此时，我们的每个配置项都存在三个可用值，分别是全局的值，Zone 里设置的值以及默认值，它们的优先级顺序为：Zone > Global > Default。")]),e._v(" "),t("h2",{attrs:{id:"配置更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置更新"}},[e._v("#")]),e._v(" 配置更新")]),e._v(" "),t("p",[e._v("配置项会在 EMQX Broker 与扩展插件被启动时读取并载入，EMQX Broker 目前尚不支持运行时更新配置，但由于扩展插件支持动态加载和卸载，因此可以在修改插件配置后重新加载插件来应用最新的配置项。")])])}),[],!1,null,null,null);v.default=s.exports}}]);