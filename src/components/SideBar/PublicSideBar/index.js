import React from 'react'
import { storage } from '../../../config/firebase/firebase'
import { NavLink } from 'react-router-dom'

import {  Avatar,
          Collapse,
          Divider,
          IconButton,
          List,
          ListItem,
          ListItemIcon,
          ListItemText } from '@material-ui/core'

import BuildIcon from '@material-ui/icons/Build'
//import GestureIcon from '@material-ui/icons/Gesture'
import SchoolIcon from '@material-ui/icons/School'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { ExpandLess, ExpandMore } from '@material-ui/icons'


// Styles
import './styles.css'

class PublicSideBar extends React.Component {
  state = {
    avatar: "",
    open: false,
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
    const styles = this.props.isOpen ? {marginLeft: "-241px"} : {marginLeft: "0"}
    return (
      <div className="public-sidebar" style={styles}>
        <NavLink to='/'>
          <Avatar 
            alt={this.props.params.name} 
            src={this.state.avatar}
            className="public-sidebar-avatar" />
        </NavLink>
          
        <List className="public-sidebar-quickLinks">
          {
            this.props.params.quicklinks.map((quickLink, index) => {
              return (
                <ListItem 
                  key={quickLink.title + index}
                  disableGutters 
                  component="a" 
                  href={quickLink.link}
                  title={quickLink.title}
                  className="public-sidebar-listItem">
                  <IconButton color="secondary" aria-label={quickLink.title}>
                    <i className={quickLink.icon}></i>
                  </IconButton>
                </ListItem>
              )
            })
          }
        </List>

        <Divider />

        <List
          className=""
          component="nav"
        >

          <NavLink to='/credentials'>
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
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink to='/programs'>
                <ListItem button className="public-sidebar-nested">
                  <ListItemText>
                    Show All
                  </ListItemText>
                </ListItem>
              </NavLink>

              <NavLink to='/programs/vigenere-cipher'>
                <ListItem button className="public-sidebar-nested">
                  <ListItemText>
                    Vigenere Cipher
                  </ListItemText>
                </ListItem>
              </NavLink>

              <NavLink to='/programs/grid-list-view'>
                <ListItem button className="public-sidebar-nested">
                  <ListItemText>
                    Grid-List View
                  </ListItemText>
                </ListItem>
              </NavLink>

              <NavLink to='/programs/data-tree'>
                <ListItem button className="public-sidebar-nested">
                  <ListItemText>
                    Data Tree
                  </ListItemText>
                </ListItem>
              </NavLink>
            </List>
          </Collapse>

          <NavLink to='/about'>
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
      </div>
    )
  }
}

export default PublicSideBar
