import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCWyzYT6LRe0IBllyZcl40Hl3x1XmSV2Mk",
    authDomain: "ecom-graphql.firebaseapp.com",
    databaseURL: "https://ecom-graphql.firebaseio.com",
    projectId: "ecom-graphql",
    storageBucket: "ecom-graphql.appspot.com",
    messagingSenderId: "881545033043",
    appId: "1:881545033043:web:912b796cea2cef7b929da6",
    measurementId: "G-1CP5K1EE6X"
  };


  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;