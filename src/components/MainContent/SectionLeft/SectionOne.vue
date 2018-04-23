<template>
    <div class="div-block-2">
        <div class="section-front-box"></div>
        <h4 class="heading">Markets</h4>
        <h1 class="heading-2">Stocks</h1>
        <div class="pattern-box-border">
            <!-- Search Box -->
            <search-box />
        </div>
        <div class="section-front-box light-box"></div>
        <latest-ul-list />
    </div>
</template>

<script>
    import SectionBox from './SearchBox.vue'
    import LatestList from './LatestList.vue'

    export default {
        components: {
            searchBox: SectionBox,
            latestUlList: LatestList
        }
    };
</script>


<style scoped>
    @import './../../../Assets/normalize.css';
    @import './../../../Assets/webflow.css';
    @import './../../../Assets/custom.css';

    /* Border Style Pattern */
    .section-front-box {
        height: 1.4em;
        margin-top: 2em;
    }
    .light-box {
        margin-top: 3em;
    }


</style>

