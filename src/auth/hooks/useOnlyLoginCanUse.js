import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { message } from "antd/lib";
import { getLocalStorageItem } from "../../common/util/usingLocalStorage";
import { actions } from "../state";

export default function useOnlyLoginCanUse() {
  const history = useHistory();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.isLogin);
  useEffect(() => {
    if (login) {
      return history.replace("/");
    }
    const nickname = getLocalStorageItem("nickname");
    const role = getLocalStorageItem("role");
    if (nickname && role) {
      return dispatch(actions.setLogin({ isLogin: true, nickname, role }));
    }
    message.warn("로그인 후 사용하실 수 있습니다.");
    setTimeout(() => {
      history.replace("/login");
    }, 500);
    return;
  }, [login, history, dispatch]);
}
