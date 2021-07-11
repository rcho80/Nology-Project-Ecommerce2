import firebase from "firebase";
import "@firebase/firestore";
import "@firebase/auth";
import "@firebase/storage";


// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD4VU34ICUQZUnPJIn5IqiXFYT3l21SqiI",
    authDomain: "react-ecommerce-c6a4c.firebaseapp.com",
    projectId: "react-ecommerce-c6a4c",
    storageBucket: "react-ecommerce-c6a4c.appspot.com",
    messagingSenderId: "312363309342",
    appId: "1:312363309342:web:c6d3ed404fc4691d43d10f"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();

// Firestore - https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore
export default firebase.firestore();
