<template>
    <div class="display-block">
        <h3 class="heading-3 selected-tab">Americas</h3>
        <div>
            <div class="div-block-12">
            <div class="div-block-7 time-frame-box">
                <div class="time-box-one selected">1D</div>
                <div class="time-box-one">1M</div>
                <div class="time-box-one">1Y</div>
                <div class="time-box-one">5Y</div>
                <!-- <div class="time-box-one header">Time Frame</div> -->
            </div>
                <div class="div-block-7 time-frame-box time-frame-box-two"></div>
                <div class="div-block-7 time-frame-box time-frame-box-two time-frame-box-three"></div>
            </div>
            <div class="pattern-box-border chart-box">
                <div class="div-block-8"></div>
            </div>
            <div class="div-block-5 pattern-div"></div>
            <div class="table-div"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>


<style scoped>
    @import './../../../Assets/normalize.css';
    @import './../../../Assets/webflow.css';
    @import './../../../Assets/custom.css';

    .time-box-one {
        color: #999;
        cursor: pointer;
        display: inline-block;
        font-size: .8125rem;
        font-weight: 700;
        padding: .625rem .625rem .5625rem;
        position: relative;
        vertical-align: bottom;
        z-index: 1;
        border-right: 0.5px solid lightgray;
    }
    .selected {
        color: #fb8b1e;
        cursor: default;
    }
    .header {
        background-color: #fb8b1e;
        color: #fff;
        font-size: 13px;
    }


</style>
