<script setup lang="ts">
import imageGendalf from '@/assets/icons/companies/gendalf.png'
import imageNewizze from '@/assets/icons/companies/newizze.png'
import imagePrimo from '@/assets/icons/companies/primo.png'

let jobs = [
  {
    'title': 'Primobrowser LLC',
    'link': 'https://primowebbrowser.com/',
    'icon': imagePrimo,
    'date': '2023 - until now',
    'post': 'Fullstack developer',
    'city': 'USA (Full remote job)',
    'text': 'Development of website, admin panel, chrome extensions.',
    'isClose': false,
  },
  {
    'title': 'Newizze',
    'link': '',
    'icon': imageNewizze,
    'date': '2021 - 2023',
    'post': 'Fullstack developer',
    'city': 'Portugal (Full remote job)',
    'text': 'Development of B2B CRM systems.',
    'isClose': true,
  },
  {
    'title': 'Gendalf',
    'link': 'https://gendalf.ru/',
    'icon': imageGendalf,
    'date': '2019 - 2021',
    'post': 'Teacher',
    'city': 'Taganrog / Remote job (after Covid)',
    'text': 'Web development teacher for schoolchildren.',
    'isClose': false,
  }
]
</script>

<template>
  <div>
    <h3>👩🏻‍💻 Work experience</h3>
    <div class="row">
      <div v-for="job in jobs" class="col-12 col-lg-6">
        <div class="card mt-4">
          <div class="card-header d-flex align-items-center">
            <div class="d-flex align-items-center">
              <div class="image-container">
                <img :src="job.icon" width="28" class="me-3" :alt="job.title">
              </div>
              <div class="lead fw-bold">
                <a v-if="job.link" :href="job.link" target="_blank" class="link-info" translate="no">{{job.title}}</a>
                <span v-else>{{job.title}}</span>
              </div>
              <div v-if="job.isClose" class="ms-1">
                <span class="badge bg-danger">Closed</span>
              </div>
              <div class="ms-1">
                <span class="badge bg-secondary">{{job.date}}</span>
              </div>

            </div>
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
img {
  user-select: none;
}
.image-container {
  min-width: 40px;
}
</style>
