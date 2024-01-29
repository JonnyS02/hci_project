<template>
    <h1>Stundenplan</h1>
    <div class="orange_container">

        <table>
            <tr>
                <th>Zeit</th>
                <th>Montag</th>
                <th>Dienstag</th>
                <th>Mittwoch</th>
                <th>Donnerstag</th>
                <th>Freitag</th>
            </tr>
            <tr>
                <td class="time">8:15 - 9:45</td>
                <td>Exobiologie</td>
                <td>Astrophysik</td>
                <td></td>
                <td>Planetenwissenschaften</td>
                <td></td>
            </tr>
            <tr>
                <td class="time">10:15 - 11:45</td>
                <td></td>
                <td>Astronomie</td>
                <td>Raumfahrttechnik</td>
                <td></td>
                <td>Exobiologie</td>
            </tr>
            <tr>
                <td class="time">12:15 - 13:45</td>
                <td>Raumfahrttechnik</td>
                <td></td>
                <td></td>
                <td>Astrophysik</td>
                <td></td>
            </tr>
            <tr>
                <td class="time">14:15 - 15:45</td>
                <td></td>
                <td></td>
                <td>Exobiologie</td>
                <td></td>
                <td>Astronomie</td>
            </tr>
            <tr>
                <td class="time">16:15 - 17:45</td>
                <td>Astrophysik</td>
                <td></td>
                <td>Planetenwissenschaften</td>
                <td>Raumfahrttechnik</td>
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

th,td {
    text-align: left;

    border: 1px solid #dddddd70;
    padding: 15px;
}
</style>