import React from "react";
import styles from "./Square.module.css";


const Square = ({ index, handleMouseOver, cellSize }) => {
  return (
    <div style={{width: cellSize, height:cellSize}} className={styles.squareEl} onMouseEnter={handleMouseOver(index)}></div>
    
  );
};

export default (Square);
