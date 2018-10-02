// Config
import React from 'react'

// Components
import CodeLine from '../../../components/CodeLine'
import {  Anchor,
          CodeBlock,
          Column,
          Paragraph,
          Row,
          Title } from '../../../components/Bootstrap'
import {  SimpleList, 
          SimpleListItem, 
          SimpleListTitle } from '../../../components/Lists/SimpleList'
import VigenereCipher from '../../../components/VigenereCipher'

// Styles
import './styles.css'

const indexJS = `// Config
import React from 'react'

// Components
import Header from './Header'
import CipherForm from './CipherForm'

// Styles
import './styles.css'

export default class VigenereCipher extends React.Component {
  state = {
    isDemo: this.props.demo ? true : false,
    isDecrypt: true
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
`

const headerJS = `// Config
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
`

const cipherFormJS = `// Config 
import React from 'react'
import * as api from './api'

export default class CipherForm extends React.Component {
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
          value = api.sanitizeString(e.target.value) // Allow only alphabet characters
    
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
`

const apiJS = `export const getFormLabels = () => {
  const alphabet = "Alphabet",
        cipherKey = "Key",
        decryptText = "Encrypted Text",
        encryptText = "Plain Text",
        results = "Results"
  
  return {
    alphabet,
    cipherKey,
    decryptText,
    encryptText,
    results,
  }
}

export const getDemoValues = () => {
  const alphabet = "KRYPTOSABCDEFGHIJLMNQUVWXZ",
        cipherKey = "PALIMPSEST",
        decryptVal = "EMUFPHZLRFAXYUSDJKZLDKRNSHGNFIVJYQTQUXQBQVYUVLLTREVJYQTMKYRDMFD",
        encryptVal = "BETWEENSUBTLESHADINGANDTHEABSENCEOFLIGHTLIESTHENUANCEOFIQLUSION"
  
  return {
    alphabet,
    cipherKey,
    decryptVal,
    encryptVal
  }
}

export const getResults = (alphabet, cipherKey, cipherText, isDecrypt=true) => {
  // Create and return an array of keyed alphabets
  const keyedAlphabets = []
  
  for(let i = 0; i < cipherKey.length; i++) {
    const cipherKeyChar = cipherKey.substr(i, 1)
    
    for(let ii = 0; ii < 26; ii++) {
      const cipherAlphabet = alphabet,
            cipherAlphabetChar = cipherAlphabet.substr(ii, 1)
      
      if (cipherKeyChar === cipherAlphabetChar) {
        keyedAlphabets.push(cipherAlphabet.substring(cipherAlphabet.indexOf(cipherKeyChar)) + cipherAlphabet.substring(parseInt('-' + cipherAlphabet.indexOf(cipherKeyChar), 10), ii))
      }
    }
  }

  // Begin decrypting using encrypted alphabet keys
  let currentKeyCharIndex = 0
  let decryptedString = ''

  // For the length of the encrypted text
  for (let i = 0; i < cipherText.length; i++) {

    // If the current character index is greater than the length of the key; return to 0
    currentKeyCharIndex = currentKeyCharIndex >= cipherKey.length ? 0 : currentKeyCharIndex

    // Current character in the plaintext
    const currentStringChar = cipherText.substring(i + 1, i),

          // The index of currentStringChar in the current keyed alphabet
          encryptedCharIndex = isDecrypt 
            ? keyedAlphabets[currentKeyCharIndex].toString().indexOf(currentStringChar) /* Decryption */ 
            : alphabet.indexOf(currentStringChar),                                      /* Encryption */ 
          
          // Add the new character to the final results and increase currentKeyCharIndex
          stringToUse = isDecrypt 
            ? alphabet 
            : keyedAlphabets[currentKeyCharIndex].toString()

    decryptedString += stringToUse.substring(encryptedCharIndex + 1, encryptedCharIndex)
    currentKeyCharIndex++
  }

  return decryptedString
}

export const sanitizeString = (str) => {
   return str.replace(/([^A-Za-z])|(?:\\r\\n|\\r|\\n)/gi, "");
}
`

