<template>
  <div>
    <div class="slope slope--3"></div>

    <section id="projects" class="section--3">
      <div class="section__title section__title--left">Featured</div>
      <div class="centered section__body">
        <div id="projects-slider">
          <div @click="backward()" class="leftArrow"></div>
          <div
            class="projects--list"
            @click="toggleCard(card, false)"
            @mouseenter="toggleCard(card, true)"
          >
            <div class="card" key="front">
              <img :src="'assets/img/projects/' + card.front" />
              <transition
                name="hover-transition"
                enter-active-class="animated fadeInUp"
                leave-active-class="animated fadeOutDown"
              >
                <div v-show="card.flipped" class="card--back" key="back">
                  <div class="project--description" v-html="card.back"></div>
                </div>
              </transition>
            </div>
          </div>
          <div @click="forward()" class="rightArrow"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const cards = [
  {
    front: "lilylaiScreenShot.png",
    back: `Web Design and Development
            <ul>
            <li>Wireframe, typography, and color scheme selection</li>
            <li>Bespoke HTML &amp; CSS (SASS)</li>
            <li>Custom Vue.js components</li>
            <li>Customized HeadlessCMS backend</li>
            </ul>
            <p class="devText"><a href="https://www.lily-lai.com/" target="_blank">View website</a></p>`,
    flipped: false
  },
  {
    front: "seek.png",
    back: `Front End Development
            <ul>
            <li>Lead developer of custom Wordpress blog design implementation</li>
            <li>Bug fixes and maintenance tasks</li>
            <li>Expanded sections of corporate website</li>
            <li>Assisted in SEO audit and optimization</li>
            </ul>
            <p class="devText"><a href="https://www.seekcapital.com/blog/" target="_blank">View more</a></p>`,
    flipped: false
  },
  {
    front: "lucho_portfolio.png",
    back: `Web Design
      <ul>
      <li>Photoshop Design mockups</li>
      <li>Color scheme and typography selection</li>
      </ul>
      <p class="devText">Website currently in development</p>`,
    flipped: false
  },
  // {
  //   front: "euralis_map_editor.png",
  //   back: `Front End Development and UX Design
  //           <ul>
  //           <li>UX Design of internal application that displays consultants according to region</li>
  //           <li>Implemented design using Quasar framework and vue.js</li>
  //           </ul>
  //           <p class="devText"><a href="https://www.euralis.de/beraterkarte/" target="_blank">View company</a></p>`,
  //   flipped: false
  // },
  {
    front: "euralis_portal.png",
    back: `Front End Development and UX Design
            <ul>
            <li>UX Design of "Mais and More! GOLD" customer portal for tracking customer rewards</li>
            <li>Developed design using Quasar framework and vue.js</li>
            <li>Implementation allowed the company to automate customer reward program</li>
            </ul>
            <p class="devText"><a href="https://www.euralis.de/beraterkarte/" target="_blank">View more</a></p>`,
    flipped: false
  },
  {
    front: "carteblanche.png",
    back: `Logo Design and UX Design
        <ul>
        <li>Created Type lock-up logo consistent with brand's refined, contemporary image</li>
        <li>Created UX design using Adobe XD and Balsamiq</li>
        </ul>
        <p class="devText"><a href="https://www.carteblanchewines.com/" target="_blank">View more</a></p>`,
    flipped: false
  },
  {
    front: "hrc_cover.png",
    back: `Web Development and UX design
      <ul>
      <li>Modernized and customized Wordpress theme for client website</li>
      <li>Designed UX for intranet which allows members to sign up for lessons, announce events, organize equipment trades, etc.</li>
      <li>Developed design using Quasar framework and vue.js</li>
      </ul>
      <p class="devText"><a href="https://hamburger-ruderinnen.de/" target="_blank">View website</a></p>`,
    flipped: false
  },
  {
    front: "spivey.png",
    back: `Web Development, UX design, Visual Design
      <ul>
       <li>Wireframe, typography, and color scheme selection</li>
      <li>Bespoke HTML &amp; CSS (SASS)</li>
      <li>Custom Vue.js components</li>
      <li>Customized OctoberCMS backend</li>
      </ul>
      <p class="devText"><a href="https://spivey.wine/" target="_blank">View website</a></p>`,
    flipped: false
  }
  // {
  //   front: "imageMapper.png",
  //   back:
  //     `Web Development and UX design
  //     <ul>
  //     <li>Developed application that assists web developers in making images into responsive SVG image maps</li>
  //     <li>Developed a complete single page Vue.js application including HTML &amp; CSS (SASS)</li>
  //     </ul>
  //     <p class="devText"><a href="https://imagemapper.noc.io/" target="_blank">View website</a></p>`,
  //   flipped: false
  // }
];
export default {
  data() {
    return {
      cards: cards,
      index: 0
    };
  },
  methods: {
    toggleCard: function(card, hover) {
      if (hover) {
        card.flipped = true;
      } else {
        card.flipped = !card.flipped;
      }
    },
    forward: function() {
      this.card.flipped = false;
      if (this.index >= this.cards.length - 1) {
        this.index = 0;
      } else {
        this.index += 1;
      }
    },
    backward: function() {
      this.card.flipped = false;
      if (this.index > 0) {
        this.index -= 1;
      } else {
        this.index = this.cards.length - 1;
      }
    }
  },
  computed: {
    card: function() {
      return this.cards[this.index];
    }
  }
};
</script>

