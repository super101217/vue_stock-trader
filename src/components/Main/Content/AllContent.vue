<template>
    <div class="div-block-3 w-clearfix mt">
    <!-- All Content -->
        <notification-window />
        <main-content-tabs />
        <!-- Render Components according to Routes -->
        <router-view></router-view>
            <!-- Overview Section -->
            <!-- <overview-section /> -->
            <!-- Futures Section -->
            <!-- <futures-section /> -->
    </div>
</template>

<script>
    // Import our components from component directory
    import TerminalNotification from './Notification.vue'
    import SectionTabs from './SectionTabs.vue'
    // Our Tab Content
    import Overview from './Overview/AllOverall.vue'
    import Futures from './Futures/AllFutures.vue'

    // Use our components in our App.vue template
    export default {
        components: {
            notificationWindow: TerminalNotification,
            mainContentTabs: SectionTabs,
            overviewSection: Overview,
            futuresSection: Futures
        }
    }
</script>

<style scoped>
    .mt {
        margin-top: 2em;
    }
</style>