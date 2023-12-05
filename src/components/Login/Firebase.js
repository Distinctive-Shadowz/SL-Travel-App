
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database'


const firebaseConfig = {
  apiKey: "AIzaSyC3o3E-p37NKP4bDvsg47VDlGYz4PsLLsw",
  authDomain: "final-project-bfb2f.firebaseapp.com",
  projectId: "final-project-bfb2f",
  storageBucket: "final-project-bfb2f.appspot.com",
  messagingSenderId: "1015620315651",
  appId: "1:1015620315651:web:b35ee4df960f2ea433bc36"
};


const app = firebase.initializeApp(firebaseConfig);
export default app