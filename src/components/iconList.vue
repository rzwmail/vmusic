<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfont_guangpan"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-Iconfont"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.iconList {
  display: flex;
  justify-content: space-between;
  align-items: center;
	padding: 0.3rem;
	.icon{
		border: 1px solid #eee;
		width: 1.2rem;
		height: 1.2rem;
	}
  .iconItem {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
	span{
		font-size: 0.25rem;
	}
}
</style>
