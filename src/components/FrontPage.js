// Config
import React from 'react'
import PropTypes from 'prop-types'
import { db, storage } from '../config/firebase/firebase'


// Components
import About from '../components/About'
import AllPrograms from '../components/AllPrograms'
import Credentials from '../components/Credentials'
import FeaturedQuote from '../components/FeaturedQuote'
import ZenStepper from '../components/ZenStepper'


// Styles
import {  Paper,
          withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    fontFamily: "'Encode Sans Condensed', sans-serif",
    zIndex: 1,
    overflow: 'hidden',
  },
  
  subroot: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  },
  
  featuredImageContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxHeight: '200px',
    padding: '28px 0',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  
  headline: {
    margin: 'auto',
    borderBottom: '1px solid #000',
    marginBottom: '10px'
  },
  
  progress: {
    width: '100%',
    margin: '0 auto'
  },
  
  section: {
    width: '25%',
    padding: '10px'
  },
  
  toolbarTheme: theme.mixins.toolbar,
})


export class FrontPage extends React.Component {
  
  componentDidMount() {
    db.collection("pages").doc("frontpage")
    .get()
    .then(doc => {
      const page = doc.data()
      
      storage.ref(page.featuredImage)
        .getDownloadURL()
        .then(src => {
          page.featuredImage = src
          this.setState({
            page
          })
        })
    })
  }
  
  render() {
    const { classes } = this.props
    
    return (
      <React.Fragment>
        {this.state !== null &&
          <Paper className={classes.content} elevation={0}>
            <div className={classes.featuredImageContainer} style={{backgroundImage: 'url(' + this.state.page.featuredImage + ')'}}>
              <FeaturedQuote author="Yamamoto Tsunetomo">
                When one is writing a letter, he should think that the recipient will make it into a hanging scroll.
              </FeaturedQuote>
            </div>
          </Paper>
        }
        <ZenStepper>
          <Credentials />
          <About />
          <AllPrograms />
        </ZenStepper>
      </React.Fragment>
    )
  }
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FrontPage)
