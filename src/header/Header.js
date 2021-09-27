import React, { useEffect } from "react";
import styled from "styled-components";
import header_oing from "../asset/header/header_oing.png";
import useIsLogIn from "../auth/hooks/useIsLogIn";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../auth/state";
import { removeLocalStorageItem } from "../common/util/usingLocalStorage";

export default function Header() {
  const dispatch = useDispatch();
  const isLogIn = useIsLogIn();

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
          <Link to="/" onClick={handleLogout}>
            로그아웃
          </Link>
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
  padding-top: calc(80px / 4);
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 64px;
  padding-right: 64px;

  img {
    width: 44px;
  }
  a:first-child {
    margin-right: auto;
  }

  max-width: 1200px;
  margin: auto auto;

  a:not(:first-child) {
    color: rgb(254, 185, 145);
    margin-left: 10px;
  }
  @media (max-width: 600px) {
    padding-left: 34px;
    padding-right: 34px;
  }
`;
