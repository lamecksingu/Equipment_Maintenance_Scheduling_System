const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to verify JWT token
exports.verifyToken = (req, res, next) => {
  // Get the token from the Authorization header
  let token = req.headers['authorization'];
  
  // Check if token starts with 'Bearer ' and remove it
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length); // Remove 'Bearer ' prefix
  }

  // If no token is provided
  if (!token) return res.status(403).send('A token is required for authentication');

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};

// Middleware to check if user is admin
exports.isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Access denied');
  }
  next();
};
