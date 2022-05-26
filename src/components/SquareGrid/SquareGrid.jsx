import React from "react";
import { Square } from "../Square/Square";
import styles from "./SquareGrid.module.css";
const cols = 5;
const rows = 5;



const SquareGrid = ({ handleMouseOver, CalculateRowsAndCols }) => {
  const squareArray = Array.from(Array(cols * rows), () => ({ value: 0 }));

  return (
    <div className={styles.wrapper}>
      {squareArray.map((squareEl, i) => (
        <Square
          key={i}
          index={i}
          {...CalculateRowsAndCols(i, cols)}
          handleMouseOver={handleMouseOver}
        />
      ))}
    </div>
  );
};

export { SquareGrid };
