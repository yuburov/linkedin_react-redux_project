import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA8VZi6-Zv_eFKKwJ8js9t-PS0AywOXhrQ",
  authDomain: "linkedin-6f132.firebaseapp.com",
  projectId: "linkedin-6f132",
  storageBucket: "linkedin-6f132.appspot.com",
  messagingSenderId: "943840296933",
  appId: "1:943840296933:web:75a99e6af76974a409b90c",
  measurementId: "G-ESGQW7216F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db, auth};