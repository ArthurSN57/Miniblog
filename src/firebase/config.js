import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAr9xfbba-OncejbWT1Fx9WI7IYputLLK4",
  authDomain: "miniblog-9b739.firebaseapp.com",
  projectId: "miniblog-9b739",
  storageBucket: "miniblog-9b739.appspot.com",
  messagingSenderId: "170176367849",
  appId: "1:170176367849:web:60325e3b7dfdff88b27478"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };