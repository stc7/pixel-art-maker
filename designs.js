// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  var row = Number(document.getElementById('inputHeight').value);
  var col = Number(document.getElementById('inputWeight').value);
  var tr, td, row, cell;
  
  console.log(row + col);

  for (m = 0; m < row; m++) {
    tr = document.createElement('tr');

    for (k = 0; k < col; k++) {
      td = document.createElement('td');
      

      tr.appendChild(td);
    }
    document.getElementById('pixelCanvas').appendChild(tr);
  }

}

function changeStyle() {
  var color = document.getElementById('colorPicker').value;
  var thisClick = this.getElementByTagName('td');
  if (thisClick ) {

  } else {

  }


}
 

