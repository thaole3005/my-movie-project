import { modalAntdType } from "../actionType/actionType";
import React from 'react';

const initialState = {
    title: "Default title",
    modalContent: <p>Default modal content</p>,
    
    submitCallback: () => {
        alert("submitCallback nèee");
    },
    cancelCallback: () => {
        alert("cancelCallback nèee");
    },
    loading: false,
    visible: false,
    okButtonText: "OK",
    cancelButtonText: "CANCELL",
}

export const modalAntdReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case modalAntdType.OPEN_MODAL_ANTD: {
        return {
             ...state, 
             visible: true,
             title: payload.title,
             okButtonText: payload.okButtonText, 
             cancelButtonText: payload.cancelButtonText,
        };
    }



    case modalAntdType.CLOSE_MODAL_ANTD: {
        return {
             ...state, 
             visible: false,
        };
    }

    case modalAntdType.HANDLE_OK_MODAL_ANTD_WITH_LOADING: {
        // console.log("vào case HANDLE_OK_MODAL_ANTD_WITH_LOADING");
        // console.log("payload in HANDLE_OK_MODAL_ANTD_WITH_LOADING", payload);
        return {
             ...state, 
            //  visible: true,
             loading: true,
             submitCallback: payload.submitCallback,
        };
    }

    case modalAntdType.DISPLAY_LOADING: {
        // console.log("vào case DISPLAY_LOADING");
        return {
            ...state, 
            loading: true,
            
       };
    }
    case modalAntdType.HIDE_LOADING: {
        return {
            ...state, 
            visible: false,
            loading: false,
            
       };
    }

    case modalAntdType.HANDLE_OK_MODAL_ANTD_NO_LOADING: {
        return {
             ...state, 
             loading: false,
             submitCallback: payload.submitCallback,
        };
    }

    case modalAntdType.CANCEL_MODAL_ANTD: {
        return {
             ...state, 
             cancelCallback: payload.cancelCallback,
            //  visible: false,
        };
    }

    case modalAntdType.CHANGE_CONTENT_MODAL_ANTD: {
        // console.log("vào case CHANGE_CONTENT_MODAL_ANTD");
        return {
            ...state, 
            modalContent: payload.modalContent,

        }

    }

    default:
        return state
    }
}
