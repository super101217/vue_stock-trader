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
        <ul class="latest-list">
            <li class="list-item">
                <div class="div-block-10 list-item-div">
                <div class="latest-list-item-time">02/04/2018</div>
                <h5 class="heading-4">Tech Drags Stocks Lower; Oil Falls as Dollar Gains: Markets Wrap</h5>
                </div>
            </li>
            <li class="list-item">
                <div class="div-block-10 list-item-div">
                <div class="latest-list-item-time">02/04/2018</div>
                <h5 class="heading-4">Tech Drags Stocks Lower; Oil Falls as Dollar Gains: Markets Wrap</h5>
                </div>
            </li>
            <li class="list-item">
                <div class="div-block-10 list-item-div">
                <div class="latest-list-item-time">02/04/2018</div>
                <h5 class="heading-4">Tech Drags Stocks Lower; Oil Falls as Dollar Gains: Markets Wrap</h5>
                </div>
            </li>
            <li class="list-item">
                <div class="div-block-10 list-item-div">
                <div class="latest-list-item-time">AN HOUR AGO</div>
                <h5 class="heading-4">Tech Drags Stocks Lower; Oil Falls as Dollar Gains: Markets Wrap</h5>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import SectionBox from './SearchBox.vue'

    export default {
        components: {
            searchBox: SectionBox
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


</style>

