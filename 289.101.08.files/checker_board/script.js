/*
to place/spawn a piece using JavaScript:
*/
var piece = document.createElement('div');            // create an empty div
piece.setAttribute('class', 'piece');                 // assign the div class="piece"
document.getElementById('board').appendChild(piece);  // add the div to the id="board"
piece.style.top = '0px';                              // assign the top/y position
piece.style.left = '0px';                             // assign the left/x position

var xpos = 0;
var ypos = 0;


for (x=0; x<=36; x+=1){
  var piece = document.createElement('div');            // create an empty div
  piece.setAttribute('class', 'piece');                 // assign the div class="piece"
  document.getElementById('board').appendChild(piece);  // add the div to the id="board"
  piece.style.top = ypos+ 'px';                         // assign the top/y position
  piece.style.left = xpos+ 'px';                        // assign the left/x position
  xpos += 100
}
