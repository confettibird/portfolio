<template>
  <div>
    <div class="slope slope--3"></div>

    <section id="projects" class="section--3">
      <div class="section__title section__title--left">
        Projects
      </div>
      <div class="centered section__body">
          <div id="projects-slider">
            <div @click="backward()" class="leftArrow"></div>
            <div class="projects--list" @click="toggleCard(card, false)" @mouseenter="toggleCard(card, true)">
              <div class="card" key="front">
                <img :src="'assets/img/projects/' + card.front"/>
                <transition name="hover-transition"
                    enter-active-class="animated fadeInUp"
                    leave-active-class="animated fadeOutDown">
                  <div v-show='card.flipped' class="card--back" key="back">
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
    front: "lucho_portfolio.png",
    back:
      'Web Design<br/><ul><li>Photoshop Design mockups</li><li>Prototype HTML &amp; CSS</li></ul><p class="devText">Website currently in development</p>',
    flipped: false
  },
  {
    front: "justyna_and_pedro.png",
    back:
      'Web Design and Development<br/><ul><li>Bespoke Photoshop Design mockups and Illustrator SVGs</li><li>Customised OctoberCMS</li><li>Multilanguage</li><li>HTML &amp; CSS (SASS)</li><li>Custom Vue.js components</li></ul><p class="devText"><a href="https://justynaandpedro.com/" target="_blank">View website</a></p>',
    flipped: false
  },
  {
    front: "lilylaiScreenShot.png",
    back:
      'Web Design and Development<br/><ul><li>Wireframe, typography and color scheme selection</li><li>Custum HTML &amp; CSS (SASS)</li><li>Custom Vue.js components</li><li>Customised HeadlessCMS backend</li></ul><p class="devText"><a href="https://www.lily-lai.com/" target="_blank">View website</a></p>',
    flipped: false
  },
  {
    front: "logosScreenShot.png",
    back:
      'Logo Design<br/><ul><li>Logo mockups, typography, and color selections</li><li>Designed final business logos using Adobe Illustrator</li></ul><p class="devText"><a href="/assets/img/projects/logoCollection.jpg" target="_blank">View collection</a></p>',
    flipped: false
  },
  {
    front: "imageMapper.png",
    back:
      'Web Development<br/><ul><li>Developed application that assists web developers in making images into responsive SVG image maps</li><li>Developed a complete single page Vue.js applicaiton including HTML &amp; CSS (SASS)</li></ul><p class="devText"><a href="https:https://imagemapper.noc.io/" target="_blank">View website</a></p>',
    flipped: false
  },
  {
    front: "inviteClip.png",
    back:
      'Custom Print Invitation<br/><ul><li>Designed space themed invitaiton using Adobe Illustrator</li><li>All SVG objects created from scratch</li></ul><p class="devText"><a href="/assets/img/projects/inviteFull.png" target="_blank">View invite</a></p>',
    flipped: false
  },
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
  box-shadow: 0 0 10px 1px #7C7A6F;
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
