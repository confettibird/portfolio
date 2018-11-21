<template>
  <div id="navigation">
    <div @click="toggleMenu()" id="menu-icon" :class="{'open': displayMenu }">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="menu" enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
      <div class="menu-content" v-if="displayMenu">
        <div class="menu-slope"></div>
        <div class="menu-center menu-wrapper">
          <ul class="menu-items" @click="toggleMenu">
            <li><a class="navItem" href="#about" v-smooth-scroll>About</a></li>
            <li><a class="navItem" href="#skills" v-smooth-scroll>Skills</a></li>
            <li><a class="navItem" href="#projects" v-smooth-scroll>Projects</a></li>
            <li><a class="navItem" href="#reviews" v-smooth-scroll>Reviews</a></li>
            <li><a class="navItem" href="#contact" v-smooth-scroll>Contact</a></li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayMenu: false
    };
  },
  methods: {
    toggleMenu: function() {
      this.displayMenu = !this.displayMenu;
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/widgets/hamburger.scss";

.menu-content {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  width: 30%;
  height: 100%;
  background-color: #4db4d7;
  @media (max-width: $sm-screen) {
    width: 100%;
    height: 700px;
  }
}

.menu-wrapper {
  border-left: 2px solid #fdf3c8;
  padding: 5%;
}

.menu-slope {
  @include slope(#4db4d7, #0076be, up);
  width: 100%;
  height: 75px;
  position: absolute;
  bottom: 0;
}

.menu-center{
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  @media (max-width: $md-screen) {
    top: 40%;
  }
  @media (max-width: $sm-screen) {
    top: 30%;
  }
}

.menu-items {
  font: normal 28px $font-section-title;
  li {
    display: block;
    list-style: none;
    padding-bottom: 10%;
  }
  a {
    color: $color-light-2;
  }
  a:active,
  a:link {
    color: $color-light-2;
    text-decoration: none;
  }
  a:hover {
    color: #f1c245;
  }
}
</style>
