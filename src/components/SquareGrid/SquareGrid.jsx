import React from "react";
import Square from "../Square/Square";
import styles from "./SquareGrid.module.css";
import { connect } from "react-redux";
const GRID_WIDTH = 500;


const SquareGrid = ({ handleMouseOver, CalculateRowsAndCols, mode }) => {
  const squareArray = Array.from(Array(mode.field * mode.field), () => ({ value: 0 }));

  return (
    <div className={styles.wrapper} style={{width:GRID_WIDTH}}>
      {squareArray.map((squareEl, i) => (
        <Square
          key={i}
          index={i}
          cellSize={(GRID_WIDTH / mode.field)}
          {...CalculateRowsAndCols(i, mode.field)}
          handleMouseOver={handleMouseOver}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  mode: state.app.mode,
});


export default connect(mapStateToProps, null)(SquareGrid);
