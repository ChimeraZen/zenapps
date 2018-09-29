import React from 'react'
import './styles.css'

// The component will default to On & Off if a true or false prop has not been supplied as a string
class ToggleSlider extends React.Component {
  componentDidMount() {
    const left = this.props.left ? this.props.left : "On",
          right = this.props.right ? this.props.right : "Off",
          isOn = true
    
    this.setState({
      left,
      right,
      isOn,
    })
  }
  
  handleToggle = () => {
    const isOn = this.state.isOn ? false : true
    this.setState({ isOn })
    
    // If the current state is necessary, return the current toggle state
    this.props.returnToggleState && this.props.returnToggleState(isOn)
  }
  
  render() {
    return this.state !== null && 
      <div className="toggle-slider" onClick={this.handleToggle}>
        <span className="toggle-slider-on">{this.state.left}</span>
        <span className="toggle-slider-off">{this.state.right}</span>
        <div className={this.state.isOn ? "toggle-slider-bar on" : "toggle-slider-bar"}>{this.props.children}</div>
      </div>
  }
}

export default ToggleSlider
