
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "clone-3c0dd.firebaseapp.com",
  projectId: "clone-3c0dd",
  storageBucket: "clone-3c0dd.appspot.com",
  messagingSenderId: "832059815877",
  appId: "1:832059815877:web:c1c3473f8c20dc8951bdac",
  measurementId: "G-ZBVZ576GE6"
};

const app = initializeApp(firebaseConfig); //will be used when we upload anything
export const auth=getAuth();
export const provider=new GoogleAuthProvider();

export default app;