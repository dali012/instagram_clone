import firebase from 'firebase';

// eslint-disable-next-line
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBP58zkPHeSGjd1_-2hxrf1NDITGzRDc9E",
  authDomain: "instagram-clone-60898.firebaseapp.com",
  databaseURL: "https://instagram-clone-60898.firebaseio.com",
  projectId: "instagram-clone-60898",
  storageBucket: "instagram-clone-60898.appspot.com",
  messagingSenderId: "161947588329",
  appId: "1:161947588329:web:a34dc000023582f52fc278",
  measurementId: "G-7EDRQVK6LX"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};