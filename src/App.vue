<template>
  <div class="main-wrapper">
      <!-- Our Nav Bar Components-->
      <top-nav-bar />
      <main-nav-bar />
      <!-- Main Content-->
      <main-contain-body />
      <!-- Footer -->
      <main-footer />
  </div>
</template>

<script>
// Import our components from component directory
import TopBar from './components/Navbar/TopNav.vue'
import MainBar from './components/Navbar/MainNav.vue'
import MainContent from './components/Main/Main.vue'
import Footer from './components/Footer/Footer.vue'

// Use our components in our App.vue template
export default {
  components: {
    topNavBar: TopBar,
    mainNavBar: MainBar,
    mainContainBody: MainContent,
    mainFooter: Footer
  }
}
</script>

<style scoped>
  @import './Assets/normalize.css';
  @import './Assets/webflow.css';
  @import './Assets/custom.css';
  
</style>