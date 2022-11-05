import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmvioBKfE5zZH28IE3boS8bIJTppvl1iY",
  authDomain: "telegraph-clone-dd877.firebaseapp.com",
  projectId: "telegraph-clone-dd877",
  storageBucket: "telegraph-clone-dd877.appspot.com",
  messagingSenderId: "753754543619",
  appId: "1:753754543619:web:734fcf9f87c833f6ea2036",
  measurementId: "G-3QX0P427G2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
