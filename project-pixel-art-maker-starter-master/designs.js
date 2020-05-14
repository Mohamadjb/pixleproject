// select the color input 
const color = document.getElementById('colorPicker').value;
// Select the size input
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;
//set the SizePicker variable
const sizePicker = document.getElementById('sizePicker');
// whe the size is submmited , call makeGrid function
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = document.querySelector('#inputHeight').value;
    const width = document.querySelector('#inputWidth').value;
    makeGrid(height, width);
});
//Function that creates grid based on input
function makeGrid(height, width) {
    const myTable = document.getElementById('pixelCanvas');
    //resets myTable when Submit is clicked again
    myTable.innerHTML = "";
    //create table rows and columns based on input
    for (i = 1; i <= height; i++) {
        var tableRows = document.createElement('tr');
        for (x = 1; x <= width; x++) {
            var tableCells = document.createElement('td');
            tableRows.appendChild(tableCells);
            myTable.appendChild(tableRows);
            //fills in cell color//create table rows and columns based on input
            tableCells.addEventListener('click', function(event) {
                event.target.style.backgroundColor = document.getElementById('colorPicker').value;
            });
        };
    };
};
