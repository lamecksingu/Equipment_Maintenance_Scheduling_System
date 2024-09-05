const db = require('../db');
const bcrypt = require('bcrypt');

// Register a new user
exports.register = (userData, callback) => {
  bcrypt.hash(userData.password, 10, (err, hash) => {
    if (err) {
      return callback(err);
    }
    userData.password = hash;
    const query = 'INSERT INTO users SET ?';
    db.query(query, userData, callback);
  });
};

// Authenticate user (login)
exports.authenticate = (email, password, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) return callback(err);
    if (results.length === 0) return callback(null, false);

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return callback(err);
      if (!isMatch) return callback(null, false);
      callback(null, user);
    });
  });
};

// Fetch all users
exports.getAll = (callback) => {
	const query = 'SELECT * FROM users';
	db.query(query, callback);
};

// Fetch user by Id
exports.getById = (id, callback) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err);
    if (results.length === 0) return callback(null, null); // No user found
    callback(null, results[0]);
  });
};

// Update a user by ID
exports.updateById = (id, userData, callback) => {
  // Hash the password if it is being updated
  if (userData.password) {
    bcrypt.hash(userData.password, 10, (err, hash) => {
      if (err) return callback(err);
      userData.password = hash;
      const query = 'UPDATE users SET ? WHERE id = ?';
      db.query(query, [userData, id], callback);
    });
  } else {
    const query = 'UPDATE users SET ? WHERE id = ?';
    db.query(query, [userData, id], callback);
  }
};

// Delete a user by ID
exports.deleteById = (id, callback) => {
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], callback);
};
