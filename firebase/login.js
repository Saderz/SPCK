import { auth, db } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js"
import { collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js"

const email = document.getElementById("login-email");
const password = document.getElementById("login-password");
const loginBtn = document.getElementById("formLogin");
const errorMessage = document.getElementById("error-message");

const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        window.location = "index.html"
    })
    .catch((error) => {
        if (error.code === "auth/invalid-email") {
            errorMessage.textContent = "Email không hợp lệ";
        } else if (error.code === "auth/missing-password") {
            errorMessage.textContent = "Chưa nhập password";
        }
    });
};

loginBtn.addEventListener("submit", handleLogin);