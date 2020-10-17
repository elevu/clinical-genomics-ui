import React, { useEffect, useState } from 'react'
import './App.style.css'
import { Button, Layout, Menu } from 'antd'
import { Routes } from './components/Routes'
import { Link, useLocation } from 'react-router-dom'
import { initGoogleClient, signOutGoogleClient } from './api/GoogleClient'
import {
  setSettings as setSettingsAction,
  resetSettings as resetSettingsAction,
} from './domain/settings/slice'
import { RootState } from './domain/rootReducer'
import { connect } from 'react-redux'
import { compose } from '@reduxjs/toolkit'
import { imageUrl } from './constants'

export interface AppProps {
  name: string
}

const { Header, Content, Footer } = Layout

const mapDispatch = {
  setSettings: setSettingsAction,
  resetSettings: resetSettingsAction,
} as const
const mapState = ({ settings }: RootState) => ({ settings } as const)

type Props = ReturnType<typeof mapState> & typeof mapDispatch

const AppComponent = ({ settings, setSettings, resetSettings }: Props) => {
  const setStore = () => {
    initGoogleClient(setSettings)
  }
  const handleSignOut = () => {
    signOutGoogleClient(resetSettings)
  }
  return (
    <Layout>
      <Header className="header">
        <img className="logo" src={`${imageUrl}logo.png?alt=media`}></img>
        <Menu theme="dark" mode="horizontal" selectedKeys={[useLocation().pathname]}>
          <Menu.Item key="/">
            <Link to="/">
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/trailblazer">
            <Link to="/trailblazer">
              <span>Trailblazer</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/genotype">
            <Link to="/genotype">
              <span>Genotype</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/vogue">
            <Link to="/vogue">
              <span>Vogue</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Routes />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Clinical Genomics ©2020
        <Button onClick={() => setStore()}>Login</Button>
        <Button onClick={() => handleSignOut()}>Sign Out</Button>
      </Footer>
    </Layout>
  )
}

export const App = compose(connect(mapState, mapDispatch))(AppComponent)
