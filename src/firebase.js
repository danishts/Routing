// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCc9fdDrRhphSewmcQ5ZwzeQ8dq3I41KFc",
  authDomain: "tablecrud-3fe25.firebaseapp.com",
  projectId: "tablecrud-3fe25",
  storageBucket: "tablecrud-3fe25.appspot.com",
  messagingSenderId: "201625663650",
  appId: "1:201625663650:web:9ac05175a5a7fd105abffb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // ✅ make sure this is present
