import React from "react";
import styled from "styled-components";
import leaf from "../asset/adminUserRole/leaf.png";
const GrantUserRole = () => {
  return (
    <div>
      <BgImgWrapper>
        <Img src={leaf} alt="유저권한 부여하기 백그라운드 이미지" />
      </BgImgWrapper>
      GrantUserRole
    </div>
  );
};

export default GrantUserRole;

const BgImgWrapper = styled.div`
  height: calc(100vh - 160px);
  padding-top: 80px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  @media (max-width: ${({ theme }) => theme.windowSize.small}) {
    width: 200px;
  }
`;
