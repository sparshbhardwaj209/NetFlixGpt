// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAsBP166YbwjEPhif4UwVfZEXD20nlDRks",
  authDomain: "netflixgpt-2644b.firebaseapp.com",
  projectId: "netflixgpt-2644b",
  storageBucket: "netflixgpt-2644b.appspot.com",
  messagingSenderId: "259617855687",
  appId: "1:259617855687:web:96919dcbe5ccc421edc6e2",
  measurementId: "G-29WD769734",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
