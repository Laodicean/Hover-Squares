import React from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { connect } from "react-redux";
import { setMode } from "../../redux/actions";

const ModeComponent = ({ modes, setMode, currentMode }) => {

  const modeHandler = (event) => 
    event.target.value && setMode({cellsNum: event.target.value});

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Mode</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentMode.cellsNum}
          label="Mode"
          onChange={modeHandler}
        >
          {modes.map((m) => (
            <MenuItem key={m.name} value={m.cellsNum}>
              {m.name}
            </MenuItem>
          ))}
   
  
        </Select>
      </FormControl>
    </Box>
  );
};

const mapStateToProps = ({app}) => ({
  modes: app.modes,
  currentMode: app.currentMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setMode: (currentMode) => {
      dispatch(setMode(currentMode));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeComponent);

