// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-ZWuq47hd7reWR-gL1XoTaYAt7SxjytE",
    authDomain: "choiproj-messageapp.firebaseapp.com",
    databaseURL: "https://choiproj-messageapp.firebaseio.com",
    projectId: "choiproj-messageapp",
    storageBucket: "choiproj-messageapp.appspot.com",
    messagingSenderId: "47114010652",
    appId: "1:47114010652:web:cfb31a81abdb1ccdcbdfd9",
    measurementId: "G-LXRRPXNRSE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;