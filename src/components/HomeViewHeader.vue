<script setup>

</script>

<template>
  <header class="home-view-header">
    <span class="logo-label">Жилфонд</span>
    <span class="user-label">Пользователь</span>
  </header>
</template>

<style scoped lang="scss">
.home-view-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 99px;

  .logo-label {
    color: #E31F24;
    font-size: 2rem;
    font-weight: 700;
  }

  .user-label {
    color: #333;
    font-size: 1rem;
  }
}
</style>