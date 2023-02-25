// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.intializeApp({
  apiKey: "AIzaSyD7tIWa36LDpXssWK8z1kfKlgQ3cUkcaBI",
  authDomain: "todoist-clone-7739c.firebaseapp.com",
  projectId: "todoist-clone-7739c",
  storageBucket: "todoist-clone-7739c.appspot.com",
  messagingSenderId: "365064130735",
  appId: "1:365064130735:web:58545be49edc539264c45a",
  measurementId: "G-57G53LHJYY"
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export { firebaseConfig as firebase };
