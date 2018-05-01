<template>
    <div>
        <!-- All Content -->
        <div class="div-block-5 pattern-div"></div>
            <!-- Country Table -->
            <america />
        <div class="div-block-5 pattern-div"></div>
            <argentina />
        <div class="div-block-5 pattern-div"></div>
            <peru />
        <div class="div-block-5 pattern-div"></div>
            <brazil />
        <div class="div-block-5 pattern-div"></div>
            <canada />
        <div class="div-block-5 pattern-div"></div>
            <mexico />
    </div>
</template>

<script>
    // Import our components from component directory
    import America from './Content/USA.vue'
    import Argentina from './Content/Argentina.vue'
    import Peru from './Content/Peru.vue'
    import Brazil from './Content/Brazil.vue'
    import Canada from './Content/Canada.vue'
    import Mexico from './Content/Mexico.vue'

    // Use our components in our App.vue template
    export default {
        components: {
            america: America,
            argentina: Argentina,
            peru: Peru,
            brazil: Brazil,
            canada: Canada,
            mexico: Mexico
        }
    }
</script>

<style>
</style>