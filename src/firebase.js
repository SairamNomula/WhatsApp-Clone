import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAvFvh4otZu6nBEhe17pEjtru8LN-c6Kkc",
    authDomain: "whatsapp-clone-31869.firebaseapp.com",
    projectId: "whatsapp-clone-31869",
    storageBucket: "whatsapp-clone-31869.appspot.com",
    messagingSenderId: "641971285333",
    appId: "1:641971285333:web:b0fc8a9fb5ff16e73553dc",
    measurementId: "G-QE3B7N5R1R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
