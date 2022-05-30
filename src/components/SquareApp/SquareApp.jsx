import React from "react";
import { useEffect, useState } from "react";
import DisplayHoverSquares from "../DisplayHoverSquares";
import ModeComponent from "../ModeComponent";
import SquareGrid from "../SquareGrid";
import { Button, Grid } from "@mui/material";
import { connect } from "react-redux";
import { setModes } from "../../redux/actions";
import styles from "./SquareApp.module.css";
import { useCallback } from "react";

const calculateRowsAndCols = (index, colsQuantity) => ({
  curRow: Math.floor(index / colsQuantity + 1),
  curCol: (index % colsQuantity) + 1,
  index,
});

const SquareApp = ({ setModes, currentMode }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [activeSquares, setActiveSquares] = useState([]);

  const handleMouseOver = useCallback((i) => (e) => {
    setActiveSquares(
      [...activeSquares, calculateRowsAndCols(i, currentMode.cellsNum)].reduce(
        (acc, cur) => {
          const ind = acc.findIndex(
            (el) => el.curRow === cur.curRow && el.curCol === cur.curCol
          );
          if (ind === -1) {
            acc.push(cur);
          } else {
            acc.splice(ind, 1);
          }

          return acc;
        },
        []
      )
    );
  }, [activeSquares, currentMode.cellsNum]);
   


  const clearHistory = () => {
    setActiveSquares([])
  }
  

  useEffect(() => {
    fetch("https://demo7919674.mockable.io/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const mappedArr = data.map((el) => ({
          name: el.name,
          cellsNum: el.field,
        }));
        setModes(mappedArr);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }, [setModes]);

  return (
    <Grid container spacing={2} className={styles.wrapper}>
      <Grid item xs={10}>
        <ModeComponent clearHistory={clearHistory} />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" onClick={() => setGameStarted(true)} className={styles.btn}>
          Start
        </Button>
      </Grid>
      {gameStarted ? (
        <>
          <Grid item xs={8}>
            <SquareGrid
              activeSquares={activeSquares}
              handleMouseOver={handleMouseOver}
              calculateRowsAndCols={calculateRowsAndCols}
            />
          </Grid>
          <Grid item xs={4}>
            <DisplayHoverSquares activeSquares={activeSquares} />
          </Grid>
        </>
      ) : null}
    </Grid>
  );
};

const mapStateToProps = ({ app }) => ({
  modes: app.modes,
  currentMode: app.currentMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setModes: (modes) => {
      dispatch(setModes(modes));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SquareApp);
