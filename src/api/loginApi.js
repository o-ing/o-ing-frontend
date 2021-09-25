import { message } from "antd/lib";
import axios from "axios";
import { API_HOST } from "../common/constant";
import { API_SUCCESS, BAD_REQUEST } from "./constant";
import { saveJwtTokenInLocalStorage } from "./util/saveJwtTokenInLocalStorage";
export async function loginApi({ url, data, params = {} }) {
  url = API_HOST + url;
  try {
    const res = await axios({ url, method: "post", params, data });
    if (res.status !== API_SUCCESS) {
      message.error("서버에서 에러가 났습니다. 다시 시도해주세요.");
      return { isSuccess: false };
    }
    if (res.data.data.hasOwnProperty("token")) {
      saveJwtTokenInLocalStorage(res.data.data.token);
    }
    message.success("회원가입에 성공하였습니다!");
    return { isSuccess: true };
  } catch ({ response }) {
    const { status, message: errorMessage } = response.data;
    if (status === BAD_REQUEST) {
      if (errorMessage === "LOGIN_FAIL") {
        message.error("아이디 또는 비밀번호가 틀렸습니다.");
      }
    }
  }
  return { isSuccess: false };
}
