// Config
import React from 'react'
import { db, storage } from '../../config/firebase/firebase'
import { NavLink } from 'react-router-dom'

// Styles
import './styles.css'
import {  Paper,
          List,
          ListItem,
          ListItemIcon,
          ListItemText,
          Typography } from '@material-ui/core'

import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

class Contact extends React.Component {
  state = {
    image: null
  }

  componentDidMount() {
    const image = "assets/images/GitKrakenSample.png"
    storage.ref(image)
      .getDownloadURL()
      .then(src => {
        this.setState({
          image: src
        })
      })
  }
  
  render() {
    return (
      <Paper className="contact-page" elevation={0} square={true}>
        <div className="small-column">
          <Typography className="light-text" variant="Display1" component="h2">
            <a href="https://www.gitkraken.com" target="_blank">GitKraken Version Control</a>
          </Typography>
          {
            this.state.image !== null && 
              <img src={this.state.image} className="image"/>
          }
        </div>
        <div className="small-column">
          <Typography className="title light-text" variant="title" component="h2">
            Like what you see?
          </Typography>
          <Typography paragraph component="p" className="light-text">
            This entire site has been built using <a href="https://www.reactjs.org/" target="_blank">React</a> and <a href="https://www.netlify.com/" target="_blank">Netlify.com</a>
          </Typography>
          <Typography paragraph component="p" className="light-text">
            Since starting to learn React, I have developed my skills to the point where I've built a user-authorized administrative dashboard, and front-end website.
          </Typography>
          <Typography paragraph component="p" className="light-text">
            Through a secure connection to Google Firebase, I have been able to build an object-based database and, with a custom API, organize and return the database information in a usable format.
          </Typography>
          
          <div className="light-divider"></div>
          
          <List component="nav" className="light-text" disablePadding={true}>
            <ListItem button component="a" href="mailto:eli_lied@hotmail.com">
              <EmailIcon />
              <ListItemText primary="eli_lied@hotmail.com" className="light-text" />
            </ListItem>
            <ListItem button component="a" href="tel:+16135852433">
              <PhoneIcon />
              <ListItemText primary="+1 (613) 585-2433" />
            </ListItem>
          </List>
        </div>
      </Paper>
    )
  }
}

export default Contact
