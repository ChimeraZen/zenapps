/* Private API */
import { db } from '../config/firebase/firebase'

export const saveAdminMenu = (menus) => {
  db.collection("menus")
    .doc("admin")
    .set(menus)
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch(error => {
        console.error("Error writing document: ", error);
    })
}

export const getRoutes = () => {
  return db.collection("routes")
    .get()
    .then(snapshot => {
      const array = []
      snapshot.forEach(snap => {
        const data = snap.data()
        array.push(data)
      })
      return array
    })
    .then(results => results)
    .catch(error =>
      console.log("Error getting routes:", error)
    )
}

export const getAdminMenu = () => {
  return db.collection("menus")
    .doc("admin")
    .get()
    .then(snapshot => snapshot.data())
    .catch(error =>
      console.log("Error getting Admin menu:", error)
    )
}

export const getAllMenus = () => {
  return db.collection("menus")
    .get()
    .then(snapshot => {
      const array = []
      snapshot.forEach(snap => {
        array.push(snap.data())
      })
      return array
    })
    .then(results => results)
    .catch(error =>
      console.log("Error getting all menus:", error)
    )
}