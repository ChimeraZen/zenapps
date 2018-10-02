// Config
import React from 'react'

// Components
import ToggleSlider from '../Toggles/ToggleSlider'

export default class Header extends React.Component {
  state = {
    isOpen: false
  }

  handleOptionsDisplay = () => {
    const isOpen = this.state.isOpen ? false : true
    
    this.setState({
      isOpen
    })
  }
  
  render() {
    const isOpen = this.state.isOpen ? "open" : "closed",
          classNames = this.props.className ? [isOpen, this.props.className].join(" ") : isOpen
    
    return (
      <div className="vigenere-cipher-header">
        <h3>{this.props.children}</h3>
        <div className="vigenere-cipher-options">
          <i className="fa fa-ellipsis-v" aria-hidden="true" onClick={this.handleOptionsDisplay}></i>
          <ul className={classNames}>
            <li>
              <ToggleSlider left="Decrypt" right="Encrypt" returnToggleState={this.props.handleMode}>
                Mode
              </ToggleSlider>
            </li>
            <li>
              <ToggleSlider returnToggleState={this.props.handleDemo}>
                Demo
              </ToggleSlider>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
