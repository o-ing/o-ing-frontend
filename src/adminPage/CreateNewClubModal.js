import { Input, Modal } from "antd";

import React from "react";
import styled from "styled-components";

const CreateNewClubModal = ({ inputRef, handleClubImgInp, clubName, handleClubNameInp, visible, handleOk, confirmLoading, handleCancel }) => {
  return (
    <Modal title="Title" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
      <ModalInner>
        <Input placeholder="동아리 이름을 입력해 주세요" value={clubName} onChange={handleClubNameInp} />
        <Input placeholder="분과를 입력해주세요" />
        <input type="file" onChange={handleClubImgInp} accept="image/png, image/jpeg" ref={inputRef} />
      </ModalInner>
    </Modal>
  );
};

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CreateNewClubModal;
