import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import AdminLayout from './../Layout/AdminLayout';
import { showConfirm } from './../User/components/ConfirmAntd/ConfirmAntd';

export default function PrivateRoute({isAuth, children}) {
    console.log("isAuth", isAuth);
    const {profile, isLoggedIn} = useSelector((state) => state.auth);
    const history = useHistory();

    if (!isLoggedIn) {
        //nếu chưa đăng nhập
        return <Redirect to="/login" />;
    }

    if(isAuth === false || isAuth ==="KhachHang") {
        //nếu không phải là admin
        showConfirm(
          "Bạn không đủ quyền truy cập trang này", 
          <p>Hãy đăng nhập với tư cách Admin!!!</p>,
          () => {
            history.push("/login");
        },
    
        "Trang chủ",
        "Đăng nhập",
        () => {
           history.push("/");
        }
          
        )
    
        return null;
      }

    return (
       <AdminLayout>
           {children}
       </AdminLayout>
    )
}
