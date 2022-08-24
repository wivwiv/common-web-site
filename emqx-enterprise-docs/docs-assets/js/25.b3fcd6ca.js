(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1298:function(s,a,t){s.exports=t.p+"docs-assets/img/cass_sub_01.d96ce5c5.png"},1299:function(s,a,t){s.exports=t.p+"docs-assets/img/cass_sub_02.05fefcb0.png"},1300:function(s,a,t){s.exports=t.p+"docs-assets/img/cass_sub_03.b84e1db5.png"},1301:function(s,a,t){s.exports=t.p+"docs-assets/img/cass_sub_04.7157ecef.png"},1302:function(s,a,t){s.exports=t.p+"docs-assets/img/cass_sub_05.1e2815cf.png"},1303:function(s,a,t){s.exports=t.p+"docs-assets/img/cass_sub_06.4b6a2fd3.png"},1304:function(s,a,t){s.exports=t.p+"docs-assets/img/cass_sub_07.65c89b6c.png"},1305:function(s,a,t){s.exports=t.p+"docs-assets/img/cass_sub_08.84863f52.png"},1306:function(s,a,t){s.exports=t.p+"docs-assets/img/cass_sub_09.63ff5c5b.png"},1307:function(s,a,t){s.exports=t.p+"docs-assets/img/cass_sub_10.1a7e4254.png"},1816:function(s,a,t){"use strict";t.r(a);var n=t(10),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"从-cassandra-中获取订阅关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从-cassandra-中获取订阅关系"}},[s._v("#")]),s._v(" 从 Cassandra 中获取订阅关系")]),s._v(" "),n("p",[s._v("搭建 Cassandra 数据库，并设置用户名密码为 root/public，以 MacOS X 为例:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ brew "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cassandra\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 修改配置，关闭匿名认证")]),s._v("\n$  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/etc/cassandra/cassandra.yaml\n\n    authenticator: PasswordAuthenticator\n    authorizer: CassandraAuthorizer\n\n$ brew services start cassandra\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 创建 root 用户")]),s._v("\n$ cqlsh -ucassandra -pcassandra\n\ncreate user root with password "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'public'")]),s._v(" superuser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v('创建 "mqtt" 表空间:')]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ cqlsh -uroot -ppublic\n\nCREATE KEYSPACE mqtt WITH replication "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'class'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SimpleStrategy'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'replication_factor'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  AND durable_writes "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("创建 mqtt_sub 表:")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" mqtt_sub "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    clientid "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    topic "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    qos "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("clientid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" topic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" CLUSTERING "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("topic "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" bloom_filter_fp_chance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" caching "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" {"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'keys'")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ALL'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rows_per_partition'")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NONE'")]),s._v("}\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" compaction "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" {"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'class'")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'max_threshold'")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'32'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'min_threshold'")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4'")]),s._v("}\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" compression "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" {"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chunk_length_in_kb'")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'64'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'class'")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.cassandra.io.compress.LZ4Compressor'")]),s._v("}\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" crc_check_chance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" dclocal_read_repair_chance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" default_time_to_live "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" gc_grace_seconds "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("864000")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" max_index_interval "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" memtable_flush_period_in_ms "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" min_index_interval "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" read_repair_chance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" speculative_retry "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'99PERCENTILE'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("订阅关系表结构不能修改，请使用上面SQL语句创建")])]),s._v(" "),n("p",[s._v("创建规则:")]),s._v(" "),n("p",[s._v("打开 "),n("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQX Dashboard"),n("OutboundLink")],1),s._v("，选择左侧的“规则”选项卡。")]),s._v(" "),n("p",[s._v("然后填写规则 SQL:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("SELECT * FROM "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$events")]),s._v('/client_connected"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(1298),alt:""}})]),s._v(" "),n("p",[s._v("关联动作:")]),s._v(" "),n("p",[s._v("在“响应动作”界面选择“添加动作”，然后在“新增动作”下拉框里选择“从 Cassandra 中获取订阅列表”")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1299),alt:""}})]),s._v(" "),n("p",[s._v("填写动作参数:")]),s._v(" "),n("p",[s._v("“从 Cassandra 中获取订阅列表”动作需要一个参数：")]),s._v(" "),n("p",[s._v("1). 关联资源。现在资源下拉框为空，可以点击右上角的 “新建” 来创建一个 Cassandra 资源：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1300),alt:""}})]),s._v(" "),n("p",[s._v("弹出“创建资源”对话框")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1301),alt:""}})]),s._v(" "),n("p",[s._v("填写资源配置:")]),s._v(" "),n("p",[s._v("填写真实的 Cassandra 服务器地址，其他配置相应的值，然后点击 “测试连接” 按钮，确保连接测试成功。")]),s._v(" "),n("p",[s._v("最后点击 “确定” 按钮。")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1302),alt:""}})]),s._v(" "),n("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1303),alt:""}})]),s._v(" "),n("p",[s._v("返回规则创建界面，点击 “创建”。")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1304),alt:""}})]),s._v(" "),n("p",[s._v("规则已经创建完成，通过 “cqlsh” 往 Cassandra 插入一条订阅关系:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("insert into mqtt_sub(clientid, topic, qos) values('test', 't1', 1);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(1305),alt:""}})]),s._v(" "),n("p",[s._v("通过 Dashboard 登录 clientid 为 test 的设备:")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1306),alt:""}})]),s._v(" "),n("p",[s._v("查看“订阅”列表，可以看到 Broker 从 Cassandra 里面获取到订阅关系，并代理设备订阅:")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1307),alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);