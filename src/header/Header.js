import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import header_oing from "../asset/header/header_oing.png";
import useIsLogIn from "../auth/hooks/useIsLogIn";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../auth/state";
import { removeLocalStorageItem } from "../common/util/usingLocalStorage";
import { USER_ROLE } from "../common/constant";
import CreateNewClubModal from "../adminPage/CreateNewClubModal";

export default function Header() {
  const dispatch = useDispatch();
  const isLogIn = useIsLogIn();
  const userRole = useSelector((state) => state.auth.role);

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [clubName, setClubName] = useState("");
  const [clubImage, setClubImage] = useState({
    file: "",
    previewURL: "",
  });
  const inputRef = useRef(null);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    });
  };

  const handleCancel = () => {
    setVisible(false);
    setClubName("");
  };

  const handleClubNameInp = (e) => {
    setClubName(e.target.value);
    console.log(clubName);
  };

  const handleClubImgInp = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    const file = inputRef.current.files[0];

    reader.onloadend = () => {
      setClubImage({ file: file, previewURL: reader.result });
    };
    file && reader.readAsDataURL(file);
  };

  const handleLogout = () => {
    removeLocalStorageItem("x-auth");
    removeLocalStorageItem("nickname");
    removeLocalStorageItem("role");
    dispatch(actions.setLogout());
  };

  return (
    <HeaderStyle>
      <StyledNav>
        <Link to="/">
          <img src={header_oing} alt="oing header img" />
        </Link>
        {isLogIn && (
          <>
            {userRole === USER_ROLE.ADMIN && (
              <>
                <Link to="/" onClick={showModal}>
                  사용자 권한 관리하기
                </Link>
                <CreateNewClubModal
                  inputRef={inputRef}
                  handleClubImgInp={handleClubImgInp}
                  clubImage={clubImage}
                  clubName={clubName}
                  handleClubNameInp={handleClubNameInp}
                  visible={visible}
                  handleOk={handleOk}
                  confirmLoading={confirmLoading}
                  handleCancel={handleCancel}
                />
              </>
            )}
            <Link to="/" onClick={handleLogout}>
              로그아웃
            </Link>
          </>
        )}
        {!isLogIn && (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </>
        )}
      </StyledNav>
    </HeaderStyle>
  );
}
const HeaderStyle = styled.div`
  background-color: white;
  height: 80px;
  border-bottom: 1px solid #f2f4ff;
`;
const StyledNav = styled.nav`
  height: inherit;
  display: flex;
  align-items: center;
  padding-left: 64px;
  padding-right: 64px;
  max-width: 1200px;
  margin: 0 auto;
  img {
    width: 44px;
  }
  a:first-child {
    margin-right: auto;
  }
  a:not(:first-child) {
    color: rgb(${({ theme }) => theme.colors.orange_rgb});
    margin-right: 7px;
    padding-right: 7px;
    border-right: 1px solid;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.small}) {
    padding-left: 34px;
    padding-right: 34px;
  }
`;
