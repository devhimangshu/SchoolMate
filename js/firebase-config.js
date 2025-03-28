// js/firebase-config.js

// Your Firebase project configuration (replace with your actual details)
const firebaseConfig = {
  apiKey: "AIzaSyBPQ67r9mMz-x8fOCXozbVGMW_de81b0_8",
  authDomain: "stakehub-fc6be.firebaseapp.com",
  databaseURL: "https://stakehub-fc6be-default-rtdb.firebaseio.com",
  projectId: "stakehub-fc6be",
  storageBucket: "stakehub-fc6be.appspot.com",
  messagingSenderId: "990758331124",
  appId: "1:990758331124:android:11851d9fb54fa6d8eef4a1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
