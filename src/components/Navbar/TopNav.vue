<template>
    <div class="top-nav-section">
        <div class="top-nav w-container">
            <a href="#" class="link link-br">Bloomberg the Company &amp; Its Products
                <span><icon name="caret-down"></icon></span>
            </a>
            <a href="#" class="link link-br">Bloomberg Anywhere Remote Login</a>
            <a href="#" class="link">Bloomberg Terminal Demo Request</a>
        </div>
    </div>
</template>

<script scoped>
    // Font Awesome Icon
    import 'vue-awesome/icons/caret-down'
    import Icon from 'vue-awesome/components/Icon'
    export default {
        components: {
            icon: Icon,
        }
    }
</script>


<style>
    @import './../../Assets/normalize.css';
    @import './../../Assets/webflow.css';
    @import './../../Assets/custom.css';

    svg {
        color: lightgray;
        height: 14px;
    }
    svg.fa-icon {
        padding: 0.2em 0 0 0;
    }

</style>
