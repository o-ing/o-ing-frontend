import { createReducer } from "../../../../common/redux-helper";

export const Types = {
  FetchSelectAllBoard: "common/FetchSelectAllBoard",
  SetSelectAllBoard: 'common/SetSelectAllBoard'
};

export const actions = {
  fetchSelectAllBoard: ({clubId}) => ({
    type: Types.FetchSelectAllBoard,
    clubId,
  }),
  setSelectAllBoard: ({data}) => ({
    type: Types.SetSelectAllBoard,
    data
  })
};

const INITIAL_STATE = { boards: [] };

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetSelectAllBoard]: (state, action) => {
    state.boards = action.data
  },
});

export default reducer;
