import createSagaMiddleware from "@redux-saga/core";
import { all } from "@redux-saga/core/effects";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import authReducer from "../auth/state";
import authSaga from "../auth/state/saga";
import adClubReducer from "../state/club/admin";
import adminSaga from "../state/club/admin/saga";
import thumbnailReducer from "../state/club/common/clubThumbnail";
import thumbnailSaga from "../state/club/common/clubThumbnail/saga";
import clubIntroStore from "../state/club/minAd";
import clubIntroSaga from "../state/club/minAd/saga";
import clubDataStore from "../state/club/common/clubData";
import clubDataSaga from "../state/club/common/clubData/saga";
const reducer = combineReducers({
  auth: authReducer,
  adminClub: adClubReducer,
  thumbnailStore: thumbnailReducer,
  clubIntroStore: clubIntroStore,
  clubDataStore: clubDataStore,
});
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

function* rootSaga() {
  yield all([authSaga(), adminSaga(), thumbnailSaga(), clubIntroSaga(), clubDataSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
