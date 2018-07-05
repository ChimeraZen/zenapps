// Config
import React from 'react'

// NPM
import { db, storage } from '../config/firebase/firebase'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'

// Components
import ZenAppBar from '../components/ZenAppBar'
import Content from '../components/Content'
import FeaturedQuote from '../components/FeaturedQuote'


// Styles
import {  Button,
          CircularProgress,
          Divider,
          MobileStepper,
          Paper,
          Typography,
          withStyles } from '@material-ui/core'

import {  KeyboardArrowLeft,
          KeyboardArrowRight } from '@material-ui/icons'

const items = [
  {
    header: 'Why are we here?',
    content: [
      `This isn't a philosophical question. I mean, why are we here on this page? Well, I assume it's to get to know more about me, and what it is that I do, of course!`,
      `First off, let me say that if technology was built right the first time, I'd be out of a job! Everything being a constant work-in-progress is part of what I love about programming. I also find that every day brings a new challenge and a new opportunity to learn and apply everything I've acquired in my search for more knowledge. That everything can be applied to another in some fashion has been the driving force behind this quest and many others, but that's a story for another time.`
    ]
  },
  {
    header: 'Once upon another time',
    content: [
      `Born and raised in Ontario, Canada, I've spent the last 20+ years watching the progression of the internet age.`,
      `While cooking some pizza pockets in-between watching episodes of "The Fresh Prince of Bel-air" and "Saved by the Bell", I was introduced to the internet. Once the squealing squelches of the dial-up modem subsided and the panicked perils of a picked-up telephone became common, I promptly dove into the sea of information before me.`,
      `Landing in the city of Geo (Geocities), I was exposed to the incredible possibilities that exist within the interconnected framework of the internet. I realized that anything I wanted to know or show the world was just a mouse-click away.`,
      `It didn't take long to realize that blinking text and midi-heavy pages might seem "cool", but from a User Experience stand-point, it's a terribly awful experience!! That had nothing on the brain-busting UH-OH!'s of ICQ however. Figuring out how to modify a program's visual and functional aspects using programs downloaded from the internet unleashed a thirst for knowledge that would never be quenched.`,
      `Since then, I've expanded my skillset to include, among other things, HTML5, CSS3 & preprocessors, PHP & MySQL, and Joomla/WordPress and, most recently, ReactJS.`
    ]
  }
]

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(66vh - 58px)',
    backgroundColor: '#FFFFFF',
  },
  
  content: {
    height: 'auto',
    flex: 1,
    padding: '10px',
  },
  
  divider: {
    color: '#FFFFFF',
    opacity: 0.12
  },
  
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'inherit',
  },
  
  headline: {
    margin: '0 auto',
    padding: '5px',
    textTransform: 'uppercase',
    backgroundColor: 'inherit',
    [theme.breakpoints.up('md')]: {
      fontSize: '25px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: '40px',
    },
  },
  
  mobileStepper: {
    marginTop: 'auto',
  },
  
  swipe: {
    height: '100%',
  }
})

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }))
  }

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }))
  }

  handleStepChange = activeStep => {
    this.setState({ activeStep })
  }

  render() {
    const { classes, theme } = this.props
    const { activeStep } = this.state

    const maxSteps = items.length
    const activeContent = items.map(item => (
      <Paper className={classes.content} square elevation={0}>
        {item.content.map((content, index) => (
          <Typography key={content + index} className={classes.paragraph} component="p" paragraph>
            {content}
          </Typography>
        ))}
      </Paper>
    ))
    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography className={classes.headline} variant="headline" component="h2">
            {items[activeStep].header}
          </Typography>
        </Paper>
        <Divider classname={classes.divider} />
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          className={classes.swipe}
          enableMouseEvents
        >
          {activeContent}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    )
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper)