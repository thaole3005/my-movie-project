import React, { useState } from "react";
import { Modal, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { closeModalAntd } from "../../../Redux/actions/modal.action";
import * as action from "../../../Redux/actions/modal.action";

export default function ModalAntd({componentClick, showModalFunc, flagLoading = true, htmlType, disabledOkBtn}) {

  const {loading, visible, title,okButtonText,cancelButtonText, modalContent, submitCallback, cancelCallback } = useSelector((state) => state.modalAntd);



    // console.log("loading", loading);
    console.log("visible", visible);
    console.log("disabledOkBtn", disabledOkBtn);

    // console.log("modalContent", modalContent);
    console.log("htmlType", htmlType);


  const showModal = () => {
 
  };

  const handleOk = () => {
  
  };

  const handleCancel = () => {
  
  };

  const dispatch = useDispatch();

  return (
    <div>
      <>
        <div onClick={showModalFunc}>
          
          {componentClick}
        </div>
        <Modal
          visible={visible}
          title={title}
          onOk={submitCallback}
          onCancel={() => {
            dispatch(closeModalAntd());
        }}
          footer={[
            <Button key="back" onClick={cancelCallback}>
              {cancelButtonText}
            </Button>,
            <Button
              key="submit"
              type="primary"
              htmlType = {htmlType ? htmlType : "button"}
              loading={loading}
              disabled = {disabledOkBtn}
              onClick={async () => {
                //   console.log("VÀO submit antd");
                  if(flagLoading) {
                      await dispatch(action.displayLoadingAntd());
                      await submitCallback();
                      setTimeout(() => {
                         dispatch(action.hideLoadingAntd());
                      }, 2000);
                  } else {
                    await submitCallback();
                    dispatch(action.hideLoadingAntd());
                  }
                  

              }}
            >
              {okButtonText}
            </Button>,
   
          ]}
        >
        {modalContent}
        </Modal>
      </>
    </div>
  );
}
