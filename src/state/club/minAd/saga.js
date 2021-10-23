/* eslint-disable import/no-anonymous-default-export */
import { all, call, put, takeLeading } from "redux-saga/effects";
import { Types } from ".";
import { createClubIntroApi } from "../../../api/minAd/createClubIntroApi";

function* fetchClubIntro({ description }) {
  console.log(description, " test");
  const result = yield call(createClubIntroApi, {
    url: "/api/club",
    data: {
      description,
    },
  });
  console.log(result);
}

export default function* () {
  yield all([takeLeading(Types.FetchClubIntro, fetchClubIntro)]);
}
