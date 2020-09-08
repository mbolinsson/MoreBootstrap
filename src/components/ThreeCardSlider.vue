<template>
  <div class="d-flex justify-content-center align-items-center flex-column mt-5">
    <div class="d-flex mt-3">
      <h2>{{ data.headline.word1 }}</h2>
      <h2 class="ml-2 text-primary">{{ data.headline.word2 }}</h2>
    </div>
    <img class="mt-3" src="/img/multi/zigzag.svg" alt="zigzag" />
    <p class="mt-4">Check out our latest products from top fashion designers</p>

    <div class="mt-2 d-flex align-items-center justify-content-center">
      <!-- Box1 -->
      <div class="m-2 one-swipe-box bg-secondary rounded">
        <div :class="data.box1.dot.color" class="rounded-circle position-absolute circle-new d-flex justify-content-center align-items-center">
          <h6 class="text-light font-weight-light m-0">{{ data.box1.dot.text }}</h6>
        </div>
        <img :src="data.box1.backgroundImgUrl" :alt="data.box1.backgroundImgUrl" />
        <div class="blue-bottom-box position-absolute w-100 bg-blue d-flex align-items-center">
          <p class="text-white m-0 ml-4">{{ data.box1.textBlueBox }}</p>
        </div>
      </div>
      <!-- Box2 -->
      <div :style="{backgroundImage: 'url(' + data.box2.backgroundImgUrl + ')'}" class="m-2  one-swipe-box bg-img bg-secondary rounded ">
        <div class=" d-flex justify-content-end flex-column bg-img-layer position-relative">
          <div class="ml-4 mb-3">
            <h6 class="m-0 mb-1 text-light font-weight-light">New look men´s coat</h6>
            <span class="badge badge-light bg-transparent border text-light font-weight-light border-white m-0 mb-1 rounded-0">Fashion</span>
            <p class="m-0 mb-1 text-light font-weight-light">$220.00</p>
            <h5 class="m-0 mb-1 text-primary font-weight-light">$190.00</h5>
          </div>
          <iconMenuBoard />
          <starRating
            v-bind:rating="data.starRating.rating"
            class="starratinginactive"
            :class="{'star-rating-active': data.starRating.isActive, 'star-rating-inactive': !data.starRating.isActive}"
          />
        </div>
      </div>
      <!-- Box3 -->
      <div class="m-2 one-swipe-box bg-secondary rounded">
        <div :class="data.box3.dot.color" class="rounded-circle position-absolute circle-new d-flex justify-content-center align-items-center">
          <h6 class="text-light font-weight-light m-0">{{ data.box3.dot.text }}</h6>
        </div>
        <img :src="data.box3.backgroundImgUrl" alt="Silhouette of girl" />
        <div class="blue-bottom-box position-absolute w-100 bg-blue d-flex align-items-center">
          <p class="text-white m-0 ml-4">{{ data.box3.textBlueBox }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconMenuBoard from "@/components/iconMenuBoard";
import starRating from "@/components/starRating";
export default {
  props: {data: Object},
  components: {
    iconMenuBoard,
    starRating,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/custom.scss";

.one-swipe-box {
  height: 400px;
  width: 360px;
  position: relative;
  .blue-bottom-box {
    height: 51px;
    bottom: 0;
    font-size: 18px;
    border-radius: 0 0 5px 5px;
  }
  .circle-new {
    width: 60px;
    height: 60px;
    top: 25px;
    left: 25px;
  }
  p:nth-child(3) {
    text-decoration: line-through;
  }
}

.bg-img-layer {
  background-color: transparentize($blue, 0.07);
  height: 100%;
  width: 100%;
  z-index: 6;
}
.star-rating-active {
  display: block;
}
.star-rating-inactive {
  display: none;
}
</style>
