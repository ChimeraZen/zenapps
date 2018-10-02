// Config
import React from 'react'

// Pages
import {  About,
          Contact,
          Credentials,
          ProgramPage } from '../'

// Styles
import './styles.css'

const FrontPage = () =>
  <div className="front-page">
    <Contact />
    <Credentials />
    <ProgramPage />
    <About />
  </div>

export default FrontPage
