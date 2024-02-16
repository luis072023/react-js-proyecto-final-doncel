// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTo0JWb094DmUKQscZqsBS1KJevjiXTHE",
  authDomain: "react-49905-f18e5.firebaseapp.com",
  projectId: "react-49905-f18e5",
  storageBucket: "react-49905-f18e5.appspot.com",
  messagingSenderId: "528809284527",
  appId: "1:528809284527:web:f2183322417049f756555a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const initFirebase = ()=> app