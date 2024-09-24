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

			// Log the generated token for debbuging
			console.log("Generated Token:", token);
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

{/*
exports.updateUserById = (req, res) => {
	const { id } = req.params;
	const data = req.body;
	console.log("Updating user with ID:", id); // for debugging purpose
	console.log("Data to update:", data); // for debugging
	User.updateById(id, data, (err, result) => {
		if (err) {
			console.error("Error during update:", err); // debug
			res.status(500).send(err);
		} else {
			console.log("Update result:", result); // debug
			res.status(200).send(result);
		}
	});
};
*/}

exports.updateUserById = (req, res) => {
    const { id } = req.params;
    const data = req.body;

    // First, update the user information (in the 'users' table)
    User.updateById(id, data, (err, result) => {
        if (err) {
            console.error("Error updating user:", err);
            return res.status(500).send("Error updating user");
        }
        
        console.log("User updated successfully:", result);

        // Handle technician-specific fields if the role is changed to 'technician'
        if (data.role === 'technician') {
            const technicianData = {
                user_id: id,  // Ensuring correct linkage to the user
                specialization: data.specialization,
                experience_level: data.experience_level,
                status: data.status || 'available',
                assigned_tasks: data.assigned_tasks || null  // Default to null if no tasks
            };
            
            // Check if a technician record exists for this user
            Technician.getTechnicianByUserId(id, (techErr, technician) => {
                if (techErr) {
                    console.error("Error checking technician existence:", techErr);
                    return res.status(500).send("Error checking technician existence");
                }

                if (!technician) {
                    // Technician record doesn't exist, create a new one
                    Technician.createTechnician(technicianData, (createErr, createResult) => {
                        if (createErr) {
                            console.error("Error creating technician:", createErr);
                            return res.status(500).send("Error creating technician");
                        }

                        console.log("Technician created successfully:", createResult);
                        return res.status(200).send("User updated and technician created successfully");
                    });
                } else {
                    // Technician record exists, update it
                    Technician.updateTechnicianById(technician.id, technicianData, (updateErr, updateResult) => {
                        if (updateErr) {
                            console.error("Error updating technician:", updateErr);
                            return res.status(500).send("Error updating technician");
                        }

                        console.log("Technician updated successfully:", updateResult);
                        return res.status(200).send("User and technician updated successfully");
                    });
                }
            });
        } else {
            // If the role is not technician, only update the user
            return res.status(200).send("User updated successfully");
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
