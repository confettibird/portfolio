(function(e){function t(t){for(var s,o,r=t[0],l=t[1],c=t[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],s=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=i[0]))}return e}var s={},n={app:0},a=[];function o(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=s,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(i,s,function(t){return e[t]}.bind(null,s));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"065c":function(e,t,i){"use strict";i("c8d9")},"1d9a":function(e,t,i){},"27be":function(e,t,i){},"42b6":function(e,t,i){"use strict";i("27be")},"458f":function(e,t,i){},"500a":function(e,t,i){"use strict";i("ce99")},"529c":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("main-menu"),i("header-section"),i("content",[i("about-section"),i("skills-section"),i("projects-section"),i("reviews-section"),i("contact-section")],1),i("footer-section")],1)},a=[],o=(i("f5df1"),i("77ed"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"navigation"}},[i("div",{class:{open:e.displayMenu},attrs:{id:"menu-icon"},on:{click:function(t){return e.toggleMenu()}}},[i("span"),i("span"),i("span"),i("span")]),i("transition",{attrs:{name:"menu","enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[e.displayMenu?i("div",{staticClass:"menu-content"},[i("div",{staticClass:"menu-slope"}),i("div",{staticClass:"menu-center menu-wrapper"},[i("ul",{staticClass:"menu-items",on:{click:e.toggleMenu}},[i("li",[i("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#about"}},[e._v("About")])]),i("li",[i("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#skills"}},[e._v("Skills")])]),i("li",[i("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#projects"}},[e._v("Projects")])]),i("li",[i("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#reviews"}},[e._v("Reviews")])]),i("li",[i("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#contact"}},[e._v("Contact")])])])])]):e._e()])],1)}),r=[],l={data:function(){return{displayMenu:!1}},methods:{toggleMenu:function(){this.displayMenu=!this.displayMenu}}},c=l,d=(i("500a"),i("2877")),u=Object(d["a"])(c,o,r,!1,null,null,null),p=u.exports,f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("div",{staticClass:"section__home"},[e._m(0),i("div",{staticClass:"rightHomePage",style:{backgroundColor:e.color},attrs:{id:"home-page"}},[i("div",{staticClass:"logo logo--mobile"},[e._v("Noelyn Stephens")]),i("div",{staticClass:"hv-centered homeImg"}),i("div",{staticClass:"text services--mobile"},[e._v(" Visual Design & Web Development ")])])])])},v=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"leftHomePage"},[i("div",{staticClass:"logo itemA"},[e._v("Noelyn Stephens")]),i("div",{staticClass:"professions itemB"}),i("div",{staticClass:"itemC"},[i("p",{staticClass:"text services--xl"},[e._v("Visual Design & Web Development")])])])}],m={data:function(){var e=["#fef8e0","#fdf3c8","#fce896","#fad84c"],t=2;return{colors:e,color:e[t],index:t,direction:1}},methods:{nextColor:function(){this.index>=this.colors.length-1&&(this.direction=-1),0==this.index&&(this.direction=1),this.index+=this.direction,this.color=this.colors[this.index]}},mounted:function(){var e=this;window.setInterval((function(){e.nextColor()}),5e3)}},h=m,b=(i("065c"),Object(d["a"])(h,f,v,!1,null,"63f839de",null)),g=b.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"slope slope--1"}),i("section",{staticClass:"section--1",attrs:{id:"about"}},[i("div",{staticClass:"section__title section__title--left"},[e._v(" About ")]),i("div",{staticClass:"section__body section_body--about"},[i("div",{staticClass:"about-text text"},[i("p",[e._v(" Originally from South Florida, I completed my undergraduate degree at the University of Chicago and my master’s degree at University College London. I am a Bristol based visual designer and web developer specializing in designs that are clean, yet warm and engaging for users. I use the latest development technologies to construct modern maintainable digital products. I believe in working transparently and collaboratively with my clients to deliver the best product possible. ")]),i("br"),i("p",[e._v(" I am available for short-term projects as well as full-time contracts. Feel free to get in contact. ")])]),i("div",{staticClass:"about-image round shadowed thumbnail"},[i("img",{staticClass:"portrait",attrs:{src:"/assets/img/portfolioPhoto.jpg"}})])])])])}],C={},y=C,k=(i("b0c9"),Object(d["a"])(y,_,w,!1,null,"97b5f3c2",null)),x=k.exports,S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"slope slope--2"}),i("section",{staticClass:"section--2",attrs:{id:"skills"}},[i("div",{staticClass:"section__body"},[i("div",{staticClass:"centered skill-grid"},[i("div",{attrs:{id:"wordcloud"}},[i("vue-word-cloud",{attrs:{words:[["HTML",5],["JavaScript",4],["Vue.js",4],["Wordpress",3],["Photoshop",4],["REST APIs",3],["CSS/Sass",5],["Adobe XD",4],["Illustrator",4],["InDesign",3]],color:function(e){var t=e[1];return t>4?"#d09c2d":t>3?"#64abd6":"#128d9d"},spacing:".2","font-family":"Nunito"}})],1)])]),i("div",{staticClass:"section__title section__title--right"},[e._v("Skills")])])])},j=[],O=i("2d8a"),D=i.n(O),M={components:{vueWordCloud:D.a}},I=M,E=(i("ccbb"),Object(d["a"])(I,S,j,!1,null,"b62c782a",null)),T=E.exports,P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"slope slope--3"}),i("section",{staticClass:"section--3",attrs:{id:"projects"}},[i("div",{staticClass:"section__title section__title--left"},[e._v("Featured")]),i("div",{staticClass:"centered section__body"},[i("div",{attrs:{id:"projects-slider"}},[i("div",{staticClass:"leftArrow",on:{click:function(t){return e.backward()}}}),i("div",{staticClass:"projects--list",on:{click:function(t){return e.toggleCard(e.card,!1)},mouseenter:function(t){return e.toggleCard(e.card,!0)}}},[i("div",{key:"front",staticClass:"card"},[i("img",{attrs:{src:"assets/img/projects/"+e.card.front}}),i("transition",{attrs:{name:"hover-transition","enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.card.flipped,expression:"card.flipped"}],key:"back",staticClass:"card--back"},[i("div",{staticClass:"project--description",domProps:{innerHTML:e._s(e.card.back)}})])])],1)]),i("div",{staticClass:"rightArrow",on:{click:function(t){return e.forward()}}})])])])])},W=[],$=[{front:"lilylaiScreenShot.png",back:'Web Design and Development\n            <ul>\n            <li>Wireframe, typography, and color scheme selection</li>\n            <li>Bespoke HTML &amp; CSS (SASS)</li>\n            <li>Custom Vue.js components</li>\n            <li>Customized HeadlessCMS backend</li>\n            </ul>\n            <p class="devText"><a href="https://www.lily-lai.com/" target="_blank">View website</a></p>',flipped:!1},{front:"seek.png",back:'Front End Development\n            <ul>\n            <li>Lead developer of custom Wordpress blog design implementation</li>\n            <li>Bug fixes and maintenance tasks</li>\n            <li>Expanded sections of corporate website</li>\n            <li>Assisted in SEO audit and optimization</li>\n            </ul>\n            <p class="devText"><a href="https://www.seekcapital.com/blog/" target="_blank">View more</a></p>',flipped:!1},{front:"lucho_portfolio.png",back:'Web Design\n      <ul>\n      <li>Photoshop Design mockups</li>\n      <li>Color scheme and typography selection</li>\n      </ul>\n      <p class="devText">Website currently in development</p>',flipped:!1},{front:"euralis_portal.png",back:'Front End Development and UX Design\n            <ul>\n            <li>UX Design of "Mais and More! GOLD" customer portal for tracking customer rewards</li>\n            <li>Developed design using Quasar framework and vue.js</li>\n            <li>Implementation allowed the company to automate customer reward program</li>\n            </ul>\n            <p class="devText"><a href="https://www.euralis.de/beraterkarte/" target="_blank">View more</a></p>',flipped:!1},{front:"carteblanche.png",back:'Logo Design and UX Design\n        <ul>\n        <li>Created Type lock-up logo consistent with brand\'s refined, contemporary image</li>\n        <li>Created UX design using Adobe XD and Balsamiq</li>\n        </ul>\n        <p class="devText"><a href="https://www.carteblanchewines.com/" target="_blank">View more</a></p>',flipped:!1},{front:"hrc_cover.png",back:'Web Development and UX design\n      <ul>\n      <li>Modernized and customized Wordpress theme for client website</li>\n      <li>Designed UX for intranet which allows members to sign up for lessons, announce events, organize equipment trades, etc.</li>\n      <li>Developed design using Quasar framework and vue.js</li>\n      </ul>\n      <p class="devText"><a href="https://hamburger-ruderinnen.de/" target="_blank">View website</a></p>',flipped:!1},{front:"spivey.png",back:'Web Development, UX design, Visual Design\n      <ul>\n       <li>Wireframe, typography, and color scheme selection</li>\n      <li>Bespoke HTML &amp; CSS (SASS)</li>\n      <li>Custom Vue.js components</li>\n      <li>Customized OctoberCMS backend</li>\n      </ul>\n      <p class="devText"><a href="https://spivey.wine/" target="_blank">View website</a></p>',flipped:!1}],A={data:function(){return{cards:$,index:0}},methods:{toggleCard:function(e,t){e.flipped=!!t||!e.flipped},forward:function(){this.card.flipped=!1,this.index>=this.cards.length-1?this.index=0:this.index+=1},backward:function(){this.card.flipped=!1,this.index>0?this.index-=1:this.index=this.cards.length-1}},computed:{card:function(){return this.cards[this.index]}}},V=A,L=(i("7349"),Object(d["a"])(V,P,W,!1,null,null,null)),N=L.exports,U=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"slope slope--4"}),i("section",{staticClass:"section--4",attrs:{id:"reviews"}},[i("div",{staticClass:"section__title section__title--right"},[e._v(" Reviews ")]),i("div",{staticClass:"section__body section_body--reviews"},[i("div",{staticClass:"hv-centered centered contact-info text"},[i("div",{staticClass:"contact--top"},[i("p",{staticClass:"review"},[e._v(" "+e._s(e.review.text)+" ")]),i("p",[e._v("-"+e._s(e.review.name))])]),e._l(e.reviews,(function(t,s){return i("div",{key:t.id,class:["dots",s==e.index?"dot-active":""],on:{click:function(t){e.index=s}}})}))],2)])])])},z=[],X={data:function(){return{reviews:[{text:"Noelyn created an informative, easy to navigate, and beautiful website for us, which was also translated into three different languages. Because we live in different cities, communication was key and she never let us down. Always ready to help, with strong attention to details, she guided us through the whole process and made complicated things feel so easy. Her personalised graphics added a special touch to the site and fit nicely with our wedding style.",name:"Justyna W."},{text:"Noelyn was very efficient and patient to work with. She quickly understood the aesthetic I was going after and gave me lots of options. This felt like a collaboration, and I am so appreciative of the time she took to walk me through every step.",name:"Lily L."}],index:0}},computed:{review:function(){return this.reviews[this.index]}}},B=X,H=(i("42b6"),Object(d["a"])(B,U,z,!1,null,"551a5078",null)),F=H.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},J=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"slope slope--5"}),i("section",{staticClass:"section--5",attrs:{id:"contact"}},[i("div",{staticClass:"section__title section__title--left"},[e._v(" Contact ")]),i("div",{staticClass:"section__body section_body--contact"},[i("div",{staticClass:"hv-centered centered contact-info text"},[i("div",{staticClass:"contact--top"},[i("p",{staticStyle:{"font-size":"24px"}},[e._v("Let's work together:")]),i("p",{staticClass:"mail"},[e._v(" hello@"),i("span",{staticStyle:{display:"none"}},[e._v("eat this robot")]),e._v("noelynstephens.com ")]),i("p",{staticStyle:{"font-size":"16px"}},[i("i",{staticClass:"fa fa-map-marker-alt fa-2x"}),i("br"),e._v(" Bristol, UK ")])]),i("div",{staticClass:"contact--bottom"},[i("a",{attrs:{href:"https://twitter.com/confettibird",target:"_blank"}},[i("i",{staticClass:"fab fa-twitter fa-2x"})]),i("a",{attrs:{href:"https://github.com/confettibird",target:"_blank"}},[i("i",{staticClass:"fab fa-github fa-2x"})])])])])])])}],q={},Q=q,G=(i("b4c5"),Object(d["a"])(Q,R,J,!1,null,"732a15ac",null)),K=G.exports,Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("footer",[i("div",{staticClass:"slope slope--6"})])])}],ee={},te=ee,ie=Object(d["a"])(te,Y,Z,!1,null,"04028ccf",null),se=ie.exports,ne={name:"app",components:{mainMenu:p,headerSection:g,aboutSection:x,skillsSection:T,projectsSection:N,reviewsSection:F,contactSection:K,footerSection:se}},ae=ne,oe=(i("5c0b"),Object(d["a"])(ae,n,a,!1,null,null,null)),re=oe.exports,le=i("b25f"),ce=i.n(le);s["a"].use(ce.a),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(re)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";i("458f")},7349:function(e,t,i){"use strict";i("529c")},a845:function(e,t,i){},b0c9:function(e,t,i){"use strict";i("e2d3")},b4c5:function(e,t,i){"use strict";i("a845")},c8d9:function(e,t,i){},ccbb:function(e,t,i){"use strict";i("1d9a")},ce99:function(e,t,i){},e2d3:function(e,t,i){}});
//# sourceMappingURL=app.3fb8d851.js.map