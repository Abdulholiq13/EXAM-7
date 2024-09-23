import { combineReducers, legacy_createStore } from "redux";

const reducers = combineReducers({});

export const store = legacy_createStore(reducers);
