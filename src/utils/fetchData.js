import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"

export const fetchData = (setData, collectionName) => {
    const dataColRef = collection(db, collectionName)
    onSnapshot(dataColRef, (snapshot) => {
      setData(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
}