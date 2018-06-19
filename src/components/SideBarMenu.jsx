// Config
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import {  Collapse,
          List,
          ListItem,
          ListItemIcon,
          ListItemText,
          withStyles } from '@material-ui/core'

import BuildIcon from '@material-ui/icons/Build'
import SchoolIcon from '@material-ui/icons/School'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import { ExpandLess, ExpandMore } from '@material-ui/icons'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  
  anchor: {
    textDecoration: 'none',
    color: 'inherit'
  },
  
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '32px'
  },
  
  nested: {
    paddingLeft: theme.spacing.unit
  }
})

class SideBarMenu extends React.Component {
  state = { open: false }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }
  
  render() {
    const { classes } = this.props
    return (
      <List
        className={classes.root}
        component="nav"
      >
        <ListItem button>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText inset>
            <NavLink to='/credentials' className={classes.anchor}>
              Credentials
            </NavLink>
          </ListItemText>
        </ListItem>

        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText inset primary="Programs" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Vigenere Cipher" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText inset>
            <NavLink to='/contact' className={classes.anchor}>
              Contact
            </NavLink>
          </ListItemText>
        </ListItem>
      </List>
    )
  }
}

SideBarMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(SideBarMenu)
