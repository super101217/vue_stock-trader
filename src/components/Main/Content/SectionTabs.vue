<template>
    <div class="div-block-4 main-tab-div">
        <router-link to="/stocks" class="router-link" activeClass="selected">
            <h3 class="heading-3 main-tabs">Overview</h3>
        </router-link>
        <router-link to="/futures" class="router-link" activeClass="selected">
            <h3 class="heading-3 main-tabs">Futures</h3>
        </router-link>
        <h3 class="heading-3 main-tabs">Americas</h3>
        <h3 class="heading-3 main-tabs">EMEA</h3>
        <h3 class="heading-3 main-tabs">APAC</h3>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .router-link{
        text-decoration: none;
        color: black;
    }
    .heading-3 {
        cursor: pointer;
    }
    .heading-3:hover {
        color: #fb8b1e;
    }
    .selected {
        color: #fb8b1e;
    }

</style>
