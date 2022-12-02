import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKGc0AICoewmGR1n-cnbUBxcY660O2-BM",
  authDomain: "ndi-game-d9b14.firebaseapp.com",
  projectId: "ndi-game-d9b14",
  storageBucket: "ndi-game-d9b14.appspot.com",
  messagingSenderId: "34549845840",
  appId: "1:34549845840:web:d019c3556207d0ee926655"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);