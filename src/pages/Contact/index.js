// Config
import React from 'react'
import { storage } from '../../config/firebase/firebase'

// Styles
import './styles.css'
import {  Paper,
          Icon,
          List,
          ListItem,
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
          <Typography className="title light-text" variant="title" component="h2">
            Like what you see?
          </Typography>
          <Typography paragraph component="p" className="light-text">
            This entire site has been built using <a href="https://www.reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> and <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify.com</a>
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
            <ListItem button component="a" href="https://www.linkedin.com/in/elijah-liedtke/">
              <Icon className="flex">
                <i className="fab fa-linkedin"></i>
              </Icon>
              <ListItemText primary="Elijah Liedtke" />
            </ListItem>
          </List>
        </div>
        <div className="medium-column">
          <Typography className="light-text" variant="display1" component="h2">
            <a href="https://www.gitkraken.com" target="_blank" rel="noopener noreferrer">GitKraken Version Control</a>
          </Typography>
          {
            this.state.image !== null && 
              <img src={this.state.image} className="image" alt="GitKraken Sample" />
          }
        </div>
      </Paper>
    )
  }
}

export default Contact
