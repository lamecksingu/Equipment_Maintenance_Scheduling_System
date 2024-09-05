const db = require('../db');

// Create new equipment
exports.create = (data, callback) => {
    const query = 'INSERT INTO equipment SET ?';
    db.query(query, data, callback);
};

// Get all equipment
exports.getAll = (callback) => {
    const query = 'SELECT * FROM equipment';
    db.query(query, callback);
};

// Get a single equipment by ID
exports.getById = (id, callback) => {
    const query = 'SELECT * FROM equipment WHERE id = ?';
    db.query(query, [id], callback);
};

// Update equipment by ID
exports.updateById = (id, data, callback) => {
    const query = 'UPDATE equipment SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
};

// Delete equipment by ID
exports.deleteById = (id, callback) => {
    const query = 'DELETE FROM equipment WHERE id = ?';
    db.query(query, [id], callback);
};
