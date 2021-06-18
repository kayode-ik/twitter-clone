import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAzl9gWGoqRndMIZsRcbgC3fdXMmEU19t0",
    authDomain: "twitter-clone-63361.firebaseapp.com",
    projectId: "twitter-clone-63361",
    storageBucket: "twitter-clone-63361.appspot.com",
    messagingSenderId: "525670698243",
    appId: "1:525670698243:web:258cc51106df9b3d2a6d36",
    measurementId: "G-WG7240T5E0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  export default db;