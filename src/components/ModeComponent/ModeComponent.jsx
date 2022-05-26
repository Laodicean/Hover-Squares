import React, { useState } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { connect } from "react-redux";
import { setMode } from "../../redux/actions";

const ModeComponent = ({ modes, setMode }) => {
  const [gameMode, setGameMode] = useState("");
  const modeHandler = (event) => {
    const modeObj = event.target.value;
    modeObj && setGameMode(modeObj);
    const currentMode = {
      name: modeObj.name,
      field: modeObj.field,
    };
    setMode(currentMode);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Mode</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gameMode}
          label="Mode"
          onChange={modeHandler}
        >
          {modes.map((mode) => (
            <MenuItem key={mode.name} value={mode}>
              {mode.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  modes: state.app.modes,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setMode: (mode) => {
      dispatch(setMode(mode));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeComponent);
