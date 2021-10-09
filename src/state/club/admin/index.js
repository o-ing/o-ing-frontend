import { createReducer } from "../../../common/redux-helper";

export const Types = {
  FetchCreateClub: "admin/FetchCreateClub",
  SetClubIsCreated: "admin/SetClubIsCreated",
};

export const actions = {
  fetchCreateClub: ({ clubName, clubImage, clubBranch }) => ({
    type: Types.FetchCreateClub,
    clubName,
    clubImage,
    clubBranch,
  }),
  setClubIsCreated: (isCreated) => ({
    type: Types.SetClubIsCreated,
    isCreated,
  }),
};
const INITIAL_STATE = { isCreated: false };

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetClubIsCreated]: (state, action) => {
    state.isCreated = action.isCreated;
  },
});
export default reducer;
