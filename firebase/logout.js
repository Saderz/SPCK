import { auth } from "./config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

const logoutBtn = document.getElementsByClassName("nav_logout-btn")[0];

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      window.location = "./login.html";
    })
    .catch((error) => {
      // An error happened.
    });
};

logoutBtn.addEventListener("click", handleLogout);