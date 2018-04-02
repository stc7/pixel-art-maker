// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(row, col) {

  row = document.getElementById('inputHeight');
  col = document.getElementById('inputWeight');

  for (var n = 1; n <= row; n++) {
    document.getElementById('pixelCanvas').innerHTML = '<div class="pixelBox"><p>1</p></div>';
    
   /* for (var m = 1; m > col; m++) {
      document.getElementById('')
    } */
  }

}

/* to do 

  create grid width using % screen size width and number = how tall to make a square.
  allow the individual grid boxes to resize themselves inside
  on click change to color in 'color picker' 
  set default background to light tan/grey almost white


  **
  Optional add icon to title bar

*/