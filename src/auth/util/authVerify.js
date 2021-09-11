export const verifyName = (_, value) => {
  if (!/^[가-힣]{2,10}$/.test(value)) {
    return Promise.reject(new Error("2자에서 10자 사이로 입력해야합니다."));
  }
  return Promise.resolve();
};

export const verifyNickname = (_, value) => {
  const logic = /^[a-zA-Z가-힣0-9]{2,20}$/;
  if (!logic.test(value)) {
    return Promise.reject(new Error("2자에서 20자 사이로 입력해야합니다."));
  }
  return Promise.resolve();
};

export const verifyEmail = (_, value) => {
  const logic = /^[_a-zA-Z0-9-\+]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,3})$/;
  if (!logic.test(value)) {
    return Promise.reject(new Error("이메일 양식이 올바르지 않습니다."));
  }
  return Promise.resolve();
};

export const verifyPassword = (_, value) => {
  const atLeastOneUppercaseLogicAndLowerCase = /([A-Z])([a-z])|([a-z])([A-Z])/;
  const atLeastOneSpecialLetter = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
  if (!atLeastOneUppercaseLogicAndLowerCase.test(value)) {
    return Promise.reject(new Error("대문자와 소문자는 적어도 하나씩 들어가야 합니다."));
  }
  if (!atLeastOneSpecialLetter.test(value)) {
    return Promise.reject(new Error("특수문자는 반드시 하나이상 들어가야합니다."));
  }
  if (value.length < 8 || value.length > 30) {
    return Promise.reject(new Error("8자에서 30자 사이로 입력해야합니다."));
  }
  return Promise.resolve();
};

export const verityPhoneNumber = (_, value) => {
  const logic = /^010[0-9]{8}$/;
  if (!logic.test(value)) {
    return Promise.reject(new Error("올바른 전화번호 양식이 아닙니다."));
  }
};
