const db = require('../db');

// Create a new site
exports.create = (data, callback) => {
    const query = 'INSERT INTO site SET ?';
    db.query(query, data, callback);
};

// Get all sites
exports.getAll = (callback) => {
    const query = 'SELECT * FROM site';
    db.query(query, callback);
};

// Get a site by ID
exports.getById = (id, callback) => {
    const query = 'SELECT * FROM site WHERE id = ?';
    db.query(query, [id], callback);
};

// Update a site by ID
exports.updateById = (id, data, callback) => {
    const query = 'UPDATE site SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
};

// Delete a site by ID
exports.deleteById = (id, callback) => {
    const query = 'DELETE FROM site WHERE id = ?';
    db.query(query, [id], callback);
};
