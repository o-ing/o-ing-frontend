import { createReducer } from "../../common/redux-helper";

export const Types = {
  FetchSignup: "auth/FetchSignup",
  SetSignup: "auth/SetSignup",
};

export const actions = {
  fetchSignup: ({ name, nickname, email, password, phoneNumber }) => {
    return {
      type: Types.FetchSignup,
      name,
      nickname,
      email,
      password,
      phoneNumber,
    };
  },
  setSignup: (isSignup) => ({
    type: Types.SetSignup,
    isSignup,
  }),
};
const INITIAL_STATE = { name: "", isLogin: undefined, isSignUp: false };

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetSignup]: (state, action) => {
    state.isSignUp = action.isSignup;
  },
});
export default reducer;
