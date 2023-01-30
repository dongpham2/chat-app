import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAVdH638wdylR3TATqAk-s2siFJSnyw-Ck",
    authDomain: "chat-app-4899f.firebaseapp.com",
    projectId: "chat-app-4899f",
    storageBucket: "chat-app-4899f.appspot.com",
    messagingSenderId: "239265794625",
    appId: "1:239265794625:web:ab383980424a3b1ef594c0",
    measurementId: "G-TL8MQL5BK3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const auth = firebase.auth();
const db = firebase.firestore();

export {auth, db}
export default firebase;