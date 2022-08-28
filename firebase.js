// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
// Y90 our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ_gA0tLs8uAZmPiAZAoMdn7uyHlgsOVc",
  authDomain: "uber-next-clone-live-63d7c.firebaseapp.com",
  projectId: "uber-next-clone-live-63d7c",
  storageBucket: "uber-next-clone-live-63d7c.appspot.com",
  messagingSenderId: "620541763857",
  appId: "1:620541763857:web:5acb8f8d22a41f78322cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider= new GoogleAuthProvider()
const auth=getAuth()

export {app,provider,auth}