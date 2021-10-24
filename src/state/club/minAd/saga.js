/* eslint-disable import/no-anonymous-default-export */
import { all, call, put, takeLeading } from "redux-saga/effects";
import { Types } from ".";
import { createClubIntroApi } from "../../../api/minAd/createClubIntroApi";

function* fetchClubIntro({ description }) {
  const result = yield call(createClubIntroApi, {
    url: "/api/club",
    data: {
      description,
    },
  });
}

export default function* () {
  yield all([takeLeading(Types.FetchClubIntro, fetchClubIntro)]);
}
