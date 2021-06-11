// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfbnJmRIzRGi3c28Vv-fia-YiINSCeckg",
  authDomain: "facebook-clone-904b9.firebaseapp.com",
  projectId: "facebook-clone-904b9",
  storageBucket: "facebook-clone-904b9.appspot.com",
  messagingSenderId: "16179746727",
  appId: "1:16179746727:web:3cf3cdce093879154f8882",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
