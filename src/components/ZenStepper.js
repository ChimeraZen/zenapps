// Config
import React from 'react'

// NPM
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'

// Components


// Styles
import {  Button,
          Divider,
          MobileStepper,
          Paper,
          Typography,
          withStyles } from '@material-ui/core'

import {  KeyboardArrowLeft,
          KeyboardArrowRight } from '@material-ui/icons'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    height: '100%',
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

    const components = this.props.children
    const maxSteps = components.length
    
    /*
    const activeContent = items.map((item, index) => (
      <Paper key={'item' + index} className={classes.content} square elevation={0}>
        {item.content.map((content, index) => (
          <Typography key={content + index} className={classes.paragraph} component="p" paragraph>
            {content}
          </Typography>
        ))}
      </Paper>
    ))
    */
    
    return (
      <div className={classes.root}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          className={classes.swipe}
          enableMouseEvents
        >
          {components}
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