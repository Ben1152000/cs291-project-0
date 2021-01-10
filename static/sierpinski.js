
tableBody = document.getElementById('table');
tableBody.innerHTML = ''; // remove placeholder rows/cols

let values = [];
const SIZE = 16;

for (i = 0; i < SIZE; i++) {
    values.push([]);
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (j = 0; j < SIZE; j++) {
        values[i].push(0);
        if (i === 0 || j === 0) {
            values[i][j] = 1;
        } else {
            values[i][j] = (values[i-1][j] + values[i][j-1]) % 2;
        }
        var td = document.createElement('TD')
        if (values[i][j]) {
            td.appendChild(document.createTextNode("1"));
            td.style.backgroundColor = "cornflowerblue";
        } else {
            td.appendChild(document.createTextNode("0"));
            td.style.backgroundColor = "darkslategray";
        }
        tr.appendChild(td);
    }
}