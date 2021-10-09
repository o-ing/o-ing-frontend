/* eslint-disable import/no-anonymous-default-export */
import { Types } from ".";
import { all, call, takeLeading } from "redux-saga/effects";
import { createClubApi } from "../../../api/admin/createClubApi";
import { message } from "antd";

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
