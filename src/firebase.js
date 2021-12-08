import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDximI5TY6dXIcKGhjISpQK3kT5dhaPodk",

  authDomain: "starberry-f49b1.firebaseapp.com",

  projectId: "starberry-f49b1",

  storageBucket: "starberry-f49b1.appspot.com",

  messagingSenderId: "194317758051",

  appId: "1:194317758051:web:c74c35a37c72d8377b5256",

  measurementId: "${config.measurementId}",
});
// const db = firebase.db();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider, storage };

export default db;
