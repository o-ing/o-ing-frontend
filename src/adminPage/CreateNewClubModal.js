import { Modal } from "antd";
import React from "react";

const CreateNewClubModal = ({ inputRef, handleClubImgInp, clubName, handleClubNameInp, visible, handleOk, confirmLoading, handleCancel }) => {
  return (
    <Modal title="Title" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
      <input type="text" value={clubName} onChange={handleClubNameInp} />
      <input type="file" onChange={handleClubImgInp} accept="image/png, image/jpeg" ref={inputRef} />
    </Modal>
  );
};

export default CreateNewClubModal;
