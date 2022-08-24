(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{1504:function(e,t,a){"use strict";a.r(t);var i=a(10),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"rate-limit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#rate-limit"}},[e._v("#")]),e._v(" Rate limit")]),e._v(" "),i("p",[e._v("EMQX Broker specifies the limit on access speed and message speed. When the client's connection request speed exceeds the specified limit, the establishment of a new connection is suspended; when the message reception speed exceeds the specified limit, the reception of messages is suspended.")]),e._v(" "),i("p",[e._v("Rate limit is a "),i("em",[e._v("backpressure")]),e._v(" scheme that avoids system overload from the entrance and guarantees system stability and predictable throughput. The rate limit can be configured in "),i("code",[e._v("etc/emqx.conf")]),e._v(" :")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Configuration item")]),e._v(" "),i("th",[e._v("Type")]),e._v(" "),i("th",[e._v("Default value")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("listener.tcp.external.max_conn_rate")]),e._v(" "),i("td",[e._v("Number")]),e._v(" "),i("td",[e._v("1000")]),e._v(" "),i("td",[e._v("The maximum allowable connection rate on this node (conn/s)")])]),e._v(" "),i("tr",[i("td",[e._v("zone.external.publish_limit")]),e._v(" "),i("td",[e._v("Number,Duration")]),e._v(" "),i("td",[e._v("No limit")]),e._v(" "),i("td",[e._v("Maximum allowable publish rate on a single connection (msg/s)")])]),e._v(" "),i("tr",[i("td",[e._v("listener.tcp.external.rate_limit")]),e._v(" "),i("td",[e._v("Size,Duration")]),e._v(" "),i("td",[e._v("No limit")]),e._v(" "),i("td",[e._v("Maximum allowable packet rate on a single connection (bytes/s)")])])])]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("max_conn_rate")]),e._v(" is the rate limit for connection establishment on a single emqx node. "),i("code",[e._v("1000")]),e._v(" means that 1000 clients can access at most.")]),e._v(" "),i("li",[i("strong",[e._v("publish_limit")]),e._v(" is the rate limit for receiving PUBLISH packets on a single connection. "),i("code",[e._v("100,10s")]),e._v(" means that the maximum PUBLISH message rate allowed on each connection is 100 every 10 seconds.")]),e._v(" "),i("li",[i("strong",[e._v("rate_limit")]),e._v(" is the rate limit for receiving TCP packets on a single connection. "),i("code",[e._v("100KB,10s")]),e._v(" means that the maximum TCP packet rate allowed on each connection is 100KB every 10 seconds.")])]),e._v(" "),i("p",[i("code",[e._v("publish_limit")]),e._v(" and "),i("code",[e._v("rate_limit")]),e._v(" both provide limits for a single connection. EMQX Broker currently does not provide a global message rate limit.")]),e._v(" "),i("h2",{attrs:{id:"rate-limit-explanation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#rate-limit-explanation"}},[e._v("#")]),e._v(" Rate limit explanation")]),e._v(" "),i("p",[e._v("EMQX Broker uses the "),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Token_bucket",target:"_blank",rel:"noopener noreferrer"}},[e._v("Token Bucket"),i("OutboundLink")],1),e._v(" algorithm to control all Rate Limits. The logic of the token bucket algorithm is as follows:")]),e._v(" "),i("p",[i("img",{attrs:{src:a(504),alt:"image-20190604103907875"}})]),e._v(" "),i("ul",[i("li",[e._v("There is a bucket that can hold the maximum burst of the token. The maximum burst is abbreviated as b.")]),e._v(" "),i("li",[e._v("There is a rate for adding tokens to the bucket per second, abbreviated as r. When the bucket is full, no tokens are added to the bucket.")]),e._v(" "),i("li",[e._v("Whenever 1 (or N) request arrives, take 1 (or N) token from the bucket. If the token is not enough, it will be blocked and wait for the token to be generated.")])]),e._v(" "),i("p",[e._v("It can be seen from this algorithm:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("In the long run, the average value of the limited request rate is equal to the value of rate.")])]),e._v(" "),i("li",[i("p",[e._v("When the actual request reaching speed is M, and M> r, then the maximum (peak) rate that can be achieved in actual operation is M = b + r.")])])]),e._v(" "),i("p",[e._v("It is easy to think that the maximum rate M is the speed that can consume the full state token bucket in 1 unit of time. The consumption rate of token bucket is M-r, so we can see that: b / (M-r) = 1, and we get M = b + r")]),e._v(" "),i("h3",{attrs:{id:"application-of-token-bucket-algorithm-in-emqx-broker"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#application-of-token-bucket-algorithm-in-emqx-broker"}},[e._v("#")]),e._v(" Application of Token Bucket Algorithm in EMQX Broker")]),e._v(" "),i("p",[e._v("When the following configuration is used for packet rate limiting:")]),e._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("listener.tcp.external.rate_limit = 100KB,10s\n")])]),e._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[e._v("1")]),i("br")])]),i("p",[e._v("EMQX Broker will initialize the rate-limit processor of each connection with two values:")]),e._v(" "),i("ul",[i("li",[e._v("rate = 100 KB / 10s = 10240 B/s")]),e._v(" "),i("li",[e._v("burst = 100 KB = 102400 B")])]),e._v(" "),i("p",[e._v("According to the algorithm in "),i("a",{attrs:{href:"#rate-limit-explanation"}},[e._v("Message Rate Limitation Explanation")]),e._v(", it is known:")]),e._v(" "),i("ul",[i("li",[e._v("In the long run, the allowable average rate is limited to 10240 B/s")]),e._v(" "),i("li",[e._v("The allowable peak rate is 102400 + 10240 = 112640 B/s")])]),e._v(" "),i("p",[e._v("To improve system throughput, the access module of EMQX Broker does not read packets from the socket one by one, but reads N packets from the socket each time. The timing of the rate-limit check is after receiving these N messages and before preparing to continue to receive the next N messages. Therefore, the actual rate limit will not be as accurate as the algorithm. EMQX Broker only provides a rough rate limit. The value of "),i("code",[e._v("N")]),e._v(" can be configured in  "),i("code",[e._v("etc/emqx.conf")]),e._v(" :")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Configuration item")]),e._v(" "),i("th",[e._v("Type")]),e._v(" "),i("th",[e._v("Default value")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("listener.tcp.external.active_n")]),e._v(" "),i("td",[e._v("Number")]),e._v(" "),i("td",[e._v("100")]),e._v(" "),i("td",[e._v("how many messages are read from the TCP stack by emqx at a time")])])])])])}),[],!1,null,null,null);t.default=n.exports},504:function(e,t,a){e.exports=a.p+"docs-assets/img/token-bucket.45c2b3e5.jpg"}}]);