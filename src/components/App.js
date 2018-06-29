// Config
import React from 'react'
import WithAuthentication from '../config/WithAuthentication'
import * as routes from '../constants/routes'
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom'


// Styles
import CssBaseline from '@material-ui/core/CssBaseline'
import '../assets/css/styles.css'
import { 
  MuiThemeProvider, 
  createMuiTheme, 
  createBreakpoints 
} from '@material-ui/core/styles'

import { 
  green, 
  blue 
} from '@material-ui/core/colors'


// Pages
import FrontPage from '../pages/FrontPage'
import Credentials from '../pages/Credentials'
import About from '../pages/About'

const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560,
}

const palette = {
  primary: {
    light: green[300],
    main: green[500],
    dark: '#002884',
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
  palette: palette
})

const App = () =>
  <WithAuthentication>
    <Router>
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Route exact path={routes.PUBLIC_LANDING} component={() => <FrontPage />} />
          <Route exact path={routes.CREDENTIALS} component={() => <Credentials />} />
          <Route exact path={routes.ABOUT_PAGE} component={() => <About />} />
        </React.Fragment>
      </MuiThemeProvider>
  </Router>
</WithAuthentication>

export default App
