$(document).ready(function() {
  var origBoard;
  const huPlayer = "O";
  const aiPlayer = "X";
  const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
  ]
  const cells = document.querySelectorAll(".cell");
  replay();

  $('#replay').click(replay);

  function replay() {
    origBoard = Array.from(Array(9).keys());
    //console.log(origBoard);
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerText = '';
    }
  }

  $('.cell').click(function(data) {
    var sqId = data.target;
    sqId.innerText = huPlayer;
    origBoard[sqId.id] = huPlayer;
    //console.log(origBoard);

  });

  
});//end of jquery doc.ready.func..  