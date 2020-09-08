<template>
  <div class="d-flex justify-content-center wrapper-box-for-cards mt-5 pt-4">
    <div class="d-flex flex-wrap justify-content-center mr-xl-5 ml-xl-5 pl-xl-5 pr-xl-5">
      <div class="two-boxes d-flex flex-wrap justify-content-center">
        <div class="border-0 pl-4 card card-custom rounded d-flex flex-row justify-content-center m-4">
          <img src="/img/FourCardsFreeShipping/carton.svg" alt="" />
          <div class="card-body">
            <h6 class="card-title">Free shipping</h6>
            <p class="card-text text-dark">For a local customer, we provide free shipping facility</p>
          </div>
        </div>
        <div class="border-0 pl-4 card-nr2-color card card-custom rounded d-flex flex-row justify-content-center m-4">
          <img src="/img/FourCardsFreeShipping/timing24.svg" alt="" />
          <div class="card-body">
            <h6 class="card-title text-light">24/7 support</h6>
            <p class="card-text text-light">For any inquiry, we are available 24 hours every day</p>
          </div>
        </div>
      </div>

      <div class="two-boxes d-flex flex-wrap justify-content-center">
        <div class="border-0 pl-4 card card-custom rounded d-flex flex-row justify-content-center m-4">
          <img src="/img/FourCardsFreeShipping/payment icon.svg" alt="" />
          <div class="card-body">
            <h6 class="card-title">Online payment</h6>
            <p class="card-text text-dark">You can pay quickly and easily with our online payment system</p>
          </div>
        </div>
        <div class="border-0 pl-4 card card-custom rounded d-flex flex-row justify-content-center m-4">
          <img src="/img/FourCardsFreeShipping/Outline.svg" alt="" />
          <div class="card-body">
            <h6 class="card-title">Fast delivery</h6>
            <p class="card-text text-dark">We understand your urgency and we deliver in a fast way</p>
          </div>
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

.twocards {
  width: 50vw;
}

.card-custom {
  background-color: lighten($primary, 48.5%) !important;
  h6 {
    color: $primary;
  }
  width: 397.5px;
  height: 137px;
}

.card-nr2-color {
  background-color: $primary !important;
}
</style>
