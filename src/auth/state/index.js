import { createReducer } from "../../common/redux-helper";

export const Types = {
  FetchSignup: "auth/FetchSignup",
  SetUser: "auth/SetUser",
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
  setUser: (name) => ({
    type: Types.SetUser,
    name,
  }),
};
const INITIAL_STATE = { name: "", isLogin: undefined };

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetUser]: (state, action) => {
    state.name = action.name;
    state.isLogin = action.name ? "Login" : "NotLogin";
  },
});
export default reducer;
