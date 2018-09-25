// Config
import React from 'react'

// Pages
import {  About,
          Credentials,
          AllPrograms } from '../'

// Styles
import './styles.css'
import { Paper } from '@material-ui/core'

const FrontPage = () =>
  <Paper className="front-page" elevation={0} square={true}>
    <Credentials />
    <AllPrograms />
    <About />
  </Paper>

export default FrontPage
