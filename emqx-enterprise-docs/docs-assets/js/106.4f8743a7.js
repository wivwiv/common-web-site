(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1634:function(e,t,s){"use strict";s.r(t);var n=s(10),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"rule-engine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rule-engine"}},[e._v("#")]),e._v(" Rule Engine")]),e._v(" "),n("p",[e._v('EMQX Broker Rule Engine (Hereinafter referred to as rule engine) is used to configure EMQX Broker message flow and device event processing and response rules. The rule engine not only provides a clear and flexible "configuration-style" business integration solution, simplifies the business development process, improves ease of use for user, and reduces the coupling between the business system and EMQX Broker, but also provides a better infrastructure for the private function customization of EMQX broker.')]),e._v(" "),n("p",[n("img",{attrs:{src:s(926),alt:"image-20190506171815028"}})]),e._v(" "),n("p",[e._v("EMQX Broker will trigger the rule engine when "),n("strong",[e._v("publishing message or triggering  event")]),e._v(", and the rules that meet the triggering conditions will execute their own SQL statements to filter and process the context information of messages and events.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("Applicable version:"),n("strong",[e._v("EMQX Broker v3.1.0+")])]),e._v(" "),n("p",[e._v("Compatibility Tip: EMQX Broker v4.0 makes major adjustments to the SQL syntax of the rule engine. For v3.x upgrade users, please refer to  "),n("RouterLink",{attrs:{to:"/en/enterprise/latest/rule/rule-engine.html#migration-guide"}},[e._v("Migration Guide")]),e._v(" for compatibility.")],1)]),e._v(" "),n("h2",{attrs:{id:"publish-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#publish-message"}},[e._v("#")]),e._v(" Publish message")]),e._v(" "),n("p",[e._v("The rule engine can store the message processing results of a specific topic to the database with the response action, send it to the HTTP server, forward it to the message queue of Kafka or RabbitMQ, and republish to a new topic or even another Broker cluster. Each rule can be configured with multiple response actions.")]),e._v(" "),n("p",[e._v("Select the message published to the t/# topic and filter out all fields:")]),e._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"t/#"')]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v('Select the message posted to the t/a topic, and filter out the "x" field from the message content in JSON format:')]),e._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("x "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" x "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"t/a"')]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("h2",{attrs:{id:"event-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger"}},[e._v("#")]),e._v(" Event trigger")]),e._v(" "),n("p",[e._v("The rule engine uses a virtual topic beginning with "),n("strong",[e._v("$events/")]),e._v(" to process EMQX Broker built-in events. The built-in events provide finer message control and client action processing capabilities, which can be used in the business of QoS 1 QoS 2 messages arrival recording, device online and offline recording.")]),e._v(" "),n("p",[e._v("Select the client connection event, filter the device whose Username is "),n("code",[e._v("emqx")]),e._v(" and obtain the connection information:")]),e._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" clientid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" connected_at "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"$events/client_connected"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" username "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'emqx'")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("For rule engine data, SQL statement format and "),n("RouterLink",{attrs:{to:"/en/enterprise/latest/rule/rule-engine_field.html#event-topic-available-for-from-clause"}},[e._v("event topic")]),e._v(" list, please refer to "),n("RouterLink",{attrs:{to:"/en/enterprise/latest/rule/rule-engine_grammar_and_examples.html#rule-engine-sql-statement"}},[e._v("SQL manual")]),e._v(" for detailed tutorials.")],1),e._v(" "),n("h2",{attrs:{id:"rule-engine-composition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rule-engine-composition"}},[e._v("#")]),e._v(" Rule engine composition")]),e._v(" "),n("p",[e._v("The rule describes the three configurations of "),n("strong",[e._v("where data comes from,  how to filter and process data, and where processed results go to")]),e._v(", which means an available rule contains three elements:")]),e._v(" "),n("ul",[n("li",[e._v("Triggered event: The rule is triggered by an event. When triggered, the event inputs the context information (data source) of the event into the rule, and the event type is specified through the FROM clause of SQL;")]),e._v(" "),n("li",[e._v("Processing rules (SQL): Use SELECT clause and WHERE clause and built-in processing functions to filter and process data from context information;")]),e._v(" "),n("li",[e._v("Response action: If there is a processing result output, the rule will perform the corresponding action, such as persisting to the database, republishing the processed message, forwarding the message to the message queue, etc. A rule can configure multiple response actions.")])]),e._v(" "),n("p",[e._v("The following figure is a simple rule, which is used to process the data at the time of "),n("strong",[e._v("message publishing")]),e._v(", filter out the "),n("code",[e._v("msg")]),e._v(" field,  messages "),n("code",[e._v("topic")]),e._v(", "),n("code",[e._v("qos")]),e._v(" of all topic messages, and send them to the Web Server and /uplink topics:")]),e._v(" "),n("p",[n("img",{attrs:{src:s(927),alt:"image-20190604103907875"}})]),e._v(" "),n("p",[e._v("EMQX Broker's rule engine can be used to flexibly process messages and events. By using the rule engine, it can easily achieve such function as converting the message into a specified format, and then stored in a database table, or sent to the message queue.")]),e._v(" "),n("p",[e._v("The concepts related to the EMQX Broker rule engine include: rules, actions, resources, and resource-types.")]),e._v(" "),n("p",[e._v("The relationship between rules, actions and resources:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Rule: {\n    SQL statement\n    Action list: [\n        {\n            action 1,\n            Action parameters,\n            Bind resources: {\n                Resource configuration\n            }\n        },\n        {\n            action 2,\n            Action parameters,\n            Bind resources:  {\n                Resource configuration\n            }\n        }\n    ]\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br")])]),n("ul",[n("li",[e._v("Rule: Rule consists of SQL statements and action list. The action list contains one or more actions and their parameters.")]),e._v(" "),n("li",[e._v("SQL statements are used to filter or transform data in messages.")]),e._v(" "),n("li",[e._v('The action is the task performed after the SQL statement is matched, which defines an operation for data.\nActions can be bound to resources or unbound. For example, the "inspect" action does not require binding resources, which simply prints the data content and action parameters. The "data_to_webserver" action needs to bind a web_hook type resource, and a URL is configured in this resource.')]),e._v(" "),n("li",[e._v("Resource: A resource is an object instantiated through a resource type as a template, and saves the configuration related to the resource (such as database connection address and port, user name and password, etc.).")]),e._v(" "),n("li",[e._v("Resource Type: Resource type is a static definition of a resource and describes the configuration items required for this type of resource.")])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("Actions and resource types are provided by emqx or plugin code and cannot be created dynamically through API and CLI.")])]),e._v(" "),n("h2",{attrs:{id:"examples-of-typical-application-scenarios-for-rule-engine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples-of-typical-application-scenarios-for-rule-engine"}},[e._v("#")]),e._v(" Examples of typical application scenarios for rule engine")]),e._v(" "),n("ul",[n("li",[e._v("Action listening: In the development of intelligent door lock for smart home, the function of the door lock will be abnormal because of offline resulting by the network or power failure, man-made damage and other reasons. Through using rule engine configuration to monitor offline events, it can push the fault information to the application service and realize the ability of first time fault detection in the access layer.")]),e._v(" "),n("li",[e._v("Data filtering: Truck fleet management of vehicle network. Vehicle sensors collect and report a large amount of operational data. The application platform only focuses on data with a vehicle speed greater than 40 km/h. In this scenario, the rule engine can be used to conditionally filter messages to the service, and data that satisfies the condition can be written to the business message queue .")]),e._v(" "),n("li",[e._v("Message routing: In the intelligent billing application, the terminal device distinguishes the service type by different topics. The message of billing service can be connected to the billing message queue by configuring the rule engine, and the non-billing information can be connected to other message queues to realize the routing configuration of business messages.")]),e._v(" "),n("li",[e._v("Message encoding and decoding: In the application scenarios such as public protocol/proprietary TCP protocol access and industrial control, the encoding and decoding of binary/special format message body can be done through the local processing function of the rule engine (which can be customized and developed on EMQX). Relevant messages can also be routed through the rule engine to external computing resources such as function computing for processing (processing logic can be developed by users), and the messages can be converted into JSON format that is easy for business processing, which simplifies the difficulty of project integration and improves the ability of rapid development and delivery of applications.")])]),e._v(" "),n("h3",{attrs:{id:"test-sql-statements-in-dashboard"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test-sql-statements-in-dashboard"}},[e._v("#")]),e._v(" Test SQL statements in Dashboard")]),e._v(" "),n("p",[e._v("The SQL statement test function is provided in the Dashboard interface, and the SQL test results are shown through the given SQL statement and event parameters.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("On the rule creating interface, enter "),n("strong",[e._v("rule SQL")]),e._v(" and enable the "),n("strong",[e._v("SQL test")]),e._v(" switch:")]),e._v(" "),n("p",[n("img",{attrs:{src:s(928),alt:"image"}})])]),e._v(" "),n("li",[n("p",[e._v("Modify the field of the simulated event, or use the default configuration, and click the "),n("strong",[e._v("Test")]),e._v(" button:")]),e._v(" "),n("p",[n("img",{attrs:{src:s(929),alt:"image"}})])]),e._v(" "),n("li",[n("p",[e._v("The result of SQL processing will be displayed in the "),n("strong",[e._v("Test Output")]),e._v(" text box:")]),e._v(" "),n("p",[n("img",{attrs:{src:s(930),alt:"image"}})])])]),e._v(" "),n("h2",{attrs:{id:"migration-guide"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#migration-guide"}},[e._v("#")]),e._v(" Migration Guide")]),e._v(" "),n("p",[e._v("In version 4.0, the SQL syntax of the rule engine is easier to use. In version 3. X, the event name needs to be specified after the "),n("strong",[e._v("FROM")]),e._v(" clause. After 4.0 version, we introduce the concept of "),n("strong",[e._v("event topic")]),e._v(" . By default, the "),n("strong",[e._v("message publish")]),e._v(" event no longer needs to be specified.")]),e._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## 3.x")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## Event name needs to be specified for processing")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"message.publish"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" topic "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'t/#'")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## 4.0 and later")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## The message.publish event is processed by default, and MQTT topics are filtered directly after FROM")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## The above SQL is equivalent to:")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'t/#'")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## Other events are filtered by event topics")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"$events/message_acked"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" topic "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'t/#'")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"$events/client_connected"')]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("The old version of SQL syntax conversion function is provided in Dashboard to complete SQL upgrade and migration.")])]),e._v(" "),n("p",[n("RouterLink",{attrs:{to:"/en/enterprise/latest/rule/rule-engine_grammar_and_examples.html"}},[e._v("Rule engine statement and examples")])],1)])}),[],!1,null,null,null);t.default=a.exports},926:function(e,t,s){e.exports=s.p+"docs-assets/img/image-20190506171815028.cc3c4ff2.jpg"},927:function(e,t,s){e.exports=s.p+"docs-assets/img/image-20190604103907875.6803634f.png"},928:function(e,t,s){e.exports=s.p+"docs-assets/img/sql-test-1@2x.0862b5d9.png"},929:function(e,t,s){e.exports=s.p+"docs-assets/img/sql-test-2@2x.c31ecd16.png"},930:function(e,t,s){e.exports=s.p+"docs-assets/img/sql-test-3@2x.8d983046.png"}}]);