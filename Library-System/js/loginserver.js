const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Dummy user (database ki jagah)
const user = {
    email: "admin@gmail.com",
    password: "123456"
};

// Login API
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === user.email && password === user.password) {
        res.json({ success: true, message: "Login successful" });
    } else {
        res.json({ success: false, message: "Invalid credentials" });
    }
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});