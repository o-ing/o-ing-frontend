import Cookies from "js-cookie";
export const saveJwtTokenInCookie = (token) => {
  console.log(token);
  Cookies.set("x-auth", token, {
    secure: true,
  });
};
