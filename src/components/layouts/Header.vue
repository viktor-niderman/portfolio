<script setup lang="ts">
defineProps<{

}>()
</script>

<template>
  <header id="site-header" class="fixed-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg stroke px-0">
        <h1>
          <RouterLink class="navbar-brand" to="/">
            <i class="fab fa-accusoft icon-color mr-1"></i>Set<span>up</span>
          </RouterLink>
        </h1>

        <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
          <span class="navbar-toggler-icon fa icon-close fa-times"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-lg-auto">
            <li class="nav-item active">
              <RouterLink class="nav-link" to="/">Home<span class="sr-only">(current)</span></RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About Us</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/services">Services</RouterLink>
            </li>
            <!-- search button -->
            <div class="search-right ml-lg-3">
              <form action="#search" method="GET" class="search-box position-relative">
                <input type="search" placeholder="Enter Keyword" name="search" required="required"
                       autofocus="" class="search-popup">
                <button type="submit" class="btn search-btn"><i class="fa fa-search"
                                                                aria-hidden="true"></i></button>
              </form>
            </div>
            <!-- //search button -->
          </ul>
        </div>
        <!-- //search button -->
        <!-- toggle switch for light and dark theme -->
        <div class="cont-ser-position">
          <nav class="navigation">
            <div class="theme-switch-wrapper">
              <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox">
                <div class="mode-container">
                  <i class="gg-sun"></i>
                  <i class="gg-moon"></i>
                </div>
              </label>
            </div>
          </nav>
        </div>
        <!-- //toggle switch for light and dark theme -->
      </nav>
    </div>
  </header>
</template>

<style scoped>

</style>
