// Config
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {  Avatar,
          IconButton,
          List,
          ListItem,
          Typography,
          withStyles } from '@material-ui/core'

import avatar from '../assets/eliedtke.jpeg'

const styles = theme => ({
  toolbarTheme: theme.mixins.toolbar,
  
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 10px'
  },
  
  avatar: {
    width: 150,
    height: 150,
    margin: '10px auto',
  },
  
  button: {
    padding: '10px'
  },
  
  list: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '32px'
  },
  
  listItem: {
    padding: 0
  }
})

class SideBarContact extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classNames(classes.toolbarTheme, classes.toolbar)}>
        <Avatar 
          alt="Elijah Liedtke" 
          src={avatar} 
          className={classes.avatar} />

        <Typography variant="display1" noWrap>
          Elijah Liedtke
        </Typography>

        <List className={classes.list} disablePadding>
          <ListItem 
            disableGutters 
            component="a" 
            href="mailto:chimera.zen@gmail.com"
            title="E-Mail: chimera.zen@gmail.com"
            className={classes.listItem}>
            <IconButton color="primary" className={classes.button} aria-label="LinkedIn">
              <i className="fas fa-envelope"></i>
            </IconButton>
          </ListItem>

          <ListItem 
            disableGutters 
            component="a" 
            href="https://www.linkedin.com/in/elijah-liedtke/"
            title="LinkedIn"
            target="_blank"
            className={classes.listItem}>
            <IconButton color="primary" className={classes.button} aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </IconButton>
          </ListItem>

          <ListItem 
            disableGutters 
            component="a" 
            href="https://github.com/ChimeraZen"
            title="GitHub"
            target="_blank"
            className={classes.listItem}>
            <IconButton color="primary" className={classes.button} aria-label="LinkedIn">
              <i className="fab fa-github-square"></i>
            </IconButton>
          </ListItem>

          <ListItem 
            disableGutters 
            component="a" 
            href="https://jsfiddle.net/user/ChimeraZen/fiddles/"
            title="JSFiddle"
            target="_blank"
            className={classes.listItem}>
            <IconButton color="primary" className={classes.button} aria-label="LinkedIn">
              <i className="fab fa-jsfiddle"></i>
            </IconButton>
          </ListItem>
        </List>
      </div>
    )
  }
}

SideBarContact.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SideBarContact)
