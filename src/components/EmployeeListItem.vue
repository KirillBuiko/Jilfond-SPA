<script setup>
import PlaceholderImage from "@/components/icons/PlaceholderImage.vue";

defineProps({
  info: Object,
  isSelected: Boolean
})
</script>

<template>
  <div class="employee-list-item">
    <div class="employee-photo">
      <PlaceholderImage/>
    </div>
    <div class="info" :class="{selected: isSelected}">
      <div class="name">{{ info.name }}</div>
      <div class="email">{{ info.email }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$item-height: 70px;

.employee-list-item {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: $item-height;
  font-size: 14px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);
  border-radius: 10px;
  overflow: hidden;
  -webkit-user-select: none;

  .employee-photo {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 0 0 $item-height;
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

    &.selected {
      background-color: #E0E0E0;
    }

    .name {
      color: #333;
      font-weight: 600;
      margin-bottom: 5px;
    }

    .email {
      color: #76787D;
    }

    & > * {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>