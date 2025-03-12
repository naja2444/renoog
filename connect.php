<?php
$db_host = 'localhost';
$db_user = 'root';
$db_password = 'root';
$db_db = 'utilisateurs';

try {
    // Connexion à la base de données avec PDO
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_db;charset=utf8", $db_user, $db_password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $var = "'Connexion réussie !'";
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
?>
