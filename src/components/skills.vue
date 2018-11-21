<template>
  <div>
    <div class="slope slope--2"></div>

    <section id="skills" class="section--2">
      <div class="section__body">
        <div class="centered skill-grid">
          <div id="wordcloud">
            <vue-word-cloud
            :words="[['HTML', 6], ['Sass', 5], ['JavaScript', 3], ['CSS', 6], ['Vue.js', 3], ['OctoberCMS', 3], ['Photoshop', 5], ['WordPress', 3], ['Headless CMS', 4], ['Illustrator', 6], ['InDesign', 5], ['Logo &amp; Icon Design', 3], ['Branding', 3]]"
            :color="([, weight]) => weight > 5 ? '#d09c2d' : weight > 4 ? '#64abd6' : '#128d9d'"
            font-family="Nunito"/>
          </div>
        </div>
      </div>
      <div class="section__title section__title--right">
        Skills
      </div>
    </section>

  </div>
</template>

<script>
import vueWordCloud from "vuewordcloud";
export default {
  components: {
    vueWordCloud
  }
};
</script>

<style lang="scss" scoped>
.skill-grid {
  width: 80%;
  height: 70%;
}

#wordcloud {
  width: 80%;
  height: 300px;
  margin-top: 3%;
  margin-bottom: 5%;
}
</style>
