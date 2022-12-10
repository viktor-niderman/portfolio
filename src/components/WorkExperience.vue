<script setup lang="ts">
import imageGendalf from '@/assets/icons/gendalf.png'
import imageNewizze from '@/assets/icons/newizze.png'
let jobs = [
  {
    'title': 'Newizze',
    'link': 'https://newizze.com/',
    'icon': imageNewizze,
    'date': '2021 - until now',
    'post': 'Fullstack developer',
    'city': 'Portugal (Full remote job)',
    'text': 'Development of B2B CRM systems.',
  },
  {
    'title': 'Gendalf',
    'link': 'https://gendalf.ru/',
    'icon': imageGendalf,
    'date': '2019 - 2021',
    'post': 'Teacher',
    'city': 'Taganrog / Remote job (after Covid)',
    'text': 'Web development teacher for schoolchildren. I worked with children in grades 5-11.',
  }
]
</script>

<template>
  <div>
    <h3>👩🏻‍💻 Work experience</h3>
    <div v-for="job in jobs" class="card mt-4">
      <div class="card-header">
        <h4>
          <img :src="job.icon" width="28" class="me-3">
          <a :href="job.link" class="link-info me-2">{{job.title}}</a>
          <span class="badge bg-secondary">{{job.date}}</span>
        </h4>
      </div>
      <div class="card-body">
        <p><strong>{{job.post}}</strong>, {{job.city}}</p>
        <p>
          {{job.text}}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
