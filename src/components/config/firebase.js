import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = { 
  // Initialize Firebase
    apiKey: "AIzaSyCyD9Y3IbFIEYkqNZuSxvkuRL19JmE4M48",
    authDomain: "cms-react-4351a.firebaseapp.com",
    databaseURL: "https://cms-react-4351a.firebaseio.com",
    projectId: "cms-react-4351a",
    storageBucket: "cms-react-4351a.firebaseapp.com",
    messagingSenderId: "485810680215"
}
firebase.initializeApp(config)
export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export default firebase
