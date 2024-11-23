USE db_dreamvault
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
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE marketing_preferences(
    id INT AUTO_INCREMENT PRIMARY KEY,
    preference VARCHAR(50) NOT NULL
);

CREATE TABLE user_marketing_preferences(
    id INT AUTO_INCREMENT PRIMARY KEY,
    users_id INT NOT NULL,
    preference_id INT NOT NULL,
    FOREIGN KEY(users_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY(preference_id) REFERENCES marketing_preferences(id) ON DELETE CASCADE
);

CREATE TABLE cart_items(
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE orders(
id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT NOT NULL,
total DECIMAL(10,2) NOT NULL,
status ENUM('pending','cancelled','completed') DEFAULT 'pending',
checkout_session_id VARCHAR (255),
created_at DATETIME DEFAULT NOW(),
FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
id INT AUTO_INCREMENT PRIMARY KEY,
order_id INT NOT NULL,
product_id INT NOT NULL,
quantity INT NOT NULL DEFAULT 1,
FOREIGN KEY(order_id) REFERENCES orders(id),
FOREIGN KEY(product_id) REFERENCES products(id)
);