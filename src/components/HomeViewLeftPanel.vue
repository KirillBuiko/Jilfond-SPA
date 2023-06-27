<script setup>
import ControlInput from "@/components/controls/ControlInput.vue";
import {computed, ref, watch} from "vue";
import {useStore} from "vuex";
import ComponentPreloader from "@/components/generals/ComponentPreloader.vue";
import EmployeeListItem from "@/components/EmployeeListItem.vue";

const searchText = ref("");
const searchResultArray = ref(undefined);
const isRequestError = ref(false);
const store = useStore();
const {employees} = store.state;
const timerDelay = 500;
let timerID = -1;

const placeholderText = computed(() => {
  if (employees.isLoading) return "";
  else if (isRequestError.value) return "Произошла ошибка запроса";
  else if (searchResultArray.value === undefined) return "Здесь будет результат";
  else if (searchResultArray.value.length === 0) return "Ничего не найдено";
  return "";
})

async function loadAndSearch() {
  try {
    searchResultArray.value = [];
    await store.dispatch("employees/getAllEmployees");
    searchResultArray.value = await store.dispatch('employees/findEmployee', searchText.value);
    isRequestError.value = false;
  } catch (e) {
    isRequestError.value = true;
  }
}

watch(searchText, (v, ov) => {
  if (timerID !== -1) clearTimeout(timerID);
  if(v.trim() === "") searchResultArray.value = [];
  else if(v.trim() !== ov.trim()) timerID = setTimeout(loadAndSearch, timerDelay);
});

function onItemClick(id) {
  store.commit('employees/selectEmployee', id);
}
</script>

<template>
  <aside>
    <h1 class="search-label">Поиск сотрудников</h1>
    <ControlInput class="search-input"
                  input-type="text"
                  placeholder="Введите имя или ID"
                  v-model="searchText"/>
    <h1 class="result-label">Результаты</h1>
    <div class="search-result">
      <ComponentPreloader :is-loading="employees.isLoading"/>
      <div class="search-result-list">
        <div class="placeholder"
             :class="{error: isRequestError}"
             v-if="placeholderText !== ''">
          {{ placeholderText }}
        </div>
        <EmployeeListItem class="search-result-item"
                          v-for="id in searchResultArray"
                          :key="id"
                          :info="employees.employeesList.get(id)"
                          :is-selected="employees.selectedEmployeeID === id"
                          @click="onItemClick(id)"/>
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

    &.error {
      color: indianred;
    }
  }
}
</style>