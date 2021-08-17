import createSagaMiddleware from "@redux-saga/core";
import { all } from "@redux-saga/core/effects";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import authReducer from "../auth/state";
import authSaga from "../auth/state/saga";

const reducer = combineReducers({
  auth: authReducer,
});
const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

function* rootSaga() {
  yield all([authSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
