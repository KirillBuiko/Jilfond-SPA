<script setup>
defineProps({
  info: Object
})
</script>

<template>
  <div class="employee-list-item">
    <div class="employee-photo"/>
    <div class="info">
      <div class="name">{{ info.name }}</div>
      <div class="email">{{ info.email }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.employee-list-item {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 0 0 70px;
  font-size: 14px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);
  border-radius: 10px;
  overflow: hidden;

  .employee-photo {
    flex: 0 0 70px;
    border-right: 1px solid #E0E0E0;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    overflow: hidden;
    flex: 1 1;
    padding: 0 10px 0 15px;

    .name {
      color: #333;
      font-weight: 600;
      margin-bottom: 5px;
    }

    .email {
      color: #76787D;
    }

    .name, .email {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>