// Config
import React from 'react'

// Components
import Header from './Header'
import CipherForm from './CipherForm'

// Styles
import './styles.css'

export default class VigenereCipher extends React.Component {
  state = {
    isDemo: this.props.demo ? true : false,
    isDecrypt: true,
  }

  handleDemo = (isDemo) => {
    this.setState({ isDemo })
  }
  
  handleMode = (isDecrypt) => {
    this.setState({ isDecrypt })
  }
  
  render() {
    return (
      <div className="vigenere-cipher">
        <Header handleMode={this.handleMode} handleDemo={this.handleDemo}>Vigenère Cipher</Header>
        <CipherForm isDecrypt={this.state.isDecrypt} isDemo={this.state.isDemo}/>
      </div>
    )
  }
}
