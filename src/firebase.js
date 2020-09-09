import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA-AVT2oyy_jwqZdWAK-yLpeILIYxuAtVg",
  authDomain: "clone-6460d.firebaseapp.com",
  databaseURL: "https://clone-6460d.firebaseio.com",
  projectId: "clone-6460d",
  storageBucket: "clone-6460d.appspot.com",
  messagingSenderId: "335073375078",
  appId: "1:335073375078:web:29735a012af96781ab8ea7",
  measurementId: "G-RDCDFC2ZVT",
});

const auth = firebase.auth();

export { auth };
