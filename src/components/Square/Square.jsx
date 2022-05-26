import React from "react";
import styles from "./Square.module.css";

const Square = ({ index, handleMouseOver }) => {
  return (
    <div className={styles.squareEl} onMouseEnter={handleMouseOver(index)} />
  );
};

export { Square };
