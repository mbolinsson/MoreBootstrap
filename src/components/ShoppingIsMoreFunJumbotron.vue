<template>
  <div class="jumbotron jumbotron-fluid p-0" data-aos="fade">
    <div class="container container-custom d-flex align-items-center">
      <div>
        <h1 class="display-4">Shopping is</h1>
        <h1 class="display-4 text-primary font-weight-bold">MORE FUN</h1>
        <p class="lead mt-4">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed</p>
        <button class="p-2 mt-4 font-weight-medium btn text-primary bg-light">SHOP NOW</button>
      </div>

      <img class="img-fluid" src="/img/ShoppingIsMoreFunJumbotron/shoppingIsMoreFunPeople.svg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/styles/custom.scss";
.container-custom {
  height: 600px;

  position: relative;
  z-index: 0;

  p {
    max-width: 389px;
    font-size: 16px;
  }
  img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  button {
    border-radius: 45px;
    width: 150px;
    font-size: 18px;
  }
}
@media (max-width: 767.98px) {
  .container-custom {
    max-height: 400px;
  }
  img {
    max-height: 390px;
  }
}
</style>
