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

// document.getElementById('pixelCanvas').onmouseover
this.onclick.('tr').style.background-color = "blue";


    


/* to do 

  create grid width using % screen size width and number = how tall to make a square.
  allow the individual grid boxes to resize themselves inside
  on click change to color in 'color picker' 
  set default background to light tan/grey almost white


  **
  Optional add icon to title bar

*/