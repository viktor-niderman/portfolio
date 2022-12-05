<script setup lang="ts">
import ContactInfo from '@/components/ContactInfo.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="container">
    <ContactInfo></ContactInfo>
    <main>
      <hr>
      <WorkExperience></WorkExperience>
      <hr>
      <Skills></Skills>
      <hr>
      <Projects></Projects>
      <hr>
      <Footer></Footer>
    </main>

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
