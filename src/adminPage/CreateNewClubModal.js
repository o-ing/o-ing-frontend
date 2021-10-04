import { Input, Modal, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { befImgUpload, getBase64 } from "../header/befImgUpload";

const CreateNewClubModal = ({ visible, setVisible }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [clubName, setClubName] = useState("");
  const [clubImage, setClubImage] = useState("");
  const [clubBranch, setClubBranch] = useState("");
  const [imgLoading, setImgLoading] = useState("");

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    });
  };

  const handleCancel = () => {
    setClubName("");
    setClubImage("");
    setClubBranch("");
    setVisible(false);
  };

  const handleClubName = (e) => {
    setClubName(e.target.value);
  };

  const handleClubBranch = (e) => {
    setClubBranch(e.target.value);
  };

  const handleClubImg = (info) => {
    if (info.file.status === "uploading") {
      setImgLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setClubImage(imageUrl);
        setImgLoading(false);
      });
    }
  };

  const uploadButton = (
    <div>
      {imgLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Modal title="동아리 생성하기" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
      <ModalInner>
        <Input placeholder="동아리 이름을 입력해 주세요" value={clubName} onChange={handleClubName} />
        <Input placeholder="분과를 입력해주세요" value={clubBranch} onChange={handleClubBranch} />
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={befImgUpload}
          onChange={handleClubImg}
        >
          {clubImage ? <img src={clubImage} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
        </Upload>
      </ModalInner>
    </Modal>
  );
};

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CreateNewClubModal;
