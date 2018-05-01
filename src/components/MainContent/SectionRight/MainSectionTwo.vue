<template>
    <div class="div-block-3 w-clearfix">
            <notification-window />
            <main-content-tabs />
        <div class="div-block-5 pattern-div"></div>
            <!-- America Section -->
            <main-section-content />
        <div class="div-block-5 pattern-div"></div>
            <!-- Europe, Middle East and Africa Section -->
            <main-section-content-two />
        <div class="div-block-5 pattern-div"></div>
            <!-- Asia Pacific Section -->
            <main-section-content-three />
    </div>
</template>

<script>
    import Notification from './Content/Notification.vue'
    import SectionTabs from './Content/SectionTabs.vue'
    import AmericaSectionContent from './Content/AmericaContent/SectionContent.vue'
    import EuropeSectionContent from './Content/EuropeContent/SectionContent.vue'
    import AsiaSectionContent from './Content/AsiaContent/SectionContent.vue'

    export default {
        components: {
            notificationWindow: Notification,
            mainContentTabs: SectionTabs,
            mainSectionContent: AmericaSectionContent,
            mainSectionContentTwo: EuropeSectionContent,
            mainSectionContentThree: AsiaSectionContent
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

