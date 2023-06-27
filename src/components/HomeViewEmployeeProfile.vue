<script setup>
import {useStore} from "vuex";
import {computed} from "vue";
import PlaceholderImage from "@/components/icons/PlaceholderImage.vue";

const store = useStore();
const {employees} = store.state;
const selectedEmployee = computed(() => employees.employeesList.get(employees.selectedEmployeeID));
</script>

<template>
  <div class="employee-profile-wrapper">
    <div class="placeholder" v-if="selectedEmployee === undefined">Выберите сотрудника, чтобы посмотреть его профиль
    </div>
    <div class="employee-profile" v-else>
      <div class="employee-photo">
        <PlaceholderImage/>
      </div>
      <div class="employee-info-wrapper">
        <h1 class="name">{{ selectedEmployee.name }}</h1>
        <div class="email">
          <span class="label">email:&ensp;</span>
          <span class="value">{{ selectedEmployee.email }}</span>
        </div>
        <div class="phone">
          <span class="label">phone:&ensp;</span>
          <span class="value">{{ selectedEmployee.phone }}</span>
        </div>
        <div class="about">
          <h1>О себе</h1>
          <div class="value">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.employee-profile-wrapper {
  display: flex;
  flex-direction: row;
  flex: 1 0;
  align-items: stretch;
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

  .employee-profile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 61px;
    margin: 30px 30px 30px 21px;
    flex: 1 0;

    .employee-info-wrapper {
      overflow: auto;

      h1 {
        color: #000;
        font-size: 16px;
        font-weight: 600;
        line-height: 140%;
      }

      .label {
        color: #000;
        font-weight: 600;
        font-size: 14px;
      }

      .value {
        color: #76787D;
        font-size: 14px;
      }

      .name, .email {
        margin-bottom: 10px;
      }

      .phone {
        margin-bottom: 25px;
      }

      .about h1 {
        margin-bottom: 25px;
      }
    }
  }
}
</style>