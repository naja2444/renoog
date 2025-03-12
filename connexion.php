<?php
require 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pseudo = trim($_POST["pseudo"]);

    if (!empty($pseudo)) {
        try {
            $stmt = $pdo->prepare("INSERT INTO casino (pseudo, balance) VALUES (:pseudo, :balance)");
            $balance = 0; 
            $stmt->bindParam(':pseudo', $pseudo, PDO::PARAM_STR);
            $stmt->bindParam(':balance', $balance, PDO::PARAM_INT);
            $stmt->execute();
            header("Location: zone.php");
            exit();
        } catch (PDOException $e) {
            if ($e->getCode() == 23000) {
                echo "Ce pseudo est déjà pris.";
            } else {
                echo "Erreur : " . $e->getMessage();
            }
        }
    } else {
        echo "Veuillez entrer un pseudo.";
    }
}
?>
