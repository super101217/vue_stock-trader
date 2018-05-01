<template>
        <div class="text-block">
            Before it&#x27;s here, it&#x27;s on the Bloomberg Terminal.
            <icon name="desktop"></icon>
            <icon name="desktop"></icon>
            <a class="link">Learn More</a>
        </div>
</template>

<script>
    // Font Awesome Icon
    import 'vue-awesome/icons/desktop'
    import Icon from 'vue-awesome/components/Icon'

    export default {
        components: {
            icon: Icon
        }
    }
</script>

<style scoped>

    .text-block {
        margin-top: 0;
    }

    .link {
        margin: 0 0 0 5px;
        cursor: pointer;
    }

    /* Icon */
    svg.fa-icon {
        color: white;
        padding: 0.5em 0 0 0;
    }


</style>
