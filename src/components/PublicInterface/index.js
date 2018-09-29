// Config
import React from 'react'
import { db } from '../../config/firebase/firebase'
import { NavLink } from 'react-router-dom'

// Components
import { PublicSideBar } from '../SideBar/'

// Styles
import './styles.css'
import {  AppBar,
          CircularProgress,
          IconButton,
          Toolbar,
          Typography } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

class PublicInterface extends React.Component {

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }
  
  componentDidMount() {
    db.collection("components")
      .doc("SideBar")
      .get()
      .then(snap => {
        const sidebar = snap.data()
        this.setState({
          drawerOpen: true,
          sidebar: sidebar
        })
      })
  }

  componentDidUpdate(prevProps) {
    // Closes menu on mobile when a link is clicked and/or URL changes
    this.props.location !== prevProps.location &&
      this.setState({ drawerOpen: false })
  }

  render() {
    return this.state !== null
      ? <React.Fragment>
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

                <Typography className="titleCaption light-text" variant="caption" noWrap>
                  Digital Consultant & Web Developer
                </Typography>
              </NavLink>
            </Toolbar>
          </AppBar>
          <div className="public-interface">
            <PublicSideBar params={this.state.sidebar} isOpen={this.state.drawerOpen} />
            <div className="interface">
              {this.props.children}
            </div>
          </div>
        </React.Fragment>
      : <div className="circular-progress">
          <CircularProgress className="circular-progress" size={50} />
        </div>
  }
}

export default PublicInterface
