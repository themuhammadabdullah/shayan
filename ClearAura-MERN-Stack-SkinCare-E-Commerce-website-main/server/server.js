// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Create an Express application
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB connection string (replace 'mongodb://localhost:27017/MyDB' with your MongoDB connection string)
const mongoURI = 'mongodb://localhost:27017/MyDB';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Create a mongoose model and schema (User model)
const User = mongoose.model("User", {
  username: String,
  password: String
});

// Express route to handle user creation
app.post("/api/users", async (req, res) => {
  try {
    // Create a new user instance from the request body
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    });

    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
