/* eslint-disable import/no-anonymous-default-export */
import { all, call, put, takeLeading } from "redux-saga/effects";
import { actions, Types } from ".";
import { callApi } from "../../common/util/callApi";

function* fetchSignup({ name, nickname, email, password, phoneNumber }) {
  const a = yield call(callApi, {
    url: "/api/sign",
    method: "post",
    data: {
      name,
      nickname,
      email,
      password,
      phoneNumber,
    },
  });
  console.log(a, "a");
  // if (isSuccess && data) {
  //   yield put(actions.setUser(data.name));
  // }
}

export default function* () {
  yield all([takeLeading(Types.FetchSignup, fetchSignup)]);
}
