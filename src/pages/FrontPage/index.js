// Config
import React from 'react'
import PropTypes from 'prop-types'
import { db, storage } from '../../config/firebase/firebase'

// Components
import Card from '../../components/Card/'
import { LinearMeter } from '../../components/Meters/'

// Pages
import About from '../About'
import Credentials from '../Credentials'
import AllPrograms from '../Programs/'

// Styles
import './styles.css'
import { Paper } from '@material-ui/core'

export default class FrontPage extends React.Component {
  render() {
    return (
      <Paper className="front-page" elevation={0} square={true}>
        <Credentials />
        <AllPrograms />
      </Paper>
    )
  }
}
