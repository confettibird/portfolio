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
              ref="images"
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
    front: "hilo.jpg",
    position: "center",
    heading: "Front End Development",
    back: `<div class="list">
            <p>Client:</strong> Hi-lo Liquor </p>
            <ul>
            <li>Primary developer on a multiple phase WordPress custom build</li>
            <li>Custom built theme with Tailwind CSS </li>
            <li>Integrated content customization fields</li>
            <li>Worked closely with project managers and design team</li>
            </ul>
            </div>`,
    link: `<a href="https://hiloliquor.com/" target="_blank">View</a>`,
    flipped: false
  },
  {
    front: "1924wines.jpg",
    position: "center",
    heading: "Front End Development",
    back: `<div class="list">
            <p>Client: Delicato Family Wines</p>
            <ul>
            <li> Primary developer on a multi-brand redesign spanning 7 WordPress website builds including two custom builds which I was responsible for</li>
            <li>Custom built themes with Tailwind CSS </li>
            <li>Integrated content customization fields</li>
            <li>Worked closely with project managers and design team</li>
            </ul>
            </div>`,
    link: `<a href="https://www.1924wines.com/" target="_blank">View</a>`,
    flipped: false
  },
  {
    front: "soylent.jpg",
    position: "center",
    heading: "Front End Development",
    back: `<div class="list">
      <p>Client: Soylent</p>
      <ul>
      <li>Sole developer on a WordPress custom build</li>
      <li>Integrated content customization fields</li>
      <li>Integrated a variety of animations requested by the client</li>
      <li>Worked closely with project managers and design team</li>
      </ul> 
      </div>`,
    link: `<a href="https://impact.soylent.com/" target="_blank">View</a>`,
    flipped: false
  },
  {
    front: "euralis_map_editor.jpg",
    position: "left",
    heading: "Front End Development and UX Design",
    back: `<div class="list">
            <p>Client: Euralis GmbH</p>
            <ul>
            <li>UX Design of internal mapping application that connects to client WordPress Website</li>
            <li>Implemented using Quasar framework and vue.js</li>
            </ul>
            </div>`,
    link: `<a href="https://www.euralis.de/beraterkarte/" target="_blank">View</a>`,
    flipped: false
  },
  {
    front: "carteblanche.jpg",
    position: "left",
    heading: "UX Design and Visual Design",
    back: `<div class="list">
            <p>Client: Carte Blanche Wines</p>
            <ul>
            <li>Created Type lock-up logo</li>
            <li>Created UX design using Adobe XD and Balsamiq</li>
            </ul>
            </div>`,
    link: `<a href="https://www.carteblanchewines.com/" target="_blank">View</a>`,
    flipped: false
  },
  {
    front: "cardGame.jpg",
    position: "center",
    heading: "Graphic Design",
    back: `<div class="list">
            <p>Client: Active Transport The Game</p>
            <ul>
            <li>Created logo and style guide for an education board game</li>
            <li>Created using Adobe Illustrator</li>
            </ul>
            </div>`,
    link: `<a href="https://github.com/confettibird/portfolio/raw/master/public/assets/img/projects/allCards.pdf" target="_blank">View</a>`,
    flipped: false
  }
];
export default {
  data() {
    return {
      cards: cards,
      index: 0
    };
  },
  methods: {
    showModal: function(index) {
      this.index = index;
      this.$modal.show(
        {
          template: `
      <div class="inner-wrapper text">
        <div class="closeModal" @click="closeModal"><img src="assets/img/closeModal.svg"/></div>  
        <h3 v-html="heading" class="heading"></h3>
        <div v-html="content" class="details"></div>
        <div  class="cta-col">
          <img :src="'assets/img/projects/' + image" :style="{ objectPosition: position }" class="img-thumb"/>
          <p v-html="link" class="devText"></p>
        </div>
      </div>
    `,
          props: ["content", "image", "heading", "link", "position"],
          methods: {
            closeModal: function() {
              this.$modal.hideAll();
            }
          }
        },
        {
          content: this.cards[index].back,
          image: this.cards[index].front,
          heading: this.cards[index].heading,
          link: this.cards[index].link,
          position: this.cards[index].position
        },
        { height: "auto" },
        { "before-close": () => {} }
      );
    }
  },
  computed: {
    card: function() {
      return this.cards[this.index];
    }
  },
  mounted() {
    const firstImageClassList = this.$refs.images[0].querySelector("img")
      .classList;
    firstImageClassList.add("opacity-full");
    const hover = () => {
      firstImageClassList.add("opacity-40");
      firstImageClassList.remove("opacity-full");
    };
    const noHover = () => {
      firstImageClassList.add("opacity-full");
      firstImageClassList.remove("opacity-40");
    };
    for (const card of this.$refs.images.slice(1)) {
      card.addEventListener("mouseenter", hover, false);
      card.addEventListener("mouseleave", noHover, false);
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
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2rem 4rem;
    @media (max-width: $lrg-screen) {
      padding: 1rem;
    }
    .closeModal {
      cursor: pointer;
      width: 100%;
      text-align: end;
      img {
        width: 30px;
        height: auto;
      }
    }
    h3 {
      border-bottom: solid 1px $color-border;
      margin-bottom: 2rem;
      padding-bottom: 0.5rem;
      width: 100%;
    }
    .details {
      width: 50%;
      @media (max-width: $lrg-screen) {
        width: 100%;
      }
      .list {
        @media (min-width: $lrg-screen) {
          border-right: solid 1px $color-border;
          width: 95%;
          height: 100%;
          padding-bottom: 2rem;
          padding-right: 3rem;
        }
        @media (max-width: $lrg-screen) {
          border-bottom: solid 1px $color-border;
          width: 100%;
          height: auto;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
        }
        p {
          font-weight: bold;
          font-style: italic;
        }
        ul {
          margin-left: 14px; /* key property */
        }
        li {
          list-style: none;
          padding-left: 1.5ch;
        }
        li::marker {
          content: "⭐";
          font-size: 0.9rem;
          height: 2rem;
        }
      }
    }
    .cta-col {
      width: 50%;
      img {
        width: 100%;
        border: 1px solid $color-font;
        @media (max-width: $lrg-screen) {
          display: none;
        }
      }
      .devText {
        margin-top: 2rem;
        border-top: 1px solid $color-border;
        @media (max-width: $lrg-screen) {
          border: none;
          width: max-content;
          margin-top: 0;
        }
        a {
          display: inline-block;
          background-color: #fdf3c8;
          margin-top: 25px;
          padding: 0.75rem 1.5rem;
          text-decoration: none;
          border: 1px solid $color-font;
          min-width: 150px;
          text-align: center;
          color: $color-font;
          transition: color 0.2s ease-in-out;
        }
        a:hover {
          color: $color-base;
          transition: color 0.2s ease-in-out;
        }
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
        transition: opacity 0.5s ease-in-out;
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
  .opacity-40 {
    opacity: 40% !important;
    transition: opacity 0.9s ease-in-out;
  }
  .opacity-full {
    opacity: 100% !important;
    transition: opacity 0.9s ease-in-out;
  }
}
</style>
