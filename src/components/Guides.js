import React from 'react'
import PropTypes from 'prop-types'

import {  withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    width: '100%',
  },
})
                         
class Guides extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div></div>
    )
  }
}

Guides.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Guides)
