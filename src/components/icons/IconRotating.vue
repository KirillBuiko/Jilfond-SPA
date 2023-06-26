<template>
  <div class="logo_rotating" ref="logo">
    <img src="/src/assets/images/preloader-icon.png" alt="">
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const logo = ref();
const width = ref("0px");
const maxWidth = ref("unset");

setTimeout(() => {
  if (logo.value && logo.value.parentElement) {
    const parent = logo.value.parentElement;
    width.value = Math.min(parent.clientHeight, parent.clientWidth) * 0.3 + 'px';
    maxWidth.value = "200px";
  }
}, 10)
</script>

<style scoped lang="scss">
@keyframes logoRounding {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.logo_rotating {
  max-width: v-bind("maxWidth");
  width: v-bind("width");
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in;

  animation-name: logoRounding;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-iteration-count: infinite;

  img {
    width: 100%;
    height: 100%;
  }
}

</style>
