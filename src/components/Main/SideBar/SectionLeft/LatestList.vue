<template>
    <ul class="latest-list">
        <li class="list-item">
            <div class="div-block-10 list-item-div">
            <div class="latest-list-item-time">
                <icon name="clock"></icon>
                44 Minutes Ago
            </div>
            <a href="#" class="list-item-link">
                <h5 class="heading-4">Dollar Strengthens as U.S. Treasury Yields Near 3%: Markets Wrap</h5>
            </a>
            </div>
        </li>
        <li class="list-item">
            <div class="div-block-10 list-item-div">
            <div class="latest-list-item-time">
                <icon name="clock"></icon>
                AN HOUR AGO
            </div>
            <a href="#" class="list-item-link">
                <h5 class="heading-4">China's Tech Stocks Struggle Under ZTE Ban, IPhone Sales Concern</h5>
            </a>
            </div>
        </li>
        <li class="list-item">
            <div class="div-block-10 list-item-div">
            <div class="latest-list-item-time">
                <icon name="clock"></icon>
                12 AM
            </div>
            <a href="#" class="list-item-link">
                <h5 class="heading-4">Theme-Park Owner's Scary Dubai Stock Drop May Get Even Worse</h5>
            </a>
            </div>
        </li>
        <li class="list-item">
            <div class="div-block-10 list-item-div">
            <div class="latest-list-item-time">
                <icon name="clock"></icon>
                02/04/2018
            </div>
            <a href="#" class="list-item-link">
                <h5 class="heading-4">Tech Drags Stocks Lower; Oil Falls as Dollar Gains: Markets Wrap</h5>
            </a>
            </div>
        </li>
    </ul>
</template>

<script>
    // Font Awesome Icon
    import 'vue-awesome/icons/clock'
    import Icon from 'vue-awesome/components/Icon'

    export default {
        components: {
            icon: Icon,
        }
    }
</script>

<style scoped>

    /* Clock Icon */
    svg.fa-icon {
        width: 15px;
        height: 9px;
        margin: 5px 0 0 0;
    }

    /* List Items */
    .list-item-link {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    .list-item-link:hover {
        color: #fb8b1e;
    }

</style>
