import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD_EA8azW8KWKEohtsP-hhxI8e-FD4cMs",
  authDomain: "carbonsense-93f8d.firebaseapp.com",
  projectId: "carbonsense-93f8d",
  storageBucket: "carbonsense-93f8d.appspot.com",
  messagingSenderId: "1008393022235",
  appId: "1:1008393022235:web:12622d50a9e3730e3941be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;