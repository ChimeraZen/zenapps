// Config
import React from 'react'
import * as routes from '../constants/routes'
import AuthUserContext from '../config/AuthUserContext'
import withAuthentication from '../config/withAuthentication'
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom'


// Styles
import CssBaseline from '@material-ui/core/CssBaseline'
import './styles.css'


// Components
import AdminDashboard from '../components/admin/Dashboard/AdminDashboard'
import PublicInterface from './PublicInterface/'
import SignInForm from './admin/SignIn'


// Programs
import DataTree from './DataTree'
import { GridListView } from './GridListView'


// Pages
import {  About,
          AllPrograms,
          Contact,
          Credentials,
          FrontPage,
          VigenereCipherPage } from '../pages/'

const App = () =>
  <Router>
    <React.Fragment>
      <CssBaseline />
      <Switch>
        <Route path={routes.admin_landing} component={() => 
          <AuthUserContext.Consumer>
            {authUser => authUser && authUser !== null
              ? <AdminDashboard />
              : <SignInForm />
            }
          </AuthUserContext.Consumer>
        } />

        <PublicInterface>
          <Route exact path="/" component={FrontPage} />
          <Route path="/credentials" component={Credentials} />
          <Route exact path="/programs" component={AllPrograms} />
          <Route path="/programs/vigenere-cipher" component={VigenereCipherPage} />
          <Route path="/programs/grid-list-view" component={GridListView} />
          <Route path="/programs/data-tree" component={DataTree} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </PublicInterface>
        } />
      </Switch>
    </React.Fragment>
  </Router>

export default withAuthentication(App)
