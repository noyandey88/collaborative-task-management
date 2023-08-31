// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBVDok7qLy6nakrWi92s0nrcHUjMqSpF8o',
  authDomain: 'collaborative-task-manag-ebb7f.firebaseapp.com',
  projectId: 'collaborative-task-manag-ebb7f',
  storageBucket: 'collaborative-task-manag-ebb7f.appspot.com',
  messagingSenderId: '1726919967',
  appId: '1:1726919967:web:fbde941cc56f78539bac2a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
