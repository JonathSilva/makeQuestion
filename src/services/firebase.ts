import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
  push,
  onValue,
  off,
} from "firebase/database";

const firebaseConfig: any = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATA_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

const database = getDatabase(firebase);

export {
  firebase,
  auth,
  onValue,
  remove,
  database,
  ref,
  update,
  push,
  set,
  off,
  get,
  GoogleAuthProvider,
  signInWithPopup,
};
