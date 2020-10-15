import * as React from 'react'
import './App.style.css'
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons'

export interface AppProps {
  name: string
}

export const App: React.FC<AppProps> = (props: AppProps) => (
  <h1>
    Hi! Welcome to {props.name}!
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </h1>
)
