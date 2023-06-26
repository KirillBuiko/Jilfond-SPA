<script setup>
defineProps({
  inputType: String,
  placeholder: String,
  modelValue: String
})
defineEmits(['update:modelValue'])
</script>

<template>
  <input :type="inputType"
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)"
         :placeholder="placeholder"/>
</template>

<style scoped lang="scss">
input {
  height: 49px;
  padding: 16px 24px;
  border-radius: 8px;
  color: #76787D;
  border: 1.5px solid #E9ECEF;
  background: #FFF;
  font-size: 14px;
}
</style>
