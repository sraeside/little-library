import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5s5KXQoRYCfJb_ILcLEIvD54sinddMFQ",
  authDomain: "react-crud-inventory-mgnt.firebaseapp.com",
  projectId: "react-crud-inventory-mgnt",
  storageBucket: "react-crud-inventory-mgnt.firebasestorage.app",
  messagingSenderId: "1036601624160",
  appId: "1:1036601624160:web:f53818200db4d397212505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

//User Login Authorization
export const auth = getAuth(app);