
import { modalAntdType } from "../actionType/actionType";

export const openModalAntd = (payload) => {
    // console.log("vào openModalAntd action");
    return {
        type: modalAntdType.OPEN_MODAL_ANTD,
        payload,
    }
}
  
  export const closeModalAntd = () => ({
    type: modalAntdType.CLOSE_MODAL_ANTD,
  
  });
  export const  handleOkModalAntdWithLodaing = (payload) => {
      return {
        type: modalAntdType.HANDLE_OK_MODAL_ANTD_WITH_LOADING,
        payload,
      
      };
  };

  export const displayLoadingAntd = () => ({
    type: modalAntdType.DISPLAY_LOADING,
  
  });
  export const hideLoadingAntd = () => ({
    type: modalAntdType.HIDE_LOADING,
  
  });

  export const  handleOkModalAntdNoLodaing = (payload) => ({
    type: modalAntdType.HANDLE_OK_MODAL_ANTD_NO_LOADING,
    payload,
  
  });
  export const cancelModalAntd = (payload) => ({
    type: modalAntdType.CANCEL_MODAL_ANTD,
    payload,
  
});
export const changeContentModalAntd = (payload) => {
    //   console.log("payload in changeContentModalAntd", payload);
      return {
        type: modalAntdType.CHANGE_CONTENT_MODAL_ANTD,
        payload,
      }
  }
  
