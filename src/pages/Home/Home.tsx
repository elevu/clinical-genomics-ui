import * as React from 'react'
import './Home.style.css'
import { assetsDir } from '../../helpers/constants'

export const Home = () => (
  <div>
    <img className="main-logo" src={`${assetsDir}cg-big-logo.png`}></img>
  </div>
)
