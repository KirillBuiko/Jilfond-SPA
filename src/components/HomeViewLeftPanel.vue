<script setup>
import ControlInput from "@/components/controls/ControlInput.vue";
import {ref} from "vue";
import {useStore} from "vuex";
import ComponentPreloader from "@/components/generals/ComponentPreloader.vue";
import EmployeeListItem from "@/components/EmployeeListItem.vue";

const inputText = ref("");
const store = useStore();
const {employees} = store.state;
const timerDelay = 500;
let timerID = -1;

function loadAndSearch() {
  store.commit('employees/setLoading', true);
  setTimeout(() => store.commit('employees/setLoading', false), 5000);
}

function onUpdate() {
  if (timerID !== -1) clearTimeout(timerID);
  timerID = setTimeout(loadAndSearch, timerDelay);
}

function onItemClick(ID) {
  store.commit('employees/selectEmployee', ID);
}
</script>

<template>
  <aside>
    <h1 class="search-label">Поиск сотрудников</h1>
    <ControlInput class="search-input"
                  input-type="text"
                  placeholder="Введите имя или ID"
                  :model-value="inputText"
                  @update:model-value="onUpdate"/>
    <h1 class="result-label">Результаты</h1>
    <div class="search-result">
      <ComponentPreloader :is-loading="employees.isLoading"/>
      <div class="placeholder" v-if="employees.employeesList.size === 0">Здесь будет результат</div>
      <div class="search-result-list">
        <EmployeeListItem class="search-result-item"
                          v-for="[key, value] in employees.employeesList"
                          :key="key"
                          :info="value"
                          :is-selected="employees.selectedEmployeeID === key"
                          @click="onItemClick(key)"/>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
$left-padding: 20px;
$right-padding: 31px;
$aside-width: 290px;

aside {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 0 0 $aside-width;
  padding: 27px 0 20px 0;
  overflow: hidden;

  & > *:not(.search-result) {
    margin-right: $right-padding;
    margin-left: $left-padding;
  }

  h1 {
    color: #333;
    font-size: 1rem;
    font-weight: 600;
    line-height: 140%;

    &.search-label {
      margin-bottom: 14px;
    }

    &.result-label {
      margin-top: 29px;
      margin-bottom: 10px;
    }
  }

  .search-result {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    flex: 1 0;
    border-radius: 15px;
    overflow: hidden;

    .search-result-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: $left-padding;
      height: 100%;
      width: 100%;
      overflow: auto;
      scrollbar-gutter: stable;

      .search-result-item {
        margin-bottom: 18px;
        flex: 0 0 auto;
        width: $aside-width - $left-padding - $right-padding;
        &:first-child {
          margin-top: 8px;
        }
      }
    }
  }

  .placeholder {
    color: #76787D;
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>