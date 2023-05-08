// Import the mongoose module
const mongoose = require("mongoose");

// Connect to the MongoDB database using the MONGO_URL provided in the environment variables
mongoose.connect(process.env.MONGO_URL);

// Get the default connection object
const connection = mongoose.connection;

// Event handler for successful connection
connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});

// Event handler for connection errors
connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

// Export the mongoose object, so it can be used in other parts of the application
module.exports = mongoose;
