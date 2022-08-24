(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1561:function(e,t,n){"use strict";n.r(t);var s=n(10),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dashboard"}},[e._v("#")]),e._v(" Dashboard")]),e._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),s("p",[e._v("EMQX Dashboard is a web application provided by EMQX. You can view the\nrunning status of nodes and cluster, metrics, online status and\nsubscriptions of clients through the Dashboard. You can also configure\nthe plug-in on the Dashboard, stop and start the specified plug-in,\nmanage the HTTP API key and most configurations of the EMQX cluster.")]),e._v(" "),s("h2",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick Start")]),e._v(" "),s("p",[e._v("If EMQX is installed on this machine, use your browser to open the\naddress "),s("a",{attrs:{href:"http://127.0.0.1:18083",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://127.0.0.1:18083"),s("OutboundLink")],1),e._v(". To log in, enter the default user name\n"),s("code",[e._v("admin")]),e._v(" and the default password "),s("code",[e._v("public")]),e._v(" to log in to Dashboard. If you\nforget to account information, click the "),s("strong",[e._v("Forgot Password")]),e._v(" button on\nthe login page and follow the instructions or use management commands to\nreset or create a new account.")]),e._v(" "),s("p",[e._v("The Dashboard interface is shown in the following figure. It contains\nthe left navigation bar, top control bar, and content area. The top\ncontrol bar (red frame area) has three functions:")]),e._v(" "),s("ul",[s("li",[e._v("Alarm: EMQX alarm info. The number of alarms triggered by excessive\nresource usage and EMQX internal errors is displayed. Click to view\nthe alarm list.")]),e._v(" "),s("li",[e._v("User: the currently logged in Dashboard user, which can be used to\nlog out and change passwords;")]),e._v(" "),s("li",[e._v("I18n: Dashboard displays Chinese / English by default according to\nthe user's browser language. Click to switch\nlanguages.")])]),e._v(" "),s("p",[s("img",{attrs:{src:n(530),alt:"image-20200304160950998"}})]),e._v(" "),s("h2",{attrs:{id:"monitor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monitor"}},[e._v("#")]),e._v(" Monitor")]),e._v(" "),s("p",[e._v("On the monitoring page, you can view the running status of the current\ncluster. The functional area from top to bottom of the interface is as\nfollows:")]),e._v(" "),s("h3",{attrs:{id:"running-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-status"}},[e._v("#")]),e._v(" Running Status")]),e._v(" "),s("p",[e._v("There are four cards at the top of the page, which includes the\nmessage-out rate of the cluster, the message-in rate, the number of\nsubscriptions, and the current number of connections.")]),e._v(" "),s("h3",{attrs:{id:"node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[e._v("#")]),e._v(" Node")]),e._v(" "),s("p",[e._v("Click the node drop-down list to switch to view the basic information of\nthe node, including EMQX version, runtime, resource occupation,\nconnection, and subscription data. Some data is defined as follows:")]),e._v(" "),s("ul",[s("li",[e._v("Memory: The current memory/maximum memory used by the Erlang VM,\n"),s("strong",[e._v("where the maximum memory is automatically applied to the system by\nEMQX depending on the resource usage")]),e._v(".")]),e._v(" "),s("li",[e._v("Max Fds: Allow the current session/process to open the number of\nfile handles. If this value is too small, it will limit the EMQX\nconcurrency performance. When it is far less than the maximum number\nof connections authorized by the license, please refer to the tuning\nor contact the EMQ technical staff to modify;")]),e._v(" "),s("li",[e._v("Erlang Process、Connections、Topics、Subscriptions、Retained、Share\nSubscription: It is divided into two groups by "),s("code",[e._v("/")]),e._v(" which are the\ncurrent value and the maximum\nvalue.")])]),e._v(" "),s("p",[s("img",{attrs:{src:n(531),alt:"image-20200304161123450"}})]),e._v(" "),s("h3",{attrs:{id:"recent-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recent-status"}},[e._v("#")]),e._v(" Recent status")]),e._v(" "),s("p",[e._v("Click the button group on the right side of the node data area to switch\nto the recent cluster data graph. The graph values are the actual values\nduring the sampling\nperiod:")]),e._v(" "),s("p",[s("img",{attrs:{src:n(532),alt:"image-20200304161147766"}})]),e._v(" "),s("h3",{attrs:{id:"nde-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nde-details"}},[e._v("#")]),e._v(" Nde details")]),e._v(" "),s("p",[e._v("Click the "),s("strong",[e._v("View More")]),e._v(" button below the node data to open the node\ndetails page, view the "),s("strong",[e._v("basic information")]),e._v(" of the current node, the\n"),s("strong",[e._v("listener")]),e._v(" and connection status, and "),s("strong",[e._v("metrics")]),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"listener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listener"}},[e._v("#")]),e._v(" Listener")]),e._v(" "),s("p",[e._v("The listener is the list of the current EMQX listening network ports.\nThe field information is as follows:")]),e._v(" "),s("ul",[s("li",[e._v("Protocol: listening network/application protocols, including\nprotocol and function info:\n"),s("ul",[s("li",[e._v("mqtt:ssl: MQTT TCP TLS protocols, the default is 102400")]),e._v(" "),s("li",[e._v("mqtt:tcp: MQTT TCP protocols, the default is 102400")]),e._v(" "),s("li",[s("a",{attrs:{href:"http:dashboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("http:dashboard"),s("OutboundLink")],1),e._v(": HTTP protocol used by Dashboard, the default\nis 512")]),e._v(" "),s("li",[s("a",{attrs:{href:"http:management",target:"_blank",rel:"noopener noreferrer"}},[e._v("http:management"),s("OutboundLink")],1),e._v(": HTTP protocol used by EMQX REST API, the\ndefault is 512")]),e._v(" "),s("li",[e._v("mqtt:ws :MQTT over WebSocket, the default is 102400")]),e._v(" "),s("li",[e._v("mqtt:wss: MQTT over WebSocket TLS, the default is 102400")])])]),e._v(" "),s("li",[e._v("Address: Listen to the bound network address and port. Listen to all\nIP addresses by default;")]),e._v(" "),s("li",[e._v("Acceptors: listening the processor thread pool;")]),e._v(" "),s("li",[e._v("Connect: It contains a set of current/maximum values. The current\nvalue is the actual number of established connections. The maximum\nvalue is the maximum number of connections configured in the\nconfiguration file. "),s("strong",[e._v("If any listener exceeds the maximum value, a\nnew connection cannot be established.")])])]),e._v(" "),s("h4",{attrs:{id:"about-the-maximum-number-of-connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#about-the-maximum-number-of-connections"}},[e._v("#")]),e._v(" About the maximum number of connections")]),e._v(" "),s("p",[e._v("The actual maximum connection depends on the license and configuration:")]),e._v(" "),s("ol",[s("li",[e._v("The number of connections per listening protocol in the node cannot\nexceed the maximum number of connections in the configuration file;")]),e._v(" "),s("li",[e._v("The total number of MQTT/MQTT over WebSocket protocol connections in\nthe cluster cannot exceed the upper limit of the license.")])]),e._v(" "),s("p",[e._v("Of course, system tuning and hardware will also affect the maximum\nnumber of connections. Please refer to tuning or contact EMQ technicians\nfor\nconfirmation.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(533),alt:"image-20200304161205291"}})]),e._v(" "),s("p",[s("img",{attrs:{src:n(534),alt:"image-20200304161218417"}})]),e._v(" "),s("h3",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),s("p",[e._v("You can view the license information of the cluster by monitoring the\nlicense card at the bottom of the page:")]),e._v(" "),s("ul",[s("li",[e._v("Customer: Name of the company or department of the same business\ncontract customer.")]),e._v(" "),s("li",[e._v("License usage: License specification and current usage.")]),e._v(" "),s("li",[e._v("Issuance of email: Same email address as a business contract\ncustomer.")]),e._v(" "),s("li",[e._v("License Edition: License edition, trial or official.")])]),e._v(" "),s("p",[e._v("EMQ will issue a mailbox through email notification before the\ncertificate expires. Please pay attention to receiving information so as\nnot to miss the renewal time, which will affect the\nbusiness.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(535),alt:"image-20200304161239961"}})]),e._v(" "),s("h2",{attrs:{id:"connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[e._v("#")]),e._v(" Connections")]),e._v(" "),s("h3",{attrs:{id:"current-connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#current-connections"}},[e._v("#")]),e._v(" Current Connections")]),e._v(" "),s("p",[e._v("The client list page displays a list of currently connected\nclients.Several important information in the list is as follows:")]),e._v(" "),s("ul",[s("li",[e._v("Client ID、Username: MQTT client ID and MQTT username, respectively.\nClick the "),s("strong",[e._v("Client ID")]),e._v(" to view the client details and subscription\ninfo.")]),e._v(" "),s("li",[e._v("IP Address: The client address + port.")]),e._v(" "),s("li",[e._v("Disconnect/Clean Session: For an online client, the connection will\nbe disconnected and the session will be cleared. If the client is\nnot online, clicking Clear Session will clear the session such as\nthe client's subscription\nrelationship.")])]),e._v(" "),s("p",[s("img",{attrs:{src:n(536),alt:"image-20200304161435785"}})]),e._v(" "),s("h3",{attrs:{id:"basic-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-info"}},[e._v("#")]),e._v(" Basic Info")]),e._v(" "),s("p",[e._v("Click the "),s("strong",[e._v("Client ID")]),e._v(" to view the client details and subscription\nlist. The basic information includes the selected client connection info\nand session info and includes key business information such as message\ntraffic and message\nstatistics.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(537),alt:"image-20200304161451854"}})]),e._v(" "),s("h3",{attrs:{id:"subscription"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscription"}},[e._v("#")]),e._v(" Subscription")]),e._v(" "),s("p",[e._v("The subscription contains information about the topics to which the\nselected client has subscribed:")]),e._v(" "),s("ul",[s("li",[e._v("Unsubscribe: Clicking the Unsubscribe button will delete the\nsubscription relationship between the device and the topic. This\noperation is insensitive to the device.")]),e._v(" "),s("li",[e._v("Add: Specify a topic for the selected client proxy\nsubscription.")])]),e._v(" "),s("p",[s("img",{attrs:{src:n(538),alt:"image-20200304161511410"}})]),e._v(" "),s("h2",{attrs:{id:"rule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule"}},[e._v("#")]),e._v(" Rule")]),e._v(" "),s("h3",{attrs:{id:"rule-engine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-engine"}},[e._v("#")]),e._v(" Rule Engine")]),e._v(" "),s("p",[e._v("Use SQL to set rules to filter, encode, decode, and modify message data,\nand seamlessly forward processed data to data destinations such as\ndatabases, stream processing, and API gateways.")]),e._v(" "),s("p",[e._v("The Rule Engine not only provides a clear and flexible configurable\nbusiness integration solution, but also simplifies the business\ndevelopment process, improves user usability, and reduces the degree of\ncoupling between business systems and EMQX. Excellent infrastructure.")]),e._v(" "),s("ul",[s("li",[e._v("ID: Unique ID within the cluster, which can be used in CLI and REST\nAPI.")]),e._v(" "),s("li",[e._v("Topic: The MQTT topic or EMQX event topic that the Rule matches.")]),e._v(" "),s("li",[e._v("Monitor: Click to display the execution statistics of the selected\nRule, including the number of rule hits and executions, and the\nnumber of success/failed actions\ntriggered.")])]),e._v(" "),s("p",[s("img",{attrs:{src:n(539),alt:"image-20200304161544424"}})]),e._v(" "),s("h3",{attrs:{id:"create-rule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-rule"}},[e._v("#")]),e._v(" Create Rule")]),e._v(" "),s("p",[e._v("EMQX will trigger the Rule Engine when the message is published and the\nevent is triggered, and the rules meeting the triggering conditions will\nexecute their respective SQL statements to filter and process the\ncontext information of the message and event.")]),e._v(" "),s("p",[e._v("With the Actions, the Rule Engine can store the message processing\nresults of a specified topic to the database, send them to the HTTP\nServer, forward them to the Kafka or RabbitMQ, and republish them to a\nnew topic or another broker cluster like Azure IoT Hub. Each rule can\nallocate multiple Actions.")]),e._v(" "),s("ol",[s("li",[e._v("Select the messages published to t/# and select all fields:")])]),e._v(" "),s("div",{staticClass:"language-sourceCode sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SELECT * FROM \"message.publish\" WHERE topic =~ 't/#'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v('Select the message published to the t/a topic, and select the "x"\nfield from the message payload in JSON format:')])]),e._v(" "),s("div",{staticClass:"language-sourceCode sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SELECT payload.x as x FROM \"message.publish\" WHERE topic =~ 't/a'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The Rule Engine uses the "),s("strong",[e._v("Events")]),e._v(" to process the built-in events of\nEMQX. the built-in events provide more sophisticated message control\nand client action processing capabilities, which can be used in the\nmessage arrival records of QoS 1 and QoS 2, the device up and down line\nrecords and other businesses.")]),e._v(" "),s("ol",[s("li",[e._v("Select the client connected event, filter the device with Username\n'emqx' and select the connection\ninformation:")])]),e._v(" "),s("div",{staticClass:"language-sourceCode sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SELECT clientid, connected_at FROM \"client.connected\" WHERE username = 'emqx'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:n(540),alt:"image-20200304161937421"}})]),e._v(" "),s("h2",{attrs:{id:"resource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource"}},[e._v("#")]),e._v(" Resource")]),e._v(" "),s("p",[e._v("The resource instances (such as database instance and Web Server )\nrequired by the Rule Engine action. Before creating a rule, you need to\ncreate the resources required for the relevant action and ensure that\nthe resources are available.")]),e._v(" "),s("h3",{attrs:{id:"resource-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource-list"}},[e._v("#")]),e._v(" Resource list")]),e._v(" "),s("ul",[s("li",[e._v("ID: Unique ID within the cluster, which can be used in CLI and REST\nAPI.")]),e._v(" "),s("li",[e._v("Status: After the resource is created, each node in the cluster will\nestablish a connection with the resource, click to expand the\nresource status on the node.")]),e._v(" "),s("li",[e._v("Delete: The resources being used by the Rule Engine cannot be\ndeleted. Please delete the rules that depend on the selected\nresource before\ndeleting.")])]),e._v(" "),s("p",[s("img",{attrs:{src:n(541),alt:"image-20200304162110301"}})]),e._v(" "),s("h3",{attrs:{id:"create-resource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-resource"}},[e._v("#")]),e._v(" Create Resource")]),e._v(" "),s("p",[e._v("Click the "),s("strong",[e._v("Create")]),e._v(" to open the resource creation dialog. Select the\nresource type and enter the corresponding connection information to\ncreate the resource. Click "),s("strong",[e._v("Test")]),e._v(" to check the resource connectivity\nbefore\ncreation.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(542),alt:"image-20200304162128853"}})]),e._v(" "),s("h2",{attrs:{id:"schema-registry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schema-registry"}},[e._v("#")]),e._v(" Schema Registry")]),e._v(" "),s("p",[e._v("Schema Registry supports Protobuf, Avro, and private message encoding\nparsing and processing, and can implement complex operations like\nmessage encryption, message compression, and binary-JSON message\nconversion.")]),e._v(" "),s("h2",{attrs:{id:"alarm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alarm"}},[e._v("#")]),e._v(" Alarm")]),e._v(" "),s("p",[e._v("The alarm shows the basic alarm information of EMQX, including current\nalarm and historical alarm. More advanced alarm, log and monitoring\nmanagement is provided by EMQX Control Center, please contact EMQ\ntechnicians if\nnecessary.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(543),alt:"image-20200304162147114"}})]),e._v(" "),s("h2",{attrs:{id:"plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[e._v("#")]),e._v(" Plugin")]),e._v(" "),s("p",[e._v("View the list of EMQX built-in plugins.")]),e._v(" "),s("p",[e._v("Unlike the command line plugin management, the plugin starts and stop\noperations on the Dashboard are synchronized to the cluster. If the\nplugin fails to start, check whether the configuration of each node in\nthe cluster is correct. If any node fails to start, the plugin cannot be\nsuccessfully\nstarted.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(544),alt:"image-20200304162200809"}})]),e._v(" "),s("h2",{attrs:{id:"tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tool"}},[e._v("#")]),e._v(" Tool")]),e._v(" "),s("p",[e._v("It provides MQTT over WebScoket client test tool, which can realize the\npublish and subscribe test of multiple mqtt connections at the same\ntime.")]),e._v(" "),s("h2",{attrs:{id:"setting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting"}},[e._v("#")]),e._v(" Setting")]),e._v(" "),s("p",[e._v("Provides parameter configuration for the EMQX cluster and supports hot\nconfiguration. You can join and leave the cluster on the Dashboard.")]),e._v(" "),s("h3",{attrs:{id:"basic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[e._v("#")]),e._v(" Basic")]),e._v(" "),s("p",[e._v("Some basic configuration items that can be hot updated in"),s("code",[e._v("emqx.conf")]),e._v(" are\nopened in the settings. You can complete most configuration items such\nas whether to enable anonymous authentication, ACL cache events, and ACL\ncache switches without restarting EMQX.")]),e._v(" "),s("p",[e._v("The basic settings are organized in zones. By default, the external zone\nis associated with the listener on port\n1883.")]),e._v(" "),s("h3",{attrs:{id:"cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[e._v("#")]),e._v(" Cluster")]),e._v(" "),s("p",[e._v("The cluster setting cannot change the cluster mode, but it can be used\nfor manual cluster invitation nodes to join the cluster, and change the\ncluster parameter parameters such as static cluster and DNS cluster.")]),e._v(" "),s("h2",{attrs:{id:"general"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[e._v("#")]),e._v(" General")]),e._v(" "),s("h3",{attrs:{id:"application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[e._v("#")]),e._v(" Application")]),e._v(" "),s("p",[e._v("In order to invoke the certificate of REST API, the application can\nquery and adjust EMQX cluster information through REST API, and manage\nand operate the equipment.")]),e._v(" "),s("p",[e._v("After the application is created successfully, click the Application ID\nin the "),s("strong",[e._v("AppID")]),e._v(" column of the application list to view the AppID and\nSecret. You can edit the application status and expiration time, and\ncreate or delete an application.")]),e._v(" "),s("h3",{attrs:{id:"users"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#users"}},[e._v("#")]),e._v(" Users")]),e._v(" "),s("p",[e._v("Dashboard user account management, you can create, edit, delete users,\nif you forget the user password, you can reset the password through CLI.")])])}),[],!1,null,null,null);t.default=a.exports},530:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304160950998.3900c6a7.png"},531:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304161123450.4b19893e.png"},532:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304161147766.eeabe7a2.png"},533:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304161205291.aa59ba5f.png"},534:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304161218417.dd24b522.png"},535:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304161239961.30f2834d.png"},536:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304161435785.2a9318cf.png"},537:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304161451854.5d27d1d6.png"},538:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304161511410.8e4da4da.png"},539:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304161544424.67e1ffea.png"},540:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304161937421.48460e89.png"},541:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304162110301.24cee4e8.png"},542:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304162128853.5bc36bfa.png"},543:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304162147114.6b724331.png"},544:function(e,t,n){e.exports=n.p+"docs-assets/img/image-20200304162200809.6fcf8aa2.png"}}]);