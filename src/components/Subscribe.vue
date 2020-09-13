<template>
  <div class="d-flex subscribe-wrapper bg-secondary d-flex justify-content-center flex-wrap margin-top">
    <div class="subscribe-box bg-secondary d-flex flex-column justify-content-center align-items-center align-items-xl-baseline flex-wrap">
      <div>
        <h2 class="d-inline">SUBSCRIBE</h2>
        <h2 class="d-inline ml-2 text-primary">NOW</h2>
      </div>

      <p class="mt-3 text-center text-xl-left">Signup for awesome news about our new products and know our special discounts on products.</p>
      <div class="input-group mt-3 bg-light d-flex align-items-center">
        <input type="email" class="form-control border-0" placeholder="Enter email adress" />
        <span class="input-group-btn">
          <button class="btn m-1 bg-primary text-light" type="submit">Subscribe</button>
        </span>
      </div>
    </div>
    <div class="img-box bg-gray subscribe-box"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/custom.scss";
.subscribe-wrapper {
  margin-top: 110px;

  .subscribe-box {
    height: 313px;
    width: 400px;
    p {
      line-height: 1.5;
      width: 345px;
    }
  }
  .input-group {
    width: 345px;
    border-radius: 25px;
    border: 1px solid $gray;
    input {
      border-radius: 25px 0 0 25px;
      &::placeholder {
        color: $gray;
        font-size: 14px;
      }
    }
    .btn {
      border-radius: 25px;
    }
  }
}
@media (min-width: 1200px) {
  .subscribe-wrapper {
    .subscribe-box {
      height: 313px;
      width: 540px;
      p {
        width: 391px;
      }
    }

    .input-group {
      width: 445px;
    }
  }
}
</style>
