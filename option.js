//Here we manage all the options 

const activeCellElement = document.getElementById("active-cell");
let activeCell = null; //active cell indicates which cell is selected ..initially it is null becuz no cell is selected

//below func will be triggered whenever cell is focused
function onCellFocus(e) {
    activeCell = e.target.id;  //update the activeCell
    activeCellElement.innerText = activeCell;  //showing which is active cell on page
 }