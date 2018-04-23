<template>
    <div class="div-block-3 w-clearfix">
        <notification-window />
    </div>
</template>

<script>
    import Notification from './Notification.vue'

    export default {
        components: {
            notificationWindow: Notification
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

