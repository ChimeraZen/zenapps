// Config
import React from 'react'
import PropTypes from 'prop-types'

// Styles
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  toolbarTheme: theme.mixins.toolbar,
  
  content: {
    height: 'calc(100% - 64px)',
    flexGrow: 1,
    overflow: 'auto',
    backgroundColor: theme.palette.background.default
  },
})

const Content = (props) => {
  const { classes } = props
  return (
    <div>
      <div className={classes.toolbarTheme} />
      <section className={classes.content}>
        {props.children}
      </section>
    </div>
  )
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Content)
