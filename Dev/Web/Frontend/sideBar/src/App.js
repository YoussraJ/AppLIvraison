
import './App.css';
import { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import {
  HomeOutlined ,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import AppMenu from './components/AppMenu.js';
const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="App" style={{height:'100vh',backgroundColor:'red',display:'flex',position:'relative'}}>
      <Layout >
        <Layout className='side'>
        <Sider   className='side' trigger={null} collapsible collapsed={collapsed}>
       <AppMenu/>
      </Sider>
      
        </Layout>
        <Header style={{ padding: 0, background: colorBgContainer ,position:'absolute',left:'200px'}}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
           
        </Content>
      
    </Layout>
    </div>
  );
}

export default App;