const stylesCSS = `.vigenere-cipher {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  color: #000;
  background: #FFF;
  border: 1px solid rgba(0, 0, 0, 0.5);
}


/* Header */
.vigenere-cipher-header {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.vigenere-cipher-options {
  position: relative;
  margin-left: auto;
  background: rgba(0, 0, 0, 0);
  transition: all .25s ease-out;
}

.vigenere-cipher-options i {
  padding: 4px 9px;
  border-radius: 10px;
  cursor: pointer;
}

.vigenere-cipher-options:hover {
  transition: all .3s ease-in;
}

.vigenere-cipher-options i:hover {
  color: #FFF;
  background: rgba(0, 0, 0, 0.125);
  transition: all .3s ease-in;
}

/* Header Menu */
.vigenere-cipher-options ul {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  border: 1px solid lightgrey;
  background: #FFF;
  transition: all 1s cubic-bezier(0, 1, 0, 1);
}

.vigenere-cipher-options ul.closed {
  max-height: 0;
  border: none;
  overflow: hidden;
  transition: all 1s cubic-bezier(0, 1, 0, 1);
}

.vigenere-cipher-options ul.open {
  z-index: 1;
  max-height: stretch;
  transition: all 1s cubic-bezier(0, 1, 0, 1);
}

.vigenere-cipher-options ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}


/* Form */
.vigenere-cipher-form {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

.vigenere-cipher-form label {
  text-transform: uppercase;
  font-size: 0.8em;
}

.vigenere-cipher-form label[data-type='text'] {
  padding: 10px;
  width: 100%;
}

.vigenere-cipher-form label[data-type='text'] p {
  display: inline-block;
  padding: 0 5px 0 3px;
  margin-bottom: 3px;
  border-right: 1px solid rgba(0, 0, 0, 0.5);
}

.vigenere-cipher-form label[data-type="textarea"] {
  padding: 10px;
  flex: 1;
  flex-basis: 239px;
}

.vigenere-cipher-form input {
  width: stretch;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.vigenere-cipher-form textarea {
  width: 100%;
  height: 125px;
}

.vigenere-cipher-form input,
.vigenere-cipher-form textarea {
  padding: 5px 7px;
}

.vigenere-cipher-form .submit {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: stretch;
  padding: 10px;
}

.vigenere-cipher-form .submit button {
  background: #FFF;
  padding: 7px 10px;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 5px;
  transition: all .2s ease-in-out;
}

.vigenere-cipher-form .submit button:focus {
  outline: none;
}

.vigenere-cipher-form .submit button[type="reset"] {
  color: #FFF;
  color: #f44336;
  background: #FFF;
  border: 2px solid #f44336;
}

.vigenere-cipher-form .submit button[type="reset"]:hover {
  color: #FFF;
  background: #f44336;
  transition: all .3s ease-in-out;
}

.vigenere-cipher-form .submit button[type="submit"] {
  color: #000;
  background: #FFF;
  border: 2px solid #2a5475;
}

.vigenere-cipher-form .submit button[type="submit"]:hover {
  color: #FFF;
  background: #2a5475;
  transition: all .3s ease-in-out;
}
`

