/* eslint-disable import/no-anonymous-default-export */
import { all, call,put, takeLeading } from "redux-saga/effects";
import { Types, actions } from ".";
import selectAllBoard from '../../../../api/common/selectAllBoard'

function* fetchSelectAllBoard({ clubId }) {
  const result = yield call(selectAllBoard, {
    url: `/api/club/${clubId}/board`, 
  });
  const data = result.data.map(d => d.name)
  console.log(result, data,'saga')
  yield put(actions.setSelectAllBoard({ data}));
}

export default function* () {
  yield all([
    takeLeading(Types.FetchSelectAllBoard, fetchSelectAllBoard) 
  ])
}
