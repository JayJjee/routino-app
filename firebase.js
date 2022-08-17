import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQYvm5cRLLU9TX55hz7uONe5I5VfhmC60",
    authDomain: "routino-96d9c.firebaseapp.com",
    projectId: "routino-96d9c",
    storageBucket: "routino-96d9c.appspot.com",
    messagingSenderId: "876683136978",
    appId: "1:876683136978:web:dcbc681b1e5e5bcde0020b"
};

let app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };