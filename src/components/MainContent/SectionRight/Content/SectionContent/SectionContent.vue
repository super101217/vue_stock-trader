<template>
    <div class="display-block">
        <h3 class="heading-3 selected-tab">Americas</h3>
        <div>
            <!-- Graph Filter Component -->
            <graph-filter-selection />
            <!-- Chart Border -->
            <div class="pattern-box-border chart-box">
                <!-- Chart Component-->
                <main-graph />
            </div>
            <div class="div-block-5 pattern-div"></div>
            <!-- Table -->
            <div class="table-div"></div>
        </div>
    </div>
</template>

<script>
    import GraphFilter from './GraphFilter.vue'
    import Amchart from './GraphContent'

    export default {
        components: {
            graphFilterSelection: GraphFilter,
            mainGraph: Amchart,
        }
    }
</script>


<style scoped>

</style>
