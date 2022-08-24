(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{1836:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"编解码举例-自定义-http-编解码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编解码举例-自定义-http-编解码"}},[s._v("#")]),s._v(" 编解码举例 - 自定义 HTTP 编解码")]),s._v(" "),a("h2",{attrs:{id:"规则需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则需求"}},[s._v("#")]),s._v(" 规则需求")]),s._v(" "),a("p",[s._v("设备发布一个任意的消息，验证自部署的编解码服务能正常工作。")]),s._v(" "),a("h2",{attrs:{id:"创建-parser-http-资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-parser-http-资源"}},[s._v("#")]),s._v(" 创建 Parser HTTP 资源")]),s._v(" "),a("p",[s._v("在 EMQX Dashboard 的 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/resources",target:"_blank",rel:"noopener noreferrer"}},[s._v("Resource 创建"),a("OutboundLink")],1),s._v(" 界面，使用下面的参数创建一个 Parser HTTP 资源：")]),s._v(" "),a("ul",[a("li",[s._v("URL: http://127.0.0.1:9003/parser")]),s._v(" "),a("li",[s._v("Request Method: POST")])]),s._v(" "),a("p",[s._v("其他保持默认，点击创建之后，得到 Resource ID，比如：resource:606631")]),s._v(" "),a("h2",{attrs:{id:"创建-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-schema"}},[s._v("#")]),s._v(" 创建 Schema")]),s._v(" "),a("p",[s._v("在 EMQX Dashboard 的 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/schemas/0?oper=create",target:"_blank",rel:"noopener noreferrer"}},[s._v("Schema 创建"),a("OutboundLink")],1),s._v(" 界面，使用下面的参数创建一个 3rd-Party Schema:")]),s._v(" "),a("ol",[a("li",[s._v("名称: my_http_parser")]),s._v(" "),a("li",[s._v("编解码类型: 3rd-party")]),s._v(" "),a("li",[s._v("第三方类型: Resources")]),s._v(" "),a("li",[s._v("Resource: resource:606631（这里选择我们刚才创建的 Parser HTTP 资源）")]),s._v(" "),a("li",[s._v("编解码配置: xor")])]),s._v(" "),a("p",[s._v("其他配置保持默认。")]),s._v(" "),a("p",[s._v("上面第 5 项编解码配置是个可选项，是个字符串，内容跟编解码服务的业务相关。")]),s._v(" "),a("h2",{attrs:{id:"创建规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建规则"}},[s._v("#")]),s._v(" 创建规则")]),s._v(" "),a("p",[a("strong",[s._v("使用刚才创建好的 Schema 来编写规则 SQL 语句：")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n  schema_encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my_http_parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" encoded_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  schema_decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my_http_parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" encoded_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" decoded_data\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这个 SQL 语句首先对数据做了 Encode，然后又做了 Decode，目的在于验证编解码过程是否正确:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("schema_encode")]),s._v(" 函数将 payload 字段的内容按照 'my_http_parser' 这个 Schema 来做编码，结果存储到 "),a("code",[s._v("encoded_data")]),s._v(" 这个变量里;")]),s._v(" "),a("li",[a("code",[s._v("schema_decode")]),s._v(" 函数将 payload 字段的内容按照 'my_http_parser' 这个 Schema 来做解码，结果存储到 "),a("code",[s._v("decoded_data")]),s._v(" 这个变量里;")])]),s._v(" "),a("p",[s._v("最终这个 SQL 语句的筛选结果是 "),a("code",[s._v("encoded_data")]),s._v(" 和 "),a("code",[s._v("decoded_data")]),s._v(" 这两个变量。")]),s._v(" "),a("p",[a("strong",[s._v("然后使用以下参数添加动作：")])]),s._v(" "),a("ul",[a("li",[s._v("动作类型：检查(调试)")])]),s._v(" "),a("p",[s._v("这个检查动作会把 SQL 语句筛选的结果打印到 emqx 控制台 (erlang shell) 里。")]),s._v(" "),a("p",[s._v('如果是使用 emqx console 启动的服务，打印会直接显示在控制台里；如果是使用 emqx start 启动的服务，打印会输出到日志目录下的 erlang.log.N 文件里，这里 "N" 为整数，比如 "erlang.log.1", "erlang.log.2"。')]),s._v(" "),a("h2",{attrs:{id:"编解码服务端代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编解码服务端代码"}},[s._v("#")]),s._v(" 编解码服务端代码")]),s._v(" "),a("p",[s._v("规则创建好之后，就可以模拟数据进行测试了。所以首先需要编写一个自己的编解码服务。")]),s._v(" "),a("p",[s._v("下面的代码使用 Python 语言实现了一个 HTTP 编解码服务，为简单起见，这个服务提供两种简单的方式来进行编解码(加解密)，详见 "),a("a",{attrs:{href:"https://github.com/terry-xiaoyu/schema-registry-examples/blob/master/3rd_party/http_parser_server.py",target:"_blank",rel:"noopener noreferrer"}},[s._v("完整代码"),a("OutboundLink")],1),s._v(":")]),s._v(" "),a("ul",[a("li",[s._v("按位异或")]),s._v(" "),a("li",[s._v("字符替换")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("\"\"\"\n  >>> xor(xor(b'abc'))\n  b'abc'\n  >>> xor(xor(b'!}~*'))\n  b'!}~*'\n  \"\"\"")]),s._v("\n  length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  bdata "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytearray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  bsecret "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytearray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("secret "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytearray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bdata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" bsecret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("subst")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dtype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("\"\"\"\n  >>> subst('decode', b'abc', 3)\n  b'def'\n  >>> subst('decode', b'ab~', 1)\n  b'bc!'\n  >>> subst('encode', b'def', 3)\n  b'abc'\n  >>> subst('encode', b'bc!', 1)\n  b'ab~'\n  \"\"\"")]),s._v("\n  adata "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'B'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("adata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" dtype "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'decode'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      adata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" shift"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("adata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" dtype "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'encode'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      adata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" shift"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("adata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("adata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("将这个服务运行起来:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" flask\n$ python3 http_parser_server.py\n * Serving Flask app "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http_parser_server"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lazy loading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n * Environment: production\n   WARNING: This is a development server. Do not use it "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a production deployment.\n   Use a production WSGI server instead.\n * Debug mode: off\n * Running on http://127.0.0.1:9003/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press CTRL+C to quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"检查规则执行结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查规则执行结果"}},[s._v("#")]),s._v(" 检查规则执行结果")]),s._v(" "),a("p",[s._v("由于本示例比较简单，我们直接使用 MQTT Websocket 客户端来模拟设备端发一条消息。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("在 Dashboard 的 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/websocket",target:"_blank",rel:"noopener noreferrer"}},[s._v("Websocket"),a("OutboundLink")],1),s._v(' 工具里，登录一个 MQTT Client 并发布一条消息到 "t/1"，内容为 "hello"。')])]),s._v(" "),a("li",[a("p",[s._v("检查 emqx 控制台 (erlang shell) 里的打印:")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("emqx@127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("inspect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        Selected Data: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#{decoded_data => <<"hello">>,')]),s._v("\n                         encoded_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9,4")]),s._v(",13,13,1"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        Envs: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{event => 'message.publish',")]),s._v("\n                flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{dup => false,retain => false},")]),s._v("\n                from "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mqttjs_76e5a35b"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",\n                headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{allow_publish => true,")]),s._v("\n                      peername "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127,0")]),s._v(",0,1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",54753"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n                      username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,5")]),s._v(",146,30,146,38,123,81,244,66,0,0,62,117,0,"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">>")]),s._v(",\n                node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'emqx@127.0.0.1'")]),s._v(",payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n                timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1568,34882")]),s._v(",222929"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n                topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        Action Init Params: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("Select Data 是经过 SQL 语句筛选之后的数据，Envs 是规则引擎内部可用的环境变量，Action Init Params 是动作的初始化参数。这三个数据均为 "),a("code",[s._v("Map")]),s._v(" 格式。")]),s._v(" "),a("p",[s._v("Selected Data 里面的两个字段 "),a("code",[s._v("decoded_data")]),s._v(" 和 "),a("code",[s._v("encoded_data")]),s._v(" 对应 SELECT 语句里面的两个 AS。因为 "),a("code",[s._v("decoded_data")]),s._v(' 是编码然后再解码之后的结果，所以它又被还原为了我们发送的内容 "hello"，表明编解码插件工作正常。')])])}),[],!1,null,null,null);t.default=e.exports}}]);