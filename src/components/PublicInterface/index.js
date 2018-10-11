// Config
import React from 'react'
import { db } from '../../config/firebase/firebase'
import { NavLink } from 'react-router-dom'

// Components
import { PublicSideBar } from '../SideBar/'

// Styles
import './styles.css'
import {  CircularProgress,
          IconButton,
          Typography } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

class PublicInterface extends React.Component {

  handleDrawerToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  
  componentDidMount() {
    db.collection("components")
      .doc("SideBar")
      .get()
      .then(snap => {
        const sidebar = snap.data()
        this.setState({
          isOpen: true,
          sidebar: sidebar
        })
      })
  }

  componentDidUpdate(prevProps) {
    // Closes menu on mobile when a link is clicked and/or URL changes
    //this.props.location !== prevProps.location &&
      //this.setState({ isOpen: false })
  }

  render() {
    return this.state !== null
      ? <div className="public-interface">
          <div className="public-interface-app-bar">
            <IconButton
              onClick={this.handleDrawerToggle}
              className="navIconHide"
            >
              <MenuIcon />
            </IconButton>

            <NavLink to='/' className="titleRow light-text">
              <Typography variant="title" className="light-text">
                Elijah Liedtke
              </Typography>

              <Typography className="titleCaption light-text" variant="caption">
                Digital Consultant & Web Developer
              </Typography>
            </NavLink>
          </div>
          
          <PublicSideBar params={this.state.sidebar} isOpen={this.state.isOpen} />
        
          <div className="interface">
            {this.props.children}
          </div>
        </div>
      : <div className="circular-progress">
          <CircularProgress className="circular-progress" size={50} />
        </div>
  }
}

export default PublicInterface
