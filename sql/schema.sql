DROP DATABASE IF EXISTS gift_db;

CREATE DATABASE gift_db;

USE gift_db;

CREATE TABLE items (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    price INT NOT NULL,
    description VARCHAR(30),
    link VARCHAR(30),
);