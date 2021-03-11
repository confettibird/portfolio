<template>
  <div>
    <div class="slope slope--2"></div>

    <section id="skills" class="section--2">
      <div class="section__body">
        <div class="centered skill-grid">
          <div id="wordcloud">
            <vue-word-cloud
              :words="[
                ['HTML', 5],
                ['JavaScript', 4],
                ['Vue.js', 4],
                ['Wordpress', 3],
                ['Photoshop', 4],
                ['REST APIs', 3],
                ['CSS/Sass', 5],
                ['Adobe XD', 4],
                ['Illustrator', 4],
                ['InDesign', 3]
              ]"
              :color="
                ([, weight]) =>
                  weight > 4 ? '#d09c2d' : weight > 3 ? '#64abd6' : '#128d9d'
              "
              spacing=".2"
              font-family="Nunito"
            />
          </div>
        </div>
      </div>
      <div class="section__title section__title--right">Skills</div>
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
