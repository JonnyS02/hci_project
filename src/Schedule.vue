<template>
    <h1>Stundenplan</h1>
    <div class="orange_container">

        <table>
            <tr>
                <td class="time">8:15 - 9:45</td>
                <td>Exobiologie<br><span class="raum">F Gebäude 59</span></td>
                <td>Astrophysik<br><span class="raum">C Gebäude 17</span></td>
                <td></td>
                <td>Planetenwissenschaften<br><span class="raum">E Gebäude 56</span></td>
                <td></td>
            </tr>
            <tr>
                <td class="time">10:15 - 11:45</td>
                <td></td>
                <td>Astronomie<br><span class="raum">A Gebäude 23</span></td>
                <td>Raumfahrttechnik<br><span class="raum">D Gebäude 35</span></td>
                <td></td>
                <td>Exobiologie<br><span class="raum">B Gebäude 42</span></td>
            </tr>
            <tr>
                <td class="time">12:15 - 13:45</td>
                <td>Raumfahrttechnik<br><span class="raum">C Gebäude 64</span></td>
                <td></td>
                <td></td>
                <td>Astrophysik<br><span class="raum">A Gebäude 47</span></td>
                <td></td>
            </tr>
            <tr>
                <td class="time">14:15 - 15:45</td>
                <td></td>
                <td></td>
                <td>Exobiologie<br><span class="raum">C Gebäude 29</span></td>
                <td></td>
                <td>Astronomie<br><span class="raum">D Gebäude 12</span></td>
            </tr>
            <tr>
                <td class="time">16:15 - 17:45</td>
                <td>Astrophysik<br><span class="raum">F Gebäude 19</span></td>
                <td></td>
                <td>Planetenwissenschaften<br><span class="raum">A Gebäude 85</span></td>
                <td>Raumfahrttechnik<br><span class="raum">F Gebäude 81</span></td>
                <td></td>
            </tr>
            <tr>
                <td class="time">18:15 - 19:45</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
</template>
  
<style scoped>
.time {
    background-color: #f2f2f213;

}

th {
    background-color: #f2f2f213;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    text-align: left;

    border: 1px solid #dddddd70;
    padding: 15px;
}

.raum {
    font-weight: 100;
}
</style>