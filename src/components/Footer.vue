<template>
  <div class="footer-wrapper bg-blue" data-aos="fade-up">
    <div class="blue-box container d-flex flex-column flex-lg-row justify-content-between align-tems-center text-light mt-5">
      <div class="div1">
        <img src="/img/Footer/logo.svg" alt="" />
        <small
          ><p class="mt-5 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis.
            Aenean laoreet.
          </p>
        </small>
        <h6 class="mt-5 d-inline">Follow Us</h6>
        <img class="d-inline ml-4" src="/img/Footer/line.svg" alt="" />
        <div class="mt-3">
          <a href=""><i class="mr-3 fab fa-facebook-f"></i></a>
          <a href=""><i class="mr-3 fab fa-twitter"></i></a>
          <a href=""><i class="mr-3 fab fa-youtube"></i></a>
          <a href=""><i class="mr-3 fab fa-instagram"></i></a>
          <a href=""><i class="mr-3 fab fa-pinterest"></i></a>
        </div>
      </div>
      <div>
        <h6 class="text-primary">CONTACT INFO</h6>
        <p class="mt-4 text-primary">Adress:</p>
        <p>Solna Business Park</p>
        <p>Feni-2500, Stockholm</p>

        <p class="mt-4 text-primary">Phone:</p>
        <p>+08-123456789</p>
        <p>+08-123456789</p>

        <p class="mt-4 text-primary">Email:</p>
        <p>support@website.com</p>
        <p>info@website.com</p>
      </div>
      <div>
        <h6 class="text-primary mb-4">USEFUL LINKS</h6>
        <p>Privacy Policy</p>
        <p class="text-primary"><u>Terms & Conditions</u></p>
        <p>Contact Us</p>
        <p>Our Sitemap</p>
        <p>Latest News</p>
        <p>Returns</p>
      </div>
      <div>
        <h6 class="text-primary">RECENT INSTAGRAM</h6>
        <div>
          <div class="d-flex">
            <div class="rounded mb-2 mr-2 insta-photo"></div>
            <div class="rounded mb-2 mr-2 insta-photo"></div>
            <div class="rounded mb-2 insta-photo"></div>
          </div>
          <div class="d-flex">
            <div class="rounded mb-2 mr-2 insta-photo"></div>
            <div class="rounded mb-2 bg-primary mr-2 insta-photo d-flex justify-content-center align-items-center"><i class="fab fa-instagram"></i></div>
            <div class="rounded mb-2 insta-photo"></div>
          </div>
          <div class="d-flex">
            <div class="rounded mr-2 insta-photo"></div>
            <div class="rounded mr-2 insta-photo"></div>
            <div class="rounded insta-photo"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dark">
      <div class="container black-box d-flex justify-content-between align-items-center flex-wrap">
        <div><p class="text-light">© Copyright 2020 KenKata</p></div>
        <div class="d-flex justify-content-center">
          <a href=""><img class="my-1 my-lg-2 mr-1 mr-lg-2" src="/img/Footer/mastercard.svg" alt=""/></a>
          <a href=""><img class="m-1 m-lg-2" src="/img/Footer/paypal.svg" alt=""/></a>
          <a href=""><img class="m-1 m-lg-2" src="/img/Footer/visa.svg" alt=""/></a>
          <a href=""><img class="m-1 m-lg-2" src="/img/Footer/payoneer.svg" alt=""/></a>
          <a href=""><img class="m-1 m-lg-2" src="/img/Footer/discover.svg" alt=""/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/styles/custom.scss";
.footer-wrapper {
  margin-top: 110px;
  border-top: 5px solid $primary;
  .blue-box {
    height: auto;
    .insta-photo {
      width: 78px;
      height: 78px;
      background-color: $gray;
      font-size: 70px;
    }
    .div1 {
      width: 245px;
      p {
        line-height: 1.9;
        font-size: 14px;
      }
      .line {
        width: 30px;
        height: 2px;
        border: 2px solid $primary;
      }
    }
  }
  .black-box {
    height: auto;
  }
  @media (min-width: 992px) {
    .blue-box {
      height: 453px;
    }
    .black-box {
      height: 80px;
    }
  }
}
</style>
