import React from 'react';
import classes from './Square.module.css';

const Square = (props) => {
  return (
    <div>
      <button className={classes.square} onClick={() => props.handleClick()}>
        {props.value}
      </button>
    </div>
  );
};

export default Square;
