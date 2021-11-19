import { createReducer } from "../../../../common/redux-helper";

export const Types = {
  FetchSelectAllBoard: "common/FetchSelectAllBoard",
  SetSelectAllBoard: "common/SetSelectAllBoard",
  FetchSelectAllPostsInBoard: "common/FetchSelectAllPostsInBoard",
  SetSelectAllPostsInBoard: "common/SetSelectAllPosts",
};

export const actions = {
  fetchSelectAllBoard: ({ clubId }) => ({
    type: Types.FetchSelectAllBoard,
    clubId,
  }),
  setSelectAllBoard: ({ data }) => ({
    type: Types.SetSelectAllBoard,
    data,
  }),
  fetchSelectAllPostsInBoard: ({ clubId, boardId }) => ({
    type: Types.FetchSelectAllPostsInBoard,
    clubId,
    boardId,
  }),
  setSelectAllPostsInBoard: ({ data }) => {
    console.log(data);
    return {
      type: Types.SetSelectAllPostsInBoard,
      data,
    };
  },
};

const INITIAL_STATE = { boards: [], posts: [{ clubId: null, boardId: null, postId: null, title: null }] };

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetSelectAllBoard]: (state, action) => {
    state.boards = action.data;
  },
  [Types.SetSelectAllPostsInBoard]: (state, action) => {
    state.posts = action.data;
  },
});

export default reducer;
