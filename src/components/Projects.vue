<script setup lang="ts">
import { ref } from 'vue'
import imageNewizze from '@/assets/images/projects/newizze.png'
import imageEcofleet from '@/assets/images/projects/ecofleet.png'
import imageStubtools from '@/assets/images/projects/stubtools.png'
import imagePrimoBrowser from '@/assets/images/projects/primoBrowser.png'
import imageMlms from '@/assets/images/projects/mlms.png'
import imageHouseNovel from '@/assets/images/projects/housenovel.png'

const projects = [
  {
    'title': 'House Novel',
    'text': `HouseNovel.com is an interactive platform that allows users to discover,
      share, and save the history of homes across the United States.
      Users can search an address, neighborhood, or city, and add pictures, stories,
      or pieces of home history to the database. It aims to inspire the preservation of historical
      homes and communities.`,
    'image': imageHouseNovel,
    'link': 'https://housenovel.com/',
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
    'text': `Primo Browser is a privacy-focused browser built on the Chrome platform that supports
      multi-session browsing and the full Chrome extension library.
      It includes unique features such as a color-coded pricing extension,
      in-browser display of 2FA codes, and the ability to assign custom IP addresses to each tab.`,
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
  {
    'title': 'Ecofleet',
    'text': `Delivery system in UK. The system received orders from the site, then, after receiving
        confirmation, sent them to drivers via the API
        <a class="text-info" href="https://onfleet.com/" target="_blank">Onfleet</a>.
        On this project, I fixed bugs, generated QR codes for stickers for delivery, created functionality for generating reports in Excel format, etc.`,
    'image': imageEcofleet,
    'link': 'https://ecofleet.com/',
  },
  {
    'title': 'Newizze CRM',
    'text': `Company internal affairs management system.
        What I worked on: fixed bugs, added new functionality, developed inventory functionality, etc.`,
    'image': imageNewizze,
  },
];
let fullscreenImage = ref({
  src: '',
  enable: false,
});

const toggleFullscreen = (event: any) => {
  fullscreenImage.value.src = event.target.src;
  fullscreenImage.value.enable = !fullscreenImage.value.enable;
}
</script>

<template>
  <div>
    <h3>💼 Projects</h3>
    <div class="d-flex flex-wrap justify-content-around">
      <div class="card m-2" style="width: 18rem;" v-for="project in projects">
        <img :src="project.image"
             class="card-img-top"
             alt="There is no photo"
             @click="toggleFullscreen"
        >
        <div class="card-body d-flex flex-column">
          <h5 class="card-title" translate="no">{{ project.title }}</h5>
          <hr>
          <p class="card-text" v-html="project.text"></p>
          <div class="d-flex align-items-end flex-grow-1">
            <a v-if="project.link" target="_blank" :href="project.link" class="btn btn-primary">Visit site</a>
            <span v-else class="text-muted">There is no public site.</span>
          </div>
        </div>
      </div>
    </div>
    <Transition name="bounce">
      <div v-show="fullscreenImage.enable" id="fullscreen" >
        <img :src="fullscreenImage.src" @click="toggleFullscreen" alt="">
      </div>
    </Transition>
  </div>
</template>

<style scoped>
img {
  height: 120px;
  object-fit: cover;
  cursor: zoom-in;
  user-select: none;
}
#fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  background-color: rgba(40, 39, 39, 0.89);
}
#fullscreen img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  padding: 5%;
  cursor: zoom-out;
  transition: 0.5s;
}


.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.3);
    background-color: transparent;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    background-color: rgba(40, 39, 39, 0.89);

  }
}

</style>
