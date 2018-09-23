// Config
import React from 'react'
import PropTypes from 'prop-types'
import { db, storage } from '../../config/firebase/firebase'

// Components
import Credentials from '../Credentials'
import DetailsCard from '../DetailsCard/'
import { LinearMeter } from '../Meters/'

// Styles
import './styles.css'
import { Paper } from '@material-ui/core'

export default class FrontPage extends React.Component {
  render() {
    return (
      <Paper className="front-page" elevation={0} square={true}>
        <div className="column">
          <DetailsCard title="Skills">
            <LinearMeter title="Scripting/Web Design" percent="95" />
            <LinearMeter title="Object-Oriented Programming" percent="90" />
            <LinearMeter title="React Component Development" percent="70" />
          </DetailsCard>
          <DetailsCard title="Languages">
            <LinearMeter title="HTML5" percent="100" />
            <LinearMeter title="CSS3" percent="98" />
            <LinearMeter title="JavaScript" percent="98" />
            <LinearMeter title="PHP" percent="95" />
            <LinearMeter title="MySQL" percent="90" />
            <LinearMeter title="ReactJS" percent="75" />
          </DetailsCard>
        </div>
        <div className="column-3">
          <Credentials />
        </div>
      </Paper>
    )
  }
}
