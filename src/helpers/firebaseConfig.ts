import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa7MSYQJ2uR6FEKw-EuKoMsuAMV6fSemI",
  authDomain: "sda-market-fcdb1.firebaseapp.com",
  projectId: "sda-market-fcdb1",
  storageBucket: "sda-market-fcdb1.appspot.com",
  messagingSenderId: "891567571614",
  appId: "1:891567571614:web:ab507cd4a0f4e72079318f",
  measurementId: "G-27SHX4PR1D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
