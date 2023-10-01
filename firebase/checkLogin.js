import { auth, db } from "./config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location = "./index.html";
    }
});