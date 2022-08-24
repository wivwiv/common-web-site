(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1580:function(t,e,s){"use strict";s.r(e);var a=s(10),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb-authentication-acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-authentication-acl"}},[t._v("#")]),t._v(" MongoDB Authentication/ACL")]),t._v(" "),a("p",[t._v("MongoDB Authentication/ACL uses an external MongoDB database as a data source, which can store a large amount of data and at the same time integrate with external device management systems.")]),t._v(" "),a("h2",{attrs:{id:"install-mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-mongodb"}},[t._v("#")]),t._v(" Install MongoDB")]),t._v(" "),a("p",[t._v("Open the MongoDB official website address: https://www.mongodb.com/try/download/community, select the version you need, here we use the macOS 4.4.1 version:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(590),alt:"image-20200928112030369"}})]),t._v(" "),a("p",[t._v("Start MongoDB after installation")]),t._v(" "),a("h2",{attrs:{id:"create-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-module"}},[t._v("#")]),t._v(" Create module")]),t._v(" "),a("p",[t._v("Open "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("EMQX Dashboard"),a("OutboundLink")],1),t._v(', click the "Modules" tab on the left, and choose to add:')]),t._v(" "),a("p",[a("img",{attrs:{src:s(391),alt:"image-20200928161310952"}})]),t._v(" "),a("p",[t._v("Select MongoDB Authentication/ACL module")]),t._v(" "),a("p",[a("img",{attrs:{src:s(591),alt:"image-20200928114546350"}})]),t._v(" "),a("p",[t._v("Configure MongoDB related parameters")]),t._v(" "),a("p",[a("img",{attrs:{src:s(592),alt:"image-20200928114832162"}})]),t._v(" "),a("p",[t._v("After clicking Add, the module is added:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(593),alt:"image-20200928133916267"}})]),t._v(" "),a("h2",{attrs:{id:"authentication-collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication-collection"}},[t._v("#")]),t._v(" Authentication Collection")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  username"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password hash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  salt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password salt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  is_superuser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  created"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-02-20 12:12:14"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("When performing identity authentication, EMQX will use the current client information to fill and execute the authentication Query configured by the user, and query the authentication data of the client in the database.")]),t._v(" "),a("p",[t._v("MongoDB supports the configuration of collection names, authentication fields, authentication placeholders and other parameters.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Configuration")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Authentication query collection")]),t._v(" "),a("td",[t._v("Authentication query MongoDB collection")])]),t._v(" "),a("tr",[a("td",[t._v("Authentication query field name")]),t._v(" "),a("td",[t._v("Fields that need to be queried from the collection, if you need to query more than one, use commas to separate them. E.g. password, salt")])]),t._v(" "),a("tr",[a("td",[t._v("Authentication condition field")]),t._v(" "),a("td",[t._v("Authentication query conditions, if you need to query more than one, use commas to separate them. For example username=%u,clientid=%c")])])])]),t._v(" "),a("p",[t._v("You can use the following placeholders in the authentication query placeholders, and EMQX will automatically fill in the client information when executed:")]),t._v(" "),a("p",[t._v("-%u: username\n-%c: clientid\n-%C: TLS certificate common name (domain name or subdomain name of the certificate), valid only when TLS connection\n-%d: TLS certificate subject, valid only when TLS connection")]),t._v(" "),a("p",[t._v("You can adjust the authentication query according to your business needs, such as adding multiple query conditions and using database preprocessing functions to achieve more business-related functions. But in any case, the authentication query needs to meet the following conditions:")]),t._v(" "),a("ol",[a("li",[t._v("The query result must contain the password field, which EMQX uses to compare with the client password")]),t._v(" "),a("li",[t._v("If the salting configuration is enabled, the salt field must be included in the query result, and EMQX uses this field as the salt value")]),t._v(" "),a("li",[t._v("MongoDB uses the findOne query command to ensure that the query results you expect can appear in the first data")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This is the set structure used by the default configuration. After you are familiar with the use of the plug-in, you can use any set that meets the conditions for authentication.")])]),t._v(" "),a("h2",{attrs:{id:"access-control-collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-control-collection"}},[t._v("#")]),t._v(" Access Control Collection")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    username"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    clientid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clientid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    publish"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"topic1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"topic2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    subscribe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"subtop1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"subtop2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pubsub"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"topic/#"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"topic1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("MongoDB ACL rules define publish, subscribe, and publish/subscribe information, and all the rules in the rules are "),a("strong",[t._v("allow")]),t._v(" lists.")]),t._v(" "),a("p",[t._v("Rule field description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Configuration")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Access control query collection")]),t._v(" "),a("td",[t._v("Access control query MongoDB collection")])]),t._v(" "),a("tr",[a("td",[t._v("Access control query field name")]),t._v(" "),a("td",[t._v("Field to be queried from the collection")])]),t._v(" "),a("tr",[a("td",[t._v("Access control condition field")]),t._v(" "),a("td",[t._v("Access control query conditions, support and and or operations, and operations are separated by commas, for example: username=%u,clientid=%c, or operations need to add multiple data")])])])]),t._v(" "),a("h2",{attrs:{id:"super-user-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#super-user-query"}},[t._v("#")]),t._v(" Super User Query")]),t._v(" "),a("p",[t._v("When performing ACL authentication, EMQX will use the current client information to fill and execute the super user query configured by the user to check whether the client is a super user. When the client is a super user, ACL query will be skipped.\nMultiple conditions of the same selector use MongoDB and query in the actual query:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.mqtt_user.find({\n  "username": "wivwiv"\n  "clientid": "$all"\n})\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("You can use the following placeholders in the query conditions, and EMQX will automatically fill in the client information when executed:")]),t._v(" "),a("p",[t._v("-%u: username")]),t._v(" "),a("p",[t._v("-%c: clientid")]),t._v(" "),a("p",[t._v("You can adjust the super user query according to business needs, such as adding multiple query conditions and using database preprocessing functions to achieve more business-related functions. But in any case, the super user query needs to meet the following conditions:\nThe query result must include the is_superuser field, and is_superuser should be explicitly true.\nMongoDB supports the configuration of collection names, authentication fields, authentication placeholders and other parameters.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Configuration")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Super User Query Collection")]),t._v(" "),a("td",[t._v("Super User Query MongoDB Collection")])]),t._v(" "),a("tr",[a("td",[t._v("Super user query field name")]),t._v(" "),a("td",[t._v("Field to be queried from the collection")])]),t._v(" "),a("tr",[a("td",[t._v("Super user condition field")]),t._v(" "),a("td",[t._v("Super user query conditions, if you need to query more than one, use commas to separate them. For example username=%u,clientid=%c")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("MongoDB ACL rules must strictly use the above data structure. All the rules added in MongoDB ACL are allowed rules and can be used with ʻacl_nomatch = deny"),a("code",[t._v("in ʻetc/emqx.conf")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"encryption-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encryption-rules"}},[t._v("#")]),t._v(" Encryption rules")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## No salt, plain text")]),t._v("\nplain\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## No salt, only hash processing")]),t._v("\nsha256\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## salt prefix: use sha256 to encrypt salt + password concatenated string")]),t._v("\nsalt,sha256\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## salt suffix: use sha256 encrypted password + salt spliced ​​string")]),t._v("\nsha256,salt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## pbkdf2 with macfun iterations dklen")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## macfun: md4, md5, ripemd160, sha, sha224, sha256, sha384, sha512")]),t._v("\npbkdf2,sha256,1000,20\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Refer to: "),a("a",{attrs:{href:"https://docs.emqx.io/en/broker/latest/advanced/auth.html#password-salting-rules-and-hash-methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("Salt rules and hash methods"),a("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);e.default=n.exports},391:function(t,e,s){t.exports=s.p+"docs-assets/img/modules.1814040c.png"},590:function(t,e,s){t.exports=s.p+"docs-assets/img/auth_mongo1.00d0db60.png"},591:function(t,e,s){t.exports=s.p+"docs-assets/img/auth_mongo2.b7d6f928.png"},592:function(t,e,s){t.exports=s.p+"docs-assets/img/auth_mongo3.6f506b4b.png"},593:function(t,e,s){t.exports=s.p+"docs-assets/img/auth_mongo4.068b1424.png"}}]);