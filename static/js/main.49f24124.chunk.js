(this["webpackJsonpmajungasaurus-react"]=this["webpackJsonpmajungasaurus-react"]||[]).push([[0],{11:function(e,a,t){e.exports={topContainer:"main_topContainer__1z2H8",bottomContainer:"main_bottomContainer__2Q9TS",text:"main_text__344or",logo:"main_logo__2HjnN",slogan:"main_slogan__AKa0_",sloganHighlight:"main_sloganHighlight__3eD2_",line:"main_line__20E37"}},13:function(e,a,t){e.exports={sideMenuContainer:"App_sideMenuContainer__plpeo",active:"App_active__3iQS-"}},14:function(e,a,t){e.exports={emailLine:"contact_emailLine__QzTUq"}},18:function(e,a,t){e.exports={container:"stickyHeader_container__14nUZ",logo:"stickyHeader_logo__EU9hq",menuIconCircle:"stickyHeader_menuIconCircle__qliwr",menuIcon:"stickyHeader_menuIcon__26B2g",menuContainer:"stickyHeader_menuContainer__1n5Rp"}},19:function(e,a,t){e.exports=t.p+"static/media/black-dinosaur-logo-clip-art-png-clip-art.ff565b0f.png"},37:function(e,a,t){e.exports={title:"product_title__irlX-",discoverContainer:"product_discoverContainer__2xFZM"}},39:function(e,a,t){e.exports=t(67)},44:function(e,a,t){},45:function(e,a,t){},5:function(e,a,t){e.exports={overlay:"mobileNavPanel_overlay__2XYqu",sidenav:"mobileNavPanel_sidenav__DXevx",closeIconContainer:"mobileNavPanel_closeIconContainer__1TIYp",linkContainer:"mobileNavPanel_linkContainer__NJcya",link:"mobileNavPanel_link__LWny7",active:"mobileNavPanel_active__C0TIj"}},6:function(e,a,t){e.exports={aboutBtnContainer:"about_aboutBtnContainer__2Tyjm",aboutBtnDivider:"about_aboutBtnDivider__AB55s",textContainer:"about_textContainer__9pjRW",showText:"about_showText__3fX_v",hideText:"about_hideText__2mYDv",lastLine:"about_lastLine__361cN",container:"about_container__1M315"}},67:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(26),i=t.n(r),c=(t(44),t(45),t(21)),s=t(1),l=t(2),u=t(4),m=t(3),h=t(27),d=t(13),v=t.n(d),f=t(11),p=t.n(f),b=t(19),g=t.n(b),E=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:p.a.topContainer},o.a.createElement("img",{src:g.a,className:p.a.logo,alt:""}),o.a.createElement("h1",{className:p.a.text},"Majungasaurus")),o.a.createElement("div",{className:p.a.bottomContainer},o.a.createElement("p",{className:p.a.slogan},"Challenge ",o.a.createElement("span",{className:p.a.sloganHighlight},"Natural Selection")),o.a.createElement("div",{className:p.a.line})))}}]),t}(n.Component),_=t(31),N=t.n(_),k=t(18),w=t.n(k),y=t(9),C=t(10);function x(){var e=Object(y.a)(["\n  height: 3rem;\n  width: 3rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 50%;\n\n  cursor: pointer;\n  transition: all .25s ease;\n\n  :hover {\n    background-color: #313131;\n  }\n"]);return x=function(){return e},e}var j=C.a.a(x()),T=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,a=e.scrollToTop,t=e.openMenu;return o.a.createElement("div",{className:["pageDividerTop",w.a.container].join(" ")},o.a.createElement("img",{src:g.a,className:w.a.logo,alt:"",onClick:a}),o.a.createElement("div",{className:w.a.menuContainer},o.a.createElement(j,{onClick:t},o.a.createElement(N.a,{className:w.a.menuIcon,fontSize:"large",color:"inherit"}))))}}]),t}(n.Component),O=t(32),P=t.n(O),I=t(5),B=t.n(I),L=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,a=e.closeMenu,t=e.scrollTo,n=e.activePage,r=e.mainRef,i=e.allosaurusRef,c=e.brachiosaurusRef,s=e.edmontosaurusRef,l=e.contactRef;return o.a.createElement("div",null,o.a.createElement("div",{ref:"overlay",className:B.a.overlay,onClick:a}),o.a.createElement("div",{ref:"navPanel",className:B.a.sidenav},o.a.createElement("div",{className:B.a.closeIconContainer},o.a.createElement(j,{onClick:a},o.a.createElement(P.a,{className:B.a.closeIcon,fontSize:"large",color:"inherit"}))),o.a.createElement("div",{className:B.a.linkContainer},o.a.createElement("a",{className:[B.a.link,"home"===n?B.a.active:""].join(" "),onClick:function(){a(),t(r)}},"Home"),o.a.createElement("a",{className:[B.a.link,"allosaurus"===n?B.a.active:""].join(" "),onClick:function(){a(),t(i)}},"Allosaurus"),o.a.createElement("a",{className:[B.a.link,"brachiosaurus"===n?B.a.active:""].join(" "),onClick:function(){a(),t(c)}},"Brachiosaurus"),o.a.createElement("a",{className:[B.a.link,"edmontosaurus"===n?B.a.active:""].join(" "),onClick:function(){a(),t(s)}},"Edmontosaurus"),o.a.createElement("a",{className:[B.a.link,"contact"===n?B.a.active:""].join(" "),onClick:function(){a(),t(l)}},"Contact"))))}}]),t}(n.Component),M=t(6),S=t.n(M);function z(){var e=Object(y.a)(["\n  text-decoration: none;\n  background: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n\n  ","\n"]);return z=function(){return e},e}var R=C.a.a(z(),(function(e){return e.active?"\n      transform: scale(1.1);\n      font-weight: bold;\n      padding-bottom: 2px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.8);\n    ":"\n      transform: translateZ(0);\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n      backface-visibility: hidden;\n      -moz-osx-font-smoothing: grayscale;\n      transition-duration: 0.3s;\n      transition-property: transform;\n      transform: scale(1.0);\n    \n      ::after {\n        position: absolute;\n        top: 100%;\n        left: 0;\n        width: 100%;\n        height: 1px;\n        background: rgba(255, 255, 255, 0.6);\n        content: '';\n        opacity: 0;\n        -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\n        -moz-transition: opacity 0.3s, -moz-transform 0.3s;\n        transition: opacity 0.3s, transform 0.3s;\n        -webkit-transform: translateY(10px);\n        -moz-transform: translateY(10px);\n        transform: translateY(10px);\n      }\n    \n      :hover::after,\n      :focus::after {\n        opacity: 1;\n        -webkit-transform: translateY(2px);\n        -moz-transform: translateY(2px);\n        transform: translateY(2px);\n        font-weight: bold;\n      }\n    \n      :hover,\n      :focus {\n        outline: none;\n        text-shadow: 0 0 8px rgba(0, 0, 0, 0.4);\n      }\n    "})),H=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).overviewClick=function(){"Cool Facts"===n.state.activeButton&&n.setState({activeButton:"Overview"})},n.coolFactsClick=function(){"Overview"===n.state.activeButton&&n.setState({activeButton:"Cool Facts"})},n.state={activeButton:"Overview"},n}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:["container",S.a.container].join(" ")},o.a.createElement("h1",{className:"title"},"Allosaurus"),o.a.createElement("div",{className:S.a.aboutBtnContainer},o.a.createElement(R,{active:"Overview"===this.state.activeButton,onClick:this.overviewClick},"Overview"),o.a.createElement("div",{className:S.a.aboutBtnDivider},"|"),o.a.createElement(R,{active:"Cool Facts"===this.state.activeButton,onClick:this.coolFactsClick},"Cool Facts")),o.a.createElement("div",{className:[S.a.textContainer,"Overview"===this.state.activeButton?S.a.showText:S.a.hideText].join(" ")},o.a.createElement("p",{className:"textLine"},'Allosaurus (/\u02cc\xe6l\u0259\u02c8s\u0254\u02d0r\u0259s/[2][3]) is a genus of carnivorous theropod dinosaur that lived 155 to 145 million years ago during the late Jurassic period (Kimmeridgian to late Tithonian[4]). The name "Allosaurus" means "different lizard" alluding to its unique concave vertebrae (at the time of its discovery). It is derived from the Greek \u1f04\u03bb\u03bb\u03bf\u03c2 (allos) ("different, other") and \u03c3\u03b1\u1fe6\u03c1\u03bf\u03c2 (sauros) ("lizard / generic reptile").'),o.a.createElement("p",{className:"textLine"},"The first fossil remains that could definitively be ascribed to this genus were described in 1877 by paleontologist Othniel Charles Marsh. As one of the first well-known theropod dinosaurs, it has long attracted attention outside of paleontological circles."),o.a.createElement("p",{className:[S.a.textLine,S.a.lastLine].join(" ")},"Allosaurus was a large bipedal predator. Its skull was large and equipped with dozens of sharp, serrated teeth.")),o.a.createElement("div",{className:[S.a.textContainer,"Cool Facts"===this.state.activeButton?S.a.showText:S.a.hideText].join(" ")},o.a.createElement("p",{className:"textLine"},"It averaged 9.5 metres (31 ft) in length, though fragmentary remains suggest it could have reached over 12 m (39 ft). Relative to the large and powerful hindlimbs, its three-fingered forelimbs were small, and the body was balanced by a long and heavily muscled tail. It is classified as an allosaurid, a type of carnosaurian theropod dinosaur."),o.a.createElement("p",{className:"textLine"},"The genus has a complicated taxonomy, and includes 5-6 valid species (later whittled down to three valid species as of 2020), the best known of which is A. fragilis. The bulk of Allosaurus remains have come from North America's Morrison Formation, with material also known from Portugal."),o.a.createElement("p",{className:["textLine",S.a.lastLine].join(" ")},"As the most abundant large predator in the Morrison Formation, Allosaurus was at the top of the food chain.")))}}]),t}(n.Component),D=t(33),A=t.n(D),F=t(34),Y=t.n(F),Z=t(35),X=t.n(Z),q=t(36),G=t.n(q),U=t(7),W=t.n(U),J=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:["pageDividerBottom",W.a.container].join(" ")},o.a.createElement("div",{className:W.a.social},o.a.createElement("a",{href:"https://www.youtube.com/watch?v=_65kfGhZXZw",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:W.a.socialIconCircle},o.a.createElement(A.a,{className:W.a.socialIcon,fontSize:"small",color:"inherit"}))),o.a.createElement("a",{href:"https://www.youtube.com/watch?v=_65kfGhZXZw",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:W.a.socialIconCircle},o.a.createElement(Y.a,{className:W.a.socialIcon,fontSize:"small",color:"inherit"}))),o.a.createElement("a",{href:"https://www.youtube.com/watch?v=_65kfGhZXZw",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:W.a.socialIconCircle},o.a.createElement(X.a,{className:W.a.socialIcon,fontSize:"small",color:"inherit"}))),o.a.createElement("a",{href:"https://www.youtube.com/watch?v=_65kfGhZXZw",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:W.a.socialIconCircle},o.a.createElement(G.a,{className:W.a.socialIcon,fontSize:"small",color:"inherit"})))),o.a.createElement("div",null,o.a.createElement("p",{className:W.a.copyright}," \xa9 2020 Majungasaurus. All rights reserved.")))}}]),t}(n.Component),Q=t(37),K=t.n(Q);function $(){var e=Object(y.a)(["\n  color: #fff;\n  padding: 7px 15px;\n  margin-bottom: 5px;\n  display: inline-block;\n  -webkit-transition-delay: .1s;\n  transition-delay: .1s;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);\n  border: 2px solid #ffe001;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n\n  &:hover {\n    color: #000;\n    background-color: #ffe001;\n  }\n"]);return $=function(){return e},e}var V=C.a.a($()),ee=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.text;return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"title"},a),o.a.createElement("p",{className:"textLine"},t),o.a.createElement("p",{className:K.a.discoverContainer},o.a.createElement(V,null,"Discover ",a)))}}]),t}(n.Component),ae=t(14),te=t.n(ae);function ne(){var e=Object(y.a)(["\n  text-decoration: none;\n  background: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  margin-left: 16px;\n\n  &:hover {\n    opacity: 0.75;\n  }\n"]);return ne=function(){return e},e}var oe=C.a.a(ne()),re=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"title"},"Contact"),o.a.createElement("table",null,o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement("p",{className:te.a.emailLine},"Majungasaurus:")),o.a.createElement("th",null,o.a.createElement("p",{className:te.a.emailLine},o.a.createElement(oe,{href:"mailto:majunga@saurus.com"},"majunga@saurus.com")))),o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement("p",{className:te.a.emailLine},"Brachiosaurus:")),o.a.createElement("th",null,o.a.createElement("p",{className:te.a.emailLine},o.a.createElement(oe,{href:"mailto:brachio@saurus.com"},"brachio@saurus.com")))),o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement("p",{className:te.a.emailLine},"Edmontosaurus:")),o.a.createElement("th",null,o.a.createElement("p",{className:te.a.emailLine},o.a.createElement(oe,{href:"mailto:edmonto@saurus.com"},"edmonto@saurus.com"))))))}}]),t}(n.Component),ie=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).appHeight=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))},n.onScroll=function(e){var a=e.target.scrollTop;a>=n.contact.current.offsetTop?n.setState({activePage:"contact"}):a>=n.edmontosaurus.current.offsetTop?n.setState({activePage:"edmontosaurus"}):a>=n.brachiosaurus.current.offsetTop?n.setState({activePage:"brachiosaurus"}):a>=n.allosaurus.current.offsetTop?n.setState({activePage:"allosaurus"}):n.setState({activePage:"home"})},n.scrollTo=function(e){n.scrollbars.current.view.scroll({top:e.current.offsetTop,behavior:"smooth"})},n.openMenu=function(){n.mobileNavPanel.current.refs.navPanel.style.width="250px",n.mobileNavPanel.current.refs.overlay.style.width="100%",n.mobileNavPanel.current.refs.overlay.style.opacity="0.8"},n.closeMenu=function(){n.mobileNavPanel.current.refs.navPanel.style.width="0",n.mobileNavPanel.current.refs.overlay.style.opacity="0",setTimeout((function(){n.mobileNavPanel.current.refs.overlay.style.width="0"}),505)},n.scrollbars=o.a.createRef(),n.mobileNavPanel=o.a.createRef(),n.home=o.a.createRef(),n.allosaurus=o.a.createRef(),n.brachiosaurus=o.a.createRef(),n.edmontosaurus=o.a.createRef(),n.contact=o.a.createRef(),n.state={activePage:"home"},n.appHeight(),n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.appHeight)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.appHeight)}},{key:"render",value:function(){var e,a=this;return o.a.createElement(h.Scrollbars,{ref:this.scrollbars,style:(e={width:"100vw",height:"100vh"},Object(c.a)(e,"height","calc(var(--vh, 1vh) * 100)"),Object(c.a)(e,"backgroundColor","#121212"),e),autoHide:!0,onScroll:this.onScroll},o.a.createElement("div",{ref:this.home}),o.a.createElement(E,null),o.a.createElement(L,{ref:this.mobileNavPanel,closeMenu:this.closeMenu,scrollTo:this.scrollTo,activePage:this.state.activePage,mainRef:this.home,allosaurusRef:this.allosaurus,brachiosaurusRef:this.brachiosaurus,edmontosaurusRef:this.edmontosaurus,contactRef:this.contact}),o.a.createElement("div",{ref:this.allosaurus}),o.a.createElement(T,{scrollToTop:function(){return a.scrollTo(a.home)},openMenu:this.openMenu}),o.a.createElement(H,null),o.a.createElement("div",{className:v.a.sideMenuContainer},o.a.createElement("ul",null,o.a.createElement("li",{className:"home"===this.state.activePage?v.a.active:"",onClick:function(){return a.scrollTo(a.home)}},"Home"),o.a.createElement("li",{className:"allosaurus"===this.state.activePage?v.a.active:"",onClick:function(){return a.scrollTo(a.allosaurus)}},"Allosaurus"),o.a.createElement("li",{className:"brachiosaurus"===this.state.activePage?v.a.active:"",onClick:function(){return a.scrollTo(a.brachiosaurus)}},"Brachiosaurus"),o.a.createElement("li",{className:"edmontosaurus"===this.state.activePage?v.a.active:"",onClick:function(){return a.scrollTo(a.edmontosaurus)}},"Edmontosaurus"),o.a.createElement("li",{className:"contact"===this.state.activePage?v.a.active:"",onClick:function(){return a.scrollTo(a.contact)}},"Contact"))),o.a.createElement(J,null),o.a.createElement("div",{ref:this.brachiosaurus,className:"pageDividerTop"}),o.a.createElement(ee,{title:"Brachiosaurus",text:"Most Iconic and initially thought to be one of the Largest Dinosaurs."}),o.a.createElement("div",{className:"pageDividerBottom"}),o.a.createElement("div",{ref:this.edmontosaurus,className:"pageDividerTop"}),o.a.createElement(ee,{title:"Edmontosaurus",text:"Herbivore that could move on both Two Legs and Four. Flex."}),o.a.createElement("div",{className:"pageDividerBottom"}),o.a.createElement("div",{ref:this.contact,className:"pageDividerTop"}),o.a.createElement(re,null),o.a.createElement("div",{className:"pageDividerBottom"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports={container:"stickyFooter_container__14X_k",social:"stickyFooter_social__1ywmT",socialIconCircle:"stickyFooter_socialIconCircle__1Dc3b",socialIcon:"stickyFooter_socialIcon__2yTYf",copyright:"stickyFooter_copyright__2fSYU"}}},[[39,1,2]]]);
//# sourceMappingURL=main.49f24124.chunk.js.map