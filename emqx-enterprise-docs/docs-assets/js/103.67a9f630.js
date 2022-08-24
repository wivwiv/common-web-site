(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1584:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"postgresql-authentication-acl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-authentication-acl"}},[t._v("#")]),t._v(" PostgreSQL Authentication/ACL")]),t._v(" "),e("p",[t._v("PostgreSQL Authentication/ACL uses an external PostgreSQL database as a data source, which can store a large amount of data and at the same time integrate with external device management systems.")]),t._v(" "),e("h2",{attrs:{id:"install-postgresql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-postgresql"}},[t._v("#")]),t._v(" Install PostgreSQL")]),t._v(" "),e("p",[t._v("Open the PostgreSQL official website: https://www.postgresql.org/download/, select the version you need, here we choose the PostgreSQL version as macos-10.13")]),t._v(" "),e("p",[e("img",{attrs:{src:a(601),alt:"image-20200928140039111"}})]),t._v(" "),e("p",[t._v("After the installation is complete, start PostgreSQL.")]),t._v(" "),e("h2",{attrs:{id:"create-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-module"}},[t._v("#")]),t._v(" Create module")]),t._v(" "),e("p",[t._v("Open "),e("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("EMQX Dashboard"),e("OutboundLink")],1),t._v(', click the "Modules" tab on the left, and choose to add:')]),t._v(" "),e("p",[e("img",{attrs:{src:a(391),alt:"image-20200928161310952"}})]),t._v(" "),e("p",[t._v("Select PostgreSQL Authentication/ACL module")]),t._v(" "),e("p",[e("img",{attrs:{src:a(602),alt:"image-20200928140145957"}})]),t._v(" "),e("p",[t._v("Need to configure the PostgreSQL address, user name, password (optional) and other basic connection parameters table")]),t._v(" "),e("p",[e("img",{attrs:{src:a(603),alt:"image-20200928140218313"}})]),t._v(" "),e("p",[t._v('Finally click the "Add" button, the module can be added successfully')]),t._v(" "),e("p",[e("img",{attrs:{src:a(604),alt:"image-20200928140218313"}})]),t._v(" "),e("h3",{attrs:{id:"certification-form"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#certification-form"}},[t._v("#")]),t._v(" Certification Form:")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" mqtt_user "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SERIAL")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  username "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARACTER")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARYING")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  password "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARACTER")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARYING")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  salt "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARACTER")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARYING")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  is_superuser "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BOOLEAN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("Field description:")]),t._v(" "),e("p",[t._v("-username: The username for connecting to the client. If the value here is set to "),e("code",[t._v("$all")]),t._v(", it means that the rule applies to all users\n-password: password parameter for connecting to the client\n-salt: password and salt string\n-is_superuser: Is it a superuser")]),t._v(" "),e("p",[t._v("When performing identity authentication, EMQX will use the current client information to fill and execute the authentication SQL configured by the user, and query the authentication data of the client in the database.")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" password "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" mqtt_user "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" username "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%u'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Field description")]),t._v(" "),e("p",[t._v("-%u: username\n-%c: clientid\n-%P: Plain text password\n-%C: TLS certificate common name (domain name or subdomain name of the certificate), valid only when TLS connection\n-%d: TLS certificate subject, valid only when TLS connection")]),t._v(" "),e("p",[t._v("The authentication SQL can be adjusted according to business needs, such as adding multiple query conditions and using database preprocessing functions to implement more business-related functions. But in any case, the authentication SQL needs to meet the following conditions:")]),t._v(" "),e("ol",[e("li",[t._v("The query result must contain the password field, which EMQX uses to compare with the client password")]),t._v(" "),e("li",[t._v("If the salting configuration is enabled, the salt field must be included in the query result, and EMQX uses this field as the salt value")]),t._v(" "),e("li",[t._v("There can only be one query result, if there are multiple results, only the first one will be taken as valid data")])]),t._v(" "),e("p",[t._v("The sample data in the default configuration is as follows:")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("mqtt_user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ʻusername"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("password"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("salt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emqx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'efa1f375d76194fa51a3556a97e641e61685f914d446979da50a551a4333ffd7'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("After enabling PostgreSQL authentication, you can connect via username: emqx and password: public.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("You can use AS syntax in SQL to specify a password for field renaming, or set the salt value to a fixed value.")])]),t._v(" "),e("h4",{attrs:{id:"advanced"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced"}},[t._v("#")]),t._v(" Advanced")]),t._v(" "),e("p",[t._v("In the default table structure, we set the username field as a unique index (UNIQUE), and use it with the default query statement ("),e("code",[t._v("select password from mqtt_user where username ='%u' limit 1")]),t._v(") to get very good query performance.")]),t._v(" "),e("p",[t._v("If the default query conditions do not meet your needs, for example, you need to query the corresponding "),e("code",[t._v("Password Hash")]),t._v(" and "),e("code",[t._v("Salt")]),t._v(" based on the "),e("code",[t._v("Client ID")]),t._v(", please make sure to set the "),e("code",[t._v("Client ID")]),t._v(" as an index; Or you want to perform multi-condition queries on "),e("code",[t._v("Username")]),t._v(", "),e("code",[t._v("Client ID")]),t._v(", or other fields. It is recommended to set the correct single-column index or multiple-column index. In short, set the correct table structure and query statement, and try not to let the index fail and affect the query performance.")]),t._v(" "),e("h3",{attrs:{id:"access-control-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#access-control-list"}},[t._v("#")]),t._v(" Access Control List")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" mqtt_acl "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SERIAL")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  allow "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTEGER")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ipaddr "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARACTER")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARYING")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  username "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARACTER")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARYING")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  clientid "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARACTER")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARYING")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  access  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTEGER")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  topic "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARACTER")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARYING")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" ipaddr "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" mqtt_acl "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipaddr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" username "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" mqtt_acl "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" clientid "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" mqtt_acl "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clientid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])]),e("p",[t._v("Field description:")]),t._v(" "),e("p",[t._v("-allow: prohibit (0), allow (1)\n-ipaddr: set IP address\n-username: The username for connecting to the client. If the value here is set to "),e("code",[t._v("$all")]),t._v(", it means that the rule applies to all users\n-clientid: clientid of the connected client\n-access: Allowed operations: subscribe (1), publish (2), subscribe to publish (3)\n-topic: The controlled topic, wildcards can be used, and placeholders can be added to the topic to match the client information, for example, "),e("code",[t._v("t/%c")]),t._v(" will replace the topic with the clientid of the current client when matching")]),t._v(" "),e("p",[t._v("The principle of access control is to find entries related to the client from PostgreSQL and then perform authentication. The default query SQL is as follows:")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" allow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ipaddr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clientid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" access"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" topic "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" mqtt_acl "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" ipaddr "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%a'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" username "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%u'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" username "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$all'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" clientid "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%c'")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("The following placeholders can be used in the authentication SQL, and EMQX will be automatically filled with client information when executed:")]),t._v(" "),e("p",[t._v("-%u: username\n-%c: clientid\n-%a: Client IP address\n-%P: Plain text password\n-%C: TLS certificate common name (domain name or subdomain name of the certificate), valid only when TLS connection\n-%d: TLS certificate subject, valid only when TLS connection")]),t._v(" "),e("p",[t._v("Sample data in the default configuration:")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("All")]),t._v(" users cannot subscribe "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" system topics\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" mqtt_acl "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ipaddr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clientid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" access"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" topic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$all'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$SYS/#'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Allow clients "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.59")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".100")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" subscribe "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" system topics\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" mqtt_acl "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ipaddr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clientid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" access"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" topic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10.59.1.100'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$SYS/#'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Disallow clients "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" subscribing "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" the "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("smarthome"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("temperature topic\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" mqtt_acl "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ipaddr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clientid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" access"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" topic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$all'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/smarthome/+/temperature'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Allow clients "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" subscribe "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" the topic "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("smarthome"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("${clientid}"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("temperature containing their Client ID\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" mqtt_acl "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ipaddr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clientid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" access"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" topic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$all'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/smarthome/%c/temperature'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("h2",{attrs:{id:"root"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#root"}},[t._v("#")]),t._v(" root")]),t._v(" "),e("p",[t._v("Super users can subscribe and publish any topic, the default SQL is as follows:")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" is_superuser "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" mqtt_user "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" username "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%u'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("You can use the following placeholders in SQL, and EMQX will be automatically filled with client information during execution:")]),t._v(" "),e("p",[t._v("-%u: username\n-%c: clientid\n-%C: TLS certificate common name (domain name or subdomain name of the certificate), valid only when TLS connection\n-%d: TLS certificate subject, valid only when TLS connection")]),t._v(" "),e("p",[t._v("You can adjust the super user SQL according to business needs, such as adding multiple query conditions and using database preprocessing functions to achieve more business-related functions. But in any case, super user SQL needs to meet the following conditions:")]),t._v(" "),e("ol",[e("li",[t._v("The query result must include the is_superuser field, and is_superuser should be explicitly true")]),t._v(" "),e("li",[t._v("There can only be one query result, if there are multiple results, only the first one is taken as valid data")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If the super user function is not needed, commenting and disabling this option can effectively improve efficiency")])]),t._v(" "),e("h2",{attrs:{id:"encryption-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encryption-rules"}},[t._v("#")]),t._v(" Encryption rules")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## No salt, plain text")]),t._v("\nplain\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## No salt, only hash processing")]),t._v("\nsha256\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## salt prefix: use sha256 to encrypt salt + password concatenated string")]),t._v("\nsalt,sha256\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## salt suffix: use sha256 encrypted password + salt spliced ​​string")]),t._v("\nsha256,salt\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## pbkdf2 with macfun iterations dklen")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## macfun: md4, md5, ripemd160, sha, sha224, sha256, sha384, sha512")]),t._v("\npbkdf2,sha256,1000,20\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Refer to: "),e("a",{attrs:{href:"https://docs.emqx.io/en/broker/latest/advanced/auth.html#password-salting-rules-and-hash-methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("Salt rules and hash methods"),e("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);s.default=n.exports},391:function(t,s,a){t.exports=a.p+"docs-assets/img/modules.1814040c.png"},601:function(t,s,a){t.exports=a.p+"docs-assets/img/auth_pg1.42cb35c4.png"},602:function(t,s,a){t.exports=a.p+"docs-assets/img/auth_pg2.cfac2e78.png"},603:function(t,s,a){t.exports=a.p+"docs-assets/img/auth_pg3.6ce04d25.png"},604:function(t,s,a){t.exports=a.p+"docs-assets/img/auth_pg4.95948454.png"}}]);