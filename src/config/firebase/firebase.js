import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = { 
  // Initialize Firebase
    apiKey: "AIzaSyBxpEaiDrE_H65cdNSEN-oLcSwMlhG2tPs",
    authDomain: "zenapps-org.firebaseapp.com",
    databaseURL: "https://zenapps-org.firebaseio.com",
    projectId: "zenapps-org",
    storageBucket: "zenapps-org.appspot.com",
    messagingSenderId: "364199768759",
}


firebase.initializeApp(config)

const auth = firebase.auth()

const db = firebase.firestore()
const settings = {timestampsInSnapshots: true}
db.settings(settings)

const storage = firebase.storage()

export {
  auth,
  db,
  storage,
}
