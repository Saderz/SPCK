import { auth, db } from "./config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import {
  collection,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const errorMessage = document.getElementById("error-message");
const displayUsername = document.getElementsByClassName("display-username")[0];
const userIcon = document.getElementsByClassName("fa-user")[0];
const linkIndex = document.getElementsByClassName("lgtoIndex")[0];

const displayName = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      userIcon.remove();
      linkIndex.href = "./index.html"
      displayUsername.textContent = `${
        !!user.displayName ? user.displayName : user.email
      }`;
    } else {
      window.location = "./login.html";
    }
  });
};

displayName();
