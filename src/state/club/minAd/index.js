import { createReducer } from "../../../common/redux-helper";

export const Types = {
  FetchClubIntro: "minAd/FetchClubIntro",
  FetchShowClubResume: "midAd/FetchShowClubResume",
  SetShowClubResume: "midAd/SetShowClubResume",
};

export const actions = {
  fetchClubIntro: ({ description }) => ({
    type: Types.FetchClubIntro,
    description,
  }),
  fetchShowClubResume: ({ clubId }) => ({
    type: Types.FetchShowClubResume,
    clubId,
  }),
  setShowClubResume: ({ resumeData }) => ({
    type: Types.SetShowClubResume,
    resumeData,
  }),
};

const INITIAL_STATE = { thumbnailData: null, resumeData: null };

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetShowClubResume]: (state, action) => {
    state.resumeData = action.resumeData;
  },
});

export default reducer;
