// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlu7WgJ87UgnAFQ05E2tXNI7W0fEdP2wA",
  authDomain: "dinim3ak-6706e.firebaseapp.com",
  projectId: "dinim3ak-6706e",
  storageBucket: "dinim3ak-6706e.appspot.com",
  messagingSenderId: "20314615381",
  appId: "1:20314615381:web:8e16a33a8b3d83717c6edc",
  measurementId: "G-D1P75ZX3XM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;
