<script setup>
import HomeViewSearchPanel from "@/components/HomeViewSearchPanel.vue";
import HomeViewEmployeeProfile from "@/components/HomeViewEmployeeProfile.vue";
</script>

<template>
  <main class="home-view-main">
    <HomeViewSearchPanel/>
    <HomeViewEmployeeProfile/>
  </main>
</template>

<style scoped lang="scss">
.home-view-main {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1 0;
  overflow: hidden;
  border-radius: 10px;
  background: #FDFDFD;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);
}
</style>