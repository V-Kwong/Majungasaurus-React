(this["webpackJsonpmajungasaurus-react"]=this["webpackJsonpmajungasaurus-react"]||[]).push([[0],{16:function(e,a,t){e.exports={container:"sticktyHeader_container__2OKfJ",logo:"sticktyHeader_logo__5QDxd",menuIconCircle:"sticktyHeader_menuIconCircle__1Vpxe",menuIcon:"sticktyHeader_menuIcon__3n2ti"}},17:function(e,a,t){e.exports=t.p+"static/media/black-dinosaur-logo-clip-art-png-clip-art.ff565b0f.png"},19:function(e,a,t){e.exports={overlay:"mobileNavPanel_overlay__2XYqu",sidenav:"mobileNavPanel_sidenav__DXevx",closebtn:"mobileNavPanel_closebtn__24pcA"}},34:function(e,a,t){e.exports={title:"product_title__irlX-",discoverContainer:"product_discoverContainer__2xFZM"}},36:function(e,a,t){e.exports=t(65)},41:function(e,a,t){},42:function(e,a,t){},5:function(e,a,t){e.exports={container:"sticktyFooter_container__1jtMi",social:"sticktyFooter_social__3X9ap",socialIconCircle:"sticktyFooter_socialIconCircle__2JvBz",socialIcon:"sticktyFooter_socialIcon__w89SJ",copyright:"sticktyFooter_copyright__Qvhqd"}},61:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(24),i=t.n(o),l=(t(41),t(42),t(1)),s=t(2),c=t(4),m=t(3),u=t(25),d=(t(61),t(8)),h=t.n(d),p=t(17),v=t.n(p),f=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:h.a.topContainer},r.a.createElement("img",{src:v.a,className:h.a.logo,alt:""}),r.a.createElement("h1",{className:h.a.text},"Majungasaurus")),r.a.createElement("div",{className:h.a.bottomContainer},r.a.createElement("p",{className:h.a.slogan},"Challenge ",r.a.createElement("span",{className:h.a.sloganHighlight},"Natural Selection")),r.a.createElement("div",{className:h.a.line})))}}]),t}(n.Component),b=t(26),g=t.n(b),E=t(16),_=t.n(E),w=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.scrollToTop,t=e.openMenu;return r.a.createElement("div",{className:["pageDividerTop",_.a.container].join(" ")},r.a.createElement("img",{src:v.a,className:_.a.logo,alt:"",onClick:a}),r.a.createElement("span",{className:_.a.menuIconCircle,onClick:t},r.a.createElement(g.a,{className:_.a.menuIcon,fontSize:"large",color:"inherit"})))}}]),t}(n.Component),y=t(19),N=t.n(y),x=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.closeMenu;return r.a.createElement("div",null,r.a.createElement("div",{ref:"overlay",className:N.a.overlay,onClick:e}),r.a.createElement("div",{ref:"navPanel",className:N.a.sidenav},r.a.createElement("a",{href:"javascript:void(0)",className:N.a.closebtn,onClick:e},"\xd7"),r.a.createElement("a",{href:"#"},"About"),r.a.createElement("a",{href:"#"},"Services"),r.a.createElement("a",{href:"#"},"Clients"),r.a.createElement("a",{href:"#"},"Contact")))}}]),t}(n.Component),k=t(7),j=t.n(k),C=t(11),O=t(12);function T(){var e=Object(C.a)(["\n  text-decoration: none;\n  background: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n\n  ","\n"]);return T=function(){return e},e}var B=O.a.a(T(),(function(e){return e.active?"\n      transform: scale(1.1);\n      font-weight: bold;\n      padding-bottom: 2px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.8);\n    ":"\n      transform: translateZ(0);\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n      backface-visibility: hidden;\n      -moz-osx-font-smoothing: grayscale;\n      transition-duration: 0.3s;\n      transition-property: transform;\n      transform: scale(1.0);\n    \n      ::after {\n        position: absolute;\n        top: 100%;\n        left: 0;\n        width: 100%;\n        height: 1px;\n        background: rgba(255, 255, 255, 0.6);\n        content: '';\n        opacity: 0;\n        -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\n        -moz-transition: opacity 0.3s, -moz-transform 0.3s;\n        transition: opacity 0.3s, transform 0.3s;\n        -webkit-transform: translateY(10px);\n        -moz-transform: translateY(10px);\n        transform: translateY(10px);\n      }\n    \n      :hover::after,\n      :focus::after {\n        opacity: 1;\n        -webkit-transform: translateY(2px);\n        -moz-transform: translateY(2px);\n        transform: translateY(2px);\n        font-weight: bold;\n      }\n    \n      :hover,\n      :focus {\n        outline: none;\n        text-shadow: 0 0 8px rgba(0, 0, 0, 0.4);\n      }\n    "})),I=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).overviewClick=function(){"Cool Facts"===n.state.activeButton&&n.setState({activeButton:"Overview"})},n.coolFactsClick=function(){"Overview"===n.state.activeButton&&n.setState({activeButton:"Cool Facts"})},n.state={activeButton:"Overview"},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Allosaurus"),r.a.createElement("div",{className:j.a.aboutBtnContainer},r.a.createElement(B,{active:"Overview"===this.state.activeButton,onClick:this.overviewClick},"Overview"),r.a.createElement("div",{className:j.a.aboutBtnDivider},"|"),r.a.createElement(B,{active:"Cool Facts"===this.state.activeButton,onClick:this.coolFactsClick},"Cool Facts")),r.a.createElement("div",{className:"Overview"===this.state.activeButton?j.a.showText:j.a.hideText},r.a.createElement("p",{className:"textLine"},'Allosaurus (/\u02cc\xe6l\u0259\u02c8s\u0254\u02d0r\u0259s/[2][3]) is a genus of carnivorous theropod dinosaur that lived 155 to 145 million years ago during the late Jurassic period (Kimmeridgian to late Tithonian[4]). The name "Allosaurus" means "different lizard" alluding to its unique concave vertebrae (at the time of its discovery). It is derived from the Greek \u1f04\u03bb\u03bb\u03bf\u03c2 (allos) ("different, other") and \u03c3\u03b1\u1fe6\u03c1\u03bf\u03c2 (sauros) ("lizard / generic reptile").'),r.a.createElement("p",{className:"textLine"},"The first fossil remains that could definitively be ascribed to this genus were described in 1877 by paleontologist Othniel Charles Marsh. As one of the first well-known theropod dinosaurs, it has long attracted attention outside of paleontological circles."),r.a.createElement("p",{className:[j.a.textLine,j.a.lastLine].join(" ")},"Allosaurus was a large bipedal predator. Its skull was large and equipped with dozens of sharp, serrated teeth.")),r.a.createElement("div",{className:"Cool Facts"===this.state.activeButton?j.a.showText:j.a.hideText},r.a.createElement("p",{className:"textLine"},"It averaged 9.5 metres (31 ft) in length, though fragmentary remains suggest it could have reached over 12 m (39 ft). Relative to the large and powerful hindlimbs, its three-fingered forelimbs were small, and the body was balanced by a long and heavily muscled tail. It is classified as an allosaurid, a type of carnosaurian theropod dinosaur."),r.a.createElement("p",{className:"textLine"},"The genus has a complicated taxonomy, and includes 5-6 valid species (later whittled down to three valid species as of 2020), the best known of which is A. fragilis. The bulk of Allosaurus remains have come from North America's Morrison Formation, with material also known from Portugal."),r.a.createElement("p",{className:["textLine",j.a.lastLine].join(" ")},"As the most abundant large predator in the Morrison Formation, Allosaurus was at the top of the food chain."))))}}]),t}(n.Component),L=t(30),z=t.n(L),M=t(31),D=t.n(M),F=t(32),A=t.n(F),S=t(33),H=t.n(S),P=t(5),Z=t.n(P),X=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:["pageDividerBottom",Z.a.container].join(" ")},r.a.createElement("div",{className:Z.a.social},r.a.createElement("a",{href:"https://www.youtube.com/watch?v=_65kfGhZXZw",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:Z.a.socialIconCircle},r.a.createElement(z.a,{className:Z.a.socialIcon,fontSize:"small",color:"inherit"}))),r.a.createElement("a",{href:"https://www.youtube.com/watch?v=_65kfGhZXZw",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:Z.a.socialIconCircle},r.a.createElement(D.a,{className:Z.a.socialIcon,fontSize:"small",color:"inherit"}))),r.a.createElement("a",{href:"https://www.youtube.com/watch?v=_65kfGhZXZw",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:Z.a.socialIconCircle},r.a.createElement(A.a,{className:Z.a.socialIcon,fontSize:"small",color:"inherit"}))),r.a.createElement("a",{href:"https://www.youtube.com/watch?v=_65kfGhZXZw",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:Z.a.socialIconCircle},r.a.createElement(H.a,{className:Z.a.socialIcon,fontSize:"small",color:"inherit"})))),r.a.createElement("div",null,r.a.createElement("p",{className:Z.a.copyright}," \xa9 2020 Majungasaurus. All rights reserved.")))}}]),t}(n.Component),Y=t(34),J=t.n(Y);function q(){var e=Object(C.a)(["\n  color: #fff;\n  padding: 7px 15px;\n  margin-bottom: 5px;\n  display: inline-block;\n  -webkit-transition-delay: .1s;\n  transition-delay: .1s;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);\n  border: 2px solid #ffe001;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n\n  &:hover {\n    color: #000;\n    background-color: #ffe001;\n  }\n"]);return q=function(){return e},e}var G=O.a.a(q()),Q=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.text;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},a),r.a.createElement("p",{className:"textLine"},t),r.a.createElement("p",{className:J.a.discoverContainer},r.a.createElement(G,null,"Discover ",a))))}}]),t}(n.Component),K=t(9),W=t.n(K);function R(){var e=Object(C.a)(["\n  text-decoration: none;\n  background: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  margin-left: 16px;\n\n  &:hover {\n    opacity: 0.75;\n  }\n"]);return R=function(){return e},e}var U=O.a.a(R()),V=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Contact"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("p",{className:W.a.emailLine},"Majungasaurus:")),r.a.createElement("th",null,r.a.createElement("p",{className:W.a.emailLine},r.a.createElement(U,{href:"mailto:majunga@saurus.com"},"majunga@saurus.com")))),r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("p",{className:W.a.emailLine},"Brachiosaurus:")),r.a.createElement("th",null,r.a.createElement("p",{className:W.a.emailLine},r.a.createElement(U,{href:"mailto:brachio@saurus.com"},"brachio@saurus.com")))),r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("p",{className:W.a.emailLine},"Edmontosaurus:")),r.a.createElement("th",null,r.a.createElement("p",{className:W.a.emailLine},r.a.createElement(U,{href:"mailto:edmonto@saurus.com"},"edmonto@saurus.com")))))))}}]),t}(n.Component),$=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).scrollToTop=function(){e.refs.scrollbars.view.scroll({top:0,behavior:"smooth"})},e.openMenu=function(){var a=e.refs.mobileNavPanel;a.refs.navPanel.style.width="250px",a.refs.overlay.style.width="100%",a.refs.overlay.style.opacity="0.8"},e.closeMenu=function(){var a=e.refs.mobileNavPanel;a.refs.navPanel.style.width="0",a.refs.overlay.style.opacity="0",setTimeout((function(){a.refs.overlay.style.width="0"}),505)},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(u.Scrollbars,{ref:"scrollbars",style:{width:"100vw",height:"100vh",backgroundColor:"black"}},r.a.createElement(f,null),r.a.createElement(x,{ref:"mobileNavPanel",closeMenu:this.closeMenu}),r.a.createElement(w,{scrollToTop:this.scrollToTop,openMenu:this.openMenu}),r.a.createElement(I,null),r.a.createElement(X,null),r.a.createElement("div",{className:"pageDividerTop"}),r.a.createElement(Q,{title:"Brachiosaurus",text:"Most Iconic and initially thought to be one of the Largest Dinosaurs."}),r.a.createElement("div",{className:"pageDividerBottom"}),r.a.createElement("div",{className:"pageDividerTop"}),r.a.createElement(Q,{title:"Edmontosaurus",text:"Herbivore that could move on both Two Legs and Four. Flex."}),r.a.createElement("div",{className:"pageDividerBottom"}),r.a.createElement("div",{className:"pageDividerTop"}),r.a.createElement(V,null),r.a.createElement("div",{className:"pageDividerBottom"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports={aboutBtnContainer:"about_aboutBtnContainer__2Tyjm",aboutBtnDivider:"about_aboutBtnDivider__AB55s",showText:"about_showText__3fX_v",hideText:"about_hideText__2mYDv",lastLine:"about_lastLine__361cN"}},8:function(e,a,t){e.exports={topContainer:"main_topContainer__1z2H8",bottomContainer:"main_bottomContainer__2Q9TS",text:"main_text__344or",logo:"main_logo__2HjnN",slogan:"main_slogan__AKa0_",sloganHighlight:"main_sloganHighlight__3eD2_",line:"main_line__20E37"}},9:function(e,a,t){e.exports={emailLine:"contact_emailLine__QzTUq"}}},[[36,1,2]]]);
//# sourceMappingURL=main.1397514f.chunk.js.map