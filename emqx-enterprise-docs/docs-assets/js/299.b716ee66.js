(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{1642:function(e,t,s){"use strict";s.r(t);var a=s(10),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"benchmark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#benchmark"}},[e._v("#")]),e._v(" Benchmark")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/emqx/emqtt_bench",target:"_blank",rel:"noopener noreferrer"}},[e._v("emqtt_bench"),s("OutboundLink")],1),e._v(" is a concise and powerful MQTT protocol performance testing tool written with Erlang. If you need  testing services with large-scale scenarios and in-depth customization , the test service "),s("a",{attrs:{href:"https://www.xmeter.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("XMeter"),s("OutboundLink")],1),e._v(" is recommended.")]),e._v(" "),s("h2",{attrs:{id:"compile-and-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-install"}},[e._v("#")]),e._v(" Compile and install")]),e._v(" "),s("p",[e._v("The operation of "),s("code",[e._v("emqtt_bench")]),e._v(" depends on the operating environment of Erlang/OTP 21.2 and above version. The installation process is skipped. For details, please refer to the online installation tutorials.")]),e._v(" "),s("p",[e._v("After the Erlang environment is installed, download the latest code of "),s("code",[e._v("emqtt-bench")]),e._v(" and compile it:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/emqx/emqtt-bench\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" emqtt-bench\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("After the compilation, an executable script named "),s("code",[e._v("emqtt_bench")]),e._v(" will be generated in the current directory. Execute the following command to confirm that it can be used normally:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./emqtt_bench\nUsage: emqtt_bench pub "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" sub "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" conn "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--help"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("The output of the above content proves that "),s("code",[e._v("emqtt_bench")]),e._v(" has been correctly installed on the host.")]),e._v(" "),s("h2",{attrs:{id:"use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use"}},[e._v("#")]),e._v(" Use")]),e._v(" "),s("p",[e._v("There are three subcommands of "),s("code",[e._v("emqtt_bench")]),e._v(":")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("pub")]),e._v(": used to create a large number of clients to perform the operation of publishing messages.")]),e._v(" "),s("li",[s("code",[e._v("sub")]),e._v(": Used to create a large number of clients to subscribe to topics and receive messages.")]),e._v(" "),s("li",[s("code",[e._v("conn")]),e._v(": used to create a large number of connections.")])]),e._v(" "),s("h3",{attrs:{id:"publish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publish"}},[e._v("#")]),e._v(" Publish")]),e._v(" "),s("p",[e._v("When executing "),s("code",[e._v("./emqtt_bench pub --help")]),e._v(", you will get the available parameter output.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Parameter")]),e._v(" "),s("th",[e._v("abbreviation")]),e._v(" "),s("th",[e._v("Optional value")]),e._v(" "),s("th",[e._v("Default value")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("--host")]),e._v(" "),s("td",[e._v("-h")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("localhost")]),e._v(" "),s("td",[e._v("Address of the MQTT server to connect")])]),e._v(" "),s("tr",[s("td",[e._v("--port")]),e._v(" "),s("td",[e._v("-p")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("1883")]),e._v(" "),s("td",[e._v("MQTT service port")])]),e._v(" "),s("tr",[s("td",[e._v("--version")]),e._v(" "),s("td",[e._v("-V")]),e._v(" "),s("td",[e._v("3"),s("br"),e._v("4"),s("br"),e._v("5")]),e._v(" "),s("td",[e._v("5")]),e._v(" "),s("td",[e._v("MQTT protocol version used")])]),e._v(" "),s("tr",[s("td",[e._v("--count")]),e._v(" "),s("td",[e._v("-c")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("200")]),e._v(" "),s("td",[e._v("Total number of clients")])]),e._v(" "),s("tr",[s("td",[e._v("--startnumber")]),e._v(" "),s("td",[e._v("-n")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("0")]),e._v(" "),s("td",[e._v("Start number of clients")])]),e._v(" "),s("tr",[s("td",[e._v("--interval")]),e._v(" "),s("td",[e._v("-i")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("10")]),e._v(" "),s("td",[e._v("Interval to create a client; unit: ms")])]),e._v(" "),s("tr",[s("td",[e._v("--interval_of_msg")]),e._v(" "),s("td",[e._v("-I")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("1000")]),e._v(" "),s("td",[e._v("Interval to publish a message")])]),e._v(" "),s("tr",[s("td",[e._v("--username")]),e._v(" "),s("td",[e._v("-u")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("None; optional")]),e._v(" "),s("td",[e._v("Client username")])]),e._v(" "),s("tr",[s("td",[e._v("--password")]),e._v(" "),s("td",[e._v("-P")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("None; optional")]),e._v(" "),s("td",[e._v("Client password")])]),e._v(" "),s("tr",[s("td",[e._v("--topic")]),e._v(" "),s("td",[e._v("-t")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("None; required")]),e._v(" "),s("td",[e._v("Published topics; support placeholders:"),s("br"),s("code",[e._v("%c")]),e._v("： ClientId"),s("br"),s("code",[e._v("%u")]),e._v("： Username"),s("br"),s("code",[e._v("%i")]),e._v("：Client's sequence number")])]),e._v(" "),s("tr",[s("td",[e._v("--size")]),e._v(" "),s("td",[e._v("-s")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("256")]),e._v(" "),s("td",[e._v("Message Payload size; unit: bytes")])]),e._v(" "),s("tr",[s("td",[e._v("--qos")]),e._v(" "),s("td",[e._v("-q")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("0")]),e._v(" "),s("td",[e._v("Qos level")])]),e._v(" "),s("tr",[s("td",[e._v("--retain")]),e._v(" "),s("td",[e._v("-r")]),e._v(" "),s("td",[e._v("true"),s("br"),e._v("false")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("Whether the message sets the Retain flag")])]),e._v(" "),s("tr",[s("td",[e._v("--keepalive")]),e._v(" "),s("td",[e._v("-k")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("300")]),e._v(" "),s("td",[e._v("Client keepalive time")])]),e._v(" "),s("tr",[s("td",[e._v("--clean")]),e._v(" "),s("td",[e._v("-C")]),e._v(" "),s("td",[e._v("true"),s("br"),e._v("false")]),e._v(" "),s("td",[e._v("true")]),e._v(" "),s("td",[e._v("Whether to establish a connection by cleaning the session")])]),e._v(" "),s("tr",[s("td",[e._v("--ssl")]),e._v(" "),s("td",[e._v("-S")]),e._v(" "),s("td",[e._v("true"),s("br"),e._v("false")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("Whether to enable SSL")])]),e._v(" "),s("tr",[s("td",[e._v("--certfile")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("None")]),e._v(" "),s("td",[e._v("Client SSL certificate")])]),e._v(" "),s("tr",[s("td",[e._v("--keyfile")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("None")]),e._v(" "),s("td",[e._v("Client SSL key file")])]),e._v(" "),s("tr",[s("td",[e._v("--ws")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("true"),s("br"),e._v("false")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("Whether to establish a connection via Websocket")])]),e._v(" "),s("tr",[s("td",[e._v("--ifaddr")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("None")]),e._v(" "),s("td",[e._v("Specifies the local network card used by the client connection")])])])]),e._v(" "),s("p",[e._v("For example, we start 10 connections and send 100 Qos0 messages to the topic "),s("code",[e._v("t")]),e._v(" every second, where the size of each message payload is"),s("code",[e._v("16")]),e._v(" bytes:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./emqtt_bench pub -t t -h emqx-server -s "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v(" -q "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" -I "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"subscribe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribe"}},[e._v("#")]),e._v(" Subscribe")]),e._v(" "),s("p",[e._v("Execute "),s("code",[e._v("./emqtt_bench sub --help")]),e._v(" to get all available parameters of this subcommand. Their explanations have been included in the table above and are omitted here.")]),e._v(" "),s("p",[e._v("For example, we start 500 connections, and each subscribes to the "),s("code",[e._v("t")]),e._v(" topic with Qos0:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./emqtt_bench sub -t t -h emqx-server -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("500")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"connect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connect"}},[e._v("#")]),e._v(" Connect")]),e._v(" "),s("p",[e._v("Execute "),s("code",[e._v("./emqtt_bench conn --help")]),e._v(" to get all available parameters of this subcommand. Their explanations have been included in the table above and are omitted here.")]),e._v(" "),s("p",[e._v("For example, we start 1000 connections:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./emqtt_bench conn -h emqx-server -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"ssl-connection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssl-connection"}},[e._v("#")]),e._v(" SSL connection")]),e._v(" "),s("p",[s("code",[e._v("emqtt_bench")]),e._v(" supports establishing a secure SSL connection and performing tests.")]),e._v(" "),s("p",[e._v("One-way certificate:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./emqtt_bench sub -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" -i "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" -t bench/%i -p "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8883")]),e._v(" -S\n./emqtt_bench pub -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" -I "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" -t bench/%i -p "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8883")]),e._v(" -s "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("256")]),e._v(" -S\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Two-way certificate:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./emqtt_bench sub -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" -i "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" -t bench/%i -p "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8883")]),e._v(" --certfile path/to/client-cert.pem --keyfile path/to/client-key.pem\n./emqtt_bench pub -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" -i "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" -t bench/%i -s "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("256")]),e._v(" -p "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8883")]),e._v(" --certfile path/to/client-cert.pem --keyfile path/to/client-key.pem\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"typical-stress-test-scenario"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typical-stress-test-scenario"}},[e._v("#")]),e._v(" Typical stress test scenario")]),e._v(" "),s("h3",{attrs:{id:"scenario-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scenario-description"}},[e._v("#")]),e._v(" Scenario description")]),e._v(" "),s("p",[e._v("We verify the use of the tool in 2 most typical scenarios:")]),e._v(" "),s("ol",[s("li",[e._v("Connections: Use "),s("code",[e._v("emqtt_bench")]),e._v(" to create millions of connections to EMQX Broker.")]),e._v(" "),s("li",[e._v("Throughput: Use "),s("code",[e._v("emqtt_bench")]),e._v(" to create "),s("code",[e._v("10W / s Qos0")]),e._v(" message throughput in EMQX Broker.")])]),e._v(" "),s("h3",{attrs:{id:"device-and-deployment-topology"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#device-and-deployment-topology"}},[e._v("#")]),e._v(" Device and deployment topology")]),e._v(" "),s("p",[e._v("A total of three 8C16G servers need to be prepared, one for EMQX Broker and two for client presses:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("System: "),s("code",[e._v("CentOS Linux release 7.7.1908 (Core)")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("CPU:")]),e._v(" "),s("code",[e._v("Intel Xeon Processor (Skylake)")]),e._v(" Main frequency: "),s("code",[e._v("2693.670 MHZ")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Server：")]),e._v(" "),s("code",[e._v("emqx-centos7-v4.0.2.zip")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Press：")]),s("code",[e._v("emqtt-bench v0.3.1")])]),e._v(" "),s("ul",[s("li",[e._v("Each press is configured with 10 network cards, which are used to establish a large number of MQTT client connections in the connection test")])])])]),e._v(" "),s("p",[e._v("The topology structure is as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\t+-----------------------+\n\t| bench1: 192.168.0.100 | -------\t\t\t\t\t+--------------------------+\n\t+-----------------------+        \\-----\x3e  |\t\t    EMQX Broker\t\t\t |\n\t+-----------------------+        /-----\x3e  |       192.168.0.99\t  \t |\n\t| bench2: 192.168.0.200 | -------\t\t\t\t\t+--------------------------+\n\t+-----------------------+ \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h3",{attrs:{id:"tuning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tuning"}},[e._v("#")]),e._v(" Tuning")]),e._v(" "),s("p",[e._v("Both the client's press and the server's machine need to perform system parameter tuning, refer to "),s("RouterLink",{attrs:{to:"/en/enterprise/latest/tutorial/tune.html"}},[e._v("Tuning guide")]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"connection-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connection-test"}},[e._v("#")]),e._v(" Connection test")]),e._v(" "),s("p",[e._v("After performing system tuning, start the server:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./bin/emqx start\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Then start 50 thousand connections on each network card on "),s("code",[e._v("bench1")]),e._v(", which is a total of 50w connections:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("\n./emqtt_bench -h "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.99 -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50000")]),e._v(" --ifaddr "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.100\n./emqtt_bench -h "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.99 -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50000")]),e._v(" --ifaddr "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.101\n./emqtt_bench -h "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.99 -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50000")]),e._v(" --ifaddr "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.102\n./emqtt_bench -h "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.99 -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50000")]),e._v(" --ifaddr "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.103\n./emqtt_bench -h "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.99 -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50000")]),e._v(" --ifaddr "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.104\n./emqtt_bench -h "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.99 -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50000")]),e._v(" --ifaddr "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.105\n./emqtt_bench -h "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.99 -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50000")]),e._v(" --ifaddr "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.106\n./emqtt_bench -h "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.99 -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50000")]),e._v(" --ifaddr "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.107\n./emqtt_bench -h "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.99 -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50000")]),e._v(" --ifaddr "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.108\n./emqtt_bench -h "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.99 -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("50000")]),e._v(" --ifaddr "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.109\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("Perform the same operation on "),s("code",[e._v("bench2")]),e._v(".")]),e._v(" "),s("p",[e._v("After all connections are established, execute "),s("code",[e._v("./bin/emqx_ctl listeners")]),e._v(" and find the following content to view the information about the number of connections in EMQX Broker:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("listener on mqtt:tcp:0.0.0.0:1883\n  acceptors       "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v("\n  max_conns       "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1024000")]),e._v("\n  current_conn    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000000")]),e._v("\n  shutdown_count  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"throughput-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#throughput-test"}},[e._v("#")]),e._v(" Throughput test")]),e._v(" "),s("p",[e._v("Similarly, first start the server:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./bin/emqx start\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Start 500 subscription clients in "),s("code",[e._v("bench1")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./emqtt_bench sub -t t -h "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.99 -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("500")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Then start 20 publishers on "),s("code",[e._v("bench2")]),e._v(" and publish 10 messages per second:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./emqtt_bench pub -t t -h "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.99 -c "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v(" -I "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Then, go back to the subscribing client on "),s("code",[e._v("bench1")]),e._v(", you can see the current rate of receiving messages:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("recv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("28006")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(": "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("total")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2102563")]),e._v(", "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("rate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("99725")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("msg/sec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);