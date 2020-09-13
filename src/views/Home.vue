<template>
  <div class="home">
    <ShoppingIsMoreFunJumbotron />
    <FourCardsFreeShipping />
    <ShopByCategory />
    <ThreeCardSlider v-bind:data="newArrivals" />
    <PercentOffJumbotron />
    <ThreeCardSlider v-bind:data="featuredProducts" />
    <FlashSaleJumbotron />
    <TopSellers />
    <Review />
    <LatestBlog />
    <Subscribe />
    <Logos />
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingIsMoreFunJumbotron from "@/components/ShoppingIsMoreFunJumbotron.vue";
import FourCardsFreeShipping from "@/components/FourCardsFreeShipping.vue";
import ShopByCategory from "@/components/ShopByCategory.vue";
import ThreeCardSlider from "@/components/ThreeCardSlider.vue";
import PercentOffJumbotron from "@/components/PercentOffJumbotron.vue";
import FlashSaleJumbotron from "@/components/FlashSaleJumbotron.vue";
import TopSellers from "@/components/TopSellers.vue";
import Review from "@/components/Review.vue";
import LatestBlog from "@/components/LatestBlog.vue";
import Subscribe from "@/components/Subscribe.vue";
import Logos from "@/components/Logos.vue";

export default {
  name: "Home",
  components: {
    ShoppingIsMoreFunJumbotron,
    FourCardsFreeShipping,
    ShopByCategory,
    ThreeCardSlider,
    PercentOffJumbotron,
    FlashSaleJumbotron,
    TopSellers,
    Review,
    LatestBlog,
    Subscribe,
    Logos,
  },
  props: [],
  data() {
    return {
      newArrivals: {
        headline: {word1: "NEW", word2: "ARRIVALS"},
        box1: {dot: {text: "NEW", color: "bg-primary"}, backgroundImgUrl: "/img/ThreeCardSlider/boySilhouette.svg", textBlueBox: "Blue silk flare sleeved top"},
        box2: {dot: null, backgroundImgUrl: "img/ThreeCardSlider/boySilhouette2.svg", textBlueBox: null},
        box3: {dot: {text: "NEW", color: "bg-primary"}, backgroundImgUrl: "/img/ThreeCardSlider/girlSilhouette.svg", textBlueBox: "Circle pattern girls shirt"},
        starRating: {isActive: false, rating: 0},
      },
      featuredProducts: {
        headline: {word1: "FEATURED", word2: "PRODUCTS"},
        box1: {dot: {text: "HOT", color: "bg-warning"}, backgroundImgUrl: "/img/ThreeCardSlider/womenInBigJacketSilhouette.svg", textBlueBox: "Winter collection for womens´s"},
        box2: {dot: null, backgroundImgUrl: "/img/ThreeCardSlider/manInJacket.svg", textBlueBox: null},
        box3: {dot: {text: "-30%", color: "bg-success"}, backgroundImgUrl: "/img/ThreeCardSlider/jacket.svg", textBlueBox: "Red women's blazer full"},
        starRating: {isActive: true, rating: 4},
      },
    };
  },
};
</script>
