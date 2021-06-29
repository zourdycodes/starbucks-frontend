import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBHlPfa5U7ucPkiisVHJQAOoZZ2z-7WSEw",
  authDomain: "starbucks-1355f.firebaseapp.com",
  projectId: "starbucks-1355f",
  storageBucket: "starbucks-1355f.appspot.com",
  messagingSenderId: "882737475097",
  appId: "1:882737475097:web:852d99bbe427e6bfcac488",
});

const auth = app.auth();

export { app as firebase, auth };
