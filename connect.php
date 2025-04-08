<?php
define ('db_host', getenv('SERVEUR_BD'))
define ('db_user', getenv('LOGIN_BD'))
define ('db_password', getenv('PASS_BD'))
define ('db_db', getenv('NOM_BD'))
try {
    // Connexion à la base de données avec PDO
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_db;charset=utf8", $db_user, $db_password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $var = "'Connexion réussie !'";
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
?>
