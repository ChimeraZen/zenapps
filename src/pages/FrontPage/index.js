// Config
import React from 'react'

// Pages
import {  About,
          Contact,
          Credentials,
          ProgramDetails } from '../'

// Styles
import './styles.css'
import { Paper } from '@material-ui/core'

const FrontPage = () =>
  <Paper className="front-page" elevation={0} square={true}>
    <Contact />
    <Credentials />
    <ProgramDetails />
    <About />
  </Paper>

export default FrontPage
