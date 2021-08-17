import axios from "axios";
import { API_HOST } from "../constant";
import { message } from "antd";

/**
 *
 * @param {object} param
 * @param {'get' | 'post' =} param.method
 * @param {string} param.url
 * @param {object=} param.params
 * @param {object=} param.data
 * @param {object=} param.totalCount
 */
export async function callApi({ method = "get", url, params, data }) {
  const { status, data: resData } = await axios({ url, method, baseURL: API_HOST, params, data });
  if (status !== 200) {
    message.error(resData.errorMessage);
  }
  return {
    isSuccess: true,
    data: resData.data.data,
  };
}
