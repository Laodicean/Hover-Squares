import React from "react";
import Square from "../Square/Square";
import styles from "./SquareGrid.module.css";
import { connect } from "react-redux";
const GRID_WIDTH = 500;


const SquareGrid = ({ handleMouseOver, CalculateRowsAndCols, currentMode }) => {
  const squareArray = Array.from(Array(currentMode.cellsNum * currentMode.cellsNum), () => ({ value: 0 }));

  return (
    <div className={styles.wrapper} style={{width:GRID_WIDTH}}>
      {squareArray.map((squareEl, i) => (
        <Square
          key={i}
          index={i}
          cellSize={(GRID_WIDTH / currentMode.cellsNum)}
          {...CalculateRowsAndCols(i, currentMode.cellsNum)}
          handleMouseOver={handleMouseOver}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentMode: state.app.currentMode,
});


export default connect(mapStateToProps, null)(SquareGrid);
