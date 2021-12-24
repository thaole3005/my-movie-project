import { MenuOutlined, UserOutlined } from "@ant-design/icons/lib/icons";
import { Avatar, Col, Drawer, Row, Space,  Menu, Dropdown, Button  } from "antd";
import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { logout } from "../../../Redux/actions/auth.action";
import { showConfirm } from './../ConfirmAntd/ConfirmAntd';


const menuUser = (
  <Menu>
    <Menu.Item>
      <NavLink to="/user-profile">My Account</NavLink>
    </Menu.Item>

  </Menu>
);

const menuAdmin = (
  <Menu>
    <Menu.Item>
      <NavLink to="/user-profile">My Account</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to="/admin/dashboard">Admin</NavLink>
    </Menu.Item>
  
  </Menu>
);


const Header = () => {
  const { profile, isLoggedIn, isAuthenticated } = useSelector((state) => state.auth);
  console.log("isAuthenticated", isAuthenticated);
  console.log("profile", profile);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const decideMenu = (isAuthenticated) => {
    if(isAuthenticated=== false || isAuthenticated==="KhachHang") {
      console.log("trường hợp là kh");
      return menuUser;
    }
    if(isAuthenticated=== true || isAuthenticated==="QuanTri") {
      console.log("trường hợp là admin");
      return menuAdmin;
    }
  }

  const renderUser = () => {
    if(!isLoggedIn) {
      //chưa đăng nhập 
      return (
        <div>
          <Avatar size="small" icon={<UserOutlined />} />
          <Link to="/login">Đăng Nhập</Link> 
        </div>
      )
      
    } else {
       //đã đăng nhập
      //  let menu = menuUser;

       //nếu là admin 
      //  if(isAuthenticated === true) {
      //    menu = menuAdmin;
      //  }

       return (
        <div className="userLogin">
        <Dropdown overlay={decideMenu(isAuthenticated)} placement="bottomRight" arrow>
          <Avatar src={`https://ui-avatars.com/api/?name=${profile.taiKhoan}`} alt={profile.taiKhoan} size="large" />
        </Dropdown>
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
        }}
        style={{cursor: "pointer"}}
        >Đăng xuất</span>
    </div>
       )
    }
  }


  return (
    <div className="header">
      <Row justify="center" align="middle" className="header-container">
        <Col xs={12} md={8} className="header-logo">
          <NavLink to="/">
            <img
              src="https://tix.vn/app/assets/img/icons/web-logo.png"
              alt="logo"
            />
          </NavLink>
        </Col>
        <Col md={8} className="header-menu">
          <Link to="/">Lịch Chiếu</Link>
          <Link to="/">Cụm rạp</Link>
          <Link to="/">Tin tức</Link>
          <Link to="/">Ứng dụng</Link>
        </Col>
        <Col span={8} className="header-login">
          <Space>
            {
              renderUser()
            }
            {/* {
              isLoggedIn ? <Avatar src={`https://ui-avatars.com/api/?name=${profile.taiKhoan}`} alt={profile.taiKhoan} size="large" /> : <Avatar size="small" icon={<UserOutlined />} />
            } */}
            {/* {
              isLoggedIn ?  "Đăng Xuất" : <Link to="/login">Đăng Nhập</Link> 
            } */}
            
          </Space>
        </Col>
        <Col xs={12} className="header-toggle">
          <MenuOutlined onClick={showDrawer} />
        </Col>
      </Row>
      <Drawer placement="right" onClose={onClose} visible={visible}>
        <Space direction="vertical">
          <Space className="drawer-item">
        
            {
              renderUser()
            }
         
            {/* {
              isLoggedIn ? <Avatar src={`https://ui-avatars.com/api/?name=${profile.taiKhoan}`} size="small" /> : <Avatar size="small" icon={<UserOutlined />} />
            }
            
            {
              isLoggedIn ?  "Đăng Xuất" : <Link to="/login">Đăng Nhập</Link> 
            } */}
          </Space>
          <Link to="/" className="drawer-item">
            Lịch Chiếu
          </Link>
          <Link to="/" className="drawer-item">
            Cụm rạp
          </Link>
          <Link to="/" className="drawer-item">
            Tin tức
          </Link>
          <Link to="/" className="drawer-item">
            Ứng dụng
          </Link>
        </Space>
      </Drawer>
    </div>
  );
};

export default Header;
