// Config
import React from 'react'

// Pages
import {  About,
          Contact,
          Credentials,
          AllPrograms } from '../'

// Styles
import './styles.css'
import { Paper } from '@material-ui/core'

const FrontPage = () =>
  <Paper className="front-page" elevation={0} square={true}>
    <Contact />
    <Credentials />
    <AllPrograms />
    <About />
  </Paper>

export default FrontPage
