<template>
  <div class="listViewTop">
    <img class="bg" :src="playList.coverImgUrl" alt="" />
    <div class="listViewTopNav">
      <div class="back">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconfont_Upan"></use>
        </svg>
        <span class="title">歌单</span>
      </div>

      <div class="search">
        <svg class="icon search1" aria-hidden="true">
          <use xlink:href="#icon-iconfont_jiaodai"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
    <!-- <div class="content">
      <div class="content-left">
        <img :src="playList.coverImgUrl" />
      </div>
      <div class="content-right">
        <h3>{{ playList.name }}</h3>
        <div class="author">
          <img :src="playList.creator.avatarUrl" />
          <div>{{ playList.creator.nickname }}</div>
        </div>
      </div>
    </div> -->

    <audio controls src="http://music.163.com/song/media/outer/url?id=1893640990.mp3"></audio>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  playList: {
    type: Object,
  },
});
</script>

<style lang="less" scoped>
.listViewTop {
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter: blur(0.4rem);
  }
  width: 7.5ren;
  padding: 0 0.2rem;
  .listViewTopNav {
    color: #fff;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      margin-left: 0.4rem;
    }
    .search1 {
      margin-right: 0.4rem;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    img {
      height: 3.5rem;
      width: 3.5rem;
    }
    .content-right {
      width: 3.5rem;
      .author {
        display: flex;
        img {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 0.3rem;
        }
      }
    }
  }
}
</style>
