// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMqvXjt4nGeBMe0jyY4B7cwXy3qkz2w0E",
  authDomain: "fir-auth-integration-85851.firebaseapp.com",
  projectId: "fir-auth-integration-85851",
  storageBucket: "fir-auth-integration-85851.firebasestorage.app",
  messagingSenderId: "653552808445",
  appId: "1:653552808445:web:b56eb88abb2b0db88f6994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);