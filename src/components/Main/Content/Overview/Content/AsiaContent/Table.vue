<template>
    <table id="customers">
        <tr class="header">
            <th>Name</th>
            <th>Value</th>
            <th>Net Change</th>
            <th>% Change</th>
            <th>1 Month</th>
            <th>1 Year</th>
            <th>Time (Edit)</th>
            <th class="data-graph">2 Day</th>
        </tr>
        <tr class="data">
            <td>INDU:IND 
            <br>
                <strong>JONES INDUS. AVG</strong>
            </td>
            <td>24,024.13</td>
            <td class="red">-424.56</td>
            <td class="red">-1.74%</td>
            <td class="green">+2.09%</td>
            <td class="green">+14.42%</td>
            <td>4/24/2018</td>
        </tr>
        <tr class="data">
            <td>SPX:IND 
            <br>
                <strong>S&P 500 INDEX</strong>
            </td>
            <td>2,631.78</td>
            <td class="red">-2.78</td>
            <td class="red">-0.11%</td>
            <td class="green">+1.68%</td>
            <td class="green">+10.18%</td>
            <td>9:34 AM</td>
        </tr>
        <tr class="data">
            <td>CCMP:IND 
            <br>
                <strong>NASDAQ COMPOSITE INDEX</strong>
            </td>
            <td>7,003.78</td>
            <td class="red">-3.61</td>
            <td class="red">-0.05%</td>
            <td class="green">+3.00%</td>
            <td class="green">+16.24%</td>
            <td>10:14 AM</td>
        </tr>
        <tr class="data">
            <td>NYA:IND 
            <br>
                <strong>NYSE COMPOSITE INDEX</strong>
            </td>
            <td>12,517.86</td>
            <td class="red">-3.86</td>
            <td class="red">-0.03%</td>
            <td class="green">+0.68%</td>
            <td class="green">+7.98%</td>
            <td>10:05 AM</td>
        </tr>
        <tr class="data">
            <td>SPTSX:IND 
            <br>
                <strong>S&P/TSX COMPOSITE INDEX</strong>
            </td>
            <td>15,509.75</td>
            <td class="red">-32.75</td>
            <td class="red">-0.25%</td>
            <td class="green">+1.38%</td>
            <td class="green">+0.89%</td>
            <td>03:05 PM</td>
        </tr>
    </table>
</template>

<script>
    export default {
        
    }
</script>


<style scoped>

#customers {
    border-collapse: collapse;
    width: 100%;
}

#customers td, #customers th {
    border-bottom: 1px dotted grey;
    padding: 8px;
}


#customers tr {
    text-transform: uppercase;
    font-family: BWHaasText-55Roman,"Helvetica Neue",Helvetica,Arial,sans-serif;
    color: #555;
    font-size: 0.85em;
    font-weight: 300;
}

#customers strong {
    color: black;
    font-size: 1.15em;
}

.red {
    color: #ff433d;
}

.green {
    color: #1dcc92;
}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: transparent;
    color: #555;
    font-size: 1em;
    font-weight: 500;
}

</style>
