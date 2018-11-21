<style lang="scss" scoped>
.section_body--reviews {
  @media (max-width: $sm-screen) {
    height: 700px;
  }
}
.review:before {
    content: "“";
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.1em;
    vertical-align: -0.4em;
}
.review:after {
    content: "”";
    font-size: 3em;
    line-height: 0.3em;
    margin-right: 0.1em;
    vertical-align: -0.4em;
}
p {
  padding-bottom: 3%;
  @media (max-width: $lrg-screen) {
    font-size: 18px !important;
  }
  @media (max-width: $md-screen) {
    font-size: 18px !important;
  }
}
.dots{
  display: inline-block;
  margin: 5px;
  height:10px;
  width: 10px;
  border-radius: 50%;
  background-color: $color-complement;
}

.dot-active {
  background-color: lighten($color-complement, 25%);
}

</style>

<template>
  <div>
    <div class="slope slope--4"></div>

    <section id="reviews" class="section--4">
      <div class="section__title section__title--right">
        Reviews
      </div>
      <div class="section__body section_body--reviews">
        <div class="hv-centered centered contact-info text">
          <div class="contact--top">
            <p class="review">
              {{ review.text }}
            </p>
            <p>-{{ review.name }}</p>
          </div>
          <div @click="index = i" v-for="(r, i) in reviews" :key="r.id" v-bind:class="['dots', i == index ? 'dot-active' : '']">
            <!--dot {{ i }}-->
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          text: 'Noelyn created an informative, easy to navigate, and beautiful website for us, which was also translated into three different languages. Because we live in different cities, communication was key and she never let us down. Always ready to help, with strong attention to details, she guided us through the whole process and made complicated things feel so easy. Her personalised graphics added a special touch to the site and fit nicely with our wedding style.',
          name: 'Justyna W.'
        },
      ],
      index: 0
    }
  },
  computed: {
    review: function() {
      return this.reviews[this.index]
    }
  }
};
</script>
