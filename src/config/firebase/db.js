import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
// this needs to be adjusted to firestore settings
  db.collection('users').add({
    username,
    email,
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

export const onceGetUsers = () => (
  db.collection('users').get()
    .then(snapshot => {
      const users = {}
      snapshot.forEach(user => 
        users[user.id] = user.data()
      )
      return users
    })
    .catch(error => {
        console.error("Error adding document: ", error);
    })
)