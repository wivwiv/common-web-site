(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1466:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"jwt-acl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jwt-acl"}},[s._v("#")]),s._v(" JWT ACL")]),s._v(" "),t("p",[s._v("JWT ACL uses ACL rules from JWTs provided by a client during authentication. To keep JWTs reasonably small, clients using JWT ACL are not supposed to have many ACL rules.")]),s._v(" "),t("p",[s._v("Plugin:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("emqx_auth_jwt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("The emqx_auth_jwt authorization features are tightly coupled with authentication features.")])]),s._v(" "),t("h2",{attrs:{id:"acl-information-stored-in-claims"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acl-information-stored-in-claims"}},[s._v("#")]),s._v(" ACL information stored in claims")]),s._v(" "),t("p",[s._v("To enable authorization via JWT one should specify claim name for searching ACL rules.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etc/plugins/emqx_auth_jwt.conf")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Server address")]),s._v("\nauth.jwt.acl_claim_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" acl\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("JWT authorization is not applied if a client does not have the specified claim in its JWT.")]),s._v(" "),t("h2",{attrs:{id:"data-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[s._v("#")]),s._v(" Data structure")]),s._v(" "),t("p",[s._v("The data structure of ACL rules is the following:")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    # "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" payload claims "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"acl"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sub"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"some/topic/for/sub/1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"some/topic/for/sub/2"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pub"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"some/topics/for/pub/1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"some/topics/for/pub/2"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"all"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"some/topics/for/pubsub/1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"some/topics/for/pubsub/2"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[t("code",[s._v("pub")]),s._v(", "),t("code",[s._v("sub")]),s._v(", and "),t("code",[s._v("all")]),s._v(" lists serve as whitelists for the corresponding operations.")]),s._v(" "),t("p",[s._v("You can use the following placeholders in topic whitelists:")]),s._v(" "),t("ul",[t("li",[s._v("%u：Username")]),s._v(" "),t("li",[s._v("%c：Client ID")])]),s._v(" "),t("p",[s._v("For example:")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    # "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" payload claims "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"acl"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pub"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"some/stats/%c"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("EMQX Broker will automatically interpolate topic names before checking ACL.")]),s._v(" "),t("h2",{attrs:{id:"acl-expiration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acl-expiration"}},[s._v("#")]),s._v(" ACL expiration")]),s._v(" "),t("p",[s._v("JWT ACL engine will prohibit all operations after the deadline specified in "),t("code",[s._v("exp")]),s._v(" JWT claim, so\na client with an expired JWT has to reconnect with a fresh JWT.")]),s._v(" "),t("p",[s._v("To make ACL rules valid forever, a client may not provide "),t("code",[s._v("exp")]),s._v(" claim at all.")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARING")]),s._v(" "),t("ol",[t("li",[s._v("Using long-living JWTs is not considered secure.")]),s._v(" "),t("li",[s._v("Turning on ACL caching may invalidate the expiration time check.")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);