(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1603:function(s,e,t){"use strict";t.r(e);var a=t(10),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"save-data-to-influxdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save-data-to-influxdb"}},[s._v("#")]),s._v(" Save data to InfluxDB")]),s._v(" "),a("p",[s._v("Setup a InfluxDB database, taking Mac OSX for instance:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker pull influxdb\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone -b v1.0.0 https://github.com/palkan/influx_udp.git\n\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" influx_udp\n\n$ docker run --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("influxdb --rm -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8086")]),s._v(":8086 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8089")]),s._v(":8089/udp -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PWD")]),s._v("}")]),s._v("/files/influxdb.conf:/etc/influxdb/influxdb.conf:ro -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INFLUXDB_DB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("db influxdb:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("Create a rule:")]),s._v(" "),a("p",[s._v("Go to "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQX Dashboard"),a("OutboundLink")],1),s._v(', select the\n"rule" tab on the menu to the left.')]),s._v(" "),a("p",[s._v('Select "message.publish", then type in the following SQL:')]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("SELECT\n    payload.host as host,\n    payload.location as location,\n    payload.internal as internal,\n    payload.external as external\nFROM\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message.publish"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("img",{attrs:{src:t(677),alt:"image"}})]),s._v(" "),a("p",[s._v("Bind an action:")]),s._v(" "),a("p",[s._v('Click on the "+ Add" button under "Action Handler", and then select\n"Data to InfluxDB" in the pop-up dialog window.')]),s._v(" "),a("p",[a("img",{attrs:{src:t(678),alt:"image"}})]),s._v(" "),a("p",[s._v("Fill in the parameters required by the action:")]),s._v(" "),a("p",[s._v('Six parameters is required by action "Data to InfluxDB" :')]),s._v(" "),a("p",[s._v("1). Measurement: Measurement of the data point.")]),s._v(" "),a("p",[s._v("2). Field Keys: Which fields can be used as fields of data point.")]),s._v(" "),a("p",[s._v("3). Tags Keys. Which fields can be used as tags of data point.")]),s._v(" "),a("p",[s._v("4). Timestamp Key. Which fields can be used as timestamp of data\npoint.")]),s._v(" "),a("p",[s._v("5). Set Timestamp. Whether to generate a timestamp if 'Timestamp Key'\nis not configured.")]),s._v(" "),a("p",[a("img",{attrs:{src:t(679),alt:"image"}})]),s._v(" "),a("p",[s._v('6). Bind a resource to the action. Since the dropdown list "Resource"\nis empty for now, we create a new resource by clicking on the "New\nResource" to the top right, and then select "InfluxDB":')]),s._v(" "),a("p",[a("img",{attrs:{src:t(680),alt:"image"}})]),s._v(" "),a("p",[s._v("Configure the resource:")]),s._v(" "),a("p",[s._v('Keep all the configs as default, and click on the "Testing Connection"\nbutton to make sure the connection can be created successfully, and\nthen click on the "Create" button.')]),s._v(" "),a("p",[a("img",{attrs:{src:t(681),alt:"image"}})]),s._v(" "),a("p",[s._v('Back to the "Actions" dialog, and then click on the "Confirm" button.')]),s._v(" "),a("p",[a("img",{attrs:{src:t(682),alt:"image"}})]),s._v(" "),a("p",[s._v('Back to the creating rule page, then click on "Create" button. The rule we created will be show in the rule list:')]),s._v(" "),a("p",[a("img",{attrs:{src:t(683),alt:"image"}})]),s._v(" "),a("p",[s._v("We have finished, testing the rule by sending an MQTT message to\nemqx:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Topic: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" QoS: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Retained: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Payload:\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"serverA"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"location"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"roomA"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"internal"')]),s._v(":25,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"external"')]),s._v(":37"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("Then inspect the InfluxDB table, verify a new record has been\ninserted:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it influxdb influx\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use db\nUsing database db\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"temperature"')]),s._v("\nname: temperature\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v("                external "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("    internal location\n----                -------- ----    -------- --------\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1561535778444457348")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v("       serverA "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("       roomA\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v('And from the rule list, verify that the "Matched" column has increased\nto 1:')]),s._v(" "),a("p",[a("img",{attrs:{src:t(684),alt:"image"}})])])}),[],!1,null,null,null);e.default=n.exports},677:function(s,e,t){s.exports=t.p+"docs-assets/img/influxdb_sql_1.488e1d88.png"},678:function(s,e,t){s.exports=t.p+"docs-assets/img/influxdb_action_0.b771ce7d.png"},679:function(s,e,t){s.exports=t.p+"docs-assets/img/influxdb_action_1.4f72be02.png"},680:function(s,e,t){s.exports=t.p+"docs-assets/img/influxdb_action_2.8df7c658.png"},681:function(s,e,t){s.exports=t.p+"docs-assets/img/influxdb_resource_0.9a5735ca.png"},682:function(s,e,t){s.exports=t.p+"docs-assets/img/influxdb_action_3.7eb53a5c.png"},683:function(s,e,t){s.exports=t.p+"docs-assets/img/influxdb_rule_overview_0.011c2015.png"},684:function(s,e,t){s.exports=t.p+"docs-assets/img/influxdb_rule_overview_1.c5eefa1b.png"}}]);