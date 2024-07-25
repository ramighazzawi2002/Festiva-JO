
// import { initializeApp, getApps } from "firebase/app";
// import { getAuth, signOut, GoogleAuthProvider } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// const firebaseConfig = {
//   apiKey: "AIzaSyB4PLaEZMyOg0j0F0Br_4Qk3OUGlydZPZM",
//   authDomain: "culture-2.firebaseapp.com",
//   databaseURL: "https://culture-2-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "culture-2",
//   storageBucket: "culture-2.appspot.com",
//   messagingSenderId: "20027048919",
//   appId: "1:20027048919:web:3cf868951998f918728192"
// };

// let app;

// if (!getApps().length) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = getApps()[0];
// }
// export const db = getDatabase(app);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// export { signOut, googleProvider, auth };

import { initializeApp, getApps } from "firebase/app";
import { getAuth, signOut, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB4PLaEZMyOg0j0F0Br_4Qk3OUGlydZPZM",
  authDomain: "culture-2.firebaseapp.com",
  databaseURL: "https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "culture-2",
  storageBucket: "gs://culture-2.appspot.com",
  messagingSenderId: "20027048919",
  appId: "1:20027048919:web:3cf868951998f918728192"
};

let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}
export const db = getDatabase(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const imageDb = getStorage(app)
export { signOut, googleProvider, auth, imageDb  };