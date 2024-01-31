import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBs-4wUe7aFwPDa0s-v8RA6pgLowr0ry_o",
  authDomain: "my-docs-5c524.firebaseapp.com",
  projectId: "my-docs-5c524",
  storageBucket: "my-docs-5c524.appspot.com",
  messagingSenderId: "1089221895101",
  appId: "1:1089221895101:web:66b3bcf8e20cdbb8d868d4",
  measurementId: "G-EKX84B3CGT"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
