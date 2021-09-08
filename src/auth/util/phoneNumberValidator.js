export const phoneNumberValidator = (_, value) => {
  if (value.length < 0) {
    return Promise.reject(new Error("전화번호는 필수로 입력해야 합니다!"));
  }
  if (value.indexOf("-") !== -1) {
    return Promise.reject(new Error("-를 제거해 주세요!"));
  }
  if (!/^010{1}[0-9]{4}[0-9]{4}/.test(value)) {
    return Promise.reject(new Error("올바른 전화번호 형식이 아닙니다!"));
  } else {
    return Promise.resolve();
  }
};
