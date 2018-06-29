//Config
import React from 'react'
import AuthUserContext from '../components/contexts/AuthUserContext'
import { firebase } from './firebase'


export default class WithAuthentication extends React.Component {
    state = {
      authUser: null,
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }))
      });
    }

    render() {
      const { authUser } = this.state

      return (
        <AuthUserContext.Provider value={authUser}>
          {this.props.children}
        </AuthUserContext.Provider>
      )
    }
  }
