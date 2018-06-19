// Config
import React, { Component } from 'react'
import { auth, provider } from '../config/firebase.js'

export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
    
    // User Access Control
    this.login  = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }
  
  // User Login/Logout
  logout() {
    auth.signOut()
        .then(() => {
          this.setState({
            user: null
          })
        })
  }
  
  login() {
    auth.signInWithPopup(provider) 
        .then((result) => {
          const user = result.user
          this.setState({
            user
          })
        })
  }
  
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } 
    })
  }
  
  render() {
    return (
      <div id='admin'>
        BackPage
      </div>
    )
  }
}
