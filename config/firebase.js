// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAumbCo6mrZ0YyU8VBzJNgopeL6x9yM0_8',
  authDomain: 'homeworkapp-f2e87.firebaseapp.com',
  projectId: 'homeworkapp-f2e87',
  storageBucket: 'homeworkapp-f2e87.appspot.com',
  messagingSenderId: '971982149323',
  appId: '1:971982149323:web:6b273b578dc0609a07ad4e',
  measurementId: 'G-QZ2TQZVE8T',
  tenantId:'HuiswerkApp'
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
initializeApp(firebaseConfig);
export const Auth = getAuth();
export const database = getFirestore();