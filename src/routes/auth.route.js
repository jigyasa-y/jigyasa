import express from "express";
import { login,logout } from "../controllers/auth.controller.js";


const authRoute=express.Router();

authRoute.post("/login",login);
authRoute.post("/logout",logout);

export default authRoute;

/*
**TimeX Backend – Work Summary (So Far)**

So far in the TimeX project, the initial backend foundation has been set up. PostgreSQL was installed and configured, and a database was created to store application data. A connection between the Node.js backend and the PostgreSQL database was successfully established.

The basic authentication system was then implemented. This included creating the users table, developing login functionality, validating passwords using bcrypt, and generating JWT tokens for authenticated sessions. The tokens are stored securely using HTTP-only cookies.

To secure the APIs, authentication middleware was created to verify logged-in users before allowing access to protected routes. Role-based access control was also implemented to support different user types such as Admin, HR, Manager, and Employee.

Additionally, a user registration feature was developed where Admin and HR users can create new employee accounts. This includes input validation, duplicate email checking, password hashing, and storing the user in the database.

Logout functionality was also implemented by clearing the authentication cookie. The initial system setup also includes a plan for creating the first admin account manually so that further users can be added through the system.

Overall, the core backend authentication and user management system has been completed, providing a secure base for building additional modules like attendance tracking, leave management, and dashboard features.
*/



