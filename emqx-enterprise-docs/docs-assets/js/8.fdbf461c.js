(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1627:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"save-offline-messages-to-cassandra"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#save-offline-messages-to-cassandra"}},[s._v("#")]),s._v(" Save offline messages to Cassandra")]),s._v(" "),e("p",[s._v("Set up the Cassandra database and set the user name and password to root/public. Take MacOS X as an example:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ brew "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cassandra\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Modify the configuration and disable anonymous authentication")]),s._v("\n$  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/etc/cassandra/cassandra.yaml\n\n    authenticator: PasswordAuthenticator\n    authorizer: CassandraAuthorizer\n\n$ brew services start cassandra\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Create root user")]),s._v("\n$ cqlsh -ucassandra -pcassandra\n\ncreate user root with password "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'public'")]),s._v(" superuser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("Initialize the Cassandra tablespace:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ cqlsh -uroot -ppublic\n\nCREATE KEYSPACE mqtt WITH replication "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'class'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SimpleStrategy'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'replication_factor'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  AND durable_writes "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("Create the mqtt_msg table:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" mqtt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mqtt_msg "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    topic "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    msgid "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    arrived "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    payload "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    qos "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    retain "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sender "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("topic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" msgid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" CLUSTERING "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msgid "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" bloom_filter_fp_chance "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" caching "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" {"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'keys'")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ALL'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rows_per_partition'")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NONE'")]),s._v("}\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" compaction "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" {"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'class'")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'max_threshold'")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'32'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'min_threshold'")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4'")]),s._v("}\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" compression "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" {"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chunk_length_in_kb'")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'64'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'class'")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.cassandra.io.compress.LZ4Compressor'")]),s._v("}\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" crc_check_chance "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" dclocal_read_repair_chance "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" default_time_to_live "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" gc_grace_seconds "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("864000")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" max_index_interval "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" memtable_flush_period_in_ms "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" min_index_interval "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" read_repair_chance "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" speculative_retry "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'99PERCENTILE'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("The message table structure cannot be modified. Please use the above SQL statement to create")])]),s._v(" "),e("p",[s._v("Create rules:")]),s._v(" "),e("p",[s._v("Open "),e("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQX Dashboard"),e("OutboundLink")],1),s._v(' and select the "Rules" tab on the left.')]),s._v(" "),e("p",[s._v("Then fill in the rule SQL:")]),s._v(" "),e("p",[s._v("FROM description")]),s._v(" "),e("p",[s._v("​\t"),e("strong",[s._v("t/#")]),s._v(": The publisher publishes a message to trigger the action of saving of offline messages to Cassandra")]),s._v(" "),e("p",[s._v("​\t"),e("strong",[s._v("$events/session_subscribed")]),s._v(": The subscriber subscribes to topics to trigger  the action of getting offline messages")]),s._v(" "),e("p",[s._v("​\t"),e("strong",[s._v("$events/message_acked")]),s._v(": The subscriber replies to the message ACK to trigger the action of deleting the offline message that has been received")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("SELECT * FROM "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$events")]),s._v('/session_subscribed"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$events")]),s._v('/message_acked"')]),s._v(" WHERE topic "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=~")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t/#'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(853),alt:""}})]),s._v(" "),e("p",[s._v("Related actions:")]),s._v(" "),e("p",[s._v('Select "Add Action" on the "Response Action" interface, and then select "Save offline messages to Cassandra" in the "Add Action" drop-down box')]),s._v(" "),e("p",[e("img",{attrs:{src:a(854),alt:""}})]),s._v(" "),e("p",[s._v('Now that the resource drop-down box is empty, and you can click "New" in the upper right corner to create a Cassandra resource:')]),s._v(" "),e("p",[e("img",{attrs:{src:a(855),alt:""}})]),s._v(" "),e("p",[s._v('The "Create Resource" dialog box pops up')]),s._v(" "),e("p",[e("img",{attrs:{src:a(856),alt:""}})]),s._v(" "),e("p",[s._v("Fill in the resource configuration:")]),s._v(" "),e("p",[s._v('Fill in the real Cassandra server address and the values corresponding to other configurations, and then click the "Test Connection" button to ensure that the connection test is successful.')]),s._v(" "),e("p",[s._v('Finally click the "OK" button.')]),s._v(" "),e("p",[e("img",{attrs:{src:a(857),alt:""}})]),s._v(" "),e("p",[s._v('Return to the response action interface and click "OK".')]),s._v(" "),e("p",[e("img",{attrs:{src:a(858),alt:""}})]),s._v(" "),e("p",[s._v('Return to the rule creation interface and click "Create".')]),s._v(" "),e("p",[e("img",{attrs:{src:a(859),alt:""}})]),s._v(" "),e("p",[s._v("The rule has been created, and you can send a piece of data through the WebSocket client of Dashboard "),e("strong",[s._v("(The QoS of the published message must be greater than 0):")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(860),alt:""}})]),s._v(" "),e("p",[s._v("After the message is sent, you can see the message is saved in Cassandra through cqlsh:")]),s._v(" "),e("p",[e("img",{attrs:{src:a(861),alt:""}})]),s._v(" "),e("p",[s._v('Use another client to subscribe to the topic "t/1" (the QoS of the subscribed topic must be greater than 0, otherwise the message will be received repeatedly):')]),s._v(" "),e("p",[e("img",{attrs:{src:a(862),alt:""}})]),s._v(" "),e("p",[s._v("After subscribing, you will receive the offline message saved in Cassandra immediately:")]),s._v(" "),e("p",[e("img",{attrs:{src:a(863),alt:""}})]),s._v(" "),e("p",[s._v("Offline messages will be deleted in Cassandra after being received:")]),s._v(" "),e("p",[e("img",{attrs:{src:a(864),alt:""}})])])}),[],!1,null,null,null);t.default=n.exports},853:function(s,t,a){s.exports=a.p+"docs-assets/img/cass_offline_msg_01.51e78dfe.png"},854:function(s,t,a){s.exports=a.p+"docs-assets/img/cass_offline_msg_02.26e4c5cc.png"},855:function(s,t,a){s.exports=a.p+"docs-assets/img/cass_offline_msg_03.fe6799c9.png"},856:function(s,t,a){s.exports=a.p+"docs-assets/img/cass_offline_msg_04.7157ecef.png"},857:function(s,t,a){s.exports=a.p+"docs-assets/img/cass_offline_msg_05.c72c3cf4.png"},858:function(s,t,a){s.exports=a.p+"docs-assets/img/cass_offline_msg_06.cacf08d6.png"},859:function(s,t,a){s.exports=a.p+"docs-assets/img/cass_offline_msg_07.070c5eaa.png"},860:function(s,t,a){s.exports=a.p+"docs-assets/img/cass_offline_msg_08.9b109a80.png"},861:function(s,t,a){s.exports=a.p+"docs-assets/img/cass_offline_msg_09.7a0d6b8f.png"},862:function(s,t,a){s.exports=a.p+"docs-assets/img/cass_offline_msg_10.1cb47e02.png"},863:function(s,t,a){s.exports=a.p+"docs-assets/img/cass_offline_msg_11.4d50b468.png"},864:function(s,t,a){s.exports=a.p+"docs-assets/img/cass_offline_msg_12.bdfcb8ee.png"}}]);