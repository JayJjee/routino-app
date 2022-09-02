import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firestore } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0rg04LlofuKioNVEW7y50KmWzcvvjEDw",
  authDomain: "routino-backend-api.firebaseapp.com",
  projectId: "routino-backend-api",
  storageBucket: "routino-backend-api.appspot.com",
  messagingSenderId: "1033123288907",
  appId: "1:1033123288907:web:9f4f69bf40359f76987ace",
  measurementId: "G-MQ3XXRZPXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = firestore()
export default database