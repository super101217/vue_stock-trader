<template>
    <!-- Our Chart Div -->
    <div class="div-block-8">
        <div id="chartdiv" style="width: 100%; height: 350px;"></div>
    </div>
</template>

<script>
    export default {
        created () {
            AmCharts.makeChart ("chartdiv",
                {
                    "type": "serial",
                    "categoryField": "type",
                    "chartCursor": {},
                    "graphs": [
                        {
                            "type": "column",
                            "title": "Pizza types",
                            "valueField": "sold",
                            "fillAlphas": 0.8
                        }
                    ],
                    "dataProvider": [
                        { "type": "Margherita", "sold": 120 },
                        { "type": "Funghi", "sold": 82 },
                        { "type": "Capricciosa", "sold": 78 },
                        { "type": "Quattro Stagioni", "sold": 71 }
                    ]
                }
            );
        }
    }
</script>

<style scoped>

</style>
