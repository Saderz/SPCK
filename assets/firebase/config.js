import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB_oSwFiIp7nVqaZ9eFf7ao2w-VyzNJ_mM",
    authDomain: "spck-f10f5.firebaseapp.com",
    projectId: "spck-f10f5",
    storageBucket: "spck-f10f5.appspot.com",
    messagingSenderId: "69011787185",
    appId: "1:69011787185:web:a26f265e974cdaf05a0190"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);