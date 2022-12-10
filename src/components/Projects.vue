<script setup lang="ts">
import imageNewizze from '@/assets/images/projects/newizze.png'
import imageEcofleet from '@/assets/images/projects/ecofleet.png'
import imageStubtools from '@/assets/images/projects/stubtools.png'
import imagePrimoBrowser from '@/assets/images/projects/primoBrowser.png'
import imageMlms from '@/assets/images/projects/mlms.png'

const projects = [
  {
    'title': 'Newizze CRM - Company CRM system',
    'text': `Company internal affairs management system.
        What I worked on: fixed bugs, added new functionality, developed inventory functionality, etc.`,
    'image': imageNewizze,
  },
  {
    'title': 'Ecofleet - Delivery system in UK',
    'text': `The system received orders from the site, then, after receiving
        confirmation, sent them to drivers via the API
        <a href="https://onfleet.com/" target="_blank">Onfleet</a>.
        On this project, I fixed bugs, generated QR codes for stickers for delivery, created functionality for generating reports in Excel format, etc.`,
    'image': imageEcofleet,
    'link': 'https://ecofleet.com/',
  },
  {
    'title': 'Stubtools',
    'text': `Innovative tools for professional ticket resellers.
        On this project, I created a site based on the "Landrick" template,
        which sells access to Chrome extensions, some of which we supported
        with other developers, and some we developed from scratch.
        Among other things, a CRM system based on "Orchid" was developed from scratch
        to manage subscriptions to these extensions,
        and Stripe was also integrated for payment.`,
    'image': imageStubtools,
    'link': 'https://stubtools.com/',
  },
  {
    'title': 'Primo Browser',
    'text': `A similar Stubtools system for selling and managing
        subscriptions to Primo Browser.`,
    'image': imagePrimoBrowser,
    'link': 'https://primowebbrowser.com/',
  },
  {
    'title': 'MLMS',
    'text': `This is a CRM system that allows you to automatically publish
        posts on Facebook and Instagram for promotion.
        On this project, I rewrote the publishing logic and also
        rewrote the old code written in jQuery on Vue components
        to create reactivity.`,
    'image': imageMlms,
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
            <a v-if="project.link" target="_blank" :href="project.link" class="btn btn-primary" disabled>Visit site</a>
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
