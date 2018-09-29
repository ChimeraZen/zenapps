// Congig 
import React from 'react'
import * as api from './api'

class CipherForm extends React.Component {
  componentDidMount() {
    const labels = api.getFormLabels(),
          demoVals = api.getDemoValues(),
          alphabet = this.props.isDemo ? demoVals.alphabet : "",
          cipherKey = this.props.isDemo ? demoVals.cipherKey : "",
          cipherText = this.props.isDemo 
            ? this.props.isDecrypt 
              ? demoVals.decryptVal 
              : demoVals.encryptVal 
            : "",
          results = ""
  
    this.setState({
      labels,
      demoVals,
      alphabet,
      cipherKey,
      cipherText,
      results,
    })
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(this.props.isDecrypt !== prevProps.isDecrypt || this.props.isDemo !== prevProps.isDemo) {
      const alphabet = this.props.isDemo ? prevState.demoVals.alphabet : "",
            cipherKey = this.props.isDemo ? prevState.demoVals.cipherKey : "",
            cipherText = this.props.isDemo 
              ? this.props.isDecrypt 
                ? prevState.demoVals.decryptVal 
                : prevState.demoVals.encryptVal 
              : "",
            results = ""
      
      this.setState({
        alphabet,
        cipherKey,
        cipherText,
        results
      })
    }
  }
  
  handleInputChange = (e) => {
    const name = e.target.name,
          value = api.sanitizeString(e.target.value) // Allow only alphanumerics
    
    this.setState({
      [name]: value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const results = api.getResults(this.state.alphabet, this.state.cipherKey, this.state.cipherText, this.props.isDecrypt)
    
    this.setState({
      results
    })
  }
  
  handleReset = (e) => {
    const demoVals = this.state.demoVals ? this.state.demoVals : false,
          alphabet = demoVals ? demoVals.alphabet : "",
          cipherKey = demoVals ? demoVals.cipherKey : "",
          cipherText = demoVals 
            ? this.props.isDecrypt 
              ? demoVals.decryptVal 
              : demoVals.encryptVal 
            : "",
          results = ""
  
    this.setState({
      alphabet,
      cipherKey,
      cipherText,
      results,
    })
  }
  
  render() {
    return this.state !== null &&
      <form onSubmit={this.handleSubmit} className="vigenere-cipher-form">
        <label data-type='text'>
          <p>{this.state.labels.cipherKey}</p>
          <input 
            type='text' 
            name='cipherKey' 
            value={this.state.cipherKey} 
            onChange={this.handleInputChange} 
            placeholder=" "
            required 
          />
        </label>
        <label data-type='text'>
          <p>{this.state.labels.alphabet}</p>
          <input 
            type='text' 
            name='alphabet' 
            value={this.state.alphabet} 
            onChange={this.handleInputChange} 
            placeholder=" "
            required 
          />
        </label>
        <label data-type='textarea'>
          <p>{this.props.isDecrypt ? this.state.labels.decryptText : this.state.labels.encryptText}</p>
          <textarea 
            name='cipherText' 
            value={this.state.cipherText} 
            onChange={this.handleInputChange} 
            required 
          />
        </label>
        <label data-type='textarea'>
          <p>{this.state.labels.results}</p>
          <textarea 
            name='results' 
            value={this.state.results} 
          />
        </label>
        <div className="submit">
          <button type="reset" onClick={this.handleReset}>Reset</button>
          <button type="submit">{this.props.isDecrypt ? "Decrypt" : "Encrypt"}</button>
        </div>
      </form>
  }
}

export default CipherForm
