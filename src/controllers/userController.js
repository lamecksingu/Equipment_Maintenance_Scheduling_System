const User = require('../models/userModel');
const Technician = require('../models/technicianModel'); // A model for Technicians
const jwt = require('jsonwebtoken');

// Register a new user
exports.registerUser = (req, res) => {
	const userData = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		role: req.body.role
	};

	User.register(userData, (err, result) => {
		if (err) {
			console.log("Error registering a user:", err);
			res.status(500).send(err);
		} else {
			// If user is a technician, create an entry in the technicians table
			console.log("User registered successfully with User Id: ", result.insertId);
			if (userData.role === 'technician') {
				const technicianData = {
					user_id: result.insertId, // The ID of the newly created user
					specialization: req.body.specialization,
					experience_level: req.body.experience_level,
					status: 'available', // Default status for a new technician
					assigned_tasks: null // Default
				};
				Technician.createTechnician(technicianData, (techErr, techResult) => {
					if (techErr) {
						console.log("Error registering a technician:", techErr);
						res.status(500).send(techErr);
					} else {
						res.status(201).send("Technician registered successfully!");
					}
				});
			} else {
				res.status(201).send("User registered successfully!");
			}
		}
	});
};

// Login a user
exports.loginUser = (req, res) => {
	const { email, password } = req.body;
	User.authenticate(email, password, (err, user) => {
		if (err) {
			res.status(500).send(err);
		} else if (!user) {
			res.status(401).send("Invalid credentials");
		} else {
			const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
				expiresIn: '1h'
			});
			res.status(200).json({ token });
		}
	});
};
exports.getAllUsers = (req, res) => {
	User.getAll((err, users) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).json(users);
		}
	});
};

exports.getUserById = (req, res) => {
	const { id } = req.params;
	User.getById(id, (err, user) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).json(user);
		}
	});
};

exports.updateUserById = (req, res) => {
	const { id } = req.params;
	const data = req.body;
	User.updateById(id, data, (err, result) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(result);
		}
	});
};

exports.deleteUserById = (req, res) => {
	const { id } = req.params;
	User.deleteById(id, (err, result) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(result);
		}
	});
};
