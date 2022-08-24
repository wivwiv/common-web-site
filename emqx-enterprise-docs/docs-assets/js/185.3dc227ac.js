(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{1523:function(s,e,t){"use strict";t.r(e);var a=t(10),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mqtt-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-bridge"}},[s._v("#")]),s._v(" MQTT Bridge")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("After EMQX version 3.1, a powerful rule engine is introduced to replace plug-ins. It is recommended that you use it. See "),a("RouterLink",{attrs:{to:"/en/enterprise/latest/rule/bridge_mqtt.html"}},[s._v("Bridge data to MQTT")]),s._v(" to setup mqtt bridges in rule engine.")],1)]),s._v(" "),a("p",[s._v("EMQX bridges and forwards MQTT messages to MQTT Broker:")]),s._v(" "),a("p",[a("img",{attrs:{src:t(402),alt:"image"}})]),s._v(" "),a("p",[s._v("Config file for MQTT bridge plugin: etc/plugins/emqx_bridge_mqtt.conf")]),s._v(" "),a("h2",{attrs:{id:"configure-mqtt-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-mqtt-bridge"}},[s._v("#")]),s._v(" Configure MQTT Bridge")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Bridge address: node name for local bridge, host:port for remote")]),s._v("\nbridge.mqtt.aws.address "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:1883\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Protocol version of the bridge: mqttv3 | mqttv4 | mqttv5")]),s._v("\nbridge.mqtt.aws.proto_ver "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mqttv4\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Whether to enable bridge mode for mqtt bridge")]),s._v("\nbridge.mqtt.aws.bridge_mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## The ClientId of a remote bridge")]),s._v("\nbridge.mqtt.aws.clientid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bridge_aws\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## The Clean start flag of a remote bridge")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## NOTE: Some IoT platforms require clean_start must be set to 'true'")]),s._v("\nbridge.mqtt.aws.clean_start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## The username for a remote bridge")]),s._v("\nbridge.mqtt.aws.username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" user\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## The password for a remote bridge")]),s._v("\nbridge.mqtt.aws.password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Bribge to remote server via SSL")]),s._v("\nbridge.mqtt.aws.ssl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" off\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## PEM-encoded CA certificates of the bridge")]),s._v("\nbridge.mqtt.aws.cacertfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" etc/certs/cacert.pem\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Client SSL Certfile of the bridge")]),s._v("\nbridge.mqtt.aws.certfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" etc/certs/client-cert.pem\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Client SSL Keyfile of the bridge")]),s._v("\nbridge.mqtt.aws.keyfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" etc/certs/client-key.pem\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## SSL Ciphers used by the bridge")]),s._v("\nbridge.mqtt.aws.ciphers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Ciphers for TLS PSK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Note that 'bridge.${BridgeName}.ciphers' and 'bridge.${BridgeName}.psk_ciphers' cannot be configured at the same time.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## See 'https://tools.ietf.org/html/rfc4279#section-2'.")]),s._v("\nbridge.mqtt.aws.psk_ciphers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PSK-AES128-CBC-SHA,PSK-AES256-CBC-SHA,PSK-3DES-EDE-CBC-SHA,PSK-RC4-SHA\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Ping interval of a down bridge.")]),s._v("\nbridge.mqtt.aws.keepalive "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 60s\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## TLS versions used by the bridge.")]),s._v("\nbridge.mqtt.aws.tls_versions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tlsv1.2,tlsv1.1,tlsv1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])]),a("h2",{attrs:{id:"configure-topics-mqtt-bridge-forwards-and-subscribes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-topics-mqtt-bridge-forwards-and-subscribes"}},[s._v("#")]),s._v(" Configure Topics MQTT Bridge Forwards and Subscribes")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Mountpoint of the bridge")]),s._v("\nbridge.mqtt.aws.mountpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bridge/aws/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v("/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Forward message topics")]),s._v("\nbridge.mqtt.aws.forwards "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" topic1/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#,topic2/#")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Subscriptions of the bridge topic")]),s._v("\nbridge.mqtt.aws.subscription.1.topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cmd/topic1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Subscriptions of the bridge qos")]),s._v("\nbridge.mqtt.aws.subscription.1.qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Subscriptions of the bridge topic")]),s._v("\nbridge.mqtt.aws.subscription.2.topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cmd/topic2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Subscriptions of the bridge qos")]),s._v("\nbridge.mqtt.aws.subscription.2.qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"description-of-topics-mqtt-bridge-forwards-and-subscribes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-of-topics-mqtt-bridge-forwards-and-subscribes"}},[s._v("#")]),s._v(" Description of Topics MQTT Bridge Forwards and Subscribes")]),s._v(" "),a("p",[s._v("Mountpoint: Mountpoint is used to prefix of topic when forwarding a\nmessage, this option must be used with "),a("code",[s._v("forwards")]),s._v('. Forwards the message\nwhose topic is "sensor1/hello", its topic will change to\n"<bridge/aws/emqx1@192.168.1.1/sensor1/hello>" when it reaches the\nremote node.')]),s._v(" "),a("p",[s._v("Forwards: Messages forwarded to "),a("code",[s._v("forwards")]),s._v(" specified by local EMQX are\nforwarded to the remote MQTT Broker.")]),s._v(" "),a("p",[s._v("Subscription: Local EMQX synchronizes messages from a remote MQTT\nBroker to local by subscribing to the topic of the remote MQTT Broker.")]),s._v(" "),a("h2",{attrs:{id:"enable-mqtt-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-mqtt-bridge"}},[s._v("#")]),s._v(" Enable MQTT Bridge")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./bin/emqx_ctl plugins load emqx_bridge_mqtt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"bridge-cli-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bridge-cli-command"}},[s._v("#")]),s._v(" Bridge CLI Command")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" emqx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./bin/emqx_ctl bridges\nbridges list                                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# List bridges")]),s._v("\nbridges start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Start a bridge")]),s._v("\nbridges stop "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Stop a bridge")]),s._v("\nbridges forwards "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Show a bridge forward topic")]),s._v("\nbridges add-forward "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Topic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add bridge forward topic")]),s._v("\nbridges del-forward "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Topic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Delete bridge forward topic")]),s._v("\nbridges subscriptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Show a bridge subscriptions topic")]),s._v("\nbridges add-subscription "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Topic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Qos"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add bridge subscriptions topic")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"list-status-of-all-bridges"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-status-of-all-bridges"}},[s._v("#")]),s._v(" List Status of All Bridges")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges list\nname: emqx     status: Stopped\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"start-specified-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-specified-bridge"}},[s._v("#")]),s._v(" Start Specified Bridge")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges start emqx\nStart bridge successfully.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"stop-specified-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-specified-bridge"}},[s._v("#")]),s._v(" Stop Specified Bridge")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges stop emqx\nStop bridge successfully.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"list-forwarded-topic-of-specified-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-forwarded-topic-of-specified-bridge"}},[s._v("#")]),s._v(" List Forwarded Topic of Specified Bridge")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges forwards emqx\ntopic:   topic1/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\ntopic:   topic2/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"add-forwarded-topic-for-specified-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-forwarded-topic-for-specified-bridge"}},[s._v("#")]),s._v(" Add Forwarded Topic for Specified Bridge")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges add-forward emqx topic3/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nAdd-forward topic successfully.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"delete-forwarded-topic-for-specified-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-forwarded-topic-for-specified-bridge"}},[s._v("#")]),s._v(" Delete Forwarded Topic for Specified Bridge")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges del-forward emqx topic3/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nDel-forward topic successfully.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"list-subscriptions-of-specified-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-subscriptions-of-specified-bridge"}},[s._v("#")]),s._v(" List Subscriptions of Specified Bridge")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges subscriptions emqx\ntopic: cmd/topic1, qos: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\ntopic: cmd/topic2, qos: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"add-subscriptions-for-specified-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-subscriptions-for-specified-bridge"}},[s._v("#")]),s._v(" Add Subscriptions for Specified Bridge")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges add-subscription emqx cmd/topic3 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nAdd-subscription topic successfully.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"delete-subscriptions-of-specified-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-subscriptions-of-specified-bridge"}},[s._v("#")]),s._v(" Delete Subscriptions of Specified Bridge")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges del-subscription emqx cmd/topic3\nDel-subscription topic successfully.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"use-shared-local-subscription"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-shared-local-subscription"}},[s._v("#")]),s._v(" Use shared local subscription")]),s._v(" "),a("p",[s._v("When using EMQX in cluster mode, bridge is started on every node.\nThis makes each message bridged to the target N times (where N is a number of started nodes in cluster).\nTo avoid this, one can use "),a("RouterLink",{attrs:{to:"/en/enterprise/latest/advanced/shared-subscriptions.html"}},[s._v("shared subscription")]),s._v(" mechanism which ensures that only one of bridges receives the message.")],1),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Sets the local strategy")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## for shared subscription group with name local_bridge")]),s._v("\nbroker.local_bridge.shared_subscription_strategy "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Subscribes bridge to shared topic")]),s._v("\nbridge.mqtt.my_bridge.forwards "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$share")]),s._v("/local_bridge/topic1/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports},402:function(s,e,t){s.exports=t.p+"docs-assets/img/bridge_mqtt.068ad977.png"}}]);