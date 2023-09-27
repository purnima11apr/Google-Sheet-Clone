//Here we manage all the options 

const activeCellElement = document.getElementById("active-cell");
const textAlignElements = document.getElementsByClassName("text-align");
let activeCell = null; //active cell indicates which cell is selected ..initially it is null becuz no cell is selected

//below func will be triggered whenever cell is focused
function onCellFocus(e) {
    activeCell = e.target;  //update the activeCell
    activeCellElement.innerText = e.target.id;  //showing which is active cell on page

    const computedStyle = getComputedStyle(activeCell); //get computed style of active cell

    activeOptionsState = {
        fontFamily: computedStyle.fontFamily,
        isBoldSelected: computedStyle.fontWeight === "600",
        isItalicSelected: computedStyle.fontStyle === "italic",
        isUnderLineSelected: computedStyle.textDecoration === "underline",
        textAlign: computedStyle.textAlign,
        textColor: computedStyle.color,
        backgroundColor: computedStyle.backgroundColor,
        fontSize: computedStyle.fontSize,
      };
 }

// FOR BOLD BUTTON
function onClickBold(boldButton){  //this will triggered when user clicks on boldbutton

//1 .  toggle the active-option class for button
  boldButton.classList.toggle("active-option");

  //2. get the selected cell
  if(activeCell){
    if (activeOptionsState.isBoldSelected === false) {
        // make the text to bold
        activeCell.style.fontWeight = "600";
      } else {
        // make the text to normal
        activeCell.style.fontWeight = "400";
      }
      activeOptionsState.isBoldSelected = !activeOptionsState.isBoldSelected;
    }
  }
 //  FOR ITALIC BUTTON
  function onClickItalic(italicButton) {  //this will triggered when user clicks on Italic button
    /**
     * 1. toggle the active-option class for the italic button.
     */
    italicButton.classList.toggle("active-option");
    if (activeCell) {
      if (activeOptionsState.isItalicSelected) {
        // the text already italic.
        activeCell.style.fontStyle = "normal";
      } else {
        activeCell.style.fontStyle = "italic";
      }
      activeOptionsState.isItalicSelected = !activeOptionsState.isItalicSelected;
    }
  }

//  FOR UNDERLINE BUTTON
  function onClickUnderline(underlinedButton) {  //this will triggered when user clicks on underline button
    underlinedButton.classList.toggle("active-option");
    if (activeCell) {
      if (activeOptionsState.isUnderLineSelected) {
        // if the text is underlined => none
        activeCell.style.textDecoration = "none";
      } else {
        activeCell.style.textDecoration = "underline";
      }
      activeOptionsState.isUnderLineSelected =
        !activeOptionsState.isUnderLineSelected;
    }
  }

  //FOR TEXT ALIGN

  function highlightTextAlignButtons(textAlignValue) {  //this function will triggered after user select one button from text align
    // textAlignValue === "left" => we have to highlight only left button
    // textAlignValue === "right" => we have to highlight only right button
    // textAlignValue === "center" => we have to highlight only center button
    for (let i = 0; i < textAlignElements.length; i++) {
      if (textAlignElements[i].getAttribute("data-value") === textAlignValue) { //getattribute function will give us value of data of slected
        textAlignElements[i].classList.add("active-option");
      } else {
        textAlignElements[i].classList.remove("active-option");
      }
    }
  }
  
  function onClickTextAlign(textAlignButton) { //this will triggered when user clicks on TEXT ALIGN button
    let selectedValue = textAlignButton.getAttribute("data-value"); // data value we given in html
    highlightTextAlignButtons(selectedValue);  //this is funtion to get which button user selected from left right and center
  
    // change the text alignment.
    if (activeCell) {
      activeCell.style.textAlign = selectedValue;  //text align as which is selected
      activeOptionsState.textAlign = selectedValue; //initializing the value for active option state object (text align)
    }
  }

  //FOR TEXT COLOR

  function onChangeTextColor(textColorInput) {
    let selectedColor = textColorInput.value;  //.value to know the value which is given by user
    if (activeCell) {
      activeCell.style.color = selectedColor; //giving the color of text as value
      activeOptionsState.color = selectedColor;
    }
  }

 // FOR BACKGROUND COLOR
  function onChangeBackgroundColor(textColorInput) {
    let selectedColor = textColorInput.value;      //.value to know the value which is given by user
    if (activeCell) {
      activeCell.style.backgroundColor = selectedColor;  //giving the bgcolor of text as value
      activeOptionsState.backgroundColor = selectedColor;
    }
  }