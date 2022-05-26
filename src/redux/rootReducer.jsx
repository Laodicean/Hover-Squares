import { combineReducers } from "redux";
import appReducer from "./appReduccer";

export const rootReducer = combineReducers({
    app: appReducer
});