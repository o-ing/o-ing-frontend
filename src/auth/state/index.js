import { createReducer } from "../../common/redux-helper";

export const Types = {
  FetchSignup: "auth/FetchSignup",
  FetchLogin: "auth/FetchLogin",
  SetSignup: "auth/SetSignup",
  SetLogin: "auth/SetLogin",
};

export const actions = {
  fetchSignup: ({ name, nickname, email, password, phoneNumber }) => ({
    type: Types.FetchSignup,
    name,
    nickname,
    email,
    password,
    phoneNumber,
  }),
  fetchLogin: ({ email, password }) => ({
    type: Types.FetchLogin,
    email,
    password,
  }),
  setSignup: (isSignup) => ({
    type: Types.SetSignup,
    isSignup,
  }),
  setLogin: ({ isLogin, nickname, role }) => ({
    type: Types.SetLogin,
    isLogin,
    nickname,
    role,
  }),
};
const INITIAL_STATE = { name: "", isLogin: false, isSignUp: false, nickname: null, role: null };

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetSignup]: (state, action) => {
    state.isSignUp = action.isSignup;
  },
  [Types.SetLogin]: (state, { isLogin, nickname, role }) => {
    state.isLogin = isLogin;
    state.nickname = nickname;
    state.role = role;
  },
});
export default reducer;
