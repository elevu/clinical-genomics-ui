import * as React from 'react'
import { imageUrl } from '../../helpers/constants'
import './Home.style.css'

export const Home = () => (
  <div>
    <img className="main-logo" src={`${imageUrl}cg-big-logo.png?alt=media`}></img>
  </div>
)
