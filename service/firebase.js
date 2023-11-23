import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4MbnAhXPUsYFFdUqRrASswipMNU-yRzk",
  authDomain: "zkerja-60f0b.firebaseapp.com",
  projectId: "zkerja-60f0b",
  storageBucket: "zkerja-60f0b.appspot.com",
  messagingSenderId: "816468763888",
  appId: "1:816468763888:web:58c3db348c95f0fc694e35",
  measurementId: "G-PM7XKWRYCT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage(app)