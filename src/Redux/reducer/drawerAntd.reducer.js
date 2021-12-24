import { drawerAntdType } from "../actionType/actionType";



const initialState = {
    visible: false,
    title: "Default title",
    drawerContent: <p>Default modal content</p>,
    footerExist: true,
}

const drawerAntdReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case drawerAntdType.OPEN_DRAWER_ANTD: {
            return {
                 ...state, 
                 visible: true,
                 title: payload.title,
                 drawerContent: payload.drawerContent,
                 footerExist: payload.footerExist,
            };
        }
    
    
    
        case drawerAntdType.CLOSE_DRAWER_ANTD: {
            return {
                 ...state, 
                 modalContent: <p>Default modal content</p>,
                 visible: false,
            };
        }

    default:
        return state
    }
}



export default drawerAntdReducer;