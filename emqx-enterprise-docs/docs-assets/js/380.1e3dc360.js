(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{1753:function(s,e,a){"use strict";a.r(e);var n=a(10),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("EMQX 目前支持的操作系统:")]),s._v(" "),a("ul",[a("li",[s._v("CentOS 7 (EL7)")]),s._v(" "),a("li",[s._v("CentOS 8 (EL8)")]),s._v(" "),a("li",[s._v("Raspbian 10")]),s._v(" "),a("li",[s._v("Debian 9")]),s._v(" "),a("li",[s._v("Debian 10")]),s._v(" "),a("li",[s._v("Ubuntu 16.04")]),s._v(" "),a("li",[s._v("Ubuntu 18.04")]),s._v(" "),a("li",[s._v("Ubuntu 20.04")]),s._v(" "),a("li",[s._v("macOS 10")]),s._v(" "),a("li",[s._v("Windows Server 2019")])]),s._v(" "),a("h2",{attrs:{id:"rpm-deb包安装-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpm-deb包安装-linux"}},[s._v("#")]),s._v(" RPM/DEB包安装 (Linux)")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("访问 "),a("a",{attrs:{href:"https://www.emqx.com/zh/try?product=broker",target:"_blank",rel:"noopener noreferrer"}},[s._v("emqx.com"),a("OutboundLink")],1),s._v(" 或 "),a("a",{attrs:{href:"https://github.com/emqx/emqx/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1),s._v(" 下载EMQX 版本的二进制包。")])]),s._v(" "),a("li",[a("p",[s._v("安装 EMQX Broker，将下面的路径更改为您下载 EMQX 软件包的路径。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("RPM 包:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" emqx-cenots7-v4.0.0.x86_64.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("DEB 包:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# for ubuntu/debian\n$ sudo apt install ./emqx-ubuntu18.04-v4.0.0_amd64.deb\n$ sudo apt install ./emqx-debian10-v4.0.0_amd64.deb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("启动 EMQX Broker")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("直接启动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ emqx start\nemqx 4.0.0 is started successfully!\n$ emqx_ctl status\nNode 'emqx@127.0.0.1' is started\nemqx v4.0.0 is running\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("systemctl 启动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo systemctl start emqx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("service 启动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo service emqx start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("停止 EMQX Broker")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ emqx stop\nok\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("卸载 EMQX Broker")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("DEB 包:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo apt remove --purge emqx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("RPM 包:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo yum remove emqx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])])])]),s._v(" "),a("h2",{attrs:{id:"zip-压缩包安装-linux、macos、windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zip-压缩包安装-linux、macos、windows"}},[s._v("#")]),s._v(" ZIP 压缩包安装 (Linux、MacOS、Windows)")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("ZIP包适用于测试和热更，如果不知道如何手动安装所有可能的运行时依赖，请勿在生产环境中使用")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("访问 "),a("a",{attrs:{href:"https://www.emqx.com/zh/try?product=broker",target:"_blank",rel:"noopener noreferrer"}},[s._v("emqx.com"),a("OutboundLink")],1),s._v(" 或 "),a("a",{attrs:{href:"https://github.com/emqx/emqx/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1),s._v(" 下载要安装的 EMQX 版本的 zip 包。")])]),s._v(" "),a("li",[a("p",[s._v("解压程序包")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" emqx-ubuntu18.04-v4.0.0.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("启动 EMQX Broker")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ cd ./emqx\n$ ./bin/emqx start\nemqx 4.0.0 is started successfully!\n\n$ ./bin/emqx_ctl status\nNode 'emqx@127.0.0.1' is started\nemqx v4.0.0 is running\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("停止 EMQX Broker")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./bin/emqx stop\nok\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("卸载 EMQX Broker")]),s._v(" "),a("p",[s._v("直接删除 EMQX 目录即可")])])]),s._v(" "),a("h2",{attrs:{id:"通过-docker-运行-包含简单的-docker-compose-集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-docker-运行-包含简单的-docker-compose-集群"}},[s._v("#")]),s._v(" 通过 Docker 运行 (包含简单的 docker-compose 集群)")]),s._v(" "),a("h3",{attrs:{id:"运行单个容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行单个容器"}},[s._v("#")]),s._v(" 运行单个容器")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("获取 docker 镜像")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("通过 "),a("a",{attrs:{href:"https://hub.docker.com/r/emqx/emqx",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Hub"),a("OutboundLink")],1),s._v(" 获取")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ docker pull emqx/emqx:v4.0.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("启动 docker 容器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ docker run -d --name emqx -p 1883:1883 -p 8081:8081 -p 8083:8083 -p 8883:8883 -p 8084:8084 -p 18083:18083 emqx/emqx:v4.0.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"使用-docker-compose-创建简单的-static-集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-compose-创建简单的-static-集群"}},[s._v("#")]),s._v(" 使用 docker-compose 创建简单的 static 集群")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建 "),a("code",[s._v("docker-compose.yaml")]),s._v(" 文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('version: \'3\'\n\nservices:\n  emqx1:\n    image: emqx/emqx:v4.0.0\n    environment:\n    - "EMQX_NAME=emqx"\n    - "EMQX_HOST=node1.emqx.io"\n    - "EMQX_CLUSTER__DISCOVERY=static"\n    - "EMQX_CLUSTER__STATIC__SEEDS=emqx@node1.emqx.io, emqx@node2.emqx.io"\n    healthcheck:\n      test: ["CMD", "/opt/emqx/bin/emqx_ctl", "status"]\n      interval: 5s\n      timeout: 25s\n      retries: 5\n    networks:\n      emqx-bridge:\n        aliases:\n        - node1.emqx.io\n\n  emqx2:\n    image: emqx/emqx:v4.0.0\n    environment:\n    - "EMQX_NAME=emqx"\n    - "EMQX_HOST=node2.emqx.io"\n    - "EMQX_CLUSTER__DISCOVERY=static"\n    - "EMQX_CLUSTER__STATIC__SEEDS=emqx@node1.emqx.io, emqx@node2.emqx.io"\n    healthcheck:\n      test: ["CMD", "/opt/emqx/bin/emqx_ctl", "status"]\n      interval: 5s\n      timeout: 25s\n      retries: 5\n    networks:\n      emqx-bridge:\n        aliases:\n        - node2.emqx.io\n\nnetworks:\n  emqx-bridge:\n    driver: bridge\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("启动 docker-compose 集群")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ docker-compose -p my_emqx up -d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("查看集群")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ docker exec -it my_emqx_emqx1_1 sh -c \"emqx_ctl cluster status\"\nCluster status: #{running_nodes => ['emqx@node1.emqx.io','emqx@node2.emqx.io'],\n                  stopped_nodes => []}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])]),s._v(" "),a("p",[s._v("更多关于 EMQX Docker 的信息请查看 "),a("a",{attrs:{href:"https://hub.docker.com/r/emqx/emqx",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Hub"),a("OutboundLink")],1),s._v(" 或 "),a("a",{attrs:{href:"https://github.com/emqx/emqx-rel/tree/master/deploy/docker",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"通过-helm-安装并集群-k8s、k3s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-helm-安装并集群-k8s、k3s"}},[s._v("#")]),s._v(" 通过 Helm 安装并集群 (K8S、K3S)")]),s._v(" "),a("ol",[a("li",[s._v("添加 helm 仓库")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ helm repo add emqx https://repos.emqx.io/charts\n$ helm repo update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("查询 EMQX Broker")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("helm search repo emqx\nNAME         CHART VERSION APP VERSION DESCRIPTION\nemqx/emqx    v4.0.0        v4.0.0      A Helm chart for EMQX\nemqx/emqx-ee v4.0.0        v4.0.0      A Helm chart for EMQX\nemqx/kuiper  0.1.1         0.1.1       A lightweight IoT edge analytic software\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("启动 EMQX 集群")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ helm install my-emqx emqx/emqx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("查看 EMQX 集群情况")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ kubectl get pods\nNAME       READY  STATUS             RESTARTS  AGE\nmy-emqx-0  1/1     Running   0          56s\nmy-emqx-1  1/1     Running   0          40s\nmy-emqx-2  1/1     Running   0          21s\n\n$ kubectl exec -it my-emqx-0 -- emqx_ctl cluster status\nCluster status: #{running_nodes =>\n                      ['my-emqx@my-emqx-0.my-emqx-headless.default.svc.cluster.local',\n                       'my-emqx@my-emqx-1.my-emqx-headless.default.svc.cluster.local',\n                       'my-emqx@my-emqx-2.my-emqx-headless.default.svc.cluster.local'],\n                  stopped_nodes => []}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"源码编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码编译安装"}},[s._v("#")]),s._v(" 源码编译安装")]),s._v(" "),a("ol",[a("li",[s._v("获取源码")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/emqx/emqx.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("切换到最近的 Tag")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" emqx\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" describe --abbrev"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" --tags"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("编译")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("启动 EMQX Broker")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" _build/emqx/rel/emqx\n\n$ ./bin/emqx start\nEMQX Broker "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.3")]),s._v("-beta.1 is started successfully"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n$ ./bin/emqx_ctl status\nNode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'emqx@127.0.0.1'")]),s._v(" is started\nemqx "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.3")]),s._v("-beta.1 is running\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);