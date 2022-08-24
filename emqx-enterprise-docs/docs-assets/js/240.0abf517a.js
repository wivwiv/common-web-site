(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1505:function(e,t,a){"use strict";a.r(t);var i=a(10),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"retained"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retained"}},[e._v("#")]),e._v(" Retained")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("When the server receives a PUBLISH packet with a Retain flag of 1, it will treat the message as a retained message. In addition to being normally forwarded, the retained message will be stored on the server. There can only be one retained message under each topic. Therefore, if there is already a retained message of the same topic, the retained message is replaced.")]),e._v(" "),a("p",[e._v("When a client establishes a subscription, and there are retained messages with matching topics on the server, these retained messages will be sent to the client immediately. With retained messages, new subscribers can immediately get the latest status without waiting for unexpected time, which is very important in many scenarios.")]),e._v(" "),a("p",[e._v("EMQX Broker enables the function of retaining messages by default. You can modify "),a("code",[e._v("mqtt.retain_available")]),e._v(" to "),a("code",[e._v("false")]),e._v(" in  "),a("code",[e._v("etc/emqx.conf")]),e._v(" to disable the function of retaining messages. If the EMQX Broker still receives the retained message when the function is disabled, it will return the DISCONNECT packet with a reason code of 0x9A (retained message is not supported).")]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("EMQX Broker's retained message function is implemented by the "),a("code",[e._v("emqx_retainer")]),e._v(" plugin, which is enabled by default. By modifying the configuration of the "),a("code",[e._v("emqx_retainer")]),e._v(" plugin, you can adjust the storage location of the retained messages in EMQX Broker, limit the number of received retained messages and the maximum length of Payload, and adjust the expiration time of retained messages. For more information about the EMQX Broker plug-in, see  "),a("RouterLink",{attrs:{to:"/en/enterprise/latest/advanced/plugins.html"}},[e._v("plugin")]),e._v(".")],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("emqx_retainer")]),e._v(" plugin is enabled by default, and the configuration path of the plugin is "),a("code",[e._v("etc/plugins/emqx_retainer.conf")]),e._v(".")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Configuration item")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Optional value")]),e._v(" "),a("th",[e._v("Default value")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("retainer.storage_type")]),e._v(" "),a("td",[e._v("enum")]),e._v(" "),a("td",[a("code",[e._v("ram")]),e._v(", "),a("code",[e._v("disc")]),e._v(", "),a("code",[e._v("disc_only")])]),e._v(" "),a("td",[e._v("ram")]),e._v(" "),a("td",[e._v("ram: only stored in memory; "),a("br"),e._v(" disc: stored in memory and hard disk; "),a("br"),e._v(" disc_only: only stored in hard disk")])]),e._v(" "),a("tr",[a("td",[e._v("retainer.max_retained_messages")]),e._v(" "),a("td",[e._v("integer")]),e._v(" "),a("td",[e._v(">= 0")]),e._v(" "),a("td",[e._v("0")]),e._v(" "),a("td",[e._v("The maximum number of retained messages, and 0 means no limit. After the number of retained messages exceeds the maximum limit, you can replace the existing retained messages, but cannot store retained messages for new topics.")])]),e._v(" "),a("tr",[a("td",[e._v("retainer.max_payload_size")]),e._v(" "),a("td",[e._v("bytesize")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("1MB")]),e._v(" "),a("td",[e._v("Retain the maximum Payload value of the message. After the Payload value exceeds the maximum value, the EMQX broker will treat the retained reserved message as a normal message.")])]),e._v(" "),a("tr",[a("td",[e._v("retainer.expiry_interval")]),e._v(" "),a("td",[e._v("duration")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("０")]),e._v(" "),a("td",[e._v("The expiration time of retaining message, and 0 means never expire. If the message expiration interval is set in the PUBLISH packet, the message expiration interval in the PUBLISH packet shall prevail.")])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("EMQX Enterprise can store retained messages to various external databases")])])])}),[],!1,null,null,null);t.default=s.exports}}]);