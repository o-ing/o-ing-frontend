import { createReducer } from "../../../common/redux-helper";

export const Types = {
  FetchClubIntro: "minAd/FetchClubIntro",
  SetClubIntro: "minAd/SetClubIntro",
};

export const actions = {
  fetchClubIntro: ({ description }) => ({
    type: Types.FetchClubIntro,
    description,
  }),
  // setClubIntro: ({ thumbnailData }) => ({
  //   type: Types.SetClubThumbnail,
  //   thumbnailData,
  // }),
};

const INITIAL_STATE = { thumbnailData: null };

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetClubThumbnail]: (state, action) => {
    state.thumbnailData = action.thumbnailData;
  },
});

export default reducer;
