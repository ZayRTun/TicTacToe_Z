$(document).ready(function() {
  var origBoard;
  var switchBtn = false;
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
    switchBtn = false;
    origBoard = Array.from(Array(9).keys());
    //console.log(origBoard);
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerText = '';
      cells[i].style.backgroundColor = '';
    }
  }

//Human's turn
  $('.cell').click(function(data) {
    if (switchBtn === false) {
      var sqId = data.target;
      sqId.innerText = huPlayer;
      origBoard[sqId.id] = huPlayer;
      let gameWon = checkWin(origBoard, huPlayer);
      if (gameWon) {
        gameOver(gameWon);
      } else {
        turn(origBoard, aiPlayer);
      }
    } else {
      console.log('Restart the Game');
    }
  });

//AI's turn
  function turn(board, player) {
    let huPlays = board.reduce((a, e, i) => (e === huPlayer) ? a.concat(i) : a, []);
    let playsRemain = board.reduce((a, e, i) => (e !== huPlayer) ? a.concat(i) : a, []); 
    console.log(playsRemain);
    console.log(plays.length);
    if (huPlays.length === 1) {
      
    }



    // let huPlays = [];
    // for (var i = 0; i < board.length; i++) {
    //   if (board[i] === huPlayer) {
    //     huPlays.push(board[i]);
    //   }
    // }
    //console.log(board);
  }

  function checkWin(board, player) {
    let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a,[]);
    let gameWon = null
    for (let [index, win] of winCombos.entries()) {
      
      if (win.every(elem => plays.indexOf(elem) > -1)) {
        gameWon = {index: index, player: player};
        //console.log(win);
        //console.log(gameWon.index);
        break;
      }
    }
    return gameWon;
  }

  function gameOver(game) {
    for (let index of winCombos[game.index]) {
      document.getElementById(index).style.backgroundColor = game.player == huPlayer ? 'blue' : 'red';
    }
    // for (var i = 0; i < cells.length; i++) {
    //   cells[i]
    // }
    switchBtn = true;
    //console.log(game.player)
  }

  
});//end of jquery doc.ready.func..  