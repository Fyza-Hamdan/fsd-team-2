-- Filename: createUsersTable.sql
-- Objective: Transact-SQL script to create the credentialsDatabase.
-- Developer: Michael Tan Kok Liang
-- Date: 10/12/2024

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY, -- primary key
    name VARCHAR(100) NOT NULL, -- User's name
    email VARCHAR(100) NOT NULL, -- User's email
    password VARCHAR(50) NOT NULL -- User's contact
);