import { Input, Modal, Upload, Menu, Dropdown } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { befImgUpload, getBase64 } from "../header/befImgUpload";
import { useDispatch } from "react-redux";
import { actions as adminClub } from "../state/club/admin";
import { CLUB_BRANCH } from "./constant";
import { DownOutlined } from "@ant-design/icons";
import ImageUploading from "react-images-uploading";

const CreateNewClubModal = ({ visible, setVisible }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [clubName, setClubName] = useState("");
  const [clubImage, setClubImage] = useState([]);
  const [clubBranch, setClubBranch] = useState("");
  const [dropName, setDropName] = useState("분과를 선택해주세요");

  const dispatch = useDispatch();

  const onDropItemClick = (e) => {
    setDropName(CLUB_BRANCH[e.key]);
    setClubBranch(e.key);
  };
  const menu = (
    <Menu>
      {Object.keys(CLUB_BRANCH).map((itemKey) => (
        <Menu.Item onClick={onDropItemClick} key={itemKey}>
          {CLUB_BRANCH[itemKey]}
        </Menu.Item>
      ))}
    </Menu>
  );
  const handleOk = () => {
    setConfirmLoading(true);
    dispatch(adminClub.fetchCreateClub({ clubName, clubImage: clubImage[0].data_url, clubBranch }));
    setClubName("");
    setClubImage([]);
    setClubBranch("");
    setDropName("분과를 선택해 주세요");
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    });
  };

  const handleCancel = () => {
    setClubName("");
    setClubImage([]);
    setClubBranch("");
    setDropName("분과를 선택해 주세요");
    setVisible(false);
  };

  const handleClubName = (e) => {
    setClubName(e.target.value);
  };

  const handleClubImg = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setClubImage(imageList);
  };

  return (
    <Modal title="동아리 생성하기" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
      <ModalInner>
        <Input placeholder="동아리 이름을 입력해 주세요" value={clubName} onChange={handleClubName} />
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            {dropName} <DownOutlined />
          </a>
        </Dropdown>
        <ImageUploading value={clubImage} onChange={handleClubImg} dataURLKey="data_url">
          {({ imageList, onImageUpload }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button onClick={onImageUpload}>Click or Drop here</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper"></div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </ModalInner>
    </Modal>
  );
};

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CreateNewClubModal;
