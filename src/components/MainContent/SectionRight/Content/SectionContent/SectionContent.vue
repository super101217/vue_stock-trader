<template>
    <div class="display-block">
        <h3 class="heading-3 selected-tab">Americas</h3>
        <div>
            <!-- Graph Filter Component -->
            <graph-filter-selection />
            <!-- Chart -->
            <div class="pattern-box-border chart-box">
                <div class="div-block-8"></div>
            </div>
            <div class="div-block-5 pattern-div"></div>
            <!-- Table -->
            <div class="table-div"></div>
        </div>
    </div>
</template>

<script>
    import GraphFilter from './GraphFilter.vue'

    export default {
        components: {
            graphFilterSelection: GraphFilter
        }
    }
</script>


<style scoped>

</style>
