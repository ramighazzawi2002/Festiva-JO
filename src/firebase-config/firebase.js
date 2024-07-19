import { initializeApp } from "firebase/app";
import { getAuth, signOut, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAqDcdAXngwHEhTRcXlp4WdMeRPV9onBuY",
    authDomain: "culture-festival-f4fd7.firebaseapp.com",
    databaseURL: "https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "culture-festival-f4fd7",
    storageBucket: "culture-festival-f4fd7.appspot.com",
    messagingSenderId: "103428832458",
    appId: "1:103428832458:web:4ab8a261568337e0890833"
  };

  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signOut };