// When size is submitted by the user, call makeGrid()
function makeGrid() {

  let row = Number(document.getElementById('inputHeight').value);
  let col = Number(document.getElementById('inputWeight').value);
  let tr, td, cell;
  
  // Grid creator
  for (m = 0; m < row; m++) {
    tr = document.createElement('tr');
    
    for (k = 0; k < col; k++) {
      td = document.createElement('td');
      tr.appendChild(td);
    }
    document.getElementById('pixelCanvas').appendChild(tr);
  }

  /* jQuery to select td and change color, color variable needs to be defined inside function to reset on every click*/
  $('td').click(function fillColor() {
    let color = document.getElementById('colorPicker').value;

    $(this).attr('style') ? $(this).removeAttr('style') : $(this).attr('style', 'background-color:' + color);
  });
}
