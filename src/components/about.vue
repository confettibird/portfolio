<template>
  <div>
    <!-- <div class="slope slope--1"></div> -->

    <section id="about" class="section--1">
      <div class="section__body section_body--about">
        <div class="about-text text">
          <p>
            <span class="big">Hiya!</span> I'm Noelyn and I'm a web developer who is proficient in UI/UX design research. I have over five years of experience building bespoke digital interfaces for small to large organizations. I love making delightful things for the internet; feel free to send me an email if you'd like to work together: hello@<span style="display: none">eat this robot</span>noelynstephens.com.
          </p>
        </div>
        <div class="about-image round thumbnail">
          <img src="/assets/img/portfolioPhoto.jpg" alt="photo of Noelyn Stephens standing in front of a flowering tree" class="portrait" />
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-text {
  // line-height: 32px;
  max-width: 50%;
  // margin-left: 5%;
  @media (max-width: $md-screen) {
    margin-top: 0;
    margin-bottom: 5%;
    margin-left: 0;
  }
  @media (max-width: $md-screen) {
    max-width: 80%;
    margin-top: 0;
    margin-bottom: 5%;
  }
  p {
    margin-left: 5%;
    .big {
      font-size: 2em;
      font-weight: 600;
    }
  }
}

.about-image {
  margin: 5%;
  border: solid 1px $color-font;
}
</style>
