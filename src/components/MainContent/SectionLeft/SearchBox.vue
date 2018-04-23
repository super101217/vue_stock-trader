<template>
    <div class="div-block-6">
        <div class="w-form">
        <form id="email-form" name="email-form" data-name="Email Form" class="form">
            <input type="text" class="text-field quote-search w-input" maxlength="256" name="search" data-name="search" placeholder="Quote Search" id="search">
            <!-- <icon name="search"></icon> -->
        </form>
            <div class="success-message w-form-done"></div>
                <div class="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                </div>
        </div>
        <div class="text-block-3">Recently Viewed:</div>
        <div class="text-block-4">AACO:US</div>
    </div>
</template>

<script>
    // Font Awesome Icon
    import 'vue-awesome/icons/search'
    import Icon from 'vue-awesome/components/Icon'

    export default {
        components: {
            icon: Icon,
        }
    }
</script>


<style scoped>
    @import './../../../Assets/normalize.css';
    @import './../../../Assets/webflow.css';
    @import './../../../Assets/custom.css';

    input::placeholder {
        color: #fb8b1e;
    }
    .w-form {
        margin: 0;
    }
    .text-block-3 {
        border-top: 0.5px solid lightgrey;
        padding-top: 0.6em;
    }
</style>
