import { SET_MODES, SET_CURRENT_MODE } from "./types";

const initialState = {
  modes: [{
    'name': 'Easy',
    'cellsNum': 5
}],
  currentMode: {
      'name': 'Easy',
      'cellsNum': 5
  }
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODES:
      return { ...state, modes: action.payload };
      case SET_CURRENT_MODE:
      return { ...state, currentMode: action.payload };

    default:
      return state;
  }
};

export default appReducer;
