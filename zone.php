<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gambling</title>
    <link rel="stylesheet" href="css/index.css">
    <script src="js/script.js"></script>
</head>
<body onload="table()">
  <?php
    include("connect.php");
  ?>
  <script>
    console.log(<?php echo $var;?>);
  </script>
    <div class="container">
        <h1>Gambling Temple</h1>
        <p>Entrez une somme d'argent et cliquez sur les cercles pour essayer de gagner une somme énorme.</p>
        <input type="number" id="amount" placeholder="Entrez votre somme" min="1">
        <button onclick="startGame()">Jouer</button>
        <div class="circles" id="circles"></div>
        <div class="result" id="result"></div>
    </div>
</body>
</html>