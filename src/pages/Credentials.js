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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
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
    paddingLeft: '10px',
    marginBottom: '10px',
    textTransform: 'uppercase',
    [theme.breakpoints.up('md')]: {
      fontSize: '25px',
      borderLeft: '3px solid',
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '30px',
      borderLeft: '5px solid',
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: '40px',
      borderLeft: '5px solid',
      borderColor: theme.palette.primary.main,
    },
  },
  
  paragraph: {
    [theme.breakpoints.up('md')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: '20px',
    },
  },
  
  progress: {
    width: '100%',
    margin: '0 auto'
  },
  
  section: {
    width: '80%',
    margin: '20px',
    padding: '20px',
  },
  
  toolbarTheme: theme.mixins.toolbar,
})


class About extends React.Component {
  
  componentDidMount() {
    db.collection("pages").doc("about")
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
        }).catch(error => console.log("Error getting featured image: ", error))
    }).catch(error => console.log("Error getting document: ", error))
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
                        <Paper className={classes.section} elevation={1}>
                          <Typography className={classes.headline} variant="headline" component="h2">
                            Why are we here?
                          </Typography>
                          <Typography className={classes.paragraph} component="p" paragraph>
                            This isn't a philosophical question. I mean, why are we here on this page? Well, I assume it's to get to know more about me, and what it is that I do, of course! 
                          </Typography>
                          <Typography className={classes.paragraph} component="p" paragraph>
                            First off, let me say that if technology was built right the first time, I'd be out of a job! Everything being a constant work-in-progress is part of what I love about programming. I also find that every day brings a new challenge and a new opportunity to learn and apply everything I've acquired in my search for more knowledge. That everything can be applied to another in some fashion has been the driving force behind this quest and many others, but that's a story for another time.
                          </Typography>
                        </Paper>
                        <Paper className={classes.section} elevation={1}>
                          <Typography className={classes.paragraph} className={classes.headline} variant="headline" component="h2">
                            Once upon another time
                          </Typography>
                          <Typography className={classes.paragraph} component="p" paragraph>
                            Born and raised in Ontario, Canada, I've spent the last 20+ years watching the progression of the internet age.
                          </Typography>
                          <Typography className={classes.paragraph} component="p" paragraph>
                            While cooking some pizza pockets in-between watching episodes of "The Fresh Prince of Bel-air" and "Saved by the Bell", I was introduced to the internet. Once the squealing squelches of the dial-up modem subsided and the panicked perils of a picked-up telephone became common, I promptly dove into the sea of information before me. 
                          </Typography>
                          <Typography className={classes.paragraph} component="p" paragraph>
                            Landing in the city of Geo (Geocities), I was exposed to the incredible possibilities that exist within the interconnected framework of the internet. I realized that anything I wanted to know or show the world was just a mouse-click away.
                          </Typography>
                          <Typography className={classes.paragraph} component="p" paragraph>
                            It didn't take long to realize that blinking text and midi-heavy pages might seem "cool", but from a User Experience stand-point, it's a terribly awful experience!! That had nothing on the brain-busting UH-OH!'s of ICQ however. Figuring out how to modify a program's visual and functional aspects using programs downloaded from the internet unleashed a thirst for knowledge that would never be quenched.
                          </Typography>
                          <Typography className={classes.paragraph} component="p">
                            Since then, I've expanded my skillset to include, among other things, HTML5, CSS3 & preprocessors, PHP & MySQL, and Joomla/WordPress and, most recently, ReactJS.
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

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(About)
