(function(t){function e(e){for(var s,o,l=e[0],r=e[1],c=e[2],u=0,p=[];u<l.length;u++)o=l[u],n[o]&&p.push(n[o][0]),n[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,l=1;l<i.length;l++){var r=i[l];0!==n[r]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"077f":function(t,e,i){"use strict";var s=i("22e0"),n=i.n(s);n.a},"22e0":function(t,e,i){},2856:function(t,e,i){},"39e9":function(t,e,i){"use strict";var s=i("f15b"),n=i.n(s);n.a},"4d5d":function(t,e,i){},"500a":function(t,e,i){"use strict";var s=i("64e5"),n=i.n(s);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("main-menu"),i("header-section"),i("content",[i("about-section"),i("skills-section"),i("projects-section"),i("reviews-section"),i("contact-section")],1),i("footer-section")],1)},a=[],o=(i("f5df"),i("77ed"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"navigation"}},[i("div",{class:{open:t.displayMenu},attrs:{id:"menu-icon"},on:{click:function(e){t.toggleMenu()}}},[i("span"),i("span"),i("span"),i("span")]),i("transition",{attrs:{name:"menu","enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[t.displayMenu?i("div",{staticClass:"menu-content"},[i("div",{staticClass:"menu-slope"}),i("div",{staticClass:"menu-center menu-wrapper"},[i("ul",{staticClass:"menu-items",on:{click:t.toggleMenu}},[i("li",[i("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#about"}},[t._v("About")])]),i("li",[i("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#skills"}},[t._v("Skills")])]),i("li",[i("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#projects"}},[t._v("Projects")])]),i("li",[i("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#reviews"}},[t._v("Reviews")])]),i("li",[i("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#contact"}},[t._v("Contact")])])])])]):t._e()])],1)}),l=[],r={data:function(){return{displayMenu:!1}},methods:{toggleMenu:function(){this.displayMenu=!this.displayMenu}}},c=r,d=(i("500a"),i("2877")),u=Object(d["a"])(c,o,l,!1,null,null,null);u.options.__file="menu.vue";var p=u.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"section__home"},[t._m(0),i("div",{staticClass:"rightHomePage",style:{backgroundColor:t.color},attrs:{id:"home-page"}},[i("div",{staticClass:"logo logo--mobile"},[t._v("Noelyn Stephens")]),i("div",{staticClass:"hv-centered homeImg"}),i("div",{staticClass:"text services--mobile"},[t._v("Visual Design & Web Development")])])])])},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"leftHomePage"},[i("div",{staticClass:"logo itemA"},[t._v("Noelyn Stephens")]),i("div",{staticClass:"professions itemB"}),i("div",{staticClass:"itemC"},[i("p",{staticClass:"text"},[t._v("Visual Design & Web Development")])])])}],m={data:function(){var t=["#fef8e0","#fdf3c8","#fce896","#fad84c"],e=2;return{colors:t,color:t[e],index:e,direction:1}},methods:{nextColor:function(){this.index>=this.colors.length-1&&(this.direction=-1),0==this.index&&(this.direction=1),this.index+=this.direction,this.color=this.colors[this.index]}},mounted:function(){var t=this;window.setInterval(function(){t.nextColor()},5e3)}},h=m,g=(i("c03b"),Object(d["a"])(h,f,v,!1,null,"69e2ee70",null));g.options.__file="header.vue";var _=g.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"slope slope--1"}),i("section",{staticClass:"section--1",attrs:{id:"about"}},[i("div",{staticClass:"section__title section__title--left"},[t._v("\n      About\n    ")]),i("div",{staticClass:"section__body section_body--about"},[i("div",{staticClass:"about-text centered text"},[t._v("\n        Originally from South Florida, I completed my undergraduate degree in philosophy at the University of Chicago and my master’s degree in cognitive psychology and decision making at University College London. I am a Bristol based visual designer and web developer specializing in designs that are clean, yet warm and engaging for users. I am available for short-term projects as well as full-time contracts. Feel free to get in contact.\n      ")]),i("div",{staticClass:"about-image round shadowed thumbnail"},[i("img",{staticClass:"portrait",attrs:{src:"/assets/img/portfolioPhoto.jpg"}})])])])])}],w={},y=w,x=(i("a91a"),Object(d["a"])(y,b,C,!1,null,"471a6382",null));x.options.__file="about.vue";var k=x.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"slope slope--2"}),i("section",{staticClass:"section--2",attrs:{id:"skills"}},[i("div",{staticClass:"section__body"},[i("div",{staticClass:"centered skill-grid"},[i("div",{attrs:{id:"wordcloud"}},[i("vue-word-cloud",{attrs:{words:[["HTML",6],["Sass",5],["JavaScript",3],["CSS",6],["Vue.js",3],["OctoberCMS",3],["Photoshop",5],["WordPress",3],["Headless CMS",4],["Illustrator",6],["InDesign",5],["Logo & Icon Design",3],["Branding",3]],color:function(t){var e=t[1];return e>5?"#d09c2d":e>4?"#64abd6":"#128d9d"},"font-family":"Nunito"}})],1)])]),i("div",{staticClass:"section__title section__title--right"},[t._v("\n      Skills\n    ")])])])},j=[],M=i("c817"),O=i.n(M),I={components:{vueWordCloud:O.a}},D=I,P=(i("f346"),Object(d["a"])(D,S,j,!1,null,"2737f3c5",null));P.options.__file="skills.vue";var T=P.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"slope slope--3"}),i("section",{staticClass:"section--3",attrs:{id:"projects"}},[i("div",{staticClass:"section__title section__title--left"},[t._v("\n      Projects\n    ")]),i("div",{staticClass:"centered section__body"},[i("div",{attrs:{id:"projects-slider"}},[i("div",{staticClass:"leftArrow",on:{click:function(e){t.backward()}}}),i("div",{staticClass:"projects--list",on:{click:function(e){t.toggleCard(t.card,!1)},mouseenter:function(e){t.toggleCard(t.card,!0)}}},[i("div",{key:"front",staticClass:"card"},[i("img",{attrs:{src:"assets/img/projects/"+t.card.front}}),i("transition",{attrs:{name:"hover-transition","enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.card.flipped,expression:"card.flipped"}],key:"back",staticClass:"card--back"},[i("div",{staticClass:"project--description",domProps:{innerHTML:t._s(t.card.back)}})])])],1)]),i("div",{staticClass:"rightArrow",on:{click:function(e){t.forward()}}})])])])])},$=[],A=[{front:"lucho_portfolio.png",back:'Web Design<br/><ul><li>Photoshop Design mockups</li><li>Prototype HTML &amp; CSS</li></ul><p class="devText">Website currently in development</p>',flipped:!1},{front:"justyna_and_pedro.png",back:'Web Design and Development<br/><ul><li>Bespoke Photoshop Design mockups and Illustrator SVGs</li><li>Customised OctoberCMS</li><li>Multilanguage</li><li>HTML &amp; CSS (SASS)</li><li>Custom Vue.js components</li></ul><p class="devText"><a href="https://justynaandpedro.com/" target="_blank">View website</a></p>',flipped:!1},{front:"lilylaiScreenShot.png",back:'Web Design and Development<br/><ul><li>Wireframe, typography and color scheme selection</li><li>Custum HTML &amp; CSS (SASS)</li><li>Custom Vue.js components</li><li>Customised HeadlessCMS backend</li></ul><p class="devText"><a href="https://www.lily-lai.com/" target="_blank">View website</a></p>',flipped:!1},{front:"logosScreenShot.png",back:'Logo Design<br/><ul><li>Logo mockups, typography, and color selections</li><li>Designed final business logos using Adobe Illustrator</li></ul><p class="devText"><a href="/assets/img/projects/logoCollection.jpg" target="_blank">View collection</a></p>',flipped:!1},{front:"imageMapper.png",back:'Web Development<br/><ul><li>Developed application that assists web developers in making images into responsive SVG image maps</li><li>Developed a complete single page Vue.js applicaiton including HTML &amp; CSS (SASS)</li></ul><p class="devText"><a href="http://imagemapper.pageballoon.com/" target="_blank">View website</a></p>',flipped:!1},{front:"inviteClip.png",back:'Custom Print Invitation<br/><ul><li>Designed space themed invitaiton using Adobe Illustrator</li><li>All SVG objects created from scratch</li></ul><p class="devText"><a href="/assets/img/projects/inviteFull.png" target="_blank">View invite</a></p>',flipped:!1}],E={data:function(){return{cards:A,index:0}},methods:{toggleCard:function(t,e){t.flipped=!!e||!t.flipped},forward:function(){this.card.flipped=!1,this.index>=this.cards.length-1?this.index=0:this.index+=1},backward:function(){this.card.flipped=!1,this.index>0?this.index-=1:this.index=this.cards.length-1}},computed:{card:function(){return this.cards[this.index]}}},L=E,H=(i("7349"),Object(d["a"])(L,V,$,!1,null,null,null));H.options.__file="projects.vue";var N=H.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"slope slope--4"}),i("section",{staticClass:"section--4",attrs:{id:"reviews"}},[i("div",{staticClass:"section__title section__title--right"},[t._v("\n      Reviews\n    ")]),i("div",{staticClass:"section__body section_body--reviews"},[i("div",{staticClass:"hv-centered centered contact-info text"},[i("div",{staticClass:"contact--top"},[i("p",{staticClass:"review"},[t._v("\n            "+t._s(t.review.text)+"\n          ")]),i("p",[t._v("-"+t._s(t.review.name))])]),t._l(t.reviews,function(e,s){return i("div",{key:e.id,class:["dots",s==t.index?"dot-active":""],on:{click:function(e){t.index=s}}})})],2)])])])},B=[],J={data:function(){return{reviews:[{text:"Noelyn created an informative, easy to navigate, and beautiful website for us, which was also translated into three different languages. Because we live in different cities, communication was key and she never let us down. Always ready to help, with strong attention to details, she guided us through the whole process and made complicated things feel so easy. Her personalised graphics added a special touch to the site and fit nicely with our wedding style.",name:"Justyna W."},{text:"Noelyn was very efficient and patient to work with. She quickly understood the aesthetic I was going after and gave me lots of options. This felt like a collaboration, and I am so appreciative of the time she took to walk me through every step.",name:"Lily L."}],index:0}},computed:{review:function(){return this.reviews[this.index]}}},R=J,U=(i("077f"),Object(d["a"])(R,W,B,!1,null,"4be74420",null));U.options.__file="review.vue";var z=U.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"slope slope--5"}),i("section",{staticClass:"section--5",attrs:{id:"contact"}},[i("div",{staticClass:"section__title section__title--left"},[t._v("\n      Contact\n    ")]),i("div",{staticClass:"section__body section_body--contact"},[i("div",{staticClass:"hv-centered centered contact-info text"},[i("div",{staticClass:"contact--top"},[i("p",{staticStyle:{"font-size":"24px"}},[t._v("Let's work together:")]),i("p",{staticClass:"mail"},[t._v("\n            hello@"),i("span",{staticStyle:{display:"none"}},[t._v("eat this robot")]),t._v("noelynstephens.com\n          ")]),i("p",{staticStyle:{"font-size":"16px"}},[i("i",{staticClass:"fa fa-map-marker-alt fa-2x"}),i("br"),t._v("\n            Bristol, UK\n          ")])]),i("div",{staticClass:"contact--bottom"},[i("a",{attrs:{href:"https://twitter.com/confettibird",target:"_blank"}},[i("i",{staticClass:"fab fa-twitter fa-2x"})]),i("a",{attrs:{href:"https://www.instagram.com/nociostudios",target:"_blank"}},[i("i",{staticClass:"fab fa-instagram fa-2x"})]),i("a",{attrs:{href:"https://github.com/confettibird",target:"_blank"}},[i("i",{staticClass:"fab fa-github fa-2x"})])])])])])])}],q={},K=q,Q=(i("39e9"),Object(d["a"])(K,F,G,!1,null,"d772d64a",null));Q.options.__file="contact.vue";var X=Q.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("footer",[i("div",{staticClass:"slope slope--6"})])])}],tt={},et=tt,it=(i("576b"),Object(d["a"])(et,Y,Z,!1,null,"78ed2f5b",null));it.options.__file="footer.vue";var st=it.exports,nt={name:"app",components:{mainMenu:p,headerSection:_,aboutSection:k,skillsSection:T,projectsSection:N,reviewsSection:z,contactSection:X,footerSection:st}},at=nt,ot=(i("5c0b"),Object(d["a"])(at,n,a,!1,null,null,null));ot.options.__file="App.vue";var lt=ot.exports,rt=i("b25f"),ct=i.n(rt);s["a"].use(ct.a),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(lt)}}).$mount("#app")},"576b":function(t,e,i){"use strict";var s=i("979d"),n=i.n(s);n.a},"5c0b":function(t,e,i){"use strict";var s=i("2856"),n=i.n(s);n.a},"64e5":function(t,e,i){},7349:function(t,e,i){"use strict";var s=i("f1e4"),n=i.n(s);n.a},"784f":function(t,e,i){},8410:function(t,e,i){},"979d":function(t,e,i){},a91a:function(t,e,i){"use strict";var s=i("4d5d"),n=i.n(s);n.a},c03b:function(t,e,i){"use strict";var s=i("784f"),n=i.n(s);n.a},f15b:function(t,e,i){},f1e4:function(t,e,i){},f346:function(t,e,i){"use strict";var s=i("8410"),n=i.n(s);n.a}});
//# sourceMappingURL=app.f6c0b9da.js.map