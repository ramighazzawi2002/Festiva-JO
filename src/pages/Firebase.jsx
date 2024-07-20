// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
   apiKey: "AIzaSyCBIbxnMfI9HYmcEJXLgoActJOPFuKvI_I",
    authDomain: "culture-festival-new.firebaseapp.com",
    databaseURL: "https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "culture-festival-new",
    storageBucket: "culture-festival-new.appspot.com",
    messagingSenderId: "570329409284",
    appId: "1:570329409284:web:b0208562270d9361231251"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };


