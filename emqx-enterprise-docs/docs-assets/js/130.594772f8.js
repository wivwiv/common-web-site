(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1066:function(s,t,a){s.exports=a.p+"docs-assets/img/auth_ldap1.49a858a1.png"},1067:function(s,t,a){s.exports=a.p+"docs-assets/img/auth_ldap2.2adf69c1.png"},1068:function(s,t,a){s.exports=a.p+"docs-assets/img/auth_ldap3.bda2ce77.png"},1772:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"ldap-认证-访问控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ldap-认证-访问控制"}},[s._v("#")]),s._v(" LDAP 认证/访问控制")]),s._v(" "),n("p",[s._v("LDAP 认证/访问控制使用外部 OpenLDAP 服务器作为认证数据源，可以存储大量数据，同时方便与外部设备管理系统集成。")]),s._v(" "),n("h2",{attrs:{id:"创建模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建模块"}},[s._v("#")]),s._v(" 创建模块")]),s._v(" "),n("p",[s._v("打开 "),n("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQX Dashboard"),n("OutboundLink")],1),s._v("，点击左侧的 “模块” 选项卡，选择添加：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(390),alt:"image-20200928161310952"}})]),s._v(" "),n("p",[s._v("选择 LDAP 认证/访问控制模块")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1066),alt:"image-20200928144927769"}})]),s._v(" "),n("p",[s._v("配置OpenLDAP相关参数")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1067),alt:"image-20200928144945076"}})]),s._v(" "),n("p",[s._v("最后点击“添加”按钮，模块即可添加成功：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1068),alt:"image-20200928145033628"}})]),s._v(" "),n("h2",{attrs:{id:"ldap-schema"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ldap-schema"}},[s._v("#")]),s._v(" LDAP Schema")]),s._v(" "),n("p",[s._v("需要在 LDAP schema 目录配置数据模型，默认配置下数据模型如下：")]),s._v(" "),n("p",[n("strong",[s._v("/etc/openldap/schema/emqx.schema")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("attributetype "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.1.3 NAME "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'isEnabled'")]),s._v("\nEQUALITY booleanMatch\nSYNTAX "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".6.1.4.1.1466.115.121.1.7\nSINGLE-VALUE\nUSAGE userApplications "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nattributetype "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.4.1 NAME "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mqttPublishTopic'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mpt'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nEQUALITY caseIgnoreMatch\nSUBSTR caseIgnoreSubstringsMatch\nSYNTAX "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".6.1.4.1.1466.115.121.1.15\nUSAGE userApplications "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nattributetype "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.4.2 NAME "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mqttSubscriptionTopic'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mst'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nEQUALITY caseIgnoreMatch\nSUBSTR caseIgnoreSubstringsMatch\nSYNTAX "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".6.1.4.1.1466.115.121.1.15\nUSAGE userApplications "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nattributetype "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.4.3 NAME "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mqttPubSubTopic'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mpst'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nEQUALITY caseIgnoreMatch\nSUBSTR caseIgnoreSubstringsMatch\nSYNTAX "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".6.1.4.1.1466.115.121.1.15\nUSAGE userApplications "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nobjectclass "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.4 NAME "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mqttUser'")]),s._v("\nAUXILIARY\nMAY "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" mqttPublishTopic $ mqttSubscriptionTopic $ mqttPubSubTopic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nobjectclass "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.2 NAME "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mqttDevice'")]),s._v("\nSUP "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v("\nSTRUCTURAL\nMUST "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" uid "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nMAY "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" isEnabled "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nobjectclass "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.3 NAME "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mqttSecurity'")]),s._v("\nSUP "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v("\nAUXILIARY\nMAY "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" userPassword $ userPKCS12 $ pwdAttribute $ pwdLockout "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br")])]),n("p",[s._v("编辑 ldap 的配置文件 slapd.conf 引用 Schema：")]),s._v(" "),n("p",[n("strong",[s._v("/etc/openldap/slapd.conf")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("include  /etc/openldap/schema/core.schema\ninclude  /etc/openldap/schema/cosine.schema\ninclude  /etc/openldap/schema/inetorgperson.schema\ninclude  /etc/openldap/schema/ppolicy.schema\ninclude  /etc/openldap/schema/emqx.schema\n\ndatabase bdb\nsuffix "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dc=emqx,dc=io"')]),s._v("\nrootdn "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cn=root,dc=emqx,dc=io"')]),s._v("\nrootpw "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SSHA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("eoF7NhNrejVYYyGHqnt+MdKNBh4r1w3W\n\ndirectory       /etc/openldap/data\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("默认配置下示例数据如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("## create emqx.io\n\ndn:dc=emqx,dc=io\nobjectclass: top\nobjectclass: dcobject\nobjectclass: organization\ndc:emqx\no:emqx,Inc.\n\n# create testdevice.emqx.io\ndn:ou=testdevice,dc=emqx,dc=io\nobjectClass: top\nobjectclass:organizationalUnit\nou:testdevice\n\ndn:uid=mqttuser0001,ou=testdevice,dc=emqx,dc=io\nobjectClass: top\nobjectClass: mqttUser\nobjectClass: mqttDevice\nobjectClass: mqttSecurity\nuid: mqttuser0001\nisEnabled: TRUE\nmqttAccountName: user1\nmqttPublishTopic: mqttuser0001/pub/1\nmqttSubscriptionTopic: mqttuser0001/sub/1\nmqttPubSubTopic: mqttuser0001/pubsub/1\nuserPassword:: e1NIQX1tbGIzZmF0NDBNS0JUWFVWWndDS21MNzNSLzA9\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("启用 LDAP 认证后，你可以通过用户名： mqttuser0001，密码：public 连接。")]),s._v(" "),n("h2",{attrs:{id:"ldap-访问控制配置方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ldap-访问控制配置方式"}},[s._v("#")]),s._v(" LDAP 访问控制配置方式")]),s._v(" "),n("p",[n("code",[s._v("mqttPublishTopic")]),s._v(" 允许发布的主题(可以配置多个)")]),s._v(" "),n("p",[n("code",[s._v("mqttSubscriptionTopic")]),s._v(" 允许订阅的主题(可以配置多个)")]),s._v(" "),n("p",[n("code",[s._v("mqttPubSubTopic")]),s._v(" 允许订阅/发布的主题(可以配置多个)")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("目前版本仅支持 OpenLDAP，不支持 Microsoft Active Directory。")])])])}),[],!1,null,null,null);t.default=e.exports},390:function(s,t,a){s.exports=a.p+"docs-assets/img/modules.89e07c9c.png"}}]);