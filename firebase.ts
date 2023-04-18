// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWZSC2P4L9dA6Aw041483gCJn8s5rjo6c",
  authDomain: "resume-e8543.firebaseapp.com",
  projectId: "resume-e8543",
  storageBucket: "resume-e8543.appspot.com",
  messagingSenderId: "1030017149122",
  appId: "1:1030017149122:web:173dfe9cc0a782d0f6f35b",
  measurementId: "G-806JSBY0PF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
