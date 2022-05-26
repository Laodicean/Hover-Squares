import React from "react";
import styles from "./DisplayHoverSquares.module.css";

const DisplayHoverSquares = ({activeSquares}) => {
  return (
    <div className={styles.wrapper}>
      <h1>Hover Squares</h1>
      <div>
        <ul>
         {activeSquares.map((el, i) => <li key={el + i}>{`Row ${el.curRow} Col ${el.curCol}`}</li>)}
        </ul>
      </div>
    </div>
  );
};

export { DisplayHoverSquares };
