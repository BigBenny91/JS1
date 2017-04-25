var char_x = 0;
    char_y = 0;

document.getElementById('right').addEventListener('click', function(){
if (char_x < 800 - 50){
    char_x += 50;

  document.getElementById('char').style.left = char_x +'px';
}
});

document.getElementById('left').addEventListener('click', function(){
  if (char_x > 0){
      char_x -= 50;

  document.getElementById('char').style.left= char_x +'px';
}

});


document.getElementById('down').addEventListener('click', function(){
  if (char_y > 600-50){
      char_y += 50;

  document.getElementById('char').style.left= char_y +'px';
}

});

document.getElementById('up').addEventListener('click', function(){
  if (char_y > 0){
      char_y -= 50;

  document.getElementById('char').style.left= char_y +'px';
}

});
