<template>
  <div class="jumbotron jumbotron-fluid p-0 wrapper-percent-off bg-gray mt-5 text-light">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="primary-colored-box bg-primary d-flex justify-content-center align-items-center flex-column">
        <div class="d-flex align-items-end">
          <h1 class="m-0">30%</h1>
          <h4>OFF</h4>
        </div>

        <p class="mt-2">FOR NEW CUSTOMER</p>
        <button type="button" class="btn btn-blue button font-weight-normal p-2 mt-2">SHOP NOW</button>
      </div>
      <div class="d-flex justify-items-center flex-column align-items-lg-start align-items-center">
        <p class="mt-1 text-center text-lg-left">
          Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at
          tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.
        </p>
        <button type="button" class="btn btn-light button text-primary font-weight-normal p-2 mt-4">LEARN MORE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/custom.scss";
.wrapper-percent-off {
  height: 418px;
  .button {
    border-radius: 45px;
    font-size: 18px;
    width: 135px;
  }
  p {
    font-size: 14px;
    max-width: 40vw;
  }
  .primary-colored-box {
    width: 50vw;
    height: 418px;
    h1 {
      font-size: 60px;
    }
    h4 {
      font-size: 36px;
      margin: 0 0 5px 10px;
    }
  }
}
@media (min-width: 992px) {
  .wrapper-percent-off {
    height: 418px;
    .button {
      border-radius: 45px;
      font-size: 18px;
      width: 154px;
    }
    p {
      font-size: 14px;
      max-width: 455px;
    }
    .primary-colored-box {
      width: 255px;
      height: 418px;
      h1 {
        font-size: 60px;
      }
      h4 {
        font-size: 36px;
        margin: 0 0 5px 10px;
      }
    }
  }
}
</style>
