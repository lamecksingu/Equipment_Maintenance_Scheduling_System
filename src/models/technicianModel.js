const db = require('../db');

// Create a new technician
exports.createTechnician = (data, callback) => {
    const query = 'INSERT INTO technician SET ?';
    db.query(query, data, callback);
};

// Get all technicians
exports.getAllTechnicians = (callback) => {
    const query = `
	SELECT technician.*, user.username
	FROM technician
	JOIN user ON technician.user_id = user.id
	`;
    db.query(query, callback);
};

// Get a technician by ID
exports.getTechnicianById = (id, callback) => {
    const query = `SELECT technician.*, user.username
    FROM technician
    JOIN user ON technician.user_id = user.id
    WHERE technician.id = ?
    `;
    db.query(query, [id], (err, results) => {
	    if (err) return callback(err);
	    if (results.length === 0) return callback(null, null); // No technician found
	    callback(null, results[0]);
    });
};

// addition for tests
// Get technician by user ID
exports.getTechnicianByUserId = (userId, callback) => {
    const query = 'SELECT * FROM technician WHERE user_id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) return callback(err);
        if (results.length === 0) return callback(null, null); // No technician found for this user
        callback(null, results[0]);
    });
};

// end of addition


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
