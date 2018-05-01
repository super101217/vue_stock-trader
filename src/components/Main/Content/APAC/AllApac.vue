<template>
    <div>
        <!-- All Content -->
        <div class="div-block-5 pattern-div"></div>
            <!-- Country Table -->
            <japan />
        <div class="div-block-5 pattern-div"></div>
            <china />
        <div class="div-block-5 pattern-div"></div>
            <hong-kong />
        <div class="div-block-5 pattern-div"></div>
            <south-korea />
        <div class="div-block-5 pattern-div"></div>
            <india />
        <div class="div-block-5 pattern-div"></div>
            <sri-lanka />
    </div>
</template>

<script>
    // Import our components from component directory
    import Japan from './Content/Japan.vue'
    import China from './Content/China.vue'
    import HongKong from './Content/HongKong.vue'
    import SouthKorea from './Content/SouthKorea.vue'
    import India from './Content/India.vue'
    import SriLanka from './Content/SriLanka.vue'

    // Use our components in our App.vue template
    export default {
        components: {
            japan: Japan,
            china: China,
            hongKong: HongKong,
            southKorea: SouthKorea,
            india: India,
            sriLanka: SriLanka
        }
    }
</script>

<style>
</style>