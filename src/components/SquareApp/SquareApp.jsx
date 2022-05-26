import React from "react";
import { useEffect, useState } from "react";
import DisplayHoverSquares from "../DisplayHoverSquares";
import ModeComponent from "../ModeComponent";
import SquareGrid from "../SquareGrid";
import { Button, Grid } from "@mui/material";

import styles from "./SquareApp.module.css";

const CalculateRowsAndCols = (index, colsQuantity) => ({
  curRow: Math.floor(index / colsQuantity + 1),
  curCol: (index % 5) + 1,
});
const cols = 5;

const SquareApp = () => {
  const [modes, setModes] = useState([]);
  const [activeSquares, setActiveSquares] = useState([]);

  const handleMouseOver = (i) => (e) => {
    e.target.classList.toggle(styles.active);

    setActiveSquares(
      [...activeSquares, CalculateRowsAndCols(i, cols)].reduce((acc, cur) => {
        const ind = acc.findIndex(
          (el) => el.curRow === cur.curRow && el.curCol === cur.curCol
        );
        if (ind === -1) {
          acc.push(cur);
        } else {
          acc.splice(ind, 1);
        }

        return acc;
      }, [])
    );
  };

  useEffect(() => {
    fetch("https://demo7919674.mockable.io/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setModes(data);
      });
  }, []);

  return (
    <Grid container spacing={2} className={styles.wrapper}>
      <Grid item xs={10}>
        <ModeComponent modes={modes} />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained">
          Start
        </Button>
      </Grid>
      <Grid item xs={8}>
        <SquareGrid
          handleMouseOver={handleMouseOver}
          CalculateRowsAndCols={CalculateRowsAndCols}
        />
      </Grid>
      <Grid item xs={4}>
        <DisplayHoverSquares activeSquares={activeSquares} />
      </Grid>
    </Grid>
  );
};

export { SquareApp };
