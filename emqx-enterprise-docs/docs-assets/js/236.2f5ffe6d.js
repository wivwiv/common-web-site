(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1501:function(e,s,a){"use strict";a.r(s);var n=a(10),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"patch-emqx-at-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#patch-emqx-at-runtime"}},[e._v("#")]),e._v(" Patch EMQX at Runtime")]),e._v(" "),a("p",[e._v("If a bug fix only updates a few modules, you can use patch to upgrade emqx if you know what modules to be updated.")]),e._v(" "),a("p",[e._v("Note: If you can use release upgrade, then release upgrade is preferred. You should apply patches only when release upgrade is not available, and you're sure you know what you are doing.")]),e._v(" "),a("h2",{attrs:{id:"steps-of-patching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps-of-patching"}},[e._v("#")]),e._v(" Steps of Patching")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Get the list of modules to be updated from emqx developers. For example:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("emqx.beam\nemqx_rule_engine.beam\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Get the corresponding software package from emqx official website or emqx developer.")])])]),e._v(" "),a("p",[e._v("Visit "),a("a",{attrs:{href:"https://www.emqx.com/en/try?product=broker",target:"_blank",rel:"noopener noreferrer"}},[e._v("open source download address"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://www.emqx.com/en/try?product=enterprise",target:"_blank",rel:"noopener noreferrer"}},[e._v("enterprise download address"),a("OutboundLink")],1),e._v(" to download the corresponding version of the zip package.")]),e._v(" "),a("p",[e._v("Pay attention to selecting the correct software version number, OTP version number and operating system type, and select "),a("strong",[e._v("zip")]),e._v(" package type.")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("Unzip the downloaded zip package and find the modules to be updated:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("unzip")]),e._v(" -q emqx-ee-4.4.1-otp24.1.5-3-ubuntu20.04-amd64.zip\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Suppose we want to update the "),a("code",[e._v("emqx.beam")]),e._v(" and "),a("code",[e._v("emqx_rule_engine.beam")]),e._v(", then find them in the extracted directory:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" ./emqx -name "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"emqx.beam"')]),e._v("\n./emqx/lib/emqx-4.4.1/ebin/emqx.beam\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" ./emqx -name "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"emqx_rule_engine.beam"')]),e._v("\n./emqx/lib/emqx_rule_engine-4.4.1/ebin/emqx_rule_engine.beam\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Ensure that emqx is started:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ emqx_ctl status\nNode "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'emqx@127.0.0.1'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.4")]),e._v(".1 is started\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Find the corresponding location of beam file, backup and replace the old beams:")]),e._v(" "),a("p",[e._v("Locate the emqx installation directory:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ emqx root_dir\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/usr/lib/emqx"')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Find the path of the old beam file in the "),a("code",[e._v("lib")]),e._v(" directory under the installation directory:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" /usr/lib/emqx/lib -name "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"emqx.beam"')]),e._v("\n/usr/lib/emqx/lib/emqx-4.4.0/ebin/emqx.beam\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" /usr/lib/emqx/lib -name "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"emqx_rule_engine.beam"')]),e._v("\n/usr/lib/emqx/lib/emqx_rule_engine-4.4.0/ebin/emqx_rule_engine.beam\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Back up the old beam file to the "),a("code",[e._v("/tmp")]),e._v(" Directory:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" /usr/lib/emqx/lib/emqx-4.4.0/ebin/emqx.beam "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    /usr/lib/emqx/lib/emqx_rule_engine-4.4.0/ebin/emqx_rule_engine.beam /tmp\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Overwrite the corresponding files with the new beam file:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" -f ./emqx/lib/emqx-4.4.1/ebin/emqx.beam /usr/lib/emqx/lib/emqx-4.4.0/ebin/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" -f ./emqx/lib/emqx_rule_engine-4.4.1/ebin/emqx_rule_engine.beam /usr/lib/emqx/lib/emqx_rule_engine-4.4.0/ebin/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Load new files at runtime:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ emqx "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("eval")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'c:lm().'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("module, emqx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("module, emqx_rule_engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])])]),e._v(" "),a("h2",{attrs:{id:"rollback-the-patches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollback-the-patches"}},[e._v("#")]),e._v(" Rollback the Patches")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Copy the backup files back to the original directory:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" -f /tmp/emqx.beam /usr/lib/emqx/lib/emqx-4.4.0/ebin/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" -f /tmp/emqx_rule_engine.beam /usr/lib/emqx/lib/emqx_rule_engine-4.4.0/ebin/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("reload the beam files:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ emqx "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("eval")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'c:lm().'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("module, emqx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("module, emqx_rule_engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])])])])}),[],!1,null,null,null);s.default=t.exports}}]);