import { combineReducers } from "redux";
import listReducer from "./listReducer";
import editReducer from "./editReducer";

const reducers = combineReducers({
  listReducer,
  editReducer
});

export default reducers;
