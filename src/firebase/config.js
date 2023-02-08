import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAtPowHG84Smj-fyiWDTzvURLAW4VWH3HE",
  authDomain: "front-to-back-4d158.firebaseapp.com",
  databaseURL: "https://front-to-back-4d158-default-rtdb.firebaseio.com",
  projectId: "front-to-back-4d158",
  storageBucket: "front-to-back-4d158.appspot.com",
  messagingSenderId: "932924435437",
  appId: "1:932924435437:web:ba0061347c96fa2ef695e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
