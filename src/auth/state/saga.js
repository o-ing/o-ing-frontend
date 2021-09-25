/* eslint-disable import/no-anonymous-default-export */
import { all, call, put, takeLeading } from "redux-saga/effects";
import { actions, Types } from ".";
import { loginApi } from "../../api/loginApi";
import { signupApi } from "../../api/signupApi";
function* fetchSignup({ name, nickname, email, password, phoneNumber }) {
  const { isSuccess } = yield call(signupApi, {
    url: "/api/sign",
    data: {
      name,
      nickname,
      email,
      password,
      phoneNumber,
    },
  });
  if (isSuccess) {
    yield put(actions.setSignup(isSuccess));
  }
}
function* fetchLogin({ email, password }) {
  const { isSuccess } = yield call(loginApi, {
    url: "/api/login",
    data: {
      email,
      password,
    },
  });
  if (isSuccess) {
    yield put(actions.setLogin(isSuccess));
  }
}

export default function* () {
  yield all([takeLeading(Types.FetchSignup, fetchSignup), takeLeading(Types.FetchLogin, fetchLogin)]);
}
