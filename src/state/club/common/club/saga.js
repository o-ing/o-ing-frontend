/* eslint-disable import/no-anonymous-default-export */
import { all, call, put, takeLeading } from "redux-saga/effects";
import { Types, actions } from ".";
import selectAllBoard from "../../../../api/common/selectAllBoard";
import selectAllPostsInBoardApi from "../../../../api/common/selectAllPostsInBoardApi";

function* fetchSelectAllBoard({ clubId }) {
  const result = yield call(selectAllBoard, {
    url: `/api/club/${clubId}/board`,
  });
  const data = result.data.map((d) => ({ boardName: d.name, boardId: d.boardId }));
  yield put(actions.setSelectAllBoard({ data }));
}
function* fetchSelectAllPostsInBoard({ clubId, boardId }) {
  const result = yield call(selectAllPostsInBoardApi, {
    url: `/api/club/${clubId}/board/${boardId}/post`,
  });
  console.log(result.data);
  if (result.isSuccess) {
    yield put(actions.setSelectAllPostsInBoard({ data: result.data }));
  }
}
export default function* () {
  yield all([takeLeading(Types.FetchSelectAllBoard, fetchSelectAllBoard), takeLeading(Types.FetchSelectAllPostsInBoard, fetchSelectAllPostsInBoard)]);
}
