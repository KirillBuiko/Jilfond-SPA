<script setup>

</script>

<template>
  <div class="employee-profile-wrapper">
    <div class="placeholder">Выберите сотрудника, чтобы посмотреть его профиль</div>
    <div class="employee-profile">

    </div>
  </div>
</template>

<style scoped lang="scss">
.employee-profile-wrapper {
  display: flex;
  flex-direction: row;
  flex: 1 0 0;
  background: #FFF;
  width: 100%;
  border-left: 1px solid #E0E0E0;

  .placeholder {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    color: #76787D;
    font-size: 14px;
  }
}
</style>