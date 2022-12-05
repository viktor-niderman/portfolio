<script setup lang="ts">

</script>

<template>
  <div class="container">
    <header class="pb-5">
      <h1>Viktor Niderman</h1>
      <p>I'm a full stack web developer based in Portugal. I mainly work with the stack: Laravel + vue.</p>
    </header>
    <main>
      <div>
        <h3>☎️ Contact information</h3>
        <div>
          <a href="mailto:viktor.niderman@gmail.com">viktor.niderman@gmail.com</a><br>
          <a href="https://github.com/Zeref95">Github</a><br>
          <a href="https://www.linkedin.com/in/viktor-niderman-28bb47219/">LinkedIn</a>
        </div>
      </div>
      <hr>
      <div>
        <h3>👩🏻‍💻 Work experience</h3>
        <div>
          <h4>
            <a href="https://gendalf.ru/" class="link-info me-2">Gendalf</a>
            <span class="badge bg-secondary">2019 - 2021</span>
          </h4>
          <p><strong>Teacher</strong>,  Taganrog / Remote job (after Covid)</p>

          <p>
            Web development teacher for schoolchildren. I worked with children in grades 5-11.
          </p>
          <br><br>
          <h4>
            <a href="https://newizze.com/" class="link-info me-2">Newizze</a>
            <span class="badge bg-secondary">2021 - until now</span>
          </h4>
          <p><strong>Middle fullstack developer</strong>, Portugal (Full remote job)</p>
          <p>
            Development of B2B CRM systems
          </p>
        </div>
      </div>
      <hr>
      <div>
        <h3>🤲 Skills</h3>
        <div>
          <ul>
            <li>
              Frontend:
              <ul>
                <li>HTML, CSS, JS</li>
                <li>Vue, Vue router, Vuex, Nuxt</li>
                <li>SASS, Bootstrap</li>
                <li>Axios</li>
              </ul>
            </li>
            <li>
              Backend:
              <ul>
                <li>PHP, MySQL, Laravel</li>
                <li>Unix, Apache</li>
                <li>REST API</li>
                <li>Stripe</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <div>
        <h3>💼 Projects</h3>
        <div>
          <div>
            <strong>Newizze crm - CRM system of the company</strong>
            <p>
              Management system for the internal affairs of the company. What I worked on: fixed bugs, added new functionality (task board, inventory page), etc.
            </p>
          </div>
          <div>
            <strong>Ecofleet - Delivery system in UK</strong>
            <div>
              <img class="py-2" src="@/assets/images/projects/ecofleet.png" width="150px" alt="">
            </div>
            <p>
              The system received orders from the site, then, after receiving confirmation, sent them to drivers via the API [https://onfleet.com/](https://onfleet.com/).
              On this project, I fixed errors, generated QR codes for stickers on boxes, generated Excel reports...
            </p>
            <a href="https://ecofleet.com/"></a>
          </div>
     </div>
      </div>
    </main>
    <footer class="mt-5 text-center">
      @ Viktor Niderman, 2022
    </footer>
  </div>
</template>
