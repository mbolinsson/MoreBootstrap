<template>
  <div class="d-flex justify-content-center align-items-center flex-column mt-5" data-aos="fade-left">
    <div class="d-flex mt-3">
      <h2>{{ data.headline.word1 }}</h2>
      <h2 class="ml-2 text-primary">{{ data.headline.word2 }}</h2>
    </div>
    <img class="mt-3" src="/img/multi/zigzag.svg" alt="zigzag" />
    <p class="mt-4">Check out our latest products from top fashion designers</p>
    <carousel
      :stagePadding="40"
      :margin="20"
      :rewind="false"
      :nav="false"
      :responsive="{0: {items: 1}, 800: {items: 2}, 1000: {items: 3}}"
      class="mt-2 container carousel d-flex justify-content-center align-items-center"
    >
      <template slot="prev"
        ><div class="prev nav-buttons rounded-circle bg-primary d-flex justify-content-center mr-3"><img src="/img/ThreeCardSlider/arrow right.svg" alt="" /></div
      ></template>
      <!-- Box1 -->
      <div id="box1" class="one-swipe-box bg-secondary rounded">
        <div
          class="mb-3 w-100 h-100 d-flex flex-column position-absolute blue-layer"
          @mouseover="HoveringBox1 = true"
          @mouseout="HoveringBox1 = false"
          :class="{bgImgLayer: HoveringBox1, bgImgLayerDNone: !HoveringBox1}"
        >
          <iconMenuBoard />
          <h6 class="ml-3 mb-3 mt-auto text-light font-weight-light">New look men´s coat</h6>
          <span class="ml-3 badge white-badge badge-light bg-transparent border text-light font-weight-light border-white m-0 mb-1 rounded-0">Fashion</span>
          <p class="mb-2 ml-3 text-light font-weight-light">$220.00</p>
          <h5 class="mb-3 ml-3 text-primary font-weight-light">$190.00</h5>

          <div class="starrating-wrapper position-absolute">
            <starRating
              v-bind:rating="data.starRating.rating"
              class="starratinginactive d-flex"
              :class="{'star-rating-active': data.starRating.isActive, 'star-rating-inactive': !data.starRating.isActive}"
            />
          </div>
        </div>
        <div :class="data.box1.dot.color" class="rounded-circle position-absolute circle-new d-flex justify-content-center align-items-center">
          <h6 class="text-light font-weight-light m-0">{{ data.box1.dot.text }}</h6>
        </div>
        <img :src="data.box1.backgroundImgUrl" :alt="data.box1.backgroundImgUrl" />
        <div class="blue-bottom-box position-absolute w-100 bg-blue d-flex align-items-center">
          <p class="text-white m-0 ml-4">{{ data.box1.textBlueBox }}</p>
        </div>
      </div>
      <!-- Box2 -->
      <div id="box1" class="one-swipe-box bg-secondary rounded">
        <div
          class="mb-3 w-100 h-100 d-flex flex-column position-absolute blue-layer"
          @mouseover="HoveringBox2 = true"
          @mouseout="HoveringBox2 = false"
          :class="{bgImgLayer: HoveringBox2, bgImgLayerDNone: !HoveringBox2}"
        >
          <iconMenuBoard />
          <h6 class="ml-3 mb-3 mt-auto text-light font-weight-light">New look men´s coat</h6>
          <span class="ml-3 badge white-badge badge-light bg-transparent border text-light font-weight-light border-white m-0 mb-1 rounded-0">Fashion</span>
          <p class="mb-2 ml-3 text-light font-weight-light">$220.00</p>
          <h5 class="mb-3 ml-3 text-primary font-weight-light">$190.00</h5>

          <div class="starrating-wrapper position-absolute">
            <starRating
              v-bind:rating="data.starRating.rating"
              class="starratinginactive d-flex"
              :class="{'star-rating-active': data.starRating.isActive, 'star-rating-inactive': !data.starRating.isActive}"
            />
          </div>
        </div>
        <div :class="data.box1.dot.color" class="rounded-circle position-absolute circle-new d-flex justify-content-center align-items-center">
          <h6 class="text-light font-weight-light m-0">{{ data.box3.dot.text }}</h6>
        </div>
        <img :src="data.box1.backgroundImgUrl" :alt="data.box3.backgroundImgUrl" />
        <div class="blue-bottom-box position-absolute w-100 bg-blue d-flex align-items-center">
          <p class="text-white m-0 ml-4">{{ data.box1.textBlueBox }}</p>
        </div>
      </div>
      <!-- Box3 -->
      <div id="box1" class="one-swipe-box bg-secondary rounded">
        <div
          class="mb-3 w-100 h-100 d-flex flex-column position-absolute blue-layer"
          @mouseover="HoveringBox3 = true"
          @mouseout="HoveringBox3 = false"
          :class="{bgImgLayer: HoveringBox3, bgImgLayerDNone: !HoveringBox3}"
        >
          <iconMenuBoard />
          <h6 class="ml-3 mb-3 mt-auto text-light font-weight-light">New look men´s coat</h6>
          <span class="ml-3 badge white-badge badge-light bg-transparent border text-light font-weight-light border-white m-0 mb-1 rounded-0">Fashion</span>
          <p class="mb-2 ml-3 text-light font-weight-light">$220.00</p>
          <h5 class="mb-3 ml-3 text-primary font-weight-light">$190.00</h5>

          <div class="starrating-wrapper position-absolute">
            <starRating
              v-bind:rating="data.starRating.rating"
              class="starratinginactive d-flex"
              :class="{'star-rating-active': data.starRating.isActive, 'star-rating-inactive': !data.starRating.isActive}"
            />
          </div>
        </div>
        <div :class="data.box1.dot.color" class="rounded-circle position-absolute circle-new d-flex justify-content-center align-items-center">
          <h6 class="text-light font-weight-light m-0">{{ data.box1.dot.text }}</h6>
        </div>
        <img :src="data.box1.backgroundImgUrl" :alt="data.box1.backgroundImgUrl" />
        <div class="blue-bottom-box position-absolute w-100 bg-blue d-flex align-items-center">
          <p class="text-white m-0 ml-4">{{ data.box1.textBlueBox }}</p>
        </div>
      </div>
      <!-- Box 4 -->
      <!-- Box2 -->
      <div id="box1" class="one-swipe-box bg-secondary rounded">
        <div
          class="mb-3 w-100 h-100 d-flex flex-column position-absolute blue-layer"
          @mouseover="HoveringBox4 = true"
          @mouseout="HoveringBox4 = false"
          :class="{bgImgLayer: HoveringBox4, bgImgLayerDNone: !HoveringBox4}"
        >
          <iconMenuBoard />
          <h6 class="ml-3 mb-3 mt-auto text-light font-weight-light">New look men´s coat</h6>
          <span class="ml-3 badge white-badge badge-light bg-transparent border text-light font-weight-light border-white m-0 mb-1 rounded-0">Fashion</span>
          <p class="mb-2 ml-3 text-light font-weight-light">$220.00</p>
          <h5 class="mb-3 ml-3 text-primary font-weight-light">$190.00</h5>

          <div class="starrating-wrapper position-absolute">
            <starRating
              v-bind:rating="data.starRating.rating"
              class="starratinginactive d-flex"
              :class="{'star-rating-active': data.starRating.isActive, 'star-rating-inactive': !data.starRating.isActive}"
            />
          </div>
        </div>
        <div :class="data.box1.dot.color" class="rounded-circle position-absolute circle-new d-flex justify-content-center align-items-center">
          <h6 class="text-light font-weight-light m-0">{{ data.box1.dot.text }}</h6>
        </div>
        <img :src="data.box1.backgroundImgUrl" :alt="data.box1.backgroundImgUrl" />
        <div class="blue-bottom-box position-absolute w-100 bg-blue d-flex align-items-center">
          <p class="text-white m-0 ml-4">{{ data.box1.textBlueBox }}</p>
        </div>
      </div>

      <template slot="next"
        ><div class="ml-3 nav-buttons prev nav-buttons rounded-circle bg-primary d-flex justify-content-center">
          <img src="/img/ThreeCardSlider/arrow left.svg" alt="" /></div
      ></template>
    </carousel>
  </div>
