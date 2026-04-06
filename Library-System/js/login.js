const switchBtn = document.getElementById("Btn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

switchBtn.addEventListener("click", () => {

    loginForm.classList.toggle("hidden");
    signupForm.classList.toggle("hidden");

});