export const VigenereCipherDetails = () => 
  <Row className="vigenere-cipher-page">
    <Row withPadding>
      <Column type="medium">
        <Row withWrap>
          <Column type="small" withPadding>
            <Title type="simple">Vigenère cipher</Title>
            <Anchor href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher"> - Wikipedia</Anchor>
            <Paragraph>
              The Vigenère cipher is named for Blaise de Vigenère. Although Giovan Battista Bellaso had invented the cipher earlier, Vigenère developed a stronger autokey cipher.
            </Paragraph>
            <Paragraph>
              The cipher is easy to understand and implement, but it resisted all attempts to break it for three centuries, which earned it the description le chiffre indéchiffrable (French for 'the indecipherable cipher'). Many people have tried to implement encryption schemes that are essentially Vigenère ciphers. In 1863, Friedrich Kasiski was the first to publish a general method of deciphering Vigenère ciphers.
            </Paragraph>
            <Paragraph>
              The Vigenère cipher was originally described by Giovan Battista Bellaso in his 1553 book La cifra del. Sig. Giovan Battista Bellaso, but the scheme was later misattributed to Blaise de Vigenère (1523–1596) in the 19th century and so acquired its present name.
            </Paragraph>
          </Column>
          <Column type="small">
            <Row>
              <Column type="small" withPadding>
                <Title type="simple">How to use the component</Title>
                <Paragraph>
                  A simple stand-alone component, the Vigenère Cipher can be called with <CodeLine>{"<"}VigenereCipher /{">"}</CodeLine>
                </Paragraph>
              </Column>
            </Row>
            <Row>
              <Column type="small" withPadding>
                <SimpleList>
                  <SimpleListTitle>Components</SimpleListTitle>
                  <SimpleListItem>VigenereCipher - index.js</SimpleListItem>
                  <SimpleListItem>Header</SimpleListItem>
                  <SimpleListItem>CipherForm</SimpleListItem>
                  <SimpleListItem>API</SimpleListItem>
                  <SimpleListItem>Styles - CSS</SimpleListItem>
                </SimpleList>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
      
      <Column type="medium" withPadding>
        <VigenereCipher demo />
      </Column>
    </Row>
  
    <Row id="vigenere-cipher" withPadding>
      <Column type="small" withPadding>
        <Title type="simple">VigenèreCipher</Title>
        <span> - index.js</span>
        <Paragraph>
          This component stores the state of isDemo and isDecrypt, as well as the state modification functions. The functions are passed to the <CodeLine>{"<"}Header /{">"}</CodeLine> component, and the values of isDemo and isDecrypt are passed to the <CodeLine>{"<"}CipherForm /{">"}</CodeLine> component.
        </Paragraph>
        <CodeBlock>{indexJS}</CodeBlock>
      </Column>
    </Row>
  
    <Row id="header" withPadding>
      <Column type="small" withPadding>
        <Title type="simple">Header</Title>
        <Paragraph>
          This component creates the title from the children prop and uses the functions passed from the <CodeLine>{"<"}VigenereCipher /{">"}</CodeLine> component to handle the options available in the options menu.
        </Paragraph>
        <CodeBlock>{headerJS}</CodeBlock>
      </Column>
    </Row>
  
    <Row id="cipher-form" withPadding>
      <Column type="small" withPadding>
        <Title type="simple">CipherForm</Title>
        <Paragraph>
          This component connects to the API to retrieve the form labels and demo values and handle the decryption/encryption on submition. It also handles the states of the cipher form inputs.
        </Paragraph>
        <CodeBlock>{cipherFormJS}</CodeBlock>
      </Column>
    </Row>
  
    <Row id="cipher-form" withPadding>
      <Column type="small" withPadding>
        <Title type="simple">API</Title>
        <Paragraph>
          This API can be used to retrieve the form labels, as well as the demo values. It also handles the logic of decrypting and encrypting a Vigenère cipher with a supplied cipher key, alphabet and text to be encrypted or decrypted.
        </Paragraph>
        <CodeBlock>{apiJS}</CodeBlock>
      </Column>
    </Row>
  
    <Row id="cipher-form" withPadding>
      <Column type="small" withPadding>
        <Title type="simple">Styles - CSS</Title>
        <Paragraph>
          The stylesheet for the Vigenère Cipher.
        </Paragraph>
        <CodeBlock>{stylesCSS}</CodeBlock>
      </Column>
    </Row>
  </Row>

export default VigenereCipherDetails
