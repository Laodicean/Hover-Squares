import { SET_MODES, SET_CURRENT_MODE } from "./types";



export const setModes = (modes) => {
  return {
    type: SET_MODES,
    payload: modes,
  };
};

export const setMode = (modeObj) => {
    return {
      type: SET_CURRENT_MODE,
      payload: modeObj,
    };
  };
  

