// import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBzfjn3Hg6eAXU-HJ_5eCI7YmPpW9xU3Fw",
  authDomain: "krishcodes-linkedin-clone.firebaseapp.com",
  projectId: "krishcodes-linkedin-clone",
  storageBucket: "krishcodes-linkedin-clone.appspot.com",
  messagingSenderId: "818972472705",
  appId: "1:818972472705:web:2e2ad3b188e752e69c2480"
};

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

export default firebase;