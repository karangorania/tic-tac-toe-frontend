import React from 'react';
import Square from './Square';
import classes from './Board.module.css';

const Board = (props) => {
  const renderSquare = (i) => {
    return (
      <Square value={props.board[i]} handleClick={() => props.handleClick(i)} />
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={classes.row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={classes.row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
