function table(){
    const circlesContainer = document.getElementById('circles');
    circlesContainer.innerHTML = ''; 
    let circles = [];
    for (let i = 0; i < 9; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.onclick = () => handleCircleClick(circle, i);
        circles.push(circle);
        circlesContainer.appendChild(circle);
    }
}


function startGame() {

    const circlesContainer = document.getElementById('circles');
    circlesContainer.innerHTML = ''; 
    let circles = [];
    for (let i = 0; i < 9; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.onclick = () => handleCircleClick(circle, i);
        circles.push(circle);
        circlesContainer.appendChild(circle);
    }
    var amount = parseInt(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert("Veuillez entrer une somme valide.");
        return;
    }
    const winningCircleIndex = Math.floor(Math.random() * 9);

    let gameStarted = false;

    function handleCircleClick(circle, index) {
        if (gameStarted) {
            return;
        }

        circles.forEach((el, idx) => {
            if (idx === winningCircleIndex) {
                el.classList.add('green');
            } else {
                el.classList.add('red');
            }
        });
        var gain = amount * Math.floor((Math.random()*10))
        if(gain < 2*amount){
            gain = 2*amount;
        }
        const resultElement = document.getElementById('result');
        if (index === winningCircleIndex) {
            resultElement.textContent = `Bravo vous avez gagné ${gain}€ ! Rejouez pour continuer sur cette lancée !`;
        } else {
            resultElement.textContent = `Dommage, vous avez perdu... Réessayez !`;
        }

        gameStarted = true;
    }
}
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let pseudo = document.getElementById("pseudo").value;
    let message = document.getElementById("message");

    fetch("./connexion.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "pseudo=" + encodeURIComponent(pseudo)
    })
    .then(response => response.text())
    .then(data => {
        message.textContent = data;
    })
    .catch(error => {
        message.textContent = "Erreur lors de l'inscription.";
    });
});


