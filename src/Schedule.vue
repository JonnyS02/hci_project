<template>
    <h1 style="color: #e8672c;">TIME TABLE</h1>
    <div class="table">

        <table border="5" cellspacing="0" align="center">
            <!-- Header row with Day/Period labels -->
            <tr>
                <td align="center" height="50" width="100"><br><b style="color: #e8672c;">Day/Period</b></br></td>
                <td align="center" height="50" width="100"><b style="color: #e8672c;">I<br>9:30-10:20</b></td>
                <td align="center" height="50" width="100"><b style="color: #e8672c;">II<br>10:20-11:10</b></td>
                <td align="center" height="50" width="100"><b style="color: #e8672c;">III<br>11:10-12:00</b></td>
                <td align="center" height="50" width="100"><b style="color: #e8672c;">12:00-12:40</b></td>
                <td align="center" height="50" width="100"><b style="color: #e8672c;">IV<br>12:40-1:30</b></td>
                <td align="center" height="50" width="100"><b style="color: #e8672c;">V<br>1:30-2:20</b></td>
                <td align="center" height="50" width="100"><b style="color: #e8672c;">VI<br>2:20-3:10</b></td>
                <td align="center" height="50" width="100"><b style="color: #e8672c;">VII<br>3:10-4:00</b></td>
            </tr>

            <!-- Days and corresponding subjects -->
            <tr>
                <td align="center" height="50"><b style="color: #e8672c;">Monday</b></td>
                <td align="center" height="50">Eng</td>
                <td align="center" height="50">Mat</td>
                <td align="center" height="50">Che</td>
                <td rowspan="6" align="center" height="50">
                    <h2 style="color: #e8672c;">L<br>U<br>N<br>C<br>H</h2>
                </td>
                <td colspan="3" align="center" height="50">LAB</td>
                <td align="center" height="50">Phy</td>
            </tr>
            <tr>
                <td align="center" height="50"><b style="color: #e8672c;">Tuesday</b></td>
                <td colspan="3" align="center" height="50">LAB</td>
                <td align="center" height="50">Eng</td>
                <td align="center" height="50">Che</td>
                <td align="center" height="50">Mat</td>
                <td align="center" height="50">SPORTS</td>
            </tr>
            <tr>
                <td align="center" height="50"><b style="color: #e8672c;">Wednesday</b></td>
                <td align="center" height="50">Mat</td>
                <td align="center" height="50">phy</td>
                <td align="center" height="50">Eng</td>
                <td align="center" height="50">Che</td>
                <td colspan="3" align="center" height="50">LIBRARY</td>
            </tr>
            <tr>
                <td align="center" height="50"><b style="color: #e8672c;">Thursday</b></td>
                <td align="center" height="50">Phy</td>
                <td align="center" height="50">Eng</td>
                <td align="center" height="50">Che</td>
                <td colspan="3" align="center" height="50">LAB</td>
                <td align="center" height="50">Mat</td>
            </tr>
            <tr>
                <td align="center" height="50"><b style="color: #e8672c;">Friday</b></td>
                <td colspan="3" align="center" height="50">LAB</td>
                <td align="center" height="50">Mat</td>
                <td align="center" height="50">Che</td>
                <td align="center" height="50">Eng</td>
                <td align="center" height="50">Phy</td>
            </tr>
            <tr>
                <td align="center" height="50"><b style="color: #e8672c;">Saturday</b></td>
                <td align="center" height="50">Eng</td>
                <td align="center" height="50">Che</td>
                <td align="center" height="50">Mat</td>
                <td colspan="3" align="center" height="50">SEMINAR</td>
                <td align="center" height="50">SPORTS</td>
            </tr>
        </table>
    </div>
</template>
  
<script>
export default {
    // Component logic goes here
}
</script>
  
<style scoped>
.table {
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 15vh
}
</style>