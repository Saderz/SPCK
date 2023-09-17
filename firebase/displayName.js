import { auth, db } from "./config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js"
import { collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js"

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const errorMessage = document.getElementById("error-message");

const handleRegister = () => {
    onAuthStateChanged(auth, email.value, password.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
    })
    .catch((error) => {
        if (error.code === "auth/invalid-email") {
            errorMessage.textContent = "Email không hợp lệ";
        } else if (error.code === "auth/missing-password") {
            errorMessage.textContent = "Chưa nhập password";
        }
    });
};

const saveUser = async (email) => {}

loginBtn.addEventListener("click", handleRegister);