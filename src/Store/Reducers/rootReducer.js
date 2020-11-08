import { combineReducers } from "redux";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  messages: appReducer,
});

export default rootReducer;
