<script setup>
import HomeViewLeftPanel from "@/components/HomeViewLeftPanel.vue";
import HomeViewEmployeeProfile from "@/components/HomeViewEmployeeProfile.vue";
</script>

<template>
  <main>
    <HomeViewLeftPanel/>
    <HomeViewEmployeeProfile/>
  </main>
</template>

<style scoped lang="scss">
main {
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