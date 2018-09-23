// Config
import React from 'react'
import * as routes from '../constants/routes'
import withAuthentication from '../config/withAuthentication'
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom'

// Styles
import CssBaseline from '@material-ui/core/CssBaseline'
import './assets/css/styles.css'
import { 
  MuiThemeProvider, 
  createMuiTheme, 
} from '@material-ui/core/styles'

import { 
  green, 
  blue 
} from '@material-ui/core/colors'


// Components


// Pages
import FrontPages from '../pages/FrontPages'
import Admin from './Admin'

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
  typography: {
    "fontFamily": "'Encode Sans Condensed', sans-serif",
    subheading: {
      "fontFamily": "'Roboto', sans-serif",
    }
  }
})

const App = () =>
  <Router>
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Switch>
          <Route path={routes.admin_landing} component={Admin} />
          <Route path={routes.public_landing} component={FrontPages} />
        </Switch>
      </React.Fragment>
    </MuiThemeProvider>
  </Router>

export default withAuthentication(App)
