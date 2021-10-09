import createSagaMiddleware from "@redux-saga/core";
import { all } from "@redux-saga/core/effects";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import authReducer from "../auth/state";
import authSaga from "../auth/state/saga";
import adClubReducer from "../state/club/admin";
import adminSaga from "../state/club/admin/saga";
import thumbnailReducer from "../state/club/common/ClubThumbnail";
import thumbnailSaga from "../state/club/common/ClubThumbnail/saga";

const reducer = combineReducers({
  auth: authReducer,
  adminClub: adClubReducer,
  thumbnailStore: thumbnailReducer,
});
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

function* rootSaga() {
  yield all([authSaga(), adminSaga(), thumbnailSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
