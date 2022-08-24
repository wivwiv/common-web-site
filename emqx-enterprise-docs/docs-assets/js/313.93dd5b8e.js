(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{1659:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis-acl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-acl"}},[s._v("#")]),s._v(" Redis ACL")]),s._v(" "),t("p",[s._v("Redis ACL 使用外部 Redis 数据库存储 ACL 规则，可以存储大量数据、动态管理 ACL，方便与外部设备管理系统集成")]),s._v(" "),t("p",[s._v("插件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("emqx_auth_redis\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("emqx_auth_redis 插件同时包含认证功能，可通过注释禁用。")])]),s._v(" "),t("h2",{attrs:{id:"redis-连接信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-连接信息"}},[s._v("#")]),s._v(" Redis 连接信息")]),s._v(" "),t("p",[s._v("Redis 基础连接信息，需要保证集群内所有节点均能访问。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etc/plugins/emqx_auth_redis.conf")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 服务器地址")]),s._v("\nauth.redis.server "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 连接池大小")]),s._v("\nauth.redis.pool "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n\nauth.redis.database "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nauth.redis.password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"默认数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认数据结构"}},[s._v("#")]),s._v(" 默认数据结构")]),s._v(" "),t("p",[s._v("Redis 认证插件默认配置下使用哈希表存储认证数据，使用 "),t("code",[s._v("mqtt_acl:")]),s._v(" 作为 Redis 键前缀。")]),s._v(" "),t("h3",{attrs:{id:"acl-规则数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acl-规则数据"}},[s._v("#")]),s._v(" ACL 规则数据")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 格式")]),s._v("\nHSET mqtt_acl:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("username clientid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("topic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("access"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 结构")]),s._v("\nredis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hgetall mqtt_acl:emqx\n  testtopic/1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("Redis ACL 一条规则中定义了发布、订阅或发布/订阅的信息，在规则中的都是"),t("strong",[s._v("允许")]),s._v("列表，即白名单规则。\n对应主题有权且时将直接")]),s._v(" "),t("p",[s._v("规则字段说明：")]),s._v(" "),t("ul",[t("li",[s._v("%u：用户名")]),s._v(" "),t("li",[s._v("%c：Client ID")])]),s._v(" "),t("p",[s._v("默认配置下示例数据：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("HSET mqtt_acl:emqx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1")]),s._v("\nHSET mqtt_acl:testtopic/2 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("启用 Redis ACL 后并以用户名 emqx 成功连接后，客户端应当数据具有相应的主题权限。")]),s._v(" "),t("h2",{attrs:{id:"超级用户查询命令-super-cmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#超级用户查询命令-super-cmd"}},[s._v("#")]),s._v(" 超级用户查询命令（super cmd）")]),s._v(" "),t("p",[s._v("进行 ACL 鉴权时，EMQX 将使用当前客户端信息填充并执行用户配置的超级用户查询命令，查询客户端是否为超级用户。客户端为超级用户时将跳过 ACL 查询命令。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etc/plugins/emqx_auth_redis.conf")]),s._v("\n\nauth.redis.super_cmd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" HGET mqtt_user:%u is_superuser\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("你可以在命令中使用以下占位符，执行时 EMQX 将自动填充为客户端信息：")]),s._v(" "),t("ul",[t("li",[s._v("%u：用户名")]),s._v(" "),t("li",[s._v("%c：Client ID")]),s._v(" "),t("li",[s._v("%C：TLS 证书公用名（证书的域名或子域名），仅当 TLS 连接时有效")]),s._v(" "),t("li",[s._v("%d：TLS 证书 subject，仅当 TLS 连接时有效")])]),s._v(" "),t("p",[s._v("你可以根据业务需要调整超级用户查询命令，如添加多个查询条件、使用数据库预处理函数，以实现更多业务相关的功能。但是任何情况下超级用户查询命令需要满足以下条件：")]),s._v(" "),t("ol",[t("li",[s._v("查询结果中第一个数据必须为 is_superuser 数据")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("如果不需要超级用户功能，注释并禁用该选项能有效提高效率")])]),s._v(" "),t("h2",{attrs:{id:"acl-查询命令-acl-cmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acl-查询命令-acl-cmd"}},[s._v("#")]),s._v(" ACL 查询命令（acl cmd）")]),s._v(" "),t("p",[s._v("进行 ACL 鉴权时，EMQX 将使用当前客户端信息填充并执行用户配置的超级用户 SQL，如果没有启用超级用户 SQL 或客户端不是超级用户，则使用 ACL 查询命令查询出该客户端在数据库中的 ACL 规则。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etc/plugins/emqx_auth_redis.conf")]),s._v("\n\nauth.redis.acl_cmd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" HGETALL mqtt_acl:%u\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("你可以在 ACL 查询命令中使用以下占位符，执行时 EMQX 将自动填充为客户端信息：")]),s._v(" "),t("ul",[t("li",[s._v("%u：用户名")]),s._v(" "),t("li",[s._v("%c：Client ID")])]),s._v(" "),t("p",[s._v("你可以根据业务需要调整 ACL 查询命令，但是任何情况下 ACL 查询命令需要满足以下条件：")]),s._v(" "),t("ol",[t("li",[s._v("哈希中使用 topic 作为键，access 作为值")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("Redis ACL 规则需严格使用上述数据结构。")]),s._v(" "),t("p",[s._v("Redis ACL 中添加的所有规则都是 "),t("strong",[s._v("允许")]),s._v(" 规则。即白名单。")]),s._v(" "),t("p",[s._v("Redis 中某个客户端的规则列表为空时将交由下一个 acl 插件继续检查，否则将立即终止认证链并返回认证结果。\n规则非空且未匹配到相应的 pub/sub 权限时，将返回认证失败（拒绝相应的 pub/sub 行为）并终止认证链。")]),s._v(" "),t("p",[s._v("同时启用多个 auth/ACL 插件时，建议将 Redis ACL 认证置于其他启用的 auth/ACL 插件后。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);