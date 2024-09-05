const MaintenanceTask = require('../models/maintenanceTaskModel');

// Create a new maintenance task
exports.createMaintenanceTask = (req, res) => {
    MaintenanceTask.createMaintenanceTask(req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(result);
        }
    });
};

// Get all maintenance tasks
exports.getAllMaintenanceTasks = (req, res) => {
    MaintenanceTask.getAllMaintenanceTasks((err, tasks) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(tasks);
        }
    });
};

// Get a maintenance task by ID
exports.getMaintenanceTaskById = (req, res) => {
    const { id } = req.params;
    MaintenanceTask.getMaintenanceTaskById(id, (err, task) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(task);
        }
    });
};

// Update a maintenance task by ID
exports.updateMaintenanceTaskById = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    MaintenanceTask.updateMaintenanceTaskById(id, data, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};

// Delete a maintenance task by ID
exports.deleteMaintenanceTaskById = (req, res) => {
    const { id } = req.params;
    MaintenanceTask.deleteMaintenanceTaskById(id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};
