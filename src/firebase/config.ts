import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Aquí pega la configuración de tu proyecto Firebase
  apiKey: "AIzaSyCkoXsEW4BxuF5VEvLk3WrTEV0XnOaJdhk",
  authDomain: "yuri-baptista-web-portafolio.firebaseapp.com",
  projectId: "yuri-baptista-web-portafolio",
  storageBucket: "yuri-baptista-web-portafolio.appspot.com",
  messagingSenderId: "326692630835",
  appId: "1:326692630835:web:e7a3230852b34947100e46",
  measurementId: "G-5TNR0F20Q7"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
