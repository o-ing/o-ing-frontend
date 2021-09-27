import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { message } from "antd/lib";
import { getLocalStorageItem } from "../../common/util/usingLocalStorage";
import { actions } from "../state";
import useIsLogIn from "./useIsLogIn";

export default function useOnlyLoginCanUse() {
  const history = useHistory();
  const isLogIn = useIsLogIn();
  useEffect(() => {
    if (isLogIn) {
      return history.replace("/");
    }
    message.warn("로그인 후 사용하실 수 있습니다.");
    setTimeout(() => {
      history.replace("/login");
    }, 500);
    return;
  }, [isLogIn, history]);
}
