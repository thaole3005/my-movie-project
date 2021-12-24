import React, {useState} from 'react';
import "./LayoutContentAdmin.scss";
import { useDispatch } from 'react-redux';
import { NavLink,  useLocation } from 'react-router-dom';
import { Input } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { getListMovie } from '../../Redux/thunk/movie.thunk';

const { Header, Sider, Content } = Layout;

export default function LayoutContentAdmin({children}) {
  const dispatch = useDispatch();

  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  let {pathname} = useLocation();


  const { SubMenu } = Menu;


  const inputSearchChange = (e) => {
    console.log("search Value", e.target.value);
    if(pathname === "/admin/films") {
      //search ở trang phim

      if(e.target.value === "") {
        dispatch(getListMovie());
      } else {
        dispatch(getListMovie(e.target.value.trim()));

      }

    }
}



    return (
        <div className="layoutContentAdmin">
          <Layout style={{ minHeight: '100vh' }}>
              <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1" icon={<PieChartOutlined />}>
                    <NavLink to="/admin/dashboard">Dashboard</NavLink>
                  </Menu.Item>
                 
                  <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="3">
                      <NavLink to="/admin/users">Users</NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <NavLink to="/admin/users/addnewuser">Add New User</NavLink>
                    </Menu.Item>
                  </SubMenu>

                  <SubMenu key="sub2" icon={<FileOutlined />} title="Films">
                    <Menu.Item key="6">
                      <NavLink to="/admin/films">Films</NavLink>
                    </Menu.Item>
                    <Menu.Item key="8">
                      <NavLink to="/admin/films/addnewfilm">Add New Films</NavLink>
                    </Menu.Item>
                  </SubMenu>
               
              </Menu>
            </Sider>
            <Layout className="site-layout">
                <div className="clearfix">
                  <Input size="large" placeholder="Search" style={{width: 300}} className="admin_search_input" onChange ={inputSearchChange}/>
                </div>

              <Content style={{ margin: '0 16px' }}>

                {children}
              </Content>
            </Layout>
      </Layout>
    </div>
    )
}
