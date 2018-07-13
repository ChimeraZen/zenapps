// Config
import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { db } from '../config/firebase/firebase'

// Components
import About from '../components/About'
import Credentials from '../components/Credentials'
import SideBar from '../components/SideBar'

// Programs
import AllPrograms from '../components/AllPrograms'
import FrontPage from '../components/FrontPage'
import VigenereCipher from '../programs/VigenereCipher'
import GridListView from '../programs/GridListView'
import DataTree from '../programs/DataTree'

// Styles
import {  AppBar,
          CircularProgress,
          Drawer,
          Hidden,
          IconButton,
          Toolbar,
          Typography,
          withStyles } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    fontFamily: "'Encode Sans Condensed', sans-serif",
    zIndex: 1,
    overflow: 'hidden',
  },
  
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  
  interface: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  
  progress: {
    width: '100%',
    margin: '0 auto'
  },
  
  toolbarTheme: theme.mixins.toolbar,
})

class FrontPages extends React.Component {

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }
  
  componentDidMount() {
    db.collection("components")
      .doc("SideBar")
      .get()
      .then(snap => {
        const sidebar = snap.data()

        this.setState({
          mobileOpen: false,
          sidebar
        })
      })
  }

  render() {
    const { classes, theme } = this.props
    if (this.state !== null) {
      const drawer = <SideBar params={this.state.sidebar} />
            
      return (   
        <div className={classes.root}>
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

          <div className={classes.interface}>
            <div className={classes.toolbarTheme} />
            <Switch>
              <Route exact path="/" component={FrontPage} />
              <Route path="/credentials" component={Credentials} />
              <Route exact path="/programs" component={AllPrograms} />
              <Route path="/programs/vigenere-cipher" component={VigenereCipher} />
              <Route path="/programs/grid-list-view" component={GridListView} />
              <Route path="/programs/data-tree" component={DataTree} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      )
    } else {
      return (
        <div className={classes.root}>
          <CircularProgress className={classes.progress} size={50} />
        </div>
      )
    }
  }
}

FrontPages.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(FrontPages)
