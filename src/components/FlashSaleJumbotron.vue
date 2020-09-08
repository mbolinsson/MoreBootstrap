<template>
  <div class="jumbotron jumbotron-fluid p-0 wrapper mt-5 text-light bg-blue">
    <div class="container d-flex justify-content-between">
      <div class="primary-colored-box bg-primary d-flex justify-content-center align-items-center flex-column">
        <h1 class="m-0 text-center">FLASH<br />SALE</h1>
        <h4 class="text-center mt-3">UPP TO 50% OFF</h4>
      </div>
      <div class="d-none d-lg-flex align-items-center justify-content-center flex-column dots-wrapper">
        <div class="d-flex">
          <div class="rounded-circle dot bg-light m-3 d-flex align-items-center justify-content-center flex-column">
            <h5 class="text-primary mb-1 font-weight-bold">7</h5>
            <p class="m-0 text-dark">Days</p>
          </div>
          <div class="rounded-circle dot bg-light m-3 d-flex align-items-center justify-content-center flex-column">
            <h5 class="text-primary mb-1 font-weight-bold">23</h5>
            <p class="m-0 text-dark">Hours</p>
          </div>
          <div class="rounded-circle dot bg-light m-3 d-flex align-items-center justify-content-center flex-column">
            <h5 class="text-primary mb-1 font-weight-bold">46</h5>
            <p class="m-0 text-dark">Minutes</p>
          </div>
          <div class="rounded-circle dot bg-light m-3 d-flex align-items-center justify-content-center flex-column">
            <h5 class="text-primary mb-1 font-weight-bold">12</h5>
            <p class="m-0 text-dark">Seconds</p>
          </div>
        </div>
        <button type="button" class="btn btn-light button text-primary font-weight-normal p-2 mt-4">SHOP NOW</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/custom.scss";
.wrapper {
  height: 300px;
  .dots-wrapper {
    height: 300px;
  }
  .dot {
    height: 80px;
    width: 80px;
    border: 2px solid $primary;
    border-style: dashed;
  }
  .button {
    border-radius: 45px;
    font-size: 18px;
    width: 154px;
  }
  .primary-colored-box {
    width: 100vw;
    height: 300px;
    h1 {
      font-size: 60px;
      line-height: 0.9;
    }
    h4 {
      font-size: 24px;
    }
  }
}

@media (min-width: 992px) {
  .wrapper {
    height: 435px;
    .dots-wrapper {
      height: 435px;
    }
    .dot {
      height: 109px;
      width: 109px;
      border: 2px solid $primary;
      border-spacing: 10px;
      border-style: dashed;
      h5 {
        font-size: 36px;
      }
      p {
        font-size: 14px;
      }
    }
    .button {
      border-radius: 45px;
      font-size: 18px;
      width: 154px;
    }
    .primary-colored-box {
      width: 255px;
      height: 265px;
      h1 {
        font-size: 60px;
        line-height: 0.9;
      }
      h4 {
        font-size: 24px;
      }
    }
  }
}
</style>
