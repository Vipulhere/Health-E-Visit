// Import the necessary modules
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")
require("dotenv").config();

// Import the database configuration
const dbConfig = require("./config/dbConfig");

// Middleware to parse JSON in request bodies
app.use(express.json());

// Import the routes
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");

const path = require('path');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// Use the routes
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

// Serve static files and handle client-side routing in production

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  // For any other route, send the index.html file
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

// Set the port
const port = process.env.PORT || 5000;

// Define a basic route
app.get("/", (req, res) => res.send("Hello World!"));

// Start the server
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
