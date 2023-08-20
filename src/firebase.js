import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBzfHRPjCR2QXjWUDtxf32kG4nY9MXjIMs",
  authDomain: "taskforce-7f5e1.firebaseapp.com",
  projectId: "taskforce-7f5e1",
  storageBucket: "taskforce-7f5e1.appspot.com",
  messagingSenderId: "166698756601",
  appId: "1:166698756601:web:7b5cafc83be25a7e0c3528",
  measurementId: "G-D3R2ZET0G0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
