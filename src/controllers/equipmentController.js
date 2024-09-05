const Equipment = require('../models/equipmentModel');

// Create new equipment
exports.createEquipment = (req, res) => {
    Equipment.create(req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(result);
        }
    });
};

// Get all equipment
exports.getAllEquipment = (req, res) => {
    Equipment.getAll((err, equipment) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(equipment);
        }
    });
};

// Get a single equipment by ID
exports.getEquipmentById = (req, res) => {
    const { id } = req.params;
    Equipment.getById(id, (err, equipment) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(equipment);
        }
    });
};

// Update equipment by ID
exports.updateEquipment = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Equipment.updateById(id, data, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};

// Delete equipment by ID
exports.deleteEquipment = (req, res) => {
    const { id } = req.params;
    Equipment.deleteById(id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};
