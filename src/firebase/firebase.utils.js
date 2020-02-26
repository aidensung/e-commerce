import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAk1w0r8lYqdtmNx9XA6f5fGK6BxU3zOrA",
  authDomain: "crown-clothing-9bd80.firebaseapp.com",
  databaseURL: "https://crown-clothing-9bd80.firebaseio.com",
  projectId: "crown-clothing-9bd80",
  storageBucket: "crown-clothing-9bd80.appspot.com",
  messagingSenderId: "423717761213",
  appId: "1:423717761213:web:70052c62c63b6d9cdd07d4",
  measurementId: "G-17G0C9S2E7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;