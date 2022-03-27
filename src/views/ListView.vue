<template>
  <list-view-top :playList="playList"></list-view-top>
</template>

<script setup>
import { getPlayListDetail } from "@/api/index";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import listViewTop from "@/components/listViewTop.vue";

let data = ref({});
let playList = ref({});
const route = useRoute();

onMounted(async () => {
  data.value = await getPlayListDetail(route.query.id);
  playList.value = data.value.data.playlist;
  console.log(data.value.data.playlist);
});
</script>

<style lang="scss" scoped></style>
