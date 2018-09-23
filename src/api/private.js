/*  Private API 
*   v1.0.0
*/
import { db } from '../config/firebase/firebase'

// Components
export const getComponent = (component) => {
  return db.collection("components")
    .doc(component)
    .get()
    .then(snapshot => snapshot.data())
    .catch(error =>
      console.log("Error getting component:", error)
    )
}

export const getComponentSettings = (component) => {
  return db.collection("components")
    .doc(component)
    .get()
    .then(snapshot => snapshot.data().settings)
    .catch(error =>
      console.log("Error getting component settings:", error)
    )
}

export const getCollection = (id) => {
  return db.collection(id)
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
      console.log("Error getting collection:", error)
    )
}

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