import { createReducer } from "../../common/redux-helper";

export const Types = {
  FetchSignup: "auth/FetchSignup",
  SetUser: "auth/SetUser",
};

export const actions = {
  fetchSignup: ({ id, name, nickname, email, password }) => {
    console.log(id, name, nickname, email, password, "redux email");
    return {
      type: Types.FetchSignup,
      id,
      name,
      nickname,
      email,
      password,
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
