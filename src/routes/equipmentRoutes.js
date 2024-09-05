const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// Create new equipment(Admin Only)
router.post('/', verifyToken, isAdmin, equipmentController.createEquipment);

// Get all equipment (All users)
router.get('/', verifyToken, equipmentController.getAllEquipment);

// Get a single equipment by ID (All Users)
router.get('/:id', verifyToken, equipmentController.getEquipmentById);

// Update equipment by ID (Admin Only)
router.put('/:id', verifyToken, isAdmin, equipmentController.updateEquipment);

// Delete equipment by ID (Admin Only)
router.delete('/:id', verifyToken, isAdmin, equipmentController.deleteEquipment);

module.exports = router;
