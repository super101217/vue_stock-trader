<template>
    <div>
        <!-- All Content -->
        <div class="div-block-5 pattern-div"></div>
            <!-- America Future Table -->
            <america-future />
        <div class="div-block-5 pattern-div"></div>
            <!-- Europe Future Table -->
            <europe-future />
        <div class="div-block-5 pattern-div"></div>
            <!-- Asia Future Table -->
            <asia-future />
    </div>
</template>

<script>
    // Import our components from component directory
    import AmericaFutures from './Content/Americas/Table.vue'
    import EuropeFutures from './Content/Europe/Table.vue'
    import AsiaFutures from './Content/Asia/Table.vue'

    // Use our components in our App.vue template
    export default {
        components: {
            americaFuture: AmericaFutures,
            europeFuture: EuropeFutures,
            asiaFuture: AsiaFutures
        }
    }
</script>

<style>
</style>