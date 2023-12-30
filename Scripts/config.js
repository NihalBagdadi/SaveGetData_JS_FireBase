
const firebaseConfig = {
    apiKey: "AIzaSyCyUCivKC93xvBKD9UIFivAswZ1pVtnglQ",
    authDomain: "fir-datasave-5e786.firebaseapp.com",
    databaseURL: "https://fir-datasave-5e786-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-datasave-5e786",
    storageBucket: "fir-datasave-5e786.appspot.com",
    messagingSenderId: "922496639521",
    appId: "1:922496639521:web:8e1c051e7fa208ae8af960"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  const usersCollection = db.collection("Registor");
export {firebaseConfig,usersCollection}