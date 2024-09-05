const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

// Create a new site
router.post('/', siteController.createSite);

// Get all sites
router.get('/', siteController.getAllSites);

// Get a single site by ID
router.get('/:id', siteController.getSiteById);

// Update a site by ID
router.put('/:id', siteController.updateSite);

// Delete a site by ID
router.delete('/:id', siteController.deleteSite);

module.exports = router;
