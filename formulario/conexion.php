<?php
$host = 'localhost: 3307';
$dbname = 'registro_db';  // Nombre de la base de datos
$username = 'root';       // Usuario por defecto
$password = '';           // Contraseña (puede estar vacía en algunos entornos locales)

// Crear conexión
$conexion = new mysqli($host, $username, $password, $dbname);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}
?>
