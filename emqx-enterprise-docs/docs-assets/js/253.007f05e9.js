(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{1517:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"opentsdb-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opentsdb-backend"}},[s._v("#")]),s._v(" OpenTSDB Backend")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("After EMQX version 3.1, a powerful rule engine is introduced to replace plug-ins. It is recommended that you use it. See "),a("RouterLink",{attrs:{to:"/en/enterprise/latest/rule/backend_opentsdb.html"}},[s._v("Save data to OpenTSDB")]),s._v(" to setup Save data to OpenTSDB in rule engine.")],1)]),s._v(" "),a("h2",{attrs:{id:"configure-opentsdb-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-opentsdb-server"}},[s._v("#")]),s._v(" Configure OpenTSDB Server")]),s._v(" "),a("p",[s._v("Config file: etc/plugins/emqx_backend_opentsdb.conf:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## OpenTSDB Server")]),s._v("\nbackend.opentsdb.pool1.server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:4242\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## OpenTSDB Pool Size")]),s._v("\nbackend.opentsdb.pool1.pool_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Whether to return summary info")]),s._v("\nbackend.opentsdb.pool1.summary "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Whether to return detailed info")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Value: true | false")]),s._v("\nbackend.opentsdb.pool1.details "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Synchronous write or not")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Value: true | false")]),s._v("\nbackend.opentsdb.pool1.sync "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Synchronous write timeout in milliseconds")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Value: Duration")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Default: 0")]),s._v("\nbackend.opentsdb.pool1.sync_timeout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Max batch size")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Value: Number >= 0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Default: 20")]),s._v("\nbackend.opentsdb.pool1.max_batch_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Store PUBLISH Messages")]),s._v("\nbackend.opentsdb.hook.message.publish.1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"action"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"function"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"on_message_publish"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pool"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pool1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("p",[s._v("Parameters in hook\nrule:")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Option")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("topic")]),s._v(" "),a("td",[s._v("Configure which topics need to execute hooks")])]),s._v(" "),a("tr",[a("td",[s._v("action")]),s._v(" "),a("td",[s._v("Configure specific action for hook, "),a("code",[s._v("function")]),s._v(" is a built-in function provided as Backend for general functions")])]),s._v(" "),a("tr",[a("td",[s._v("pool")]),s._v(" "),a("td",[s._v("Pool Name, used to connect multiple OpenTSDB servers")])])])]),s._v(" "),a("p",[s._v("Example:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Store PUBLISH message whose topic is "sensor/#"')]),s._v("\nbackend.influxdb.hook.message.publish.1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sensor/#"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"action"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"function"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"on_message_publish"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pool"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pool1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Store PUBLISH message whose topic is "stat/#"')]),s._v("\nbackend.influxdb.hook.message.publish.2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stat/#"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"action"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"function"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"on_message_publish"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pool"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pool1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"description-of-opentsdb-persistence-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-of-opentsdb-persistence-hooks"}},[s._v("#")]),s._v(" Description of OpenTSDB Persistence Hooks")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("hook")]),s._v(" "),a("th",[s._v("topic")]),s._v(" "),a("th",[s._v("action")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("message.publish")]),s._v(" "),a("td",[s._v("#")]),s._v(" "),a("td",[s._v("on_message_publish")]),s._v(" "),a("td",[s._v("Store published messages")])])])]),s._v(" "),a("p",[s._v("Since MQTT Message cannot be written directly to OpenTSDB, OpenTSDB\nBackend provides an emqx_backend_opentsdb.tmpl template file to\nconvert MQTT Message to DataPoint that can be written to OpenTSDB.")]),s._v(" "),a("p",[s._v("Template file use Json format:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("key")]),s._v(" - MQTT Topic, Json String, support wildcard characters")]),s._v(" "),a("li",[a("code",[s._v("value")]),s._v(" - Template, Json Object, used to convert MQTT Message into\n"),a("code",[s._v("measurement,tag_key=tag_value,... field_key=field_value,... timestamp")]),s._v(" and write to InfluxDB。")])]),s._v(" "),a("p",[s._v("You can define different templates for different topics or multiple\ntemplates for the same topic, likes:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Template "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Template "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("The template format is as follows:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"measurement"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Measurement"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tags"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Tag Key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Tag Value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Timestamp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("code",[s._v("measurement")]),s._v(" and "),a("code",[s._v("value")]),s._v(" are required options, "),a("code",[s._v("tags")]),s._v(" and "),a("code",[s._v("timestamp")]),s._v("\nare optional.")]),s._v(" "),a("p",[s._v("All values (such as "),a("code",[s._v("<Measurement>")]),s._v(") can be configured directly in the\ntemplate as a fixed value that data types supported depending on the\ntable you define. More realistically, of course, you can access the data\nin the MQTT message through the placeholder we provide.")]),s._v(" "),a("p",[s._v("Currently, we support placeholders as\nfollows:")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Placeholder")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("$id")]),s._v(" "),a("td",[s._v("MQTT Message UUID, assigned by EMQX")])]),s._v(" "),a("tr",[a("td",[s._v("$clientid")]),s._v(" "),a("td",[s._v("Client ID used by the Client")])]),s._v(" "),a("tr",[a("td",[s._v("$username")]),s._v(" "),a("td",[s._v("Username used by the Client")])]),s._v(" "),a("tr",[a("td",[s._v("$peerhost")]),s._v(" "),a("td",[s._v("IP of Client")])]),s._v(" "),a("tr",[a("td",[s._v("$qos")]),s._v(" "),a("td",[s._v("QoS of MQTT Message")])]),s._v(" "),a("tr",[a("td",[s._v("$topic")]),s._v(" "),a("td",[s._v("Topic of MQTT Message")])]),s._v(" "),a("tr",[a("td",[s._v("$payload")]),s._v(" "),a("td",[s._v("Payload of MQTT Message, must be valid Json data")])]),s._v(" "),a("tr",[a("td",[s._v("$<Number>")]),s._v(" "),a("td",[s._v("It must be used with $paylaod to retrieve data from Json Array")])]),s._v(" "),a("tr",[a("td",[s._v("$timestamp")]),s._v(" "),a("td",[s._v("The timestamp EMQX sets when preparing to forward messages, precision: Nanoseconds")])])])]),s._v(" "),a("p",[a("strong",[s._v("$payload and $<Number>:")])]),s._v(" "),a("p",[s._v("You can directly use "),a("code",[s._v("$content")]),s._v(" to obtain the complete message payload,\nyou can use "),a("code",[s._v('["$payload", <Key>, ...]')]),s._v(" to get the data inside the\nmessage payload.")]),s._v(" "),a("p",[s._v("For example "),a("code",[s._v("payload")]),s._v(" is "),a("code",[s._v('{"data": {"temperature": 23.9}}')]),s._v(", you can via\n"),a("code",[s._v('["$payload", "data", "temperature"]')]),s._v(" to get "),a("code",[s._v("23.9")]),s._v(".")]),s._v(" "),a("p",[s._v("In the case of array data type in Json, we introduced "),a("code",[s._v("$0")]),s._v(" and\n"),a("code",[s._v("$<pos_integer>")]),s._v(", "),a("code",[s._v("$0")]),s._v(" means to get all elements in the array, and\n"),a("code",[s._v("$<pos_integer>")]),s._v(" means to get the <pos_integer>th element in the\narray.")]),s._v(" "),a("p",[s._v("A simple example, "),a("code",[s._v('["$payload", "$0", "temp"]')]),s._v(" will get "),a("code",[s._v("[20, 21]")]),s._v(" from\n"),a("code",[s._v('[{"temp": 20}, {"temp": 21}]')]),s._v(", and "),a("code",[s._v('["$payload", "$1", "temp"]')]),s._v(" will\nonly get "),a("code",[s._v("20")]),s._v(".")]),s._v(" "),a("p",[s._v("It is worth noting that when you use "),a("code",[s._v("$0")]),s._v(", we expect the number of data\nyou get is same. Because we need to convert these arrays into multiple\nrecords and write it into OpenTSDB, and when you have three pieces of\ndata in one field and two in another, we won't know how to combine the\ndata for you.")]),s._v(" "),a("p",[a("strong",[s._v("Example")])]),s._v(" "),a("p",[s._v('data/templates directory provides a sample template\n(emqx_backend_opentsdb_example.tmpl, please remove the "_example"\nsuffix from the filename when using it formally) for the user\'s\nreference:')]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sample"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"measurement"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$topic")]),s._v('"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tags"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$payload")]),s._v('"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v('"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"region"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$payload")]),s._v('"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v('"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"region"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$qos")]),s._v('"')]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"clientid"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$clientid")]),s._v('"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$payload")]),s._v('"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v('"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"temp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$timestamp")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v('When an MQTT Message whose Topic is "sample" has the following Payload:')]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"temp"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"serverA"')]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"region"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hangzhou"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"temp"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"serverB"')]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"region"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ningbo"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("Backend converts MQTT messages into the following data and writes it to\nOpenTSDB:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"measurement"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sample"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tags"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"clientid"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mqttjs_ebcc36079a"')]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"serverA"')]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"region"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hangzhou"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1560743513626681000"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"measurement"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sample"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tags"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"clientid"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mqttjs_ebcc36079a"')]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"serverB"')]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"region"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ningbo"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1560743513626681000"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"enable-opentsdb-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-opentsdb-backend"}},[s._v("#")]),s._v(" Enable OpenTSDB Backend")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./bin/emqx_ctl plugins load emqx_backend_opentsdb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);