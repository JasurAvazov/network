import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVQ4UfI8xFNdTtfBQBAIXyw85weo1FOEI",
    authDomain: "network-7d21a.firebaseapp.com",
    databaseURL: "https://network-7d21a-default-rtdb.firebaseio.com",
    projectId: "network-7d21a",
    storageBucket: "network-7d21a.appspot.com",
    messagingSenderId: "278593094151",
    appId: "1:278593094151:web:67e89cbcfa8ba8ad2be0a2",
    measurementId: "G-R6QY9V4Y0T"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);



