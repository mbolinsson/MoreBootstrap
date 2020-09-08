<template>
  <div class="d-flex justify-content-center align-items-center flex-column">
    <div class="d-flex mt-3">
      <h2>TOP</h2>
      <h2 class="ml-2 text-primary">SELLERS</h2>
    </div>
    <img class="mt-3" src="/img/multi/zigzag.svg" alt="zigzag" />
    <p class="mt-4">Check out our latest products from top fashion designers</p>

    <div class="box-wrapper d-flex flex-column flex-xl-row mt-3 ">
      <!-- box 1 -->
      <div class="box1 mb-2 mb-xl-0 bg-secondary mr-2 position-relative rounded">
        <div class="ml-3 mt-3 bg-light logoBox d-flex rounded justify-content-center"><img src="/img/topSellers/beximLogo.svg" alt="" /></div>
        <div class="blue-bottom-box position-absolute fixed-bottom bg-blue d-flex align-items-center">
          <p class="text-white m-0 ml-4">Men's denim shirts full</p>
        </div>
      </div>
      <div>
        <!-- box 2 -->
        <div class="box2 bg-secondary mb-2 position-relative rounded">
          <div class="bg-light position-absolute fixed-top fixed-left ml-3 mt-3 rounded logoBox d-flex justify-content-center"><img src="/img/topSellers/lightonLogo.svg" alt="" /></div>
          <div class="blue-bottom-box position-absolute fixed-bottom bg-blue d-flex align-items-center">
            <p class="text-white m-0 ml-4">Men's denim shirts full</p>
          </div>
        </div>
        <!-- box 3 -->
        <div class="box3 bg-secondary position-relative rounded">
          <div class="bg-img-layer rounded">
            <iconMenuBoard />
            <div class="bg-light position-absolute rounded fixed-top fixed-left ml-3 mt-3 logoBox d-flex justify-content-center">
              <img src="/img/topSellers/RosimoLogo.svg" alt="" />
            </div>
            <div class="ml-4 mb-3 position-absolute fixed-bottom">
              <h6 class="m-0 mb-2 text-light font-weight-light">New look men's sneakers</h6>
              <span class="badge badge-light bg-transparent border text-light font-weight-light border-white m-0 mb-2 rounded-0">Shoes</span>
              <p class="m-0 mb-2 strikeP text-light font-weight-light">$220.00</p>
              <h5 class="m-0 mb-2 text-primary font-weight-light">$190.00</h5>
            </div>
            <starRating :rating="rating" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconMenuBoard from "@/components/iconMenuBoard";
import starRating from "@/components/starRating";

export default {
  name: "TopSellers",
  components: {
    iconMenuBoard,
    starRating,
  },
  data() {
    return {
      rating: 4,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/custom.scss";
.box-wrapper {
  .box1 {
    height: 649px;
    width: 550px;
    background-image: url("/img/topSellers/manSilhouette.svg");
  }
  .box2 {
    height: 296px;
    width: 550px;
    background-image: url("/img/topSellers/brideSilhouette.svg");
    z-index: -1;
  }
  .box3 {
    height: 345px;
    width: 550px;
    background-image: url("/img/topSellers/shoesSilhouette.svg");
    z-index: -2;
    .bg-img-layer {
      background-color: transparentize($blue, 0.07);
      height: 100%;
      width: 100%;
      z-index: 0;
    }
  }
  .blue-bottom-box {
    height: 51px;
    font-size: 18px;
    border-radius: 0 0 5px 5px;
  }
  .logoBox {
    width: 175px;
    height: 75px;
    z-index: -1;
  }
  .strikeP {
    text-decoration: line-through;
    font-size: 16px;
  }
}
</style>
