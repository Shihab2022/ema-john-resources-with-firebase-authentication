// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGv5IREskSYXGDIDDtMRkrNVJPu9Ctcig",
  authDomain: "ema-john-with-firebase-a-10412.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-10412",
  storageBucket: "ema-john-with-firebase-a-10412.appspot.com",
  messagingSenderId: "52042042564",
  appId: "1:52042042564:web:de897697803f41f6fc0d91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth;