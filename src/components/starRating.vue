<template>
  <div v-html="template" class="starrating-wrapper m-3"></div>
</template>

<script>
export default {
  props: ["rating"],
  data() {
    return {
      template: "",
    };
  },
  created() {
    for (let i = 0; i < this.rating; i++) {
      let oneTemplate = `<img src="/img/starRating/starSolidIcon.svg" alt="star" />`;
      this.template = this.template + oneTemplate;
    }
    let emptyStars = 5 - this.rating;
    for (let i = 0; i < emptyStars; i++) {
      let oneTemplate = `<img src="/img/starRating/starOutlineIcon.svg" alt="star" />`;
      this.template = this.template + oneTemplate;
    }
  },
};
</script>

<style lang="scss"></style>
