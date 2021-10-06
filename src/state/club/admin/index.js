import { createReducer } from "../../../common/redux-helper";

export const Types = {
  FetchCreateClub: "admin/FetchCreateClub",
};

export const actions = {
  fetchCreateClub: ({ clubName, clubImage, clubBranch }) => ({
    type: Types.FetchCreateClub,
    clubName,
    clubImage,
    clubBranch,
  }),
};
const INITIAL_STATE = { isCreated: false };

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetClearModal]: (state, action) => {
    state.isSignUp = action.isSignup;
  },
});
export default reducer;
