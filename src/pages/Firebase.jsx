// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAqDcdAXngwHEhTRcXlp4WdMeRPV9onBuY',
  authDomain: 'culture-festival-f4fd7.firebaseapp.com',
  projectId: 'culture-festival-f4fd7',
  storageBucket: 'culture-festival-f4fd7.appspot.com',
  messagingSenderId: '103428832458',
  appId: '1:103428832458:web:4ab8a261568337e0890833',
  databaseURL: 'https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/'
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };


