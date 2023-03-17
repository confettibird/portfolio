(function(){"use strict";var t={3978:function(t,e,i){var s=i(7485),n=function(){var t=this,e=t._self._c;return e("div",[e("main-menu"),e("header-section"),e("content",[e("about-section"),e("skills-section"),e("projects-section"),e("contact-section")],1),e("footer-section")],1)},o=[],a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"navigation"}},[e("div",{class:{open:t.displayMenu},attrs:{id:"menu-icon"},on:{click:function(e){return t.toggleMenu()}}},[e("span"),e("span"),e("span"),e("span")]),e("transition",{attrs:{name:"menu","enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[t.displayMenu?e("div",{staticClass:"menu-content"},[e("div",{staticClass:"menu-slope"}),e("div",{staticClass:"menu-center menu-wrapper"},[e("ul",{staticClass:"menu-items",on:{click:t.toggleMenu}},[e("li",[e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#about"}},[t._v("About")])]),e("li",[e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#skills"}},[t._v("Skills")])]),e("li",[e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#projects"}},[t._v("Featured"),e("span",{staticStyle:{color:"rgba(255, 255, 255, 0)"}},[t._v(".")]),t._v("Projects")])]),e("li",[e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"navItem",attrs:{href:"#contact"}},[t._v("Contact")])])])])]):t._e()])],1)},l=[],r={data(){return{displayMenu:!1}},methods:{toggleMenu:function(){this.displayMenu=!this.displayMenu}}},c=r,d=i(1001),u=(0,d.Z)(c,a,l,!1,null,null,null),p=u.exports,v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"section__home"},[t._m(0),e("div",{staticClass:"rightHomePage",style:{backgroundColor:t.color},attrs:{id:"home-page"}},[e("div",{staticClass:"logo logo--mobile"},[t._v("Noelyn Stephens")]),t._m(1),e("div",{staticClass:"text services--mobile"},[t._v("Design & Development")])])])])},f=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"leftHomePage"},[e("div",{staticClass:"logo itemA"},[t._v("Noelyn Stephens")]),e("div",{staticClass:"professions itemB"}),e("div",{staticClass:"itemC"},[e("p",{staticClass:"text services--xl"},[t._v("Design & Development")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"hv-centered homeImg"},[e("div",{staticClass:"box-1"},[e("div",{staticClass:"box-2"})])])}],h={data(){let t=["#fef8e0","#fdf3c8","#fce896","#fad84c"],e=2;return{colors:t,color:t[e],index:e,direction:1}},methods:{nextColor:function(){this.index>=this.colors.length-1&&(this.direction=-1),0==this.index&&(this.direction=1),this.index+=this.direction,this.color=this.colors[this.index]}},mounted:function(){window.setInterval((()=>{this.nextColor()}),3e3)}},m=h,g=(0,d.Z)(m,v,f,!1,null,"3c625c7a",null),_=g.exports,b=function(){var t=this;t._self._c;return t._m(0)},C=[function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"section--1",attrs:{id:"about"}},[e("div",{staticClass:"section__body section_body--about"},[e("div",{staticClass:"about-text text"},[e("p",[e("span",{staticClass:"big"},[t._v("Hiya!")]),t._v(" I am a developer and designer who enjoys building digital products. I have over four years of experience making delightful things for the internet and I would love to assist you in the creation of something engaging. ")])]),e("div",{staticClass:"about-image round thumbnail"},[e("img",{staticClass:"portrait",attrs:{src:"/assets/img/portfolioPhoto.jpg"}})])])])])}],w={},y=w,k=(0,d.Z)(y,b,C,!1,null,"49bf71cc",null),x=k.exports,S=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"section--2",attrs:{id:"skills"}},[e("div",{staticClass:"section__body"},[t._m(0),e("div",{staticClass:"centered skill-grid"},[e("div",{attrs:{id:"wordcloud"}},[e("vue-word-cloud",{attrs:{words:[["three.js",1.5],["JavaScript",2],["Vue.js",2],["WordPress",2],["Photoshop",2.25],["CSS/Sass",2.25],["Figma",1.5],["Illustrator",2.25],["InDesign",1.5]],color:([,t])=>t>3?"#023183":t>2?"#4276CF":t>1?"#056299":"#04808F",spacing:.5,"font-family":"Jost, sans-serif"}})],1)])])])])},j=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"section__title"},[e("h3",{staticStyle:{"font-size":"36px"}},[t._v("Technical Skills")])])}],P=i(979),I=i.n(P),M={components:{vueWordCloud:I()}},D=M,F=(0,d.Z)(D,S,j,!1,null,"755fd563",null),O=F.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"projects-wrapper section--3"},[e("div",{staticClass:"border section--3"},[e("section",{staticClass:"section--3",attrs:{id:"projects"}},[t._m(0),e("div",{staticClass:"centered section__body"},[e("ul",{staticClass:"projects"},t._l(t.cards,(function(i,s){return e("li",{key:s,ref:"images",refInFor:!0,staticClass:"project",on:{click:function(e){return t.showModal(s)}}},[e("img",{style:{objectPosition:i.position},attrs:{src:"assets/img/projects/"+i.front}})])})),0)])])])])},Z=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"section__title"},[e("h3",{staticStyle:{"font-size":"36px"}},[t._v("Featured Projects")])])}];const z=[{front:"hilo.png",position:"center",heading:"Front End Development",back:'<div class="list">\n            <p>Client:</strong> Hi-lo Liquor </p>\n            <ul>\n            <li>Primary developer on a multiple phase WordPress custom build</li>\n            <li>Custom built theme with Tailwind CSS </li>\n            <li>Integrated content customization fields</li>\n            <li>Worked closely with project managers and design team</li>\n            </ul>\n            </div>',link:'<a href="https://hiloliquor.com/" target="_blank">View</a>',flipped:!1},{front:"1924wines.png",position:"center",heading:"Front End Development",back:'<div class="list">\n            <p>Client: Delicato Family Wines</p>\n            <ul>\n            <li> Primary developer on a multi-brand redesign spanning 7 WordPress website builds including two custom builds which I was responsible for</li>\n            <li>Custom built themes with Tailwind CSS </li>\n            <li>Integrated content customization fields</li>\n            <li>Worked closely with project managers and design team</li>\n            </ul>\n            </div>',link:'<a href="https://www.1924wines.com/" target="_blank">View</a>',flipped:!1},{front:"soylent.png",position:"center",heading:"Front End Development",back:'<div class="list">\n      <p>Client: Soylent</p>\n      <ul>\n      <li>Sole developer on a WordPress custom build</li>\n      <li>Integrated content customization fields</li>\n      <li>Integrated a variety of animations requested by the client</li>\n      <li>Worked closely with project managers and design team</li>\n      </ul> \n      </div>',link:'<a href="https://impact.soylent.com/" target="_blank">View</a>',flipped:!1},{front:"euralis_map_editor.png",position:"left",heading:"Front End Development and UX Design",back:'<div class="list">\n            <p>Client: Euralis GmbH</p>\n            <ul>\n            <li>UX Design of internal mapping application that connects to client WordPress Website</li>\n            <li>Implemented using Quasar framework and vue.js</li>\n            </ul>\n            </div>',link:'<a href="https://www.euralis.de/beraterkarte/" target="_blank">View</a>',flipped:!1},{front:"carteblanche.png",position:"left",heading:"UX Design and Visual Design",position:"left",back:'<div class="list">\n            <p>Client: Carte Blanche Wines</p>\n            <ul>\n            <li>Created Type lock-up logo</li>\n            <li>Created UX design using Adobe XD and Balsamiq</li>\n            </ul>\n            </div>',link:'<a href="https://www.carteblanchewines.com/" target="_blank">View</a>',flipped:!1}];var E={data(){return{cards:z,index:0}},methods:{showModal:function(t){this.index=t,this.$modal.show({template:'\n      <div class="inner-wrapper text">\n        <div class="closeModal" @click="closeModal"><img src="assets/img/closeModal.svg"/></div>  \n        <h3 v-html="heading" class="heading"></h3>\n        <div v-html="content" class="details"></div>\n        <div  class="cta-col">\n          <img :src="\'assets/img/projects/\' + image" :style="{ objectPosition: position }" class="img-thumb"/>\n          <p v-html="link" class="devText"></p>\n        </div>\n      </div>\n    ',props:["content","image","heading","link","position"],methods:{closeModal:function(){this.$modal.hideAll()}}},{content:this.cards[t].back,image:this.cards[t].front,heading:this.cards[t].heading,link:this.cards[t].link,position:this.cards[t].position},{height:"auto"},{"before-close":()=>{}})}},computed:{card:function(){return this.cards[this.index]}},mounted(){const t=this.$refs.images[0].querySelector("img").classList;t.add("opacity-full");const e=()=>{t.add("opacity-40"),t.remove("opacity-full")},i=()=>{t.add("opacity-full"),t.remove("opacity-40")};for(const s of this.$refs.images.slice(1))s.addEventListener("mouseenter",e,!1),s.addEventListener("mouseleave",i,!1)}},T=E,V=(0,d.Z)(T,W,Z,!1,null,null,null),A=V.exports,N=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"slope slope--footer"},[e("div",[e("svg",{staticClass:"waves",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto"}},[e("defs",[e("path",{attrs:{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}})]),e("g",{staticClass:"parallax"},[e("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"3",fill:"#F2C407"}})])])])])])},q=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"section--5",attrs:{id:"contact"}},[e("div",{staticClass:"section__body section_body--contact"},[e("div",{staticClass:"hv-centered centered contact-info text"},[e("div",{staticClass:"contact--top"},[e("p",{staticStyle:{"font-size":"24px"}},[t._v("Let's work together")]),e("p",{staticClass:"mail"},[t._v(" hello@"),e("span",{staticStyle:{display:"none"}},[t._v("eat this robot")]),t._v("noelynstephens.com ")]),e("p",{staticStyle:{"font-size":"16px"}},[e("i",{staticClass:"fa fa-map-marker-alt fa-2x"}),e("br"),t._v(" Based in "),e("span",{staticStyle:{"text-decoration":"underline"}},[t._v("Illinois, USA")])])]),e("div",{staticClass:"contact--bottom"},[e("a",{attrs:{href:"https://github.com/confettibird",target:"_blank"}},[e("i",{staticClass:"fab fa-github fa-2x"})])])])])])}],B={},H=B,L=(0,d.Z)(H,N,q,!1,null,"7b749247",null),U=L.exports,X=function(){var t=this;t._self._c;return t._m(0)},$=[function(){var t=this,e=t._self._c;return e("div",[e("footer")])}],R={},J=R,G=(0,d.Z)(J,X,$,!1,null,"7272cfd8",null),Q=G.exports,K={name:"app",components:{mainMenu:p,headerSection:_,aboutSection:x,skillsSection:O,projectsSection:A,contactSection:U,footerSection:Q}},Y=K,tt=(0,d.Z)(Y,n,o,!1,null,null,null),et=tt.exports,it=i(2468),st=i.n(it),nt=i(9803),ot=i.n(nt);s.ZP.use(st()),s.ZP.use(ot()),s.ZP.config.productionTip=!1,new s.ZP({render:t=>t(et)}).$mount("#app")}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,s,n,o){if(!s){var a=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],o=t[d][2];for(var l=!0,r=0;r<s.length;r++)(!1&o||a>=o)&&Object.keys(i.O).every((function(t){return i.O[t](s[r])}))?s.splice(r--,1):(l=!1,o<a&&(a=o));if(l){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[s,n,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,o,a=s[0],l=s[1],r=s[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(r)var d=r(i)}for(e&&e(s);c<a.length;c++)o=a[c],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(d)},s=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(3978)}));s=i.O(s)})();
//# sourceMappingURL=app.7c35feed.js.map