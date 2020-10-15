import * as React from 'react'
import { Layout, Menu } from 'antd'

const { Content, Sider } = Layout

export const Trailblazer = () => (
  <div>
    <Layout className="site-layout-background">
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 1</Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
    </Layout>
    !
  </div>
)