<style lang="scss">
#projects-slider {
  display: grid;
  grid-template-columns: [col1-start]15% [col1-end]60% [col2-start]15% [col2-end];
  grid-template-rows: auto;
  align-content: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  // center it vertically
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  @media (min-width: $lrg-screen) {
    grid-template-columns: [col1-start]15% [col1-end]590px [col2-start]15% [col2-end];
  }
}
.leftArrow {
  background-image: url("/assets/img/svg/sliderArrowLeft.svg");
  background-position: right;
  justify-self: end;
}
.rightArrow {
  background-image: url("/assets/img/svg/sliderArrowRight.svg");
  background-position: left;
  justify-self: start;
}

.rightArrow,
.leftArrow {
  cursor: pointer;
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: 30%;
  align-self: center;
  @media (max-width: $md-screen) {
    width: 75px;
    height: 75px;
  }
  @media (max-width: $sm-screen) {
    width: 50px;
    height: 50px;
  }
}

.projects--list {
  width: 95%;
  max-width: 590px;
  margin: 0 auto;
  position: relative;
  align-self: center;
  overflow: hidden;
  justify-self: center;
  box-shadow: 0 0 10px 1px #7c7a6f;
  border-radius: 5px;
  .card {
    position: relative;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    img {
      vertical-align: bottom;
      width: 100%;
      border-radius: 5px;
    }
  }
  .card--back {
    border-radius: 5px;
    background-color: rgba(254, 248, 224, 0.9);
    min-height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    .project--description {
      text-align: center;
      font-size: 2vw;
      color: $color-font;
      font-family: $font-content;
      margin: 5%;
      @media (min-width: $xtra-lrg-screen) {
        font-size: 1.5vw;
      }

      ul {
        display: inline-block;
        text-align: left;
        margin: 5%;
      }

      li {
        font-size: 1.7vw;
        list-style-position: inside;
        margin-left: 25px;
        @media (min-width: $xtra-lrg-screen) {
          font-size: 1.25vw;
        }
      }

      .devText {
        font-size: 1.4vw;
        a {
          text-decoration: none;
          color: $color-font;
          &:hover,
          &:link,
          &:active {
            color: $color-font;
          }
        }
        @media (min-width: $xtra-lrg-screen) {
          font-size: 1.1vw;
        }
      }
    }
  }
}
</style>
