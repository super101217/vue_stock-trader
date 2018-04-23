<template>
  <div class="main-body w-container">
      <!-- Main Content and Buttons -->
      <content-section-one />
      <content-section-two />
  </div>
</template>

<script>
// Import our components from component directory
import SectionOne from './SectionOne.vue'
import SectionTwo from './SectionTwo.vue'

// Use our components in our App.vue template
export default {
  components: {
    contentSectionOne: SectionOne,
    contentSectionTwo: SectionTwo,
  }
}
</script>

<style>
</style>