(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{1537:function(e,t,n){"use strict";n.r(t);var s=n(10),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"upgrade-guide"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-guide"}},[e._v("#")]),e._v(" Upgrade guide")]),e._v(" "),n("h2",{attrs:{id:"upgrade-to-version-4-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-to-version-4-0"}},[e._v("#")]),e._v(" Upgrade to version 4.0")]),e._v(" "),n("p",[e._v("The following provides a set of guidelines for migrating from the EMQX 3.x version to the latest EMQX 4.0 version. Although we tried to reduce some major changes, we have modified in several places in order to balance performance and simplify usage.")]),e._v(" "),n("p",[n("strong",[e._v("How long does it take to migrate from EMQX 3.x to EMQX 4.0?")])]),e._v(" "),n("p",[e._v("EMQX always guarantees the standardization and continuous update of the access protocol. When the version is migrated, the client does not need any adjustments, which means that you do not need to stop the device function and reprogram the device firmware. You only need to pay attention to the changes of plug-ins, configuration items, command line and REST API.")]),e._v(" "),n("p",[e._v("The time required depends on the size of your project and the scope of changes. Small and medium-sized projects can be completed within a day.")]),e._v(" "),n("h3",{attrs:{id:"core"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#core"}},[e._v("#")]),e._v(" Core")]),e._v(" "),n("h4",{attrs:{id:"change-client-id-to-clientid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#change-client-id-to-clientid"}},[e._v("#")]),e._v(" Change client_id  to clientid")]),e._v(" "),n("p",[e._v("We have made major changes in variable names here. All client_id characters in EMQX have been changed to clientid, including:")]),e._v(" "),n("ul",[n("li",[e._v("URL of REST API, field name in request and corresponding data")]),e._v(" "),n("li",[e._v("Naming conventions in the source code")]),e._v(" "),n("li",[e._v("Command line CLI")])]),e._v(" "),n("h3",{attrs:{id:"rest-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rest-api"}},[e._v("#")]),e._v(" REST API")]),e._v(" "),n("h4",{attrs:{id:"change-v3-to-v4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#change-v3-to-v4"}},[e._v("#")]),e._v(" Change v3 to v4")]),e._v(" "),n("p",[e._v("REST API is changed from "),n("code",[e._v("http(s)://host:8081/api/v3/")]),e._v(" to\n"),n("code",[e._v("http(s)://host:8081/api/v4/")]),e._v("。")]),e._v(" "),n("h4",{attrs:{id:"change-connection-to-clients"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#change-connection-to-clients"}},[e._v("#")]),e._v(" Change connection to clients")]),e._v(" "),n("p",[e._v("Change the concept of connections to clients, which involves APIs related to nodes and clusters:")]),e._v(" "),n("ul",[n("li",[e._v("Get the list of cluster connections:"),n("code",[e._v("GET /connections")]),e._v(" -> "),n("code",[e._v("/clients")])]),e._v(" "),n("li",[e._v("Get the specified connection information of the cluster:"),n("code",[e._v("GET /connections/:clientid")]),e._v(" -> "),n("code",[e._v("GET /connections/:clientid")])]),e._v(" "),n("li",[e._v("Get the node connection list:"),n("code",[e._v("GET /nodes/:node/connections")]),e._v(" -> "),n("code",[e._v("GET /nodes/:node/clients")])]),e._v(" "),n("li",[e._v("Get the specified connection information of the node:"),n("code",[e._v("GET /nodes/:node/connections/:clientid")]),e._v(" -> "),n("code",[e._v("GET /nodes/:node/clients/:clientid")])]),e._v(" "),n("li",[e._v("Field names of client_id in request and corresponding data  are all changed to clientid.")])]),e._v(" "),n("p",[e._v("At the same time, there is a big change in the content returned by the API. See the 4.0 document for details.")]),e._v(" "),n("h4",{attrs:{id:"remove-session-related-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remove-session-related-api"}},[e._v("#")]),e._v(" Remove session related API")]),e._v(" "),n("p",[e._v("The concept of Channel was introduced in 4.0, which combines session and client. The following API has been "),n("strong",[e._v("removed")]),e._v(" in version 4.0:")]),e._v(" "),n("ul",[n("li",[e._v("Get the list of cluster sessions:"),n("code",[e._v("GET /sessions")])]),e._v(" "),n("li",[e._v("Get the session information of the specified client of the cluster:"),n("code",[e._v("GET /sessions/:clientid")])]),e._v(" "),n("li",[e._v("Get the list of node sessions: "),n("code",[e._v("GET /nodes/:node/sessions")])]),e._v(" "),n("li",[n("strong",[e._v("Get")]),e._v(" the session information of the specified client of the node:"),n("code",[e._v("GET /nodes/:node/sessions/:clientid")])])]),e._v(" "),n("p",[e._v("If you need to obtain session-related information after 4.0 version, please use the client-related API.")]),e._v(" "),n("h4",{attrs:{id:"remove-plugin-configuration-acquisition-and-change-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remove-plugin-configuration-acquisition-and-change-api"}},[e._v("#")]),e._v(" Remove plugin configuration acquisition and change API")]),e._v(" "),n("p",[e._v("The plugin configuration may contain sensitive information. At the same time, the plug-in configuration does not support persistence, which brings great doubts to users. Taking security issues and practical issues into account, we "),n("strong",[e._v("removed")]),e._v(" the plugin acquisition and change API.")]),e._v(" "),n("ul",[n("li",[e._v("Get plug-in configuration information:"),n("code",[e._v("GET /nodes/:node/plugins/:plugin_name")])]),e._v(" "),n("li",[e._v("Update the plugin configuration:"),n("code",[e._v("PUT /nodes/:node/plugins/:plugin_name")])])]),e._v(" "),n("p",[e._v("We plan to solve the above problems through security specifications and local storage of configuration items in the Enterprise version, and provide APIs related to hot configuration of plug-ins again. "),n("em",[e._v("Currently, the enterprise version supports hot configuration operations for critical configurations.")])]),e._v(" "),n("h3",{attrs:{id:"dashboard"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dashboard"}},[e._v("#")]),e._v(" Dashboard")]),e._v(" "),n("h4",{attrs:{id:"change-connection-to-clients-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#change-connection-to-clients-2"}},[e._v("#")]),e._v(" Change connection to clients")]),e._v(" "),n("p",[e._v("The concept of "),n("strong",[e._v("connections")]),e._v(" in Dashboard is changed to "),n("strong",[e._v("clients")]),e._v(". The original connection information can be viewed on the current "),n("strong",[e._v("clients")]),e._v(" page.")]),e._v(" "),n("h4",{attrs:{id:"remove-sessions-management-page"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remove-sessions-management-page"}},[e._v("#")]),e._v(" Remove sessions management page")]),e._v(" "),n("p",[e._v("The "),n("strong",[e._v("session")]),e._v(" management page was removed from the Dashboard, and related information was integrated into the "),n("strong",[e._v("clients")]),e._v(" page.")]),e._v(" "),n("h4",{attrs:{id:"rule-engine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rule-engine"}},[e._v("#")]),e._v(" Rule engine")]),e._v(" "),n("p",[e._v("The SQL syntax of the rule engine has been changed, and the "),n("strong",[e._v("event")]),e._v(" drop-down selection box is no longer provided in the Dashboard when the rule is created. For the detailed change of the SQL grammar, see the "),n("strong",[e._v("Rules Engine")]),e._v(" section of this article.")]),e._v(" "),n("h3",{attrs:{id:"rule-engine-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rule-engine-2"}},[e._v("#")]),e._v(" Rule engine")]),e._v(" "),n("h4",{attrs:{id:"sql-syntax-changes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sql-syntax-changes"}},[e._v("#")]),e._v(" SQL syntax changes")]),e._v(" "),n("p",[e._v("In the 4.0 version, the SQL syntax of the rule engine is easier to use. In the 3.x version, event name needs to be specified after the all "),n("strong",[e._v("FROM")]),e._v(" clauses. After 4.0, we introduce the concept of "),n("strong",[e._v("event topic")]),e._v(". By default, the "),n("strong",[e._v("message Publishing")]),e._v(" event no longer requires specifying the event name:")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## 3.x version")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## Need to specify event name")]),e._v("\nSELECT * FROM "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"message.publish"')]),e._v(" WHERE topic "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=~")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'t/#'")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## 4.0 and later version")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##The message.publish event is processed by default, and MQTT topics are filtered directly after FROM")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## The above SQL statement is equivalent to:")]),e._v("\nSELECT * FROM "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'t/#'")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## Other events are filtered by event topic")]),e._v("\nSELECT * FROM "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$events")]),e._v('/message_acked"')]),e._v(" where topic "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=~")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'t/#'")]),e._v("\nSELECT * FROM "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$events")]),e._v('/client_connected"')]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br")])]),n("p",[e._v("Dashboard provides old SQL syntax conversion function to complete SQL upgrade migration.")]),e._v(" "),n("h4",{attrs:{id:"event-name-change"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-name-change"}},[e._v("#")]),e._v(" Event name change")]),e._v(" "),n("p",[e._v("In version 4.0, Subscription/Unsubscription principal is changed to "),n("strong",[e._v("session")]),e._v(". When converting "),n("em",[e._v("event")]),e._v(" to "),n("strong",[e._v("event topic,")]),e._v(" the following changes need to be noted:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Terminal subscription")]),e._v(" is changed to "),n("strong",[e._v("Session subscription")]),e._v("："),n("code",[e._v("client.subscribe")]),e._v(" ->\n"),n("code",[e._v("$events/session_subscribe")])]),e._v(" "),n("li",[n("strong",[e._v("Terminal unsubscription")]),e._v(" is changed to "),n("strong",[e._v("Session unsubscription")]),e._v("："),n("code",[e._v("client.unsubscribe")]),e._v(" ->\n"),n("code",[e._v("$events/session_unsubscribe")])])]),e._v(" "),n("h2",{attrs:{id:"upgrade-to-version-3-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-to-version-3-1"}},[e._v("#")]),e._v(" Upgrade to version 3.1")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),n("p",[e._v("For Version 3.1, the project architecture, configuration method and plug-in management method are completely redesigned. Upgrade of 2.x and 1.x versions requires reconfiguration and deployment.")])]),e._v(" "),n("p",[e._v("Upgrade process:")]),e._v(" "),n("ol",[n("li",[e._v("Download and unzip version 3.1 to the new installation directory, such as /opt/emqx-3.1/;")]),e._v(" "),n("li",[e._v("Refer to the old version etc/vm.args, etc/emqttd.config or etc/emq.conf to configure version 3.1\netc/emqx.conf;")]),e._v(" "),n("li",[e._v("Reconfigure the plugin etc/ plugins/${your-plugin}.conf;")]),e._v(" "),n("li",[e._v("Edit the plugin loading file data/loaded_plugins;")]),e._v(" "),n("li",[e._v("Stop the old version and start the new version.")])]),e._v(" "),n("h2",{attrs:{id:"upgrade-2-0-version-to-2-0-3-version"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-2-0-version-to-2-0-3-version"}},[e._v("#")]),e._v(" Upgrade 2.0 version to 2.0.3 version")]),e._v(" "),n("p",[e._v("Upgrade process:")]),e._v(" "),n("ol",[n("li",[e._v("Download and unzip the 2.0.3 version to the new installation directory, such as /opt/emqttd-2.0.3/;")]),e._v(" "),n("li",[e._v("The  'etc /' configuration file and the 'data /' data file of old version are overwritten to the new version directory;")]),e._v(" "),n("li",[e._v("Stop the old version and start the new version.")])]),e._v(" "),n("h2",{attrs:{id:"upgrade-to-version-2-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-to-version-2-0"}},[e._v("#")]),e._v(" Upgrade to version 2.0")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),n("p",[e._v("For Version 2.0, the project architecture, configuration method and plugin management method are completely redesigned. Upgrade of 1.x versions requires reconfiguration and deployment.")])]),e._v(" "),n("p",[e._v("Upgrade process:")]),e._v(" "),n("ol",[n("li",[e._v("Download and unzip version 2.0 to the new installation directory, such as /opt/emqx-2.0/;")]),e._v(" "),n("li",[e._v("Refer to the old version etc/vm.args, etc/emqttd.config or etc/emq.conf to configure version 2.0\netc/emqx.conf;")]),e._v(" "),n("li",[e._v("Reconfigure the plugin etc/ plugins/${your-plugin}.conf;")]),e._v(" "),n("li",[e._v("Edit the plugin loading file data/loaded_plugins;")]),e._v(" "),n("li",[e._v("Stop the old version and start the new version.")])]),e._v(" "),n("h2",{attrs:{id:"upgrade-to-version-1-1-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-to-version-1-1-2"}},[e._v("#")]),e._v(" Upgrade to version 1.1.2")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),n("p",[e._v("Versions after 1.0 can be smoothly upgraded to 1.1.2")])]),e._v(" "),n("p",[e._v("Upgrade process:")]),e._v(" "),n("ol",[n("li",[e._v("Download and unzip version 1.1.2 to the new installation directory, such as /opt/emqttd_112;")]),e._v(" "),n("li",[e._v("The 'etc /' configuration file and the 'data /' data file of the old version are overwritten to the new version directory;")]),e._v(" "),n("li",[e._v("If there are plugins loaded, overwrite the old plugin configuration file to the new version;")]),e._v(" "),n("li",[e._v("Stop the old version and start the new version.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);