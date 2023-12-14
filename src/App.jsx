import "./assets/css/tailwind.css"
import "antd/dist/reset.css"
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  LockOutlined
} from '@ant-design/icons';
import { Avatar, Breadcrumb, Layout, Menu, Space, theme } from 'antd';
import styled from "styled-components";
import { ConfigProvider } from 'antd';
import { Link, Route, Routes, useLocation } from "react-router-dom"
import Todo from "./pages/todo"
import Course from "./pages/course"
import Home from "./pages"
import Login from "./pages/login";
import { useAuth } from "./stores/context/AuthContext";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  { key: '1', title: 'HomePage', link: '/', icon: <PieChartOutlined /> },
  { key: '2', title: 'Course', link: '/course', icon: <DesktopOutlined /> },
  {
    key: 'sub1',
    title: 'User',
    icon: <UserOutlined />,
    submenu: [
      { key: '3', title: 'Tom', link: '/user/3' },
      { key: '4', title: 'Bill', link: '/user/4' },
      { key: '5', title: 'Alex', link: '/user/5' },
    ],
  },
  { key: '10', title: 'Login', link: '/login', icon: <LockOutlined /> },
];

const LogoStyle = styled.div`
  height: 32px;
    margin: 16px;
    background: rgba(255,255,255,.2);
    border-radius: 6px;
`
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();
  const currentPath = location.pathname;
  const getKeyFromPath = (path) => {
    const item = items.find((item) => item.link === path);
    return item ? item.key : '';
  };
  const currentKey = getKeyFromPath(currentPath);

  const { user, logout } = useAuth()

  return (
    <ConfigProvider direction="ltr">
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <LogoStyle></LogoStyle>
          <Menu theme="dark" selectedKeys={[currentKey]} mode="inline">
            {items.map((item) =>
              item?.submenu ? (
                <Menu.SubMenu key={item.key} title={item.title} icon={item.icon}>
                  {item?.submenu.map((child) => (
                    <Menu.Item key={child.key} icon={child.icon}>
                      <Link to={child.link}>{child.title}</Link>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={item.link}>{item.title}</Link>
                </Menu.Item>
              )
            )}
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="px-4 flex items-center justify-end"
            style={{
              background: colorBgContainer,
            }}
          >
            <div className="relative">
              <div className="flex flex-row gap-2 justify-end">
                <button type="button" className="relative max-w-xs items-center rounded-full text-sm focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avarta" />
                </button>
                <span className="flex">{user?.name}</span>
              </div>
              <div className={`${user ? '' : 'hidden'} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                <a onClick={logout} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >

            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
              separator="/"
              items={[
                {
                  title: 'Home',
                },
                {
                  title: 'MCN',
                  href: '',
                },
              ]}
            />
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/course" element={<Course />} />
              </Routes>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider >
  );
};
export default App;