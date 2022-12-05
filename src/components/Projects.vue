<script setup lang="ts">
import imageNewizze from '@/assets/images/projects/ecofleet.png'
import imageEcofleet from '@/assets/images/projects/ecofleet.png'

const projects = [
  {
    'title': 'Newizze crm - CRM system of the company',
    'text': `Management system for the internal affairs of the company.
        What I worked on: fixed bugs, added new functionality
        (task board, inventory page), etc.`,
    'image': '',
  },
  {
    'title': 'Ecofleet - Delivery system in UK',
    'text': `The system received orders from the site, then, after receiving
        confirmation, sent them to drivers via the API
        <a href="https://onfleet.com/" target="_blank">onfleet</a>.
        On this project, I fixed errors, generated QR codes for stickers
        on boxes, generated Excel reports...`,
    'image': imageEcofleet,
  },
  {
    'title': 'Stubtools',
    'text': 'Innovative tools for professional ticket resellers',
    'image': '',
  },
  {
    'title': 'MLMS',
    'text': '...',
    'image': '',
  },
  {
    'title': 'Primo Browser',
    'text': '...',
    'image': '',
  },
]
</script>

<template>
  <div>
    <h3>💼 Projects</h3>
    <div class="d-flex flex-wrap justify-content-between">
      <div class="card m-2" style="width: 18rem;" v-for="project in projects">
        <img :src="project.image" class="card-img-top" alt="There is no photo">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text" v-html="project.text"></p>
          <div class="d-flex align-items-end flex-grow-1">
            <button class="btn btn-primary" disabled>Visit site</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 120px;
}
</style>
