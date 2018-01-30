import {createStore, applyMiddleware} from "redux"
import reducer from "./reducers/index";
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";


let store = createStore(reducer, applyMiddleware(reduxLogger,reduxPromise,reduxThunk));

window.s = store;
export default  store;