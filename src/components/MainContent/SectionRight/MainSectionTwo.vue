<template>
    <div class="div-block-3 w-clearfix">
        <notification-window />
        <main-content-tabs />
        <div class="div-block-5 pattern-div"></div>
        <main-section-content />
    </div>
</template>

<script>
    import Notification from './Content/Notification.vue'
    import SectionTabs from './Content/SectionTabs.vue'
    import SectionContent from './Content/SectionContent/SectionContent.vue'

    export default {
        components: {
            notificationWindow: Notification,
            mainContentTabs: SectionTabs,
            mainSectionContent: SectionContent
        }
    }
</script>


<style scoped>
    @import './../../../Assets/normalize.css';
    @import './../../../Assets/webflow.css';
    @import './../../../Assets/custom.css';

    .div-block-3 {
        margin-top: 2em;
    }

</style>

