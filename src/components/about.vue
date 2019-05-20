<template>
  <div>
    <div class="slope slope--1"></div>

    <section id="about" class="section--1">
      <div class="section__title section__title--left">
        About
      </div>
      <div class="section__body section_body--about">
        <div class="about-text text">
         <p> Originally from South Florida, I completed my undergraduate degree at the University of Chicago and my master’s degree at University College London. I am a Bristol based visual designer and web developer specializing in designs that are clean, yet warm and engaging for users. I use the latest development technologies to construct modern maintainable digital products. I believe in working transparently and collaboratively with my clients to deliver the best product possible.</p>
          <br>
          <p>I am available for short-term projects as well as full-time contracts. Feel free to get in contact.</p>
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
  text-indent: 50px;
  max-width: 50%;
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
  p{
    margin-left: 5%;
  }
}

.about-image {
  margin: 5%;
}
</style>
