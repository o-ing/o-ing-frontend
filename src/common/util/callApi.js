import axios from "axios";
import { API_HOST } from "../constant";
import { message } from "antd";

export async function callApi({ method = "get", url, params, data }) {
  // const { status, data: resData } = await axios({ url, method, baseURL: API_HOST, params, data });
  url = `http://3.38.13.2:8080` + url;
  console.log(url);
  try {
    const res = await axios({ url, method, params, data });
  } catch ({ response: { data } }) {
    message.error(data.message);
  }
  // if (status !== 200) {
  //   message.error(resData.errorMessage);
  // }
  // return {
  //   isSuccess: true,
  //   data: resData.data.data,
  // };
}
