import React from "react";
import { Avatar } from "antd";
import { useSelector } from "react-redux";
import logo from "../../../../assets/img/logo.png";
import { UserOutlined } from "@ant-design/icons/lib/icons";
import { useDispatch } from "react-redux";
import "./BookingProgress.scss";
import { showConfirm } from './../../ConfirmAntd/ConfirmAntd';
import { logout } from "../../../../Redux/actions/auth.action";

export default function BookingProgress({ currentPage }) {
  const { profile, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="booking_progress_container">
        <div className="booking_progress_content">
          <div className="tix_logo">
            <a href="/">
              <img src={logo} />
            </a>
          </div>
          <div className="tix_progress">
            <div
              className={
                currentPage === "chonGhe" ? "step step_active" : "step"
              }
            >
              <p>
                <span>01</span>CHỌN GHẾ
              </p>
            </div>
            <div
              className={
                currentPage === "payment" ? "step step_active" : "step"
              }
            >
              <p>
                <span>02</span> THANH TOÁN
              </p>
            </div>
            <div
              className={currentPage === "result" ? "step step_active" : "step"}
            >
              <p>
                <span>03</span> KẾT QUẢ ĐẶT VÉ
              </p>
            </div>
          </div>

          {isLoggedIn ? (
              <div className="ava_and_logout">
                  <Avatar
                    src={`https://ui-avatars.com/api/?name=${profile.taiKhoan}`}
                    alt={profile.taiKhoan}
                    size="large"
                  />
                  <span className="logout_span" onClick={() => {
                    showConfirm(
                        "Bạn có chắc muốn đăng xuất",
                        <p>Cảm ơn bạn đã sử dụng TIX</p>,
                        () => {
                        dispatch(logout());
                        },
                        "Hủy",
                        "Đăng xuất",
                )
                }}>Đăng xuất</span>
              </div>
          ) : (
       
                <Avatar size="small" icon={<UserOutlined />} />
          
          )}
        </div>
      </div>
    </div>
  );
}
