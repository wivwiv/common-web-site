(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{1723:function(_,v,a){"use strict";a.r(v);var i=a(10),e=Object(i.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"版本发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本发布"}},[_._v("#")]),_._v(" 版本发布")]),_._v(" "),a("h2",{attrs:{id:"_4-3-13-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-13-版本"}},[_._v("#")]),_._v(" 4.3.13 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2022-08-11")])]),_._v(" "),a("h3",{attrs:{id:"重要变更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重要变更"}},[_._v("#")]),_._v(" 重要变更")]),_._v(" "),a("ul",[a("li",[_._v("升级了使用的 OTP 版本，以解决 OTP Bug 导致的低概率出现随机进程失去响应的问题，建议仍在使用 4.3 的用户升级到此版本")]),_._v(" "),a("li",[_._v("从下一版本起，我们将停止对 macOS 10 的支持，转为提供 macOS 11 的安装包")])]),_._v(" "),a("h3",{attrs:{id:"功能增强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能增强"}},[_._v("#")]),_._v(" 功能增强")]),_._v(" "),a("ul",[a("li",[_._v("允许配置连接进程在 TLS 握手完成后进行垃圾回收以减少内存占用，这可以使每个 SSL 连接减少大约 35% 的内存消耗，但相应地会增加 CPU 的消耗")]),_._v(" "),a("li",[_._v("允许配置 TLS 握手日志的日志等级以便查看详细的握手过程")])]),_._v(" "),a("h3",{attrs:{id:"错误修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误修复"}},[_._v("#")]),_._v(" 错误修复")]),_._v(" "),a("ul",[a("li",[_._v("修复 ConfigMap 中取消挂载 "),a("code",[_._v("loaded_modules")]),_._v(" 文件后，通过 Helm Chart 部署时 EMQX 无法启动的问题")])]),_._v(" "),a("h2",{attrs:{id:"_4-3-12-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-12-版本"}},[_._v("#")]),_._v(" 4.3.12 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2022-07-29")])]),_._v(" "),a("h3",{attrs:{id:"功能增强-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能增强-2"}},[_._v("#")]),_._v(" 功能增强")]),_._v(" "),a("ul",[a("li",[_._v("规则引擎支持启用了 ACL 的 RocketMQ")]),_._v(" "),a("li",[_._v("支持对规则引擎中的规则进行搜索和分页")]),_._v(" "),a("li",[_._v("提供 CLI "),a("code",[_._v("./bin/emqx check_conf")]),_._v(" 以主动检查配置是否正确")]),_._v(" "),a("li",[_._v("优化规则引擎中 TDEngine 的写入性能")]),_._v(" "),a("li",[_._v("优化共享订阅性能")]),_._v(" "),a("li",[_._v("规则引擎写入数据到 TDEngine 的动作中新增 "),a("code",[_._v("db_name")]),_._v(" 字段以改善对超级表的支持")])]),_._v(" "),a("h3",{attrs:{id:"错误修复-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误修复-2"}},[_._v("#")]),_._v(" 错误修复")]),_._v(" "),a("ul",[a("li",[_._v("修复规则引擎写入 TDEngine 时动作计数错误的问题")]),_._v(" "),a("li",[_._v("修复规则引擎写入 HStreamDB 时进程池大小设置不生效的问题")]),_._v(" "),a("li",[_._v("修复启用 GB/T 32960 插件后查询订阅列表报错的问题")]),_._v(" "),a("li",[_._v("修复启用热配置的情况下将 4.2 的备份恢复到 4.3 上时配置项不兼容的问题")]),_._v(" "),a("li",[_._v("修复热升级后一旦卸载了老版本 EMQX 将无法再次启动的问题")]),_._v(" "),a("li",[_._v("修复多语言协议扩展中对 UDP 客户端的保活检查错误导致客户端不会过期的问题")]),_._v(" "),a("li",[_._v("修复多语言协议扩展中客户端信息没有及时更新的问题")]),_._v(" "),a("li",[_._v("修复热升级到 e4.3.10 及更高版本以后运行时更新 License 不生效的问题")]),_._v(" "),a("li",[_._v("修复客户端指定 Clean Session 为 false 重连时，飞行窗口中的共享订阅消息会被尝试重新派发给旧会话进程的问题")]),_._v(" "),a("li",[_._v("修复新节点加入集群后没有使用集群 License 的问题")]),_._v(" "),a("li",[_._v("修复 "),a("code",[_._v("emqx_lua_hook")]),_._v(" 插件无法取消消息发布的问题")])]),_._v(" "),a("h2",{attrs:{id:"_4-3-11-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-11-版本"}},[_._v("#")]),_._v(" 4.3.11 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2022-06-30")])]),_._v(" "),a("h3",{attrs:{id:"功能增强-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能增强-3"}},[_._v("#")]),_._v(" 功能增强")]),_._v(" "),a("ul",[a("li",[_._v("规则引擎支持将数据持久化到 HStreamDB")]),_._v(" "),a("li",[_._v("规则引擎消息重发布动作中的 QoS 和保留消息标识现在可以使用占位符")]),_._v(" "),a("li",[_._v("支持排他订阅，即一个主题只允许存在一个订阅者")]),_._v(" "),a("li",[_._v("现在 Dashboard 和管理 API 的 HTTPS 监听器可以使用受密码保护的私钥文件，提供了 "),a("code",[_._v("key_password")]),_._v(" 配置项")]),_._v(" "),a("li",[_._v("支持在主题重写规则中使用占位符 "),a("code",[_._v("%u")]),_._v(" 和 "),a("code",[_._v("%c")])]),_._v(" "),a("li",[_._v("支持在消息发布的 API 请求中设置 MQTT 5.0 的 Properties，例如消息过期间隔、响应主题等")]),_._v(" "),a("li",[_._v("优化规则引擎资源创建时的 UI，例如折叠部分不常用的选项等")]),_._v(" "),a("li",[_._v("为 ExHook 底层的 gRPC 连接开放了 KeepAlive、TCP_NODELAY、SO_RCVBUF 和 SO_SNDBUF 共 4 个与 TCP 相关的配置项")])]),_._v(" "),a("h3",{attrs:{id:"错误修复-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误修复-3"}},[_._v("#")]),_._v(" 错误修复")]),_._v(" "),a("ul",[a("li",[_._v("修复 Linux 系统中内存计算不准确的问题，并改为计算当前系统的内存占用，而不是 EMQX 的内存占用")]),_._v(" "),a("li",[_._v("修复 ExHook 在客户端重连时旧的断开连接事件会晚于新的连接事件触发的问题")]),_._v(" "),a("li",[_._v("改进 JWT 认证模块在集群环境下对启动状态的判断逻辑")]),_._v(" "),a("li",[_._v("延长规则引擎 DynamoDB 资源状态查询超时时间，以避免部分海外资源可能无法使用的问题")]),_._v(" "),a("li",[_._v("修复 PostgreSQL 数据存储插件持久化消息和更新消息消费情况时未更新时间戳的问题")]),_._v(" "),a("li",[_._v("修复规则引擎没有在创建 Tablestore、Lindorm 和 InfluxDB 资源时检查连接状态的问题")]),_._v(" "),a("li",[_._v("修复规则引擎在写入 TDEngine 资源失败时未正确更新计数的问题")]),_._v(" "),a("li",[_._v("修复 Cassandra 消息存储插件将保留消息持久化到多个表中导致消息重复的问题")]),_._v(" "),a("li",[_._v("修复从 4.3.0 版本之前的版本导出的 Kafka 资源（仅当 Produce 策略设置为 "),a("code",[_._v("first_key_dispatch")]),_._v(" 时）无法导入 4.3.0 及以后版本的问题")]),_._v(" "),a("li",[_._v("修复主题重写与延迟发布执行顺序不固定的问题，现在固定为优先执行主题重写")]),_._v(" "),a("li",[_._v("改进规则引擎持久化数据到 InfluxDB 和 Tablestore 时的空值处理，现在空值将不会被写入")]),_._v(" "),a("li",[_._v("修复规则引擎无法编码 MQTT 5.0 用户属性的问题")]),_._v(" "),a("li",[_._v("修复客户端使用 MQTT v5.0 以下的协议版本接入时 "),a("code",[_._v("connack.auth_error")]),_._v(" 计数不准确的问题")]),_._v(" "),a("li",[_._v("修复 LwM2M 和 CoAP 网关的 UDP 监听器无法绑定指定网络接口的问题")]),_._v(" "),a("li",[_._v("修复在配置文件中移除默认的 Dashboard 用户后 Dashboard 无法启动的问题")]),_._v(" "),a("li",[_._v("修复 "),a("code",[_._v("client.subscribe")]),_._v(" 钩子无法拒绝订阅的问题")]),_._v(" "),a("li",[_._v("如果 ACL 规则中的占位符没有被替换，则客户端的发布或订阅操作将被拒绝")]),_._v(" "),a("li",[_._v("修复启用了 TLS 但实际并没有与 Pulsar 建立 TLS 连接的问题")])]),_._v(" "),a("h2",{attrs:{id:"_4-3-10-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-10-版本"}},[_._v("#")]),_._v(" 4.3.10 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2022-06-01")])]),_._v(" "),a("h3",{attrs:{id:"功能增强-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能增强-4"}},[_._v("#")]),_._v(" 功能增强")]),_._v(" "),a("ul",[a("li",[_._v("为规则引擎 SQL 增加更多的时间转换函数")]),_._v(" "),a("li",[_._v("为规则引擎 SQL 增加 "),a("code",[_._v("float2str/2")]),_._v(" 函数，支持指定浮点输出精度")]),_._v(" "),a("li",[_._v("规则引擎支持使用 Basic 和 JWT 认证连接 Pulsar")]),_._v(" "),a("li",[_._v("规则引擎 Oracle 资源新增 "),a("code",[_._v("service_name")]),_._v(" 选项以支持 Oracle Database RAC")]),_._v(" "),a("li",[_._v("支持将 JWT 用于鉴权，现在 MQTT 客户端可以使用包含发布订阅白名单的特定声明进行授权")]),_._v(" "),a("li",[_._v("改进认证相关指标使更易理解，现在 "),a("code",[_._v("client.authenticate = client.auth.success + client.auth.failure")])]),_._v(" "),a("li",[_._v("支持 REST API 的监听器绑定到指定的网络接口上")]),_._v(" "),a("li",[_._v("上传 License 将自动同步至整个集群，无需每个节点单独上传，提供 HTTP API")]),_._v(" "),a("li",[_._v("支持对使用内置数据库作为数据源的认证鉴权中的用户数据进行多条件查询和模糊查询")]),_._v(" "),a("li",[_._v("支持将消息队列长度以及丢弃消息数量作为条件查询客户端")]),_._v(" "),a("li",[_._v("支持配置日志时间格式以兼容旧版本中的时间格式")]),_._v(" "),a("li",[_._v("当 "),a("code",[_._v("use_username_as_clientid")]),_._v(" 配置为 "),a("code",[_._v("true")]),_._v(" 且客户端连接时未指定 "),a("code",[_._v("username")]),_._v("，现在将拒绝连接并返回 "),a("code",[_._v("0x85")]),_._v(" 原因码")]),_._v(" "),a("li",[_._v("App secret 从部分随机改为完全随机")]),_._v(" "),a("li",[_._v("现在不兼容版本之间的热升级将被拒绝")]),_._v(" "),a("li",[_._v("允许 EMQX 的安装路径中有空格")]),_._v(" "),a("li",[_._v("引导脚本将在遇到无效的节点名称时快速失败，并提高错误消息的可读性")])]),_._v(" "),a("h3",{attrs:{id:"错误修复-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误修复-4"}},[_._v("#")]),_._v(" 错误修复")]),_._v(" "),a("ul",[a("li",[_._v("修复使用 PostgreSQL 离线消息插件时客户端上线后获取不到消息的问题")]),_._v(" "),a("li",[_._v("修复某些情况下规则引擎无法与 Pulsar 成功建立 TLS 连接的问题")]),_._v(" "),a("li",[_._v("修复规则引擎 SQL 函数 "),a("code",[_._v("hexstr_to_bin/1")]),_._v(" 无法处理半字节的问题")]),_._v(" "),a("li",[_._v("修复规则引擎资源删除时告警未被清除的问题")]),_._v(" "),a("li",[_._v("修复 Dashboard HTTPS 监听器的 "),a("code",[_._v("verify")]),_._v(" 选项未生效的问题")]),_._v(" "),a("li",[_._v("修复共享订阅投递 QoS 1 消息过程中对端会话关闭导致消息丢失的问题")]),_._v(" "),a("li",[_._v("修复日志跟踪功能跟踪大报文时堆大小增长过快而触发连接进程强制关闭策略的问题")]),_._v(" "),a("li",[_._v("修复模块禁用时未正确卸载相关钩子导致功能异常的问题")]),_._v(" "),a("li",[_._v("修复 MQTT-SN 客户端重传 QoS 2 消息时会被断开连接的问题")]),_._v(" "),a("li",[_._v("修复备份文件中关闭的模块会在恢复备份后自动启用的问题")]),_._v(" "),a("li",[_._v("修复对订阅进行多条件查询时返回结果与查询条件不符的问题")]),_._v(" "),a("li",[_._v("修复规则引擎资源连接测试不工作的问题")]),_._v(" "),a("li",[_._v("修复多项 Dashboard 显示问题")])]),_._v(" "),a("h2",{attrs:{id:"_4-3-9-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-9-版本"}},[_._v("#")]),_._v(" 4.3.9 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2022-04-18")])]),_._v(" "),a("h3",{attrs:{id:"功能增强-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能增强-5"}},[_._v("#")]),_._v(" 功能增强")]),_._v(" "),a("ul",[a("li",[_._v("编解码现已支持使用 gRPC 服务将任意二进制有效负载解码为 JSON 数据")]),_._v(" "),a("li",[_._v("支持使用 TLS 连接到 Pulsar")]),_._v(" "),a("li",[_._v("规则引擎 SQL 新增 "),a("code",[_._v("mongo_date")]),_._v(" 函数，支持将时间戳保存为 MongoDB Date 对象")]),_._v(" "),a("li",[_._v("规则引擎支持拷贝规则以快速复用")]),_._v(" "),a("li",[_._v("规则引擎 SQL 支持 zip、gzip 等压缩和解压缩函数")]),_._v(" "),a("li",[_._v("改进规则引擎在解析 Payload 失败时的错误提示")]),_._v(" "),a("li",[_._v("优化规则引擎部分资源的连接测试")]),_._v(" "),a("li",[_._v("支持为 ExHook 设置执行优先级")]),_._v(" "),a("li",[_._v("ExHook 回调接口新增 "),a("code",[_._v("RequestMeta meta")]),_._v(" Protobuf 字段用于返回 EMQX 集群名称")]),_._v(" "),a("li",[_._v("为共享订阅添加 "),a("code",[_._v("local")]),_._v(" 策略，这将优先向消息流入的节点下的共享订阅者发送消息。在某些场景下会提升共享消息调度的效率，尤其是在 MQTT 桥接配置为共享订阅时")]),_._v(" "),a("li",[_._v("为 TLS 新增对 "),a("code",[_._v("RSA-PSK-AES256-GCM-SHA384")]),_._v("、"),a("code",[_._v("RSA-PSK-AES256-CBC-SHA384")]),_._v("、"),a("code",[_._v("RSA-PSK-AES128-GCM-SHA256")]),_._v("、"),a("code",[_._v("RSA-PSK-AES128-CBC-SHA256")]),_._v(" 四个 PSK 加密套件的支持，从默认配置中移除 "),a("code",[_._v("PSK-3DES-EDE-CBC-SHA")]),_._v(" 和 "),a("code",[_._v("PSK-RC4-SHA")]),_._v(" 这两个不安全的加密套件")]),_._v(" "),a("li",[_._v("打印 Mnesia "),a("code",[_._v("wait_for_table")]),_._v(" 诊断日志\n"),a("ul",[a("li",[_._v("打印 Mnesia 内部统计的检查点")]),_._v(" "),a("li",[_._v("打印每个表加载统计的检查点，帮助定位表加载时间长的问题")])])]),_._v(" "),a("li",[_._v("严格模式下禁止订阅为空的主题")]),_._v(" "),a("li",[_._v("当 "),a("code",[_._v("loaded_modules")]),_._v(" 和 "),a("code",[_._v("loaded_plugins")]),_._v(" 文件不存在时生成默认文件")])]),_._v(" "),a("h3",{attrs:{id:"错误修复-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误修复-5"}},[_._v("#")]),_._v(" 错误修复")]),_._v(" "),a("ul",[a("li",[_._v("修复 TLS 配置项 "),a("code",[_._v("server_name_indication")]),_._v(" 设置为 disable 不生效的问题")]),_._v(" "),a("li",[_._v("修复 MongoDB 驱动潜在的进程泄漏问题")]),_._v(" "),a("li",[_._v("修复通过 CLI 命令修改的 Dashboard 默认用户的密码会在节点离开集群后重置的问题")]),_._v(" "),a("li",[_._v("静默 "),a("code",[_._v("docker-entrypoint.sh")]),_._v(" 中的 grep 和 sed 命令的运行错误日志")]),_._v(" "),a("li",[_._v("修复 API 路径包含 ISO8859-1 转义字符时，备份文件无法被正确删除和下载")]),_._v(" "),a("li",[_._v("修复 Redis 驱动在 DNS 解析失败等情况下会引发崩溃的问题")]),_._v(" "),a("li",[_._v("修复 MQTT Bridge 插件仅配置订阅主题但未配置 QoS 时无法启动的问题")]),_._v(" "),a("li",[_._v("创建规则时如果已经有使用相同 ID 的规则存在，现在规则引擎将报错而不是替换已有规则")]),_._v(" "),a("li",[_._v("修复 HTTP 驱动进程池可能无法删除的问题")]),_._v(" "),a("li",[_._v("修复模块参数更改报错后无法再次更新的问题")]),_._v(" "),a("li",[_._v("修复 Dashboard 中 GB/T 32960 接入网关模块部分字段类型错误问题")]),_._v(" "),a("li",[_._v("修复 Kafka、Pulsar 等 Bridge 资源的配置无法更新的问题")]),_._v(" "),a("li",[_._v("修复启用匿名认证时 JT/T 808 客户端认证失败的问题")])]),_._v(" "),a("h2",{attrs:{id:"_4-3-8-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-8-版本"}},[_._v("#")]),_._v(" 4.3.8 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2022-04-01")])]),_._v(" "),a("h3",{attrs:{id:"重要变更-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重要变更-2"}},[_._v("#")]),_._v(" 重要变更")]),_._v(" "),a("ul",[a("li",[_._v("对于 Docker 镜像，配置目录 "),a("code",[_._v("/opt/emqx/etc")]),_._v(" 已经从 VOLUME 列表中删除，这使用户可以更容易地使用更改后的配置来重建镜像。")]),_._v(" "),a("li",[_._v("CentOS 7 Erlang 运行系统在 OpenSSL-1.1.1n（之前是 1.0）上重建，在 v4.3.13 之前，客户端使用某些密码套件时，EMQX 将无法成功握手并触发 "),a("code",[_._v("malformed_handshake_data")]),_._v(" 异常。")]),_._v(" "),a("li",[_._v("CentOS 8 Erlang 运行时系统在 RockyLinux 8 上重新构建。 "),a("code",[_._v("centos8")]),_._v(" 将继续保留在包名中以保持向后兼容。")])]),_._v(" "),a("h3",{attrs:{id:"功能增强-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能增强-6"}},[_._v("#")]),_._v(" 功能增强")]),_._v(" "),a("ul",[a("li",[_._v("规则引擎桥接数据到 Pulsar 新增对 Pulsar proxy 的支持。")]),_._v(" "),a("li",[_._v("为 Kafka 生产者增加 OOM 保护。")]),_._v(" "),a("li",[_._v("新增命令行接口 "),a("code",[_._v("emqx_ctl pem_cache clean")]),_._v("，允许强制清除 x509 证书缓存，以在证书文件更新后立即重新加载。")]),_._v(" "),a("li",[_._v("重构 ExProto，以便匿名客户端也可以显示在 Dashboard 上。")]),_._v(" "),a("li",[_._v("桥接中的主题配置项现在可以使用 "),a("code",[_._v("${node}")]),_._v(" 占位符。")]),_._v(" "),a("li",[_._v("严格模式下新增对 MQTT 报文中的 UTF-8 字符串有效性检查。设置为 "),a("code",[_._v("true")]),_._v(" 时，无效的 UTF-8 字符串将导致客户端连接断开。")]),_._v(" "),a("li",[_._v("MQTT-SN 网关支持会话恢复时主动同步注册主题。")]),_._v(" "),a("li",[_._v("将规则引擎浮点型数据的写入精度从为小数点后 10 位提升至 17 位。")]),_._v(" "),a("li",[_._v("EMQX 将在启动时提示如何修改 Dashboard 的初始密码。")])]),_._v(" "),a("h3",{attrs:{id:"错误修复-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误修复-6"}},[_._v("#")]),_._v(" 错误修复")]),_._v(" "),a("ul",[a("li",[_._v("修复 "),a("code",[_._v("MQTT Subscriber")]),_._v(" 模块无法使用双向 SSL 连接的问题。")]),_._v(" "),a("li",[_._v("修复 "),a("code",[_._v("PSKFile")]),_._v(" 模块启动失败的问题。")]),_._v(" "),a("li",[_._v("修复 "),a("code",[_._v("Kafka 消费组")]),_._v(" 模块无法处理二进制数据的问题。")]),_._v(" "),a("li",[_._v("修复日志追踪功能无法停止的问题。")]),_._v(" "),a("li",[_._v("修复规则引擎持久化数据到 Oracle 和 Lindorm 的动作（仅限同步操作）执行失败时无法触发备选动作的问题。")]),_._v(" "),a("li",[_._v("修复规则引擎数据持久化到 Oracle 失败但成功计数仍然增加的问题。")]),_._v(" "),a("li",[_._v("修复部分 zone 配置无法清除的问题。")]),_._v(" "),a("li",[_._v("修复部分监控告警配置的修改在重启后失效的问题。")]),_._v(" "),a("li",[_._v("修复编解码功能在集群环境下不可用的问题。")]),_._v(" "),a("li",[_._v("修复集群环境下 LwM2M 客户端列表查询 API 返回数据错误导致无法访问 LwM2M 网关模块管理页面的问题。")]),_._v(" "),a("li",[_._v("修复 JT/T 808 位置报告报文解析错误的问题。")]),_._v(" "),a("li",[_._v("修复 el8 安装包在 Amazon Linux 2022 上无法启动的问题，错误内容为 "),a("code",[_._v("errno=13 Permission denied")]),_._v("。")]),_._v(" "),a("li",[_._v("修复某些情况下如果连接进程阻塞，客户端无法重连的问题，现在等待超过 15 秒无响应将强制关闭旧的连接进程。")]),_._v(" "),a("li",[_._v("修复规则引擎资源不可用时查询资源请求超时的问题。")]),_._v(" "),a("li",[_._v("修复热升级运行失败后再次运行出现 "),a("code",[_._v("{error, eexist}")]),_._v(" 错误的问题。")]),_._v(" "),a("li",[_._v("修复向不存在的主题别名发布消息会导致连接崩溃的问题。")]),_._v(" "),a("li",[_._v("修复通过 HTTP API 在另一个节点上查询 lwm2m 客户端列表时的 500 错误。")]),_._v(" "),a("li",[_._v("修复主题订阅的 HTTP API 在传入非法的 QoS 参数时崩溃的问题。")]),_._v(" "),a("li",[_._v("修复通过多语言协议扩展功能接入的连接进程异常退出时未释放相关资源导致连接计数不更新的问题。")]),_._v(" "),a("li",[_._v("修复 "),a("code",[_._v("server_keepalive")]),_._v(" 配置项的值会被错误应用于 MQTT v3.1.1 客户端的问题。")]),_._v(" "),a("li",[_._v("修复 Stomp 客户端无法触发 "),a("code",[_._v("$event/client_connection")]),_._v(" 事件消息的问题。")]),_._v(" "),a("li",[_._v("修复 EMQX 启动时系统内存告警误激活的问题。")]),_._v(" "),a("li",[_._v("修复向 MQTT-SN 客户端成功注册主题时没有重传此前因未注册主题而投递失败的消息的问题。")]),_._v(" "),a("li",[_._v("修复 "),a("code",[_._v("loaded_plugins")]),_._v(" 文件中配置了重复的插件时 EMQX 启动输出错误日志的问题。")]),_._v(" "),a("li",[_._v("修复 MongoDB 相关功能在配置不正确时输出过量错误日志的问题。")]),_._v(" "),a("li",[_._v("增加对 Dashboard User 与 AppID 的格式检查，不允许出现 "),a("code",[_._v("/")]),_._v(" 等特殊字符。")]),_._v(" "),a("li",[_._v("将踢除客户端时返回的 DISCONNECT 报文中的原因码更正为 "),a("code",[_._v("0x98")]),_._v("。")]),_._v(" "),a("li",[_._v("代理订阅将忽略为空的主题。")])]),_._v(" "),a("h2",{attrs:{id:"_4-3-7-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-7-版本"}},[_._v("#")]),_._v(" 4.3.7 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2022-02-11")])]),_._v(" "),a("h3",{attrs:{id:"重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重要"}},[_._v("#")]),_._v(" 重要")]),_._v(" "),a("p",[_._v("我们在 4.3.7 中修复了 License 总连接数计算的 Bug，License 将正确地检查集群的总连接数，而非错误地仅检查每个节点上的连接数。")]),_._v(" "),a("p",[_._v("请计划升级的用户注意此变化可能导致的客户端达到 License 限制而无法连接的可能性。")]),_._v(" "),a("h3",{attrs:{id:"增强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增强"}},[_._v("#")]),_._v(" 增强")]),_._v(" "),a("ul",[a("li",[_._v("license 连接数预警，默认连接数达到证书允许的 80% 则告警，小于 75% 时解除告警。用户也可在 "),a("code",[_._v("emqx.conf")]),_._v(" 中进行自定义："),a("code",[_._v("license.connection_high_watermark_alarm")]),_._v(" , "),a("code",[_._v("license.connection_low_watermark_alarm")])]),_._v(" "),a("li",[_._v("license 过期预警，当有效期小于 30 天时，会告警提示")]),_._v(" "),a("li",[_._v("规则引擎支持为客户端消息异常丢失事件配置规则与动作，以增强用户在这一场景的自定义处理能力")]),_._v(" "),a("li",[_._v("改进规则引擎 SQL 匹配执行过程中的相关统计指标")]),_._v(" "),a("li",[_._v("客户端模糊搜索支持 "),a("code",[_._v("*")]),_._v("， "),a("code",[_._v("(")]),_._v("，"),a("code",[_._v(")")]),_._v(" 等特殊字符")]),_._v(" "),a("li",[_._v("改进 ACL 相关统计指标，解决命中 ACL 缓存导致计数不增加的问题")]),_._v(" "),a("li",[_._v("Webhook 事件通知中新增 "),a("code",[_._v("connected_at")]),_._v(" 字段")]),_._v(" "),a("li",[_._v("在因持有锁太久而终止客户端状态之前记录客户端状态")])]),_._v(" "),a("h3",{attrs:{id:"修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[_._v("修复数据导入导出在某些情况下不可用的问题")]),_._v(" "),a("li",[_._v("Module 更新机制改进，解决更新失败后 Module 不可用的问题")]),_._v(" "),a("li",[_._v("修复规则引擎在执行比较大小的语句时候未进行类型检查的问题")]),_._v(" "),a("li",[_._v("修复更新规则引擎动作后相关计数清零的问题")]),_._v(" "),a("li",[_._v("修复 Metrics 接口默认情况下不返回 client.acl.deny 等认证鉴权指标的问题")]),_._v(" "),a("li",[_._v("修复订阅查询接口未返回分页数据的问题")]),_._v(" "),a("li",[_._v("修复 STOMP 处理 TCP 粘包时解析失败的问题")]),_._v(" "),a("li",[_._v("修复客户端过滤查询时会话创建时间选项不可用的问题")]),_._v(" "),a("li",[_._v("修复重启后内存告警可能不会触发的问题")]),_._v(" "),a("li",[_._v("修复 "),a("code",[_._v("emqx_auth_mnesia")]),_._v(" 插件中存在用户数据时导入数据崩溃的问题")])]),_._v(" "),a("h2",{attrs:{id:"_4-3-6-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-6-版本"}},[_._v("#")]),_._v(" 4.3.6 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2021-12-17")])]),_._v(" "),a("p",[_._v("EMQX 4.3.6 现已发布，主要包含以下改动:")]),_._v(" "),a("h3",{attrs:{id:"增强-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增强-2"}},[_._v("#")]),_._v(" 增强")]),_._v(" "),a("ul",[a("li",[_._v("规则引擎现已支持 Ali Lindorm 数据库")]),_._v(" "),a("li",[_._v("支持配置是否继续投递空的保留消息，以适应仍在使用 MQTT v3.1 协议的用户")]),_._v(" "),a("li",[_._v("优化内置访问控制文件模块的使用交互")])]),_._v(" "),a("h3",{attrs:{id:"修复-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-2"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[_._v("修复内存占用计算错误的问题")]),_._v(" "),a("li",[_._v("修复规则引擎 Webhook Action 的 Path 参数不支持使用 ${Variable} 的问题")]),_._v(" "),a("li",[_._v("修复 RocketMQ 异步写入时数据乱码的问题")]),_._v(" "),a("li",[_._v("修复 RocketMQ 统计指标不准的问题")]),_._v(" "),a("li",[_._v("修复某些情况下更新或删除 MQTT Bridge 和 MQTT Subscribe 资源，会持续打印连接失败日志的问题")]),_._v(" "),a("li",[_._v("修复规则引擎保存数据到 MySQL 时可能出现较高失败率的问题")]),_._v(" "),a("li",[_._v("修复规则引擎 Clickhouse 离线消息功能不可用的问题")]),_._v(" "),a("li",[_._v("修复规则引擎 MongoDB 离线消息功能中 Max Returned Count 选项无法使用的问题")]),_._v(" "),a("li",[_._v("修复部分热配置失效的问题")])]),_._v(" "),a("h2",{attrs:{id:"_4-3-5-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-5-版本"}},[_._v("#")]),_._v(" 4.3.5 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2021-11-05")])]),_._v(" "),a("p",[_._v("EMQX 4.3.5 现已发布，主要包含以下改动:")]),_._v(" "),a("h3",{attrs:{id:"增强-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增强-3"}},[_._v("#")]),_._v(" 增强")]),_._v(" "),a("ul",[a("li",[_._v("改进客户端踢除机制")]),_._v(" "),a("li",[_._v("为 LwM2M 网关添加新加密套件的支持")]),_._v(" "),a("li",[_._v("支持优先级队列的交错（以避免低优先级队列枯竭）")]),_._v(" "),a("li",[_._v("默认为 HTTP 认证插件关闭超级用户请求")]),_._v(" "),a("li",[_._v("优化 InfluxDB 写入性能")]),_._v(" "),a("li",[_._v("InfluxDB 的 Tag Name 与 Field Name 支持使用占位符")])]),_._v(" "),a("h3",{attrs:{id:"重要修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重要修复"}},[_._v("#")]),_._v(" 重要修复")]),_._v(" "),a("ul",[a("li",[_._v("修复集群间调用可能导致客户端进程失去响应的问题")]),_._v(" "),a("li",[_._v("修复 WebHook TLS 不可用的问题")]),_._v(" "),a("li",[_._v("修复 MongoDB 资源不支持域名的问题")]),_._v(" "),a("li",[_._v("修复基于内置数据库的 ACL 的性能问题")]),_._v(" "),a("li",[_._v("修复基于内置数据库的认证错误转码 HTTP 请求参数的问题")]),_._v(" "),a("li",[_._v("修复 MySQL 认证模块可能启动失败的问题")]),_._v(" "),a("li",[_._v("修复 STOMP 网关若干问题")])]),_._v(" "),a("h3",{attrs:{id:"次要修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#次要修复"}},[_._v("#")]),_._v(" 次要修复")]),_._v(" "),a("ul",[a("li",[_._v("修复规则引擎 Kafka 和 MongoDB 资源状态不准确的问题")]),_._v(" "),a("li",[_._v("修复包含 “\\” 字符的 Client ID 无法进行模糊搜索的问题")]),_._v(" "),a("li",[_._v("修复可变字节整数可能大于 4 字节的问题")]),_._v(" "),a("li",[_._v("修复可能添加重复模块的问题")]),_._v(" "),a("li",[_._v("修复无法在 Dashboard 上重启 Listener 的问题")])]),_._v(" "),a("h2",{attrs:{id:"_4-3-4-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-4-版本"}},[_._v("#")]),_._v(" 4.3.4 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2021-09-18")])]),_._v(" "),a("h3",{attrs:{id:"增强-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增强-4"}},[_._v("#")]),_._v(" 增强")]),_._v(" "),a("ul",[a("li",[_._v("规则引擎 数据桥接到pulsar 支持数据压缩")]),_._v(" "),a("li",[_._v("延长创建规则的超时间隔")])]),_._v(" "),a("h3",{attrs:{id:"修复-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-3"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[_._v("规则引擎 数据保存到InfluxDB 性能问题")]),_._v(" "),a("li",[_._v("WebHook 无法配置 sni 导致某些情况下无法使用 HTTPS 的问题")]),_._v(" "),a("li",[_._v("规则引擎 关闭规则后资源无法释放的问题")]),_._v(" "),a("li",[_._v("规则引擎 离线消息 在某些情况下接收后无法删除的问题")])]),_._v(" "),a("h2",{attrs:{id:"_4-3-3-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-3-版本"}},[_._v("#")]),_._v(" 4.3.3 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2021-08-16")])]),_._v(" "),a("h3",{attrs:{id:"增强-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增强-5"}},[_._v("#")]),_._v(" 增强")]),_._v(" "),a("ul",[a("li",[_._v("离线消息保存到Redis 支持清除残留数据")]),_._v(" "),a("li",[_._v("ExHook 增加自动重连机制，超时参数 和 备选动作")])]),_._v(" "),a("h3",{attrs:{id:"修复-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-4"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[_._v("规则引擎无法使用HTTPS 连接到 InfluxDB")]),_._v(" "),a("li",[_._v("规则引擎 数据保存到InfluxDB 动作无法使用占位符")]),_._v(" "),a("li",[_._v("规则引擎 数据桥接到WebServer 无法使用Path")]),_._v(" "),a("li",[_._v("grpc-client 超时处理逻辑")]),_._v(" "),a("li",[_._v("ExProto bug，增加重试逻辑，减少一些不必要的打印")])]),_._v(" "),a("h2",{attrs:{id:"_4-3-2-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-版本"}},[_._v("#")]),_._v(" 4.3.2 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2021-07-17")])]),_._v(" "),a("h3",{attrs:{id:"增强-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增强-6"}},[_._v("#")]),_._v(" 增强")]),_._v(" "),a("ul",[a("li",[_._v("增强 客户端上/下线消息增加更多的字段")])]),_._v(" "),a("h3",{attrs:{id:"修复-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-5"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[_._v("LwM2M网关 管理页面无法打开的问题")]),_._v(" "),a("li",[_._v("JT/T808网关 解析位置上报中自定义字段无法解析的问题")]),_._v(" "),a("li",[_._v("acl.conf 文件格式错误导致ACL规则失效的问题")]),_._v(" "),a("li",[_._v("创建 auth_ldap 认证模块失败的问题")]),_._v(" "),a("li",[_._v("多语言协议解析 异常情况下无法停止的问题")]),_._v(" "),a("li",[_._v("规则引擎 无法创建Oracle 资源的问题")]),_._v(" "),a("li",[_._v("规则引擎 同步批量写入到SQL Server失败的问题")])]),_._v(" "),a("h2",{attrs:{id:"_4-3-1-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-版本"}},[_._v("#")]),_._v(" 4.3.1 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2021-06-05")])]),_._v(" "),a("h3",{attrs:{id:"增强-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增强-7"}},[_._v("#")]),_._v(" 增强")]),_._v(" "),a("ul",[a("li",[_._v("规则引擎 离线消息保存中 TimeRange 字段的说明")])]),_._v(" "),a("h3",{attrs:{id:"修复-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-6"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[_._v("规则引擎 数据保存到 OpenTSDB 异常情况下无法写入的问题")]),_._v(" "),a("li",[_._v("热升级后版本显示错误的问题")]),_._v(" "),a("li",[_._v("MQTT-SN 协议 "),a("code",[_._v("cleansession=false")]),_._v(" 的客户端在恢复 session 时 topicid 丢失的问题")]),_._v(" "),a("li",[_._v("预置模块在重启后修改配置丢失的问题")]),_._v(" "),a("li",[_._v("Dashboard 规则引擎编辑显示错误问题")]),_._v(" "),a("li",[_._v("Dashboard 导航面包屑显示问题")])]),_._v(" "),a("h2",{attrs:{id:"_4-3-0-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-0-版本"}},[_._v("#")]),_._v(" 4.3.0 版本")]),_._v(" "),a("p",[a("em",[_._v("发布日期: 2021-05-19")])]),_._v(" "),a("h3",{attrs:{id:"增强-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增强-8"}},[_._v("#")]),_._v(" 增强")]),_._v(" "),a("ul",[a("li",[_._v("规则引擎消息桥接到 Kafka 分区支持动态扩容")]),_._v(" "),a("li",[_._v("规则引擎支持 ClickHouse 离线消息与代理订阅")]),_._v(" "),a("li",[_._v("规则引擎中支持批量操作动作默认启用批量异步模式")]),_._v(" "),a("li",[_._v("规则引擎数据保存到 InfluxDB 重构以增强性能")]),_._v(" "),a("li",[_._v("模块 消息下发 Kafka 消费组支持配置 Payload 格式")])]),_._v(" "),a("h3",{attrs:{id:"修复-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复-7"}},[_._v("#")]),_._v(" 修复")]),_._v(" "),a("ul",[a("li",[_._v("规则引擎动作编辑数据不一致问题")]),_._v(" "),a("li",[_._v("Dashboard 模块翻译问题")]),_._v(" "),a("li",[_._v("规则引擎 SQL语句支持 null 函数，undefined 转成 null")])])])}),[],!1,null,null,null);v.default=e.exports}}]);