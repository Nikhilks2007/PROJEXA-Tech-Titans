const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./routes/books");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB (replace 'test' with your database if needed)
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/books", bookRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("BookNest Server Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});