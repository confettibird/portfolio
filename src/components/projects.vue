<template>
  <div class="projects-wrapper section--3">
    <div class="border section--3">
      <section id="projects" class="section--3">
        <div class="section__title">
          <h3 style="font-size:36px">Featured Projects</h3>
          <!-- <span class="box-1"> </span> -->
        </div>
        <div class="centered section__body">
          <ul class="projects">
            <li
              class="project"
              v-for="(card, index) in cards"
              :key="index"
              @click="showModal(index)"
            >
              <img
                :src="'assets/img/projects/' + card.front"
                :style="{ objectPosition: card.position }"
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
const cards = [
  {
    front: "hilo.png",
    position: "center",
    back: `<div class="list">
            <p>Front End Development</p>
            <ul>
            <li>Wireframe, typography, and color scheme selection</li>
            <li>Bespoke HTML &amp; CSS (SASS)</li>
            <li>Custom Vue.js components</li>
            <li>Customized HeadlessCMS backend</li>
            </ul>
            <p class="devText"><a href="https://hiloliquor.com/" target="_blank">View website</a></p>
            </div>`,
    flipped: false
  },
  {
    front: "1924wines.png",
    position: "center",
    back: `<div class="list">
            <p>Front End Development</p>
            <ul>
            <li>Lead developer of custom Wordpress blog design implementation</li>
            <li>Bug fixes and maintenance tasks</li>
            <li>Expanded sections of corporate website</li>
            <li>Assisted in SEO audit and optimization</li>
            </ul>
            <p class="devText"><a href="https://www.1924wines.com/" target="_blank">View more</a></p>
            </div>`,
    flipped: false
  },
  {
    front: "soylent.png",
    position: "center",
    back: `<div class="list">
      <p>Front End Development</p>
      <ul>
      <li>Photoshop Design mockups</li>
      <li>Color scheme and typography selection</li>
      </ul> 
      <p class="devText"><a href="https://impact.soylent.com/" target="_blank">View more</a></p>
      </div>`,
    flipped: false
  },
  {
    front: "euralis_map_editor.png",
    position: "left",
    back: `<div class="list">
            <p>Front End Development and UX Design</p>
            <ul>
            <li>UX Design of internal application that displays consultants according to region</li>
            <li>Implemented design using Quasar framework and vue.js</li>
            </ul>
            <p class="devText"><a href="https://www.euralis.de/beraterkarte/" target="_blank">View company</a></p>
            </div>`,
    flipped: false
  }
  // {
  //   front: "euralis_portal.png",
  //   position: "left",
  //   back: `Front End Development and UX Design
  //           <ul>
  //           <li>UX Design of "Mais and More! GOLD" customer portal for tracking customer rewards</li>
  //           <li>Developed design using Quasar framework and vue.js</li>
  //           <li>Implementation allowed the company to automate customer reward program</li>
  //           </ul>
  //           <p class="devText"><a href="https://www.euralis.de/beraterkarte/" target="_blank">View more</a></p>`,
  //   flipped: false
  // },
  // {
  //   front: "carteblanche.png",
  //   position: "left",
  //   back: `Logo Design and UX Design
  //       <ul>
  //       <li>Created Type lock-up logo consistent with brand's refined, contemporary image</li>
  //       <li>Created UX design using Adobe XD and Balsamiq</li>
  //       </ul>
  //       <p class="devText"><a href="https://www.carteblanchewines.com/" target="_blank">View more</a></p>`,
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
    showModal: function(index) {
      this.index = index;
      this.$modal.show(
        {
          template: `
      <div class="inner-wrapper">
        <h3>This is created inline</h3>
        <div v-html="content" class="details"></div>
      </div>
    `,
          props: ["content"]
        },
        { content: this.cards[index].back },
        { height: "auto" },
        { "before-close": event => {} }
      );
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
.vm--container {
  .vm--modal {
    width: 80vw !important;
    height: 90vh !important;
    left: 0 !important;
    margin: auto;
  }
  .inner-wrapper {
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;
    li {
      list-style: none;
    }
    h3 {
      border-bottom: solid 1px $color-border;
      margin-bottom: 2rem;
    }
    .details {
      width: 100%;
      .list {
        width: 50%;
        border-right: solid 1px $color-border;
      }
    }
  }
}
.projects-wrapper {
  .border {
    border-top: 1px solid $color-border;
    border-bottom: 1px solid $color-border;
    margin: 0 2rem;
  }
}
#projects {
  position: relative;
  flex-direction: column;
  padding: 5rem 0 10rem;

  .section__title {
    display: flex;
    justify-content: end;
    font-size: 3rem;
    text-align: right;
    width: 79.5%;
    margin: 1rem auto 3rem;
    position: relative;
    h3 {
      z-index: 10;
    }
    .box-1 {
      position: absolute;
      background-color: #64faea;
      height: 5px;
      width: 33%;
      right: 0;
      top: 27px;
    }
  }
  .centered.section__body {
    max-width: 81.5% !important;
  }
  .projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    row-gap: 15px;
    padding: 20px 10px;
    .project {
      list-style: none;
      width: 32%;
      border-radius: 5px;
      height: max-content;
      background-color: $color-light-3;
      cursor: pointer;
      img {
        width: 100%;
        object-fit: cover;
        // border-radius: 5px;
        aspect-ratio: 3/2;
        border: 1px solid $color-font;
        opacity: 40%;
      }
      img:hover {
        opacity: 100%;
        transition: opacity 0.5s ease-in-out;
      }
      @media (max-width: $lrg-screen) {
        width: 100%;
      }
    }
  }
  #projects::before {
    content: "before";
    height: 10px;
    width: 800px;
    background-color: $color-border;
    position: absolute;
    color: red;
  }
  #projects::after {
    content: "after";
    height: 10px;
    width: 80vw;
    background-color: $color-border;
    position: absolute;
    color: red;
  }
}
</style>
