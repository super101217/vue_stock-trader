<template>
    <div data-collapse="medium" data-animation="default" data-duration="400" class="nav-bar w-nav">
        <!-- Logo and Menu Icon -->
        <div class="container-3 w-container">
            <a href="#" class="brand w-nav-brand">
                <img src="./../../Assets/logo.svg" alt="rubic" class="image">
            </a>
            <a href="#" class="w-nav-brand ">
                <h3 class="main-font">Bloomberg</h3>
                <h4 class="main-font-two">Markets</h4>
            </a>
            <!-- Main Nav Bar -->
            <div class="div-block">
                <a href="#" class="main-nav-link">Markets</a>
                <a href="#" class="main-nav-link">Tech</a>
                <a href="#" class="main-nav-link">Pursuits</a>
                <a href="#" class="main-nav-link">Politics</a>
                <a href="#" class="main-nav-link">Opinion</a>
                <a href="#" class="main-nav-link">Businessweek</a>
            </div>
            <!-- Side Bar -->
            <nav role="navigation" class="nav-menu w-nav-menu">
                <ul class="unordered-list w-clearfix">
                    <li class="menu-bar-items">
                        <a href="#" class="a-items">Settings</a>
                    </li>
                    <li class="menu-bar-items">
                        <a href="#" class="a-items">
                            Subscribe to Businessweek
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    @import './../../Assets/normalize.css';
    @import './../../Assets/webflow.css';
    @import './../../Assets/custom.css';

    /* Bloomberg Logo */
    .main-font {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1em;
        color: white;
        margin: 0.5em 0 0 0;
    }
    .main-font-two {
        font-size: 1.125rem;
        line-height: 1em;
        color: rgba(255,255,255,.5);
        margin: 0;
    }
    .image {
        margin: 0.7em 0.5em 0.2em 0;
        padding: 0;
        width: 28px;
    }

    /* Main Nav Items */
    .main-nav-link:hover {
        color: white;
    }

    /* Right Nav Bar items */

    .a-items {
        text-decoration: none;
        color: white;
    }
    .a-items:hover {
        text-decoration: underline;
    }



    
</style>


