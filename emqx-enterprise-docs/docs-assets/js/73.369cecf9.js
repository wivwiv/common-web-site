(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1587:function(s,e,a){"use strict";a.r(e);var r=a(10),t=Object(r.a)({},(function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"pulsar-consumer-group"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pulsar-consumer-group"}},[s._v("#")]),s._v(" Pulsar Consumer Group")]),s._v(" "),r("p",[s._v("The Pulsar consumer group uses an external Pulsar as a message queue, which can convert consumer messages from Pulsar into MQTT messages and publish them in emqx.")]),s._v(" "),r("p",[s._v("Set up the Pulsar environment, taking MacOS X as an example:")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://archive.apache.org/dist/pulsar/pulsar-2.3.2/apache-pulsar-2.3.2-bin.tar.gz\n\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xvfz apache-pulsar-2.3.2-bin.tar.gz\n\n$ "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" apache-pulsar-2.3.2\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Start Pulsar")]),s._v("\n$ ./bin/pulsar standalone\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br")])]),r("p",[s._v("Create Pulsar topic:")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("$ ./bin/pulsar-admin topics create-partitioned-topic -p "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" testTopic\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("h2",{attrs:{id:"create-module"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-module"}},[s._v("#")]),s._v(" Create module")]),s._v(" "),r("p",[s._v("Open "),r("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQX Dashboard"),r("OutboundLink")],1),s._v(', click the "Modules" tab on the left, and choose to add:')]),s._v(" "),r("p",[r("img",{attrs:{src:a(391),alt:""}})]),s._v(" "),r("p",[s._v('Click "Select", and then select "Pulsar Consumer Group":')]),s._v(" "),r("p",[r("img",{attrs:{src:a(614),alt:""}})]),s._v(" "),r("p",[s._v("Fill in the relevant parameters:")]),s._v(" "),r("p",[r("img",{attrs:{src:a(615),alt:""}})]),s._v(" "),r("p",[s._v("1). Pulsar server address")]),s._v(" "),r("p",[s._v("2). The number of Pulsar consumer processes")]),s._v(" "),r("p",[s._v("3). Pulsar's subscription topic")]),s._v(" "),r("p",[s._v("4). MQTT message subject")]),s._v(" "),r("p",[s._v("5). MQTT topic service quality")]),s._v(" "),r("p",[s._v("6). Pulsar flow control threshold (Pulsar flow control threshold, configure how many messages Pulsar sends to consumers and block Pulsar Consumer)")]),s._v(" "),r("p",[s._v("7). EMQX reset flow control threshold percentage (Pulsar flow control threshold reset percentage. This configuration allows consumers to reset the "),r("code",[s._v("Pulsar flow control threshold")]),s._v(" in advance after processing a certain number of messages. For example, "),r("code",[s._v("Pulsar flow control threshold")]),s._v("Is 1000, "),r("code",[s._v("Threshold reset percentage")]),s._v(" is 80%, then reset)")]),s._v(" "),r("p",[s._v("After clicking Add, the module is added:")]),s._v(" "),r("p",[r("img",{attrs:{src:a(616),alt:""}})]),s._v(" "),r("p",[s._v('The resource has been created, now use Dashboard\'s websocket tool to subscribe to the MQTT topic "TestTopic":')]),s._v(" "),r("p",[r("img",{attrs:{src:a(617),alt:""}})]),s._v(" "),r("p",[s._v("Use pulsar-cli to produce a message:")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("./bin/pulsar-client produce TestTopic --messages "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello-pulsar"')]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:a(618),alt:""}})]),s._v(" "),r("p",[s._v('The websocket tool of Dashboard received the message "hello-pulsar" produced by pulsar:')]),s._v(" "),r("p",[r("img",{attrs:{src:a(619),alt:""}})])])}),[],!1,null,null,null);e.default=t.exports},391:function(s,e,a){s.exports=a.p+"docs-assets/img/modules.1814040c.png"},614:function(s,e,a){s.exports=a.p+"docs-assets/img/pulsar_consumer2.963d6a19.png"},615:function(s,e,a){s.exports=a.p+"docs-assets/img/pulsar_consumer3.f80664c9.png"},616:function(s,e,a){s.exports=a.p+"docs-assets/img/pulsar_consumer4.a16c3b72.png"},617:function(s,e,a){s.exports=a.p+"docs-assets/img/pulsar_consumer5.f462fe28.png"},618:function(s,e,a){s.exports=a.p+"docs-assets/img/pulsar_consumer6.1266de01.png"},619:function(s,e,a){s.exports=a.p+"docs-assets/img/pulsar_consumer7.6e5347f0.png"}}]);