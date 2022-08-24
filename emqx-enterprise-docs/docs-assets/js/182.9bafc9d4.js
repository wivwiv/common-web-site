(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{1498:function(e,a,t){"use strict";t.r(a);var s=t(10),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"emqx-lua-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emqx-lua-hook"}},[e._v("#")]),e._v(" emqx-lua-hook")]),e._v(" "),s("p",[e._v("Before EMQX 4.1. We only provide multi-language support for Lua. Its architecture is different from the above mentioned, which will include the entire language runtime in the Erlang VM:")]),e._v(" "),s("p",[s("img",{attrs:{src:t(503),alt:"Old Multiple Lang Arch"}})]),e._v(" "),s("ul",[s("li",[e._v("Multiple language support appears as a plug-in. For different language environments, different language support plugins are required.")]),e._v(" "),s("li",[e._v("This supported plugin embeds all the environments of the language runtime.")])]),e._v(" "),s("p",[e._v("To maintain compatibility, the plug-in remains in the release version of EMQX.")]),e._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),s("p",[e._v("In the EMQX Broker distribution, user-defined Lua script files should be placed in "),s("code",[e._v("data/script/")]),e._v(".")]),e._v(" "),s("p",[e._v("Take the sending content of the control message as an example, and add the file "),s("code",[e._v("data/script/test.lua")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-lua line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("on_message_publish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("clientid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" topic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" qos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" retain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" topic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" qos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" retain\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("register_hook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"on_message_publish"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("The script shows:")]),e._v(" "),s("ul",[s("li",[e._v("Implemented a callback function "),s("code",[e._v("on_message_publish")]),e._v(" and changed the "),s("code",[e._v("payload")]),e._v(" field of all published messages to "),s("code",[e._v("hello")]),e._v(".")]),e._v(" "),s("li",[e._v("Use "),s("code",[e._v("register_hook")]),e._v(" to tell "),s("code",[e._v("emqx_lua_hook")]),e._v(" the name list of callback function that need to be registered.")])]),e._v(" "),s("p",[e._v("It is worth noting that the names, parameters, data types, and number of these callback functions are fixed and must be consistent with the examples provided.")]),e._v(" "),s("p",[e._v("After the script is written, you need to manually load it into the "),s("code",[e._v("emqx_lua_hook")]),e._v(" plugin:")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("emqx_lua_hook")]),e._v(" plugin is enabled at first:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./bin/emqx_ctl plugins load emqx_lua_hook\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Load "),s("code",[e._v("test.lua")]),e._v(" into "),s("code",[e._v("emqx_lua_hook")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./bin/emqx_ctl luahook load test.lua\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("When the execution succeeds, it means that the script has been successfully loaded. Otherwise, check whether the syntax of the source file is correct.")]),e._v(" "),s("p",[e._v("After completion, you can start two MQTT clients, one to subscribe to any topic, and the other to publish any message to the topic that you just subscribed to. It can be found that the message content received by the subscriber is "),s("code",[e._v("hello")]),e._v(" which proves that the "),s("code",[e._v("test.lua")]),e._v(" script has taken effect.")]),e._v(" "),s("h2",{attrs:{id:"callback-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callback-function"}},[e._v("#")]),e._v(" Callback function")]),e._v(" "),s("p",[e._v("Supported callback functions and parameter type: "),s("a",{attrs:{href:"https://github.com/emqx/emqx-lua-hook/tree/develop#hook-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("emqx-lua-hook - README.md"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Example: "),s("a",{attrs:{href:"https://github.com/emqx/emqx-lua-hook/blob/develop/examples.lua",target:"_blank",rel:"noopener noreferrer"}},[e._v("examples.lua"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[e._v("#")]),e._v(" Command")]),e._v(" "),s("p",[e._v("Load the specified Lua script:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## Script: Script file name")]),e._v("\nluahook load "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Script"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Unload the specified Lua script:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("luahook unload "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Script"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Reload the specified Lua script:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("luahook reload "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Script"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Load the specified Lua script and set it to start with "),s("code",[e._v("emqx_lua_hook")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("luahook "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Script"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Unload the specified Lua script and cancel it to start with "),s("code",[e._v("emqx_lua_hook")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("luahook disable "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Script"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports},503:function(e,a,t){e.exports=t.p+"docs-assets/img/lua-lang-arch.1050d16d.png"}}]);