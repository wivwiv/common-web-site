(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1570:function(e,s,n){"use strict";n.r(s);var t=n(10),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"multi-language-extension-hook"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multi-language-extension-hook"}},[e._v("#")]),e._v(" Multi-language extension-hook")]),e._v(" "),t("p",[e._v("In EMQX Enterprise 4.2.0, we provide multi-language extension support. Among them, the "),t("strong",[e._v("Multilingual Extension Hook")]),e._v(" module allows the use of other programming languages ​​(such as Python, Java, etc.) to directly mount hooks to the EMQX system to receive and process the hook events of the EMQX system to achieve the expansion and customization of EMQX purpose. For example, users can customize using other programming languages:")]),e._v(" "),t("p",[e._v("-Authentication and authorization of client access\n-ACL authentication for publish/subscribe\n-Persistence and bridging of messages\n-Publish/subscribe, or notification processing of client online and offline events")]),e._v(" "),t("h2",{attrs:{id:"design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),t("p",[t("strong",[e._v("Multi-language extension hook")]),e._v(" function is provided by the ʻemqx-exhook` plugin. It uses "),t("a",{attrs:{href:"https://www.grpc.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),t("OutboundLink")],1),e._v(" as the communication framework for RPC.")]),e._v(" "),t("p",[e._v("The architecture is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  EMQX\n+========================+                 +========+==========+\n|    ExHook              |                 |        |          |\n|   +----------------+   |      gRPC       | gRPC   |  User's  |\n|   |   gRPC Client  | ------------------\x3e | Server |  Codes   |\n|   +----------------+   |    (HTTP/2)     |        |          |\n|                        |                 |        |          |\n+========================+                 +========+==========+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("It shows: The ExHook module in EMQX acts as a gRPC client, sending all hook events in the system to the user's gRPC server.")]),e._v(" "),t("p",[e._v("Consistent with EMQX's native hook, it also supports chained calculation and return:")]),e._v(" "),t("p",[t("img",{attrs:{src:n(395),alt:"chain_of_responsiblity"}})]),e._v(" "),t("h2",{attrs:{id:"interface-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interface-design"}},[e._v("#")]),e._v(" Interface design")]),e._v(" "),t("p",[e._v("As the event processing end, that is, the gRPC server. It requires a user-defined implementation of the hook list that needs to be mounted, and the callback function for how to handle each hook event after it arrives. These interfaces are defined as a gRPC service named "),t("code",[e._v("HookProvider")]),e._v(" in "),t("strong",[e._v("Multilingual Extension Hook")]),e._v(". The list of interfaces that need to be implemented includes:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('syntax = "proto3";\n\npackage emqx.exhook.v1;\n\nservice HookProvider {\n\n  rpc OnProviderLoaded(ProviderLoadedRequest) returns (LoadedResponse) {};\n\n  rpc OnProviderUnloaded(ProviderUnloadedRequest) returns (EmptySuccess) {};\n\n  rpc OnClientConnect(ClientConnectRequest) returns (EmptySuccess) {};\n\n  rpc OnClientConnack(ClientConnackRequest) returns (EmptySuccess) {};\n\n  rpc OnClientConnected(ClientConnectedRequest) returns (EmptySuccess) {};\n\n  rpc OnClientDisconnected(ClientDisconnectedRequest) returns (EmptySuccess) {};\n\n  rpc OnClientAuthenticate(ClientAuthenticateRequest) returns (ValuedResponse) {};\n\n  rpc OnClientCheckAcl(ClientCheckAclRequest) returns (ValuedResponse) {};\n\n  rpc OnClientSubscribe(ClientSubscribeRequest) returns (EmptySuccess) {};\n\n  rpc OnClientUnsubscribe(ClientUnsubscribeRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionCreated(SessionCreatedRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionSubscribed(SessionSubscribedRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionUnsubscribed(SessionUnsubscribedRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionResumed(SessionResumedRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionDiscarded(SessionDiscardedRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionTakeovered(SessionTakeoveredRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionTerminated(SessionTerminatedRequest) returns (EmptySuccess) {};\n\n  rpc OnMessagePublish(MessagePublishRequest) returns (ValuedResponse) {};\n\n  rpc OnMessageDelivered(MessageDeliveredRequest) returns (EmptySuccess) {};\n\n  rpc OnMessageDropped(MessageDroppedRequest) returns (EmptySuccess) {};\n\n  rpc OnMessageAcked(MessageAckedRequest) returns (EmptySuccess) {};\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br"),t("span",{staticClass:"line-number"},[e._v("44")]),t("br"),t("span",{staticClass:"line-number"},[e._v("45")]),t("br"),t("span",{staticClass:"line-number"},[e._v("46")]),t("br"),t("span",{staticClass:"line-number"},[e._v("47")]),t("br"),t("span",{staticClass:"line-number"},[e._v("48")]),t("br")])]),t("p",[e._v("The HookProvider part:")]),e._v(" "),t("p",[e._v("-ʻOnProviderLoaded"),t("code",[e._v(": Define how the HookProvider is loaded and return the list of hooks that need to be mounted. Only the hooks in this list will be called back to the HookProivder service. -ʻOnProviderUnloaded")]),e._v(": Define how the HookProvider is unloaded, only for notification.")]),e._v(" "),t("p",[e._v("Hook event part:")]),e._v(" "),t("p",[e._v("-Methods prefixed with ʻOnClient*"),t("code",[e._v(", ʻOnSession*")]),e._v(", ʻOnMessage*"),t("code",[e._v("correspond to the methods in [hooks](../advanced/hooks.md) one-to-one. They have the same calling timing and similar parameter lists. -Only ʻOnClientAuthenticate")]),e._v(", ʻOnClientCheckAcl"),t("code",[e._v(", ʻOnMessagePublish")]),e._v(" are allowed to carry the return value to the EMQX system, other callbacks are not supported.")]),e._v(" "),t("p",[e._v("For details of the interface and parameter data structure, please refer to: "),t("a",{attrs:{href:"https://github.com/emqx/emqx/blob/master/apps/emqx_exhook/priv/protos/exhook.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("exhook.proto"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"development-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#development-guide"}},[e._v("#")]),e._v(" Development Guide")]),e._v(" "),t("p",[e._v("When users use the multi-language extension hook function, they need to implement the gRPC service of "),t("code",[e._v("HookProvider")]),e._v(" to receive the callback events sent by ExHook.")]),e._v(" "),t("p",[e._v("The steps are as follows:")]),e._v(" "),t("ol",[t("li",[e._v("Copy the current version of "),t("code",[e._v("lib/emqx_exhook-<x.y.z>/priv/protos/exhook.proto")]),e._v(" file.")]),e._v(" "),t("li",[e._v("Use the gRPC framework of the corresponding programming language to generate the gRPC server code of ʻexhook.proto`.")]),e._v(" "),t("li",[e._v("Implement the interface defined in exhook.proto as needed.")])]),e._v(" "),t("p",[e._v("After the development is completed, the service needs to be deployed to a server that can communicate with EMQX, and the port is open.")]),e._v(" "),t("p",[e._v("The gRPC framework of each language can refer to: "),t("a",{attrs:{href:"https://github.com/grpc-ecosystem/awesome-grpc",target:"_blank",rel:"noopener noreferrer"}},[e._v("grpc-ecosystem/awesome-grpc"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"create-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-module"}},[e._v("#")]),e._v(" Create module")]),e._v(" "),t("p",[e._v("After successfully deploying the "),t("code",[e._v("HookProvider")]),e._v(" service, you can open the multilingual hook extension module through the dashboard page and configure its service address to use it normally.")]),e._v(" "),t("p",[e._v("Open "),t("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("EMQX Dashboard"),t("OutboundLink")],1),e._v(', click the "Modules" tab on the left, and choose to add:')]),e._v(" "),t("p",[t("img",{attrs:{src:n(391),alt:"Modules"}})]),e._v(" "),t("p",[e._v('Select "Multilingual Extension Hook":')]),e._v(" "),t("p",[t("img",{attrs:{src:n(551),alt:"Add ExHook Module"}})]),e._v(" "),t("p",[e._v("Configure "),t("code",[e._v("HookProvider")]),e._v(" service related parameters:")]),e._v(" "),t("p",[t("img",{attrs:{src:n(552),alt:"Configure ExHook gRPC Server"}})]),e._v(" "),t("p",[e._v("After clicking add, the module is added")]),e._v(" "),t("p",[t("img",{attrs:{src:n(553),alt:"Add ExHook Successfully"}})]),e._v(" "),t("p",[e._v("So far, the configuration of the multi-language extension hook has been completed.")])])}),[],!1,null,null,null);s.default=r.exports},391:function(e,s,n){e.exports=n.p+"docs-assets/img/modules.1814040c.png"},395:function(e,s,n){e.exports=n.p+"docs-assets/img/chain_of_responsiblity.863497e8.png"},551:function(e,s,n){e.exports=n.p+"docs-assets/img/exhook-add.49096d4b.jpg"},552:function(e,s,n){e.exports=n.p+"docs-assets/img/exhook-conf.99f366a7.jpg"},553:function(e,s,n){e.exports=n.p+"docs-assets/img/exhook-succ.83f8283e.jpg"}}]);