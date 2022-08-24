(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{1555:function(e,t,s){"use strict";s.r(t);var a=s(10),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"clustering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clustering"}},[e._v("#")]),e._v(" Clustering")]),e._v(" "),s("h2",{attrs:{id:"node-discovery-and-autocluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-discovery-and-autocluster"}},[e._v("#")]),e._v(" Node Discovery and Autocluster")]),e._v(" "),s("p",[e._v("EMQX supports Autocluster based on the Ekka library. Ekka is a cluster management library developed for Erlang/OTP applications, supporting Erlang Node Auto-Discovery, Autocluster, Network Partition Autoheal and Autoclean.")]),e._v(" "),s("p",[e._v("EMQX supports multiple node discovery strategies:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Strategy")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("manual")]),e._v(" "),s("td",[e._v("Create a cluster through manual command")])]),e._v(" "),s("tr",[s("td",[e._v("static")]),e._v(" "),s("td",[e._v("Autocluster of static node list")])]),e._v(" "),s("tr",[s("td",[e._v("mcast")]),e._v(" "),s("td",[e._v("Autocluster with UDP multicast mode")])]),e._v(" "),s("tr",[s("td",[e._v("dns")]),e._v(" "),s("td",[e._v("Autocluster of DNS A record")])]),e._v(" "),s("tr",[s("td",[e._v("etcd")]),e._v(" "),s("td",[e._v("Autocluster through etcd")])]),e._v(" "),s("tr",[s("td",[e._v("k8s")]),e._v(" "),s("td",[e._v("Autocluster of Kubernetes service")])])])]),e._v(" "),s("h3",{attrs:{id:"introduction-to-cluster-management-through-manual-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-cluster-management-through-manual-method"}},[e._v("#")]),e._v(" Introduction to cluster management  through manual method")]),e._v(" "),s("p",[e._v("Suppose you are going to deploy an EMQX cluster on two servers of s1.emqx.io, s2.emqx.io:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Node name")]),e._v(" "),s("th",[e._v("Hostname (FQDN)")]),e._v(" "),s("th",[e._v("IP address")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("emqx@s1.emqx.io or emqx@192.168.0.10")]),e._v(" "),s("td",[e._v("s1.emqx.io")]),e._v(" "),s("td",[e._v("192.168.0.10")])]),e._v(" "),s("tr",[s("td",[e._v("emqx@s2.emqx.io or emqx@192.168.0.20")]),e._v(" "),s("td",[e._v("s2.emqx.io")]),e._v(" "),s("td",[e._v("192.168.0.20")])])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),s("p",[e._v("The format of node name  is "),s("a",{attrs:{href:"mailto:Name@Host"}},[e._v("Name@Host")]),e._v(", and Host must be an IP address or FQDN (host name. domain name)")])]),e._v(" "),s("h3",{attrs:{id:"configure-emqx-s1-emqx-io-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-emqx-s1-emqx-io-node"}},[e._v("#")]),e._v(" Configure emqx@s1.emqx.io node")]),e._v(" "),s("p",[e._v("emqx/etc/emqx.conf:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("node.name "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" emqx@s1.emqx.io\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\nnode.name "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" emqx@192.168.0.10\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("You can also configure through environment variables:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EMQX_NODE_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("emqx@s1.emqx.io "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" ./bin/emqx start\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),s("p",[e._v("After the node joins the cluster, the node name cannot be changed.")])]),e._v(" "),s("h3",{attrs:{id:"configure-emqx-s2-emqx-io-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-emqx-s2-emqx-io-node"}},[e._v("#")]),e._v(" Configure emqx@s2.emqx.io Node")]),e._v(" "),s("p",[e._v("emqx/etc/emqx.conf:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("node.name "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" emqx@s2.emqx.io\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\nnode.name "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" emqx@192.168.0.20\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"node-joins-the-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-joins-the-cluster"}},[e._v("#")]),e._v(" Node joins the cluster")]),e._v(" "),s("p",[e._v("After starting the two nodes, execute the following on s2.emqx.io:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ ./bin/emqx_ctl cluster "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("join")]),e._v(" emqx@s1.emqx.io\n\nJoin the cluster successfully.\nCluster status: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("running_nodes,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'emqx@s1.emqx.io'")]),e._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'emqx@s2.emqx.io'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),s("p",[e._v("After s2.emqx.io joins the cluster, all its data will be cleared and the data of the s1.emqx.io node will be synchronized. If there are still s3.emqx.io nodes, you need to execute commands on the s3.emqx.io node to join emqx@s1.emqx.io or emqx@s2.emqx.io, and nodes already existing in the cluster cannot join other nodes. Otherwise, it will exit the current cluster and form a new cluster with the new joined node.")])]),e._v(" "),s("p",[e._v("Query the cluster status on any node:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ ./bin/emqx_ctl cluster status\n\nCluster status: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("running_nodes,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'emqx@s1.emqx.io'")]),e._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'emqx@s2.emqx.io'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"exit-the-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exit-the-cluster"}},[e._v("#")]),e._v(" Exit the cluster")]),e._v(" "),s("p",[e._v("There are two ways for a node to exit the cluster:")]),e._v(" "),s("ol",[s("li",[e._v("leave: Make this node leave the cluster")]),e._v(" "),s("li",[e._v("force-leave: delete other nodes from the cluster")])]),e._v(" "),s("p",[e._v("Make emqx@s2.emqx.io actively exit the cluster:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ ./bin/emqx_ctl cluster leave\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Or delete the emqx@s2.emqx.io node from the cluster on s1.emqx.io:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ ./bin/emqx_ctl cluster force-leave emqx@s2.emqx.io\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"start-a-cluster-on-single-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-a-cluster-on-single-machine"}},[e._v("#")]),e._v(" Start a cluster on single machine")]),e._v(" "),s("p",[e._v("For users who only have one server, the pseudo-distributed starting mode can be used. Please notice that if we want to start two or more nodes on one machine, we must adjust the listening port of the other node to avoid the port conflicts.")]),e._v(" "),s("p",[e._v("The basic process is to copy another emqx folder and name it emqx2. After that, we let all the listening ports of the original emqx to be added by an offset as the listening ports of the emqx2 node. For example, we can change the MQTT/TCP listening port from the default 1883 to 2883 as the MQTT/TCP listening port for emqx2. Please refer to "),s("a",{attrs:{href:"https://github.com/terry-xiaoyu/one_more_emqx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cluster Script"),s("OutboundLink")],1),e._v(" regarding to the above operations and also refer to "),s("RouterLink",{attrs:{to:"/en/enterprise/latest/getting-started/config.html"}},[e._v("Configuration Instructions")]),e._v(" and  "),s("RouterLink",{attrs:{to:"/en/enterprise/latest/configuration/configuration.html"}},[e._v("Configuration Items")]),e._v(" for details.")],1),e._v(" "),s("h2",{attrs:{id:"firewall-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firewall-settings"}},[e._v("#")]),e._v(" Firewall settings")]),e._v(" "),s("h3",{attrs:{id:"the-node-discovery-ports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-node-discovery-ports"}},[e._v("#")]),e._v(" The Node Discovery Ports")]),e._v(" "),s("p",[e._v("If the environment variable WITH_EPMD=1 is set in advance, the epmd (listening port 4369) will be enabled for node discovery when emqx is started, which is called "),s("code",[e._v("epmd mode")]),e._v(".")]),e._v(" "),s("p",[e._v("If the environment variable WITH_EPMD is not set, epmd is not enabled when emqx is started, and emqx ekka is used for node discovery, which is also the default method of node discovery  since version 4.0. This is called "),s("code",[e._v("ekka mode")]),e._v(".")]),e._v(" "),s("p",[s("strong",[e._v("epmd mode：")])]),e._v(" "),s("p",[e._v("If there is a firewall between cluster nodes, the firewall needs to open TCP port 4369 for each node, to allow peers query each other's listening port. The firewall should also allow nodes connecting to port in configurable range from "),s("code",[e._v("node.dist_listen_min")]),e._v(" to "),s("code",[e._v("node.dist_listen_max")]),e._v(" (inclusive, default is "),s("code",[e._v("6369")]),e._v(" for both)")]),e._v(" "),s("p",[s("strong",[e._v("ekka mode（Default mode since version 4.0）：")])]),e._v(" "),s("p",[e._v("In "),s("code",[e._v("ekka")]),e._v(" mode, the port mapping is conventional, but not dynamic as in "),s("code",[e._v("epmd")]),e._v(" mode.\nThe configurations "),s("code",[e._v("node.dist_listen_min")]),e._v(" and "),s("code",[e._v("node.dist_listen_max")]),e._v(" take no effect in this case.")]),e._v(" "),s("p",[e._v("If there is a firewall between the cluster nodes, the conventional listening port should be allowed\nfor nodes to connect each other. See below for port mapping rule in "),s("code",[e._v("ekka")]),e._v(" mode.")]),e._v(" "),s("p",[e._v("Erlang distribution port mapping rule in "),s("code",[e._v("ekka")]),e._v(" mode: "),s("code",[e._v("ListeningPort = BasePort + Offset")]),e._v(",\nwhere "),s("code",[e._v("BasePort")]),e._v(" is 4370 (which is not made configurable), and "),s("code",[e._v("Offset")]),e._v(" is the numeric suffix of the node's name. If the node name does not have a numeric suffix, "),s("code",[e._v("Offsset")]),e._v(" is 0.")]),e._v(" "),s("p",[e._v("For example, having "),s("code",[e._v("node.name = emqx@192.168.0.12")]),e._v(" in "),s("code",[e._v("emqx.conf")]),e._v(" should make the\nnode listen on port "),s("code",[e._v("4370")]),e._v(", and port  "),s("code",[e._v("4371")]),e._v(" for "),s("code",[e._v("emqx1")]),e._v(" (or "),s("code",[e._v("emqx-1")]),e._v("), and so on.")]),e._v(" "),s("h3",{attrs:{id:"the-cluster-rpc-port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-cluster-rpc-port"}},[e._v("#")]),e._v(" The Cluster RPC Port")]),e._v(" "),s("p",[e._v("Each emqx node also listens on a (conventional) port for the RPC channels, which should\nalso be allowed by the firewall. The port mapping rule is similar to the node discovery\nports in "),s("code",[e._v("ekka mode")]),e._v(", but with the "),s("code",[e._v("BasePort = 5370")]),e._v(". That is, having\n"),s("code",[e._v("node.name = emqx@192.168.0.12")]),e._v(" in "),s("code",[e._v("emqx.conf")]),e._v(" should make the node listen on port "),s("code",[e._v("5370")]),e._v(",\nand port "),s("code",[e._v("5371")]),e._v(" for "),s("code",[e._v("emqx1")]),e._v(" (or "),s("code",[e._v("emqx-1")]),e._v("), and so on.")])])}),[],!1,null,null,null);t.default=n.exports}}]);