# User CRUD Application
## This is a CRUD (Create, Read, Update, Delete) application built using Java, Spring Boot, PostgreSQL, and React.
(Docker instructions in the end).

## Backend
The backend code is implemented using Java and Spring Boot, and it provides <br />
REST API endpoints for performing CRUD operations on a User entity. <br />
The code includes a controller class named UserController, which defines the API endpoints for the application. <br />
The User entity class contains attributes such as first_name, last_name, email, age, and hobbies.<br />

### The following endpoints are implemented:

GET /api/users - Retrieves all users.<br />
GET /api/users/{id} - Retrieves a specific user by ID.<br />
GET /api/users/?first_name=XXX&last_name=YYY - Retrieves a user by first name and/or last name.<br />
POST /api/users - Adds a new user.<br />
PUT /api/users/{id} - Updates an existing user.<br />
DELETE /api/users/{id} - Deletes a specific user by ID.<br />

The backend code includes a PostgreSQL database configuration, which is defined in the application.properties file. <br />
The application uses the Spring Data JPA library to interact with the database. <br />
The UserRepository interface extends the JpaRepository interface, which provides basic CRUD operations on the User entity.<br />

## Frontend
### The frontend code is implemented using React and it provides a user interface for the application. <br />
The UI allows the user to perform CRUD operations on the User entity. <br />
The application includes a navigation menu with links to view all users and add a new user. <br />
The home page displays all users in a table format. <br />
The user can select a user from the table to view their details or update/delete the user.<br />

The frontend code uses the axios library to make HTTP requests to the backend API.<br />
## Components
### The app has the following components:
User - a component that displays a single user's details<br />
Dropdown - a component that displays a dropdown list of users<br />
NewUser - a component that allows you to add a new user<br />
DeleteUserByID - a component that allows you to delete a user by ID<br />

## Database
The application uses a PostgreSQL database to store user data. <br />
The User entity class is mapped to a users table in the database. <br />
The table includes columns for the id, first_name, last_name, email, age, and hobbies attributes.<br />

## Running the Application
### To run the application, follow these steps:

Clone the repository to your local machine.<br />
Open a terminal and navigate to the project root directory.<br />
Run mvn clean install to build the application.<br />

Run userCrudApplication from src/main/java/com.usercrud.usercrud/UserCrudApplication<br />
Open http://localhost:3000 to view it in the browser.<br />

## To run the application with docker:
Make sure you have Docker installed in your machine.<br />
Copy docker-compose.yml to a new folder.<br />
Open a terminal and navigate to the new folder.<br />
Run command 'docker-compose up'<br />
This command will create 3 containers, 1 for the javaspring backend, 1 for the react frontend, 1 for the postgres db<br />
and create a shared space for the containers to communicate with each other.<br />
Open http://localhost:3000 to view it in the browser.<br />



