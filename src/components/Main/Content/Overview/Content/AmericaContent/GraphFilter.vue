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
            <div class="div-block-13">
                <span class="plus"><icon class="plus-icn" name="plus"></icon></span>
            </div>
        </div>
        <div class="div-block-7 time-frame-box time-frame-box-two time-frame-box-three w-clearfix">
            <div class="text-block-7 text-drop-down">
                Indicators
                <span><icon class="caret-down" name="caret-down"></icon></span>
            </div>
        </div>
    </div>
</template>

<script>
    // Font Awesome Icon
    import 'vue-awesome/icons/plus'
    import 'vue-awesome/icons/caret-down'
    import Icon from 'vue-awesome/components/Icon'

    export default {
        components: {
            icon: Icon
        }
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
    .div-block-13 {
        cursor: pointer;
    }
    .text-drop-down {
        cursor: pointer;
    }

    /* Icons */
    .plus-icn {
        color: white;
        margin: 0.5em 0.7em;
    }
    .caret-down {
        color: #fb8b1e;
    }

</style>
