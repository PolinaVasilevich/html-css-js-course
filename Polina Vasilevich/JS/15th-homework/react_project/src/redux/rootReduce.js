import { combineReducers } from "redux";

import todoReducer from "../ducks/todo";
import counterReducer from "../ducks/counter";

export default combineReducers({
  todo: todoReducer,
  counter: counterReducer,
});
