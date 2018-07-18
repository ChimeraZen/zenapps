import React from 'react'
import PropTypes from 'prop-types'

import { storage } from '../config/firebase/firebase'

import { NavLink } from 'react-router-dom'

import {  Avatar,
          Collapse,
          Divider,
          IconButton,
          List,
          ListItem,
          ListItemIcon,
          ListItemText,
          Typography,
          withStyles } from '@material-ui/core'

import BuildIcon from '@material-ui/icons/Build'
import GestureIcon from '@material-ui/icons/Gesture'
import SchoolIcon from '@material-ui/icons/School'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

const styles = theme => ({
  avatar: {
    width: 150,
    height: 150,
    margin: '10px auto'
  },
  
  button: {
    padding: '10px'
  },
  
  quickLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '32px',
    width: '100%',
  },
  
  listItem: {
    justifyContent: 'center',
    padding: 0,
  },
  menu: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  
  anchor: {
    textAlign: 'center',
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
    paddingLeft: '35px'
  },
  
  progress: {
    display: 'block',
    margin: 'auto'
  },
  
  subMenu: {
    background: theme.palette.divider
  }
})

class SideBar extends React.Component {
  state = {
    open: false,
    avatar: ""
  }
  
  handleClick = () => {
    this.setState({ open: !this.state.open })
  }
  
  componentDidMount() {
    storage.ref(this.props.params.image)
      .getDownloadURL()
      .then(src => {
        this.setState({
          avatar: src
        })
      })
  }
  
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <div>
          <NavLink to='/' className={classes.anchor}>
            {
              this.state.avatar !== ""
              ? <Avatar 
                  alt={this.props.params.name} 
                  src={this.state.avatar}
                  className={classes.avatar} />
              : null
            }

            <Typography variant="display1">
              {this.props.params.name}
            </Typography>
          </NavLink>
          
          <List className={classes.quickLinks}>
            {
              this.props.params.quicklinks.map((quickLink, index) => {
                return (
                  <ListItem 
                    key={quickLink.title + index}
                    disableGutters 
                    component="a" 
                    href={quickLink.link}
                    title={quickLink.title}
                    className={classes.listItem}>
                    <IconButton color="secondary" className={classes.button} aria-label={quickLink.title}>
                      <i className={quickLink.icon}></i>
                    </IconButton>
                  </ListItem>
                )
              })
            }
          </List>
        </div>

        <Divider />
        
        <List
          className={classes.root}
          component="nav"
        >
          {/*
          <NavLink to='/guides' className={classes.anchor}>
            <ListItem button>
              <ListItemIcon>
                <GestureIcon />
              </ListItemIcon>
              <ListItemText inset>
                Guides
              </ListItemText>
            </ListItem>
          </NavLink>
          */}
          
          <NavLink to='/credentials' className={classes.anchor}>
            <ListItem button>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText inset>
                  Credentials
              </ListItemText>
            </ListItem>
          </NavLink>

          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText inset primary="Programs" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse className={classes.subMenu} in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink to='/programs' className={classes.anchor}>
                <ListItem button className={classes.nested}>
                  <ListItemText>
                    Show All
                  </ListItemText>
                </ListItem>
              </NavLink>
              
              <NavLink to='/programs/vigenere-cipher' className={classes.anchor}>
                <ListItem button className={classes.nested}>
                  <ListItemText>
                    Vigenere Cipher
                  </ListItemText>
                </ListItem>
              </NavLink>
              
              <NavLink to='/programs/grid-list-view' className={classes.anchor}>
                <ListItem button className={classes.nested}>
                  <ListItemText>
                    Grid-List View
                  </ListItemText>
                </ListItem>
              </NavLink>
              
              <NavLink to='/programs/data-tree' className={classes.anchor}>
                <ListItem button className={classes.nested}>
                  <ListItemText>
                    Data Tree
                  </ListItemText>
                </ListItem>
              </NavLink>
            </List>
          </Collapse>

          <NavLink to='/about' className={classes.anchor}>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText inset>
                About
              </ListItemText>
            </ListItem>
          </NavLink>
        </List>
      </React.Fragment>
    )
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SideBar)
