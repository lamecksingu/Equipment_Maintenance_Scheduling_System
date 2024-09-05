const mysql = require('mysql2');
require('dotenv').config();

// Create a connection to the database
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT
});

// Connect to the database
connection.connect((err) => {
	if (err) {
		console.error('Error connecting to the database:', err.stack);
		return;
	}
	console.log('Connected to the MySQL database.');
});

module.exports = connection;
