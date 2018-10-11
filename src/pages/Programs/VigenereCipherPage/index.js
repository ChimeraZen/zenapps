// Config
import React from 'react'
import * as Scripts from './scripts'

// Components
import CodeLine from '../../../components/CodeLine'
import {  Anchor,
          CodeBlock,
          Column,
          Paragraph,
          Row,
          TextBlock,
          Title } from '../../../components/Bootstrap'

import {  SimpleList, 
          SimpleListItem, 
          SimpleListTitle } from '../../../components/Lists/SimpleList'
import VigenereCipher from '../../../components/VigenereCipher'

// Styles
import './styles.css'

export const VigenereCipherDetails = () => 
  <Row className="vigenere-cipher-page" withWrap>
    <Row withPadding withWrap>
      <Row withWrap>
        <Column type="large" withPadding>
          <TextBlock>
            <Title type="simple">Vigenère cipher</Title>
            <Anchor href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher">- Wikipedia</Anchor>
            <Paragraph>
              The Vigenère cipher is named for Blaise de Vigenère. Although Giovan Battista Bellaso had invented the cipher earlier, Vigenère developed a stronger autokey cipher.
            </Paragraph>
            <Paragraph>
              The cipher is easy to understand and implement, but it resisted all attempts to break it for three centuries, which earned it the description le chiffre indéchiffrable (French for 'the indecipherable cipher'). Many people have tried to implement encryption schemes that are essentially Vigenère ciphers. In 1863, Friedrich Kasiski was the first to publish a general method of deciphering Vigenère ciphers.
            </Paragraph>
            <Paragraph>
              The Vigenère cipher was originally described by Giovan Battista Bellaso in his 1553 book La cifra del. Sig. Giovan Battista Bellaso, but the scheme was later misattributed to Blaise de Vigenère (1523–1596) in the 19th century and so acquired its present name.
            </Paragraph>
          </TextBlock>
        </Column>

        <Column type="small">
          <Row withPadding>
            <TextBlock>
              <Title type="simple">How to use the component</Title>
              <Paragraph>
                A simple stand-alone component, the Vigenère Cipher can be called with <CodeLine>{"<"}VigenereCipher /{">"}</CodeLine>
              </Paragraph>
            </TextBlock>
          </Row>

          <Row withPadding>
            <SimpleList>
              <SimpleListTitle>Components</SimpleListTitle>
              <SimpleListItem>VigenereCipher - index.js</SimpleListItem>
              <SimpleListItem>Header</SimpleListItem>
              <SimpleListItem>CipherForm</SimpleListItem>
              <SimpleListItem>API</SimpleListItem>
              <SimpleListItem>Styles - CSS</SimpleListItem>
            </SimpleList>
          </Row>
        </Column>
      </Row>
      
      <Row withPadding>
        <VigenereCipher demo />
      </Row>
    </Row>
  
    <Row withPadding>
      <Column type="full" withPadding>
        <TextBlock>
          <Row>
            <Title type="simple">VigenèreCipher</Title>
            <span> - index.js</span>
          </Row>
          <Paragraph>
            This component stores the state of isDemo and isDecrypt, as well as the state modification functions. The functions are passed to the <CodeLine>{"<"}Header /{">"}</CodeLine> component, and the values of isDemo and isDecrypt are passed to the <CodeLine>{"<"}CipherForm /{">"}</CodeLine> component.
          </Paragraph>
        </TextBlock>
        <CodeBlock>{Scripts.indexJS}</CodeBlock>
      </Column>
    </Row>
  
    <Row withPadding>
      <Column type="full" withPadding>
        <TextBlock>
          <Title type="simple">Header</Title>
          <Paragraph>
            This component creates the title from the children prop and uses the functions passed from the <CodeLine>{"<"}VigenereCipher /{">"}</CodeLine> component to handle the options available in the options menu.
          </Paragraph>
        </TextBlock>
        <CodeBlock>{Scripts.headerJS}</CodeBlock>
      </Column>
    </Row>
  
    <Row withPadding>
      <Column type="full" withPadding>
        <TextBlock>
          <Title type="simple">CipherForm</Title>
          <Paragraph>
            This component connects to the API to retrieve the form labels and demo values and handle the decryption/encryption on submition. It also handles the states of the cipher form inputs.
          </Paragraph>
        </TextBlock>
        <CodeBlock>{Scripts.cipherFormJS}</CodeBlock>
      </Column>
    </Row>
  
    <Row withPadding>
      <Column type="full" withPadding>
        <TextBlock>
          <Title type="simple">API</Title>
          <Paragraph>
            This API can be used to retrieve the form labels, as well as the demo values. It also handles the logic of decrypting and encrypting a Vigenère cipher with a supplied cipher key, alphabet and text to be encrypted or decrypted.
          </Paragraph>
        </TextBlock>
        <CodeBlock>{Scripts.apiJS}</CodeBlock>
      </Column>
    </Row>
  
    <Row withPadding>
      <Column type="full" withPadding>
        <TextBlock>
          <Title type="simple">Styles - CSS</Title>
          <Paragraph>
            The stylesheet for the Vigenère Cipher.
          </Paragraph>
        </TextBlock>
        <CodeBlock>{Scripts.stylesCSS}</CodeBlock>
      </Column>
    </Row>
  </Row>

export default VigenereCipherDetails
