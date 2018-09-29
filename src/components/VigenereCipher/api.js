export const getFormLabels = () => {
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
            ? /* Decryption */ keyedAlphabets[currentKeyCharIndex].toString().indexOf(currentStringChar) 
            : /* Encryption */ alphabet.indexOf(currentStringChar),
          
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
   return str.replace(/([^A-Za-z])|(?:\r\n|\r|\n)/gi, "");
}