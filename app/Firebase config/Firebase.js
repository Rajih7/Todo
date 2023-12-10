import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCFzitPvtEqBKwqsktoEJEI2_2KVTVd9JE",
  authDomain: "todo-20f3b.firebaseapp.com",
  projectId: "todo-20f3b",
  storageBucket: "todo-20f3b.appspot.com",
  messagingSenderId: "85509725571",
  appId: "1:85509725571:web:9b7e62c7ef1d01f7b12ab6",
  measurementId: "G-EV5PPL2GC7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getDatabase(app);
export default app;