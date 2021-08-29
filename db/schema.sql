DROP DATABASE IF EXISTS hangman_db;
CREATE DATABASE hangman_db;
USE hangman_db;
CREATE TABLE hangman (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    word VARCHAR(50) NOT NULL
)
INSERT INTO hangman (id, word)
VALUES
    (1, "cat")
    (2, "dog")
    (3, "tomato")
