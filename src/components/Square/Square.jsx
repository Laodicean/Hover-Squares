import React from "react";
import styles from "./Square.module.css";


const Square = React.memo(({ index, handleMouseOver, cellSize, isActive = false}) => {
    return (
      <div style={{width: cellSize, height: cellSize}} 
        className={`${isActive !== -1 ? styles.activeCell : styles.notActiveCell}`} 
        onMouseEnter={handleMouseOver(index)}>
      </div>
  );
});


export default (Square);
