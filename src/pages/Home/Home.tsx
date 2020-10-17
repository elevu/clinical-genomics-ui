import * as React from 'react'
import { Apps } from '../../components/Apps/Apps'
import { imageUrl } from '../../constants'
import './Home.style.css'

export const Home = () => (
  <div>
    <img className="main-logo" src={`${imageUrl}cg-big-logo.png?alt=media`}></img>
    <Apps />
  </div>
)
