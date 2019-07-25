import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
  apiKey: "AIzaSyDTx-0lZPY06aqM3inN7JVB1G6Sgs0W6XM",
  authDomain: "ecommercedb-82820.firebaseapp.com",
  databaseURL: "https://ecommercedb-82820.firebaseio.com",
  projectId: "ecommercedb-82820",
  storageBucket: "",
  messagingSenderId: "1071236035353",
  appId: "1:1071236035353:web:ddb964d1c1327fdc"
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
