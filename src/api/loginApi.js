import { message } from "antd/lib";

export async function loginApi({ url, data, params = {} }) {
  // url = API_HOST + url;
  try {
    const res = await axios({ url, method: "post", params, data });
    if (res.status !== API_SUCCESS) {
      message.error("서버에서 에러가 났습니다. 다시 시도해주세요.");
    }
    message.success("로그인에 성공하였습니다!");
    console.log(res.json());
    // return { isSuccess: true };
  } catch (e) {
    message.error(e);
  }
}
