const color = document.getElementById('colorPicker').value;

const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;

const sizePicker = document.getElementById('sizePicker');

sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = document.querySelector('#inputHeight').value;
    const width = document.querySelector('#inputWidth').value;
    makeGrid(height, width);
});

function makeGrid(height, width) {
    const myTable = document.getElementById('pixelCanvas');
    
    myTable.innerHTML = "";
    for (i = 1; i <= height; i++) {
        var tableRows = document.createElement('tr');
        for (x = 1; x <= width; x++) {
            var tableCells = document.createElement('td');
            tableRows.appendChild(tableCells);
            myTable.appendChild(tableRows);
            tableCells.addEventListener('click', function(event) {
                event.target.style.backgroundColor = document.getElementById('colorPicker').value;
            });
        };
    };
};
