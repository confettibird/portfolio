<template>
  <div class="header">
    <div class="section__home">
      <div class="leftHomePage">
        <div class="logo itemA">Noelyn Stephens</div>
        <div class="professions itemB"></div>
        <div class="itemC">
          <p class="text services--xl">Design &amp; Development</p>
        </div>
      </div>
      <div
        class="rightHomePage"
        id="home-page"
        :style="{ backgroundColor: color }"
      >
        <div class="logo logo--mobile">Noelyn Stephens</div>
        <div class="hv-centered homeImg">
          <div class="box-1">
            <div class="box-2"></div>
          </div>
        </div>
        <div class="text services--mobile">Design &amp; Development</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let colors = ["#fef8e0", "#fdf3c8", "#fce896", "#fad84c"];
    let start = 2;
    return {
      colors: colors,
      color: colors[start],
      index: start,
      direction: 1
    };
  },
  methods: {
    nextColor: function() {
      if (this.index >= this.colors.length - 1) {
        this.direction = -1;
      }
      if (this.index == 0) {
        this.direction = 1;
      }
      this.index += this.direction;
      this.color = this.colors[this.index];
    }
  },
  mounted: function() {
    window.setInterval(() => {
      this.nextColor();
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 100vh;
}

.section__home {
  width: 100%;
  height: 100%;
  background-color: #fff;
  @include flexStyle($dir: row, $just: center, $align: flex-start);
  margin-top: 55px;

  .logo {
    color: $color-logo;
    font: normal 1.75rem $font-logo;
    @media (min-width: $xtra-lrg-screen) {
      font-size: 1.8vw;
    }
  }

  .services--xl {
    font-size: 18px;
    @media (min-width: $xtra-lrg-screen) {
      font-size: 1.2vw;
    }
  }

  .rightHomePage,
  .leftHomePage {
    height: 80%;
    width: 40%;
  }

  .leftHomePage {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: [row1-start]33% [row1-end]33% [row2-start]33% [row2-end];
    background-color: #fff;
    .itemA {
      grid-column: 1;
      grid-row: 1;
    }
    .itemB {
      grid-column: 1;
      grid-row: 2;
      // must set a height and width for the div so that you can move it around inside the grid box. if it is set to auto, it will span the compelte area by defauly and you cannot then adjust the alignment and justification.
      width: 40px;
      height: 100px;
      justify-self: end;
      align-self: center;
    }
    .itemC {
      grid-column: 1;
      grid-row: 3;
      width: 400px;
      justify-self: start;
      align-self: end;
      .text {
        color: $color-logo;
      }
    }

    p {
      margin-top: 15%;
    }
    .professions {
      background-repeat: no-repeat;
      background-size: 70%;
    }
    @media (max-width: $lrg-screen) {
      display: none;
    }
  }

  .rightHomePage {
    // position relative such that child can be positioned absolute with hv-centered
    position: relative;
    background-color: $color-base;
    -webkit-transition: all 3s ease-in-out;
    -moz-transition: all 3s ease-in-out;
    -o-transition: all 3s ease-in-out;
    -ms-transition: all 3s ease-in-out;
    transition: all 3s ease-in-out;

    .homeImg {
      // background-image: url("/assets/img/hero/o.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-color: #64faea;
      // height: 60%;
      width: 60%;
      aspect-ratio: 4.5 / 5;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: $lrg-screen) {
        // height: 55%;
        width: 50%;
      }
      @media (max-width: $md-screen) {
        // height: 50%;
        width: 60%;
      }
      @media (max-width: $sm-screen) {
        // height: 50%;
        width: 75%;
      }
      @media (max-height: 380px) {
        display: none;
      }
      .box-1 {
        background-color: #b1fbf4;
        width: 50%;
        aspect-ratio: 4.5 / 5;
        display: flex;
        justify-content: center;
        align-items: end;
        .box-2 {
          background-color: #50c7bb;
          width: 40%;
          aspect-ratio: 4.5 / 5;
        }
      }
    }

    .logo--mobile {
      margin-top: 8%;
      text-align: center;
      font-size: 2.3rem;
      display: none;
      @media (max-width: $lrg-screen) {
        display: block;
        font-size: 2.2rem;
      }
      @media (max-width: $md-screen) {
        margin-top: 10%;
        font-size: 2rem;
      }
      @media (max-width: $xsm-screen) {
        margin-top: 20%;
        font-size: 1.2rem;
      }
    }

    .services--mobile {
      // position
      position: absolute;
      width: 100%;
      bottom: 10%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      font-size: 1.1rem;
      text-align: center;
      display: none;
      @media (max-width: $lrg-screen) {
        display: block;
        font-size: 1.2rem;
      }
      @media (max-width: $md-screen) {
        /*margin-top: 10%;*/
        font-size: 1.1rem;
      }
      @media (max-width: $sm-screen) {
        /*margin-top: 10%;*/
        font-size: 1rem;
      }
      @media (max-width: $xsm-screen) {
        /*margin-top: 10%;*/
        font-size: 0.6rem;
      }
    }
    .text.services--mobile {
      color: $color-logo;
    }

    @media (max-width: $lrg-screen) {
      width: 90%;
    }
  }
}
</style>
