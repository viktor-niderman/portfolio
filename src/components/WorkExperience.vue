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
    'text': 'Web development teacher for schoolchildren.',
  }
]
</script>

<template>
  <div>
    <h3>👩🏻‍💻 Work experience</h3>
    <div class="row">
      <div v-for="job in jobs" class="col-12 col-lg-6">
        <div class="card mt-4">
          <div class="card-header">
            <h4>
              <img :src="job.icon" width="28" class="me-3">
              <a :href="job.link" class="link-info me-2" translate="no">{{job.title}}</a>
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

    </div>
  </div>
</template>

<style scoped>

</style>
