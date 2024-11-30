# Role-Based API with Redis Sessions

This is a role-based API that handles user authentication, authorization, and session management using Redis. The API uses Redis sessions for secure authentication and includes role-based access control to restrict access to certain endpoints based on user roles (admin, user, moderator).

# Deployed on AWS EC2 - [http://3.108.150.30/api-docs/](http://3.108.150.30/api-docs/) (Swagger Docs Available)

## Features
- User registration, login, and logout functionality
- Role-based access control (admin, user, guest)
- Redis session management for secure user authentication
- API documentation generated with Swagger

## Technologies Used
- **Express**: Web framework for Node.js
- **MongoDB**: Database for storing user data
- **Redis**: Session store
- **Swagger**: API documentation
- **Bcrypt**: For password hashing
- **express-session**: For secure authentication
- **Node.js**: JavaScript runtime

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Redis](https://redis.io/) (local or cloud instance)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Samar-28/RBAC.git
2. Go to project:
   ```bash
   cd RBAC
3. Install Dependencies:
   ```bash
   npm i
4. Create .env:
   ```bash
   MONGO_URI=
   SESSION_SECRET=
   REDIS_HOST=
   REDIS_PORT=
   PORT=
5. Start the server:
   ```bash
   npm start
6. Access the API documentation at [http://localhost:5000/api-docs](http://localhost:5000/api-docs)
