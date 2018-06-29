import React from 'react'
import PropTypes from 'prop-types'

import {  AppBar,
          Drawer,
          Hidden,
          IconButton,
          Toolbar,
          Typography,
          withStyles } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

import SideBar from './SideBar'

const drawerWidth = 240

const styles = theme => ({
  
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbarTheme: theme.mixins.toolbar,
  
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 10px'
  },
  
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
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
    fontSize: '32px'
  },
  
  listItem: {
    padding: 0
  },
  menu: {
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
  },
  progress: {
    width: '100%',
    margin: '0 auto'
  }
})

class ZenAppBar extends React.Component {
  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  render() {
    const { classes, theme } = this.props
    const drawer = <SideBar />

    
    return (
      <React.Fragment>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography variant="title" color="inherit" noWrap>
              {this.props.title}
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </React.Fragment>
    )
  }
}

ZenAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(ZenAppBar)