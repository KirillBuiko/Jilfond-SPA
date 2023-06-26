<script setup>
import ControlInput from "@/components/controls/ControlInput.vue";
import {ref} from "vue";
import {useStore} from "vuex";
import ComponentPreloader from "@/components/generals/ComponentPreloader.vue";
import EmployeeListItem from "@/components/EmployeeListItem.vue";

const inputText = ref("");
const {state, commit} = useStore();
const {employees} = state;
const timerDelay = 500;
let timerID = -1;

function loadAndSearch() {
  commit('employees/setLoading', true);
  setTimeout(()=>commit('employees/setLoading', false), 5000);
}

function onUpdate() {
  if(timerID !== -1) clearTimeout(timerID);
  timerID = setTimeout(loadAndSearch, timerDelay);
}
</script>

<template>
  <aside>
    <h1>Поиск сотрудников</h1>
    <ControlInput class="search-input"
                  input-type="text"
                  placeholder="Введите имя или ID"
                  :model-value="inputText"
                  @update:model-value="onUpdate"/>
    <h1>Результаты</h1>
    <div class="search-result">
      <ComponentPreloader :is-loading="employees.isLoading"/>
      <div class="placeholder" v-if="employees.employeesList.size === 0">Здесь будет результат</div>
      <div class="search-result-list">
        <EmployeeListItem v-for="[key, value] in employees.employeesList" :key="key" :info="value"/>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
aside {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 0 0 290px;
  padding: 27px 31px 20px 20px;

  h1 {
    color: #333;
    font-size: 1rem;
    font-weight: 600;
    line-height: 140%;
  }

  .search-input {
    margin: 22px 0;
  }

  .search-result {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1 0;
    border-radius: 15px;
    margin: 10px -31px -20px -20px;
    overflow: hidden;

    .search-result-list {
      padding: 0 31px 0 20px;
      height: 100%;
      width: 100%;
      overflow: auto;

      & > * {
        margin-bottom: 18px;
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