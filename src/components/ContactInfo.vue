<script setup lang="ts">
import TextScrambleEffect from "@/components/TextScrambleEffect.vue";
import GithubSvg from '@/assets/icons/vue/Github.svg.vue'
</script>

<template>
  <div class="py-5">
    <div class="row">
      <div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
        <img class="avatar" src="@/assets/images/avatar.jpg" alt="">
      </div>
      <div class="col d-flex flex-column justify-content-center">
        <h1 class="display-4 text-white-shadow ">Viktor Niderman</h1>
        <TextScrambleEffect :msg="['Fullstack Web Developer', 'Laravel/Vue developer']"></TextScrambleEffect>
        <div class="my-3">
          Based in Portugal 🇵🇹<br>
          Main stack:
          Laravel <img width="15px" src="@/assets/icons/laravel.svg" alt="">
          + Vue <img width="15px" src="@/assets/icons/vue.svg" alt="">
        </div>
        <div class="icons-container">
          <a href="https://t.me/viktor_niderman" target="_blank">
            <img src="@/assets/icons/telegram.svg" alt="">
          </a>
          <a href="https://www.linkedin.com/in/viktor-niderman-28bb47219/" target="_blank">
            <img src="@/assets/icons/linkedin.svg" alt="">
          </a>
          <a href="https://wa.me/79001204757" target="_blank">
            <img src="@/assets/icons/whatsapp.svg" alt="">
          </a>
          <a href="https://github.com/viktor-niderman" target="_blank">
            <GithubSvg></GithubSvg>
          </a>
          <a href="mailto:viktor.niderman@gmail.com" target="_blank" class="text-info">viktor.niderman@gmail.com</a><br>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  user-select: none;
}
.icons-container {
  img, svg {
    width: 35px;
    padding-right: 10px;
    height: auto;
  }
  user-select: none;

}
</style>
