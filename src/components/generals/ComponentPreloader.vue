<script setup>
import LogoRotating from "@/components/icons/IconRotating.vue";

defineProps({isLoading: Boolean})
</script>

<template>
  <div :class="{active: isLoading}" class="preloader">
    <LogoRotating/>
  </div>
</template>

<style scoped lang="scss">
.preloader{
  background-color: black;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  background-color: rgba(0,0,0,0.8);
  opacity: 0;
  transition: 0.2s;
  pointer-events: none;
  z-index: 100;

  &.active{
    pointer-events: all;
    opacity: 1;
  }
}
</style>
