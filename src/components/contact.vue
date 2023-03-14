<template>
  <div>
    <section id="contact" class="section--5">
      <div class="section__body section_body--contact">
        <div class="hv-centered centered contact-info text">
          <div class="contact--top">
            <p style="font-size: 24px">Let's work together</p>
            <p class="mail">
              hello@<span style="display: none">eat this robot</span
              >noelynstephens.com
            </p>
            <p style="font-size: 16px">
              <i class="fa fa-map-marker-alt fa-2x"></i><br />
              Based in
              <span style="text-decoration: underline;">Illinois, USA</span>
            </p>
          </div>
          <div class="contact--bottom">
            <!-- <a href="https://twitter.com/confettibird" target="_blank"
              ><i class="fab fa-twitter fa-2x"></i
            ></a> -->
            <!--<a href="https://www.instagram.com/nociostudios" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>-->
            <a href="https://github.com/confettibird" target="_blank"
              ><i class="fab fa-github fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
    </section>
    <div class="slope slope--footer">
      <!--Waves Container-->
      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <!-- <use
              xlink:href="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            /> -->
            <use xlink:href="#gentle-wave" x="48" y="3" fill="#023183" />
            <!-- <use xlink:href="#gentle-wave" x="48" y="5" fill="#f0faf9" /> -->
            <!-- <use xlink:href="#gentle-wave" x="48" y="7" fill="#f0faf9" /> -->
          </g>
        </svg>
      </div>
      <!--Waves end-->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#contact.section--5 {
  background-color: #fbf9f4;
}
.section_body--contact {
  height: 250px;
}
.slope--footer {
  width: 100%;
  height: 150px;
  background-color: #fbf9f4;
  .waves {
    position: relative;
    width: 100%;
    height: 150px;
    margin-bottom: -7px; /*Fix for safari gap*/
    // min-height: 100px;
    // max-height: 150px;
  }
  /* Animation */

  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
    .content {
      height: 30vh;
    }
    h1 {
      font-size: 24px;
    }
  }
}

.contact-info {
  width: 65%;
  max-width: 400px;

  .contact--top {
    border: solid 1px #3b3109;
    background-color: #fdf3c8;
    padding: 5%;
  }
  .contact--bottom {
    text-align: center;
    width: 100%;

    a {
      margin: 5px;
    }
  }
  i {
    color: #3b3109;
    padding-top: 8%;
    padding-bottom: 5%;
  }
  a {
    text-decoration: none;
    &:hover {
      color: yellow;
    }
    &:active,
    &:link {
      color: #0c233b;
    }
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
  p.mail {
    @media (max-width: $md-screen) {
      font-size: 14px !important;
    }
  }
}
</style>
