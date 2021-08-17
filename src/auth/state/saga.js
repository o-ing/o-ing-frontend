/* eslint-disable import/no-anonymous-default-export */
import { all, call, put, takeLeading } from "redux-saga/effects";
import { actions, Types } from ".";
import { callApi } from "../../common/util/callApi";

function* fetchSignup({ id, name, nickname, email, password }) {
  console.log(id, name, nickname, email, password, "saga!!!!");

  const { isSuccess, data } = yield call(callApi, {
    url: "/auth/signup",
    method: "post",
    data: {
      id,
      name,
      nickname,
      email,
      password,
    },
  });
  if (isSuccess && data) {
    yield put(actions.setUser({ name }));
  }
}

export default function* () {
  yield all([takeLeading(Types.FetchSignup, fetchSignup)]);
}
