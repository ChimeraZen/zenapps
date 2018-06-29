// Config
import React from 'react'
import PropTypes from 'prop-types'
import { db, storage } from '../config/firebase/firebase'


// Components
import ZenAppBar from '../components/ZenAppBar'
import Content from '../components/Content'
import FeaturedQuote from '../components/FeaturedQuote'


// Styles
import {  CircularProgress,
          Paper,
          Typography,
          withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    fontFamily: "'Roboto', sans-serif",
    zIndex: 1,
    overflow: 'hidden',
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
    height: '500px',
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
      this.state !== null
        ? (
            <div className={classes.root}>
              <ZenAppBar title={this.state.page.title} />
              {
                this.state !== null
                  ? <Content>
                      <Paper className={classes.content} elevation={0}>
                        <div className={classes.featuredImageContainer} style={{backgroundImage: 'url(' + this.state.page.featuredImage + ')'}}>
                          <FeaturedQuote author="Yamamoto Tsunetomo">
                            When one is writing a letter, he should think that the recipient will make it into a hanging scroll.
                          </FeaturedQuote>
                        </div>
                        {/*
                        <Paper className={classes.section} elevation={0}>
                            <Typography className={classes.headline} variant="headline" component="h2">
                              Who Am I?
                            </Typography>
                            <Typography component="p" paragraph>
                              Born and raised in Ontario, Canada, I've spent the last 20 years watching the progression of the internet age.
                            </Typography>
                            <Typography component="p" paragraph>
                              In-between watching episodes of "The Fresh Prince of Bel-air" and "Saved by the Bell", and cooking some pizza pockets, I was introduced to the internet. Once the squealing squelches of the dial-up modem subsided and the perils of a picked-up telephone became common, I promptly dove into the sea of information before me.
                            </Typography>
                            <Typography component="p" paragraph>
                              Beginning in the city of Geo (Geocities), I was exposed to the incredible possibilities that exist within the interconnected framework of the internet. I realized that anything I wanted to know or show the world was just a mouse-click away.
                            </Typography>
                            <Typography component="p" paragraph>
                              It didn't take long to realize that blinking text and midi-heavy pages might seem "cool", but from a User Experience stand-point, it's a terribly awful experience!!
                            </Typography>
                            <Typography component="p">
                              Since then, I've expanded my skillset to include, among other things, HTML5, CSS3 & preprocessors, PHP & MySQL, and Joomla/WordPress.
                            </Typography>
                        </Paper>
                        */}
                        <Paper className={classes.section} elevation={0}>
                          <Typography className={classes.headline} variant="headline" component="h2">
                            Skillsets
                          </Typography>
                        </Paper>
                      </Paper>
                    </Content>

                  : <CircularProgress className={classes.progress} size={50} />
              }
            </div>
          )
        : <CircularProgress className={classes.progress} size={50} />
    )
  }
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FrontPage)

