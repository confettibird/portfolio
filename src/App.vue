<template>
  <div>
    <main-menu></main-menu>
    <header-section></header-section>
    <content>
      <about-section></about-section>
      <skills-section></skills-section>
      <projects-section></projects-section>
      <!-- <reviews-section></reviews-section> -->
      <contact-section></contact-section>
    </content>
    <footer-section></footer-section>
  </div>
</template>

<script>
import "normalize.css";
import "animate.css";
import mainMenu from "@/components/menu.vue";
import headerSection from "@/components/header.vue";
import aboutSection from "@/components/about.vue";
import skillsSection from "@/components/skills.vue";
import projectsSection from "@/components/projects.vue";
import contactSection from "@/components/contact.vue";
import footerSection from "@/components/footer.vue";

export default {
  name: "app",
  components: {
    mainMenu,
    headerSection,
    aboutSection,
    skillsSection,
    projectsSection,
    // reviewsSection,
    contactSection,
    footerSection
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Habibi|Pavanam|Rubik");
@import url("https://fonts.googleapis.com/css?family=Dosis|Nunito");
@import url("https://fonts.googleapis.com/css2?family=Jost");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

@import "@/scss/utils.scss", "@/scss/layout.scss";
</style>
