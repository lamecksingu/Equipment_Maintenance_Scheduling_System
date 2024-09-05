const express = require('express');
const router = express.Router();
const maintenanceTaskController = require('../controllers/maintenanceTaskController');

// Create a new maintenance task
router.post('/', maintenanceTaskController.createMaintenanceTask);

// Get all maintenance tasks
router.get('/', maintenanceTaskController.getAllMaintenanceTasks);

// Get a single maintenance task by ID
router.get('/:id', maintenanceTaskController.getMaintenanceTaskById);

// Update a maintenance task by ID
router.put('/:id', maintenanceTaskController.updateMaintenanceTaskById);

// Delete a maintenance task by ID
router.delete('/:id', maintenanceTaskController.deleteMaintenanceTaskById);

module.exports = router;
