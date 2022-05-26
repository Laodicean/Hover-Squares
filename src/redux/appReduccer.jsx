import { SET_MODES, SET_CURRENT_MODE } from "./types";

const initialState = {
  modes: [],
  mode: {
      'name': null,
      'field': null
  }
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODES:
      return { ...state, modes: action.payload };
      case SET_CURRENT_MODE:
      return { ...state, mode: action.payload };

    default:
      return state;
  }
};

export default appReducer;
