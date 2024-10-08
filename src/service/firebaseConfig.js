// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Importa a função para o Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANKnkA1zrs4TU3OeFzCLYWk6Lkfk70Gh0",
  authDomain: "booklove-microsaas.firebaseapp.com",
  projectId: "booklove-microsaas",
  storageBucket: "booklove-microsaas.appspot.com",
  messagingSenderId: "1054144080507",
  appId: "1:1054144080507:web:cb1eca7ac412d9fde810de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage and export it
const storage = getStorage(app);
export { storage };
