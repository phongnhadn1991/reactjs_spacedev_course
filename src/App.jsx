// import "./assets/css/tailwind.css"
import "antd/dist/reset.css"
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import styled from "styled-components";
const { Header, Content, Footer, Sider } = Layout;

import { Link, Route, Routes, useLocation } from "react-router-dom"
import Todo from "./pages/todo"
import Course from "./pages/course"
import Home from "./pages"

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
  {
    key: 'sub2',
    title: 'Team',
    icon: <TeamOutlined />,
    submenu: [
      { key: '6', title: 'Team 1', link: '/team/6' },
      { key: '7', title: 'Team 2', link: '/team/7' },
    ],
  },
  { key: '9', title: 'Files', link: '/files', icon: <FileOutlined /> },
];

const LogoStyle = styled.div`
  height: 32px;
    margin: 16px;
    background: rgba(255,255,255,.2);
    border-radius: 6px;
`
import { ConfigProvider } from 'antd';

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
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
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
    </ConfigProvider>
  );
};
export default App;