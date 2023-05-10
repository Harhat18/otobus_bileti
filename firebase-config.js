import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAP4HjzH5ks1mgRSkaFRBbMxBD9o6ClKcc",
  authDomain: "bilet-adf61.firebaseapp.com",
  projectId: "bilet-adf61",
  storageBucket: "bilet-adf61.appspot.com",
  messagingSenderId: "231749678856",
  appId: "1:231749678856:web:ffab56357ed2150bcf1ebd",
  measurementId: "G-RFG7KHJF5T",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
