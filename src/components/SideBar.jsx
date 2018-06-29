import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { db, storage } from '../config/firebase/firebase'

import { NavLink } from 'react-router-dom'

import {  Avatar,
          CircularProgress,
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
import SchoolIcon from '@material-ui/icons/School'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

const styles = theme => ({
  toolbarTheme: theme.mixins.toolbar,
  
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
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
    margin: 'auto'
  }
})

class SideBar extends React.Component {
  handleClick = () => {
    this.setState({ open: !this.state.open })
  }
  
  getQuerySnap = (querySnap) => {
    const promises = []
    querySnap.forEach(snap => {
      promises.push(snap.data())
    })
    return Promise.all(promises)
  }
  
  componentDidMount() {
    
    db.collection("components").doc("SideBar")
    .get()
    .then((doc) => {
      const promises = []
      
      promises.push(
        db.collection("menus").where("id", "==", doc.data().menu_id)
          .get()
          .then(this.getQuerySnap),
        db.collection("users").where("id", "==", doc.data().user_id)
          .get()
          .then(this.getQuerySnap),
      )

      return Promise.all(promises)
    }).then(results => {
      const user = results[1][0]
      storage.ref(user.avatar)
        .getDownloadURL()
        .then(src => {
          user.avatarSrc = src
          this.setState({
            open: false,
            menu: results[0][0].items,
            user: user,
          })
        })
    })
  }
  
  render() {
    const { classes } = this.props
    
    if (this.state !== null) {
      const user = this.state.user
      const name = user.firstname + " " + user.lastname
      
      return (
        <React.Fragment>
          <div className={classNames(classes.toolbarTheme, classes.toolbar)}>
            <NavLink to='/' className={classes.anchor}>
              <Avatar 
                alt={name} 
                src={user.avatarSrc}
                className={classes.avatar} />

              <Typography variant="display1">
                {name}
              </Typography>
            </NavLink>
            <List className={classes.quickLinks}>
              {
                user.quicklinks.map((quickLink, index) => {
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
                  <ListItemText>
                    <NavLink to='/programs' className={classes.anchor}>
                      Show All
                    </NavLink>
                  </ListItemText>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText>
                    <NavLink to='/programs/vigenere-cipher' className={classes.anchor}>
                      Vigenere Cipher
                    </NavLink>
                  </ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText inset>
                <NavLink to='/about' className={classes.anchor}>
                  About
                </NavLink>
              </ListItemText>
            </ListItem>
          </List>
        </React.Fragment>
      )
    } else {
      return (
        <CircularProgress className={classes.progress} size={50} />
      )
    }
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SideBar)

