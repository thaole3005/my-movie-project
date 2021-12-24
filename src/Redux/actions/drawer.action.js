import { drawerAntdType } from './../actionType/actionType';


export const openDawerAntd = (payload) => {
    // console.log("vào opendrawerAntd action");
    return {
        type: drawerAntdType.OPEN_DRAWER_ANTD,
        payload,
    }
}
  
  export const closeDrawerAntd = () => ({
    type: drawerAntdType.CLOSE_DRAWER_ANTD,
  
  });