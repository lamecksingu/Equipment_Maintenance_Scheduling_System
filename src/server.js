const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./db');  // Import the database connection
const equipmentRoutes = require('./routes/equipmentRoutes'); // Correctly importing equipmentRoutes
const authRoutes = require('./routes/authRoutes'); // import authRoutes
const siteRoutes = require('./routes/siteRoutes'); // import siteRoute
const userRoutes = require('./routes/userRoutes'); // import userRoute
const technicianRoutes = require('./routes/technicianRoutes'); // import technician route
const maintenanceTaskRoutes = require('./routes/maintenanceTaskRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(morgan('dev'));  // Logging
app.use(bodyParser.json());  // Parsing JSON request bodies

// Example route
app.get('/', (req, res) => {
    res.send('Welcome to the Equipment Maintenance and Scheduling System!');
});

// Register the authentication routes
app.use('/api/auth', authRoutes);

// Register the equipment routes
app.use('/api/equipment', equipmentRoutes);

// Register site route
app.use('/api/sites', siteRoutes);

// Register user route
app.use('/api/users', userRoutes);

// Register technician route
app.use('/api/technicians', technicianRoutes);

// Register Maintenance Task route
app.use('/api/maintenance_tasks', maintenanceTaskRoutes);

// Error handling middleware (Optional but recommended)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
