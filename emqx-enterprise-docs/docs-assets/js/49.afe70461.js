(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1616:function(e,s,t){"use strict";t.r(s);var a=t(10),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"bridge-data-to-emqx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bridge-data-to-emqx"}},[e._v("#")]),e._v(" Bridge data to EMQX")]),e._v(" "),a("p",[e._v("Setup another MQTT broker using emqx, taking Mac OSX for instance:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ brew tap emqx/emqx/emqx\n\n$ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" emqx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# start emqx")]),e._v("\n$ emqx console\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("Create a rule:")]),e._v(" "),a("p",[e._v("Go to "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[e._v("EMQX Dashboard"),a("OutboundLink")],1),e._v(', select the\n"rule" tab on the menu to the left.')]),e._v(" "),a("p",[e._v('Select "message.publish", then type in the following SQL:')]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"message.publish"')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:t(393),alt:"image"}})]),e._v(" "),a("p",[e._v("Bind an action:")]),e._v(" "),a("p",[e._v('Click on the "+ Add" button under "Action Handler", and then select\n"Data bridge to MQTT Broker" in the pop-up dialog window.')]),e._v(" "),a("p",[a("img",{attrs:{src:t(406),alt:"image"}})]),e._v(" "),a("p",[e._v('Bind a resource to the action. Since the dropdown list "Resource" is\nempty for now, we create a new resource by clicking on the "New\nResource" to the top right, and then select "MQTT Bridge":')]),e._v(" "),a("p",[a("img",{attrs:{src:t(407),alt:"image"}})]),e._v(" "),a("p",[e._v("Configure the resource:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Set "EMQX Node Name" to the node name of the remote name, and keep\nall other configs as default, and click on the "Testing Connection"\nbutton to make sure the connection can be created successfully, and\nthen click on the "Create" button.\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:t(767),alt:"image"}})]),e._v(" "),a("p",[e._v('Back to the "Actions" dialog, and then click on the "Confirm"\nbutton.')]),e._v(" "),a("p",[a("img",{attrs:{src:t(768),alt:"image"}})]),e._v(" "),a("p",[e._v('Back to the creating rule page, then click on "Create" button. The\nrule we created will be show in the rule list:')]),e._v(" "),a("p",[a("img",{attrs:{src:t(769),alt:"image"}})]),e._v(" "),a("p",[e._v("We have finished, testing the rule by sending an MQTT message to\nemqx:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("Topic: "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"t/1"')]),e._v("\n\nQoS: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n\nRetained: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n\nPayload: "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello, World\\!"')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("Then verify a message has been published to the other emqx:")]),e._v(" "),a("p",[a("img",{attrs:{src:t(408),alt:"image"}})]),e._v(" "),a("p",[e._v('And from the rule list, verify that the "Matched" column has increased\nto 1:')]),e._v(" "),a("p",[a("img",{attrs:{src:t(770),alt:"image"}})])])}),[],!1,null,null,null);s.default=n.exports},393:function(e,s,t){e.exports=t.p+"docs-assets/img/mysql_sql_1.515176ea.png"},406:function(e,s,t){e.exports=t.p+"docs-assets/img/mqtt_action_0.a65b4228.png"},407:function(e,s,t){e.exports=t.p+"docs-assets/img/mqtt_action_1.4aa88837.png"},408:function(e,s,t){e.exports=t.p+"docs-assets/img/rpc_result.ec735ad9.png"},767:function(e,s,t){e.exports=t.p+"docs-assets/img/rpc_resource_0.5262a6d5.png"},768:function(e,s,t){e.exports=t.p+"docs-assets/img/rpc_action_2.fde20f18.png"},769:function(e,s,t){e.exports=t.p+"docs-assets/img/rpc_rule_overview_0.e04a7132.png"},770:function(e,s,t){e.exports=t.p+"docs-assets/img/rpc_rule_overview_1.a2b52cce.png"}}]);