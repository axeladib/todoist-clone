// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.intializeApp({
    apiKey: "AIzaSyDhNMXm9syFu_WU4Dzmjb9bzzEGEoZaNFg",
    authDomain: "todoist-clone-8bd83.firebaseapp.com",
    projectId: "todoist-clone-8bd83",
    storageBucket: "todoist-clone-8bd83.appspot.com",
    messagingSenderId: "803771470358",
    appId: "1:803771470358:web:4e43a8e5aaf947c5715b37",
    measurementId: "G-TNTK3VYD1S"
  });

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export {firebaseConfig as firebase};