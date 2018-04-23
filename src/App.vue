<template>
  <div>
      <!-- Our Nav Bar Components-->
      <top-nav-bar />
      <main-nav-bar />
      <!-- Main Content-->
      <main-contain-body />
      <!-- Footer -->
      <footer-left />
      <footer-right />
  </div>
</template>

<script>
// Import our components from component directory
import TopBar from './components/Navbar/TopNav.vue'
import MainBar from './components/Navbar/MainNav.vue'
import MainContent from './components/MainContent/MainContent.vue'
import FooterLeft from './components/Footer/FooterLeft.vue'
import FooterRight from './components/Footer/FooterRight.vue'

// Use our components in our App.vue template
export default {
  components: {
    topNavBar: TopBar,
    mainNavBar: MainBar,
    mainContainBody: MainContent,
    footerLeft: FooterLeft,
    footerRight: FooterRight
  }
}
</script>

<style scoped>
  @import './Assets/normalize.css';
  @import './Assets/webflow.css';
  @import './Assets/custom.css';
  .w-container {
    width: 1020px;
  }
</style>