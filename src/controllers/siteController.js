const Site = require('../models/siteModel');

// Create a new site
exports.createSite = (req, res) => {
    Site.create(req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(result);
        }
    });
};

// Get all sites
exports.getAllSites = (req, res) => {
    Site.getAll((err, sites) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(sites);
        }
    });
};

// Get a site by ID
exports.getSiteById = (req, res) => {
    const { id } = req.params;
    Site.getById(id, (err, site) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(site);
        }
    });
};

// Update a site by ID
exports.updateSite = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Site.updateById(id, data, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};

// Delete a site by ID
exports.deleteSite = (req, res) => {
    const { id } = req.params;
    Site.deleteById(id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};
