-- Crear la base de datos
CREATE DATABASE registroUsuarios CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

SELECT * FROM usuarios;
-- Usar la base de datos
USE registroUsuarios;

-- Crear la tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE USER 'usuario1'@'localhost' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON registroUsuarios.* TO 'usuario1'@'localhost';
FLUSH PRIVILEGES;
