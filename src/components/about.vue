<template>
  <div>
    <!-- <div class="slope slope--1"></div> -->

    <section id="about" class="section--1">
      <div class="section__body section_body--about">
        <div class="about-text text">
          <p>
            <span class="big">Hiya!</span> I am a web developer and designer who
            enjoys building digital products for individuals and businesses. I
            have over four years of experience making delightful things for the
            internet and I would love to assist you in the creation of something
            new and engaging. Send over an email letting me know how I can help.
          </p>
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
}
</style>
