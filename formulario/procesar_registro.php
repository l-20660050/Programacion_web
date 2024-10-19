<?php
include 'conexion.php';  // Incluir archivo de conexión

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hashear el password
    $telefono = $_POST['telefono'];

    // Validar campos (ejemplo de validación básica)
    if (empty($nombre) || empty($email) || empty($password) || empty($telefono)) {
        die("Todos los campos son obligatorios.");
    }

    // Preparar consulta SQL
    $sql = "INSERT INTO usuarios (nombre, email, password, telefono) VALUES (?, ?, ?, ?)";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("ssss", $nombre, $email, $password, $telefono);

    // Ejecutar la consulta y verificar si fue exitosa
    if ($stmt->execute()) {
        echo "Registro exitoso.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Cerrar la conexión
    $stmt->close();
    $conexion->close();
}
?>
