const db = require('../db');

// Create a new technician
exports.createTechnician = (data, callback) => {
    const query = 'INSERT INTO technician SET ?';
    db.query(query, data, callback);
};

// Get all technicians
exports.getAllTechnicians = (callback) => {
    const query = 'SELECT * FROM technician';
    db.query(query, callback);
};

// Get a technician by ID
exports.getTechnicianById = (id, callback) => {
    const query = 'SELECT * FROM technician WHERE id = ?';
    db.query(query, [id], (err, results) => {
	    if (err) return callback(err);
	    if (results.length === 0) return callback(null, null); // No technician found
	    callback(null, results[0]);
    });
};

// Update a technician by ID
exports.updateTechnicianById = (id, data, callback) => {
    const query = 'UPDATE technician SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
};

// Delete a technician by ID
exports.deleteTechnicianById = (id, callback) => {
    const query = 'DELETE FROM technician WHERE id = ?';
    db.query(query, [id], callback);
};
