import React from 'react'
import { Popconfirm, message, Button } from 'antd';



export default function SmallPopConfirm(props) {
    const {children, title, okText, cancelText, confirmCallBack} = props;
    return (
 
        <Popconfirm
        placement="topRight"
        title={title}
        onConfirm={confirmCallBack}
        okText={okText}
        cancelText={cancelText}
    >
        {children}
    </Popconfirm>
    )
}
