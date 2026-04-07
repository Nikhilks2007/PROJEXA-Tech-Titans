function handleAction(type) {

    if (type === "free") {
        openLoginPopup();   // login popup
    }

    else if (type === "premium") {
        openPopup();        // premium popup
    }

    else if (type === "preview") {
        alert("Preview opened 📖");
    }

    else if (type === "borrow") {
        alert("Book borrowed successfully 📚");
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