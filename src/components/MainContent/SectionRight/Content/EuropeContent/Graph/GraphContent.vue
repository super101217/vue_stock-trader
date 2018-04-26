<template>
    <!-- Our Chart Div -->
    <div class="bg">
        <canvas id="europe-chart2"></canvas>
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
            this.createChart('europe-chart2', this.planetChartData);
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
