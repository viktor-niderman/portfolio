<script setup lang="ts">
import { RouterView } from 'vue-router'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
</script>

<template>
  <div>
    <ThemeSwitcher changeTheme="changeTheme" class="theme-switcher"></ThemeSwitcher>
    <RouterView/>
  </div>
</template>

<style lang="scss">
.theme-switcher {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  cursor: pointer;
}
</style>
