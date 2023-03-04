import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfIO9qJyQHfgaa4EoLyCah8MK5odzR23Q",
  authDomain: "react-chat-app-2ee99.firebaseapp.com",
  projectId: "react-chat-app-2ee99",
  storageBucket: "react-chat-app-2ee99.appspot.com",
  messagingSenderId: "559647635766",
  appId: "1:559647635766:web:e45f3185f4f8e5b6069b97"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCyDjfu95-NluAAeFOdiNQYFBEGPCtH_f4",
//   authDomain: "chat-app-6221f.firebaseapp.com",
//   projectId: "chat-app-6221f",
//   storageBucket: "chat-app-6221f.appspot.com",
//   messagingSenderId: "181950089383",
//   appId: "1:181950089383:web:a4b6cbacf6e08791333382"
// };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();