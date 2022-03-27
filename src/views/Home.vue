<template>
  <div class="home">
    <TopNav />
    <swiper-com />
    <icon-list />
    <music-list />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import swiperCom from "@/components/swiperCom.vue";
import iconList from "@/components/iconList.vue";
import musicList from "@/components/musicList.vue";

export default {
  components: {
    TopNav,
    swiperCom,
    iconList,
    musicList,
  },
};
</script>
<style lang="less" scoped></style>
