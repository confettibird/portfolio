<template>
  <div>
    <!-- <div class="slope slope--2"></div> -->

    <section id="skills" class="section--2">
      <div class="section__body">
        <div class="centered skill-grid">
          <div id="wordcloud">
            <vue-word-cloud
              :words="[
                ['Technical Skills', 7],
                ['HTML', 5],
                ['JavaScript', 4],
                ['Vue.js', 4],
                ['Wordpress', 3],
                ['Photoshop', 4],
                ['CSS/Sass', 5],
                ['Adobe XD', 4],
                ['Illustrator', 4],
                ['InDesign', 3]
              ]"
              :color="
                ([, weight]) =>
                  weight > 6
                    ? '#023183'
                    : weight > 4
                    ? '#4276CF'
                    : weight > 3
                    ? '#056299'
                    : '#04808F'
              "
              spacing="0.5"
              font-family="Nunito"
            />
          </div>
        </div>
      </div>
      <!-- <div class="section__title section__title--right">Skills</div> -->
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
  width: 100%;
  height: 70%;
  margin: 10rem 15px;
}

#wordcloud {
  width: 65%;
  height: 50vh;
  margin: auto;
}
</style>
