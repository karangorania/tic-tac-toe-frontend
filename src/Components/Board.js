import React from 'react';
import Square from './Square';
import classes from './Board.module.css';

const Board = (props) => {
  const printSquare = (i) => {
    return (
      <Square value={props.board[i]} handleClick={() => props.handleClick(i)} />
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        {printSquare(0)}
        {printSquare(1)}
        {printSquare(2)}
      </div>
      <div className={classes.row}>
        {printSquare(3)}
        {printSquare(4)}
        {printSquare(5)}
      </div>
      <div className={classes.row}>
        {printSquare(6)}
        {printSquare(7)}
        {printSquare(8)}
      </div>
    </div>
  );
};

export default Board;
