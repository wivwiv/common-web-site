(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{1538:function(e,t,a){"use strict";a.r(t);var o=a(10),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrade-from-4-2-to-4-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-from-4-2-to-4-3"}},[e._v("#")]),e._v(" Upgrade from 4.2 to 4.3")]),e._v(" "),a("p",[e._v("Due to database schema and inter-broker API changes, an EMQX 4.3 node can not\njoin a 4.2 cluster.")]),e._v(" "),a("p",[e._v("The recommended way to upgrade is as follows")]),e._v(" "),a("ol",[a("li",[e._v("Export database from one of the 4.2 nodes (see below for db export command)")]),e._v(" "),a("li",[e._v("Create a standing-by 4.3 cluster using 4.3 configurations")]),e._v(" "),a("li",[e._v("Import database to one of the 4.3 nodes and restart the cluster")]),e._v(" "),a("li",[e._v("Cut traffic from 4.2 cluster over to 4.3 cluster")]),e._v(" "),a("li",[e._v("Shutdown the 4.2 cluster")])]),e._v(" "),a("p",[e._v("To provision the new cluster, old data stored in the builtin database (Mnesia)\ncan be migrated with data export and import "),a("a",{attrs:{href:"#database-migration"}},[e._v("command")]),e._v(" runs.")]),e._v(" "),a("p",[e._v("There are also a few important "),a("a",{attrs:{href:"#important-config-changes"}},[e._v("configuration changes")]),e._v("\nand "),a("a",{attrs:{href:"#important-behaviour-changes"}},[e._v("behaviour changes")]),e._v(" which are summarised below.")]),e._v(" "),a("h2",{attrs:{id:"data-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-migration"}},[e._v("#")]),e._v(" Data migration")]),e._v(" "),a("p",[e._v("It is recommended to take a backup of the "),a("code",[e._v("data")]),e._v(" directory for each 4.2 node before\nthe upgrade. The "),a("code",[e._v("data")]),e._v(" directory can be located in below possible paths depending\non different installation and configuration.")]),e._v(" "),a("ul",[a("li",[e._v("Where the environment variable "),a("code",[e._v("EMQX_NODE__DATA_DIR")]),e._v(" points to")]),e._v(" "),a("li",[e._v("Where the "),a("code",[e._v("node.data_dir")]),e._v(" config key points to in "),a("code",[e._v("emqx.conf")])]),e._v(" "),a("li",[a("code",[e._v("/opt/emqx/data")]),e._v(" when running in docker (typically a mounted volume)")]),e._v(" "),a("li",[a("code",[e._v("<install-path>/data")]),e._v(" when installed from zip package extraction")]),e._v(" "),a("li",[a("code",[e._v("/var/lib/emqx/")]),e._v(" when installed from RPM or DEB packages")])]),e._v(" "),a("h3",{attrs:{id:"copy-data-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-data-directory"}},[e._v("#")]),e._v(" Copy Data directory")]),e._v(" "),a("p",[e._v("When upgrading from 4.2 to 4.3 in a different host,\nthe "),a("code",[e._v("data")]),e._v(" directory should be copied from the 4.2 host to the new 4.3 host.")]),e._v(" "),a("p",[e._v("However due to database schema changes, the old files in "),a("code",[e._v("data/mnesia")]),e._v(" should "),a("em",[e._v("not")]),e._v(" be copied,\nto the 4.3 node.")]),e._v(" "),a("h3",{attrs:{id:"database-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-migration"}},[e._v("#")]),e._v(" Database migration")]),e._v(" "),a("p",[e._v("NOTE: Please refer to "),a("RouterLink",{attrs:{to:"/en/enterprise/latest/advanced/data-import-and-export.html"}},[e._v("Data import and export")]),e._v(" for details.")],1),e._v(" "),a("p",[e._v("To export data from the old cluster, execute command.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ emqx_ctl data "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This will generate a JSON file with timestamp in its name. This file will be the input of the import command.")]),e._v(" "),a("p",[a("code",[e._v("emqx_auth_mnesia")]),e._v(" plugin now supports rules based on both "),a("code",[e._v("clientid")]),e._v(" and "),a("code",[e._v("username")]),e._v(".\nPreviously only one type of filter was supported, as configured in "),a("code",[e._v("etc/plugins/emqx_auth_mnesia.conf")]),e._v(" file.\nIn order to import data from the previous EMQX versions, it is necessary to specify the value of this parameter by passing it as a CLI option:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ emqx_ctl data "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --env "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{"auth.mnesia.as":"username"}\'')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("or")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ emqx_ctl data "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --env "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{"auth.mnesia.as":"clientid"}\'')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Or by editing the import file using the same format.")]),e._v(" "),a("h2",{attrs:{id:"important-config-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important-config-changes"}},[e._v("#")]),e._v(" Important config changes")]),e._v(" "),a("ul",[a("li",[e._v("EMQX now tries to use tlsv1.3 by default, please make sure openssl is up to date (1.1.1), otherwise SSL related configs such as "),a("code",[e._v("listener.ssl.external.tls_versions")]),e._v(" may have to be changed and remove tls1.3 from the list.")]),e._v(" "),a("li",[e._v("New configs "),a("code",[e._v("listener.ws.$zone.check_origin_enable")]),e._v(" ,"),a("code",[e._v("listener.ws.$zone.allow_origin_absence")]),e._v(" and "),a("code",[e._v("listener.ws.$zone.check_origins")]),e._v(" for better websocket security.")]),e._v(" "),a("li",[e._v("Config "),a("code",[e._v("listener.ws.$name.verify_protocol_header")]),e._v(" is replaced by "),a("code",[e._v("listener.ws.external.fail_if_no_subprotocol")]),e._v(" and "),a("code",[e._v("listener.ws.external.supported_subprotocols")])]),e._v(" "),a("li",[e._v("Config "),a("code",[e._v("node.heartbeat")]),e._v(" cannot be overriden from environment variable "),a("code",[e._v("EMQX_NODE__HEARTBEAT")]),e._v(". To be fixed "),a("a",{attrs:{href:"https://github.com/emqx/emqx/issues/5929",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5929"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("log.formatter=json")]),e._v(" to log in JSON format, it may requre more CPU resources.")]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("log.single_line=true")]),e._v(" to collect log entries in single lines.")]),e._v(" "),a("li",[e._v("Config "),a("code",[e._v("rpc.tcp_client_num")]),e._v(" now is set to 1 by default.")])]),e._v(" "),a("h3",{attrs:{id:"important-plugin-config-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important-plugin-config-changes"}},[e._v("#")]),e._v(" Important plugin config changes")]),e._v(" "),a("h4",{attrs:{id:"emqx-auth-http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emqx-auth-http"}},[e._v("#")]),e._v(" "),a("code",[e._v("emqx_auth_http")])]),e._v(" "),a("p",[e._v("To make it easier to understand, we use the key word REQUEST for "),a("code",[e._v("auth_req")]),e._v("，"),a("code",[e._v("super_req")]),e._v(" and "),a("code",[e._v("acl_req")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("The config key "),a("code",[e._v("auth.http.REQUEST")]),e._v(" is replaced by "),a("code",[e._v("auth.http.REQUEST.url")]),e._v(".")]),e._v(" "),a("li",[e._v("Config key "),a("code",[e._v("auth.http.header.<Key>")]),e._v(" is replaced by "),a("code",[e._v("auth.http.REQUEST.headers.<Key> = <Value>")]),e._v(". I.e. it is now possible to configure different HTTP headers per REQUEST type.")]),e._v(" "),a("li",[e._v("Config key "),a("code",[e._v("auth.http.REQUEST.content_type")]),e._v(" is replaced by "),a("code",[e._v("auth.http.REQUEST.headers.content_type")]),e._v(".")]),e._v(" "),a("li",[e._v("Config key "),a("code",[e._v("auth.http.request.timeout")]),e._v(" is replaced by "),a("code",[e._v("auth.http.timeout")]),e._v(".")]),e._v(" "),a("li",[e._v("Config key "),a("code",[e._v("auth.http.request.connect_timeout")]),e._v(" is replaced by "),a("code",[e._v("auth.http.connect_timeout")]),e._v(".")]),e._v(" "),a("li",[e._v("The config keys "),a("code",[e._v("auth.http.request.retry_times")]),e._v("，"),a("code",[e._v("auth.http.request.retry_interval")]),e._v(" and "),a("code",[e._v("auth.http.request.retry_backoff")]),e._v(" are deleted.")]),e._v(" "),a("li",[e._v("New config "),a("code",[e._v("auth.http.pool_size")]),e._v(" for configurable pool size.")]),e._v(" "),a("li",[e._v("New config "),a("code",[e._v("auth.http.enable_pipelining")]),e._v(" to enable HTTP Pipelining.")]),e._v(" "),a("li",[e._v("New security related configs: "),a("code",[e._v("auth.http.ssl.verify")]),e._v(" and "),a("code",[e._v("auth.http.ssl.server_name_indication")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"emqx-auth-mongo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emqx-auth-mongo"}},[e._v("#")]),e._v(" "),a("code",[e._v("emqx_auth_mongo")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("Config key "),a("code",[e._v("auth.mongo.login")]),e._v(" is renamed to "),a("code",[e._v("auth.mongo.username")])]),e._v(" "),a("li",[e._v("Config keys "),a("code",[e._v("auth.mongo.ssl_opts.*")]),e._v(" are replaced by "),a("code",[e._v("auth.mongo.ssl.*")])])]),e._v(" "),a("h4",{attrs:{id:"emqx-auth-pgsql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emqx-auth-pgsql"}},[e._v("#")]),e._v(" "),a("code",[e._v("emqx_auth_pgsql")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("Config keys "),a("code",[e._v("auth.pgsql.ssl_opts.*")]),e._v(" are replaced by "),a("code",[e._v("auth.pgsql.ssl.*")])])]),e._v(" "),a("h4",{attrs:{id:"emqx-auth-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emqx-auth-redis"}},[e._v("#")]),e._v(" "),a("code",[e._v("emqx_auth_redis")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("SSL configs are now groupped by "),a("code",[e._v(".ssl")]),e._v(" in the config path. E.g. "),a("code",[e._v("auth.redis.cacertfile")]),e._v(" is now "),a("code",[e._v("auth.redis.ssl.cacertfile")])])]),e._v(" "),a("h4",{attrs:{id:"emqx-web-hook-config-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emqx-web-hook-config-changes"}},[e._v("#")]),e._v(" "),a("code",[e._v("emqx_web_hook")]),e._v(" config changes")]),e._v(" "),a("p",[e._v("Note: webhook resources and actions in rule engine are migrated by the database export&import command.")]),e._v(" "),a("ul",[a("li",[e._v("Config key "),a("code",[e._v("web.hook.api.url")]),e._v(" is renamed to "),a("code",[e._v("web.hook.url")]),e._v(".")]),e._v(" "),a("li",[e._v("Config key "),a("code",[e._v("web.hook.encode_payload")]),e._v(" is replaced by "),a("code",[e._v("web.hook.body.encoding_of_payload_field")])]),e._v(" "),a("li",[e._v("New security config "),a("code",[e._v("web.hook.ssl.verify")]),e._v(" and "),a("code",[e._v("web.hook.ssl.server_name_indication")])]),e._v(" "),a("li",[e._v("New config "),a("code",[e._v("web.hook.pool_size")]),e._v(" makes possible to configure http connection pool size.")]),e._v(" "),a("li",[e._v("New config "),a("code",[e._v("web.hook.enable_pipelining")]),e._v(" to enable http pipelining.")])]),e._v(" "),a("h2",{attrs:{id:"important-behaviour-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important-behaviour-changes"}},[e._v("#")]),e._v(" Important behaviour changes")]),e._v(" "),a("ul",[a("li",[e._v("Log timestamp is now in RFC3339 format, make sure your log indexer is ready for this change.")]),e._v(" "),a("li",[e._v("When "),a("code",[e._v("round_robin")]),e._v(" strategy is used for shared subscription, the dispatch now starts from a random member in the group (instead of always starting from the first).")]),e._v(" "),a("li",[e._v("When rule engin starts up, unavailable resources are automatically retried.")]),e._v(" "),a("li",[e._v("New MacOS package no longer supports the version older than 10.14.")]),e._v(" "),a("li",[e._v("The underlying transport protocol for "),a("code",[e._v("emqx_exhook")]),e._v(" plugin (which supports developing plugins in other languages) has been changed from erlport to gRPC,\nmeaning it will not able to communicate with extension plugins develped for 4.2.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);