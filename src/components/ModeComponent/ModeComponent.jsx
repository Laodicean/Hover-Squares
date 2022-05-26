import React, { useState } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const ModeComponent = ({ modes, updateFieldsQuantity }) => {
  const [gameMode, setGameMode] = useState("");
  const modeHandler = (event) => {
    event.target.value && setGameMode(event.target.value);
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

export { ModeComponent };
