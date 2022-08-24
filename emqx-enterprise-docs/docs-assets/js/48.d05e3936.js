(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1619:function(s,t,e){"use strict";e.r(t);var a=e(10),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"save-data-to-sqlserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save-data-to-sqlserver"}},[s._v("#")]),s._v(" Save data to SQLServer")]),s._v(" "),a("p",[s._v("Set up a SQLServer database and set the user name and password to sa/mqtt_public. Take MacOS X as an example:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker run -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ACCEPT_EULA=Y'")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SA_PASSWORD=mqtt_public'")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1433")]),s._v(":1433 -d mcr.microsoft.com/mssql/server:2017-latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Enter the SQLServer container and initialize the SQLServer table:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P mqtt_public -d master\n$ mysql -u root -h localhost -ppublic\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v('Create the "test" database:')]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("CREATE DATABASE "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("Create the t_mqtt_msg table:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USE")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" t_mqtt_msg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IDENTITY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000000001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                         msgid   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                         topic   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                         qos     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tinyint")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                         payload NVARCHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                         arrived "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATETIME")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CURRENT_TIMESTAMP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("Configure odbc driver in Mac:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ brew install unixodbc freetds\n$ vim /usr/local/etc/odbcinst.ini\n[ms-sql]\nDescription = ODBC for FreeTDS\nDriver      = /usr/local/lib/libtdsodbc.so\nSetup       = /usr/local/lib/libtdsodbc.so\nFileUsage   = 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("Configure odbc driver in CentOS:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ yum install unixODBC unixODBC-devel freetds freetds-devel perl-DBD-ODBC perl-local-lib\n$ vim /etc/odbcinst.ini\n# add as below\n[ms-sql]\nDescription = ODBC for FreeTDS\nDriver      = /usr/lib64/libtdsodbc.so\nSetup       = /usr/lib64/libtdsS.so.2\nDriver64    = /usr/lib64/libtdsodbc.so\nSetup64     = /usr/lib64/libtdsS.so.2\nFileUsage   = 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("Configure odbc dirver in Ubuntu:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ apt-get install unixodbc unixodbc-dev unixodbc-bin tdsodbc freetds-bin freetds-common freetds-dev libdbd-odbc-perl liblocal-lib-perl\n$ vim /etc/odbcinst.ini\n# add as below\n[ms-sql]\nDescription = ODBC for FreeTDS\nDriver      = /usr/lib/x86_64-linux-gnu/odbc/libtdsodbc.so\nSetup       = /usr/lib/x86_64-linux-gnu/odbc/libtdsS.so\nFileUsage   = 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("Create rules:")]),s._v(" "),a("p",[s._v("Open "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQX Dashboard"),a("OutboundLink")],1),s._v(' and select the "Rules" tab on the left.')]),s._v(" "),a("p",[s._v("Fill in the rule SQL:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:e(781),alt:"image"}})]),s._v(" "),a("p",[s._v("Related actions:")]),s._v(" "),a("p",[s._v('On the "Response Action" interface, select "Add", and then select "Save Data to SQLServer" in the "Action" drop-down box.')]),s._v(" "),a("p",[a("img",{attrs:{src:e(782),alt:"image"}})]),s._v(" "),a("p",[s._v("Fill in the action parameters:")]),s._v(" "),a("p",[s._v('The "Save data to SQLServer" action requires two parameters:\n1). SQL template. In this example, we insert a piece of data into SQLServer, and the SQL template is:')]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t_mqtt_msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msgid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" topic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" qos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${id}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${topic}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ${qos}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${payload}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:e(783),alt:"image"}})]),s._v(" "),a("p",[s._v('2). The ID of the associated resource. Now the resource drop-down box is empty, and you can click "New Resource" in the upper right corner to create a SQLServer resource:')]),s._v(" "),a("p",[s._v("Fill in the resource configuration:\nFill in “mqtt” for database name, “sa” for user name, and “mqtt_public” for password")]),s._v(" "),a("p",[a("img",{attrs:{src:e(784),alt:"image"}})]),s._v(" "),a("p",[s._v('Click the "New" button.')]),s._v(" "),a("p",[s._v('Return to the response action interface and click "OK".')]),s._v(" "),a("p",[a("img",{attrs:{src:e(785),alt:"image"}})]),s._v(" "),a("p",[s._v('Return to the rule creation interface and click "Create".')]),s._v(" "),a("p",[a("img",{attrs:{src:e(786),alt:"image"}})]),s._v(" "),a("p",[s._v('In the rule list, click the "View" button or the rule ID connection to preview the rule you just created:')]),s._v(" "),a("p",[a("img",{attrs:{src:e(787),alt:"image"}})]),s._v(" "),a("p",[s._v("The rule has been created. Now, send a piece of data:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Topic: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/a"')]),s._v("\nQoS: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nPayload: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("Then check the SQLServer table to see whether the new record is added successfully:")]),s._v(" "),a("p",[a("img",{attrs:{src:e(788),alt:"image"}})])])}),[],!1,null,null,null);t.default=n.exports},781:function(s,t,e){s.exports=e.p+"docs-assets/img/sqlserver1.866029e8.png"},782:function(s,t,e){s.exports=e.p+"docs-assets/img/sqlserver2.b3f4fff9.png"},783:function(s,t,e){s.exports=e.p+"docs-assets/img/sqlserver4.bd63eefa.png"},784:function(s,t,e){s.exports=e.p+"docs-assets/img/sqlserver3.b6c3e199.png"},785:function(s,t,e){s.exports=e.p+"docs-assets/img/sqlserver5.fc908336.png"},786:function(s,t,e){s.exports=e.p+"docs-assets/img/sqlserver6.22e4e170.png"},787:function(s,t,e){s.exports=e.p+"docs-assets/img/sqlserver7.44814db9.png"},788:function(s,t,e){s.exports=e.p+"docs-assets/img/sqlserver8.3eca642a.png"}}]);