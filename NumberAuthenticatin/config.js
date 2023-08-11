import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAbpdAzvkD9DYkY4SUfzS6Qh5W4eDXdst4",
  authDomain: "spotify-403ae.firebaseapp.com",
  projectId: "spotify-403ae",
  storageBucket: "spotify-403ae.appspot.com",
  messagingSenderId: "285972321597",
  appId: "1:285972321597:web:6d913c7a3e33c6eab02154",
  measurementId: "G-0TZCJQQWP3"
};
// Initialize Firebase
if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}