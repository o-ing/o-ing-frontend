import { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions as ClubData } from "../../state/club/common/clubData";
import { getLocalStorageItem } from "../util/usingLocalStorage";

const ClubIntro = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { clubId } = useParams();
  const clubData = useSelector((state) => state.clubDataStore.introData);
  const userClub = getLocalStorageItem("clubName");

  useEffect(() => {
    dispatch(ClubData.fetchGetClubIntro(clubId));
  }, [dispatch, clubId]);
  return (
    <TopWrapper>
      {clubData?.image && (
        <>
          <Header>
            <ImageWrapper>
              <img src={clubData.image} alt={clubData.name} style={{ objectFit: "cover" }} />
            </ImageWrapper>
            <h1 style={{ margin: "0 0 0 10px", padding: 0 }}>{clubData.name}</h1>
          </Header>
          {clubData?.name === userClub && <SetClubIntro to={`/createClub/${clubId}`}>클럽 인트로 수정하기</SetClubIntro>}
          {clubData?.description && <Content dangerouslySetInnerHTML={{ __html: clubData.description }} />}
        </>
      )}
      {clubData?.description[0] === "#" && <NoContent>🌱 동아리 소개가 아직 준비 중입니다 🌱</NoContent>}
    </TopWrapper>
  );
};

const TopWrapper = styled.div`
  margin-top: 82px;
  height: 100vh;
`;
const Header = styled.div`
  padding: 100px 0 10px 50px;
  display: flex;
  box-sizing: border-box;
  align-items: baseline;
  border-bottom: 2px solid rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.5);
  position: relative;
`;
const ImageWrapper = styled.div`
  width: 300px;
  height: 240px;
  padding: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0;
`;
const NoContent = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
`;
const SetClubIntro = styled(Link)`
  position: absolute;
  top: 365px;
  right: 50px;
  z-index: 1;
  outline: none;
  border: 2px solid rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.5);
  background-color: rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.3);
  width: fit-content;
  height: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  padding: 5px;
  color: black;
  &:hover {
    background-color: rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.5);
    color: black;
  }
`;
const Content = styled.div`
  max-width: 1080px;
  margin: 30px auto 0;
`;
export default ClubIntro;
