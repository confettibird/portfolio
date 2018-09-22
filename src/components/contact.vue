<template>
  <div>
    <div class="slope slope--4"></div>

    <section id="contact" class="section--4">
      <div class="section__title section__title--right">
        Contact
      </div>
      <div class="section__body section_body--contact">
        <div class="hv-centered centered contact-info text">
          <div class="contact--top">
            <p style="font-size:24px;">Let's work together:</p>
            <p class="mail">
              hello@<span style="display:none;">eat this robot</span>noelynstephens.com
            </p>
            <p style="font-size:16px">
              <i class="fa fa-map-marker-alt fa-2x"></i><br/>
              Bristol, UK
            </p>
          </div>
          <div class="contact--bottom">
            <a href="https://twitter.com/confettibird" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="https://www.instagram.com/nociostudios" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="https://github.com/confettibird" target="_blank"><i class="fab fa-github fa-2x"></i></a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section_body--contact {
  min-height: 400px;
}

.contact-info {
  width: 65%;
  max-width: 400px;

  .contact--top {
    border: dashed 2px #fdf3c8;
    border-radius: 5%;
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
    color: #fdf3c8;
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
