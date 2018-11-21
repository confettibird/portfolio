<template>
  <div>
    <div class="slope slope--1"></div>

    <section id="about" class="section--1">
      <div class="section__title section__title--left">
        About
      </div>
      <div class="section__body section_body--about">
        <div class="about-text centered text">
          Originally from South Florida, I am a visual designer and web developer currently based in the UK. I specialize in creating designs that are clean, yet warm and engaging for users. I am available for freelance projects as well as full-time contracts. Have a look at some of my recent projects and feel free to get in contact.
        </div>
        <div class="about-image round shadowed thumbnail">
          <img src="/assets/img/portfolioPhoto.jpg" class="portrait" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section_body--about {
  min-height: 400px;
}

.about-text {
  max-width: 50%;
  // margin-top: 50%;
  // margin-bottom: 50%;
  margin-left: 5%;
  @media (max-width: $md-screen) {
    margin-top: 0;
    margin-bottom: 5%;
    margin-left: 0;
  }
  @media (max-width: $sm-screen) {
    max-width: 80%;
    margin-top: 0;
    margin-bottom: 5%;
  }
}

.about-image {
  margin: 5%;
}
</style>
