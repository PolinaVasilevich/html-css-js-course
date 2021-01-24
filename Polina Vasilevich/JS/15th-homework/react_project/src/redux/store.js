import { createStore } from "redux";
import rootReducer from "./rootReduce";
const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

export default createStore(rootReducer, {}, devtoolsExtension());
