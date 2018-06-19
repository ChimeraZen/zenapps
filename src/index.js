// Config
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'

// Components
import ZenApps from './ZenApps'
import CssBaseline from "@material-ui/core/CssBaseline"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6ec6ff',
      main: blue[500],
      dark: '#0069c0',
      contrastText: '#fafafa'
    },
    secondary: {
      light: '#80e27e',
      main: green[500],
      dark: '#087f23',
      contrastText: '#fafafa'
    }
  }
})

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <ZenApps />
      </MuiThemeProvider>
    </BrowserRouter>
  </React.Fragment>, 
  
  document.getElementById('root')
)
registerServiceWorker()
