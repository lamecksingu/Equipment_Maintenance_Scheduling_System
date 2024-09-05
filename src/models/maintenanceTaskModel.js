const db = require('../db');

// Create a new maintenance task
exports.createMaintenanceTask = (data, callback) => {
    const query = 'INSERT INTO maintenance_task SET ?';
    db.query(query, data, callback);
};

// Get all maintenance tasks
exports.getAllMaintenanceTasks = (callback) => {
    const query = 'SELECT * FROM maintenance_task';
    db.query(query, callback);
};

// Get a maintenance task by ID
exports.getMaintenanceTaskById = (id, callback) => {
    const query = 'SELECT * FROM maintenance_task WHERE id = ?';
    db.query(query, [id], callback);
};

// Update a maintenance task by ID
exports.updateMaintenanceTaskById = (id, data, callback) => {
    const query = 'UPDATE maintenance_task SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
};

// Delete a maintenance task by ID
exports.deleteMaintenanceTaskById = (id, callback) => {
    const query = 'DELETE FROM maintenance_task WHERE id = ?';
    db.query(query, [id], callback);
};
