(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1591:function(e,t,i){"use strict";i.r(t);var a=i(10),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"jwt-authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt-authentication"}},[e._v("#")]),e._v(" JWT Authentication")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://JWT.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JWT"),a("OutboundLink")],1),e._v(" Authentication is an authentication mechanism based on Token. It does not rely on the server to retain the authentication information or session information of the client. The authentication information can be issued in batches with the key. The easiest way to authenticate.")]),e._v(" "),a("h2",{attrs:{id:"create-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-module"}},[e._v("#")]),e._v(" Create module")]),e._v(" "),a("p",[e._v("Open "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("EMQX Dashboard"),a("OutboundLink")],1),e._v(', click the "Modules" tab on the left, select "Add Module":')]),e._v(" "),a("p",[a("img",{attrs:{src:i(625),alt:"Modules"}})]),e._v(" "),a("p",[e._v('Then select "JWT Authentication" under "Authentication":')]),e._v(" "),a("p",[a("img",{attrs:{src:i(626),alt:"Modules JWT Selected"}})]),e._v(" "),a("p",[e._v("JWT authentication provides the following configuration items:")]),e._v(" "),a("ol",[a("li",[e._v("From: The field that stores the JWT when the client connects. It currently supports the selection of username or password.")]),e._v(" "),a("li",[e._v("Secret: The key used when issuing the JWT. It will be used to verify whether the JWT received by EMQX is legal and is applicable to the JWT issued by the HMAC algorithm.")]),e._v(" "),a("li",[e._v("Pubkey: It will be used to verify whether the JWT received by EMQX is legal, and is applicable to the JWT issued by RSA or ECDSA algorithm.")]),e._v(" "),a("li",[e._v("JWKs Addr: EMQX will periodically query the latest public key list from the JWKS server and use it to verify whether the received JWT is legitimate, and is applicable to JWTs issued by RSA or ECDSA algorithms.")]),e._v(" "),a("li",[e._v("Verify Claims: Whether to verify that the claims in the JWT payload are consistent with the claims.")]),e._v(" "),a("li",[e._v("Claims: A list of claims fields used to verify that the claims in the JWT payload are valid. The most common usage is to add a key-value pair with a key of "),a("code",[e._v("username")]),e._v(" and a value of "),a("code",[e._v("%u")]),e._v(", "),a("code",[e._v("%u")]),e._v(" as a placeholder that will be replaced at runtime with the Username that the client will actually use when connecting. The replaced value will be used to compare with the value of the same-key claim of the JWT Payload to have a one-to-one correspondence between JWT and Username. The following two placeholders are currently supported in the declaration field list:\n"),a("ol",[a("li",[a("code",[e._v("%u")]),e._v(": It will be replaced at runtime with the Username used by the client when connecting.")]),e._v(" "),a("li",[a("code",[e._v("%c")]),e._v(": It will be replaced at runtime with the Client ID used by the client when connecting.")])])])]),e._v(" "),a("blockquote",[a("p",[e._v("Note: When verifying JWT the values for "),a("code",[e._v("Secret")]),e._v(", "),a("code",[e._v("Pubkey")]),e._v(", and "),a("code",[e._v("JWKs Addr")]),e._v(" are checked in that specific order. Keys with missing values will be ignored.")])]),e._v(" "),a("p",[a("img",{attrs:{src:i(627),alt:"JWT Module Settings"}})]),e._v(" "),a("p",[e._v('After the configuration is complete, click the "Add" button to successfully add the JWT authentication module.')]),e._v(" "),a("p",[a("img",{attrs:{src:i(628),alt:"Modules JWT Added"}})]),e._v(" "),a("h2",{attrs:{id:"authentication-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication-principle"}},[e._v("#")]),e._v(" Authentication principle")]),e._v(" "),a("p",[e._v("Client carries JWT with username or password field (depending on the module configuration). When initiating a connection, EMQX uses the key and certificate in the configuration for decryption. If the decryption is successful, the authentication is successful, otherwise the authentication fails.")]),e._v(" "),a("p",[e._v("After JWT authentication is enabled in the default configuration, you can connect with any username + the following password:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImF1dGhvciI6IndpdndpdiIsInNpdGUiOiJodHRwczovL3dpdndpdi5jb20ifSwiZXhwIjoxNTgyMjU1MzYwNjQyMDAwMCwiaWF0IjoxNTgyMjU1MzYwfQ.FdyAx2fYahm6h3g47m88ttyINzptzKy_speimyUcma4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The above JWT Token is only for testing and can be generated with related tools according to your own business needs. An online generation tool is provided here: https://www.jsonwebtoken.io/.")])])])}),[],!1,null,null,null);t.default=n.exports},625:function(e,t,i){e.exports=i.p+"docs-assets/img/auth_jwt1.4a14f7af.png"},626:function(e,t,i){e.exports=i.p+"docs-assets/img/auth_jwt2.631cf9da.png"},627:function(e,t,i){e.exports=i.p+"docs-assets/img/auth_jwt3.7848c53a.png"},628:function(e,t,i){e.exports=i.p+"docs-assets/img/auth_jwt4.295e6d98.png"}}]);