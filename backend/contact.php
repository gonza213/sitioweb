<?php

include('./conexion.php');


$datos = array(
    'nombre' => $_POST['nombre'],
    'email' => $_POST['email'],
    'tel' => $_POST['tel'],
    'asunto' => $_POST['asunto'],
    'mensaje' => $_POST['mensaje'],
);

$tabla = 'contactos';

$stmt = Conexion::conectar()->prepare("INSERT INTO $tabla(nombre, email, tel, asunto, mensaje) VALUES (:nombre, :email, :tel, :asunto, :mensaje)");

$stmt->bindParam(":nombre", $datos["nombre"], PDO::PARAM_STR);
$stmt->bindParam(":email", $datos["email"], PDO::PARAM_STR);
$stmt->bindParam(":tel", $datos["tel"], PDO::PARAM_STR);
$stmt->bindParam(":asunto", $datos["asunto"], PDO::PARAM_STR);
$stmt->bindParam(":mensaje", $datos["mensaje"], PDO::PARAM_STR);

$stmt->execute();


echo 'Mensaje enviado';


