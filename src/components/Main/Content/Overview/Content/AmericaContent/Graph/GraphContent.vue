<template>
    <!-- Our Chart Div -->
    <div class="bg">
        <canvas id="planet-chart"></canvas>
    </div>
</template>

<script>
    import Chart from 'chart.js';
    import planetChartData from './GraphContentData.js'

    export default {
        methods: {
            createChart(chartId, chartData) {
                const ctx = document.getElementById(chartId);
                const myChart = new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                    options: chartData.options,
                });
            }
        },
        data() {
            return {
                planetChartData: planetChartData,
            }
        },
        mounted() {
            this.createChart('planet-chart', this.planetChartData);
        }
    }
</script>

<style scoped>

    .planet-chart {
        padding: 1em;
    }
    .bg {
        background-color: #2b343f;
    }

</style>
