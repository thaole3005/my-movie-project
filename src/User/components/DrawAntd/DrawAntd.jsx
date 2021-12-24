import React, { useState } from 'react';
import { Drawer, Button, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../Redux/actions/drawer.action";
import "./DrawAntd.scss";

export default function DrawAntd() {

    const {visible, title, drawerContent, footerExist} = useSelector((state) => state.drawerAntd);
    const dispatch = useDispatch();

    // const [visible, setVisible] = useState(false);

    // const showDrawer = () => {
    //   dispatch(action.openDawerAntd({
    //         title: <p>Open title</p>,
    //         drawerContent: <p>Open drawer content</p>,
    //     }
    //   ));
    // };
  
    const onClose = () => {
      dispatch(action.closeDrawerAntd());
    };

    return (
        <>
            {/* <Button type="primary" onClick={showDrawer}>
                Open
            </Button> */}
            <Drawer title={title} placement="right" 
            className="drawer_antd"
            onClose={onClose} 
            visible={visible}
            footer={
              footerExist === true ? 
                <Space className="footer_drawer">
                  <Button onClick={onClose}>Cancel</Button>
                  <Button type="primary" onClick={onClose}>
                    OK
                  </Button>
                </Space>
                :
                null
              }
            >
                    {drawerContent}
            </Drawer>
        </>
    )
}