</template>

<script>
import iconMenuBoard from "@/components/iconMenuBoard";
import starRating from "@/components/starRating";
import carousel from "vue-owl-carousel";

export default {
  props: {data: Object},
  data() {
    return {
      HoveringBox1: false,
      HoveringBox2: false,
      HoveringBox3: false,
      HoveringBox4: false,
    };
  },
  components: {
    iconMenuBoard,
    starRating,
    carousel,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/custom.scss";

.blue-layer {
  z-index: 5 !important;
}

.one-swipe-box {
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
  .white-badge {
    height: 20px;
    width: 60px;
  }
  p:nth-child(3) {
    text-decoration: line-through;
  }
}

.owl-carousel .active span {
  border-radius: 30px;
}
.nav-buttons {
  height: 0px !important;
  width: 0px !important;
  visibility: hidden !important;
  opacity: 0 !important;
  display: none;
}

@media (min-width: 768px) {
  .nav-buttons {
    height: 64px !important;
    width: 64px !important;
    visibility: visible !important;
    opacity: 1 !important;
    display: inline-block;
  }
}

.bgImgLayer {
  background-color: transparentize($blue, 0.07);
  height: 100%;
  width: 100%;
  z-index: 6;
  opacity: 1;
}
.bgImgLayerDNone {
  opacity: 0;
}
.star-rating-active {
  display: block;
}
.star-rating-inactive {
  display: none;
}
.starrating-wrapper {
  right: 0;
  bottom: 0;
}
</style>
