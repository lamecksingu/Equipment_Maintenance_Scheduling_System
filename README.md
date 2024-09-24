Equipment maintenance and scheduling system, specifically designed for Premier Agencies of Tanzania as a final year project in my ALX Software Engineering program recognized as a portifolio project
# Equipment Maintenance Scheduling System

## Introduction
The Equipment Maintenance Scheduling System is a web application designed to streamline the scheduling and management of maintenance tasks for various equipment. This system allows users to easily create, assign, and track maintenance tasks while providing technicians with real-time updates on their assignments. 

### Deployed Site
Not yet deployed in process

### Final Project Blog Article


### Author(s)
- LAMECK SINGU <singulameck9619@gmail.com>

## Installation
To install and run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lamecksingu/Equipment_Maintenance_Scheduling_System
  ### Remmember this is for back end end.
  ### Clone the front end part
  git clone https://github.com/lamecksingu/equipment_maintenance_frontend

  ### Navigate into the project directory with two different terminal windows, one for back end the other for front end
  cd Equipment_Maintenance_Scheduling_System
  cd equipment_maintenance_frontend

  ### Install the necessary dependencies:
  cd Equipment_Maintenance_Scheduling_System
  npm install

  cd equipment_maintenance_frontend
  npm install

  ### Set up environment variables:
  Create a .env file in the backend directory and add your configuration variables (e.g., database connection string).
  As I used Mysql, my database tables are as follows


  mysql> show databases;
+-----------------------+
| Database              |
+-----------------------+
| Equipment_Maintenance |
| information_schema    |
| performance_schema    |
+-----------------------+
3 rows in set (0.37 sec)

mysql> use Equipment_Maintenance;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show tables;
+---------------------------------+
| Tables_in_Equipment_Maintenance |
+---------------------------------+
| equipment                       |
| maintenance_task                |
| site                            |
| technician                      |
| users                           |
+---------------------------------+
5 rows in set (0.00 sec)

mysql> describe equipment;
+-----------------------+--------------+------+-----+---------+----------------+
| Field                 | Type         | Null | Key | Default | Extra          |
+-----------------------+--------------+------+-----+---------+----------------+
| id                    | int          | NO   | PRI | NULL    | auto_increment |
| name                  | varchar(255) | NO   |     | NULL    |                |
| location              | varchar(255) | NO   |     | NULL    |                |
| status                | varchar(255) | NO   |     | NULL    |                |
| last_maintenance_date | date         | NO   |     | NULL    |                |
| type_or_make          | varchar(255) | NO   |     | NULL    |                |
| site_id               | int          | NO   | MUL | NULL    |                |
+-----------------------+--------------+------+-----+---------+----------------+
7 rows in set (0.03 sec)

mysql> describe maintenance_task;
+----------------+--------------+------+-----+---------+----------------+
| Field          | Type         | Null | Key | Default | Extra          |
+----------------+--------------+------+-----+---------+----------------+
| id             | int          | NO   | PRI | NULL    | auto_increment |
| equipment_id   | int          | YES  | MUL | NULL    |                |
| technician_id  | int          | YES  | MUL | NULL    |                |
| scheduled_date | date         | NO   |     | NULL    |                |
| status         | varchar(255) | NO   |     | NULL    |                |
| note           | text         | YES  |     | NULL    |                |
| site_id        | int          | YES  | MUL | NULL    |                |
+----------------+--------------+------+-----+---------+----------------+

mysql> describe site;
+----------+--------------+------+-----+---------+-------+
| Field    | Type         | Null | Key | Default | Extra |
+----------+--------------+------+-----+---------+-------+
| id       | int          | NO   | PRI | NULL    |       |
| name     | varchar(255) | NO   |     | NULL    |       |
| location | varchar(255) | NO   |     | NULL    |       |
+----------+--------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

mysql> describe technician;
+------------------+--------------+------+-----+---------+----------------+
| Field            | Type         | Null | Key | Default | Extra          |
+------------------+--------------+------+-----+---------+----------------+
| id               | int          | NO   | PRI | NULL    | auto_increment |
| status           | varchar(255) | NO   |     | NULL    |                |
| assigned_tasks   | text         | YES  |     | NULL    |                |
| user_id          | int          | YES  | MUL | NULL    |                |
| specialization   | varchar(255) | NO   |     | NULL    |                |
| experience_level | varchar(255) | NO   |     | NULL    |                |
+------------------+--------------+------+-----+---------+----------------+
6 rows in set (0.00 sec)

mysql> describe users;
+------------+--------------+------+-----+-------------------+-------------------+
| Field      | Type         | Null | Key | Default           | Extra             |
+------------+--------------+------+-----+-------------------+-------------------+
| id         | int          | NO   | PRI | NULL              | auto_increment    |
| username   | varchar(45)  | NO   |     | NULL              |                   |
| password   | varchar(100) | NO   |     | NULL              |                   |
| role       | varchar(45)  | NO   |     | NULL              |                   |
| email      | varchar(100) | NO   |     | NULL              |                   |
| created_at | timestamp    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+------------+--------------+------+-----+-------------------+-------------------+
6 rows in set (0.01 sec)

### Run the application

cd Equipment_Maintenance_Scheduling_System
  npm node/src/server.js

  cd equipment_maintenance_frontend
  npm start

 ### Usage
After successfully running the application, you can access the frontend at http://localhost:3000. Here are some key functionalities:

User Registration and Login: Users can register and log in to access their dashboards.
User Management: Admins can create, edit, and delete users.

### To be impelemented
Task Management: Admins can create, edit, and delete maintenance tasks.
Technician Assignment: Admins can assign tasks to technicians based on their availability.
Real-Time Updates: Technicians receive real-time updates on their assigned tasks.
Assigned task logging: Technicians will be able to log their completed tasks and the system will updates automatically the availability of the technician after completing the task

### Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request.

### Fork the project
### Create a new branch:

git checkout -b feature/YourFeatureName

### Make your changes and commit them:

git commit -m "Add some feature"

### Push to the branch:

git push origin feature/YourFeatureName

### Open a pull request
