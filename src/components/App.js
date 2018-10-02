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
import { 
  MuiThemeProvider, 
  createMuiTheme, 
} from '@material-ui/core/styles'

import { 
  green, 
  blue 
} from '@material-ui/core/colors'



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
          Credentials,
          FrontPage,
          VigenereCipherPage } from '../pages/'

const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560,
}

const palette = {
  divider: 'rgba(27,94,32, 0.12)',
  primary: {
    light: green[300],
    main: green[500],
    dark: '#003300',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff7961',
    main: blue[500],
    dark: '#ba000d',
    contrastText: '#000',
  },
}

const theme = createMuiTheme({ 
  breakpoints: { 
    values: breakpointValues 
  },
  palette: palette,
})

const App = () =>
  <Router>
    <MuiThemeProvider theme={theme}>
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
            <Route path="/about" component={About} />
          </PublicInterface>
          } />
        </Switch>
      </React.Fragment>
    </MuiThemeProvider>
  </Router>

export default withAuthentication(App)
