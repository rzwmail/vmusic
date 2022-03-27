<template>
  <div class="topswiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
          <img :src="item.pic" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";
import { getBanner } from "@/api/index.js";

export default {
  data() {
    return {
      imgs: [1, 2, 3, 4, 5, 6],
    };
  },

  async mounted() {
    let mySwiper = new Swiper(".swiper-container", {
      pagination: {
        loop: true,
        el: ".swiper-pagination",
      },
    });

    let res = await getBanner(1);
    this.imgs = res.data.banners;
  },
};
</script>

<style lang="less" scoped>
.topswiper {
  width: 7.5rem;
  height: 3rem;
  padding: 0 0.2rem;
  border-radius: 1rem;

  .swiper-wrapper {
    .swiper-slide img {
      width: 100%;
      height: 100%;
    }
  }
  ::v-deep .swiper-pagination-bullet-active {
    background: red;
  }
}
</style>
