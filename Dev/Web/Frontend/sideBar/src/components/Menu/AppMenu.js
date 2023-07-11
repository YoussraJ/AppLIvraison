import React from 'react'
import { Layout, Menu, Button, theme } from 'antd';
import {
  HomeOutlined ,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
export default function AppMenu() {
  return (
      <div  className='sdemo-logo-vertical' >
          
        <Menu
          
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        /> 
    </div>
  )
}
