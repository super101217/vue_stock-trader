<template>
    <div>
        <!-- All Content -->
        <div class="div-block-5 pattern-div"></div>
            <!-- Country Table -->
            <europe />
        <div class="div-block-5 pattern-div"></div>
            <united-kingdom />
        <div class="div-block-5 pattern-div"></div>
            <france />
        <div class="div-block-5 pattern-div"></div>
            <germany />
        <div class="div-block-5 pattern-div"></div>
            <poland />
        <div class="div-block-5 pattern-div"></div>
            <denmark />
    </div>
</template>

<script>
    // Import our components from component directory
    import Europe from './Content/Europe.vue'
    import UK from './Content/UK.vue'
    import France from './Content/France.vue'
    import Germany from './Content/Germany.vue'
    import Poland from './Content/Poland.vue'
    import Denmark from './Content/Denmark.vue'

    // Use our components in our App.vue template
    export default {
        components: {
            europe: Europe,
            unitedKingdom: UK,
            france: France,
            germany: Germany,
            poland: Poland,
            denmark: Denmark
        }
    }
</script>

<style>
</style>