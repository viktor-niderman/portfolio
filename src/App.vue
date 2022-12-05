<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue'
</script>

<template>
  <Header></Header>
<!--  <header>-->
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->

<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->

  <RouterView />
  <Footer></Footer>
</template>

<style scoped>

</style>
