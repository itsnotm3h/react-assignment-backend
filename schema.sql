CREATE DATABASE db_dreamvault;

USE db_dreamvault;

-- Product Table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    created_at DATETIME DEFAULT NOW()
);

CREATE TABLE marketing_preferences(
    id INT AUTO_INCREMENT PRIMARY KEY,
    preference VARCHAR(50) NOT NULL
);

CREATE TABLE user_marketing_preferences(
    id INT AUTO_INCREMENT PRIMARY KEY,
    users_id INT NOT NULL,
    preference_id INT NOT NULL,
    FOREIGN KEY(users_id) REFERENCE users(id) ON DELETE CASCADE;
    FOREIGN KEY(preference_id) REFERENCE marketing_preferences(id) ON DELETE CASCADE;
);