import React from 'react'
import AuthUserContext from './contexts/AuthUser'
import AdminDashboard from './AdminDashboard'

// Components
import SignInForm from './SignIn'

const Admin = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser && authUser !== null
      ? <AdminDashboard />
      : <SignInForm />
    }
  </AuthUserContext.Consumer>

export default Admin
