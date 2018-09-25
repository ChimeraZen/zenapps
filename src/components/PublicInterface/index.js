// Config
import React from 'react'
import PropTypes from 'prop-types'
import { db } from '../../config/firebase/firebase'
import { NavLink, Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import classnames from 'classnames'

// Components
import { PublicSideBar } from '../SideBar/'

// Styles
import './styles.css'
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

class PublicInterface extends React.Component {

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

  componentDidUpdate(prevProps) {
    // Closes menu on mobile when a link is clicked and/or URL changes
    this.props.location !== prevProps.location &&
      this.setState({ mobileOpen: false })
  }

  render() {
    return this.state === null
      ? <div className="circular-progress">
          <CircularProgress className="circular-progress" size={50} />
        </div>
      
      : <React.Fragment>
          <AppBar className="public-interface-appBar" position="static">
            <Toolbar disableGutters>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className="navIconHide"
              >
                <MenuIcon />
              </IconButton>
              
              <NavLink to='/' className="titleRow light-text">
                <Typography variant="title" className="light-text" noWrap>
                  Elijah Liedtke
                </Typography>

                <Typography className="titleCaption" className="light-text" variant="caption" noWrap>
                  Digital Consultant & Web Developer
                </Typography>
              </NavLink>
            </Toolbar>
          </AppBar>
          <div className="public-interface">
            <PublicSideBar params={this.state.sidebar} />
            <div className="interface">
              {this.props.children}
            </div>
          </div>
        </React.Fragment>
  }
}

export default withRouter(PublicInterface)
