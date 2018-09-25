// Config
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, 
        Switch, 
        Route 
} from 'react-router-dom'
import { withRouter } from 'react-router'
import { privateAPI } from '../../../api'

// Components
import AllMenus from '../Menus/AllMenus'
import { Pages } from '../Pages/'
import SignOutButton from '../SignOut/'
import { AdminSideBar } from '../../SideBar/'

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
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import FullscreenIcon from '@material-ui/icons/Fullscreen'

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
  
  fullscreen: {
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
  },
  
  interface: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    background: 'white'
  },
  
  progress: {
    width: '100%',
    margin: '0 auto'
  },
  
  progressRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  
  titleRow: {
    display: 'flex',
    width: '250px',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    textDecoration: 'none',
    color: '#FFF'
  },
  
  toolbarTheme: theme.mixins.toolbar,
})

class AdminDashboard extends React.Component {

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }
  
  handleFullscreen = () => {
    const fullscreen = !this.state.fullscreen
    const doc = document.body
    
    if (fullscreen) {
      doc.requestFullscreen && doc.requestFullscreen()
      doc.mozRequestFullScreen && doc.mozRequestFullScreen()
      doc.webkitRequestFullScreen && doc.webkitRequestFullScreen()
      doc.msRequestFullscreen && doc.msRequestFullscreen()
    } else {
      document.exitFullscreen && document.exitFullscreen()
      document.mozExitFullScreen && document.mozExitFullScreen()
      document.webkitExitFullscreen && document.webkitExitFullscreen()
      document.msExitFullscreen && document.msExitFullscreen()
    }
    
    this.setState({ fullscreen: fullscreen })
  }
  
  componentDidMount() {
    privateAPI.getAdminMenu().then(menus => {
      this.setState({
        mobileOpen: false,
        menus
      })
    })
  }

  componentDidUpdate(prevProps) {
    // Closes menu on mobile when a link is clicked and/or URL changes
    this.props.location !== prevProps.location &&
      this.setState({ mobileOpen: false })
  }
  
  render() {
    const { classes, theme } = this.props
    if (this.state !== null) {
      const drawer = <AdminSideBar menu={this.state.menus.root} />
    
      return (
        <div className={classes.root}>
          <AppBar className={classes.appBar}>
            <Toolbar disableGutters>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>

              <NavLink to='/admin' className={classes.titleRow}>
                <Typography variant="title" color="inherit" noWrap>
                  Dashboard
                </Typography>
              </NavLink>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleFullscreen}
                className={classes.fullscreen}
              >
                {
                  this.state.fullscreen
                    ? <FullscreenExitIcon />
                    : <FullscreenIcon />
                }
              </IconButton>
              <SignOutButton />
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
              <Route path="/admin/menus" component={AllMenus} />
              <Route path="/admin/pages" component={Pages} />
              {/* 
              <Route exact path="/guides" component={Guides} />
              <Route path="/credentials" component={Credentials} />
              <Route exact path="/programs" component={AllPrograms} />
              <Route path="/programs/vigenere-cipher" component={VigenereCipher} />
              <Route path="/programs/grid-list-view" component={GridListView} />
              <Route path="/programs/data-tree" component={DataTree} />
              <Route path="/about" component={About} />
              */}
            </Switch>
          </div>
        </div>
      )
    } else {
      return (
        <div className={classes.progressRoot}>
          <CircularProgress className={classes.progress} size={50} />
        </div>
      )
    }
  }
}

AdminDashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles, { withTheme: true })(AdminDashboard))
