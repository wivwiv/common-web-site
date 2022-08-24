(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{1478:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[s._v("#")]),s._v(" MongoDB")]),s._v(" "),t("p",[s._v("MongoDB authentication uses an external MongoDB database as the authentication data source, which can store a large amount of data and facilitate integration with external device management systems.")]),s._v(" "),t("p",[s._v("Plugin:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("emqx_auth_mongo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("The emqx_auth_mongo plugin also includes ACL feature, which can be disabled via comments")])]),s._v(" "),t("p",[s._v("To enable MongoDB authentication, you need to configure the following in "),t("code",[s._v("etc/plugins/emqx_auth_mongo.conf")]),s._v(" :")]),s._v(" "),t("h2",{attrs:{id:"mongodb-connection-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-connection-information"}},[s._v("#")]),s._v(" MongoDB Connection information")]),s._v(" "),t("p",[s._v("For MongoDB basic connection information, it needs to ensure that all nodes in the cluster can access.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etc/plugins/emqx_auth_mongo.conf")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## MongoDB Architecture type")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Value: single | unknown | sharded | rs")]),s._v("\nauth.mongo.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" single\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##rs mode needs to set rs name")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.rs_set_name =")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Server list, which is separated by comma in cluster mode")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Examples: 127.0.0.1:27017,127.0.0.2:27017...")]),s._v("\nauth.mongo.server "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:27017\n\nauth.mongo.pool "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n\nauth.mongo.login "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\nauth.mongo.password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.auth_source = admin")]),s._v("\n\nauth.mongo.database "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mqtt\n\nauth.mongo.query_timeout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 5s\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## SSL option")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# auth.mongo.ssl = false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.ssl_opts.keyfile =")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.ssl_opts.certfile =")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.ssl_opts.cacertfile =")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## MongoDB write mode.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Value: unsafe | safe")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.w_mode =")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Mongo read mode.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Value: master | slave_ok")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.r_mode =")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## MongoDB topology configuration, which is not used generally. See MongoDB official ##website documentation")]),s._v("\nauth.mongo.topology.pool_size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nauth.mongo.topology.max_overflow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.overflow_ttl = 1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.overflow_check_period = 1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.local_threshold_ms = 1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.connect_timeout_ms = 20000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.socket_timeout_ms = 100")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.server_selection_timeout_ms = 30000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.wait_queue_timeout_ms = 1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.heartbeat_frequency_ms = 10000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.min_heartbeat_frequency_ms = 1000")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br")])]),t("h2",{attrs:{id:"default-data-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-data-structure"}},[s._v("#")]),s._v(" Default data structure")]),s._v(" "),t("p",[s._v("In the default configuration of MongoDB authentication, you need to ensure that the database has the following collections:")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password hash"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  salt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password salt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  is_superuser"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  created"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-02-20 12:12:14"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("The sample data in the default configuration is as follows:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("use mqtt\n\ndb.mqtt_user.insert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"emqx"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"efa1f375d76194fa51a3556a97e641e61685f914d446979da50a551a4333ffd7"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_superuser"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"salt"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("After MongoDB authentication is enabled, you can connect with username: emqx, password: public.")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("This is the collection structure used by default configuration. After being familiar with the use of the plugin, you can use any collection that meets the conditions for authentication.")])]),s._v(" "),t("h2",{attrs:{id:"salting-rules-and-hash-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#salting-rules-and-hash-methods"}},[s._v("#")]),s._v(" Salting rules and hash methods")]),s._v(" "),t("p",[s._v("MongoDB authentication support to configure "),t("RouterLink",{attrs:{to:"/en/enterprise/latest/advanced/auth.html#password-salting-rules-and-hash-methods"}},[s._v("Salting rules and hash methods")]),s._v("：")],1),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etc/plugins/emqx_auth_mongo.conf")]),s._v("\n\nauth.mongo.password_hash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sha256\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"auth-selector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auth-selector"}},[s._v("#")]),s._v(" auth_selector")]),s._v(" "),t("p",[s._v("During authentication, EMQX Broker will use the current client information to populate and execute the user-configured authentication SQL to query the client's authentication data in the database.")]),s._v(" "),t("p",[s._v("MongoDB supported configuration collection name, password field, and selector command")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etc/plugins/emqx_auth_mongo.conf")]),s._v("\n\nauth.mongo.auth_query.collection "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mqtt_user\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## If salting is enabled, it needs to be configured as password,salt")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Value:  password | password,salt")]),s._v("\nauth.mongo.auth_query.password_field "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" password\n\nauth.mongo.auth_query.selector "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%u\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("You can use the following placeholders in the selector, and EMQX Broker will be automatically populated with client information when executed:")]),s._v(" "),t("ul",[t("li",[s._v("%u：Username")]),s._v(" "),t("li",[s._v("%c：Client ID")]),s._v(" "),t("li",[s._v("%C：TLS certificate common name (the domain name or subdomain name of the certificate), valid only for TLS connections")]),s._v(" "),t("li",[s._v("%d：TLS certificate subject, valid only for TLS connections")])]),s._v(" "),t("p",[s._v("You can adjust the authentication query according to business to achieve more business-related functions, such as adding multiple query conditions and using database preprocessing functions. However, in any case, the authentication query must meet the following conditions:")]),s._v(" "),t("ol",[t("li",[s._v("The query result must include the password field, which is used by EMQX Broker to compare with the client password")]),s._v(" "),t("li",[s._v("If the salting configuration is enabled, the query result must include the salt field, which is used by EMQX Broker as the salt value")]),s._v(" "),t("li",[s._v("MongoDB uses the findOne query command to ensure that the query results you expect are shown in the first data")])])])}),[],!1,null,null,null);a.default=e.exports}}]);