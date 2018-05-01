<template>
    <div class="main-body w-container">
        <!-- Sidebar Section -->
        <content-section-one />
        <!-- Main Tabs & Content -->
        <content-section-two />
    </div>
</template>

<script>
    // Import our components from component directory
    import SectionOne from './SideBar/SideBar.vue'
    import SectionTwo from './Content/AllContent.vue'

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