<template>
    <div class="div-block-12">
        <div class="div-block-7 time-frame-box">
        <div class="time-box-one b-r w-clearfix">
            <div class="text-block-6 selected">1D</div>
        </div>
        <div class="time-box-one b-r w-clearfix">
            <div class="text-block-6">1M</div>
        </div>
        <div class="time-box-one b-r w-clearfix">
            <div class="text-block-6">1Y</div>
        </div>
        <div class="time-box-one b-r w-clearfix">
            <div class="text-block-6">5Y</div>
        </div>
        <div class="time-box-one time-label-box w-clearfix">
            <div class="text-block-6 text-label">Time Frame</div>
        </div>
        </div>
        <div class="div-block-7 time-frame-box time-frame-box-two input-box w-clearfix">
        <div class="text-block-7">
            <input placeholder="Add Comparison" />
        </div>
        <div class="div-block-13"></div>
        </div>
        <div class="div-block-7 time-frame-box time-frame-box-two time-frame-box-three w-clearfix">
        <div class="text-block-7 text-drop-down">Indicators</div>
        </div>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style scoped>

    .br {
        border-right: 0.5px solid lightgray;
    }
    .text-block-6 {
        cursor: pointer;
    }
    .selected {
        color: #fb8b1e;
        cursor: default;
    }
    .text-label {
        cursor: default;
    }
    input {
        border: none;
        outline: none;
        width: 8.5em;
    }

</style>
