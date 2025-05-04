function player (name) {
  return {
    name
  }
}

// Player objects for player 1 and player 2
const player1 = player('Andrew');
const player2 = player('Nathan');

const gameFlow = {
  turn: player1,
  xOrO: 'X',
  hasWon: false,
  thisThat() {
    if(this.xOrO === 'X') {
      this.xOrO = 'O';
    } else {
      gameFlow.xOrO = 'X';
    }
  }
};

(function Gameboard() {
  const rows = 3;
  const cols = 3;
  const board = [
    [], [], [],
    [], [], [],
    [], [], []
  ];

  board.forEach((cell) => {
    const myDiv = document.createElement('div');
    document.querySelector('main').append(myDiv);
    
   
  });
  const squares = document.querySelectorAll('div');
  squares.forEach((square, index) => {

    function checkForWin() {
      if(
        board[0] === 'X' && board[1] === 'X' && board[2] === 'X' ||
        board[0] === 'O' && board[1] === 'O' && board[2] === 'O' ||
        board[3] === 'X' && board[4] === 'X' && board[5] === 'X' ||
        board[3] === 'O' && board[4] === 'O' && board[5] === 'O' ||
        board[6] === 'X' && board[7] === 'X' && board[8] === 'X' ||
        board[6] === 'O' && board[7] === 'O' && board[8] === 'O' ||
        board[0] === 'X' && board[3] === 'X' && board[6] === 'X' ||
        board[0] === 'O' && board[3] === 'O' && board[6] === 'O' ||
        board[1] === 'X' && board[4] === 'X' && board[7] === 'X' ||
        board[1] === 'O' && board[4] === 'O' && board[7] === 'O' ||
        board[2] === 'X' && board[5] === 'X' && board[8] === 'X' ||
        board[2] === 'O' && board[5] === 'O' && board[8] === 'O' ||
        board[0] === 'X' && board[4] === 'X' && board[8] === 'X' ||
        board[0] === 'O' && board[4] === 'O' && board[8] === 'O' ||
        board[2] === 'X' && board[4] === 'X' && board[6] === 'X' ||
        board[2] === 'O' && board[4] === 'O' && board[6] === 'O'
      ) {
        console.log('We have a winner')
      }
    }

    function addLetter() {
      square.textContent = gameFlow.xOrO;
      board[index].push(gameFlow.xOrO);
      checkForWin();
      gameFlow.thisThat();
    }

    square.addEventListener('click', addLetter, { once: true });
  })
})();
