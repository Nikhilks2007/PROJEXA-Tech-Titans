const Btn = document.getElementById("Btn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

Btn.addEventListener("click", function() {
    loginForm.classList.toggle("hidden");
    signupForm.classList.toggle("hidden");

    if(Btn.innerText === "Switch to Sign Up"){
        Btn.innerText = "Switch to Login";
    } else {
        Btn.innerText = "Switch to Sign Up";
    }
});

signupForm.addEventListener("submit", function(e) {
    if (signupPassword.value !== signupConfirmPassword.value) {
        e.preventDefault();
        errorMsg.innerText = "Passwords do not match!";
        errorMsg.style.color = "red";
    } else {
        errorMsg.innerText = "";
    }
});

signupForm.addEventListener("submit", function(e) {
    e.preventDefault();   // page reload stop

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("signupConfirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match ❌");
        return;
    }

    // Save data in localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Signup Successful ✅");
});

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
    alert("Login Successful ✅");

    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "index.html";   // 🔥 IMPORTANT

    } else {
        alert("Invalid Email or Password ❌");
    }
});

