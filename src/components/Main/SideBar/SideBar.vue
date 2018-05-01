<template>
    <!-- Sidebar -->
    <content-section-one />
</template>

<script>
    // Import our components
    import SectionOne from './SectionLeft/SectionOne.vue'

    // Use our components in our App.vue template
    export default {
        components: {
            contentSectionOne: SectionOne,
        }
    }
</script>

<style>
</style>