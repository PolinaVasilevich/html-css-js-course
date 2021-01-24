import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

export default createStore(rootReducer, {}, devtoolsExtension);
