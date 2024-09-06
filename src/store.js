import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

import { allUserReducer } from "./reducers/userReducer.js";
const rootReducer = combineReducers({ allUserReducer });

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
