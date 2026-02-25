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