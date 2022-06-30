import React, { useState } from 'react';
import Board from './Board';
import classes from './Game.module.css';

const boardStart = ['', '', '', '', '', '', '', '', ''];

const Game = () => {
  const [history, setHistory] = useState([
    { board: boardStart, nextTurn: 'X' },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // slice will return copy array in array object
  // if statement will not allow for multiple input at same square
  // nextTurn variable will allow which turn is there
  // handleClick will pass data to square using props

  const handleClick = (i) => {
    const board = history[currentIndex].board.slice();
    if (board[i] || checkWinner(board)) {
      return;
    }

    board[i] = history[currentIndex].nextTurn;
    const nextTurn = history[currentIndex].nextTurn === 'O' ? 'X' : 'O';
    setHistory(history.concat([{ board: board, nextTurn: nextTurn }]));
    setCurrentIndex(currentIndex + 1);
  };

  const winner = checkWinner(history[currentIndex].board);
  // const draw = checkDraw(history[currentIndex].board);

  // status will print what is the status of the game who is winner X or O

  let status;
  if (winner) {
    status = winner + ': is winner ';
  } else {
    status = history[currentIndex].nextTurn + ': Turn';
  }

  // goBack function will help to goBack in Time Travel

  const goBack = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={classes.gameInfo}>
      <div>
        <Board board={history[currentIndex].board} handleClick={handleClick} />
      </div>
      <div className={classes.gameInfo}>
        <div className={classes.status}>{status}</div>
        <ol className={classes.time}>
          {history.map((el, index) => {
            return (
              <li>
                <button
                  className={classes.active1}
                  onClick={() => goBack(index)}
                >
                  Go to move #{index}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Game;

//--------------------------------------------------------------------------------/

const checkWinner = (squares) => {
  const winningCondition = [
    [0, 1, 2], //horizontal
    [3, 4, 5], //horizontal
    [6, 7, 8], //horizontal
    [0, 3, 6], //vertical
    [1, 4, 7], //vertical
    [2, 5, 8], //vertical
    [0, 4, 8], //cross
    [2, 4, 6], // cross
  ];
  for (let i = 0; i < winningCondition.length; i++) {
    const [a, b, c] = winningCondition[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

//--------------------------------------------------------------------------------/

// Draw condition

// const checkDraw = (squares) => {
//   for (let i = 0; i < squares.length; i++) {
//     if (squares[i] == null) {
//       return squares[i];
//     }
//   }
//   return null;
// };
