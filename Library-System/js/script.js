window.addEventListener("load", function() {

    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let userName = localStorage.getItem("userName");

    if (isLoggedIn === "true") {

        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("signupBtn").style.display = "none";

        document.getElementById("userWelcome").style.display = "inline";
        document.getElementById("logoutBtn").style.display = "inline";

        document.getElementById("userWelcome").innerText = "Welcome " + userName + " 👤";
    }
});

// LOGOUT
document.getElementById("logoutBtn").addEventListener("click", function() {

    localStorage.removeItem("isLoggedIn");

    alert("Logged out ❌");

    location.reload();
});

function handleAction(type) {

    let isLoggedIn = localStorage.getItem("isLoggedIn");

    // FREE BOOK
    if (type === "free") {

        if (isLoggedIn === "true") {
            alert("Book Opened 📖");
        } else {
            openLoginPopup();
        }
    }

    // PREMIUM BOOK
    else if (type === "premium") {

        if (isLoggedIn === "true") {
            openPopup();
        } else {
            openLoginPopup();
        }
    }

    // PREVIEW
    else if (type === "preview") {
        alert("Preview opened 📖");
    }

    // BORROW
    else if (type === "borrow") {
        alert("Book borrowed 📚");
    }
}

function openPopup() {
    document.getElementById("premiumPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("premiumPopup").style.display = "none";
}

function openLoginPopup() {
    document.getElementById("loginPopup").style.display = "flex";
}

function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}