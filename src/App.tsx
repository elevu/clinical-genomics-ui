import * as React from 'react'
import './App.style.css'
import { Layout, Menu } from 'antd'
import { Routes } from './components/Routes'
import { Link, useLocation } from 'react-router-dom'

export interface AppProps {
  name: string
}

const { Header, Content, Footer } = Layout

export const App: React.FC<AppProps> = (props: AppProps) => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
          <Link to="/">
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/trailblazer">
            <span>Trailblazer</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/genotype">
            <span>Genotype</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/vogue">
            <span>Vogue</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content>
      <Routes />
    </Content>
    <Footer style={{ textAlign: 'center' }}>Clinical Genomics ©2020</Footer>
  </Layout>
)
