// Import the jsonwebtoken module
const jwt = require("jsonwebtoken");

// Middleware function to authenticate requests
module.exports = async (req, res, next) => {
  try {
    // Extract the token from the "Authorization" header
    const token = req.headers["authorization"].split(" ")[1];

    // Verify the token using the JWT_SECRET from environment variables
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        // If verification fails, return an error response
        return res.status(401).send({
          message: "Auth failed",
          success: false,
        });
      } else {
        // If verification succeeds, attach the decoded user ID to the request object
        req.body.userId = decoded.id;
        next(); // Proceed to the next middleware or route handler
      }
    });
  } catch (error) {
    // If an error occurs during token extraction or verification, return an error response
    return res.status(401).send({
      message: "Auth failed",
      success: false,
    });
  }
};
