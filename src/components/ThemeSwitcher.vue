<script setup lang="ts">
import {onMounted, ref, watch} from "vue";

let isDarkTheme = ref(false);

onMounted(() => {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  isDarkTheme.value = darkThemeMq.matches;

  if (localStorage['prefers-color-scheme-is-dark'] === 'true') {
    isDarkTheme.value = true;
  }

  darkThemeMq.addEventListener('change', e => {
    isDarkTheme.value = e.matches;
  });
})

let toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  localStorage['prefers-color-scheme-is-dark'] = isDarkTheme.value;
}

watch(isDarkTheme, (isDarkTheme) => {
  document.body.dataset.theme = isDarkTheme ? 'dark' : 'light';
})

</script>

<template>
  <div class="d-flex">
    <div @click="toggleTheme">
      <svg v-if="isDarkTheme" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
    </div>
  </div>
</template>



<style scoped lang="scss">
svg {
  width: 25px;
}
* {
  user-select: none;
}
</style>
