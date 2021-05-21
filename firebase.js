// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyABeuD_FfV7YcOP1bU-pQnLuhpKwR5Qx3k",
  authDomain: "facebook-clone-47291.firebaseapp.com",
  projectId: "facebook-clone-47291",
  storageBucket: "facebook-clone-47291.appspot.com",
  messagingSenderId: "504557282061",
  appId: "1:504557282061:web:19a0bc4e20fb89de878644",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
