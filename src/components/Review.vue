<template>
  <div class="wrapper-review bg-blue mt-5 d-flex justify-content-center flex-column align-items-center">
    <div class="mb-auto">
      <img class="mr-3" src="/img/review/quote sign.svg" alt="" />
      <img src="/img/review/quote sign.svg" alt="" />
    </div>
    <div class="review-card d-flex flex-column align-items-center text-light">
      <div class="customer-picture-box bg-gray "></div>
      <starRating class="mt-4" v-bind:rating="4" />
      <h6 class="text-primary font-weight-light mt-2">JOHNY WESMULLAR</h6>
      <p><small>CEO, Biotech Inc.</small></p>
      <p class="text-center mt-3 m-0 inline-block bread-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
        a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </p>
    </div>
  </div>
</template>

<script>
import starRating from "@/components/starRating";
export default {
  components: {
    starRating,
  },
};
</script>

<style lang="scss">
.wrapper-review {
  height: 650px;
  width: 100%;
  .review-card {
    height: 550px;

    .customer-picture-box {
      height: 200px;
      width: 190px;
    }
    .bread-text {
      line-height: 1.6;
      max-width: 80vw;
    }
  }
}

@media (min-width: 768px) {
  .wrapper-review {
    height: 717px;
    .review-card {
      height: 580px;
      .bread-text {
        max-width: 746px;
      }
    }
  }
}
</style>
