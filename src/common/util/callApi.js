import axios from "axios";
import { API_HOST } from "../constant";
import { message } from "antd";

export async function callApi({ method = "get", url, params, data }) {
  // const { status, data: resData } = await axios({ url, method, baseURL: API_HOST, params, data });
  const test = await axios({ url, method, baseURL: API_HOST, params, data });
  console.log(test);
  // if (status !== 200) {
  //   message.error(resData.errorMessage);
  // }
  // return {
  //   isSuccess: true,
  //   data: resData.data.data,
  // };
}
