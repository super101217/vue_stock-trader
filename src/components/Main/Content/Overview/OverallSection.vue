<template>
    <div>
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
    import AmericaSectionContent from './Content/AmericaContent/SectionContent.vue'
    import EuropeSectionContent from './Content/EuropeContent/SectionContent.vue'
    import AsiaSectionContent from './Content/AsiaContent/SectionContent.vue'

    export default {
        components: {
            mainSectionContent: AmericaSectionContent,
            mainSectionContentTwo: EuropeSectionContent,
            mainSectionContentThree: AsiaSectionContent
        }
    }
</script>


<style scoped>

</style>

