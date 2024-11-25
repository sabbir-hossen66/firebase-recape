// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdScXYVTOYbMRCVr494rd9jerhfAgbtzI",
  authDomain: "simple-auth-1364b.firebaseapp.com",
  projectId: "simple-auth-1364b",
  storageBucket: "simple-auth-1364b.firebasestorage.app",
  messagingSenderId: "108199006182",
  appId: "1:108199006182:web:8e1bb333aa6bc917535027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;