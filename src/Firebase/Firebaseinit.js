// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzfqmv9hqk-ijZr7nK6tNqIJaWX5gbuxg",
  authDomain: "koro-b0465.firebaseapp.com",
  projectId: "koro-b0465",
  storageBucket: "koro-b0465.appspot.com",
  messagingSenderId: "1078055439946",
  appId: "1:1078055439946:web:a051c5e956bc26d610a0b3",
  measurementId: "G-NTW5F2D7PQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app)
