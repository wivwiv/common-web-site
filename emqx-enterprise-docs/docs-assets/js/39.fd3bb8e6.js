(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1633:function(s,e,t){"use strict";t.r(e);var a=t(10),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"create-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-rules"}},[s._v("#")]),s._v(" Create rules")]),s._v(" "),a("h2",{attrs:{id:"create-rules-using-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-rules-using-dashboard"}},[s._v("#")]),s._v(" Create rules using Dashboard")]),s._v(" "),a("h3",{attrs:{id:"create-webhook-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-webhook-rules"}},[s._v("#")]),s._v(" Create WebHook rules")]),s._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[s._v("Setup a Web Service, here we setup a simple web service using the linux tool "),a("code",[s._v("nc")]),s._v(":")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP/1.1 200 OK'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" -l "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",[a("li",[a("p",[s._v("Create a rule:")]),s._v(" "),a("p",[s._v("Go to "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQX Dashboard"),a("OutboundLink")],1),s._v(", select the “rule” tab on the menu to the left.")]),s._v(" "),a("p",[s._v("Select “message.publish”, then type in the following SQL:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("\n        qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:t(917),alt:"image"}})])]),s._v(" "),a("li",[a("p",[s._v("Bind an action:")]),s._v(" "),a("p",[s._v("Click on the “+ Add” button under “Action Handler”, and then select “Data to Web Server” in the pop-up dialog window.")])])]),s._v(" "),a("p",[a("img",{attrs:{src:t(918),alt:"image"}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[s._v("Bind a resource to the action:")]),s._v(" "),a("p",[s._v("Since the dropdown list “Resource” is empty for now, we create a new resource by clicking on the “New Resource” to the top right:")]),s._v(" "),a("p",[a("img",{attrs:{src:t(919),alt:"image"}})]),s._v(" "),a("p",[s._v("then select “WebHook”:")]),s._v(" "),a("p",[a("img",{attrs:{src:t(920),alt:"image"}})])]),s._v(" "),a("li",[a("p",[s._v("Configure the resource:")]),s._v(" "),a("p",[s._v("Fill in the “Request URL” and “Request Header”(Optional):")]),s._v(" "),a("p",[s._v("http://127.0.0.1:8081")]),s._v(" "),a("p",[s._v("And click on the “Testing Connection” button to make sure the connection can be created successfully, and then click on the “Create” button.")]),s._v(" "),a("p",[a("img",{attrs:{src:t(921),alt:"image"}})])]),s._v(" "),a("li",[a("p",[s._v("Back to the “Actions” dialog, and then click on the “Confirm” button.")]),s._v(" "),a("p",[a("img",{attrs:{src:t(922),alt:"image"}})])]),s._v(" "),a("li",[a("p",[s._v("Back to the creating rule page, then click on “Create” button. The rule we created will be show in the rule list")])])]),s._v(" "),a("p",[a("img",{attrs:{src:t(923),alt:"image"}})]),s._v(" "),a("p",[s._v("We have finished, testing the rule by sending an MQTT message to emqx:")]),s._v(" "),a("p",[a("img",{attrs:{src:t(924),alt:"image"}})]),s._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("p",[s._v("send a message")]),s._v(" "),a("p",[s._v('Topic: "t/1"')]),s._v(" "),a("p",[s._v("QoS: 1")]),s._v(" "),a("p",[s._v('Payload: "Hello web server"')])])]),s._v(" "),a("p",[s._v("Then check if the web service receives the message:")]),s._v(" "),a("p",[a("img",{attrs:{src:t(925),alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"create-simple-rules-using-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-simple-rules-using-cli"}},[s._v("#")]),s._v(" Create Simple Rules using CLI")]),s._v(" "),a("h3",{attrs:{id:"create-inspect-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-inspect-rules"}},[s._v("#")]),s._v(" Create Inspect Rules")]),s._v(" "),a("p",[s._v("Create a rule for testing: print the content of the message and all the args of the action, when a MQTT message is sent to topic ‘t/a’.")]),s._v(" "),a("ul",[a("li",[s._v("The filter SQL is: SELECT * FROM \"message.publish\" WHERE topic = 't/a';")]),s._v(" "),a("li",[s._v("The action is: “print the content of the message and all the args of the action”, the action we need is ‘inspect’.")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl rules create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELECT * FROM '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("message.publish"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" WHERE topic = 't/a'\"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'[{"name":"inspect", "params": {"a": 1}}]\'')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Rule for debug'")]),s._v("\n\nRule rule:803de6db created\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("The CLI above created a rule with ID=’Rule rule:803de6db’.")]),s._v(" "),a("p",[s._v("The first two args are mandatory:")]),s._v(" "),a("ul",[a("li",[s._v("SQL: SELECT * FROM \"message.publish\" WHERE topic = 't/a'")]),s._v(" "),a("li",[s._v("Action List: [{“name”:”inspect”, “params”: {“a”: 1}}]. Action List is of type JSON Array. “name” is the name of the action, “params” is the parameters of the action. Note that the action "),a("code",[s._v("inspect")]),s._v(" does not need a resource.")])]),s._v(" "),a("p",[s._v("The last arg is an optional description of the rule: ‘Rule for debug’.")]),s._v(" "),a("p",[s._v("If a MQTT message “hello” is sent to topic ‘t/a’, the rule “Rule rule:803de6db” will be matched, and then action “inspect” will be triggered, the following info will be printed to the emqx console:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f log/erlang.log.1\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("emqx@127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("inspect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    Selected Data: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{client_id => <<\"shawn\">>,event => 'message.publish',")]),s._v("\n                      flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{dup => false,retain => false},")]),s._v("\n                      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5898704A55D6AF4430000083D0002"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",\n                      payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",\n                      peername "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:61770"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n                      timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1558587875090")]),s._v(",topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/a"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",\n                      username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    Envs: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{event => 'message.publish',")]),s._v("\n            flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{dup => false,retain => false},")]),s._v("\n            from "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shawn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",\n            headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{allow_publish => true,")]),s._v("\n                  peername "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127,0")]),s._v(",0,1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",61770"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n                  username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,5")]),s._v(",137,135,4,165,93,106,244,67,0,0,8,61,0,"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">>")]),s._v(",\n            payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n            timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1558,587875")]),s._v(",89754"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n            topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/a"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    Action Init Params: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#{<<"a">> => 1}')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("Selected Data")]),s._v(" listed the fields that selected by the SQL. All available fields will be listed here, as we used "),a("code",[s._v("select *")]),s._v(".")]),s._v(" "),a("li",[a("code",[s._v("Envs")]),s._v(" is the environment variables that can be used internally in the action.")]),s._v(" "),a("li",[a("code",[s._v("Action Init Params")]),s._v(" is the params we passed to the action.")])]),s._v(" "),a("h3",{attrs:{id:"create-webhook-rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-webhook-rule"}},[s._v("#")]),s._v(" Create WebHook Rule")]),s._v(" "),a("p",[s._v("Create a rule: Forward all the messages that send from client_id=’Steven’, to the Web Server at ‘"),a("a",{attrs:{href:"http://127.0.0.1:9910/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1:9910"),a("OutboundLink")],1),s._v("’:")]),s._v(" "),a("ul",[a("li",[s._v("The filter SQL: SELECT username as u, payload FROM \"message.publish\" where\nu='Steven';")]),s._v(" "),a("li",[s._v("Actions: “Forward to ‘"),a("a",{attrs:{href:"http://127.0.0.1:9910/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1:9910"),a("OutboundLink")],1),s._v("’”;")]),s._v(" "),a("li",[s._v("Resource Type: web_hook;")]),s._v(" "),a("li",[s._v("Resource: “The WebHook resource at ‘"),a("a",{attrs:{href:"http://127.0.0.1:9910/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1:9910"),a("OutboundLink")],1),s._v("’”.")])]),s._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[a("p",[s._v("Create a simpile Web service using linux tool "),a("code",[s._v("nc")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP/1.1 200 OK'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" -l "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9910")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Create a resource of resource type “WebHook”, and configure the url:")]),s._v(" "),a("p",[s._v("1).  List all available resource types, make sure ‘web_hook’ exists:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl resource-types list\n\nresource_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'web_hook'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("provider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'emqx_web_hook'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("params")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{...}}, on_create={emqx_web_hook_actions,on_resource_create}, description='WebHook Resource')")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("2).  Create a new resource using resource type ‘web_hook’, configure “url”=”"),a("a",{attrs:{href:"http://127.0.0.1:9910/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1:9910"),a("OutboundLink")],1),s._v("”:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl resources create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'web_hook'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"url": "http://127.0.0.1:9910", "headers": {"token":"axfw34y235wrq234t4ersgw4t"}, "method": "POST"}\'')]),s._v("\n\nResource resource:691c29ba created\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("Above CLI created a resource with ID=’resource:691c29ba’, the first arg is mandatory - The resource type (web_hook). HTTP method is POST, and an HTTP Header is set: “token”.")])]),s._v(" "),a("li",[a("p",[s._v("Create a rule, and bind action ‘data_to_webserver’ to it:")]),s._v(" "),a("p",[s._v("1).  List all available actions, make sure ‘data_to_webserver’ exists:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl rule-actions list\n\naction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'data_to_webserver'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'emqx_web_hook'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$any'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("types")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("web_hook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("params")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{'$resource' => ...}, title ='Data to Web Server', description='Forward Messages to Web Server')")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("2).  Create the rule, bind the action data_to_webserver, and bind resource resource:691c29ba to the action via the arg “$resource”:")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("    $ ./bin/emqx_ctl rules create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELECT username as u, payload FROM '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("message.publish"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" where u='Steven'\"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'[{"name":"data_to_webserver", "params": {"$resource":  "resource:691c29ba"}}]\'')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n      -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Forward publish msgs from steven to webserver"')]),s._v("\n  \nrule:26d84768\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("Above CLI is simlar to the first Inspect rule, with exception that the resource ‘resource:691c29ba’ is bound to ‘data_to_webserver’. The binding is done by a special arg named ‘$resource’. What the action ‘data_to_webserver’ does is sending messages to the specified web server.")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("Now let’s send a message “hello” to an arbitrary topic using username “Steven”, this will trigger the rule we created above, and the Web Server will receive an message and return 200 OK:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP/1.1 200 OK'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" -l "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9910")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nPOST / HTTP/1.1\ncontent-type: application/json\ncontent-length: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("\nte:\nhost: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9910\nconnection: keep-alive\ntoken: axfw34y235wrq234t4ersgw4t\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"payload"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"u"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Steven"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports},917:function(s,e,t){s.exports=t.p+"docs-assets/img/webhook-rulesql-1.7b37f46d.png"},918:function(s,e,t){s.exports=t.p+"docs-assets/img/webhook-action-1.b28caa50.png"},919:function(s,e,t){s.exports=t.p+"docs-assets/img/webhook-action-2.503de352.png"},920:function(s,e,t){s.exports=t.p+"docs-assets/img/webhook-resource-1.12d99cbc.png"},921:function(s,e,t){s.exports=t.p+"docs-assets/img/webhook-resource-2.995cd0f6.png"},922:function(s,e,t){s.exports=t.p+"docs-assets/img/webhook-action-3.7e5bbd77.png"},923:function(s,e,t){s.exports=t.p+"docs-assets/img/webhook-rule-create.930e55fc.png"},924:function(s,e,t){s.exports=t.p+"docs-assets/img/webhook-rulelist-1.6bb3e43e.png"},925:function(s,e,t){s.exports=t.p+"docs-assets/img/webhook-result-1.e58f8bb6.png"}}]);