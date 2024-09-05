const express = require('express');
const router = express.Router();
const technicianController = require('../controllers/technicianController');

// Create a new technician
router.post('/', technicianController.registerTechnician);

// Get all technicians
router.get('/', technicianController.getAllTechnicians);

// Get a single technician by ID
router.get('/:id', technicianController.getTechnicianById);

// Update a technician by ID
router.put('/:id', technicianController.updateTechnicianById);

// Delete a technician by ID
router.delete('/:id', technicianController.deleteTechnicianById);

module.exports = router;
