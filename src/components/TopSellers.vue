<template>
  <div class="d-flex justify-content-center align-items-center flex-column">
    <div class="d-flex mt-3">
      <h2>TOP</h2>
      <h2 class="ml-2 text-primary">SELLERS</h2>
    </div>
    <img class="mt-3" src="/img/multi/zigzag.svg" alt="zigzag" />
    <p class="mt-4">Check out our latest products from top fashion designers</p>

    <div class="box-wrapper d-flex flex-column justify-content-center flex-xl-row mt-3" data-aos="fade-left">
      <!-- box 1 -->

      <div @mouseover="box1 = true" @mouseout="box1 = false" class="box1 mb-2 mb-xl-0 bg-secondary mr-2 position-relative rounded">
        <div class="ml-3 mt-3 bg-light logoBox d-flex position-absolute rounded justify-content-center"><img src="/img/topSellers/beximLogo.svg" alt="" /></div>
        <div :class="{bgImgLayer: box1, bgImgLayerDNone: !box1}" class="rounded">
          <iconMenuBoard />
          <div class="ml-4 mb-3 position-absolute fixed-bottom">
            <h6 class="m-0 mb-2 text-light font-weight-light">New look men's sneakers</h6>
            <span class="badge badge-light bg-transparent border text-light font-weight-light border-white m-0 mb-2 rounded-0">Shoes</span>
            <p class="m-0 mb-2 strikeP text-light font-weight-light">$220.00</p>
            <h5 class="m-0 mb-2 text-primary font-weight-light">$190.00</h5>
          </div>
          <div class="starrating-wrapper position-absolute"><starRating :rating="rating" /></div>
        </div>
        <div class="blue-bottom-box position-absolute fixed-bottom bg-blue d-flex align-items-center">
          <p class="text-white m-0 ml-4">Men's denim shirts full</p>
        </div>
      </div>
      <div>
        <!-- box 2 -->
        <div @mouseover="box2 = true" @mouseout="box2 = false">
          <div class="box2 bg-secondary mb-2 position-relative rounded">
            <div class="bg-light position-absolute fixed-top fixed-left ml-3 mt-3 rounded logoBox d-flex justify-content-center"><img src="/img/topSellers/lightonLogo.svg" alt="" /></div>
            <div class="blue-bottom-box position-absolute fixed-bottom bg-blue d-flex align-items-center">
              <p class="text-white m-0 ml-4 position-absoluteZ">Men's denim shirts full</p>
            </div>
            <div :class="{bgImgLayer: box2, bgImgLayerDNone: !box2}" class="rounded">
              <iconMenuBoard />

              <div class="ml-4 mb-3 position-absolute fixed-bottom">
                <h6 class="m-0 mb-2 text-light font-weight-light">New look men's sneakers</h6>
                <span class="badge badge-light bg-transparent border text-light font-weight-light border-white m-0 mb-2 rounded-0">Shoes</span>
                <p class="m-0 mb-2 strikeP text-light font-weight-light">$220.00</p>
                <h5 class="m-0 mb-2 text-primary font-weight-light">$190.00</h5>
              </div>
              <div class="starrating-wrapper position-absolute"><starRating :rating="rating" /></div>
            </div>
          </div>
        </div>

        <!-- box 3 -->
        <div @mouseover="box3 = true" @mouseout="box3 = false">
          <div class="box3 bg-secondary position-relative rounded">
            <div class="bg-light position-absolute rounded fixed-top fixed-left ml-3 mt-3 logoBox d-flex justify-content-center">
              <img src="/img/topSellers/RosimoLogo.svg" alt="" />
            </div>
            <div :class="{bgImgLayer: box3, bgImgLayerDNone: !box3}" class="rounded">
              <iconMenuBoard />

              <div class="ml-4 mb-3 position-absolute fixed-bottom">
                <h6 class="m-0 mb-2 text-light font-weight-light">New look men's sneakers</h6>
                <span class="badge badge-light bg-transparent border text-light font-weight-light border-white m-0 mb-2 rounded-0">Shoes</span>
                <p class="m-0 mb-2 strikeP text-light font-weight-light">$220.00</p>
                <h5 class="m-0 mb-2 text-primary font-weight-light">$190.00</h5>
              </div>
              <div class="starrating-wrapper position-absolute"><starRating :rating="rating" /></div>
            </div>
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
      box1: false,
      box2: false,
      box3: false,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/custom.scss";
.box-wrapper {
  .box1 {
    height: 649px;
    width: 98vw;
    background-image: url("/img/topSellers/manSilhouette.svg");
    z-index: 0;
  }
  .box2 {
    height: 296px;
    width: 98vw;
    background-image: url("/img/topSellers/brideSilhouette.svg");
    z-index: 0;
  }
  .box3 {
    height: 345px;
    width: 98vw;
    background-image: url("/img/topSellers/shoesSilhouette.svg");
    z-index: 0;
  }
  .bgImgLayer {
    background-color: transparentize($blue, 0.07);
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  .bgImgLayerDNone {
    display: none;
  }
  .blue-bottom-box {
    z-index: -1;
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
  .starrating-wrapper {
    right: 0;
    bottom: 0;
  }
  @media (min-width: 650px) {
    .box1 {
      height: 649px;
      width: 550px;
    }
    .box2 {
      height: 296px;
      width: 550px;
    }
    .box3 {
      height: 345px;
      width: 550px;
    }
  }
}
</style>
