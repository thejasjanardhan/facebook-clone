// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVBMfRmBOzcOFbDzaHapNqWDFd45slpbU",
  authDomain: "facebook-2-e0af1.firebaseapp.com",
  projectId: "facebook-2-e0af1",
  storageBucket: "facebook-2-e0af1.appspot.com",
  messagingSenderId: "806454835477",
  appId: "1:806454835477:web:099353307a8f80a6ae111c",
  measurementId: "G-1YHDKKYY9Z",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
