<template>
  <div class="d-flex justify-content-center align-items-center flex-column mt-5 mb-5">
    <div class="d-flex mt-3">
      <h2>SHOP BY</h2>
      <h2 class="ml-2 text-primary">CATEGORY</h2>
    </div>
    <img class="mt-3" src="/img/multi/zigzag.svg" alt="zigzag" />

    <div class="d-flex justify-content-center mt-1 mt-lg-3 ml-5 mr-5 mb-5">
      <div class="grid-container mt-5 text-primary">
        <div class="item1 item rounded d-flex justify-content-end flex-column">
          <div class="blue-corner-box d-flex align-items-center bg-blue pl-2"><h6 class="m-0 font-weight-light">Men</h6></div>
        </div>
        <div class="item2 item rounded d-flex justify-content-end flex-column">
          <div class="blue-corner-box d-flex align-items-center bg-blue pl-2"><h6 class="m-0 font-weight-light">Women</h6></div>
        </div>
        <div class="item3 item rounded d-flex justify-content-end flex-column">
          <div class="blue-corner-box d-flex align-items-center bg-blue pl-2"><h6 class="m-0 font-weight-light">Kids</h6></div>
        </div>
        <div class="item4 item rounded d-flex justify-content-end flex-column">
          <div class="blue-corner-box d-flex align-items-center bg-blue pl-2"><h6 class="m-0 font-weight-light">Shoes</h6></div>
        </div>
        <div class="item5 item rounded d-flex justify-content-end flex-column">
          <div class="blue-corner-box d-flex align-items-center bg-blue pl-2"><h6 class="m-0 font-weight-light">Hats</h6></div>
        </div>
        <div class="item6 item rounded d-flex justify-content-end flex-column">
          <div class="blue-corner-box d-flex align-items-center bg-blue pl-2">
            <div>
              <h6 class="m-0 font-weight-light">Sunglasses</h6>
              <p class="m-0 text-light font-weight-light">18 Products</p>
            </div>
          </div>
        </div>
        <div class="item7 item rounded d-flex justify-content-end flex-column">
          <div class="blue-corner-box d-flex align-items-center bg-blue pl-2"><h6 class="m-0 font-weight-light">Watches</h6></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/custom.scss";
.item1 {
  grid-area: item1;
  .blue-corner-box {
    width: 107px;
    height: 38px;
  }
}
.item2 {
  grid-area: item2;
  .blue-corner-box {
    width: 219px;
    height: 38px;
  }
}
.item3 {
  grid-area: item3;
  .blue-corner-box {
    width: 219px;
    height: 38px;
  }
}
.item4 {
  grid-area: item4;
  .blue-corner-box {
    width: 219px;
    height: 38px;
  }
}
.item5 {
  grid-area: item5;
  .blue-corner-box {
    width: 107px;
    height: 38px;
  }
}
.item6 {
  grid-area: item6;
  .blue-corner-box {
    width: 219px;
    height: 75px;
  }
  p {
    font-size: 10px;
  }
}
.item7 {
  grid-area: item7;
  .blue-corner-box {
    width: 107px;
    height: 38px;
  }
}

.grid-container {
  width: 1100px;
  height: 660px;
  display: grid;
  grid-template-areas:
    "item1 item2 item2 item3 item3"
    "item4 item4 item5 item3 item3"
    "item4 item4 item6 item6 item7";
}
.item {
  background-color: $blue;
  .blue-corner-box {
    border-radius: 0 5px 0 5px !important;
  }
  margin: 5px;
}
@media (max-width: 1199.98px) {
  .grid-container {
    width: 90vw;
    height: calc(0.7 * 90vw);
  }
  .item {
    .blue-corner-box {
      width: 50% !important;
      height: 25px;
    }
  }
  .item6 {
    .blue-corner-box {
      height: 45px !important;
    }
  }
}
@media (min-width: 576px) {
  .item {
    background-color: $gray;
  }
}
</style>
