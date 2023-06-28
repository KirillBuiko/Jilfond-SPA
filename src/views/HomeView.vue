<script setup>
import HomeViewHeader from "@/components/HomeViewHeader.vue";
import HomeViewMain from "@/components/HomeViewMain.vue";
</script>

<template>
  <div class="home-view-wrapper">
    <div class="home-view">
      <HomeViewHeader/>
      <HomeViewMain/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-view-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 16px 20px 59px 20px;

  .home-view {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 1366px;
    width: 100%;
    height: 100%;
  }
}
</style>