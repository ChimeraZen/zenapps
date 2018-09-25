// Config
import React from 'react'

// NPM
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'

// Components


// Styles
import './styles.css'
import {  Button,
          MobileStepper } from '@material-ui/core'

import {  KeyboardArrowLeft,
          KeyboardArrowRight } from '@material-ui/icons'

class ZenStepper extends React.Component {
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
    const { activeStep } = this.state

    const components = this.props.children
    const maxSteps = components.length
    
    return (
      <div className="zenstepper">
        <SwipeableViews
          axis={'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          className="swipeable-views"
          enableMouseEvents
        >
          {components}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className="zenstepper-nav"
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    )
  }
}

export default ZenStepper