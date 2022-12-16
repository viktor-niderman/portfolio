<script setup lang="ts">
import ContactInfo from '@/components/ContactInfo.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div>
    <main class="container">
      <ContactInfo></ContactInfo>
      <hr>
      <WorkExperience></WorkExperience>
      <hr>
      <Skills></Skills>
      <hr>
      <Projects></Projects>
    </main>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
