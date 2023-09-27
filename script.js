const header = document.getElementById("header");
const body = document.getElementById("body");


for(let i=65 ; i<=90 ; i++){
    
    let ch = String.fromCharCode(i);  //for getting character at ith place
    const bold1 = document.createElement("b"); //for creating bold element
    bold1.innerText = ch ;                     //giving the inner text to b element

    header.appendChild(bold1) ;  //making bold the child of header and adding in it

}
function createandAppendRow(rowNum){  //creating function to create row for 100 time 
const row = document.createElement("div"); //creating div for row; <div></div>
row.className = "row" ;          //<div class="row"></div>

for(let i=64 ; i<=90 ; i++){
    if(i==64) {
        const bold2 = document.createElement("b") ;//if i=64 means first cell of row we create s.no cell
        bold2.innerText = rowNum;
        row.appendChild(bold2);
    }else {
       const cell = document.createElement("div"); //we will create empty cell
       cell.contentEditable = "true";     //making div editable
       cell.id = `${String.fromCharCode(i)}${rowNum}` ; //dynamic and unique id for every cell ... example C17 A80 (using template string)
       cell.addEventListener("focus" , onCellFocus)

       
       row.appendChild(cell);
    }
} 

  body.appendChild(row);
}

//calling the function the function for 100 times using for loop
for (let i=1 ; i<=100 ; i++) {
    createandAppendRow(i);
}




