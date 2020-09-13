<template>
  <div class="d-flex justify-content-center align-items-center flex-column mt-5">
    <div class="d-flex mt-3">
      <h2>LATEST</h2>
      <h2 class="ml-2 text-primary">BLOG</h2>
    </div>
    <img class="mt-3" src="/img/multi/zigzag.svg" alt="zigzag" />
    <p class="mt-4">Check out our latest products from top fashion designers</p>
    <div class="d-flex mt-4 flex-column flex-xl-row justify-content-center align-items-center">
      <!-- box 1 -->
      <div class="blog-post-1 m-3">
        <div class="blog-post bg-gray rounded position-relative">
          <div class="calendar-box rounded bg-blue position-absolute">
            <div class="date-box bg-primary text-light ml-4 mb-3 d-flex justify-content-center flex-column align-items-center">
              <h2>29</h2>
              <h6>MAR</h6>
            </div>

            <small
              ><p class="ml-4 d-inline text-light">By&nbsp;</p>
              <p class="d-inline text-light">
                <u>Adam More</u>
              </p></small
            >
            <p class="ml-4 mt-3 text-primary mr-5">
              A beautiful scenery in the world we are missing
            </p>
            <span class="ml-4 badge badge-light bg-transparent border text-light font-weight-light border-white rounded-0">Travel</span>
            <span class="ml-2 badge badge-light bg-transparent border text-light font-weight-light border-white rounded-0">Fashion</span>
            <button type="button" class="ml-4 d-block btn btn-light button text-primary font-weight-normal p-1 mt-4">Read more</button>
          </div>
        </div>
      </div>

      <!-- box 2 -->
      <div class="blog-post-2 m-3">
        <div class="blog-post bg-gray rounded position-relative">
          <div class="calendar-box rounded bg-blue position-absolute">
            <div class="date-box bg-primary text-light ml-4 mb-3 d-flex justify-content-center flex-column align-items-center">
              <h2>18</h2>
              <h6>JUL</h6>
            </div>

            <small
              ><p class="ml-4 d-inline text-light">By&nbsp;</p>
              <p class="d-inline text-light">
                <u>Jonathan Doe</u>
              </p></small
            >
            <p class="ml-4 mt-3 text-primary mr-5">
              A beautiful scenery in the world we are missing
            </p>
            <span class="ml-4 badge badge-light bg-transparent border text-light font-weight-light border-white rounded-0">Travel</span>
            <span class="ml-2 badge badge-light bg-transparent border text-light font-weight-light border-white rounded-0">Fashion</span>
            <button type="button" class="ml-4 d-block btn btn-light button text-primary font-weight-normal p-1 mt-4">Read more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.blog-post-1 {
  width: 90vw;
}
.blog-post-2 {
  width: 90vw;
}
.blog-post {
  height: 400px;
  width: 350px;
}
.calendar-box {
  height: 304px;
  width: 275px;
  top: 110px;
  right: -30px;
  .date-box {
    height: 77px;
    width: 60px;
  }
  .button {
    border-radius: 45px;
    font-size: 16px;
    width: 118px;
  }
}
@media (min-width: 750px) {
  .blog-post-1 {
    width: 541px;
  }
  .blog-post-2 {
    width: 541px;
  }
  .blog-post {
    height: 400px;
    width: 350px;
    left: 0;
  }
  .calendar-box {
    top: 50px;
    right: -191px;
  }
}
</style>
