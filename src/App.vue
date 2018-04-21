<template>
  <div>
      <!-- Our Nav Bar Components-->
      <top-nav-bar />
      <main-nav-bar />
      <!-- Main Content and Buttons -->
      <content-section-one />
      <content-section-two />
      <!-- Footer -->
      <footer-left />
      <footer-right />
  </div>
</template>

<script>
// Import our components from component directory
import TopBar from './components/Navbar/TopNav.vue'
import MainBar from './components/Navbar/MainNav.vue'
import SectionOne from './components/MainContent/SectionOne.vue'
import SectionTwo from './components/MainContent/SectionTwo.vue'
import FooterLeft from './components/Footer/FooterLeft.vue'
import FooterRight from './components/Footer/FooterRight.vue'

// Use our components in our App.vue template
export default {
  components: {
    topNavBar: TopBar,
    mainNavBar: MainBar,
    contentSectionOne: SectionOne,
    contentSectionTwo: SectionTwo,
    footerLeft: FooterLeft,
    footerRight: FooterRight
  }
}
</script>

<style>
</style>