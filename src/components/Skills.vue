<script setup lang="ts">
let skills = [
  {
    name: 'Frontend',
    list: ["HTML, CSS, JS", "Vue, Vue router, Vuex (Pinia), Nuxt", "Webpack, Vite", "SASS, Bootstrap", "Axios", "Chrome Extensions"],
  },
  {
    name: 'Backend',
    list: ["PHP, Laravel, Orchid", "MySQL", "Stripe", "Redis"],
  },
  {
    name: 'Basic',
    list: ["Google cloud, AWS, DigitalOcean", "Unix, Apache, Nginx", "REST API", "Git", "Postman"]
  }
]
</script>

<template>
  <div>
    <h3>🤲 Skills</h3>
    <div>
      <div class="d-flex">
        <div v-for="skill in skills" class="me-3">
          <ul>
            <li>
              {{skill.name}}:
              <ul translate="no">
                <li v-for="el in skill.list">{{el}}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
