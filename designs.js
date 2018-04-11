// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  let row = Number(document.getElementById('inputHeight').value);
  let col = Number(document.getElementById('inputWeight').value);
  let tr, td, cell;
  
  console.log(row + col);

  for (m = 0; m < row; m++) {
    tr = document.createElement('tr');
    tr.setAttribute("class", "colorPick");
    for (k = 0; k < col; k++) {
      td = document.createElement('td');
      

      tr.appendChild(td);
    }
    document.getElementById('pixelCanvas').appendChild(tr);
  }

}

function changeStyle() {
  let color = document.getElementById('colorPicker').value;

  let rowColor = document.getElementsByClassName("colorPick");
  
  rowColor.style.backgroundColor = color;

}
 

