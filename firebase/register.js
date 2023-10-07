import { auth, db } from "./config.js";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import {
  collection,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

const email = document.getElementById("register-email");
const password = document.getElementById("register-password");
const registerBtn = document.getElementById("formRegister");
const username = document.getElementById("username");
const errorMessage = document.getElementById("error-message");

const handleRegister = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: username.value,
      })
        .then(() => {
          window.location = "./login.html";
        })
        .catch((error) => {
          alert(error.code);
        });
    })
    .catch((error) => {
      if (error.code === "auth/invalid-email") {
        errorMessage.textContent = "Email không hợp lệ";
      } else if (error.code === "auth/missing-password") {
        errorMessage.textContent = "Chưa nhập password";
      }
    });
};

registerBtn.addEventListener("submit", handleRegister);
