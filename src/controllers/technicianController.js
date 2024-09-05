const Technician = require('../models/technicianModel');

// Create a new technician
exports.registerTechnician = (req, res) => {
    Technician.createTechnician(req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(result);
        }
    });
};

// Get all technicians
exports.getAllTechnicians = (req, res) => {
    Technician.getAllTechnicians((err, technicians) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(technicians);
        }
    });
};

// Get a technician by ID
exports.getTechnicianById = (req, res) => {
    const { id } = req.params;
    Technician.getTechnicianById(id, (err, technician) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(technician);
        }
    });
};

// Update a technician by ID
exports.updateTechnicianById = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Technician.updateTechnicianById(id, data, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};

// Delete a technician by ID
exports.deleteTechnicianById = (req, res) => {
    const { id } = req.params;
    Technician.deleteTechnicianById(id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};
