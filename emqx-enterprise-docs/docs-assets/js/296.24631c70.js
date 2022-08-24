(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1639:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3rd-party-custom-codec-example-http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3rd-party-custom-codec-example-http"}},[t._v("#")]),t._v(" 3rd-Party Custom codec example - HTTP")]),t._v(" "),a("h2",{attrs:{id:"rule-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-requirements"}},[t._v("#")]),t._v(" Rule requirements")]),t._v(" "),a("p",[t._v("The device publishes an arbitrary message to verify that the self-deployed codec service is working normally.")]),t._v(" "),a("h2",{attrs:{id:"create-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-schema"}},[t._v("#")]),t._v(" Create Schema")]),t._v(" "),a("p",[t._v("In the "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/schemas/0?oper=create",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dashboard"),a("OutboundLink")],1),t._v(" interface of EMQX, create a 3rd-Party Schema using the following parameters:")]),t._v(" "),a("ol",[a("li",[t._v("Name: my_parser")]),t._v(" "),a("li",[t._v("Codec Type: 3rd-party")]),t._v(" "),a("li",[t._v("Third Party Type: HTTP")]),t._v(" "),a("li",[t._v("URL: http://127.0.0.1:9003/parser")]),t._v(" "),a("li",[t._v("Codec Configuration: xor")])]),t._v(" "),a("p",[t._v("All other configurations remain default.")]),t._v(" "),a("p",[t._v("Item 5 (i.e.codec configuration) above is optional and is a string, the content of which is related to the service of the codec service.")]),t._v(" "),a("h2",{attrs:{id:"creating-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-rules"}},[t._v("#")]),t._v(" Creating rules")]),t._v(" "),a("p",[a("strong",[t._v("Use the Schema you have just created to write the rule SQL statement:")])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n  schema_encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my_parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" encoded_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  schema_decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my_parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoded_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" decoded_data\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t/#"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("This SQL statement first encodes and then decodes the data to verify that the encoding and decoding process is correct:")]),t._v(" "),a("ul",[a("li",[t._v("The "),a("code",[t._v("schema_encode")]),t._v(" function encodes the contents of the payload field according to the Schema 'my_parser' and stores the result in the variable "),a("code",[t._v("encoded_data")]),t._v(";")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("schema_decode")]),t._v(" function decodes the contents of the payload field according to the Schema 'my_parser' and stores the result in the variable "),a("code",[t._v("decoded_data")]),t._v(";")])]),t._v(" "),a("p",[t._v("The final filtered result of this SQL statement is the variables "),a("code",[t._v("encoded_data")]),t._v(" and "),a("code",[t._v("decoded_data")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Then add the action using the following parameters:")])]),t._v(" "),a("ul",[a("li",[t._v("Action Type: Check (debug)")])]),t._v(" "),a("p",[t._v("This check action prints the results filtered by the SQL statement to the emqx console (erlang shell).")]),t._v(" "),a("p",[t._v('If the service is started with emqx console, the print will be displayed directly in the console; if the service is started with emqx start, the print will be output to the erlang.log.N file in the log directory, where "N" is an integer, e.g. "erlang.log.1", " erlang.log.2".')]),t._v(" "),a("h2",{attrs:{id:"codec-server-side-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#codec-server-side-code"}},[t._v("#")]),t._v(" Codec server-side code")]),t._v(" "),a("p",[t._v("Once the rules have been created, it is time to simulate the data for testing. Therefore, the first thing you need to do is write your own codec service.")]),t._v(" "),a("p",[t._v("The following code implements an HTTP codec service using the Python language. For simplicity, this service provides two simple ways of coding and decoding (encryption and decryption). See "),a("a",{attrs:{href:"https://github.com/terry-xiaoyu/schema-registry-examples/blob/master/3rd_party/http_parser_server.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("full code"),a("OutboundLink")],1),t._v(" for details.")]),t._v(" "),a("ul",[a("li",[t._v("xor")]),t._v(" "),a("li",[t._v("Character substitution")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("xor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("\"\"\"\n  >>> xor(xor(b'abc'))\n  b'abc'\n  >>> xor(xor(b'!}~*'))\n  b'!}~*'\n  \"\"\"")]),t._v("\n  length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  bdata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytearray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  bsecret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytearray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytearray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bdata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" bsecret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subst")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dtype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("\"\"\"\n  >>> subst('decode', b'abc', 3)\n  b'def'\n  >>> subst('decode', b'ab~', 1)\n  b'bc!'\n  >>> subst('encode', b'def', 3)\n  b'abc'\n  >>> subst('encode', b'bc!', 1)\n  b'ab~'\n  \"\"\"")]),t._v("\n  adata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" dtype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'decode'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      adata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" shift"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" dtype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'encode'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      adata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" shift"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br")])]),a("p",[t._v("Run this service:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" flask\n$ python3 http_parser_server.py\n * Serving Flask app "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http_parser_server"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lazy loading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n * Environment: production\n   WARNING: This is a development server. Do not use it "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a production deployment.\n   Use a production WSGI server instead.\n * Debug mode: off\n * Running on http://127.0.0.1:9003/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Press CTRL+C to quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"checking-rule-execution-results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-rule-execution-results"}},[t._v("#")]),t._v(" Checking rule execution results")]),t._v(" "),a("p",[t._v("Since this example is relatively simple, we'll use the MQTT Websocket client directly to simulate sending a message on the device side.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("In the Dashboard's "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/websocket",target:"_blank",rel:"noopener noreferrer"}},[t._v("Websocket"),a("OutboundLink")],1),t._v(' tools, log in to an MQTT Client and publish a message to "t/1" with the text "hello".')])]),t._v(" "),a("li",[a("p",[t._v("Check what is printed in the emqx console (erlang shell):")])])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("emqx@127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("inspect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        Selected Data: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#{decoded_data => <<"hello">>,')]),t._v("\n                         encoded_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9,4")]),t._v(",13,13,1"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("4")]),t._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        Envs: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{event => 'message.publish',")]),t._v("\n                flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{dup => false,retain => false},")]),t._v("\n                from "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqttjs_76e5a35b"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(",\n                headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{allow_publish => true,")]),t._v("\n                      peername "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127,0")]),t._v(",0,1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",54753"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n                      username "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0,5")]),t._v(",146,30,146,38,123,81,244,66,0,0,62,117,0,"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">>")]),t._v(",\n                node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emqx@127.0.0.1'")]),t._v(",payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(",qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n                timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1568,34882")]),t._v(",222929"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n                topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t/1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        Action Init Params: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("Select Data is the data filtered by the SQL statement, Envs are available environment variables within the rule engine and Action Init Params is the initialization parameters for actions. All three data are in "),a("code",[t._v("Map")]),t._v(" format.")]),t._v(" "),a("p",[t._v("The two fields "),a("code",[t._v("decoded_data")]),t._v(" and "),a("code",[t._v("encoded_data")]),t._v(" in Selected Data correspond to the two ASs in the SELECT statement. Because "),a("code",[t._v("decoded_data")]),t._v(' is the result of encoding and then decoding, it is reverted to the content we sent, "hello", indicating that the codec plugin is working correctly.')])])}),[],!1,null,null,null);s.default=n.exports}}]);