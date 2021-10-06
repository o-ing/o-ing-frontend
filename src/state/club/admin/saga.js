/* eslint-disable import/no-anonymous-default-export */
import { Types } from ".";
import { all, call, put, takeLeading, getContext } from "redux-saga/effects";
import { createClubApi } from "../../../api/admin/createClubApi";
import { message } from "antd";
import { removeLoginStorage } from "../../../common/util/usingLocalStorage";
import { createBrowserHistory } from "history";

function* fetchCreateClub({ clubName, clubImage, clubBranch }) {
  const result = yield call(createClubApi, {
    url: "/api/club",
    data: {
      name: clubName,
      image: clubImage,
      branch: clubBranch,
    },
  });
  if (result.isSuccess) {
    return message.success(result.Message);
  }
  return message.error(result.errorMessage);
}
export default function* () {
  yield all([takeLeading(Types.FetchCreateClub, fetchCreateClub)]);
}
