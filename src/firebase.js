// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiRpeCyZlQ2vT571Q_ocAID3JWtBCkfIU",
  authDomain: "discord-clone-reactjs.firebaseapp.com",
  databaseURL: "https://discord-clone-reactjs.firebaseio.com",
  projectId: "discord-clone-reactjs",
  storageBucket: "discord-clone-reactjs.appspot.com",
  messagingSenderId: "947238387388",
  appId: "1:947238387388:web:8efccb90bd6c623dee1ab9",
  measurementId: "G-43KTK094XX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
