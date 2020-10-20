import * as React from 'react'
import './Home.style.css'
import MainLogo from 'assets/cg-big-logo.svg'

export const Home = () => (
  <div className="home-container">
    <h1>Welcome to the Clinical Genomics Internal Portal!</h1>
    <p>Login with your SciLifeLab Google account to access the portal.</p>
    <br />
    <img className="main-logo" src={MainLogo}></img>
  </div>
)
