<template>
  <div class="musicList">
    <div class="musicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="mlist">
      <div class="swiper-container11">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            @click="$router.push(`/listview?id=${item.id}`)"
            v-for="(item, index) in imgs"
            :key="index"
          >
            <img :src="item.picUrl" />
            <div class="name">{{ item.name }}</div>
            <div class="count">
              <span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-liebiao"></use>
                </svg> </span
              ><span>{{ item.playCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "swiper/css/swiper.css";
import Swiper from "swiper";
import { getPlayList } from "@/api";
import { ref, onUpdated, onMounted } from "vue";
let imgs = ref();
onMounted(async () => {
  let res = await getPlayList(10);
  imgs.value = res.data.result;
});

onUpdated(() => {
  new Swiper(".swiper-container11", {
    slidesPerView: 3,
    spaceBetween: 10,
  });
});
</script>

<style lang="less" scoped>
.musicList {
  width: 7.35rem;
  padding: 0 0.3rem;
  overflow: hidden;
  .musicList-top {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    margin-bottom: 0.1rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      padding: 0.1rem;
      border-radius: 0.2rem;
      font-size: 0.25rem;
    }
  }
  .mlist {
    .swiper-container11 {
      width: 100%;
      // height: 3rem;
      .swiper-slide {
        position: relative;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.1rem;
        }
        .name {
          height: 0.8rem;
        }
        .count {
          position: absolute;
          right: 0.1rem;
          top: 0.1rem;
        }
      }
    }
  }
}
</style>
