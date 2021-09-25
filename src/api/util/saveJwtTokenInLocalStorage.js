import { setLocalStorageItem } from "../../common/util/usingLocalStorageItem";

export const saveJwtTokenInLocalStorage = (token) => {
  setLocalStorageItem("x-auth", token);
};
