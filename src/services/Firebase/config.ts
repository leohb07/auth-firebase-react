import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVCf2z9AnrZkpW8UnAmmewmakgagc4RnQ",
  authDomain: "auth-firebase-c5e70.firebaseapp.com",
  projectId: "auth-firebase-c5e70",
  storageBucket: "auth-firebase-c5e70.appspot.com",
  messagingSenderId: "410598534166",
  appId: "1:410598534166:web:76db8a19aee93f9f351937"
};

export const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)